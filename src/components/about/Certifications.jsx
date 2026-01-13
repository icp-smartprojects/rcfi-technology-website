import Link from 'next/link'
import { FiShield, FiAward, FiLock, FiGlobe, FiCheckCircle, FiFileText } from 'react-icons/fi'

export default function Certifications() {
  const certifications = [
    {
      icon: FiShield,
      name: 'ISO 27001',
      description: 'Information Security Management',
      details: 'International standard for information security management systems',
      status: 'Certified',
      color: 'blue'
    },
    {
      icon: FiAward,
      name: 'CAK Licensed',
      description: 'Communications Authority of Kenya',
      details: 'Licensed Electronic Certification Service Provider',
      status: 'Active',
      color: 'green'
    },
    {
      icon: FiLock,
      name: 'Kenya DPA Compliant',
      description: 'Data Protection Act 2019',
      details: 'Full compliance with Kenya\'s data protection regulations',
      status: 'Compliant',
      color: 'purple'
    },
    {
      icon: FiGlobe,
      name: 'CA/B Forum',
      description: 'Certificate Authority Standards',
      details: 'Adherence to global certificate authority best practices',
      status: 'Aligned',
      color: 'green'
    },
    {
      icon: FiCheckCircle,
      name: 'ETSI EN 319 411-1',
      description: 'Trust Service Providers',
      details: 'European standard for qualified trust service providers',
      status: 'Aligned',
      color: 'green'
    },
    {
      icon: FiFileText,
      name: 'WebTrust',
      description: 'CA Audit Standards',
      details: 'Industry-standard audit framework for certificate authorities',
      status: 'In Progress',
      color: 'green'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      badge: 'bg-blue-600'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      badge: 'bg-green-600'
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      badge: 'bg-purple-600'
    },
    orange: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      badge: 'bg-green-600'
    },
    red: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      badge: 'bg-green-600'
    },
    indigo: {
      bg: 'bg-green-100',
      text: 'text-green-600',
      badge: 'bg-green-600'
    }
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Certifications & Compliance
          </h2>
          <p className="text-xl text-gray-600">
            Meeting the highest international security and compliance standards
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            const colors = colorClasses[cert.color]
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <div className="mb-4">
                  <div className={`inline-block ${colors.badge} text-white px-3 py-1 rounded-full text-xs font-semibold mb-3`}>
                    {cert.status}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h3>
                  <p className={`text-sm font-semibold ${colors.text} mb-3`}>{cert.description}</p>
                </div>
                
                <p className="text-gray-600 text-sm">
                  {cert.details}
                </p>
              </div>
            )
          })}
        </div>

        {/* Documentation CTA */}
        <div className="bg-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Need Compliance Documentation?
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Access our compliance certificates, audit reports, and security documentation
          </p>
          <Link href="/resources/documentation" className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
            View Documentation
          </Link>
        </div>
      </div>
    </section>
  )
}