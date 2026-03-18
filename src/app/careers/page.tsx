import { Careers } from '../components/careers';
import { generatePageMetadata } from '../lib/metadata';
import type { Metadata } from 'next';

export const metadata: Metadata = generatePageMetadata({
  title: 'Careers - Join Our Team',
  description: 'Explore career opportunities at Super Petroleum. Join our team of professionals serving drivers across Georgia. View open positions and apply today.',
  path: '/careers',
});

export default function CareersPage() {
  return <Careers />;
}




