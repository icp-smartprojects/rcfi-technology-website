import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  FiCheckCircle,
  FiShield,
  FiLock,
  FiUsers,
  FiUser,
  FiFileText,
  FiBarChart2,
  FiCalendar,
  FiDollarSign,
  FiDatabase,
} from 'react-icons/fi'
import { productsData } from '@/data/productsData'
import SEO from '@/components/common/SEO'
import CTAButton from '@/components/common/CTAButton'

const testimonials = [
  {
    quote:
      'Registration used to take weeks of back-and-forth. Now our application, review, and certification are tracked in one place.',
    name: 'Programme Director',
    company: 'Kenyan NGO',
  },
  {
    quote:
      'Board meetings, minutes, and resolutions are finally centralized. Our auditors can see the full trail.',
    name: 'Board Secretary',
    company: 'CSO',
  },
  {
    quote:
      'We link strategic plans to projects, indicators, and budgets — leadership finally has one view of performance.',
    name: 'CEO',
    company: 'Development Agency',
  },
]

const steps = [
  {
    number: '01',
    title: 'Register',
    desc: 'Guided 6-step wizard with document upload for PBO, CBO, and CGRA legal tracks.',
    stat: '6-Step Wizard',
  },
  {
    number: '02',
    title: 'Review & Certify',
    desc: 'Admin review queue — approve, reject, clarify, and issue certificates.',
    stat: 'Admin Queue',
  },
  {
    number: '03',
    title: 'Govern',
    desc: 'Board management, meetings, resolutions, attendance, and governance documents.',
    stat: 'Full Lifecycle',
  },
  {
    number: '04',
    title: 'Deliver & Report',
    desc: 'Strategic plans, projects, M&E indicators, budgets, and compliance reports.',
    stat: 'M&E Ready',
  },
]

const whyElano = [
  'Organization registration & certification',
  'Board & committee management',
  'Meeting lifecycle & resolutions',
  'Strategic planning & AOPs',
  'Programmes, projects & M&E',
  'Budgets, chart of accounts & donors',
  'Public registry & certificate verification',
]

const complianceFeatures = [
  {
    title: 'Legal-track registration',
    description: 'PBO, CBO, CGRA, NPO, CSO onboarding with document validation.',
  },
  {
    title: 'Admin review workflows',
    description: 'Assign reviewers, approve, reject, or request clarification.',
  },
  {
    title: 'Public verification',
    description: 'Searchable registry and certificate authenticity checks.',
  },
  {
    title: 'Governance compliance',
    description: 'Board composition rules, quorum, and conflict-of-interest tracking.',
  },
  {
    title: 'Audit trails',
    description: '7-year activity logging for registration and governance actions.',
  },
  {
    title: 'Role-based access',
    description: 'Granular permissions for admins, reviewers, board, staff, and donors.',
  },
]

const modules = [
  {
    icon: FiFileText,
    title: 'Organization Registration',
    items: [
      '6-step wizard',
      'PBO / CBO / CGRA legal tracks',
      'Document upload & validation',
      'Status: draft → certified',
      'Public registry & verification',
    ],
  },
  {
    icon: FiUsers,
    title: 'Board & Governance',
    items: [
      'Board member profiles & tenure',
      'Committees & attendance',
      'Conflict-of-interest declarations',
      'Governance document workflows',
    ],
  },
  {
    icon: FiCalendar,
    title: 'Meetings & Resolutions',
    items: [
      'Scheduling & recurring meetings',
      'Agenda, RSVP, minutes',
      'Resolutions, voting & quorum',
    ],
  },
  {
    icon: FiBarChart2,
    title: 'Strategic Planning',
    items: ['Multi-year strategic plans', 'Annual Operating Plans (AOPs)', 'KPI monitoring'],
  },
  {
    icon: FiCheckCircle,
    title: 'Programmes & Projects',
    items: [
      'Milestones & deliverables',
      'Budget linkage & performance',
      'CSV/PDF export',
    ],
  },
  {
    icon: FiBarChart2,
    title: 'MEL',
    items: [
      'Indicators & public data collection',
      'Evaluations & learning documents',
      'Complaint submission & tracking',
    ],
  },
  {
    icon: FiDollarSign,
    title: 'Financial Management',
    items: [
      'Chart of accounts & donors',
      'Budget approval workflows',
      'Budget vs. actual tracking',
    ],
  },
  {
    icon: FiLock,
    title: 'Security & Access',
    items: [
      'JWT + optional 2FA (TOTP)',
      'Google OAuth & session management',
      'Role-based access control',
    ],
  },
]

