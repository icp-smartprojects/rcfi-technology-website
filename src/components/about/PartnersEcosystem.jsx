import Link from 'next/link'
import { FiServer, FiCode, FiCloud, FiShield } from 'react-icons/fi'

export default function PartnersEcosystem() {
  const partnerCategories = [
    {
      title: 'Infrastructure Partners',
      icon: FiServer,
      color: 'blue',
      partners: [
        { name: 'Konza Technopolis', description: 'National Data Center & Cloud Infrastructure' },
        { name: 'AWS', description: 'Cloud Hosting & Services' },
        { name: 'Microsoft Azure', description: 'Enterprise Cloud Solutions' }
      ]
    },
    {
      title: 'Technology Partners',
      icon: FiCode,
      color: 'purple',
      partners: [
        { name: 'Crown Interactive', description: 'CICOD Business Support Suite' },
        { name: 'Hyperledger Foundation', description: 'Blockchain Technology' }
      ]
    },
    {
      title: 'Government Partners',
      icon: FiShield,
      color: 'green',
      partners: [
        { name: 'Communications Authority of Kenya', description: 'Regulatory & Licensing' },
        { name: 'Kenya Revenue Authority', description: 'e-TIMS Integration' },
        { name: 'Ministry of ICT', description: 'Digital Transformation Initiatives' }
      ]
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      border: 'border-primary-200'
    },
    purple: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      border: 'border-primary-200'
    },
    green: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      border: 'border-primary-200'
    }
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Partners & Ecosystem
          </h2>
          <p className="text-xl text-gray-600">
            Collaborating with leading organizations to deliver excellence
          </p>
        </div>

        <div className="space-y-12 mb-16">
          {partnerCategories.map((category, index) => {
            const Icon = category.icon
            const colors = colorClasses[category.color]
            
            return (
              <div key={index}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.partners.map((partner, pIndex) => (
                    <div key={pIndex} className={`bg-white rounded-xl border-2 ${colors.border} p-6 hover:shadow-lg transition-shadow`}>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h4>
                      <p className="text-gray-600 text-sm">{partner.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Become a Partner CTA */}
        <div className="bg-gradient-to-r from-primary-900 to-primary-700 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Become a Partner
          </h3>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join our ecosystem and help drive digital transformation across Africa
          </p>
          <Link href="/partners/become-partner" className="inline-block px-8 py-4 bg-white text-primary-900 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all">
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  )
}