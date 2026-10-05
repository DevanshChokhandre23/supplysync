import { z } from 'zod'

export const supplierSchema = z.object({
  business_name: z.string().min(2, 'Business name is required'),
  contact_name: z.string().optional(),
  phone: z.string().regex(/^\+91[0-9]{10}$/, 'Must be a valid Indian phone number starting with +91'),
  gst_number: z.string().length(15, 'GST must be exactly 15 characters').optional().or(z.literal('')),
  address: z.string().optional(),
  payment_terms_days: z.coerce.number().int().min(0).default(0),
})

export type SupplierFormValues = z.infer<typeof supplierSchema>
