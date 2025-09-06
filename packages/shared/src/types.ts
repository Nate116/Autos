export type Role = 'customer' | 'mart' | 'courier' | 'admin';
export type ServiceType = 'washFold' | 'dryClean' | 'iron' | 'stainRemoval';
export type OrderStatus =
  | 'searching_mart' | 'awaiting_pickup' | 'picked_up'
  | 'in_progress' | 'ready' | 'out_for_delivery'
  | 'completed' | 'cancelled' | 'refunded';

export const NIGERIA_CITIES = [
  'Lagos', 'Akure', 'Ado-Ekiti', 'Abeokuta', 'Ibadan'
] as const;
export type NgCity = typeof NIGERIA_CITIES[number];
