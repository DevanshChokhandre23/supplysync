-- rls_isolation.test.sql
-- This script outlines how we test RLS Isolation.

BEGIN;

-- 1. Create a mock user mapping
-- Admin: 00000000-0000-0000-0000-000000000001
-- Supplier 1: 00000000-0000-0000-0000-000000000003
-- Supplier 2: 00000000-0000-0000-0000-000000000004 (create this)

INSERT INTO users (id, role, full_name, email, locale, status) VALUES 
('00000000-0000-0000-0000-000000000004', 'supplier', 'Supplier Two', 'supplier2@example.com', 'en', 'active')
ON CONFLICT (id) DO UPDATE SET 
  role = EXCLUDED.role, 
  full_name = EXCLUDED.full_name, 
  email = EXCLUDED.email, 
  locale = EXCLUDED.locale, 
  status = EXCLUDED.status;

INSERT INTO suppliers (id, user_id, business_name, contact_name, phone) VALUES
('44444444-4444-4444-4444-444444444444', '00000000-0000-0000-0000-000000000004', 'Beta Supplies', 'Jane Doe', '+919876543213');

-- Insert a purchase entry for Supplier 1
INSERT INTO purchase_entries (id, supplier_id, created_by, source, invoice_number, invoice_date, status)
VALUES ('55555555-5555-5555-5555-555555555555', '11111111-1111-1111-1111-111111111111', '00000000-0000-0000-0000-000000000003', 'supplier', 'INV-001', '2026-01-01', 'pending');

-- 2. Test Supplier 2 accessing Supplier 1's data
-- Impersonate Supplier 2
SET LOCAL role authenticated;
SET LOCAL "request.jwt.claim.sub" = '00000000-0000-0000-0000-000000000004'; -- Supplier 2's User ID

-- Should return 0 rows since Supplier 2 cannot see Supplier 1's entries
DO $$
DECLARE count_entries int;
BEGIN
    SELECT count(*) INTO count_entries FROM purchase_entries;
    ASSERT count_entries = 0, 'RLS FAILURE: Supplier 2 can see Supplier 1''s entry';
END$$;

-- 3. Test Admin accessing everything
SET LOCAL "request.jwt.claim.sub" = '00000000-0000-0000-0000-000000000001'; -- Admin User ID

DO $$
DECLARE count_entries int;
BEGIN
    SELECT count(*) INTO count_entries FROM purchase_entries;
    ASSERT count_entries = 1, 'RLS FAILURE: Admin cannot see all entries';
END$$;

-- 4. Test Audit log immutability
SET LOCAL "request.jwt.claim.sub" = '00000000-0000-0000-0000-000000000001'; -- Admin User ID
INSERT INTO audit_log (actor_id, action, entity_type, entity_id) VALUES ('00000000-0000-0000-0000-000000000001', 'create', 'test', '55555555-5555-5555-5555-555555555555');

DO $$
BEGIN
    DELETE FROM audit_log;
    EXCEPTION WHEN OTHERS THEN
        -- Should throw exception due to RLS blocking delete for everyone
        RAISE NOTICE 'Audit log delete successfully blocked by RLS';
END$$;

ROLLBACK;
