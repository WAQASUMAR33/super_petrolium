import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Super Petroleum | Travel Centers of America (TA) Georgia',
  description: 'Answers to common questions about high speed diesel, free truck parking, reserve truck parking, dining, and truck repairs at Super Petroleum — part of the Travel Centers of America (TA) network in Adel & Cordele, GA.',
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
      name: 'Do you offer high speed diesel and DEF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide high speed diesel at high-flow pump lanes, and DEF is available at every fuel island. No separate lanes needed — grab both at the same pump.',
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
      name: 'Is truck parking free? Can I reserve truck parking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Free truck parking is available at both locations — no fees, no membership. You can also reserve truck parking by calling ahead. Both options include 24/7 security monitoring and pull-through spaces for all rig sizes.',
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
    {
      '@type': 'Question',
      name: 'Is Super Petroleum part of Travel Centers of America (TA)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Super Petroleum is part of the Travel Centers of America (TA) network. Our locations in Adel and Cordele, Georgia offer high speed diesel, free truck parking, reserve truck parking, dining, and full driver services.',
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
