'use server'

import { createClient } from '@/lib/supabase/server'
import { supplierSchema, type SupplierFormValues } from '@/lib/validation/suppliers'
import { revalidatePath } from 'next/cache'

export async function createSupplier(data: SupplierFormValues) {
  const supabase = await createClient()

  // 1. Authenticate & Authorize
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  const { data: userData } = await supabase.from('users').select('role').eq('id', user.id).single()
  if (!userData?.role || !['admin', 'staff'].includes(userData.role)) {
    return { ok: false, error: 'Only admins can create suppliers' }
  }

  // 2. Validate
  const parsed = supplierSchema.safeParse(data)
  if (!parsed.success) {
    return { ok: false, error: 'Invalid data provided' }
  }

  const { data: newSupplierId, error } = await supabase.rpc('create_supplier_with_audit', {
    p_user_id: null,
    p_business_name: parsed.data.business_name,
    p_contact_name: parsed.data.contact_name || null,
    p_phone: parsed.data.phone,
    p_address: parsed.data.address || null,
    p_actor_id: user.id,
  })

  if (error) {
    console.error(error)
    return { ok: false, error: 'Failed to create supplier' }
  }

  // 4. Revalidate
  revalidatePath('/admin/suppliers')
  return { ok: true }
}
