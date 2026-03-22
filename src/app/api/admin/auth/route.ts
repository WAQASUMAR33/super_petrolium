import { NextResponse } from 'next/server'
import { signToken } from '@/lib/jwt'
import prisma from '@/lib/prisma'
import { verifyPassword } from '@/lib/password'

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    // Check database first
    let authenticated = false
    let role = 'admin'

    try {
      const user = await prisma.adminUser.findUnique({ where: { email, active: true } })
      if (user && verifyPassword(password, user.password)) {
        authenticated = true
        role = user.role
      }
    } catch {
      // DB unavailable — fall back to env credentials
      if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        authenticated = true
      }
    }

    // Also allow env credentials as superadmin fallback
    if (!authenticated && email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
      authenticated = true
    }

    if (!authenticated) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const token = await signToken({ email, role })
    const response = NextResponse.json({ success: true })
    response.cookies.set('admin_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function DELETE() {
  const response = NextResponse.json({ success: true })
  response.cookies.delete('admin_token')
  return response
}
