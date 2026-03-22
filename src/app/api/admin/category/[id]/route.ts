import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import type { RowDataPacket } from 'mysql2'

type Context = { params: Promise<{ id: string }> }

export async function PUT(request: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const { name, description } = await request.json()

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()

    await pool.execute(
      'UPDATE Category SET name=?, slug=?, description=?, updatedAt=NOW() WHERE id=?',
      [name.trim(), slug, description?.trim() || null, Number(id)]
    )

    const [rows] = await pool.execute<RowDataPacket[]>('SELECT * FROM Category WHERE id = ?', [Number(id)])
    return NextResponse.json(rows[0])
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to update category'
    if (msg.includes('Duplicate entry') || msg.includes('unique')) {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT COUNT(*) AS cnt FROM BlogPost WHERE categoryId = ?',
      [Number(id)]
    )
    const count = Number(rows[0]?.cnt ?? 0)

    if (count > 0) {
      return NextResponse.json(
        { error: `Cannot delete — ${count} post${count > 1 ? 's' : ''} use this category. Reassign them first.` },
        { status: 409 }
      )
    }

    await pool.execute('DELETE FROM Category WHERE id = ?', [Number(id)])
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
