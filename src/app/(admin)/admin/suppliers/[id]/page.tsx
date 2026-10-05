import { createClient } from '@/lib/supabase/server'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function SupplierDashboardPage({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { id } = await params

  // Fetch supplier details
  const { data: supplier } = await supabase
    .from('suppliers')
    .select('*, users(email, full_name)')
    .eq('id', id)
    .single()

  if (!supplier) notFound()

  // Fetch purchase entries for this supplier
  const { data: entries } = await supabase
    .from('purchase_entries')
    .select('*')
    .eq('supplier_id', id)
    .order('created_at', { ascending: false })

  // Calculate metrics
  const totalEntries = entries?.length || 0
  const pendingEntries = entries?.filter(e => e.status === 'pending').length || 0
  const approvedEntries = entries?.filter(e => e.status === 'approved' || e.status === 'partially_approved').length || 0

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">{supplier.business_name}</h1>
          <p className="text-zinc-400 text-sm mt-1">Supplier Dashboard</p>
        </div>
        <div className="flex gap-4">
          <Button asChild variant="outline">
            <Link href={`/admin/entries/new?supplier_id=${supplier.id}`}>Create Entry</Link>
          </Button>
          <Button asChild>
            <Link href={`/admin/suppliers`}>Back to Suppliers</Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase">Status</h3>
          <p className="mt-2 text-2xl font-bold">
             <span className={`px-2 py-1 rounded-full text-sm ${supplier.status === 'active' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-zinc-800 text-zinc-200'}`}>
              {supplier.status}
            </span>
          </p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase">Total Entries</h3>
          <p className="mt-2 text-2xl font-bold">{totalEntries}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase">Pending Review</h3>
          <p className="mt-2 text-2xl font-bold text-orange-600">{pendingEntries}</p>
        </div>
        <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-800">
          <h3 className="text-sm font-semibold text-zinc-400 uppercase">Approved</h3>
          <p className="mt-2 text-2xl font-bold text-emerald-500">{approvedEntries}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="bg-zinc-900 rounded-lg shadow-sm border border-zinc-800 overflow-hidden">
            <div className="p-4 border-b bg-black flex justify-between items-center">
              <h2 className="font-semibold text-lg">Recent Entries</h2>
            </div>
            <table className="min-w-full divide-y divide-zinc-800">
              <thead className="bg-black">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Invoice</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Action</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-900 divide-y divide-zinc-800">
                {entries?.slice(0, 10).map(e => (
                  <tr key={e.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-sm">{e.invoice_number}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-zinc-400">{e.invoice_date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-zinc-800 text-zinc-200">
                        {e.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <Button asChild size="sm" variant="outline">
                        <Link href={`/admin/entries/${e.id}/review`}>Review</Link>
                      </Button>
                    </td>
                  </tr>
                ))}
                {(!entries || entries.length === 0) && (
                  <tr>
                    <td colSpan={4} className="px-6 py-4 text-center text-zinc-400 text-sm">No entries found.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-zinc-900 p-6 rounded-lg shadow-sm border border-zinc-800 space-y-4">
            <h2 className="font-semibold text-lg border-b pb-2">Contact Information</h2>
            <div>
              <p className="text-xs text-zinc-400 uppercase font-semibold">Primary Contact</p>
              <p className="text-sm font-medium">{supplier.contact_name || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase font-semibold">Email</p>
              <p className="text-sm">{supplier.users?.email || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase font-semibold">Phone</p>
              <p className="text-sm">{supplier.contact_phone || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase font-semibold">Tax ID</p>
              <p className="text-sm">{supplier.tax_id || 'N/A'}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-400 uppercase font-semibold">Payment Terms</p>
              <p className="text-sm">{supplier.payment_terms || 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
