-- Helper to get current user's app role
CREATE OR REPLACE FUNCTION public.current_user_role()
RETURNS text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT role::text FROM users WHERE id = auth.uid() LIMIT 1;
$$;

-- Helper to get current supplier_id for the logged in user
CREATE OR REPLACE FUNCTION public.current_supplier_id()
RETURNS uuid
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT id FROM suppliers WHERE user_id = auth.uid() LIMIT 1;
$$;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE suppliers ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE supplier_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_entries ENABLE ROW LEVEL SECURITY;
ALTER TABLE purchase_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE attachments ENABLE ROW LEVEL SECURITY;
ALTER TABLE approvals ENABLE ROW LEVEL SECURITY;
ALTER TABLE entry_comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- users
CREATE POLICY "Admin full access on users" ON users FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Users can read own profile" ON users FOR SELECT TO authenticated USING (id = auth.uid());
CREATE POLICY "Users can update own profile" ON users FOR UPDATE TO authenticated USING (id = auth.uid());

-- suppliers
CREATE POLICY "Admin full access on suppliers" ON suppliers FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Supplier can read own supplier record" ON suppliers FOR SELECT TO authenticated USING (id = current_supplier_id());

-- products
CREATE POLICY "Admin full access on products" ON products FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Everyone can read products" ON products FOR SELECT TO authenticated USING (true);

-- supplier_products
CREATE POLICY "Admin full access on supplier_products" ON supplier_products FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Supplier can read own supplier_products" ON supplier_products FOR SELECT TO authenticated USING (supplier_id = current_supplier_id());

-- purchase_entries
CREATE POLICY "Admin full access on purchase_entries" ON purchase_entries FOR ALL TO authenticated USING (current_user_role() IN ('admin', 'staff'));
CREATE POLICY "Supplier can read own purchase_entries" ON purchase_entries FOR SELECT TO authenticated USING (supplier_id = current_supplier_id());
CREATE POLICY "Supplier can insert own purchase_entries" ON purchase_entries FOR INSERT TO authenticated 
  WITH CHECK (supplier_id = current_supplier_id() AND source = 'supplier' AND status IN ('draft', 'pending'));
CREATE POLICY "Supplier can update own pending purchase_entries" ON purchase_entries FOR UPDATE TO authenticated 
  USING (supplier_id = current_supplier_id() AND status IN ('draft', 'pending'))
  WITH CHECK (supplier_id = current_supplier_id() AND status IN ('draft', 'pending'));

-- purchase_items
CREATE POLICY "Admin full access on purchase_items" ON purchase_items FOR ALL TO authenticated USING (current_user_role() IN ('admin', 'staff'));
CREATE POLICY "Supplier can read own purchase_items" ON purchase_items FOR SELECT TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id()));
CREATE POLICY "Supplier can insert own purchase_items" ON purchase_items FOR INSERT TO authenticated 
  WITH CHECK (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id() AND status IN ('draft', 'pending')));
CREATE POLICY "Supplier can update own purchase_items" ON purchase_items FOR UPDATE TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id() AND status IN ('draft', 'pending')))
  WITH CHECK (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id() AND status IN ('draft', 'pending')));
CREATE POLICY "Supplier can delete own purchase_items" ON purchase_items FOR DELETE TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id() AND status IN ('draft', 'pending')));

-- attachments
CREATE POLICY "Admin full access on attachments" ON attachments FOR ALL TO authenticated USING (current_user_role() IN ('admin', 'staff'));
CREATE POLICY "Supplier can read own attachments" ON attachments FOR SELECT TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id()));
CREATE POLICY "Supplier can insert own attachments" ON attachments FOR INSERT TO authenticated 
  WITH CHECK (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id() AND status IN ('draft', 'pending')));

-- approvals
CREATE POLICY "Admin full access on approvals" ON approvals FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Supplier can read own approvals" ON approvals FOR SELECT TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id()));

-- entry_comments
CREATE POLICY "Admin full access on entry_comments" ON entry_comments FOR ALL TO authenticated USING (current_user_role() IN ('admin', 'staff'));
CREATE POLICY "Supplier can read own entry_comments" ON entry_comments FOR SELECT TO authenticated 
  USING (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id()));
CREATE POLICY "Supplier can insert own entry_comments" ON entry_comments FOR INSERT TO authenticated 
  WITH CHECK (purchase_entry_id IN (SELECT id FROM purchase_entries WHERE supplier_id = current_supplier_id()));

-- audit_log
CREATE POLICY "Admin can read audit_log" ON audit_log FOR SELECT TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Anyone can insert audit_log" ON audit_log FOR INSERT TO authenticated WITH CHECK (true);

-- notifications
CREATE POLICY "Admin full access on notifications" ON notifications FOR ALL TO authenticated USING (current_user_role() = 'admin');
CREATE POLICY "Users can read own notifications" ON notifications FOR SELECT TO authenticated USING (user_id = auth.uid());
CREATE POLICY "Users can update own notifications" ON notifications FOR UPDATE TO authenticated USING (user_id = auth.uid());
