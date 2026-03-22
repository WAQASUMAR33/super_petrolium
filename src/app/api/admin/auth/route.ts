import { NextResponse } from 'next/server'
import { signToken } from '@/lib/jwt'
import prisma from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (!email || !password) {
      return NextResponse.json({ error: 'Email and password are required' }, { status: 400 })
    }

    let user
    try {
      user = await prisma.adminUser.findUnique({ where: { email } })
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
