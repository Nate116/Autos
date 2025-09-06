import { z } from "zod";

export const PhoneNG = z.string().regex(/^(?:\+234|0)[789][01]\d{8}$/,"Invalid NG phone");
export const LatLng = z.object({ lat: z.number(), lng: z.number() });
export const CreateOrderDto = z.object({
  martId: z.string(),
  services: z.array(z.object({
    type: z.enum(['washFold','dryClean','iron','stainRemoval']),
    qtyKg: z.number().min(0).optional(),
    qtyItems: z.number().min(0).optional()
  })).min(1),
  pickupAddressId: z.string(),
  dropoffAddressId: z.string(),
  pickupWindowStart: z.string(),
  pickupWindowEnd: z.string(),
  dropoffWindowStart: z.string(),
  dropoffWindowEnd: z.string(),
  promoCode: z.string().optional()
});
export type CreateOrderInput = z.infer<typeof CreateOrderDto>;
