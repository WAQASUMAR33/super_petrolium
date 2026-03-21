import { MetadataRoute } from 'next'
import prisma from '@/lib/prisma'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superpetroleum.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes = [
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

  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly' as const,
    priority: route === '' ? 1 : route === '/blog' ? 0.9 : 0.8,
  }))

  let blogPages: MetadataRoute.Sitemap = []

  try {
    const blogPosts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })

    blogPages = blogPosts.map(post => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // DB not yet available — return static pages only
  }

  return [...staticPages, ...blogPages]
}
