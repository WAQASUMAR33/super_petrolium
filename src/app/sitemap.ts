import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superpetroleum.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/locations',
    '/services',
    '/fuel',
    '/truck-care',
    '/faq',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
  ]

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}

