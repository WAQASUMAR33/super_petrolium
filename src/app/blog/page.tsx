import Link from 'next/link'
import { generatePageMetadata } from '../lib/metadata'
import type { Metadata } from 'next'
import pool from '@/lib/db'
import type { RowDataPacket } from 'mysql2'

export const revalidate = 60

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog - Trucking Tips, Fuel News & Travel Center Updates',
  description: 'Helpful articles for professional truck drivers — fuel tips, parking guides, safety advice, and updates from Super Petroleum travel centers in Georgia.',
  path: '/blog',
})

export default async function BlogPage() {
  let posts: {
    slug: string; title: string; excerpt: string;
    categoryName: string | null;
    readTime: string; publishedAt: Date | null;
  }[] = []

  try {
    const [rows] = await pool.execute<RowDataPacket[]>(`
      SELECT bp.slug, bp.title, bp.excerpt, bp.readTime, bp.publishedAt, c.name AS categoryName
      FROM BlogPost bp
      LEFT JOIN Category c ON bp.categoryId = c.id
      WHERE bp.published = 1
      ORDER BY bp.publishedAt DESC
    `)
    posts = rows as typeof posts
  } catch {
    // DB unreachable in local dev — show empty state
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Driver <span className="text-[#FFD10C]">Resources</span> & News
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Fuel tips, parking guides, safety advice, and updates from Super Petroleum travel centers.
          </p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {posts.length === 0 ? (
          <p className="text-gray-500 text-center py-16">No posts published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group"
              >
                <div className="bg-[#FFD10C] px-4 py-2">
                  <span className="text-black text-sm font-semibold uppercase tracking-wide">
                    {post.categoryName ?? 'General'}
                  </span>
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#FFD10C] transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                            year: 'numeric', month: 'long', day: 'numeric',
                          })
                        : ''}
                    </span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
