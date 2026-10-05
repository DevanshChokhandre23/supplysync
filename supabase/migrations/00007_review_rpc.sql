-- 00007_review_rpc.sql
CREATE OR REPLACE FUNCTION review_purchase_entry(
    p_entry_id uuid,
    p_decision approval_decision,
    p_reason text,
    p_items jsonb, 
    p_actor_id uuid,
    p_ip inet
) RETURNS void AS $$
DECLARE
    v_current_status entry_status;
    
    item jsonb;
    v_item_id uuid;
    v_qty_app numeric(14,3);
    v_res text;
    v_db_qty_sub numeric(14,3);
BEGIN
    IF public.current_user_role() NOT IN ('admin', 'staff') THEN
        RAISE EXCEPTION 'Unauthorized: only admin or staff can review entries';
    END IF;

    SELECT status INTO v_current_status
    FROM purchase_entries
    WHERE id = p_entry_id;

    IF v_current_status IS NULL THEN
        RAISE EXCEPTION 'Purchase entry not found';
    END IF;

    IF v_current_status <> 'pending' THEN
        RAISE EXCEPTION 'Only pending entries can be reviewed. Current status: %', v_current_status;
    END IF;

    IF p_decision IN ('partial', 'rejected') AND (p_reason IS NULL OR trim(p_reason) = '') THEN
        RAISE EXCEPTION 'Reason is required for partial approval or rejection';
    END IF;

    IF p_decision = 'rejected' THEN
        UPDATE purchase_entries SET status = 'rejected' WHERE id = p_entry_id;
        
    ELSIF p_decision = 'approved' THEN
        UPDATE purchase_items 
        SET quantity_approved = quantity_submitted 
        WHERE purchase_entry_id = p_entry_id;
        
        UPDATE purchase_entries 
        SET status = 'approved'
        WHERE id = p_entry_id;
        
    ELSIF p_decision = 'partial' THEN
        IF p_items IS NULL OR jsonb_array_length(p_items) = 0 THEN
            RAISE EXCEPTION 'Items array required for partial approval';
        END IF;

        FOR item IN SELECT * FROM jsonb_array_elements(p_items)
        LOOP
            v_item_id := (item->>'item_id')::uuid;
            v_qty_app := (item->>'quantity_approved')::numeric;
            v_res := item->>'shortfall_resolution';

            SELECT quantity_submitted
            INTO v_db_qty_sub
            FROM purchase_items
            WHERE id = v_item_id AND purchase_entry_id = p_entry_id;

            IF v_qty_app < 0 OR v_qty_app > v_db_qty_sub THEN
                RAISE EXCEPTION 'Invalid approved quantity for item %', v_item_id;
            END IF;

            IF v_qty_app < v_db_qty_sub AND (v_res IS NULL OR v_res = '') THEN
                RAISE EXCEPTION 'Shortfall resolution required for short lines (item %)', v_item_id;
            END IF;

            UPDATE purchase_items
            SET quantity_approved = v_qty_app,
                shortfall_resolution = CASE WHEN v_res IS NOT NULL AND v_res <> '' THEN v_res::shortfall_resolution ELSE NULL END
            WHERE id = v_item_id;
        END LOOP;

        UPDATE purchase_entries 
        SET status = 'partially_approved'
        WHERE id = p_entry_id;
    END IF;

    INSERT INTO approvals (purchase_entry_id, reviewed_by, decision, reason)
    VALUES (p_entry_id, p_actor_id, p_decision, p_reason);

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff, ip)
    VALUES (
        p_actor_id,
        CASE WHEN p_decision = 'rejected' THEN 'reject'::audit_action ELSE 'approve'::audit_action END,
        'purchase_entries',
        p_entry_id,
        jsonb_build_object('decision', p_decision, 'reason', p_reason),
        p_ip
    );

END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
