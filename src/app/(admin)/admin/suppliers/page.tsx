import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { Button } from '@/components/ui/button'

export default async function SuppliersPage() {
  const supabase = await createClient()
  const { data: suppliers } = await supabase.from('suppliers').select('*').order('created_at', { ascending: false })

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Suppliers</h1>
        <Button asChild>
          <Link href="/admin/suppliers/new">Add Supplier</Link>
        </Button>
      </div>

      <div className="bg-zinc-900 rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-zinc-800">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Business Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Phone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-zinc-400 uppercase">Status</th>
            </tr>
          </thead>
          <tbody className="bg-zinc-900 divide-y divide-zinc-800">
            {suppliers?.map(s => (
              <tr key={s.id}>
                <td className="px-6 py-4 whitespace-nowrap">{s.business_name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{s.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${s.status === 'active' ? 'bg-emerald-900/50 text-emerald-400' : 'bg-red-100 text-red-800'}`}>
                    {s.status}
                  </span>
                </td>
              </tr>
            ))}
            {(!suppliers || suppliers.length === 0) && (
              <tr>
                <td colSpan={3} className="px-6 py-4 text-center text-zinc-400">No suppliers found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
