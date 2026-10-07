import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default async function EntriesPage({ searchParams }: { searchParams: Promise<{ q?: string, status?: string }> }) {
  const supabase = await createClient()
  const params = await searchParams
  
  const query = params.q || ''
  const statusFilter = params.status || ''
  
  let dbQuery = supabase
    .from('purchase_entries')
    .select('*, suppliers!inner(business_name)')
    .order('created_at', { ascending: false })

  if (query) {
    dbQuery = dbQuery.or(`invoice_number.ilike.%${query}%,suppliers.business_name.ilike.%${query}%`)
  }

  if (statusFilter) {
    dbQuery = dbQuery.eq('status', statusFilter)
  }

  const { data: entries } = await dbQuery

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Purchase Entries</h1>
        <Button asChild>
          <Link href="/admin/entries/new">New Entry</Link>
        </Button>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow overflow-hidden mb-6 p-4">
        <form className="flex gap-4 items-end" action="/admin/entries" method="GET">
          <div className="flex-1 space-y-1">
            <label className="text-xs font-semibold text-zinc-400 uppercase">Search</label>
            <Input name="q" defaultValue={query} placeholder="Search by Invoice or Supplier..." className="bg-black" />
          </div>
          <div className="w-48 space-y-1">
            <label className="text-xs font-semibold text-zinc-400 uppercase">Status</label>
            <select name="status" defaultValue={statusFilter} className="flex h-10 w-full rounded-md border border-input bg-black px-3 py-2 text-sm">
              <option value="">All Statuses</option>
              <option value="pending">Pending</option>
              <option value="approved">Approved</option>
              <option value="partially_approved">Partially Approved</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
          <Button type="submit" variant="secondary">Filter</Button>
          {(query || statusFilter) && (
             <Button asChild variant="outline">
               <Link href="/admin/entries">Clear</Link>
             </Button>
          )}
        </form>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-800">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Invoice</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Supplier</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 divide-y divide-zinc-800">
            {entries?.map(e => (
              <tr key={e.id}>
                <td className="px-6 py-4 whitespace-nowrap">{e.invoice_number}</td>
                <td className="px-6 py-4 whitespace-nowrap">{e.suppliers?.business_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{e.invoice_date}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-zinc-800 text-zinc-200`}>
                    {e.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {e.status === 'pending' && (
                    <Button asChild size="sm" variant="outline">
                      <Link href={`/admin/entries/${e.id}/review`}>Review</Link>
                    </Button>
                  )}
                </td>
              </tr>
            ))}
            {(!entries || entries.length === 0) && (
              <tr>
                <td colSpan={5} className="px-6 py-4 text-center text-zinc-400">No entries found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
