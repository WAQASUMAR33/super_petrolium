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

    const user = await prisma.adminUser.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    if (!user.active) {
      return NextResponse.json({ error: 'Account is disabled. Contact administrator.' }, { status: 403 })
    }

    const valid = verifyPassword(password, user.password)
    if (!valid) {
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 })
    }

    const token = await signToken({ id: user.id, email: user.email, role: user.role })

    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: '/',
    })

    return response
  } catch (e) {
    console.error('Auth error:', e)
    return NextResponse.json({ error: 'Server error. Please try again.' }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin_token')
  return response
}
