'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addComment(entryId: string, body: string) {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  if (!body || body.trim() === '') {
    return { ok: false, error: 'Comment cannot be empty' }
  }

  const { error } = await supabase.from('entry_comments').insert({
    purchase_entry_id: entryId,
    author_id: user.id,
    body: body.trim()
  })

  if (error) {
    console.error(error)
    return { ok: false, error: 'Failed to post comment' }
  }

  revalidatePath(`/portal/entries/${entryId}`)
  revalidatePath(`/admin/entries/${entryId}/review`)
  return { ok: true }
}
