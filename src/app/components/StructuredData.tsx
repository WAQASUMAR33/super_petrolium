interface StructuredDataProps {
  type?: 'Organization' | 'LocalBusiness' | 'WebSite'
  data?: Record<string, any>
}

export function StructuredData({ type = 'LocalBusiness', data }: StructuredDataProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superpetroleum.com'
  
  const defaultData = {
    '@context': 'https://schema.org',
    '@type': type,
    name: 'Super Petroleum',
    description: 'Professional drivers deserve professional service. Find quality fuel, food, and facilities at our Georgia travel centers.',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    image: `${baseUrl}/og-image.jpg`,
    telephone: '+1-800-ROAD-HELP',
    email: 'superpetroleum2021@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1503 West 4th St',
      addressLocality: 'Adel',
      addressRegion: 'GA',
      postalCode: '31620',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '31.1375',
      longitude: '-83.4239',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    priceRange: '$$',
    servesCuisine: 'American',
    acceptsReservations: 'False',
    ...data,
  }

  const mergedData = { ...defaultData, ...data }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(mergedData) }}
    />
  )
}

