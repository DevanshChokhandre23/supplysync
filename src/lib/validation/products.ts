import { z } from 'zod'

export const productSchema = z.object({
  name: z.string().min(2, 'Product name is required'),
  sku: z.string().optional(),
  base_uom: z.string().min(1, 'Base unit of measure is required'),
  default_tax_rate: z.coerce.number().min(0).max(100),
  hsn_code: z.string().optional(),
})

export type ProductFormValues = z.infer<typeof productSchema>
