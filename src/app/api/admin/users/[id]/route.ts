import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { hashPassword } from '@/lib/password'
import type { RowDataPacket } from 'mysql2'

type Context = { params: Promise<{ id: string }> }

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const { id } = await context.params
    const { name, email, password, role, active } = await req.json()

    const parts: string[] = []
    const values: unknown[] = []

    if (name !== undefined) { parts.push('name=?'); values.push(name) }
    if (email !== undefined) { parts.push('email=?'); values.push(email) }
    if (role !== undefined) { parts.push('role=?'); values.push(role) }
    if (active !== undefined) { parts.push('active=?'); values.push(active ? 1 : 0) }
    if (password) { parts.push('password=?'); values.push(hashPassword(password)) }

    if (parts.length === 0) {
      return NextResponse.json({ error: 'No fields to update' }, { status: 400 })
    }

    parts.push('updatedAt=NOW()')
    values.push(Number(id))

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await pool.execute(`UPDATE AdminUser SET ${parts.join(', ')} WHERE id=?`, values as any[])

    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT id, name, email, role, active, createdAt FROM AdminUser WHERE id = ?',
      [Number(id)]
    )
    const user = { ...rows[0], active: !!rows[0].active }
    return NextResponse.json(user)
  } catch {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  try {
    const { id } = await context.params
    await pool.execute('DELETE FROM AdminUser WHERE id = ?', [Number(id)])
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
