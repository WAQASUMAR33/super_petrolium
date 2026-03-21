'use client'

import { useState, useEffect } from 'react'
import { PlusCircle, Pencil, Trash2, X, Check } from 'lucide-react'

interface Category {
  id: number
  name: string
  slug: string
  description: string | null
  _count: { posts: number }
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')
  const [adding, setAdding] = useState(false)
  const [editId, setEditId] = useState<number | null>(null)
  const [editName, setEditName] = useState('')
  const [editDesc, setEditDesc] = useState('')
  const [error, setError] = useState('')

  async function fetchCategories() {
    const res = await fetch('/api/admin/category')
    const data = await res.json()
    setCategories(data)
    setLoading(false)
  }

  useEffect(() => { fetchCategories() }, [])

  async function handleAdd() {
    if (!newName.trim()) return
    setAdding(true)
    setError('')
    const res = await fetch('/api/admin/category', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName, description: newDesc }),
    })
    if (res.ok) {
      setNewName('')
      setNewDesc('')
      await fetchCategories()
    } else {
      const d = await res.json()
      setError(d.error)
    }
    setAdding(false)
  }

  async function handleUpdate(id: number) {
    setError('')
    const res = await fetch(`/api/admin/category/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: editName, description: editDesc }),
    })
    if (res.ok) {
      setEditId(null)
      await fetchCategories()
    } else {
      const d = await res.json()
      setError(d.error)
    }
  }

  async function handleDelete(id: number, name: string) {
    if (!confirm(`Delete category "${name}"?`)) return
    setError('')
    const res = await fetch(`/api/admin/category/${id}`, { method: 'DELETE' })
    if (res.ok) {
      await fetchCategories()
    } else {
      const d = await res.json()
      setError(d.error)
    }
  }

  function startEdit(cat: Category) {
    setEditId(cat.id)
    setEditName(cat.name)
    setEditDesc(cat.description || '')
    setError('')
  }

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white">Categories</h1>
        <p className="text-gray-400 text-sm mt-1">Manage blog post categories</p>
      </div>

      {error && (
        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add new category */}
        <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
          <h2 className="text-sm font-semibold text-white mb-4">Add Category</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-400 mb-1">Name *</label>
              <input
                type="text"
                value={newName}
                onChange={e => setNewName(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleAdd()}
                placeholder="e.g. Fuel Tips"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-400 mb-1">Description</label>
              <input
                type="text"
                value={newDesc}
                onChange={e => setNewDesc(e.target.value)}
                placeholder="Optional short description"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
            </div>
            <button
              onClick={handleAdd}
              disabled={adding || !newName.trim()}
              className="flex items-center gap-2 w-full justify-center bg-[#FFD10C] text-black font-bold py-2.5 rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 text-sm"
            >
              <PlusCircle className="w-4 h-4" />
              {adding ? 'Adding...' : 'Add Category'}
            </button>
          </div>
        </div>

        {/* Category list */}
        <div className="lg:col-span-2 bg-gray-900 rounded-xl border border-gray-800">
          {loading ? (
            <p className="text-gray-500 text-center py-12">Loading...</p>
          ) : categories.length === 0 ? (
            <p className="text-gray-500 text-center py-12">No categories yet. Add one to get started.</p>
          ) : (
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Name</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">Slug</th>
                  <th className="text-left py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Posts</th>
                  <th className="text-right py-3 px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {categories.map(cat => (
                  <tr key={cat.id} className="hover:bg-gray-900/50 transition-colors">
                    <td className="py-3 px-4">
                      {editId === cat.id ? (
                        <div className="space-y-1.5">
                          <input
                            type="text"
                            value={editName}
                            onChange={e => setEditName(e.target.value)}
                            className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-white text-sm focus:outline-none focus:border-[#FFD10C]"
                          />
                          <input
                            type="text"
                            value={editDesc}
                            onChange={e => setEditDesc(e.target.value)}
                            placeholder="Description"
                            className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-gray-300 text-xs focus:outline-none focus:border-[#FFD10C]"
                          />
                        </div>
                      ) : (
                        <div>
                          <div className="text-white text-sm font-medium">{cat.name}</div>
                          {cat.description && <div className="text-gray-500 text-xs mt-0.5">{cat.description}</div>}
                        </div>
                      )}
                    </td>
                    <td className="py-3 px-4 hidden md:table-cell">
                      <span className="text-gray-500 text-xs font-mono">{cat.slug}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                        {cat._count.posts}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center justify-end gap-1">
                        {editId === cat.id ? (
                          <>
                            <button
                              onClick={() => handleUpdate(cat.id)}
                              className="p-1.5 text-green-400 hover:bg-gray-800 rounded-lg transition-colors"
                              title="Save"
                            >
                              <Check className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setEditId(null)}
                              className="p-1.5 text-gray-400 hover:bg-gray-800 rounded-lg transition-colors"
                              title="Cancel"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEdit(cat)}
                              className="p-1.5 text-gray-400 hover:text-[#FFD10C] hover:bg-gray-800 rounded-lg transition-colors"
                              title="Edit"
                            >
                              <Pencil className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(cat.id, cat.name)}
                              className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-800 rounded-lg transition-colors"
                              title="Delete"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}
