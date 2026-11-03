import { Locations } from '../components/Locations';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Location - Marathon Station in Adel, Georgia',
  description: 'Find Super Petroleum — proud Marathon station in Adel, GA. High speed diesel, free truck parking, reserve truck parking, dining, and 24/7 services off I-75.',
  path: '/locations',
});

export default function LocationsPage() {
  return <Locations />;
}




