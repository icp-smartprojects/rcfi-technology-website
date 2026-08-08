import Link from 'next/link'
import { MEET_URL } from '@/lib/site'

const social = [
  { href: 'https://www.linkedin.com/company/certysign/', label: 'LinkedIn' },
  { href: 'https://x.com/CertySign', label: 'X' },
  { href: 'https://web.facebook.com/certysign/', label: 'Facebook' },
  { href: 'https://www.instagram.com/certysign/', label: 'Instagram' },
  { href: 'https://www.youtube.com/@CertySign-SWC', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer className="bg-black px-8 pb-8 pt-16 text-ink-mist">
      <div className="mx-auto flex max-w-site flex-col gap-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col gap-3.5">
            <img
              src="/images/logo-white.png"
              alt="RCFI — Reprodrive Center for Innovation Limited"
              className="block h-16 w-auto self-start"
            />
            <p className="m-0 max-w-[38ch] text-sm leading-relaxed">
              Digital signatures, PKI as a Service, e-KYC, governance and business
              management software — serving Nairobi, Kenya, East Africa, and Africa.
            </p>
            <div className="flex flex-wrap gap-3.5 text-[13px]">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ink-pale no-underline hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-display text-sm font-bold text-white">Products</span>
            <Link href="/products/certysign" className="text-sm text-ink-mist no-underline hover:text-white">
              CertySign
            </Link>
            <Link href="/products/elano" className="text-sm text-ink-mist no-underline hover:text-white">
              Elano
            </Link>
            <Link href="/products/prezio" className="text-sm text-ink-mist no-underline hover:text-white">
              Prezio
            </Link>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-display text-sm font-bold text-white">Company</span>
            <Link href="/" className="text-sm text-ink-mist no-underline hover:text-white">
              Home
            </Link>
            <Link href="/about" className="text-sm text-ink-mist no-underline hover:text-white">
              About Us
            </Link>
            <Link href="/updates" className="text-sm text-ink-mist no-underline hover:text-white">
              Updates
            </Link>
            <Link href="/contact" className="text-sm text-ink-mist no-underline hover:text-white">
              Contact
            </Link>
            <a
              href={MEET_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-mist no-underline hover:text-white"
            >
              Book a Meeting
            </a>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="font-display text-sm font-bold text-white">Contact</span>
            <span className="text-sm leading-relaxed">
              5th Floor, Hifadhi House,
              <br />
              Along ICD Road, Nairobi, Kenya
            </span>
            <a
              href="mailto:info@rcfi.co.ke"
              className="text-sm font-semibold text-ink-pale no-underline hover:text-white"
            >
              info@rcfi.co.ke
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-white/10 pt-6 text-[13px]">
          <span>© 2026 Reprodrive Center for Innovation Limited. All rights reserved.</span>
          <span className="flex flex-wrap gap-2.5">
            <span>ISO 27001 Certified</span>
            <span>·</span>
            <span>CAK Licensed</span>
            <span>·</span>
            <span>Kenya DPA Compliant</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
