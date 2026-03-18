import { Services } from '../components/Services';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services - Fuel, Parking, Dining & More',
  description: 'Discover our comprehensive services including quality fuel, secure truck parking, dining options, clean facilities, truck care, and more at Super Petroleum travel centers.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Services />
    </div>
  );
}




