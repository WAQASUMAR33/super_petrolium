import { NextRequest, NextResponse } from 'next/server'
import pool from '@/lib/db'
import { hashPassword } from '@/lib/password'
import type { RowDataPacket, ResultSetHeader } from 'mysql2'

export async function GET() {
  try {
    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT id, name, email, role, active, createdAt FROM AdminUser ORDER BY createdAt DESC'
    )
    const users = rows.map(r => ({ ...r, active: !!r.active }))
    return NextResponse.json(users)
  } catch {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name, email and password are required' }, { status: 400 })
    }

    const [existing] = await pool.execute<RowDataPacket[]>(
      'SELECT id FROM AdminUser WHERE email = ? LIMIT 1',
      [email]
    )
    if (existing[0]) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 409 })
    }

    const [result] = await pool.execute<ResultSetHeader>(
      'INSERT INTO AdminUser (name, email, password, role, active, createdAt, updatedAt) VALUES (?, ?, ?, ?, 1, NOW(), NOW())',
      [name, email, hashPassword(password), role || 'admin']
    )

    const [rows] = await pool.execute<RowDataPacket[]>(
      'SELECT id, name, email, role, active, createdAt FROM AdminUser WHERE id = ?',
      [result.insertId]
    )
    const user = { ...rows[0], active: !!rows[0].active }
    return NextResponse.json(user, { status: 201 })
  } catch {
    return NextResponse.json({ error: 'Failed to create user' }, { status: 500 })
  }
}
