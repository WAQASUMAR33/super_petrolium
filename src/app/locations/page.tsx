import { Locations } from '../components/Locations';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Locations - Find a Travel Center Near You',
  description: 'Find Super Petroleum travel centers and truck stops across Georgia. Get directions, hours, contact information, and services available at each location.',
  path: '/locations',
});

export default function LocationsPage() {
  return <Locations />;
}




