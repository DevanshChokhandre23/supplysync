import { createClient } from '@/lib/supabase/server'

export default async function ReportsPage() {
  const supabase = await createClient()

  // High level aggregation
  const { data: aggData } = await supabase
    .from('purchase_entries')
    .select('status, suppliers(business_name)')

  const summary = {
    pendingCount: 0,
    approvedCount: 0,
    rejectedCount: 0,
  }

  const supplierApprovals: Record<string, { name: string, count: number }> = {}

  aggData?.forEach(e => {
    if (e.status === 'pending') {
      summary.pendingCount++
    } else if (e.status === 'approved' || e.status === 'partially_approved') {
      summary.approvedCount++
      
      const sName = (e.suppliers as any)?.business_name || 'Unknown'
      if (!supplierApprovals[sName]) supplierApprovals[sName] = { name: sName, count: 0 }
      supplierApprovals[sName].count++
    } else if (e.status === 'rejected') {
      summary.rejectedCount++
    }
  })

  const sortedSuppliers = Object.values(supplierApprovals).sort((a, b) => b.count - a.count)

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Management Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-yellow-400">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Pending Review</h3>
          <p className="text-3xl font-bold">{summary.pendingCount}</p>
          <p className="text-sm text-zinc-400 mt-2">Entries awaiting action</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-green-500">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Approved Invoices</h3>
          <p className="text-3xl font-bold">{summary.approvedCount}</p>
          <p className="text-sm text-zinc-400 mt-2">Processed entries</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-red-500">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Rejected Invoices</h3>
          <p className="text-3xl font-bold">{summary.rejectedCount}</p>
        </div>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow p-6">
        <h2 className="text-xl font-bold mb-6">Top Suppliers by Approved Entries</h2>
        <div className="space-y-4">
          {sortedSuppliers.length === 0 ? (
            <p className="text-zinc-400 italic">No approved data yet.</p>
          ) : (
            sortedSuppliers.map((s, idx) => (
              <div key={idx} className="flex justify-between items-center border-b pb-2">
                <span className="font-medium text-zinc-200">{idx + 1}. {s.name}</span>
                <span className="font-bold text-emerald-400">{s.count} Entries</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
