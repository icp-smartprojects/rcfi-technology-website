import { FiPlay } from 'react-icons/fi'

export default function PlatformHighlights() {
  const highlights = [
    'Integrated digital trust ecosystem across all products',
    'Blockchain-secured documents for long-term integrity',
    'Real-time e-KYC via government database integrations',
    'Multi-currency support for regional operations',
    'Mobile-first design for accessibility anywhere',
    'Enterprise-grade security with ISO 27001 certification'
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              Platform Overview
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6">
              See Our Platforms in Action
            </h2>

            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Comprehensive digital transformation solutions built for Africa, 
              trusted by government agencies, financial institutions, and enterprises across Kenya.
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
              <a href="/contact/demo" className="btn btn-primary">
                Schedule a Demo
              </a>
              <a href="/resources/documentation" className="btn btn-outline">
                View Documentation
              </a>
            </div>
          </div>

          {/* Right: Video/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/platform/demo-thumbnail.jpg" 
                alt="Platform Demo"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EPlatform Demo%3C/text%3E%3C/svg%3E'
                }}
              />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">10K+</div>
                  <div className="text-sm text-neutral-600">Active Users</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}