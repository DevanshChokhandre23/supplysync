'use server'

import { createClient } from '@/lib/supabase/server'
import { reviewSchema, type ReviewFormValues } from '@/lib/validation/review'
import { revalidatePath } from 'next/cache'

export async function reviewPurchaseEntry(data: ReviewFormValues) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  const { data: userData } = await supabase.from('users').select('role').eq('id', user.id).single()
  if (!userData?.role || !['admin', 'staff'].includes(userData.role)) {
     return { ok: false, error: 'Only admins can review entries' }
  }

  const parsed = reviewSchema.safeParse(data)
  if (!parsed.success) {
    return { ok: false, error: parsed.error.issues[0]?.message || 'Invalid data' }
  }

  const { error } = await supabase.rpc('review_purchase_entry', {
    p_entry_id: parsed.data.entry_id,
    p_decision: parsed.data.decision,
    p_reason: parsed.data.reason || null,
    p_items: parsed.data.items || null,
    p_actor_id: user.id,
    p_ip: null
  })

  if (error) {
    console.error(error)
    return { ok: false, error: error.message || 'Failed to process review' }
  }

  revalidatePath('/admin/entries')
  revalidatePath(`/admin/entries/${parsed.data.entry_id}/review`)
  return { ok: true }
}
