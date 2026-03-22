import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import { generatePageMetadata } from '../../lib/metadata'
import { ArrowLeft, Clock, Tag, FolderOpen } from 'lucide-react'

export const revalidate = 60

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      select: { slug: true },
    })
    return posts.map(p => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await prisma.blogPost.findUnique({
    where: { slug },
    select: { title: true, metaTitle: true, metaDescription: true, slug: true, ogImage: true },
  })
  if (!post) return {}
  return generatePageMetadata({
    title: post.metaTitle || post.title,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.ogImage || undefined,
  })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  let post = null
  let recentPosts: { slug: string; title: string; publishedAt: Date | null; readTime: string; category: { name: string } | null }[] = []
  let categories: { name: string; slug: string; _count: { posts: number } }[] = []

  try {
    ;[post, recentPosts, categories] = await Promise.all([
      prisma.blogPost.findUnique({
        where: { slug, published: true },
        include: { category: { select: { name: true, slug: true } } },
      }),
      prisma.blogPost.findMany({
        where: { published: true, slug: { not: slug } },
        orderBy: { publishedAt: 'desc' },
        take: 5,
        select: { slug: true, title: true, publishedAt: true, readTime: true, category: { select: { name: true } } },
      }),
      prisma.category.findMany({
        select: { name: true, slug: true, _count: { select: { posts: { where: { published: true } } } } },
        orderBy: { name: 'asc' },
      }),
    ])
  } catch {
    // DB unreachable in local dev
  }

  if (!post) notFound()

  const lines = post.content.trim().split('\n')

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.excerpt || '',
    image: post.ogImage || 'https://superpetroleums.com/og-image.jpg',
    datePublished: post.publishedAt?.toISOString() || post.createdAt.toISOString(),
    dateModified: post.updatedAt.toISOString(),
    author: { '@type': 'Organization', name: 'Super Petroleum', url: 'https://superpetroleums.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Super Petroleum',
      logo: { '@type': 'ImageObject', url: 'https://superpetroleums.com/splogo.png' },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://superpetroleums.com/blog/${post.slug}/` },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-[#FFD10C] hover:underline text-sm mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="inline-block bg-[#FFD10C] text-black text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded mb-4">
            {post.category?.name ?? 'General'}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight max-w-3xl">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-400 text-sm items-center">
            {post.publishedAt && (
              <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            )}
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
            {post.tags && <span className="flex items-center gap-1"><Tag className="w-3.5 h-3.5" />{post.tags}</span>}
          </div>
        </div>
      </div>

      {/* Content + Sidebar */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Main Article */}
          <div className="flex-1 min-w-0">
            <article className="bg-white rounded-xl shadow-sm p-8">
              {lines.map((line, i) => {
                if (!line.trim()) return null
                if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-3">{line.slice(3)}</h2>
                if (line.startsWith('# ')) return <h1 key={i} className="text-3xl font-bold text-gray-900 mt-8 mb-3">{line.slice(2)}</h1>
                if (line.startsWith('- ')) {
                  const match = line.match(/^- \*\*(.+?)\*\*(.*)$/)
                  if (match) return <li key={i} className="text-gray-700 ml-4 list-disc mb-1"><strong>{match[1]}</strong>{match[2]}</li>
                  return <li key={i} className="text-gray-700 ml-4 list-disc mb-1">{line.slice(2)}</li>
                }
                if (/^\d+\./.test(line)) {
                  const text = line.replace(/^\d+\.\s*/, '')
                  const parts = text.split(/\*\*(.+?)\*\*/)
                  return (
                    <li key={i} className="text-gray-700 ml-4 list-decimal mb-1">
                      {parts.map((p, j) => j % 2 === 1 ? <strong key={j}>{p}</strong> : p)}
                    </li>
                  )
                }
                const parts = line.split(/\[(.+?)\]\((.+?)\)/)
                if (parts.length > 1) {
                  return (
                    <p key={i} className="text-gray-700 leading-relaxed mb-4">
                      {parts.map((p, j) => {
                        if (j % 3 === 1) return <Link key={j} href={parts[j + 1]} className="text-[#FFD10C] hover:underline">{p}</Link>
                        if (j % 3 === 2) return null
                        return p
                      })}
                    </p>
                  )
                }
                return <p key={i} className="text-gray-700 leading-relaxed mb-4">{line}</p>
              })}
            </article>

            {/* CTA */}
            <div className="mt-10 bg-black text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-2">Visit Super Petroleum</h3>
              <p className="text-gray-300 mb-6">Open 24/7 · 1503 West 4th St, Adel, GA 31620</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/locations/" className="bg-[#FFD10C] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">Get Directions</Link>
                <Link href="/contact/" className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">Contact Us</Link>
              </div>
            </div>

            <div className="mt-8">
              <Link href="/blog/" className="inline-flex items-center gap-2 text-[#FFD10C] hover:underline text-sm">
                <ArrowLeft className="w-4 h-4" />
                Back to all articles
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-full lg:w-80 shrink-0 space-y-6">

            {/* Categories */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <FolderOpen className="w-5 h-5 text-[#FFD10C]" />
                Categories
              </h3>
              <ul className="space-y-2">
                {categories.filter(c => c._count.posts > 0).map(cat => (
                  <li key={cat.slug}>
                    <Link
                      href={`/blog/?category=${cat.slug}`}
                      className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <span className="text-gray-700 group-hover:text-[#FFD10C] text-sm font-medium transition-colors">{cat.name}</span>
                      <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded-full">{cat._count.posts}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            {recentPosts.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#FFD10C]" />
                  Recent Posts
                </h3>
                <ul className="space-y-4">
                  {recentPosts.map(p => (
                    <li key={p.slug}>
                      <Link href={`/blog/${p.slug}/`} className="group block">
                        {p.category && (
                          <span className="text-[#FFD10C] text-xs font-semibold uppercase tracking-wide">{p.category.name}</span>
                        )}
                        <p className="text-gray-800 text-sm font-medium leading-snug group-hover:text-[#FFD10C] transition-colors mt-0.5">
                          {p.title}
                        </p>
                        <p className="text-gray-400 text-xs mt-1">{p.readTime}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Links */}
            <div className="bg-[#FFD10C] rounded-xl p-6">
              <h3 className="font-bold text-black text-lg mb-3">Need Help?</h3>
              <p className="text-gray-800 text-sm mb-4">Our team is available 24/7 to assist professional drivers.</p>
              <Link href="/contact/" className="block bg-black text-white text-sm font-bold text-center py-2.5 rounded-lg hover:bg-gray-900 transition-colors">
                Contact Us
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}
