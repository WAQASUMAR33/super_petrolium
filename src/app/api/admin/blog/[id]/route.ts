import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import pool from '@/lib/db'
import type { RowDataPacket } from 'mysql2'

type Context = { params: Promise<{ id: string }> }

export async function GET(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM BlogPost WHERE id = ?', [Number(id)])
    if (!rows[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    return NextResponse.json(rows[0])
  } catch {
    return NextResponse.json({ error: 'Failed to fetch post' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const body = await request.json()

    const [existing] = await pool.execute<RowDataPacket[]>(
      'SELECT published, publishedAt, slug FROM BlogPost WHERE id = ?',
      [Number(id)]
    )
    if (!existing[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 })

    const prev = existing[0]
    let publishedAt: Date | null
    if (body.published && !prev.published) {
      publishedAt = new Date()
    } else if (body.published) {
      publishedAt = prev.publishedAt
    } else {
      publishedAt = null
    }

    await pool.execute(
      `UPDATE BlogPost SET slug=?, title=?, excerpt=?, content=?, categoryId=?, tags=?, metaTitle=?,
        metaDescription=?, ogImage=?, focusKeyword=?, readTime=?, published=?, publishedAt=?, updatedAt=NOW()
       WHERE id=?`,
      [
        body.slug,
        body.title,
        body.excerpt,
        body.content,
        body.categoryId ? Number(body.categoryId) : null,
        body.tags || '',
        body.metaTitle || body.title,
        body.metaDescription || body.excerpt,
        body.ogImage || '',
        body.focusKeyword || '',
        body.readTime || '5 min read',
        body.published ? 1 : 0,
        publishedAt,
        Number(id),
      ]
    )

    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM BlogPost WHERE id = ?', [Number(id)])
    const post = rows[0]

    revalidatePath('/blog')
    revalidatePath(`/blog/${post.slug}`)
    if (prev.slug !== post.slug) revalidatePath(`/blog/${prev.slug}`)
    revalidatePath('/sitemap.xml')

    return NextResponse.json(post)
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to update post'
    if (msg.includes('Duplicate entry') || msg.includes('unique')) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const [rows] = await pool.execute<RowDataPacket[]>('SELECT slug FROM BlogPost WHERE id = ?', [Number(id)])
    if (!rows[0]) return NextResponse.json({ error: 'Not found' }, { status: 404 })
    const slug = rows[0].slug

    await pool.execute('DELETE FROM BlogPost WHERE id = ?', [Number(id)])

    revalidatePath('/blog')
    revalidatePath(`/blog/${slug}`)
    revalidatePath('/sitemap.xml')
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 })
  }
}
