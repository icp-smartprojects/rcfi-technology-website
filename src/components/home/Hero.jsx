import Link from 'next/link'
import { FiArrowRight, FiShield, FiAward, FiCheckCircle } from 'react-icons/fi'
import CTAButton from '@/components/common/CTAButton'
import { companyInfo } from '@/data/companyData'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 -z-10"></div>
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 -right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-300"></div>
        <div className="absolute -bottom-32 left-1/3 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float animation-delay-500"></div>
      </div>

      <div className="container-custom">
        <div className="max-w-5xl mx-auto text-center">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-soft mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-neutral-700">
              Now serving 10,000+ users across Kenya
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-900 mb-6 leading-tight animate-slide-up">
            Empowering Africa's
            <span className="block mt-2 bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-neutral-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-100">
            {companyInfo.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-200">
            <CTAButton 
              href="/products" 
              variant="primary" 
              size="lg"
            >
              Explore Our Products
            </CTAButton>
            <CTAButton 
              href="/contact/demo" 
              variant="outline" 
              size="lg"
            >
              Request a Demo
            </CTAButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 animate-fade-in animation-delay-300">
            {companyInfo.certifications.slice(0, 3).map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-neutral-700">
                <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center">
                  {cert.icon === 'shield' && <FiShield className="w-5 h-5 text-primary-600" />}
                  {cert.icon === 'certificate' && <FiAward className="w-5 h-5 text-primary-600" />}
                  {cert.icon === 'lock' && <FiCheckCircle className="w-5 h-5 text-primary-600" />}
                  {cert.icon === 'globe' && <FiCheckCircle className="w-5 h-5 text-primary-600" />}
                </div>
                <span className="font-medium text-sm md:text-base">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <div className="mt-16 animate-slide-up animation-delay-400">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/hero/dashboard-preview.jpg" 
                alt="RCFI Platform Dashboard"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="675"%3E%3Crect fill="%23f3f4f6" width="1200" height="675"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="%239ca3af"%3ERCFI Platform Dashboard%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/20 to-transparent"></div>
            </div>
            {/* Floating Cards */}
            <div className="hidden lg:block absolute -top-8 -left-8 w-64 bg-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">99.95%</div>
                  <div className="text-xs text-neutral-600">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 bg-white rounded-xl shadow-xl p-6 animate-float animation-delay-300">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiShield className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">ISO 27001</div>
                  <div className="text-xs text-neutral-600">Certified Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}