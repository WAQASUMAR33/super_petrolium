import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import prisma from '@/lib/prisma'

export async function GET() {
  try {
    const posts = await prisma.blogPost.findMany({
      orderBy: { createdAt: 'desc' },
      select: {
        id: true,
        slug: true,
        title: true,
        category: true,
        published: true,
        publishedAt: true,
        createdAt: true,
        readTime: true,
      },
    })
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const post = await prisma.blogPost.create({
      data: {
        slug: body.slug,
        title: body.title,
        excerpt: body.excerpt,
        content: body.content,
        category: body.category,
        tags: body.tags || '',
        metaTitle: body.metaTitle || body.title,
        metaDescription: body.metaDescription || body.excerpt,
        ogImage: body.ogImage || '',
        focusKeyword: body.focusKeyword || '',
        readTime: body.readTime || '5 min read',
        published: body.published || false,
        publishedAt: body.published ? new Date() : null,
      },
    })

    revalidatePath('/blog')
    revalidatePath('/sitemap.xml')

    return NextResponse.json(post, { status: 201 })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to create post'
    if (msg.includes('Unique constraint')) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
