import Link from 'next/link'
import CTAButton from '@/components/common/CTAButton'
import { FiArrowRight, FiPhone } from 'react-icons/fi'

export default function FinalCTA() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-12 md:p-16 text-center text-white">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }}></div>
            </div>

            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Get Started Today</span>
              </div>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Transform Your Operations?
              </h2>

              {/* Description */}
              <p className="text-xl text-primary-100 mb-10 leading-relaxed max-w-2xl mx-auto">
                Talk to our team about how RCFI solutions can help your organization achieve digital excellence
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <CTAButton 
                  href="/contact/demo" 
                  variant="white"
                  size="lg"
                >
                  Request a Demo
                </CTAButton>
                <CTAButton 
                  href="/contact" 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <FiPhone className="w-5 h-5" />
                  Contact Sales
                </CTAButton>
              </div>

              {/* Additional Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-primary-100">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Free consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quick setup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary CTAs */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Link 
              href="/resources/documentation" 
              className="group bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-all"
            >
              <div className="text-3xl mb-3">📚</div>
              <div className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                Explore Documentation
              </div>
              <div className="text-sm text-neutral-600">
                Technical guides and API references
              </div>
            </Link>

            <Link 
              href="/resources/case-studies" 
              className="group bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-all"
            >
              <div className="text-3xl mb-3">📊</div>
              <div className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                View Case Studies
              </div>
              <div className="text-sm text-neutral-600">
                Real success stories from clients
              </div>
            </Link>

            <Link 
              href="/resources/faq" 
              className="group bg-neutral-50 rounded-2xl p-6 hover:bg-neutral-100 transition-all"
            >
              <div className="text-3xl mb-3">❓</div>
              <div className="font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                FAQs
              </div>
              <div className="text-sm text-neutral-600">
                Common questions answered
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}