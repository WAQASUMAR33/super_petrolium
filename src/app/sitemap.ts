import { MetadataRoute } from 'next'
import { blogPosts } from './blog/data'

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
    '/blog',
    '/contact',
    '/privacy',
    '/terms',
  ]

  const staticPages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}

