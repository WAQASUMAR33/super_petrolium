import { Metadata } from 'next';
import { generatePageMetadata } from '../lib/metadata';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms and Conditions - Super Petroleum',
  description: 'Read Super Petroleum\'s terms and conditions. Understand the terms of use for our website and services.',
  path: '/terms',
});

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}