const audiences = [
  { title: 'NGOs & CSOs', desc: 'Registration, governance, programmes, M&E' },
  { title: 'Microfinance & institutions', desc: 'Board governance, compliance, reporting' },
  { title: 'Government & regulators', desc: 'Review queue, public registry, verification' },
  { title: 'Board members & staff', desc: 'Meetings, documents, personal portal' },
  { title: 'Public', desc: 'Verify certificates, view certified orgs' },
]

const stats = [
  { value: '500+', label: 'organizations registered' },
  { value: '1,000+', label: 'board meetings managed' },
  { value: '2,000+', label: 'certificates issued' },
  { value: '24/7', label: 'platform availability' },
]

const partners = [
  'Kenyan NGOs',
  'CSO Networks',
  'County Governments',
  'Development Agencies',
  'Microfinance Institutions',
  'Faith-Based Organizations',
]

function useReveal() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true)
      },
      { threshold: 0.1 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return [ref, visible]
}

function TestimonialCard({ t, index }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      style={{
        background: '#ffffff',
        padding: '1.75rem 1.5rem',
        display: 'flex',
        flexDirection: 'column',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
      }}
    >
      <p className="text-neutral-700 italic leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
      <div>
        <div className="text-sm font-semibold text-neutral-900">{t.name}</div>
        <div className="text-xs text-neutral-400">{t.company}</div>
      </div>
    </div>
  )
}

