-- RPC for creating a supplier
CREATE OR REPLACE FUNCTION create_supplier_with_audit(
    p_user_id uuid,
    p_business_name text,
    p_contact_name text,
    p_phone text,
    p_address text,
    p_actor_id uuid
) RETURNS uuid AS $$
DECLARE
    v_supplier_id uuid;
    v_diff jsonb;
BEGIN
    INSERT INTO suppliers (user_id, business_name, contact_name, phone, address)
    VALUES (p_user_id, p_business_name, p_contact_name, p_phone, p_address)
    RETURNING id INTO v_supplier_id;

    v_diff := jsonb_build_object(
        'business_name', p_business_name,
        'contact_name', p_contact_name,
        'phone', p_phone,
        'address', p_address
    );

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff)
    VALUES (p_actor_id, 'create', 'suppliers', v_supplier_id, v_diff);

    RETURN v_supplier_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- RPC for updating a supplier
CREATE OR REPLACE FUNCTION update_supplier_with_audit(
    p_supplier_id uuid,
    p_business_name text,
    p_contact_name text,
    p_phone text,
    p_address text,
    p_status text,
    p_actor_id uuid
) RETURNS void AS $$
DECLARE
    v_diff jsonb;
BEGIN
    v_diff := jsonb_build_object(
        'business_name', p_business_name,
        'contact_name', p_contact_name,
        'phone', p_phone,
        'address', p_address,
        'status', p_status
    );

    UPDATE suppliers
    SET business_name = p_business_name,
        contact_name = p_contact_name,
        phone = p_phone,
        address = p_address,
        status = p_status::supplier_status
    WHERE id = p_supplier_id;

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff)
    VALUES (p_actor_id, 'update', 'suppliers', p_supplier_id, v_diff);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Similar for products
CREATE OR REPLACE FUNCTION create_product_with_audit(
    p_name text,
    p_sku text,
    p_base_uom text,
    p_actor_id uuid
) RETURNS uuid AS $$
DECLARE
    v_product_id uuid;
    v_diff jsonb;
BEGIN
    INSERT INTO products (name, sku, base_uom)
    VALUES (p_name, NULLIF(p_sku, ''), p_base_uom)
    RETURNING id INTO v_product_id;

    v_diff := jsonb_build_object(
        'name', p_name,
        'sku', p_sku,
        'base_uom', p_base_uom
    );

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff)
    VALUES (p_actor_id, 'create', 'products', v_product_id, v_diff);

    RETURN v_product_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION update_product_with_audit(
    p_product_id uuid,
    p_name text,
    p_sku text,
    p_base_uom text,
    p_status text,
    p_actor_id uuid
) RETURNS void AS $$
DECLARE
    v_diff jsonb;
BEGIN
    v_diff := jsonb_build_object(
        'name', p_name,
        'sku', p_sku,
        'base_uom', p_base_uom,
        'status', p_status
    );

    UPDATE products
    SET name = p_name,
        sku = NULLIF(p_sku, ''),
        base_uom = p_base_uom,
        status = p_status::product_status
    WHERE id = p_product_id;

    INSERT INTO audit_log (actor_id, action, entity_type, entity_id, diff)
    VALUES (p_actor_id, 'update', 'products', p_product_id, v_diff);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
