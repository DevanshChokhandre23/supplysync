import { createClient } from '@/lib/supabase/server'
import { EntryComments } from '@/components/entry-comments'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default async function SupplierEntryDetail({ params }: { params: Promise<{ id: string }> }) {
  const supabase = await createClient()
  const { id: entryId } = await params
  
  // RLS protects this data; if it's not theirs, it returns null
  const { data: entry } = await supabase
    .from('purchase_entries')
    .select('*')
    .eq('id', entryId)
    .single()

  if (!entry) notFound()

  const { data: items } = await supabase
    .from('purchase_items')
    .select('*')
    .eq('purchase_entry_id', entryId)

  const { data: comments } = await supabase
    .from('entry_comments')
    .select('*, users(full_name, role)')
    .eq('purchase_entry_id', entryId)
    .order('created_at', { ascending: true })

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-3xl font-bold">Invoice: {entry.invoice_number}</h1>
          <span className="px-3 py-1 rounded-full text-sm font-bold bg-zinc-800">
            {entry.status.toUpperCase()}
          </span>
        </div>
        
        {entry.status === 'pending' && (
          <Button asChild>
            <Link href={`/portal/entries/${entry.id}/review`}>Review Entry</Link>
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-8">
          <div className="bg-zinc-900 rounded-lg shadow overflow-hidden">
            <h3 className="px-6 py-4 font-semibold border-b bg-black">Line Items</h3>
            <table className="min-w-full divide-y divide-zinc-800">
              <thead className="bg-black text-xs text-zinc-400 uppercase">
                <tr>
                  <th className="px-6 py-3 text-left">Product</th>
                  <th className="px-6 py-3 text-right">Submitted Qty</th>
                  <th className="px-6 py-3 text-right">Approved Qty</th>
                </tr>
              </thead>
              <tbody className="bg-zinc-900 divide-y divide-zinc-800 text-sm">
                {items?.map(item => (
                  <tr key={item.id} className={item.quantity_approved !== null && item.quantity_approved < item.quantity_submitted ? 'bg-orange-50' : ''}>
                    <td className="px-6 py-4">{item.product_name}</td>
                    <td className="px-6 py-4 text-right">{item.quantity_submitted} {item.purchase_uom}</td>
                    <td className="px-6 py-4 text-right font-medium">
                      {item.quantity_approved !== null ? item.quantity_approved : 'Pending'}
                      {item.shortfall_resolution && <span className="block text-xs text-red-400">{item.shortfall_resolution}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-8">
          <EntryComments entryId={entry.id} initialComments={comments || []} />
        </div>
      </div>
    </div>
  )
}
