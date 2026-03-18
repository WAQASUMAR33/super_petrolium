import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Super Petroleum',
  description: 'Find answers to common questions about fuel services, truck repairs, parking, dining, and more at Super Petroleum travel centers.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}








