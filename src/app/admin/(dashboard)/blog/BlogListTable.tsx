'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Pencil, Trash2, Eye } from 'lucide-react'

interface Post {
  id: number
  slug: string
  title: string
  category: string
  published: boolean
  publishedAt: string | null
  createdAt: string
  readTime: string
}

export default function BlogListTable({ posts }: { posts: Post[] }) {
  const router = useRouter()

  async function handleDelete(id: number, title: string) {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return

    const res = await fetch(`/api/admin/blog/${id}`, { method: 'DELETE' })
    if (res.ok) {
      router.refresh()
    } else {
      alert('Failed to delete post.')
    }
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500">
        <p className="text-lg mb-4">No blog posts yet.</p>
        <Link
          href="/admin/blog/new"
          className="bg-[#FFD10C] text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors"
        >
          Create Your First Post
        </Link>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-800">
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Title</th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Category</th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
            <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">Date</th>
            <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {posts.map(post => (
            <tr key={post.id} className="hover:bg-gray-900/50 transition-colors">
              <td className="py-4 px-4">
                <div className="font-medium text-white text-sm">{post.title}</div>
                <div className="text-gray-500 text-xs mt-0.5">/{post.slug}</div>
              </td>
              <td className="py-4 px-4 hidden md:table-cell">
                <span className="text-gray-300 text-sm">{post.category}</span>
              </td>
              <td className="py-4 px-4">
                {post.published ? (
                  <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                    Published
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 bg-yellow-500/10 text-yellow-400 text-xs font-medium px-2.5 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full" />
                    Draft
                  </span>
                )}
              </td>
              <td className="py-4 px-4 hidden lg:table-cell">
                <span className="text-gray-400 text-sm">
                  {new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
                    month: 'short', day: 'numeric', year: 'numeric'
                  })}
                </span>
              </td>
              <td className="py-4 px-4">
                <div className="flex items-center justify-end gap-2">
                  {post.published && (
                    <Link
                      href={`/blog/${post.slug}/`}
                      target="_blank"
                      className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
                      title="View post"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  )}
                  <Link
                    href={`/admin/blog/${post.id}/edit`}
                    className="p-2 text-gray-400 hover:text-[#FFD10C] hover:bg-gray-800 rounded-lg transition-colors"
                    title="Edit post"
                  >
                    <Pencil className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(post.id, post.title)}
                    className="p-2 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                    title="Delete post"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
