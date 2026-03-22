import { PrismaClient } from '@prisma/client'
import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

const prisma = new PrismaClient()

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const inputHash = scryptSync(password, salt, 64)
  const storedHash = Buffer.from(hash, 'hex')
  if (inputHash.length !== storedHash.length) return false
  return timingSafeEqual(inputHash, storedHash)
}

async function main() {
  console.log('\n=== CHECKPOINT 1: Database Connection ===')
  try {
    await prisma.$connect()
    console.log('✓ Connected to database')
  } catch (e) {
    console.error('✗ DB connection failed:', e)
    process.exit(1)
  }

  console.log('\n=== CHECKPOINT 2: Admin Users in DB ===')
  const users = await prisma.adminUser.findMany({
    select: { id: true, email: true, role: true, active: true, password: true }
  })
  if (users.length === 0) {
    console.log('✗ No admin users found in database!')
  } else {
    users.forEach(u => {
      console.log(`✓ User: ${u.email} | role: ${u.role} | active: ${u.active}`)
      console.log(`  Hash preview: ${u.password.slice(0, 40)}...`)
    })
  }

  console.log('\n=== CHECKPOINT 3: Password Verification ===')
  const testEmail = 'admin@superpetroleums.com'
  const testPassword = '786ninja'
  const user = await prisma.adminUser.findUnique({ where: { email: testEmail } })

  if (!user) {
    console.log(`✗ User "${testEmail}" NOT found`)
    console.log('→ Fix: Run "npx tsx prisma/create-admin.ts"')
  } else {
    console.log(`✓ User "${testEmail}" found`)
    const valid = verifyPassword(testPassword, user.password)
    if (valid) {
      console.log(`✓ Password "786ninja" is CORRECT`)
    } else {
      console.log(`✗ Password "786ninja" is WRONG — hash mismatch`)
      console.log('→ Fix: Run "npx tsx prisma/create-admin.ts" to reset password')
    }
  }

  console.log('\n=== CHECKPOINT 4: ENV Variables ===')
  console.log('DATABASE_URL:', process.env.DATABASE_URL ? '✓ Set' : '✗ Missing')
  console.log('JWT_SECRET:', process.env.JWT_SECRET ? '✓ Set' : '✗ Missing')
  console.log('ADMIN_EMAIL:', process.env.ADMIN_EMAIL || '(not set)')

  console.log('\n=== Done ===\n')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
