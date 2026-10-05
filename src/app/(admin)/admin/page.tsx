import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function AdminDashboard() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-zinc-900 p-6 rounded-lg shadow border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Purchases</h2>
          <p className="text-zinc-400 mb-4">Review and record purchase entries.</p>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/entries">View Entries</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/entries/new">Record New Entry</Link>
            </Button>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Reports</h2>
          <p className="text-zinc-400 mb-4">View aggregate purchase data.</p>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/reports">View Reports</Link>
            </Button>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border border-zinc-800">
          <h2 className="text-xl font-semibold mb-2">Master Data</h2>
          <p className="text-zinc-400 mb-4">Manage suppliers and products catalog.</p>
          <div className="flex flex-col gap-2">
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/suppliers">Manage Suppliers</Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start">
              <Link href="/admin/products">Manage Products</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}