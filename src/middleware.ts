import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { jwtVerify } from 'jose'

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET || 'change-this-secret-in-production-min-32-chars'
  )

export async function middleware(request: NextRequest) {
  const token = request.cookies.get('admin_token')?.value
  const isApiRoute = request.nextUrl.pathname.startsWith('/api/admin')

  if (!token) {
    if (isApiRoute) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  try {
    await jwtVerify(token, getSecret())
    return NextResponse.next()
  } catch {
    if (isApiRoute) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }
    const response = NextResponse.redirect(new URL('/admin/login', request.url))
    response.cookies.delete('admin_token')
    return response
  }
}

export const config = {
  matcher: ['/admin/((?!login).*)', '/api/admin/:path*'],
}
