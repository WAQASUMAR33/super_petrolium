import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import { hashPassword } from '@/lib/password'

type Context = { params: Promise<{ id: string }> }

export async function PATCH(req: NextRequest, context: Context) {
  try {
    const { id } = await context.params
    const { name, email, password, role, active } = await req.json()

    const data: Record<string, unknown> = {}
    if (name !== undefined) data.name = name
    if (email !== undefined) data.email = email
    if (role !== undefined) data.role = role
    if (active !== undefined) data.active = active
    if (password) data.password = hashPassword(password)

    const user = await prisma.adminUser.update({
      where: { id: Number(id) },
      data,
      select: { id: true, name: true, email: true, role: true, active: true, createdAt: true },
    })

    return NextResponse.json(user)
  } catch {
    return NextResponse.json({ error: 'Failed to update user' }, { status: 500 })
  }
}

export async function DELETE(_req: NextRequest, context: Context) {
  try {
    const { id } = await context.params
    await prisma.adminUser.delete({ where: { id: Number(id) } })
    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Failed to delete user' }, { status: 500 })
  }
}
