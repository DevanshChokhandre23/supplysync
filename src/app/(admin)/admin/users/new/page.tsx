'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { inviteUser } from '@/lib/actions/users'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function InviteUserPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    const result = await inviteUser(formData)

    if (!result.ok) {
      setError(result.error || 'Failed to send invite')
    } else {
      setSuccess(result.message || 'Invite sent successfully!')
      e.currentTarget.reset()
    }
    
    setLoading(false)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Invite New User</h1>
        <p className="text-zinc-400 mt-2">
          Send a secure invitation to a new supplier or team member. They will receive an email to set their password.
        </p>
      </div>

      {error && <div className="bg-red-950/50 text-red-400 p-4 rounded-md mb-6 border border-red-900/50">{error}</div>}
      {success && <div className="bg-emerald-950/50 text-emerald-400 p-4 rounded-md mb-6 border border-emerald-900/50">{success}</div>}

      <div className="bg-zinc-900 rounded-lg p-6 shadow-md border border-zinc-800">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="supplier@company.com" 
              required 
              className="bg-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="full_name">Full Name or Business Name</Label>
            <Input 
              id="full_name" 
              name="full_name" 
              placeholder="Jane Doe" 
              required 
              className="bg-black"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="role">User Role</Label>
            <select 
              id="role" 
              name="role" 
              className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              required
            >
              <option value="supplier">Supplier</option>
              <option value="staff">Internal Staff</option>
              <option value="admin">Administrator</option>
            </select>
            <p className="text-xs text-zinc-500 mt-1">Suppliers will only have access to the Portal. Admins and Staff can access this dashboard.</p>
          </div>

          <div className="pt-4 border-t border-zinc-800">
            <Button type="submit" disabled={loading} className="w-full">
              {loading ? 'Sending Invite...' : 'Send Email Invitation'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
