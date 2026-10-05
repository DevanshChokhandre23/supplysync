import { z } from 'zod'

export const purchaseItemSchema = z.object({
  product_name: z.string().min(1, 'Product name is required'),
  purchase_uom: z.string().min(1),
  quantity_submitted: z.coerce.number().int().min(1),
})

export const purchaseAttachmentSchema = z.object({
  storage_path: z.string().min(1),
  kind: z.enum(['invoice', 'challan', 'photo']),
})

export const purchaseEntrySchema = z.object({
  supplier_id: z.string().min(36, 'Invalid UUID'),
  invoice_number: z.string().min(1, 'Invoice number is required'),
  invoice_date: z.string().min(1, 'Invoice date is required'),
  notes: z.string().optional(),
  items: z.array(purchaseItemSchema).min(1, 'At least one item is required'),
  attachments: z.array(purchaseAttachmentSchema).optional(),
})

export type PurchaseEntryFormValues = z.infer<typeof purchaseEntrySchema>
export type PurchaseItemFormValues = z.infer<typeof purchaseItemSchema>
