import { TruckCareShop } from '../components/TruckCareShop';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Truck Care Shop - Professional Truck Maintenance & Repair',
  description: 'Professional truck maintenance and repair services. ASE certified technicians, 24/7 emergency service, oil changes, brake service, tire repair, and more.',
  path: '/truck-care',
});

export default function TruckCarePage() {
  return <TruckCareShop />;
}




