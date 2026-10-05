import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'

export default async function ProductsPage() {
  const supabase = await createClient()
  const { data: products } = await supabase.from('products').select('*').order('created_at', { ascending: false })

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Products Master</h1>
        <Button asChild>
          <Link href="/admin/products/new">Add Product</Link>
        </Button>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-800">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">SKU</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Base UOM</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Tax Rate</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 divide-y divide-zinc-800">
            {products?.map(p => (
              <tr key={p.id}>
                <td className="px-6 py-4 whitespace-nowrap">{p.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{p.sku || '-'}</td>
                <td className="px-6 py-4 whitespace-nowrap">{p.base_uom}</td>
                <td className="px-6 py-4 whitespace-nowrap">{p.default_tax_rate}%</td>
              </tr>
            ))}
            {(!products || products.length === 0) && (
              <tr>
                <td colSpan={4} className="px-6 py-4 text-center text-zinc-400">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
