-- Create custom types for strict value checking
CREATE TYPE user_role AS ENUM ('admin', 'staff', 'supplier');
CREATE TYPE user_status AS ENUM ('active', 'disabled');
CREATE TYPE supplier_status AS ENUM ('active', 'inactive');
CREATE TYPE product_status AS ENUM ('active', 'inactive');
CREATE TYPE entry_source AS ENUM ('admin', 'staff', 'supplier');
CREATE TYPE entry_status AS ENUM ('draft', 'pending', 'approved', 'partially_approved', 'rejected', 'cancelled', 'voided');
CREATE TYPE shortfall_resolution AS ENUM ('pending_redelivery', 'short_closed');
CREATE TYPE approval_decision AS ENUM ('approved', 'partial', 'rejected');
CREATE TYPE attachment_kind AS ENUM ('invoice', 'challan', 'photo');
CREATE TYPE audit_action AS ENUM ('create', 'update', 'approve', 'reject', 'void', 'login');
CREATE TYPE notification_channel AS ENUM ('inapp', 'sms', 'whatsapp');

-- Helper for updated_at
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 1. users (Mirrors auth.users)
CREATE TABLE users (
    id uuid PRIMARY KEY REFERENCES auth.users(id),
    role user_role NOT NULL,
    full_name text NOT NULL,
    email text,
    locale text DEFAULT 'en',
    status user_status DEFAULT 'active',
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER set_users_updated_at
    BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 2. suppliers
CREATE TABLE suppliers (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES users(id),
    business_name text NOT NULL,
    contact_name text,
    phone text NOT NULL,
    address text,
    status supplier_status DEFAULT 'active',
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER set_suppliers_updated_at
    BEFORE UPDATE ON suppliers
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 3. products
CREATE TABLE products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    name text NOT NULL,
    sku text UNIQUE,
    base_uom text NOT NULL,
    status product_status DEFAULT 'active',
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER set_products_updated_at
    BEFORE UPDATE ON products
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 4. supplier_products
CREATE TABLE supplier_products (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    supplier_id uuid NOT NULL REFERENCES suppliers(id),
    product_id uuid NOT NULL REFERENCES products(id),
    supplier_item_name text,
    purchase_uom text,
    conversion_factor numeric(14,4),
    effective_from date,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now(),
    UNIQUE (supplier_id, product_id, effective_from)
);

CREATE TRIGGER set_supplier_products_updated_at
    BEFORE UPDATE ON supplier_products
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 5. purchase_entries
CREATE TABLE purchase_entries (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    supplier_id uuid NOT NULL REFERENCES suppliers(id),
    created_by uuid NOT NULL REFERENCES users(id),
    source entry_source NOT NULL,
    invoice_number text NOT NULL,
    invoice_date date NOT NULL,
    received_at timestamptz,
    notes text,
    status entry_status NOT NULL DEFAULT 'draft',
    replaces_entry_id uuid REFERENCES purchase_entries(id),
    submitted_at timestamptz,
    voided_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE UNIQUE INDEX idx_purchase_entries_unique_invoice 
    ON purchase_entries (supplier_id, invoice_number) 
    WHERE voided_at IS NULL;

CREATE INDEX idx_purchase_entries_status_created_desc ON purchase_entries (status, created_at DESC);
CREATE INDEX idx_purchase_entries_supplier_date_desc ON purchase_entries (supplier_id, invoice_date DESC);

CREATE TRIGGER set_purchase_entries_updated_at
    BEFORE UPDATE ON purchase_entries
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 6. purchase_items
CREATE TABLE purchase_items (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    purchase_entry_id uuid NOT NULL REFERENCES purchase_entries(id) ON DELETE CASCADE,
    product_name text NOT NULL,
    purchase_uom text,
    quantity_submitted numeric(14,3) NOT NULL CHECK (quantity_submitted > 0),
    quantity_approved numeric(14,3) CHECK (quantity_approved <= quantity_submitted),
    shortfall_resolution shortfall_resolution,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER set_purchase_items_updated_at
    BEFORE UPDATE ON purchase_items
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 7. attachments
CREATE TABLE attachments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    purchase_entry_id uuid NOT NULL REFERENCES purchase_entries(id),
    storage_path text NOT NULL,
    uploaded_by uuid NOT NULL REFERENCES users(id),
    kind attachment_kind NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now()
);

-- 8. approvals
CREATE TABLE approvals (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    purchase_entry_id uuid NOT NULL REFERENCES purchase_entries(id),
    reviewed_by uuid NOT NULL REFERENCES users(id),
    decision approval_decision NOT NULL,
    reason text,
    reviewed_at timestamptz NOT NULL DEFAULT now(),
    created_at timestamptz NOT NULL DEFAULT now(),
    CONSTRAINT reason_required_if_not_approved CHECK (
        decision = 'approved' OR (reason IS NOT NULL AND trim(reason) <> '')
    )
);

-- 9. entry_comments
CREATE TABLE entry_comments (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    purchase_entry_id uuid NOT NULL REFERENCES purchase_entries(id),
    author_id uuid NOT NULL REFERENCES users(id),
    body text NOT NULL,
    created_at timestamptz NOT NULL DEFAULT now(),
    updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TRIGGER set_entry_comments_updated_at
    BEFORE UPDATE ON entry_comments
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- 10. audit_log
CREATE TABLE audit_log (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    actor_id uuid REFERENCES users(id),
    action audit_action NOT NULL,
    entity_type text NOT NULL,
    entity_id uuid NOT NULL,
    diff jsonb,
    ip inet,
    occurred_at timestamptz NOT NULL DEFAULT now(),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX idx_audit_log_entity ON audit_log (entity_type, entity_id);

-- 11. notifications
CREATE TABLE notifications (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid NOT NULL REFERENCES users(id),
    channel notification_channel NOT NULL,
    template text NOT NULL,
    payload jsonb,
    sent_at timestamptz,
    read_at timestamptz,
    created_at timestamptz NOT NULL DEFAULT now()
);
