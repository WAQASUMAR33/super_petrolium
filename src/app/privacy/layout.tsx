import { Metadata } from 'next';
import { generatePageMetadata } from '../lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy - Super Petroleum',
  description: 'Read Super Petroleum\'s privacy policy to understand how we collect, use, and protect your personal information.',
  path: '/privacy',
});

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}








