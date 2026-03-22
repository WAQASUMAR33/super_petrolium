import { notFound } from 'next/navigation'
import pool from '@/lib/db'
import BlogForm from '../../BlogForm'
import type { RowDataPacket } from 'mysql2'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ id: string }>
}

export default async function EditBlogPostPage({ params }: Props) {
  const { id } = await params

  const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM BlogPost WHERE id = ?', [Number(id)])
  const post = rows[0]

  if (!post) notFound()

  return (
    <BlogForm
      initialData={{
        id: post.id,
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        categoryId: post.categoryId,
        tags: post.tags,
        metaTitle: post.metaTitle,
        metaDescription: post.metaDescription,
        ogImage: post.ogImage,
        focusKeyword: post.focusKeyword,
        readTime: post.readTime,
        published: !!post.published,
      }}
    />
  )
}
