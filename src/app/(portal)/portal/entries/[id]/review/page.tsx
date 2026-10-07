'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { reviewSchema, type ReviewFormValues } from '@/lib/validation/review'
import { reviewPurchaseEntry } from '@/lib/actions/review'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ReviewEntryPage() {
  const router = useRouter()
  const params = useParams()
  const entryId = params.id as string
  const supabase = createClient()
  
  const [entry, setEntry] = useState<any>(null)
  const [items, setItems] = useState<any[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  const form = useForm<ReviewFormValues>({
    defaultValues: {
      entry_id: entryId,
      decision: 'approved',
      reason: '',
      items: []
    }
  })

  const { fields, replace } = useFieldArray({
    control: form.control,
    name: "items"
  })

  useEffect(() => {
    async function fetchEntry() {
      const [entryRes, itemsRes] = await Promise.all([
        supabase.from('purchase_entries').select('*, suppliers(business_name)').eq('id', entryId).single(),
        supabase.from('purchase_items').select('*').eq('purchase_entry_id', entryId)
      ])
      
      if (entryRes.error) {
        console.error("Fetch error:", entryRes.error)
        setError(`Failed to load entry: ${entryRes.error.message}`)
        setLoading(false)
        return
      }

      if (entryRes.data) {
        setEntry(entryRes.data)
      }
      if (itemsRes.data) {
        setItems(itemsRes.data)
        replace(itemsRes.data.map(item => ({
          item_id: item.id,
          quantity_approved: item.quantity_submitted,
          shortfall_resolution: ''
        })))
      }
      setLoading(false)
    }
    fetchEntry()
  }, [entryId, supabase, replace])

  const decision = form.watch('decision')

  const onSubmit = async (data: any) => {
    setError('')
    const res = await reviewPurchaseEntry(data)
    if (res.ok) {
      router.push(`/portal/entries/${entryId}`)
    } else {
      setError(res.error || 'Failed to review entry')
    }
  }

  if (loading) return <div className="p-8">Loading...</div>
  if (error && !entry) return <div className="p-8 text-red-400 font-bold bg-red-950/50 rounded">Error: {error}</div>
  if (!entry) return <div className="p-8">Entry not found</div>

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Review Purchase Entry</h1>
      
      {error && <div className="bg-red-950/50 text-red-400 p-3 rounded mb-4">{error}</div>}

      <div className="grid grid-cols-2 gap-8 mb-8">
        <div className="bg-zinc-900 p-6 rounded shadow border border-zinc-800">
          <h2 className="font-semibold text-lg border-b pb-2 mb-4">Entry Details</h2>
          <div className="space-y-2 text-sm">
            <p><span className="text-zinc-400">Supplier:</span> {entry.suppliers?.business_name}</p>
            <p><span className="text-zinc-400">Invoice Number:</span> {entry.invoice_number}</p>
            <p><span className="text-zinc-400">Invoice Date:</span> {entry.invoice_date}</p>
            <p><span className="text-zinc-400">Status:</span> {entry.status}</p>
          </div>
        </div>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-zinc-900 p-6 rounded shadow">
        
        <div className="space-y-4">
          <Label className="text-lg">Decision</Label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" value="approved" {...form.register('decision')} />
              Fully Approve
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="partial" {...form.register('decision')} />
              Partially Approve
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" value="rejected" {...form.register('decision')} />
              Reject
            </label>
          </div>
        </div>

        {(decision === 'partial' || decision === 'rejected') && (
          <div className="space-y-2">
            <Label>Reason for {decision === 'partial' ? 'Partial Approval' : 'Rejection'}</Label>
            <Input {...form.register('reason')} placeholder="Please provide a reason..." required />
            {form.formState.errors.reason && <p className="text-red-400 text-sm">{form.formState.errors.reason.message}</p>}
          </div>
        )}

        {decision === 'partial' && (
          <div className="space-y-4 pt-4 border-t">
            <h3 className="font-semibold text-lg">Line Item Adjustments</h3>
            <p className="text-sm text-zinc-400">Adjust the received quantities and set a resolution for any shortfalls.</p>
            
            <table className="min-w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-2">Product</th>
                  <th className="text-right py-2">Submitted Qty</th>
                  <th className="text-right py-2">Approved Qty</th>
                  <th className="text-left py-2 pl-4">Shortfall Resolution</th>
                </tr>
              </thead>
              <tbody>
                {fields.map((field, index) => {
                  const dbItem = items.find(i => i.id === field.item_id)
                  if (!dbItem) return null
                  
                  const approvedQty = form.watch(`items.${index}.quantity_approved`)
                  const isShort = (approvedQty || 0) < dbItem.quantity_submitted

                  return (
                    <tr key={field.id} className="border-b">
                      <td className="py-2">{dbItem.product_name}</td>
                      <td className="py-2 text-right text-zinc-400">{dbItem.quantity_submitted} {dbItem.purchase_uom}</td>
                      <td className="py-2 text-right">
                        <Input 
                          type="number" 
                          step="0.001" 
                          className="w-24 ml-auto text-right h-8"
                          {...form.register(`items.${index}.quantity_approved`)} 
                        />
                      </td>
                      <td className="py-2 pl-4">
                        {isShort ? (
                          <select 
                            {...form.register(`items.${index}.shortfall_resolution`)}
                            className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm"
                            required
                          >
                            <option value="">Select resolution...</option>
                            <option value="pending_redelivery">Pending Redelivery</option>
                            <option value="short_closed">Short Closed</option>
                          </select>
                        ) : (
                          <span className="text-zinc-500 text-xs italic">N/A</span>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        <div className="pt-4 flex gap-4 border-t">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" disabled={form.formState.isSubmitting || entry.status !== 'pending'}>
            {form.formState.isSubmitting ? 'Processing...' : 'Confirm Decision'}
          </Button>
        </div>
      </form>
    </div>
  )
}
