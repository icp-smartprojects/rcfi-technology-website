import Head from 'next/head'
import Link from 'next/link'
import { FiLandmark, FiUniversity, FiUsers, FiStore, FiGavel, FiArrowRight } from 'react-icons/fi'

export default function SolutionsIndex() {
  const solutions = [
    {
      id: 'government',
      title: 'Government & Public Sector',
      description: 'Modernize service delivery, ensure compliance, and build citizen trust',
      icon: FiLandmark,
      color: 'blue',
      benefits: [
        'Digital citizen services',
        'Inter-agency collaboration',
        'Compliance automation',
        'Transparent governance'
      ],
      href: '/solutions/government'
    },
    {
      id: 'financial',
      title: 'Financial Services',
      description: 'Secure onboarding, compliance, and digital transformation',
      icon: FiUniversity,
      color: 'green',
      benefits: [
        'Instant e-KYC verification',
        'Digital loan agreements',
        'Fraud detection',
        'Regulatory compliance'
      ],
      href: '/solutions/financial-services'
    },
    {
      id: 'ngo',
      title: 'NGOs & Civil Society',
      description: 'Grant management, compliance, and impact tracking',
      icon: FiUsers,
      color: 'purple',
      benefits: [
        'Multi-donor tracking',
        'Beneficiary verification',
        'Impact measurement',
        'Financial reporting'
      ],
      href: '/solutions/ngo-civil-society'
    },
    {
      id: 'sme',
      title: 'SMEs & Enterprises',
      description: 'Digital transformation for growing businesses',
      icon: FiStore,
      color: 'orange',
      benefits: [
        'Professional invoicing',
        'Contract automation',
        'Financial management',
        'Team collaboration'
      ],
      href: '/solutions/sme-enterprises'
    },
    {
      id: 'legal',
      title: 'Legal & Compliance',
      description: 'Secure, legally binding digital workflows',
      icon: FiGavel,
      color: 'red',
      benefits: [
        'Court-admissible signatures',
        'Client verification',
        'Document timestamping',
        'Case management'
      ],
      href: '/solutions/legal-compliance'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      hover: 'hover:bg-blue-600',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      hover: 'hover:bg-green-600',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      hover: 'hover:bg-purple-600',
      border: 'border-purple-200'
    },
    orange: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      hover: 'hover:bg-orange-600',
      border: 'border-orange-200'
    },
    red: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      hover: 'hover:bg-red-600',
      border: 'border-red-200'
    }
  }

  return (
    <>
      <Head>
        <title>Solutions by Industry | RCFI Technology</title>
        <meta name="description" content="Digital transformation solutions tailored for government, financial services, NGOs, SMEs, and legal sectors in Kenya and East Africa" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Solutions for Every Industry
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Tailored digital transformation solutions designed for the unique needs of your sector
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => {
              const Icon = solution.icon
              const colors = colorClasses[solution.color]
              
              if (!Icon) return null
              
              return (
                <div key={solution.id} className={`bg-white rounded-2xl shadow-lg p-8 border-2 ${colors.border} hover:shadow-xl transition-all group`}>
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6 group-hover:${colors.hover} transition-all`}>
                    <Icon className={`w-8 h-8 ${colors.text} group-hover:text-white transition-all`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {solution.description}
                  </p>
                  
                  {solution.benefits && solution.benefits.length > 0 && (
                    <ul className="space-y-2 mb-6">
                      {solution.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  <Link href={solution.href} className={`inline-flex items-center ${colors.text} font-semibold hover:gap-2 transition-all`}>
                    Learn More <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how RCFI solutions can address your specific needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/demo" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
              Request a Demo
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}