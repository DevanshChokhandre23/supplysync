import { z } from 'zod'

export const reviewItemSchema = z.object({
  item_id: z.string().uuid(),
  quantity_approved: z.coerce.number().min(0),
  shortfall_resolution: z.enum(['pending_redelivery', 'short_closed', 'credit_note', '']).optional()
})

export const reviewSchema = z.object({
  entry_id: z.string().uuid(),
  decision: z.enum(['approved', 'partial', 'rejected']),
  reason: z.string().optional(),
  items: z.array(reviewItemSchema).optional()
}).refine(data => {
  if ((data.decision === 'partial' || data.decision === 'rejected') && (!data.reason || data.reason.trim() === '')) {
    return false
  }
  return true
}, {
  message: "Reason is required for partial approval or rejection",
  path: ["reason"]
})

export type ReviewFormValues = z.infer<typeof reviewSchema>
