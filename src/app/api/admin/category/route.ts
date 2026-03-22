import { NextResponse } from 'next/server'
import pool from '@/lib/db'
import type { RowDataPacket, ResultSetHeader } from 'mysql2'

export async function GET() {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(`
      SELECT c.id, c.name, c.slug, c.description, c.createdAt, c.updatedAt,
             COUNT(bp.id) AS postCount
      FROM Category c
      LEFT JOIN BlogPost bp ON bp.categoryId = c.id
      GROUP BY c.id
      ORDER BY c.name ASC
    `)
    const categories = rows.map(r => ({
      id: r.id,
      name: r.name,
      slug: r.slug,
      description: r.description,
      createdAt: r.createdAt,
      updatedAt: r.updatedAt,
      _count: { posts: Number(r.postCount) },
    }))
    return NextResponse.json(categories)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch categories' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, description } = await request.json()

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()

    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO Category (name, slug, description, createdAt, updatedAt) VALUES (?, ?, ?, NOW(), NOW())',
      [name.trim(), slug, description?.trim() || null]
    )

    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Category WHERE id = ?', [result.insertId])
    return NextResponse.json(rows[0], { status: 201 })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to create category'
    if (msg.includes('Duplicate entry') || msg.includes('unique')) {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}
