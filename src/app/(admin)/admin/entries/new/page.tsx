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

export default function NewEntryPage() {
  const router = useRouter()
  const supabase = createClient()
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [suppliers, setSuppliers] = useState<any[]>([])
  const [uploading, setUploading] = useState(false)
  
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

  useEffect(() => {
    async function loadData() {
      const [suppRes] = await Promise.all([
        supabase.from('suppliers').select('id, business_name').eq('status', 'active')
      ])
      if (suppRes.data) setSuppliers(suppRes.data)
    }
    loadData()
  }, [supabase])

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return
    setUploading(true)
    const file = e.target.files[0]
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random()}.${fileExt}`
    const filePath = `${fileName}`

    const { error: uploadError } = await supabase.storage
      .from('invoices')
      .upload(filePath, file)

    if (uploadError) {
      setError(uploadError.message)
    } else {
      const currentAttachments = form.getValues('attachments') || []
      form.setValue('attachments', [...currentAttachments, { storage_path: filePath, kind: 'invoice' }])
    }
    setUploading(false)
  }

  const onSubmit = async (data: any) => {
    setError('')
    setSuccess('')
    const res = await createPurchaseEntry(data)
    if (res.ok) {
      form.reset()
      setSuccess('Entry created successfully! You can view it in the entries list.')
    } else {
      setError(res.error || 'Failed to create entry')
    }
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Record Purchase Entry</h1>
      
      {error && <div className="bg-red-950/50 text-red-400 p-3 rounded mb-4">{error}</div>}
      {success && (
        <div className="bg-emerald-950/50 text-emerald-400 p-4 rounded mb-4 flex justify-between items-center">
          <span>{success}</span>
          <Button asChild variant="outline" size="sm">
            <Link href="/admin/entries">View Entries List</Link>
          </Button>
        </div>
      )}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-zinc-900 p-6 rounded shadow">
        
        {/* Header section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Supplier</Label>
            <select 
              {...form.register('supplier_id')} 
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
            >
              <option value="">Select a supplier...</option>
              {suppliers.map(s => <option key={s.id} value={s.id}>{s.business_name}</option>)}
            </select>
            {form.formState.errors.supplier_id && <p className="text-red-400 text-xs">{form.formState.errors.supplier_id.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Invoice Number</Label>
            <Input {...form.register('invoice_number')} />
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
            {form.formState.errors.invoice_number && <p className="text-red-400 text-xs">{form.formState.errors.invoice_number.message}</p>}
          </div>

          <div className="space-y-2">
            <Label>Invoice Date</Label>
            <Input type="date" {...form.register('invoice_date')} />
          </div>

          <div className="space-y-2">
            <Label>Notes</Label>
            <Input {...form.register('notes')} />
          </div>
        </div>

        {/* Line Items */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Line Items</h2>
            <Button type="button" variant="outline" size="sm" onClick={() => append({ product_name: '', purchase_uom: 'piece', quantity_submitted: 1 })}>
              + Add Item
            </Button>
          </div>
          
          <div className="space-y-4">
            {fields.map((field, index) => (
              <div key={field.id} className="grid grid-cols-12 gap-2 p-4 border rounded relative">
                <div className="col-span-5 space-y-1">
                  <Label className="text-xs">Product Name</Label>
                  <Input {...form.register(`items.${index}.product_name` as const)} required placeholder="Enter product name" />
                </div>
                
                <div className="col-span-3 space-y-1">
                  <Label className="text-xs">UOM</Label>
                  <Input {...form.register(`items.${index}.purchase_uom` as const)} required placeholder="e.g. kg, piece" />
                </div>

                <div className="col-span-3 space-y-1">
                  <Label className="text-xs">Qty</Label>
                  <Input type="number" step="1" {...form.register(`items.${index}.quantity_submitted` as const)} required />
                </div>

                <div className="col-span-1 flex items-end">
                  <Button type="button" variant="destructive" size="sm" onClick={() => remove(index)}>X</Button>
                </div>
              </div>
            ))}
          </div>
          {form.formState.errors.items && <p className="text-red-400 text-sm mt-2">{form.formState.errors.items.message}</p>}
        </div>

        {/* Attachments */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Attachments</h2>
          <div className="flex items-center gap-4">
            <Input type="file" onChange={handleFileUpload} disabled={uploading} accept="image/*,.pdf" />
            {uploading && <span className="text-sm text-zinc-400">Uploading...</span>}
          </div>
          {form.getValues('attachments')?.map((a, i) => (
             <div key={i} className="text-sm text-emerald-500">Attached: {a.storage_path}</div>
          ))}
        </div>

        <div className="pt-4 flex gap-4 border-t">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" disabled={form.formState.isSubmitting || uploading}>
            {form.formState.isSubmitting ? 'Saving...' : 'Submit Entry'}
          </Button>
        </div>
      </form>
    </div>
  )
}
