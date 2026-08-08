import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MEET_URL } from '@/lib/site'

const links = [
  { href: '/', label: 'Home' },
  { href: '/products/certysign', label: 'CertySign' },
  { href: '/products/elano', label: 'Elano' },
  { href: '/products/prezio', label: 'Prezio' },
  { href: '/health-security', label: 'Health Security' },
  { href: '/about', label: 'About' },
  { href: '/careers', label: 'Careers', highlightKey: 'careersOpen' },
  { href: '/updates', label: 'Updates', highlightKey: 'hasRecentUpdates' },
  { href: '/contact', label: 'Contact' },
]

function isActive(pathname, href) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function Header() {
  const { pathname } = useRouter()
  const [open, setOpen] = useState(false)
  const [navFlags, setNavFlags] = useState({ careersOpen: false, hasRecentUpdates: false })

  useEffect(() => {
    fetch('/api/website-nav')
      .then((r) => r.json())
      .then((d) => setNavFlags(d.data || {}))
      .catch(() => {})
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-site items-center justify-between gap-6 px-8">
        <Link href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/images/logo-green.png"
            alt="RCFI"
            className="block h-[52px] w-auto"
            width={160}
            height={52}
            decoding="async"
          />
        </Link>

        <nav className="hidden items-center gap-[26px] lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = isActive(pathname, link.href)
            const highlighted = link.highlightKey && navFlags[link.highlightKey]
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative border-b-2 py-6 text-[15px] no-underline transition-colors duration-200 ${
                  active
                    ? 'border-green font-bold text-navy'
                    : 'border-transparent font-medium text-ink-soft hover:text-navy'
                } ${highlighted && !active ? 'text-navy font-semibold' : ''}`}
              >
                {link.label}
                {highlighted && (
                  <span className="absolute -top-0.5 right-0 h-2 w-2 rounded-full bg-green ring-2 ring-white" aria-hidden />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={MEET_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-lg px-5 py-2.5 font-medium text-white transition-colors duration-300 hover:opacity-90 sm:inline-flex"
            style={{ backgroundColor: '#235e43' }}
          >
            Book a Meeting
          </a>
          <button
            type="button"
            className="rounded-lg border border-line px-3 py-2 text-navy lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-white px-8 py-4 lg:hidden">
          <div className="mx-auto flex max-w-site flex-col gap-2">
            {links.map((link) => {
              const active = isActive(pathname, link.href)
              const highlighted = link.highlightKey && navFlags[link.highlightKey]
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-lg px-3 py-3 no-underline flex items-center justify-between ${
                    active ? 'bg-canvas font-bold text-navy' : 'font-medium text-ink-soft'
                  }`}
                >
                  <span>{link.label}</span>
                  {highlighted && (
                    <span className="text-[10px] font-bold uppercase text-green bg-green/10 px-2 py-0.5 rounded-full">Live</span>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </header>
  )
}
