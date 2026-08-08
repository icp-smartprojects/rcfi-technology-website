import Link from 'next/link'
import Section from '@/components/layout/Section'
import { scenes } from '@/lib/theme'

const products = [
  {
    href: '/products/certysign',
    tag: 'Digital Trust Platform',
    live: true,
    name: 'CertySign',
    desc: "Kenya's first full-stack digital signing, PKI, and document certification platform.",
    features: ['Digital Signature Certificates', 'Invoice Authentication', 'e-KYC Identity Verification'],
  },
  {
    href: '/products/elano',
    tag: 'Governance & Intelligence',
    name: 'Elano',
    desc: 'Cloud-based platform for institutional efficiency, transparency, and accountability.',
    features: ['Organization Registration', 'Strategic Planning', 'MEARL Framework'],
  },
  {
    href: '/products/prezio',
    tag: 'Business Management',
    name: 'Prezio',
    desc: 'Intelligent workflow automation, approvals, and operations management for teams.',
    features: ['Workflow Automation', 'Approval Management', 'Real-Time Analytics'],
  },
]

export default function Products() {
  return (
    <Section background={scenes.contentA()} className="py-[88px]">
      <div className="flex flex-col gap-11">
        <div className="band-heading flex max-w-[60ch] flex-col gap-2.5">
          <span className="eyebrow">Our Products</span>
          <h2 className="heading-display m-0 text-[38px]">One ecosystem. Three platforms.</h2>
          <p className="band-lead m-0 text-[17px] leading-relaxed">
            Complete digital transformation solutions for every organization.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="surface-card flex flex-col gap-4 p-8 transition-shadow hover:border-green hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.1em] text-ink-muted">
                  {product.tag}
                </span>
                {product.live && (
                  <span className="rounded-full border border-green-border bg-green-soft px-2.5 py-0.5 text-[11px] font-bold text-green">
                    LIVE
                  </span>
                )}
              </div>
              <h3 className="heading-display m-0 text-[26px]">{product.name}</h3>
              <p className="m-0 text-[15px] leading-relaxed text-ink-muted">{product.desc}</p>
              <ul className="m-0 flex list-none flex-col gap-2 p-0 text-sm text-ink">
                {product.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="font-bold text-green">✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Link href={product.href} className="mt-auto text-sm font-bold text-navy no-underline hover:text-green">
                Learn more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}
