import Link from 'next/link'
import { PlusCircle } from 'lucide-react'
import prisma from '@/lib/prisma'
import BlogListTable from './BlogListTable'

export const dynamic = 'force-dynamic'

export default async function AdminBlogPage() {
  let posts: {
    id: number; slug: string; title: string;
    category: { name: string } | null;
    published: boolean; publishedAt: Date | null;
    createdAt: Date; readTime: string;
  }[] = []
  let dbError = ''

  try {
    posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true, slug: true, title: true,
        category: { select: { name: true } },
        published: true, publishedAt: true,
        createdAt: true, readTime: true,
      },
    })
  } catch (e) {
    dbError = e instanceof Error ? e.message : 'Database connection failed'
  }

  const published = posts.filter(p => p.published).length
  const drafts = posts.filter(p => !p.published).length

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Blog Posts</h1>
          <p className="text-gray-400 text-sm mt-1">
            {posts.length} total · {published} published · {drafts} drafts
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 bg-[#FFD10C] text-black font-bold px-5 py-2.5 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
        >
          <PlusCircle className="w-4 h-4" />
          New Post
        </Link>
      </div>

      {/* DB Error */}
      {dbError && (
        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 rounded-xl p-5">
          <p className="font-semibold mb-1">Database connection failed</p>
          <p className="text-sm opacity-80">{dbError}</p>
          <p className="text-sm mt-3 text-gray-400">
            Fix: Go to Hostinger hPanel → Databases → Remote MySQL and whitelist your IP address, then restart the dev server.
          </p>
        </div>
      )}

      {/* Table */}
      <div className="bg-gray-900 rounded-xl border border-gray-800">
        <BlogListTable posts={posts.map(p => ({
          ...p,
          category: p.category?.name ?? null,
          publishedAt: p.publishedAt?.toISOString() ?? null,
          createdAt: p.createdAt.toISOString(),
        }))} />
      </div>
    </div>
  )
}
