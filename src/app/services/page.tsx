import { Services } from '../components/Services';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services - High Speed Diesel, Free Truck Parking & More | Marathon Station Georgia',
  description: 'Super Petroleum — proud Marathon station in Adel, GA and Marathon station in Cordele, GA — offers high speed diesel, free truck parking, reserve truck parking, dining, truck repair, and 24/7 services.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Services />
    </div>
  );
}




