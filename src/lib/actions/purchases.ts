'use server'

import { createClient } from '@/lib/supabase/server'
import { purchaseEntrySchema, type PurchaseEntryFormValues } from '@/lib/validation/purchases'
import { revalidatePath } from 'next/cache'

export async function createPurchaseEntry(data: PurchaseEntryFormValues) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  const { data: userData } = await supabase.from('users').select('role').eq('id', user.id).single()
  const role = userData?.role

  if (!role || !['admin', 'staff', 'supplier'].includes(role)) {
     return { ok: false, error: 'Unauthorized role' }
  }

  const parsed = purchaseEntrySchema.safeParse(data)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || 'Invalid data' }
  }

  if (role === 'supplier') {
    const { data: supplierData } = await supabase.from('suppliers').select('id').eq('user_id', user.id).single()
    if (!supplierData || supplierData.id !== parsed.data.supplier_id) {
       return { ok: false, error: 'Unauthorized supplier ID' }
    }
  }

  const { error } = await supabase.rpc('create_purchase_entry', {
    p_supplier_id: parsed.data.supplier_id,
    p_created_by: user.id,
    p_source: role,
    p_invoice_number: parsed.data.invoice_number,
    p_invoice_date: parsed.data.invoice_date,
    p_received_at: null,
    p_notes: parsed.data.notes || null,
    p_items: parsed.data.items,
    p_attachments: parsed.data.attachments || [],
    p_actor_id: user.id,
    p_ip: null
  })

  if (error) {
    console.error(error)
    if (error.code === '23505') {
       return { ok: false, error: 'An entry with this invoice number already exists for this supplier.' }
    }
    return { ok: false, error: 'Failed to create purchase entry' }
  }

  revalidatePath('/admin/entries')
  revalidatePath('/portal')
  return { ok: true }
}
