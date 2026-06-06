import Link from 'next/link'
import { FiArrowRight, FiShield, FiAward, FiCheckCircle, FiExternalLink, FiLock } from 'react-icons/fi'
import CTAButton from '@/components/common/CTAButton'
import { companyInfo } from '@/data/companyData'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 overflow-hidden bg-gradient-to-br from-neutral-950 via-primary-900 to-primary-800">

      {/* Background mesh */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 50%, #235e43 0%, transparent 50%), radial-gradient(circle at 80% 20%, #2563eb 0%, transparent 40%), radial-gradient(circle at 60% 80%, #d97706 0%, transparent 35%)'
      }} />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '36px 36px'
      }} />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* ── Left: Copy ── */}
          <div className="text-white">

            {/* Live badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-300 font-semibold">CertySign is LIVE</span>
              <span className="text-neutral-300">· Kenya's digital trust platform</span>
              <Link
                href="https://certysign.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-400 hover:text-accent-300 font-bold flex items-center gap-1 ml-1"
              >
                Visit <FiExternalLink className="w-3 h-3" />
              </Link>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight mb-6">
              Empowering
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-300 via-green-300 to-accent-400">
                Africa's Digital
              </span>
              Transformation
            </h1>

            <p className="text-lg md:text-xl text-neutral-300 mb-10 leading-relaxed max-w-lg">
              From legally binding digital signatures to full PKI infrastructure — RCFI Technology builds the digital trust layer Kenya and East Africa depend on.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://app.certysign.io"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white text-primary-700 font-bold text-base"
              >
                <FiShield className="w-5 h-5" />
                Get Started with CertySign
              </a>
              <Link href="/products/certysign" className="btn btn-outline-white text-base">
                Learn More <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4">
              {companyInfo.certifications.slice(0, 3).map((cert, i) => (
                <div key={i} className="flex items-center gap-2 glass rounded-lg px-3 py-2">
                  <FiCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm text-neutral-200 font-medium">{cert.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: CertySign dashboard mockup ── */}
          <div className="relative hidden lg:block">

            {/* Glow behind card */}
            <div className="absolute inset-0 bg-primary-500 rounded-3xl blur-3xl opacity-20 scale-90" />

            {/* Main dashboard card */}
            <div className="relative glass-white rounded-2xl overflow-hidden shadow-2xl border border-white/40">

              {/* Top bar */}
              <div className="gradient-primary px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/images/assets/logo-white.svg" alt="CertySign" className="h-6" onError={e => { e.target.style.display='none' }} />
                  <span className="text-white font-bold text-sm tracking-wide">CertySign</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-200 text-xs font-medium">Live</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 bg-neutral-50 space-y-4">

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: 'Documents Signed', value: '14,302', color: 'text-primary-700', bg: 'bg-primary-50 border-primary-200' },
                    { label: 'Certs Issued', value: '3,841', color: 'text-secondary-700', bg: 'bg-secondary-50 border-secondary-200' },
                    { label: 'KYC Verified', value: '8,195', color: 'text-accent-700', bg: 'bg-accent-50 border-accent-200' },
                  ].map((s, i) => (
                    <div key={i} className={`rounded-xl p-3 border ${s.bg}`}>
                      <div className={`text-xl font-extrabold ${s.color}`}>{s.value}</div>
                      <div className="text-xs text-neutral-500 mt-0.5 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Document signing panel */}
                <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-neutral-700">Recent Signatures</span>
                    <span className="badge-green text-xs">Verified</span>
                  </div>
                  {[
                    { name: 'Service Agreement — Nairobi County', time: '2 min ago', icon: '📄' },
                    { name: 'KYC — John M. Kariuki', time: '14 min ago', icon: '🪪' },
                    { name: 'Invoice #INV-20492 (KRA)', time: '1 hr ago', icon: '🧾' },
                  ].map((doc, i) => (
                    <div key={i} className="flex items-center gap-3 py-2 border-b border-neutral-100 last:border-0">
                      <span className="text-xl">{doc.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-neutral-800 truncate">{doc.name}</div>
                        <div className="text-xs text-neutral-400">{doc.time}</div>
                      </div>
                      <FiCheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    </div>
                  ))}
                </div>

                {/* Certificate status */}
                <div className="bg-white rounded-xl border border-neutral-200 p-4 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FiLock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-semibold text-neutral-800">X.509 Certificate Active</div>
                      <div className="text-xs text-neutral-500">Issued by CertySign Intermediate CA · Valid until 2036</div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="w-2.5 h-2.5 bg-green-400 rounded-full block animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Blockchain anchor badge */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl px-4 py-3">
                  <span className="text-2xl">⛓️</span>
                  <div>
                    <div className="text-white text-sm font-semibold">Blockchain Anchored</div>
                    <div className="text-primary-200 text-xs">Last anchor: 3 seconds ago · Block #1,204,381</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cert badge */}
            <div className="absolute -top-4 -right-4 glass-white rounded-xl shadow-xl px-4 py-3 border border-white/60 animate-float">
              <div className="flex items-center gap-2">
                <FiShield className="w-5 h-5 text-primary-600" />
                <div>
                  <div className="text-xs font-bold text-primary-800">CAK Licensed CA</div>
                  <div className="text-xs text-neutral-500">Nationally Recognised</div>
                </div>
              </div>
            </div>

            {/* Floating uptime badge */}
            <div className="absolute -bottom-4 -left-4 glass-white rounded-xl shadow-xl px-4 py-3 border border-white/60 animate-float animation-delay-300">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-green-400 rounded-full animate-pulse" />
                <div>
                  <div className="text-xs font-bold text-neutral-800">99.95% Uptime</div>
                  <div className="text-xs text-neutral-500">SLA Guaranteed</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
