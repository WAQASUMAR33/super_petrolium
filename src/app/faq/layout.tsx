import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Super Petroleum',
  description: 'Find answers to common questions about fuel services, truck repairs, parking, dining, and more at Super Petroleum travel centers.',
  alternates: { canonical: 'https://superpetroleums.com/faq/' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What fuel cards do you accept?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We accept all major fuel cards including Comdata, T-Check, TCH, Fleet One, EFS, and more.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer DEF (Diesel Exhaust Fluid)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide DEF at all our locations alongside our premium diesel.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer 24/7 emergency repair services?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Our truck care shop provides 24/7 emergency roadside assistance. Call 1-800-ROAD-HELP for urgent repairs.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of truck repairs do you perform?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We perform oil changes, brake service, tire repair and replacement, engine diagnostics, electrical repairs, DOT inspections, trailer repair, and cooling system service.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are your operating hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our fuel stations are open 24/7. Truck care shop: Mon-Fri 6AM-10PM, Sat 7AM-9PM, Sun 8AM-8PM, with 24/7 emergency service.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is truck parking available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer secure, spacious truck parking with 24/7 security monitoring for all vehicle sizes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What dining options are available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer full-service restaurants, hot meals, snacks, beverages, fresh coffee, and healthy meal options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have clean restroom and shower facilities?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we maintain clean, private shower facilities available 24/7 with fresh towels and premium toiletries.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you have WiFi available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide free high-speed WiFi throughout our facilities with no time limits or login requirements.',
      },
    },
  ],
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
