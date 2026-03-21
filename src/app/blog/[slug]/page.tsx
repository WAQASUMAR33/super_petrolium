import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { blogPosts, getBlogPost } from '../data'
import { generatePageMetadata } from '../../lib/metadata'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return generatePageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
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
            {post.category}
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex gap-4 text-gray-400 text-sm">
            <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12">
        <article className="bg-white rounded-xl shadow-sm p-8 prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-li:text-gray-700 prose-strong:text-gray-900">
          {lines.map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i}>{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('- **')) {
              const match = line.match(/^- \*\*(.+?)\*\*(.*)$/)
              if (match) {
                return (
                  <li key={i}>
                    <strong>{match[1]}</strong>{match[2]}
                  </li>
                )
              }
            }
            if (line.startsWith('- ')) {
              return <li key={i}>{line.replace('- ', '')}</li>
            }
            if (/^\d+\./.test(line)) {
              const text = line.replace(/^\d+\.\s*/, '')
              const parts = text.split(/\*\*(.+?)\*\*/)
              return (
                <li key={i}>
                  {parts.map((part, j) =>
                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                  )}
                </li>
              )
            }
            if (line.trim() === '') return null
            const parts = line.split(/\[(.+?)\]\((.+?)\)/)
            if (parts.length > 1) {
              return (
                <p key={i}>
                  {parts.map((part, j) => {
                    if (j % 3 === 1) return <Link key={j} href={parts[j + 1]} className="text-[#FFD10C] hover:underline">{part}</Link>
                    if (j % 3 === 2) return null
                    return part
                  })}
                </p>
              )
            }
            return <p key={i}>{line}</p>
          })}
        </article>

        {/* CTA */}
        <div className="mt-10 bg-black text-white rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-2">Visit Super Petroleum</h3>
          <p className="text-gray-300 mb-6">Open 24/7 · 1503 West 4th St, Adel, GA 31620</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/locations/"
              className="bg-[#FFD10C] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Get Directions
            </Link>
            <Link
              href="/contact/"
              className="border border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back link */}
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
