import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import prisma from '@/lib/prisma'
import { generatePageMetadata } from '../../lib/metadata'
import { ArrowLeft } from 'lucide-react'

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
  const post = await prisma.blogPost.findUnique({
    where: { slug, published: true },
    include: { category: { select: { name: true } } },
  })
  if (!post) notFound()

  const lines = post.content.trim().split('\n')

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 text-[#FFD10C] hover:underline text-sm mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="inline-block bg-[#FFD10C] text-black text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded mb-4">
            {post.category?.name ?? 'General'}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{post.title}</h1>
          <div className="flex gap-4 text-gray-400 text-sm">
            {post.publishedAt && (
              <span>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </span>
            )}
            <span>·</span>
            <span>{post.readTime}</span>
            {post.tags && (
              <>
                <span>·</span>
                <span>{post.tags}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
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
            <Link href="/locations/" className="bg-[#FFD10C] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors">
              Get Directions
            </Link>
            <Link href="/contact/" className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-8">
          <Link href="/blog/" className="inline-flex items-center gap-2 text-[#FFD10C] hover:underline text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to all articles
          </Link>
        </div>
      </div>
    </div>
  )
}
