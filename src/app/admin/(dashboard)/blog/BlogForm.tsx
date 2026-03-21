'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save, Eye, EyeOff, ExternalLink } from 'lucide-react'

interface Category {
  id: number
  name: string
}

interface BlogFormData {
  id?: number
  slug: string
  title: string
  excerpt: string
  content: string
  categoryId: number | null
  tags: string
  metaTitle: string
  metaDescription: string
  ogImage: string
  focusKeyword: string
  readTime: string
  published: boolean
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-').trim()
}

function calcReadTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.ceil(words / 200))} min read`
}

function CharCounter({ value, min, max }: { value: string; min: number; max: number }) {
  const len = value.length
  const color = len >= min && len <= max ? 'text-green-400' : len > max ? 'text-red-400' : 'text-yellow-400'
  return <span className={`text-xs ${color}`}>{len}/{max}</span>
}

export default function BlogForm({ initialData }: { initialData?: Partial<BlogFormData> }) {
  const router = useRouter()
  const isEditing = !!initialData?.id

  const [form, setForm] = useState<BlogFormData>({
    id: initialData?.id,
    slug: initialData?.slug || '',
    title: initialData?.title || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    categoryId: initialData?.categoryId ?? null,
    tags: initialData?.tags || '',
    metaTitle: initialData?.metaTitle || '',
    metaDescription: initialData?.metaDescription || '',
    ogImage: initialData?.ogImage || '',
    focusKeyword: initialData?.focusKeyword || '',
    readTime: initialData?.readTime || '5 min read',
    published: initialData?.published || false,
  })

  const [categories, setCategories] = useState<Category[]>([])
  const [slugManuallyEdited, setSlugManuallyEdited] = useState(isEditing)
  const [metaTitleManuallyEdited, setMetaTitleManuallyEdited] = useState(isEditing)
  const [metaDescManuallyEdited, setMetaDescManuallyEdited] = useState(isEditing)
  const [contentTab, setContentTab] = useState<'write' | 'preview'>('write')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/admin/category')
      .then(r => r.json())
      .then(setCategories)
  }, [])

  // Auto-populate slug + metaTitle from title
  useEffect(() => {
    if (!slugManuallyEdited) setForm(f => ({ ...f, slug: slugify(f.title) }))
    if (!metaTitleManuallyEdited) setForm(f => ({ ...f, metaTitle: f.title.slice(0, 70) }))
  }, [form.title, slugManuallyEdited, metaTitleManuallyEdited])

  // Auto-populate meta description from excerpt
  useEffect(() => {
    if (!metaDescManuallyEdited) setForm(f => ({ ...f, metaDescription: f.excerpt.slice(0, 160) }))
  }, [form.excerpt, metaDescManuallyEdited])

  // Auto-calculate read time
  useEffect(() => {
    if (form.content) setForm(f => ({ ...f, readTime: calcReadTime(f.content) }))
  }, [form.content])

  function set<K extends keyof BlogFormData>(field: K, value: BlogFormData[K]) {
    setForm(f => ({ ...f, [field]: value }))
  }

  async function handleSubmit(published: boolean) {
    setSubmitting(true)
    setError('')

    const payload = { ...form, published }
    const url = isEditing ? `/api/admin/blog/${form.id}` : '/api/admin/blog'
    const method = isEditing ? 'PUT' : 'POST'

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (res.ok) {
      router.push('/admin/blog')
      router.refresh()
    } else {
      const data = await res.json()
      setError(data.error || 'Something went wrong')
      setSubmitting(false)
    }
  }

  function renderPreview(content: string) {
    return content.trim().split('\n').map((line, i) => {
      if (!line.trim()) return null
      if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-2">{line.slice(3)}</h2>
      if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold text-white mt-6 mb-2">{line.slice(2)}</h1>
      if (line.startsWith('- ')) {
        const text = line.slice(2).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        return <li key={i} className="text-gray-300 ml-4 list-disc" dangerouslySetInnerHTML={{ __html: text }} />
      }
      if (/^\d+\./.test(line)) {
        const text = line.replace(/^\d+\.\s*/, '').replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        return <li key={i} className="text-gray-300 ml-4 list-decimal" dangerouslySetInnerHTML={{ __html: text }} />
      }
      const text = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      return <p key={i} className="text-gray-300 leading-relaxed mb-3" dangerouslySetInnerHTML={{ __html: text }} />
    })
  }

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/blog" className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-bold text-white">{isEditing ? 'Edit Post' : 'New Blog Post'}</h1>
            {form.slug && <p className="text-gray-500 text-xs mt-0.5">/blog/{form.slug}</p>}
          </div>
        </div>
        <div className="flex items-center gap-3">
          {isEditing && form.published && (
            <Link
              href={`/blog/${form.slug}/`}
              target="_blank"
              className="flex items-center gap-1.5 px-3 py-2 text-gray-400 hover:text-white text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" /> View
            </Link>
          )}
          <button
            onClick={() => handleSubmit(false)}
            disabled={submitting}
            className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50"
          >
            Save Draft
          </button>
          <button
            onClick={() => handleSubmit(true)}
            disabled={submitting}
            className="flex items-center gap-2 px-5 py-2 bg-[#FFD10C] text-black text-sm font-bold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            <Save className="w-4 h-4" />
            {form.published ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-6 bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left: Main content */}
        <div className="xl:col-span-2 space-y-5">

          {/* Title */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Post Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={e => set('title', e.target.value)}
              placeholder="e.g. Best Truck Stops on I-75 Through Georgia"
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-lg placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
            />
          </div>

          {/* Slug */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">URL Slug</label>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm whitespace-nowrap">/blog/</span>
              <input
                type="text"
                value={form.slug}
                onChange={e => { setSlugManuallyEdited(true); set('slug', slugify(e.target.value)) }}
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Excerpt / Summary *</label>
            <textarea
              value={form.excerpt}
              onChange={e => set('excerpt', e.target.value)}
              rows={3}
              placeholder="A short summary shown in the blog listing..."
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors resize-none"
            />
          </div>

          {/* Content editor */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Content *</label>
              <div className="flex bg-gray-800 rounded-lg p-1">
                <button onClick={() => setContentTab('write')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${contentTab === 'write' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>
                  <EyeOff className="w-3 h-3" /> Write
                </button>
                <button onClick={() => setContentTab('preview')} className={`flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium transition-colors ${contentTab === 'preview' ? 'bg-gray-700 text-white' : 'text-gray-400 hover:text-white'}`}>
                  <Eye className="w-3 h-3" /> Preview
                </button>
              </div>
            </div>

            {contentTab === 'write' ? (
              <>
                <textarea
                  value={form.content}
                  onChange={e => set('content', e.target.value)}
                  rows={20}
                  placeholder={`Write your post in Markdown...\n\n## Section Heading\n\nYour paragraph here.\n\n- Bullet point\n- Another point`}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors resize-y font-mono"
                />
                <p className="text-gray-600 text-xs mt-2">Supports Markdown: ## Heading, **bold**, - list, 1. numbered</p>
              </>
            ) : (
              <div className="min-h-[480px] bg-gray-800 border border-gray-700 rounded-lg px-4 py-3">
                {form.content ? renderPreview(form.content) : <p className="text-gray-600 text-sm italic">Nothing to preview yet...</p>}
              </div>
            )}
          </div>
        </div>

        {/* Right: Settings sidebar */}
        <div className="space-y-5">

          {/* Publish */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Publish Settings</h3>
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-sm text-gray-300">Published</span>
              <div
                onClick={() => set('published', !form.published)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${form.published ? 'bg-[#FFD10C]' : 'bg-gray-700'}`}
              >
                <div className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${form.published ? 'translate-x-5' : ''}`} />
              </div>
            </label>
            <p className="text-gray-500 text-xs mt-2">
              {form.published ? 'Visible on the public blog' : 'Saved as draft (not visible)'}
            </p>
          </div>

          {/* Category & Tags */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Category & Tags</h3>
              <Link href="/admin/categories" className="text-xs text-[#FFD10C] hover:underline">Manage</Link>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Category *</label>
              <select
                value={form.categoryId ?? ''}
                onChange={e => set('categoryId', e.target.value ? Number(e.target.value) : null)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFD10C] transition-colors"
              >
                <option value="">— Select a category —</option>
                {categories.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
              {categories.length === 0 && (
                <p className="text-yellow-500 text-xs mt-1">
                  No categories yet. <Link href="/admin/categories" className="underline">Add one first.</Link>
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Tags</label>
              <input
                type="text"
                value={form.tags}
                onChange={e => set('tags', e.target.value)}
                placeholder="diesel, truck stop, Georgia"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
              <p className="text-gray-600 text-xs mt-1">Comma-separated</p>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Read Time</label>
              <input
                type="text"
                value={form.readTime}
                onChange={e => set('readTime', e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
              <p className="text-gray-600 text-xs mt-1">Auto-calculated from word count</p>
            </div>
          </div>

          {/* SEO */}
          <div className="bg-gray-900 rounded-xl border border-gray-800 p-5 space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">SEO Settings</h3>
              <span className="bg-green-500/10 text-green-400 text-xs px-2 py-0.5 rounded">Important</span>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">Focus Keyword</label>
              <input
                type="text"
                value={form.focusKeyword}
                onChange={e => set('focusKeyword', e.target.value)}
                placeholder="e.g. truck stop Georgia"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
              <p className="text-gray-600 text-xs mt-1">Primary keyword to rank for</p>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm text-gray-300">Meta Title</label>
                <CharCounter value={form.metaTitle} min={50} max={60} />
              </div>
              <input
                type="text"
                value={form.metaTitle}
                onChange={e => { setMetaTitleManuallyEdited(true); set('metaTitle', e.target.value) }}
                placeholder="SEO title (50–60 chars)"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
              <div className="mt-1.5 bg-gray-800 rounded p-2">
                <p className="text-blue-400 text-xs font-medium truncate">{form.metaTitle || 'Page title'} | Super Petroleum</p>
                <p className="text-gray-400 text-xs mt-0.5 line-clamp-2">{form.metaDescription || 'Meta description preview'}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm text-gray-300">Meta Description</label>
                <CharCounter value={form.metaDescription} min={150} max={160} />
              </div>
              <textarea
                value={form.metaDescription}
                onChange={e => { setMetaDescManuallyEdited(true); set('metaDescription', e.target.value) }}
                rows={3}
                placeholder="Description shown in Google results (150–160 chars)"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors resize-none"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-1.5">OG Image URL</label>
              <input
                type="url"
                value={form.ogImage}
                onChange={e => set('ogImage', e.target.value)}
                placeholder="https://... (1200×630px)"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#FFD10C] transition-colors"
              />
              <p className="text-gray-600 text-xs mt-1">Social sharing image</p>
            </div>
          </div>

          {/* Submit (mobile) */}
          <div className="xl:hidden flex gap-3">
            <button onClick={() => handleSubmit(false)} disabled={submitting} className="flex-1 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 text-sm">
              Save Draft
            </button>
            <button onClick={() => handleSubmit(true)} disabled={submitting} className="flex-1 py-3 bg-[#FFD10C] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors disabled:opacity-50 text-sm">
              Publish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
