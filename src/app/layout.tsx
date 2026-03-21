import type { Metadata } from 'next'
import { Header } from './components/header'
import { Footer } from './components/footer'
import { StructuredData } from './components/StructuredData'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superpetroleum.com'
const gtmId = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-W2LSRPV5'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Super Petroleum - Travel Centers & Truck Stops',
    template: '%s | Super Petroleum',
  },
  description: 'Professional drivers deserve professional service. Find quality fuel, food, and facilities at our Georgia travel centers.',
  keywords: [
    'travel centers',
    'truck stops',
    'gas stations',
    'fuel',
    'diesel',
    'truck parking',
    'Georgia',
    'Adel GA',
    'truck care',
    'fuel cards',
    'professional drivers',
    'rest stops',
  ],
  authors: [{ name: 'Super Petroleum' }],
  creator: 'Super Petroleum',
  publisher: 'Super Petroleum',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Super Petroleum',
    title: 'Super Petroleum - Travel Centers & Truck Stops',
    description: 'Professional drivers deserve professional service. Find quality fuel, food, and facilities at our Georgia travel centers.',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Super Petroleum - Travel Centers & Truck Stops',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Super Petroleum - Travel Centers & Truck Stops',
    description: 'Professional drivers deserve professional service. Find quality fuel, food, and facilities at our Georgia travel centers.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'yIqRVtFkcqQ5bWhPROgNiqF3JBHSbhBVhxorfthU_VY',
  },
  alternates: {
    canonical: siteUrl,
  },
  category: 'Travel Centers & Fuel Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#FFD10C" />
        <meta name="geo.region" content="US-GA" />
        <meta name="geo.placename" content="Adel, Georgia" />
        <meta name="geo.position" content="31.1375;-83.4239" />
        <meta name="ICBM" content="31.1375, -83.4239" />
        {/* Preload critical hero background image */}
        <link rel="preload" as="image" href="/truckshop.jpg" fetchPriority="high" />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q98ZN6TZDL"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q98ZN6TZDL');
            `,
          }}
        />
        <StructuredData />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}