import { NotificationsMenu } from '@/components/notifications-menu'
import Link from 'next/link'

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black">
      <header className="bg-blue-900 text-white shadow-md p-4">
        <div className="max-w-7xl mx-auto flex items-center relative">
          <div className="flex-1">
            <Link href="/portal" className="text-xl font-bold">Supplier Portal</Link>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
            <span className="text-2xl font-black tracking-widest text-blue-100 drop-shadow-md leading-none">SupplySync</span>
            <span className="text-[0.65rem] font-semibold tracking-wider text-blue-100/90 uppercase mt-1">Collaborative Stock Tracking & Verification System</span>
          </div>

          <div className="flex items-center gap-4 flex-1 justify-end">
            <NotificationsMenu />
            <form action="/auth/signout" method="post">
              <button className="text-sm font-semibold hover:underline">Sign Out</button>
            </form>
          </div>
        </div>
      </header>
      <main className="py-8">
        {children}
      </main>
    </div>
  )
}
