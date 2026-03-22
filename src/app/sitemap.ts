import { MetadataRoute } from 'next'
import pool from '@/lib/db'
import type { RowDataPacket } from 'mysql2'

const siteUrl = 'https://superpetroleums.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`,           lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${siteUrl}/locations/`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/services/`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/blog/`,      lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${siteUrl}/fuel/`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/truck-care/`,lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/faq/`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/careers/`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact/`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy/`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${siteUrl}/terms/`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  let blogRoutes: MetadataRoute.Sitemap = []
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT slug, updatedAt FROM BlogPost WHERE published = 1 ORDER BY publishedAt DESC'
    )
    blogRoutes = rows.map(post => ({
      url: `${siteUrl}/blog/${post.slug}/`,
      lastModified: new Date(post.updatedAt),
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  } catch {
    // DB unavailable at build time — blog posts excluded
  }

  return [...staticRoutes, ...blogRoutes]
}
