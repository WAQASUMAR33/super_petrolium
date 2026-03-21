import { SignJWT, jwtVerify } from 'jose'

const getSecret = () =>
  new TextEncoder().encode(
    process.env.JWT_SECRET || 'change-this-secret-in-production-min-32-chars'
  )

export async function signToken(payload: Record<string, unknown>): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('7d')
    .setIssuedAt()
    .sign(getSecret())
}

export async function verifyToken(token: string): Promise<Record<string, unknown> | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret())
    return payload as Record<string, unknown>
  } catch {
    return null
  }
}
