import { PrismaClient } from '@prisma/client'
import { blogPosts } from '../src/app/blog/data'

const prisma = new PrismaClient()

const seedCategories = [
  { name: 'Travel Tips', slug: 'travel-tips', description: 'Tips for long-haul drivers on the road' },
  { name: 'Fuel', slug: 'fuel', description: 'Diesel fuel tips, prices, and savings' },
  { name: 'Fuel Cards', slug: 'fuel-cards', description: 'Fleet fuel card programs and savings' },
  { name: 'Parking', slug: 'parking', description: 'Truck parking guides and locations' },
  { name: 'Safety', slug: 'safety', description: 'Driver safety tips and best practices' },
  { name: 'Truck Care', slug: 'truck-care', description: 'Maintenance and repair advice' },
  { name: 'Food & Dining', slug: 'food-dining', description: 'Restaurant and food options at travel centers' },
  { name: 'News', slug: 'news', description: 'Industry news and updates' },
  { name: 'Company Updates', slug: 'company-updates', description: 'Super Petroleum news and announcements' },
]

async function main() {
  console.log('Seeding categories...')

  const categoryMap: Record<string, number> = {}

  for (const cat of seedCategories) {
    const created = await prisma.category.upsert({
      where: { slug: cat.slug },
      update: { name: cat.name, description: cat.description },
      create: cat,
    })
    categoryMap[cat.name] = created.id
    console.log(`  ✓ Category: ${cat.name}`)
  }

  console.log('\nSeeding blog posts...')

  for (const post of blogPosts) {
    const categoryId = categoryMap[post.category] ?? null

    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content.trim(),
        categoryId,
        readTime: post.readTime,
        metaTitle: post.title.slice(0, 70),
        metaDescription: post.excerpt.slice(0, 160),
        published: true,
        publishedAt: new Date(post.date),
      },
    })
    console.log(`  ✓ Post: ${post.title}`)
  }

  console.log('\nDone.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
