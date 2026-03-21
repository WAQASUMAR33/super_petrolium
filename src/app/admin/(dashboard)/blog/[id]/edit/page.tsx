import { notFound } from 'next/navigation'
import prisma from '@/lib/prisma'
import BlogForm from '../../BlogForm'

export const dynamic = 'force-dynamic'

interface Props {
  params: { id: string }
}

export default async function EditBlogPostPage({ params }: Props) {
  const post = await prisma.blogPost.findUnique({
    where: { id: Number(params.id) },
  })

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
        published: post.published,
      }}
    />
  )
}
