'use server'

import { createClient } from '@/lib/supabase/server'
import { productSchema, type ProductFormValues } from '@/lib/validation/products'
import { revalidatePath } from 'next/cache'

export async function createProduct(data: ProductFormValues) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  const { data: userData } = await supabase.from('users').select('role').eq('id', user.id).single()
  if (!userData?.role || !['admin', 'staff'].includes(userData.role)) {
    return { ok: false, error: 'Only admins can create products' }
  }

  const parsed = productSchema.safeParse(data)
  if (!parsed.success) return { ok: false, error: 'Invalid data' }

  const { error } = await supabase.rpc('create_product_with_audit', {
    p_name: parsed.data.name,
    p_sku: parsed.data.sku || null,
    p_base_uom: parsed.data.base_uom,
    p_actor_id: user.id
  })

  if (error) {
    console.error(error)
    return { ok: false, error: 'Failed to create product' }
  }

  revalidatePath('/admin/products')
  return { ok: true }
}
