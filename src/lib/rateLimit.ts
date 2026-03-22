const attempts = new Map<string, { count: number; resetAt: number }>()

export function rateLimit(ip: string, max = 10, windowMs = 60_000): boolean {
  const now = Date.now()
  const entry = attempts.get(ip)

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + windowMs })
    return true // allowed
  }

  if (entry.count >= max) return false // blocked

  entry.count++
  return true // allowed
}
