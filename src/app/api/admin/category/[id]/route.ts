import { NextResponse } from 'next/server'
import prisma from '@/lib/prisma'

interface Params {
  params: { id: string }
}

export async function PUT(request: Request, { params }: Params) {
  try {
    const { name, description } = await request.json()

    if (!name?.trim()) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()

    const category = await prisma.category.update({
      where: { id: Number(params.id) },
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

export async function DELETE(_req: Request, { params }: Params) {
  try {
    const count = await prisma.blogPost.count({
      where: { categoryId: Number(params.id) },
    })

    if (count > 0) {
      return NextResponse.json(
        { error: `Cannot delete — ${count} post${count > 1 ? 's' : ''} use this category. Reassign them first.` },
        { status: 409 }
      )
    }

    await prisma.category.delete({ where: { id: Number(params.id) } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete category' }, { status: 500 })
  }
}
