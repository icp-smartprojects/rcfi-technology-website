import CTAButton from '@/components/common/CTAButton'
import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-mesh-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-6">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium">Get Started Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>

          <p className="text-xl text-primary-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Talk to our team about how RCFI solutions can help your organization achieve digital excellence
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <CTAButton href="/contact/demo" variant="white" size="lg">
              Request a Demo
            </CTAButton>
            <CTAButton
              href="/contact"
              variant="outline-white"
              size="lg"
              className="inline-flex items-center gap-2"
            >
              <FiPhone className="w-5 h-5" />
              Contact Sales
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-200 mb-16">
            <span>✓ Free consultation</span>
            <span>✓ No credit card required</span>
            <span>✓ Quick setup</span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/resources/documentation"
              className="group glass rounded-2xl p-6 hover:bg-white/15 transition-all text-left"
            >
              <div className="text-3xl mb-3">📚</div>
              <div className="font-semibold mb-2 group-hover:text-accent-300 transition-colors">
                Explore Documentation
              </div>
              <div className="text-sm text-primary-200">
                Technical guides and API references
              </div>
            </Link>

            <Link
              href="/resources/case-studies"
              className="group glass rounded-2xl p-6 hover:bg-white/15 transition-all text-left"
            >
              <div className="text-3xl mb-3">📊</div>
              <div className="font-semibold mb-2 group-hover:text-accent-300 transition-colors">
                View Case Studies
              </div>
              <div className="text-sm text-primary-200">
                Real success stories from clients
              </div>
            </Link>

            <Link
              href="/resources/faq"
              className="group glass rounded-2xl p-6 hover:bg-white/15 transition-all text-left"
            >
              <div className="text-3xl mb-3">❓</div>
              <div className="font-semibold mb-2 group-hover:text-accent-300 transition-colors">
                FAQs
              </div>
              <div className="text-sm text-primary-200">
                Common questions answered
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
