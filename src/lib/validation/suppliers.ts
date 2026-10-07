import { z } from 'zod'

export const supplierSchema = z.object({
  business_name: z.string().min(2, 'Business name is required'),
  contact_name: z.string().optional(),
  phone: z.string().regex(/^\+91[0-9]{10}$/, 'Must be a valid Indian phone number starting with +91'),
  address: z.string().optional(),
})

export type SupplierFormValues = z.infer<typeof supplierSchema>
