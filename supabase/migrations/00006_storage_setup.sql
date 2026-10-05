-- Create the invoices bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('invoices', 'invoices', false) ON CONFLICT DO NOTHING;

-- authenticated can upload
CREATE POLICY "Authenticated users can upload invoices" 
ON storage.objects FOR INSERT TO authenticated 
WITH CHECK (bucket_id = 'invoices');

-- Admin and staff can read all, supplier can read their own
CREATE POLICY "Admin and staff can read all invoices" 
ON storage.objects FOR SELECT TO authenticated 
USING (bucket_id = 'invoices' AND (
    public.current_user_role() IN ('admin', 'staff')
    OR owner = auth.uid()
));
