'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function AdminError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Admin error:', error)
  }, [error])

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-8">
      <div className="max-w-md w-full bg-gray-900 rounded-xl p-8 border border-gray-800 text-center">
        <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-red-400 text-2xl">⚠</span>
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Something went wrong</h2>
        <p className="text-gray-400 text-sm mb-2">
          {error?.message?.includes('database') || error?.message?.includes('prisma') || error?.message?.includes('Prisma')
            ? 'Database connection failed. Check environment variables on Hostinger.'
            : 'An unexpected error occurred.'}
        </p>
        <p className="text-gray-600 text-xs mb-6 font-mono break-all">{error?.message?.slice(0, 120)}</p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-[#FFD10C] text-black font-semibold px-5 py-2 rounded-lg hover:bg-yellow-400 transition-colors text-sm"
          >
            Try Again
          </button>
          <Link
            href="/admin/login"
            className="bg-gray-800 text-gray-300 px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}
