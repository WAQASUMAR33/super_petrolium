import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'
import pool from '@/lib/db'
import type { RowDataPacket, ResultSetHeader } from 'mysql2'

export async function GET() {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(`
      SELECT bp.id, bp.slug, bp.title, bp.published, bp.publishedAt, bp.createdAt, bp.readTime,
             c.id AS categoryId, c.name AS categoryName
      FROM BlogPost bp
      LEFT JOIN Category c ON bp.categoryId = c.id
      ORDER BY bp.createdAt DESC
    `)
    const posts = rows.map(r => ({
      id: r.id,
      slug: r.slug,
      title: r.title,
      published: !!r.published,
      publishedAt: r.publishedAt,
      createdAt: r.createdAt,
      readTime: r.readTime,
      category: r.categoryId ? { id: r.categoryId, name: r.categoryName } : null,
    }))
    return NextResponse.json(posts)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    const publishedAt = body.published ? new Date() : null

    const [result] = await pool.execute<ResultSetHeader>(
      `INSERT INTO BlogPost (slug, title, excerpt, content, categoryId, tags, metaTitle, metaDescription,
        ogImage, focusKeyword, readTime, published, publishedAt, createdAt, updatedAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
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
      ]
    )

    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM BlogPost WHERE id = ?', [result.insertId])

    revalidatePath('/blog')
    revalidatePath('/sitemap.xml')

    return NextResponse.json(rows[0], { status: 201 })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to create post'
    if (msg.includes('Duplicate entry') || msg.includes('unique')) {
      return NextResponse.json({ error: 'Slug already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
