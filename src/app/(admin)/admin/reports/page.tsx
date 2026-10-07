import { createClient } from '@/lib/supabase/server'

export default async function ReportsPage() {
  const supabase = await createClient()

  // Fetch entries
  const { data: aggData } = await supabase
    .from('purchase_entries')
    .select('status, suppliers(business_name)')

  // Fetch items for shortfall analysis
  const { data: itemsData } = await supabase
    .from('purchase_items')
    .select('quantity_submitted, quantity_approved, shortfall_resolution, purchase_entries(status, suppliers(business_name))')

  const summary = {
    pendingCount: 0,
    approvedCount: 0,
    partiallyApprovedCount: 0,
    rejectedCount: 0,
  }

  const supplierApprovals: Record<string, { name: string, count: number }> = {}

  aggData?.forEach(e => {
    if (e.status === 'pending') {
      summary.pendingCount++
    } else if (e.status === 'approved') {
      summary.approvedCount++
      const sName = (e.suppliers as any)?.business_name || 'Unknown'
      if (!supplierApprovals[sName]) supplierApprovals[sName] = { name: sName, count: 0 }
      supplierApprovals[sName].count++
    } else if (e.status === 'partially_approved') {
      summary.partiallyApprovedCount++
      const sName = (e.suppliers as any)?.business_name || 'Unknown'
      if (!supplierApprovals[sName]) supplierApprovals[sName] = { name: sName, count: 0 }
      supplierApprovals[sName].count++
    } else if (e.status === 'rejected') {
      summary.rejectedCount++
    }
  })

  // Stock metrics
  let totalSubmittedUnits = 0
  let totalApprovedUnits = 0
  let totalShortfallUnits = 0
  let pendingRedeliveryCount = 0

  itemsData?.forEach(item => {
    const entryStatus = (item.purchase_entries as any)?.status
    // Only count metrics for processed entries
    if (entryStatus === 'approved' || entryStatus === 'partially_approved') {
      totalSubmittedUnits += Number(item.quantity_submitted || 0)
      totalApprovedUnits += Number(item.quantity_approved || 0)
      
      const shortfall = Number(item.quantity_submitted || 0) - Number(item.quantity_approved || 0)
      if (shortfall > 0) {
        totalShortfallUnits += shortfall
      }

      if (item.shortfall_resolution === 'pending_redelivery') {
        pendingRedeliveryCount++
      }
    }
  })

  const sortedSuppliers = Object.values(supplierApprovals).sort((a, b) => b.count - a.count)
  const approvalRate = totalSubmittedUnits > 0 ? ((totalApprovedUnits / totalSubmittedUnits) * 100).toFixed(1) : 0
  const shortfallRate = totalSubmittedUnits > 0 ? ((totalShortfallUnits / totalSubmittedUnits) * 100).toFixed(1) : 0

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Stock Management Reports</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-yellow-400">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Pending Review</h3>
          <p className="text-3xl font-bold">{summary.pendingCount}</p>
          <p className="text-sm text-zinc-400 mt-2">Entries awaiting action</p>
        </div>
        
        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-emerald-500">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Approved Entries</h3>
          <p className="text-3xl font-bold">{summary.approvedCount}</p>
          <p className="text-sm text-zinc-400 mt-2">Fully processed</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-orange-500">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Partial Approvals</h3>
          <p className="text-3xl font-bold">{summary.partiallyApprovedCount}</p>
          <p className="text-sm text-zinc-400 mt-2">With shortfalls</p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-lg shadow border-t-4 border-red-500">
          <h3 className="text-zinc-400 text-sm font-bold uppercase tracking-wider mb-2">Rejected Entries</h3>
          <p className="text-3xl font-bold">{summary.rejectedCount}</p>
          <p className="text-sm text-zinc-400 mt-2">Declined stock</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-zinc-900 rounded-lg shadow p-6 border border-zinc-800">
          <h2 className="text-xl font-bold mb-6">Stock Acceptance Metrics</h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-zinc-400">Units Approved vs Submitted</span>
                <span className="font-bold">{approvalRate}%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: `${approvalRate}%` }}></div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">{totalApprovedUnits} out of {totalSubmittedUnits} units accepted</p>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-zinc-400">Overall Shortfall Rate</span>
                <span className="font-bold text-orange-400">{shortfallRate}%</span>
              </div>
              <div className="w-full bg-zinc-800 rounded-full h-2">
                <div className="bg-orange-500 h-2 rounded-full" style={{ width: `${shortfallRate}%` }}></div>
              </div>
              <p className="text-xs text-zinc-500 mt-2">{totalShortfallUnits} units short-delivered across all processed entries</p>
            </div>
            
            <div className="pt-4 border-t border-zinc-800">
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">Pending Redeliveries:</span>
                <span className="font-bold text-lg">{pendingRedeliveryCount} items</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg shadow p-6 border border-zinc-800">
          <h2 className="text-xl font-bold mb-6">Top Suppliers by Volume (Entries)</h2>
          <div className="space-y-4">
            {sortedSuppliers.length === 0 ? (
              <p className="text-zinc-400 italic">No approved data yet.</p>
            ) : (
              sortedSuppliers.map((s, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-zinc-800 pb-3">
                  <span className="font-medium text-zinc-200">{idx + 1}. {s.name}</span>
                  <span className="font-bold text-emerald-400 bg-emerald-950/30 px-3 py-1 rounded-full text-sm">{s.count} Entries</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
