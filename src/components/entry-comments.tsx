'use client'

import { useState } from 'react'
import { addComment } from '@/lib/actions/comments'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface Comment {
  id: string
  body: string
  created_at: string
  users: {
    full_name: string
    role: string
  }
}

export function EntryComments({ entryId, initialComments }: { entryId: string, initialComments: Comment[] }) {
  const [comments, setComments] = useState(initialComments)
  const [newComment, setNewComment] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    setLoading(true)
    const res = await addComment(entryId, newComment)
    if (res.ok) {
      window.location.reload()
    } else {
      alert(res.error)
      setLoading(false)
    }
  }

  return (
    <div className="bg-zinc-900 rounded-lg shadow p-6 border border-zinc-800">
      <h3 className="text-lg font-semibold mb-4 border-b pb-2">Discussion & Disputes</h3>
      
      <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
        {comments.map(c => (
          <div key={c.id} className={`p-3 rounded-lg ${c.users.role === 'admin' || c.users.role === 'staff' ? 'bg-blue-50 ml-8' : 'bg-black mr-8'}`}>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span className="font-semibold text-zinc-300">{c.users.full_name} ({c.users.role})</span>
              <span>{new Date(c.created_at).toLocaleString()}</span>
            </div>
            <p className="text-sm text-zinc-200">{c.body}</p>
          </div>
        ))}
        {comments.length === 0 && <p className="text-sm text-zinc-400 text-center py-4">No comments yet.</p>}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input 
          value={newComment} 
          onChange={e => setNewComment(e.target.value)} 
          placeholder="Type your comment or dispute..." 
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !newComment.trim()}>
          Post
        </Button>
      </form>
    </div>
  )
}
