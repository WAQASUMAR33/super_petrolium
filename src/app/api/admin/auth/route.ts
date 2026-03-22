import { NextResponse } from 'next/server'
import { signToken } from '@/lib/jwt'
import pool from '@/lib/db'
import { verifyPassword } from '@/lib/password'
import { rateLimit } from '@/lib/rateLimit'
import type { RowDataPacket } from 'mysql2'

export async function POST(request: Request) {
  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown'
    if (!rateLimit(ip, 10, 60_000)) {
      return NextResponse.json({ error: 'Too many attempts. Try again in 1 minute.' }, { status: 429 })
    }

    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    let user: RowDataPacket | undefined
    try {
      const [rows] = await pool.execute<RowDataPacket[]>(
        'SELECT id, email, password, role, active FROM AdminUser WHERE email = ? LIMIT 1',
        [email]
      )
      user = rows[0]
    } catch (dbErr) {
      console.error('DB error:', dbErr)
      return NextResponse.json({ error: 'Database error: ' + String(dbErr) }, { status: 500 })
    }

    console.log('Login attempt:', email, '| User found:', !!user)

    if (!user) {
      return NextResponse.json({ error: `No account found for: ${email}` }, { status: 401 })
    }

    if (!user.active) {
      return NextResponse.json({ error: 'Account is disabled' }, { status: 403 })
    }

    const valid = verifyPassword(password, user.password)
    console.log('Password valid:', valid, '| Stored hash prefix:', user.password.slice(0, 20))

    if (!valid) {
      return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
    }

    const token = await signToken({ id: user.id, email: user.email, role: user.role })
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch (e) {
    console.error('Auth error:', e)
    return NextResponse.json({ error: 'Server error: ' + String(e) }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin_token')
  return response
}
