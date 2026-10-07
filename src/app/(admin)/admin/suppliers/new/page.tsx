'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { supplierSchema, type SupplierFormValues } from '@/lib/validation/suppliers'
import { createSupplier } from '@/lib/actions/suppliers'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewSupplierPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const form = useForm<SupplierFormValues>({
    resolver: zodResolver(supplierSchema) as any,
    defaultValues: {
      business_name: '',
      contact_name: '',
      phone: '+91',
      address: '',
    }
  })

  const onSubmit = async (data: any) => {
    setError('')
    const res = await createSupplier(data)
    if (res.ok) {
      router.push('/admin/suppliers')
    } else {
      setError(res.error || 'Failed to create supplier')
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Supplier</h1>

      {error && <div className="bg-red-950/50 text-red-400 p-3 rounded mb-4">{error}</div>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-zinc-900 p-6 rounded shadow">
        <div className="space-y-2">
          <Label>Business Name</Label>
          <Input {...form.register('business_name')} />
          {form.formState.errors.business_name && <p className="text-red-400 text-sm">{form.formState.errors.business_name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Contact Name (Optional)</Label>
          <Input {...form.register('contact_name')} />
        </div>

        <div className="space-y-2">
          <Label>Phone Number</Label>
          <Input type="tel" {...form.register('phone')} />
          {form.formState.errors.phone && <p className="text-red-400 text-sm">{form.formState.errors.phone.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>Address (Optional)</Label>
          <Input {...form.register('address')} />
        </div>

        <div className="pt-4 flex gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Saving...' : 'Save Supplier'}
          </Button>
        </div>
      </form>
    </div>
  )
}
