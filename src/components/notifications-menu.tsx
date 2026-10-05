'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { markNotificationsRead } from '@/lib/actions/notifications'
import { Button } from '@/components/ui/button'

export function NotificationsMenu() {
  const [notifications, setNotifications] = useState<any[]>([])
  const [open, setOpen] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    async function load() {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        const { data } = await supabase
          .from('notifications')
          .select('*')
          .eq('user_id', user.id)
          .eq('is_read', false)
          .order('created_at', { ascending: false })
          .limit(10)
        
        if (data) setNotifications(data)
      }
    }
    load()
  }, [supabase])

  const handleOpen = async () => {
    setOpen(!open)
    if (!open && notifications.length > 0) {
      await markNotificationsRead()
      // Optimistically clear badge
      setNotifications([])
    }
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" onClick={handleOpen} className="relative bg-zinc-900 border shadow-sm">
        <span role="img" aria-label="bell">🔔</span>
        {notifications.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-950/500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
            {notifications.length}
          </span>
        )}
      </Button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-zinc-900 rounded-lg shadow-xl border z-50 overflow-hidden">
          <div className="p-3 font-bold bg-black border-b flex justify-between items-center">
            Notifications
            <span className="text-xs font-normal text-zinc-400 cursor-pointer" onClick={() => setOpen(false)}>Close</span>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-sm text-zinc-400">No new notifications</div>
            ) : (
              notifications.map(n => (
                <a key={n.id} href={n.link} className="block p-4 border-b hover:bg-black transition-colors">
                  <div className="font-semibold text-sm text-blue-300">{n.title}</div>
                  <div className="text-xs text-zinc-400 mt-1">{n.message}</div>
                </a>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}
