import { MetadataRoute } from 'next'

export const dynamic = 'force-dynamic'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://superpetroleum.com'

const staticRoutes = [
  { path: '', changeFreq: 'daily' as const, priority: 1.0 },
  { path: '/locations', changeFreq: 'weekly' as const, priority: 0.9 },
  { path: '/services', changeFreq: 'weekly' as const, priority: 0.9 },
  { path: '/fuel', changeFreq: 'weekly' as const, priority: 0.8 },
  { path: '/truck-care', changeFreq: 'weekly' as const, priority: 0.8 },
  { path: '/faq', changeFreq: 'weekly' as const, priority: 0.8 },
  { path: '/careers', changeFreq: 'weekly' as const, priority: 0.7 },
  { path: '/blog', changeFreq: 'daily' as const, priority: 0.9 },
  { path: '/contact', changeFreq: 'monthly' as const, priority: 0.7 },
  { path: '/privacy', changeFreq: 'monthly' as const, priority: 0.3 },
  { path: '/terms', changeFreq: 'monthly' as const, priority: 0.3 },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = staticRoutes.map(r => ({
    url: `${siteUrl}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFreq,
    priority: r.priority,
  }))

  let blogPages: MetadataRoute.Sitemap = []

  try {
    const { default: prisma } = await import('@/lib/prisma')
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true, updatedAt: true },
      orderBy: { publishedAt: 'desc' },
    })
    blogPages = posts.map(post => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  } catch {
    // DB unavailable — blog posts omitted, static pages still served
  }

  return [...staticPages, ...blogPages]
}
