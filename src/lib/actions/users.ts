'use server'

import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { z } from 'zod'

const inviteUserSchema = z.object({
  email: z.string().email(),
  full_name: z.string().min(2),
  role: z.enum(['admin', 'staff', 'supplier']),
})

export async function checkEmailExists(email: string) {
  if (!email || !email.includes('@')) return false;

  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return false;

  const { data, error } = await supabase
    .from('users')
    .select('id')
    .eq('email', email)
    .single()

  if (error && error.code !== 'PGRST116') { // PGRST116 is "No rows found"
    console.error("Check email error:", error)
  }

  return !!data;
}

export async function inviteUser(formData: FormData) {
  const supabase = await createClient()
  
  // 1. Verify caller is an admin
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return { ok: false, error: 'Unauthorized' }

  const { data: currentUserData } = await supabase
    .from('users')
    .select('role')
    .eq('id', user.id)
    .single()

  if (currentUserData?.role !== 'admin') {
    return { ok: false, error: 'Only administrators can invite new users.' }
  }

  // 2. Validate input
  const parsed = inviteUserSchema.safeParse({
    email: formData.get('email'),
    full_name: formData.get('full_name'),
    role: formData.get('role'),
  })

  if (!parsed.success) {
    return { ok: false, error: 'Invalid form data. Please check fields.' }
  }

  try {
    // 3. Initialize Admin Client
    const adminAuthClient = createAdminClient()

    // 4. Send Invite via Supabase Auth
    const { data: inviteData, error: inviteError } = await adminAuthClient.auth.admin.inviteUserByEmail(
      parsed.data.email,
      { data: { full_name: parsed.data.full_name, role: parsed.data.role } }
    )

    if (inviteError) {
      return { ok: false, error: inviteError.message }
    }

    if (!inviteData.user) {
      return { ok: false, error: 'Failed to create user account.' }
    }

    // We use the admin client to UPDATE the row because the database automatically
    // created a blank row for them via a trigger (00003_auth_sync.sql).
    const { error: dbError } = await adminAuthClient
      .from('users')
      .update({
        email: parsed.data.email,
        full_name: parsed.data.full_name,
        role: parsed.data.role,
        status: 'active'
      })
      .eq('id', inviteData.user.id)

    if (dbError) {
      // Cleanup auth user if db insertion fails to avoid orphaned records
      await adminAuthClient.auth.admin.deleteUser(inviteData.user.id)
      return { ok: false, error: `Database error: ${dbError.message}` }
    }

    return { ok: true, message: `Invitation sent successfully to ${parsed.data.email}` }

  } catch (err: any) {
    console.error('Invite Error:', err)
    return { ok: false, error: err.message || 'An unexpected error occurred.' }
  }
}
