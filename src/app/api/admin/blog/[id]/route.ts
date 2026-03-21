import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

type Context = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const post = await prisma.blogPost.findUnique({ where: { id: Number(id) } })
    if (!post) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(post)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const body = await request.json()

    const existing = await prisma.blogPost.findUnique({
      where: { id: Number(id) },
      select: { published: true, publishedAt: true, slug: true },
    })
    if (!existing) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const publishedAt =
      body.published && !existing.published
        ? new Date()
        : body.published
        ? existing.publishedAt
        : null

    const post = await prisma.blogPost.update({
      where: { id: Number(id) },
      data: {
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        categoryId: body.categoryId ? Number(body.categoryId) : null,
        tags: body.tags || '',
        metaTitle: body.metaTitle || body.title,
        metaDescription: body.metaDescription || body.excerpt,
        ogImage: body.ogImage || '',
        focusKeyword: body.focusKeyword || '',
        readTime: body.readTime || '5 min read',
        published: body.published,
        publishedAt,
      },
    })

    revalidatePath('/blog')
    revalidatePath(`/blog/${post.slug}`)
    if (existing.slug !== post.slug) revalidatePath(`/blog/${existing.slug}`)
    revalidatePath('/sitemap.xml')

    return NextResponse.json(post)
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to update post'
    if (msg.includes('Unique constraint')) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const post = await prisma.blogPost.delete({ where: { id: Number(id) } })
    revalidatePath('/blog')
    revalidatePath(`/blog/${post.slug}`)
    revalidatePath('/sitemap.xml')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
