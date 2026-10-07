'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { productSchema, type ProductFormValues } from '@/lib/validation/products'
import { createProduct } from '@/lib/actions/products'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function NewProductPage() {
  const router = useRouter()
  const [error, setError] = useState('')

  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema) as any,
    defaultValues: {
      name: '',
      sku: '',
      base_uom: 'piece',
    }
  })

  const onSubmit = async (data: any) => {
    setError('')
    const res = await createProduct(data)
    if (res.ok) {
      router.push('/admin/products')
    } else {
      setError(res.error || 'Failed to create product')
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Product</h1>

      {error && <div className="bg-red-950/50 text-red-400 p-3 rounded mb-4">{error}</div>}

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 bg-zinc-900 p-6 rounded shadow">
        <div className="space-y-2">
          <Label>Product Name</Label>
          <Input {...form.register('name')} />
          {form.formState.errors.name && <p className="text-red-400 text-sm">{form.formState.errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label>SKU (Optional)</Label>
          <Input {...form.register('sku')} />
        </div>

        <div className="space-y-2">
          <Label>Base UOM</Label>
          <Input {...form.register('base_uom')} placeholder="e.g. kg, piece, box" />
          {form.formState.errors.base_uom && <p className="text-red-400 text-sm">{form.formState.errors.base_uom.message}</p>}
        </div>

        <div className="pt-4 flex gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>Cancel</Button>
          <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Saving...' : 'Save Product'}
          </Button>
        </div>
      </form>
    </div>
  )
}
