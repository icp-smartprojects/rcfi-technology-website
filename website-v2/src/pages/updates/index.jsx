import { useEffect, useState } from 'react'
import Link from 'next/link'
import SEO from '@/components/layout/SEO'
import Section from '@/components/layout/Section'
import { scenes } from '@/lib/theme'

function formatDate(value) {
  if (!value) return ''
  try {
    return new Date(value).toLocaleDateString('en-KE', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })
  } catch {
    return ''
  }
}

export default function UpdatesPage() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let cancelled = false
    async function load() {
      setLoading(true)
      setError('')
      try {
        const res = await fetch('/api/updates?limit=30')
        const data = await res.json()
        if (!res.ok) throw new Error(data.message || 'Failed to load updates')
        if (!cancelled) setPosts(Array.isArray(data.data) ? data.data : [])
      } catch (err) {
        if (!cancelled) setError(err.message || 'Failed to load updates')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <SEO
        title="Updates — RCFI Technology"
        description="Announcements and product updates from RCFI Technology, published by the support team."
      />

      <Section background={scenes.contentA()} className="relative py-[80px]">
        <div className="flex flex-col gap-10">
          <div className="max-w-[720px] flex flex-col gap-4">
            <h1 className="m-0 font-display text-[40px] font-extrabold leading-[1.1] text-ink sm:text-[48px]">
              RCFI updates
            </h1>
            <p className="m-0 max-w-[60ch] text-[17px] leading-relaxed text-ink-soft">
              Product news, partnership notes, and announcements posted from the RCFI
              support system.
            </p>
          </div>

          {loading && <p className="text-sm text-ink-soft">Loading updates…</p>}
          {error && !loading && (
            <div className="rounded-[12px] border border-line bg-white p-6 text-sm text-ink-soft">
              {error}. If this persists, contact us via{' '}
              <Link href="/contact" className="font-semibold text-navy">
                the contact page
              </Link>
              .
            </div>
          )}
          {!loading && !error && posts.length === 0 && (
            <div className="rounded-[12px] border border-line bg-white p-6 text-sm text-ink-soft">
              No published updates yet. Check back soon, or{' '}
              <Link href="/contact" className="font-semibold text-navy">
                send us a message
              </Link>
              .
            </div>
          )}

          <div className="flex flex-col gap-5">
            {posts.map((post) => (
              <article
                key={post._id || post.slug}
                className="overflow-hidden rounded-[20px] border border-line bg-white shadow-[0_12px_40px_rgba(0,0,0,0.05)]"
              >
                {post.coverImageUrl && (
                  <img
                    src={post.coverImageUrl}
                    alt=""
                    className="w-full h-48 sm:h-56 object-cover border-b border-line"
                    loading="lazy"
                  />
                )}
                <div className="p-7">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-[12px] font-semibold uppercase tracking-wide text-ink-pale">
                  <span>{post.category || 'announcement'}</span>
                  {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
                </div>
                <h2 className="m-0 font-display text-[24px] font-bold text-ink">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-3 mb-0 text-[15px] leading-relaxed text-ink-soft">
                    {post.excerpt}
                  </p>
                )}
                <div className="mt-5 whitespace-pre-wrap text-[15px] leading-relaxed text-ink">
                  {post.body}
                </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
