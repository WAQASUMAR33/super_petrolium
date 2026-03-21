import { MetadataRoute } from 'next'

const siteUrl =  'https://superpetroleums.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`,           lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${siteUrl}/locations`,  lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/services`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${siteUrl}/blog`,       lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${siteUrl}/fuel`,       lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/truck-care`, lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/faq`,        lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${siteUrl}/careers`,    lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${siteUrl}/contact`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/privacy`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
    { url: `${siteUrl}/terms`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
