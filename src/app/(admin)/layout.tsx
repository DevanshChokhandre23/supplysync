import { NotificationsMenu } from '@/components/notifications-menu'
import Link from 'next/link'

import { createClient } from '@/lib/supabase/server'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  
  // Fetch active suppliers for the sidebar
  const { data: suppliers } = await supabase
    .from('suppliers')
    .select('id, business_name')
    .eq('status', 'active')
    .order('business_name')

  // Fetch pending entries to show notification badges
  const { data: pendingEntries } = await supabase
    .from('purchase_entries')
    .select('supplier_id')
    .eq('status', 'pending')

  const suppliersWithPending = new Set(pendingEntries?.map(e => e.supplier_id) || [])

  return (
    <div className="min-h-screen bg-black flex flex-col">
      <header className="bg-emerald-600 text-white shadow-md p-4 sticky top-0 z-50">
        <div className="max-w-full mx-auto flex items-center px-4 relative">
          <div className="flex-1">
            <Link href="/admin" className="text-xl font-bold">Admin Portal</Link>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
            <span className="text-2xl font-black tracking-widest text-emerald-100 drop-shadow-md leading-none">SupplySync</span>
            <span className="text-[0.65rem] font-semibold tracking-wider text-emerald-100/90 uppercase mt-1">Collaborative Stock Tracking & Verification System</span>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <NotificationsMenu />
            <form action="/auth/signout" method="post">
              <button className="text-sm font-semibold hover:underline">Sign Out</button>
            </form>
          </div>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-zinc-900 border-r shadow-sm overflow-y-auto hidden md:block">
          <div className="p-4">
            <h2 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-4">Suppliers</h2>
            <ul className="space-y-1">
              {suppliers?.map(supplier => (
                <li key={supplier.id}>
                  <Link 
                    href={`/admin/suppliers/${supplier.id}`}
                    className="flex items-center justify-between px-3 py-2 text-sm text-zinc-300 rounded-md hover:bg-zinc-800 hover:text-emerald-400 transition-colors"
                  >
                    <span className="truncate">{supplier.business_name}</span>
                    {suppliersWithPending.has(supplier.id) && (
                      <span className="flex h-2 w-2 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_8px_rgba(16,185,129,0.8)]" title="New pending entries" />
                    )}
                  </Link>
                </li>
              ))}
              {(!suppliers || suppliers.length === 0) && (
                <li className="text-sm text-zinc-400 px-3 py-2">No active suppliers</li>
              )}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
