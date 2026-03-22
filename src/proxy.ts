import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET || 'change-this-secret-in-production-min-32-chars'
  )

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get('admin_token')?.value
  const isApiRoute = pathname.startsWith('/api/admin')
  const isLoginPage = pathname === '/admin/login' || pathname === '/admin/login/'

  // Allow login page through always
  if (isLoginPage) return NextResponse.next()

  // No token — return 404 for bots/scanners instead of redirecting
  if (!token) {
    if (isApiRoute) {
      return new NextResponse('Not found', { status: 404 })
    }
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // Verify JWT
  try {
    await jwtVerify(token, getSecret())
    return NextResponse.next()
  } catch {
    if (isApiRoute) {
      return new NextResponse('Not found', { status: 404 })
    }
    const response = NextResponse.redirect(new URL('/admin/login', request.url))
    response.cookies.delete('admin_token')
    return response
  }
}

export const config = {
  matcher: ['/admin/((?!login).*)', '/api/admin/((?!auth).*)'],
}
