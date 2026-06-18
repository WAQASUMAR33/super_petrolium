import { Locations } from '../components/Locations';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Locations - Marathon Stations in Adel & Cordele, Georgia',
  description: 'Find Super Petroleum — proud Marathon station in Adel, GA and Marathon station in Cordele, GA. High speed diesel, free truck parking, reserve truck parking, dining, and 24/7 services off I-75.',
  path: '/locations',
});

export default function LocationsPage() {
  return <Locations />;
}




