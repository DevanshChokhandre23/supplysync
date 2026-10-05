'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm, useFieldArray } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { purchaseEntrySchema, type PurchaseEntryFormValues } from '@/lib/validation/purchases'
import { createPurchaseEntry } from '@/lib/actions/purchases'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function SupplierNewEntryPage() {
  const router = useRouter()
  const supabase = createClient()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [uploading, setUploading] = useState(false)
  const [supplierId, setSupplierId] = useState<string | null>(null)
  const [recentEntries, setRecentEntries] = useState<any[]>([])
  
  const form = useForm<PurchaseEntryFormValues>({
    defaultValues: {
      supplier_id: '',
      invoice_number: '',
      invoice_date: new Date().toISOString().split('T')[0],
      notes: '',
      items: [{ product_name: '', purchase_uom: 'piece', quantity_submitted: 1 }],
      attachments: []
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items"
  })

  const loadData = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const { data: supplier } = await supabase.from('suppliers').select('id').eq('user_id', user.id).single()
      if (supplier) {
        setSupplierId(supplier.id)
        form.setValue('supplier_id', supplier.id, { shouldValidate: true })
        
        const { data: entries } = await supabase
          .from('purchase_entries')
          .select('*')
          .eq('supplier_id', supplier.id)
          .order('created_at', { ascending: false })
          .limit(5)
        if (entries) setRecentEntries(entries)
      }
    }
  }

  useEffect(() => {
    loadData()
  }, [supabase])

  // Ensure supplier_id stays set even if the hidden input mounts late
  useEffect(() => {
    if (supplierId) {
      form.setValue('supplier_id', supplierId, { shouldValidate: true })
    }
  }, [supplierId, form])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    setUploading(true)
    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    
    const { error: uploadError } = await supabase.storage
      .from('invoices')
      .upload(fileName, file)

    if (uploadError) {
      setError(uploadError.message)
    } else {
      const currentAttachments = form.getValues('attachments') || []
      form.setValue('attachments', [...currentAttachments, { storage_path: fileName, kind: 'invoice' }])
    }
    setUploading(false)
  }

  const onSubmit = async (data: any) => {
    setError('')
    setSuccess('')
    
    // Force supplier_id directly from React state to avoid RHF quirks
    const payload = {
      ...data,
      supplier_id: supplierId
    }

    const res = await createPurchaseEntry(payload)
    if (res.ok) {
      setSuccess('Entry submitted successfully!')
      form.reset({
        supplier_id: supplierId || '',
        invoice_number: '',
        invoice_date: new Date().toISOString().split('T')[0],
        notes: '',
        items: [{ product_name: '', purchase_uom: 'piece', quantity_submitted: 1 }],
        attachments: []
      })
      await loadData()
    } else {
      setError(res.error || 'Failed to submit entry')
    }
  }

  if (!supplierId) return <div className="p-8">Loading supplier profile...</div>

  return (
    <div className="p-8 max-w-7xl mx-auto mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Side: Form */}
        <div className="lg:col-span-2 space-y-6">
          <h1 className="text-3xl font-bold">Submit Purchase Entry</h1>
          
          {error && <div className="bg-red-950/50 text-red-400 p-3 rounded">{error}</div>}
          {success && (
            <div className="bg-emerald-950/50 text-emerald-400 p-4 rounded flex justify-between items-center">
              <span>{success}</span>
            </div>
          )}

          {Object.keys(form.formState.errors).length > 0 && (
            <div className="bg-red-950/50 text-red-400 p-3 rounded text-sm">
              <p>Please fix the errors in the form before submitting.</p>
              <p className="mt-2 text-xs font-mono">Failing fields: {Object.keys(form.formState.errors).join(', ')}</p>
              {form.formState.errors.items && (
                <p className="mt-1 text-xs font-mono">Item errors: {
                  Array.isArray(form.formState.errors.items) 
                    ? form.formState.errors.items.map((err, i) => err ? `[Item ${i+1}: ${Object.keys(err).join(', ')}]` : '').filter(Boolean).join(' ') 
                    : 'Invalid array'
                }</p>
              )}
            </div>
          )}

          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-zinc-900 p-6 rounded shadow">
            <input type="hidden" {...form.register('supplier_id')} />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label>Invoice Number</Label>
                <Input {...form.register('invoice_number')} required />
                {form.formState.errors.invoice_number && <p className="text-red-400 text-xs">{form.formState.errors.invoice_number.message}</p>}
              </div>

              <div className="space-y-2">
                <Label>Invoice Date</Label>
                <Input type="date" {...form.register('invoice_date')} required />
              </div>

              <div className="space-y-2">
                <Label>Notes</Label>
                <Input {...form.register('notes')} />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Line Items</h2>
                <Button type="button" variant="outline" size="sm" onClick={() => append({ product_name: '', purchase_uom: 'piece', quantity_submitted: 1 })}>
                  + Add Item
                </Button>
              </div>
              
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="grid grid-cols-1 md:grid-cols-12 gap-2 p-4 border rounded relative">
                    <div className="col-span-1 md:col-span-5 space-y-1">
                      <Label className="text-xs">Product Name</Label>
                      <Input {...form.register(`items.${index}.product_name` as const)} required placeholder="Enter product name" />
                      {form.formState.errors.items?.[index]?.product_name && <p className="text-red-400 text-[10px]">{form.formState.errors.items[index]?.product_name?.message}</p>}
                    </div>
                    
                    <div className="col-span-1 md:col-span-3 space-y-1">
                      <Label className="text-xs">UOM</Label>
                      <Input {...form.register(`items.${index}.purchase_uom` as const)} required placeholder="e.g. kg, piece" />
                      {form.formState.errors.items?.[index]?.purchase_uom && <p className="text-red-400 text-[10px]">{form.formState.errors.items[index]?.purchase_uom?.message}</p>}
                    </div>

                    <div className="col-span-1 md:col-span-3 space-y-1">
                      <Label className="text-xs">Qty</Label>
                      <Input type="number" step="1" {...form.register(`items.${index}.quantity_submitted` as const)} required />
                      {form.formState.errors.items?.[index]?.quantity_submitted && <p className="text-red-400 text-[10px]">{form.formState.errors.items[index]?.quantity_submitted?.message}</p>}
                    </div>

                    <div className="col-span-1 flex items-end">
                      <Button type="button" variant="destructive" size="sm" className="w-full md:w-auto" onClick={() => remove(index)}>X</Button>
                    </div>
                  </div>
                ))}
              </div>
              {form.formState.errors.items && <p className="text-red-400 text-sm mt-2">{form.formState.errors.items.message}</p>}
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Attach Invoice / Challan</h2>
              <div className="flex items-center gap-4">
                <Input type="file" onChange={handleFileUpload} disabled={uploading} accept="image/*,.pdf" />
                {uploading && <span className="text-sm text-zinc-400">Uploading...</span>}
              </div>
              {form.getValues('attachments')?.map((a, i) => (
                 <div key={i} className="text-sm text-emerald-500">Attached: {a.storage_path}</div>
              ))}
              <p className="text-xs text-zinc-400">Please ensure the invoice photo is clear and readable.</p>
            </div>

            <div className="pt-4 flex gap-4 border-t">
              <Button type="button" variant="outline" onClick={() => router.back()} className="w-full md:w-auto">Cancel</Button>
              <Button type="submit" disabled={form.formState.isSubmitting || uploading} className="w-full md:w-auto">
                {form.formState.isSubmitting ? 'Submitting...' : 'Submit Entry'}
              </Button>
            </div>
          </form>
        </div>

        {/* Right Side: Recent Entries Sideline */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-zinc-900 p-6 rounded shadow sticky top-8">
            <h2 className="text-xl font-bold mb-4">Recent Submissions</h2>
            <div className="space-y-4">
              {recentEntries.length === 0 ? (
                <p className="text-sm text-zinc-400 italic">No recent entries.</p>
              ) : (
                recentEntries.map(entry => (
                  <div key={entry.id} className="border-b pb-3 last:border-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-semibold text-sm">{entry.invoice_number}</span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        entry.status === 'approved' ? 'bg-emerald-900/50 text-emerald-400' :
                        entry.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        entry.status === 'partially_approved' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-zinc-800 text-zinc-200'
                      }`}>
                        {entry.status}
                      </span>
                    </div>
                    <div className="text-xs text-zinc-400 mb-2">
                      Date: {entry.invoice_date}
                    </div>
                    <Button asChild variant="link" size="sm" className="p-0 h-auto">
                      <Link href={`/portal/entries/${entry.id}`}>View Details</Link>
                    </Button>
                  </div>
                ))
              )}
            </div>
            
            <div className="mt-6 pt-4 border-t">
              <Button asChild variant="outline" className="w-full">
                <Link href="/portal">View All Entries</Link>
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
