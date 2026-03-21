'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'

export default function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await fetch('/api/admin/auth', { method: 'DELETE' })
    router.push('/admin/login')
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  )
}
