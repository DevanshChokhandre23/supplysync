-- 00005_purchase_rpc.sql
CREATE OR REPLACE FUNCTION create_purchase_entry(
    p_supplier_id uuid,
    p_created_by uuid,
    p_source entry_source,
    p_invoice_number text,
    p_invoice_date date,
    p_received_at timestamptz,
    p_notes text,
    p_items jsonb, 
    p_attachments jsonb, 
    p_actor_id uuid,
    p_ip inet
) RETURNS uuid AS $$
DECLARE
    v_entry_id uuid;
    item jsonb;
    att jsonb;
BEGIN
    INSERT INTO purchase_entries (
        supplier_id, created_by, source, invoice_number, invoice_date, 
        received_at, notes, status, submitted_at
    )
    VALUES (
        p_supplier_id, p_created_by, p_source, p_invoice_number, p_invoice_date,
        p_received_at, p_notes, 'pending', now()
    )
    RETURNING id INTO v_entry_id;

    FOR item IN SELECT * FROM jsonb_array_elements(p_items)
    LOOP
        INSERT INTO purchase_items (
            purchase_entry_id, product_name, purchase_uom, quantity_submitted
        )
        VALUES (
            v_entry_id, item->>'product_name', item->>'purchase_uom', (item->>'quantity_submitted')::numeric
        );
    END LOOP;

    IF p_attachments IS NOT NULL AND jsonb_array_length(p_attachments) > 0 THEN
        FOR att IN SELECT * FROM jsonb_array_elements(p_attachments)
        LOOP
            INSERT INTO attachments (
                purchase_entry_id, storage_path, uploaded_by, kind
            )
            VALUES (
                v_entry_id, att->>'storage_path', p_created_by, (att->>'kind')::attachment_kind
            );
        END LOOP;
    END IF;

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff, ip)
    VALUES (
        p_actor_id, 
        'create', 
        'purchase_entries', 
        v_entry_id, 
        jsonb_build_object(
            'invoice_number', p_invoice_number,
            'items_count', jsonb_array_length(p_items)
        ), 
        p_ip
    );

    RETURN v_entry_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
