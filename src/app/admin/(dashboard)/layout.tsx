import Link from 'next/link'
import Image from 'next/image'
import { LayoutDashboard, FileText, PlusCircle, Tag } from 'lucide-react'
import LogoutButton from './LogoutButton'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col fixed inset-y-0 left-0 z-10">
        {/* Brand */}
        <div className="p-6 border-b border-gray-800">
          <Link href="/admin/blog" className="flex items-center gap-3">
            <Image src="/splogo.png" alt="Super Petroleum" width={32} height={32} className="h-8 w-auto" />
            <div>
              <div className="text-white font-bold text-sm leading-none">Super Petroleum</div>
              <div className="text-[#FFD10C] text-xs mt-0.5">Admin Panel</div>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
          >
            <LayoutDashboard className="w-4 h-4" />
            Dashboard
          </Link>
          <Link
            href="/admin/blog"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
          >
            <FileText className="w-4 h-4" />
            Blog Posts
          </Link>
          <Link
            href="/admin/blog/new"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
          >
            <PlusCircle className="w-4 h-4" />
            New Post
          </Link>
          <Link
            href="/admin/categories"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors text-sm"
          >
            <Tag className="w-4 h-4" />
            Categories
          </Link>

          <div className="pt-4 border-t border-gray-800 mt-4">
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors text-sm"
            >
              <span className="w-4 h-4 text-center text-xs">↗</span>
              View Site
            </Link>
          </div>
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-gray-800">
          <LogoutButton />
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 min-h-screen bg-gray-950">
        {children}
      </main>
    </div>
  )
}
