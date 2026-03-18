import { Metadata } from 'next';
import { generatePageMetadata } from '../lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Contact Us - Get in Touch',
  description: 'Contact Super Petroleum for inquiries, support, or to learn more about our travel centers. Call us at 1-800-ROAD-HELP or fill out our contact form.',
  path: '/contact',
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}