export default function ElanoPage() {
  return (
    <>
      <SEO
        title="Digital Governance Platform for Kenyan Institutions"
        description="Register, certify, and govern NGOs and CSOs in Kenya. Board management, strategic planning, M&E, budgets, and public certificate verification — powered by RCFI."
        keywords="Elano, NGO governance Kenya, CSO registration, board management, PBO CBO CGRA, M&E platform"
        url="/products/elano"
        type="product"
      />

      {/* Hero */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <p className="text-sm font-bold uppercase tracking-widest text-primary-600 mb-4">Elano</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-neutral-900 mb-2">
                Govern Kenyan Institutions
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-600 mb-6">
                Digitally, Not on Paper
              </h2>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Streamline organization registration, board governance, strategic planning, programme
                delivery, and financial management — with audit trails, public certification, and
                enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <CTAButton href="/contact/demo" variant="primary" size="lg">
                  Request Demo
                </CTAButton>
                <Link
                  href="/contact/sales"
                  className="inline-flex items-center justify-center px-8 py-4 border border-primary-200 rounded-lg font-semibold hover:bg-primary-50 transition"
                >
                  Talk to Sales
                </Link>
              </div>
            </div>

            {/* Phone mockup with floating badges */}
            <div className="relative hidden lg:block">
              <div className="absolute -top-4 -left-8 bg-white shadow-xl rounded-2xl p-4 z-20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-green-50 flex items-center justify-center">
                  <FiCheckCircle className="text-green-600 text-lg" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Registration</p>
                  <p className="text-sm font-semibold text-neutral-900">Certified ✓</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-8 bg-white shadow-xl rounded-2xl p-4 z-20 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary-50 flex items-center justify-center">
                  <FiLock className="text-primary-600 text-lg" />
                </div>
                <div>
                  <p className="text-xs text-neutral-400">Security</p>
                  <p className="text-sm font-semibold text-neutral-900">End-to-end encrypted</p>
                </div>
              </div>

              <div className="absolute top-24 -right-10 bg-white shadow-xl rounded-2xl px-4 py-3 z-20 flex items-center gap-2">
                <FiUsers className="text-green-500 text-lg shrink-0" />
                <div>
                  <p className="text-xs font-semibold text-neutral-900">Board quorum met</p>
                  <p className="text-xs text-neutral-400">Governance compliant</p>
                </div>
              </div>

              <div className="relative mx-auto w-[280px]">
                <div className="relative bg-neutral-900 rounded-[48px] p-[10px] shadow-[0_40px_80px_-10px_rgba(0,0,0,0.35)]">
                  <div className="absolute -left-[3px] top-20 w-[3px] h-8 bg-neutral-700 rounded-l-full" />
                  <div className="absolute -left-[3px] top-32 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
                  <div className="absolute -left-[3px] top-48 w-[3px] h-12 bg-neutral-700 rounded-l-full" />
                  <div className="absolute -right-[3px] top-28 w-[3px] h-16 bg-neutral-700 rounded-r-full" />

                  <div className="bg-white rounded-[40px] overflow-hidden" style={{ minHeight: 560 }}>
                    <div className="relative flex justify-center pt-3 pb-1">
                      <div className="w-24 h-6 bg-neutral-900 rounded-b-2xl" />
                    </div>

                    <div className="px-5 pt-3 pb-4 bg-white border-b border-neutral-100">
                      <p className="text-xs text-neutral-400 mb-0.5">Elano</p>
                      <p className="text-base font-semibold text-neutral-900">Institution Portal</p>
                    </div>

                    <div
                      className="relative bg-neutral-900 mx-5 mt-4 rounded-2xl overflow-hidden"
                      style={{ height: 180 }}
                    >
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                          backgroundSize: '24px 24px',
                        }}
                      />
                      <img
                        src={productsData.elano.heroImage}
                        alt="Elano governance dashboard"
                        className="absolute inset-0 w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src =
                            'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop'
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-24 h-24">
                          <div className="absolute -top-3 -left-3 w-5 h-5 border-t-2 border-l-2 border-green-400 rounded-tl-md" />
                          <div className="absolute -top-3 -right-3 w-5 h-5 border-t-2 border-r-2 border-green-400 rounded-tr-md" />
                          <div className="absolute -bottom-3 -left-3 w-5 h-5 border-b-2 border-l-2 border-green-400 rounded-bl-md" />
                          <div className="absolute -bottom-3 -right-3 w-5 h-5 border-b-2 border-r-2 border-green-400 rounded-br-md" />
                        </div>
                      </div>
                      <p className="absolute bottom-3 left-0 right-0 text-center text-green-400 text-xs font-medium tracking-wide z-10">
                        Step 6 of 6 · Complete
                      </p>
                    </div>

                    <div className="px-5 mt-4 space-y-2.5">
                      <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <FiFileText className="text-neutral-400 text-sm" />
                          <span className="text-sm text-neutral-700">Registration Docs</span>
                        </div>
                        <FiCheckCircle className="text-green-500" />
                      </div>
                      <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <FiUser className="text-neutral-400 text-sm" />
                          <span className="text-sm text-neutral-700">Board Approval</span>
                        </div>
                        <FiCheckCircle className="text-green-500" />
                      </div>
                      <div className="flex items-center justify-between bg-neutral-50 rounded-xl px-4 py-3">
                        <div className="flex items-center gap-2.5">
                          <FiDatabase className="text-neutral-400 text-sm" />
                          <span className="text-sm text-neutral-700">Public Registry</span>
                        </div>
                        <FiCheckCircle className="text-green-500" />
                      </div>
                    </div>

                    <div className="px-5 mt-4">
                      <div className="w-full bg-primary-600 text-white text-sm font-semibold text-center py-3.5 rounded-2xl">
                        Certification Complete ✓
                      </div>
                    </div>

                    <div className="flex justify-center mt-4 pb-3">
                      <div className="w-24 h-1 bg-neutral-200 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-primary-50 to-blue-50 overflow-hidden relative">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="text-center mb-10">
            <span className="inline-flex px-4 py-2 rounded-full bg-white/70 backdrop-blur-sm text-primary-700 text-sm font-medium mb-4">
              Trusted Worldwide
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted By Leading Organizations
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              NGOs, CSOs, microfinance institutions, and development agencies use Elano to digitize
              governance, compliance, and programme management.
            </p>
          </div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-primary-50 to-transparent z-20" />
            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-blue-50 to-transparent z-20" />

            <div
              className="flex gap-8 items-center"
              style={{ width: 'max-content', animation: 'elanoMarquee 25s linear infinite' }}
            >
              {[...partners, ...partners].map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-full px-8 py-4 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 whitespace-nowrap"
                >
                  <span className="font-semibold text-primary-700">{name}</span>
                </div>
              ))}
            </div>

            <style jsx>{`
              @keyframes elanoMarquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
            `}</style>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-28 bg-gradient-to-b from-white to-primary-50 overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-20">
            <span className="inline-flex px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-medium">
              How It Works
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 text-neutral-900">
              From Registration
              <span className="block text-primary-600">To Certified Governance</span>
            </h2>
            <p className="text-xl text-neutral-600 mt-6 max-w-3xl mx-auto">
              Elano automates the full institutional lifecycle — onboarding, board operations,
              planning, delivery, and accountability.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-16 left-0 w-full h-1">
              <div className="h-full bg-gradient-to-r from-primary-500 via-blue-500 to-green-500 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
                >
                  <div className="absolute top-2 right-4 text-4xl font-bold text-primary-100">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-neutral-600 mb-6 text-sm leading-relaxed">{step.desc}</p>
                  <span className="inline-flex px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold">
                    {step.stat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Elano */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-[32px] p-10 md:p-14">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex px-4 py-2 rounded-full bg-white shadow-sm text-primary-700 font-medium">
                  Why Elano
                </span>
                <h2 className="text-5xl md:text-6xl font-bold text-neutral-900 mt-6 leading-none">
                  6-Step
                </h2>
                <p className="text-lg text-neutral-600 mt-3">Registration Wizard</p>
                <div className="w-20 h-1 bg-primary-500 rounded-full mt-8" />
                <p className="text-neutral-500 mt-6 max-w-sm">
                  One platform for institutional governance — built for transparency, accountability,
                  and regulatory compliance.
                </p>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-0 bottom-0 w-px bg-primary-200" />
                <div className="space-y-6">
                  {whyElano.map((item) => (
                    <div
                      key={item}
                      className="group flex items-center gap-4 pl-8 transition-all duration-300 hover:translate-x-2"
                    >
                      <div className="relative z-10 w-6 h-6 rounded-full bg-primary-600 flex items-center justify-center shadow-md">
                        <FiCheckCircle className="text-white text-sm" />
                      </div>
                      <span className="text-lg font-medium text-neutral-800 group-hover:text-primary-700 transition-colors">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary-200 font-medium">Built for Compliance</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-5">
              Compliance-First Governance
            </h2>
            <p className="text-primary-100 text-lg">
              Everything you need to register legally, run boards properly, and stay audit-ready.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceFeatures.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition"
              >
                <FiCheckCircle className="text-green-400 text-xl mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-primary-100 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform features with images */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Platform in Action</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              See how Elano brings registration, planning, M&E, finance, and reporting together.
            </p>
          </div>

          <div className="space-y-24">
            {productsData.elano.features.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="text-3xl font-bold text-neutral-900 mb-4">{feature.title}</h3>
                  <p className="text-lg text-neutral-600 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <FiCheckCircle className="text-primary-600 mt-1 shrink-0" />
                        <span className="text-neutral-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="rounded-[32px] overflow-hidden shadow-2xl border border-neutral-200">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-[400px] object-cover"
                      onError={(e) => {
                        const fallbacks = [
                          'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop',
                          'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop',
                        ]
                        e.currentTarget.src = fallbacks[index % fallbacks.length]
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product modules */}
      <section className="py-24 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">Product Modules</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Eight integrated modules covering the full institutional lifecycle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((mod) => (
              <div key={mod.title} className="bg-white rounded-2xl p-6 border border-neutral-100 shadow-sm">
                <mod.icon className="text-primary-600 text-2xl mb-4" />
                <h3 className="font-bold text-lg mb-4 text-neutral-900">{mod.title}</h3>
                <ul className="space-y-2">
                  {mod.items.map((item) => (
                    <li key={item} className="text-sm text-neutral-600 flex gap-2">
                      <span className="text-primary-500">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="py-24 bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-12">Who It&apos;s For</h2>
          <div className="space-y-4">
            {audiences.map((a) => (
              <div
                key={a.title}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 p-5 rounded-xl border border-neutral-100 bg-neutral-50"
              >
                <span className="font-bold text-primary-700 sm:w-56 shrink-0">{a.title}</span>
                <span className="text-neutral-600">{a.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & stats */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-neutral-900 mb-10 text-center">
            Trusted by Institutions That Can&apos;t Afford Mistakes
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-neutral-200 rounded-2xl overflow-hidden mb-12">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} t={t} index={i} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-bold text-primary-600">{s.value}</div>
                <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Govern Digitally?</h2>
          <p className="text-primary-100 text-lg mb-8">
            See how Elano helps Kenyan institutions register, certify, and govern with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact/demo" variant="white" size="lg">
              Request Demo
            </CTAButton>
            <Link
              href="/contact/sales"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
