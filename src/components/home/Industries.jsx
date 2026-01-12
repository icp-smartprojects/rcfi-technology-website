import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Industries() {
  const industries = [
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Modernize service delivery, ensure compliance, and build citizen trust',
      icon: '🏛️',
      href: '/solutions/government',
      stats: '47 Counties Served'
    },
    {
      id: 'financial',
      title: 'Financial Services',
      description: 'Secure onboarding, digital signatures, and compliance automation',
      icon: '🏦',
      href: '/solutions/financial-services',
      stats: 'Banks, SACCOs, Insurance'
    },
    {
      id: 'ngo',
      title: 'NGOs & Civil Society',
      description: 'Grant management, beneficiary tracking, and impact measurement',
      icon: '🤝',
      href: '/solutions/ngo-civil-society',
      stats: '150+ Organizations'
    },
    {
      id: 'sme',
      title: 'SMEs & Enterprises',
      description: 'Business management, invoicing, and digital transformation',
      icon: '🏢',
      href: '/solutions/sme-enterprises',
      stats: 'Freelancers to Corporates'
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      description: 'Legally binding signatures, contract management, court filings',
      icon: '⚖️',
      href: '/solutions/legal-compliance',
      stats: 'Law Firms & Advocates'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Tailored solutions for every sector
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link
              key={industry.id}
              href={industry.href}
              className="group bg-white rounded-2xl shadow-soft p-8 hover:shadow-xl transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {industry.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                {industry.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 mb-4 leading-relaxed">
                {industry.description}
              </p>

              {/* Stats Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
                {industry.stats}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                Explore Solutions
                <FiArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center p-8 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl">
            <div className="text-lg font-semibold text-neutral-900">
              Don't see your industry?
            </div>
            <Link 
              href="/contact" 
              className="btn btn-primary"
            >
              Talk to Us About Custom Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}