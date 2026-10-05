-- Clean up existing data if any
TRUNCATE TABLE notifications, audit_log, entry_comments, approvals, attachments, purchase_items, purchase_entries, supplier_products, products, suppliers, users CASCADE;

-- Insert auth users first
INSERT INTO auth.users (
  instance_id, id, aud, role, email, encrypted_password, email_confirmed_at, 
  raw_app_meta_data, raw_user_meta_data, created_at, updated_at, confirmation_token, email_change, email_change_token_new, recovery_token
) VALUES
('00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000001', 'authenticated', 'authenticated', 'admin@example.com', crypt('password123', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', ''),
('00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000002', 'authenticated', 'authenticated', 'staff@example.com', crypt('password123', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', ''),
('00000000-0000-0000-0000-000000000000', '00000000-0000-0000-0000-000000000003', 'authenticated', 'authenticated', 'supplier1@example.com', crypt('password123', gen_salt('bf')), now(), '{"provider":"email","providers":["email"]}', '{}', now(), now(), '', '', '', '');

-- Insert public users
INSERT INTO users (id, role, full_name, email, locale, status) VALUES 
('00000000-0000-0000-0000-000000000001', 'admin', 'Admin User', 'admin@example.com', 'en', 'active'),
('00000000-0000-0000-0000-000000000002', 'staff', 'Staff User', 'staff@example.com', 'en', 'active'),
('00000000-0000-0000-0000-000000000003', 'supplier', 'Supplier One', 'supplier1@example.com', 'en', 'active')
ON CONFLICT (id) DO UPDATE SET 
  role = EXCLUDED.role, 
  full_name = EXCLUDED.full_name, 
  email = EXCLUDED.email, 
  locale = EXCLUDED.locale, 
  status = EXCLUDED.status;

-- Insert suppliers
INSERT INTO suppliers (id, user_id, business_name, contact_name, phone, gst_number, address, payment_terms_days) VALUES
('11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000003', 'Acme Supplies', 'John Doe', '+919876543212', '27AADCB2230M1Z2', '123 Acme St, Mumbai', 30);

-- Insert products
INSERT INTO products (id, name, sku, base_uom, default_tax_rate, hsn_code) VALUES
('22222222-2222-2222-2222-222222222221', 'Widget A', 'WID-A', 'piece', 18.00, '84818090'),
('22222222-2222-2222-2222-222222222222', 'Bulk Material B', 'BLK-B', 'kg', 5.00, '25232910');

-- Insert supplier_products
INSERT INTO supplier_products (supplier_id, product_id, supplier_item_name, purchase_uom, conversion_factor, agreed_unit_price, effective_from) VALUES
('11111111-1111-1111-1111-111111111111', '22222222-2222-2222-2222-222222222221', 'Acme Widget A', 'box', 10.0000, 1500.00, '2026-01-01');
