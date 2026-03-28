import { Services } from '../components/Services';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Our Services - High Speed Diesel, Free Truck Parking & More | TA Travel Center Georgia',
  description: 'Super Petroleum — part of the Travel Centers of America (TA) network — offers high speed diesel, free truck parking, reserve truck parking, dining, truck repair, and 24/7 services in Adel & Cordele, GA.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Services />
    </div>
  );
}




