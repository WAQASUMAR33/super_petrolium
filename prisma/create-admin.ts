import { PrismaClient } from '@prisma/client'
import { scryptSync, randomBytes } from 'crypto'

const prisma = new PrismaClient()

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex')
  const hash = scryptSync(password, salt, 64).toString('hex')
  return `${salt}:${hash}`
}

async function main() {
  // Remove old admin users
  const deleted = await prisma.adminUser.deleteMany({})
  console.log(`Deleted ${deleted.count} existing admin user(s)`)

  // Create fresh admin
  const user = await prisma.adminUser.create({
    data: {
      name: 'Super Admin',
      email: 'admin@superpetroleums.com',
      password: hashPassword('786ninja'),
      role: 'admin',
      active: true,
    },
  })

  console.log(`✓ Admin created: ${user.email}`)
  console.log(`  Password: 786ninja`)
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
