import Link from 'next/link'
import { FiShield, FiCheckCircle, FiExternalLink } from 'react-icons/fi'

export default function PlatformHighlights() {
  const highlights = [
    'Legally binding digital signatures — X.509 v3, CAK-licensed CA',
    'Blockchain-anchored documents for tamper-proof long-term integrity',
    'Real-time e-KYC via NIIMS, NTSA, and government databases',
    'PKI infrastructure fully compliant with Kenya DPA 2019',
    'Mobile & web access — sign from anywhere, instantly',
    'Enterprise-grade security — FIPS 140-2 HSM, ISO 27001 certified'
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">

        {/* CertySign Live Banner */}
        <div className="mb-12 rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
              <FiShield className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-green-300 text-xs font-semibold uppercase tracking-widest">Now Live</span>
              </div>
              <h3 className="text-2xl font-bold text-white">CertySign</h3>
              <p className="text-primary-100 text-sm mt-0.5">
                Kenya's first locally-hosted digital trust platform — digital signatures, PKI, e-KYC & blockchain security
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link
              href="https://app.certysign.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Launch App <FiExternalLink className="w-4 h-4" />
            </Link>
            <Link
              href="/products/certysign"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/30 rounded-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              What CertySign Does
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              Digital Trust, Built for Kenya
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              CertySign is the only Kenyan-built, locally-hosted platform that combines legally binding digital signatures,
              a nationally recognised Certificate Authority, real-time identity verification, and blockchain document security — in one place.
            </p>

            <ul className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-neutral-700">{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.certysign.io" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Started Free
              </Link>
              <Link href="/contact/demo" className="btn btn-outline">
                Schedule a Demo
              </Link>
            </div>
          </div>

          {/* Right: CertySign feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🔏', title: 'Digital Signatures', desc: 'Legally binding, PKI-backed', bg: 'bg-primary-600', light: 'bg-primary-50 border-primary-200', text: 'text-primary-700' },
              { icon: '🪪', title: 'e-KYC Verification', desc: 'NIIMS & NTSA integration', bg: 'bg-secondary-600', light: 'bg-secondary-50 border-secondary-200', text: 'text-secondary-700' },
              { icon: '⛓️', title: 'Blockchain Anchoring', desc: 'Immutable document proof', bg: 'bg-accent-600', light: 'bg-accent-50 border-accent-200', text: 'text-accent-700' },
              { icon: '📜', title: 'PKI Infrastructure', desc: 'CAK-licensed CA', bg: 'bg-purple-600', light: 'bg-purple-50 border-purple-200', text: 'text-purple-700' },
              { icon: '📱', title: 'Mobile & Web', desc: 'Sign from any device', bg: 'bg-teal-600', light: 'bg-teal-50 border-teal-200', text: 'text-teal-700' },
              { icon: '🛡️', title: 'Compliance-Ready', desc: 'Kenya DPA 2019 & ISO 27001', bg: 'bg-rose-600', light: 'bg-rose-50 border-rose-200', text: 'text-rose-700' },
            ].map((card, i) => (
              <div key={i} className={`rounded-xl p-5 border ${card.light} hover:shadow-md transition-all hover:-translate-y-0.5`}>
                <div className={`w-10 h-10 ${card.bg} rounded-lg flex items-center justify-center text-lg mb-3`}>{card.icon}</div>
                <div className={`font-semibold text-sm mb-1 ${card.text}`}>{card.title}</div>
                <div className="text-xs text-neutral-500">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}