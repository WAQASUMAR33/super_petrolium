import { PrismaClient } from '@prisma/client'
import { blogPosts } from '../src/app/blog/data'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding blog posts...')

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: {
        slug: post.slug,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content.trim(),
        category: post.category,
        readTime: post.readTime,
        metaTitle: post.title.slice(0, 70),
        metaDescription: post.excerpt.slice(0, 160),
        published: true,
        publishedAt: new Date(post.date),
      },
    })
    console.log(`  ✓ ${post.title}`)
  }

  console.log('Done.')
}

main()
  .catch(e => { console.error(e); process.exit(1) })
  .finally(() => prisma.$disconnect())
