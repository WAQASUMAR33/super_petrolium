import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

type Context = { params: Promise<{ id: string }> }

export async function PUT(request: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const { name, description } = await request.json()

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()

    const category = await prisma.category.update({
      where: { id: Number(id) },
      data: { name: name.trim(), slug, description: description?.trim() || null },
    })

    return NextResponse.json(category)
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Failed to update category'
    if (msg.includes('Unique constraint')) {
      return NextResponse.json({ error: 'Category name already exists' }, { status: 409 })
    }
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  const { id } = await context.params
  try {
    const count = await prisma.blogPost.count({
      where: { categoryId: Number(id) },
    })

    if (count > 0) {
      return NextResponse.json(
        { error: `Cannot delete — ${count} post${count > 1 ? 's' : ''} use this category. Reassign them first.` },
        { status: 409 }
      )
    }

    await prisma.category.delete({ where: { id: Number(id) } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
