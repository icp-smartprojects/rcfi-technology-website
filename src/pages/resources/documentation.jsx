import Head from 'next/head'
import Link from 'next/link'
import { FiBook, FiCode, FiSettings, FiShield } from 'react-icons/fi'

export default function Documentation() {
  const docs = [
    {
      title: 'Getting Started',
      icon: FiBook,
      items: [
        { name: 'Quick Start Guide', href: '#' },
        { name: 'Account Setup', href: '#' },
        { name: 'First Certificate', href: '#' },
        { name: 'First Invoice', href: '#' }
      ]
    },
    {
      title: 'API Reference',
      icon: FiCode,
      items: [
        { name: 'Authentication', href: '#' },
        { name: 'DigiSign API', href: '#' },
        { name: 'e-KYC API', href: '#' },
        { name: 'Webhooks', href: '#' }
      ]
    },
    {
      title: 'Integration Guides',
      icon: FiSettings,
      items: [
        { name: 'ERP Integration', href: '#' },
        { name: 'NIIMS Integration', href: '#' },
        { name: 'KRA e-TIMS', href: '#' },
        { name: 'Mobile Apps', href: '#' }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: FiShield,
      items: [
        { name: 'Security Overview', href: '#' },
        { name: 'Data Protection', href: '#' },
        { name: 'Compliance Guides', href: '#' },
        { name: 'Audit Logs', href: '#' }
      ]
    }
  ]

  return (
    <>
      <Head>
        <title>Documentation - Technical Guides | RCFI Technology</title>
        <meta name="description" content="Complete technical documentation, API references, and integration guides" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Documentation</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Everything you need to integrate and use RCFI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold transition-all">
              View API Docs
            </Link>
            <Link href="#" className="px-8 py-4 border-2 border-orange-600 text-orange-600 rounded-lg hover:bg-orange-50 font-semibold transition-all">
              Download SDKs
            </Link>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {docs.map((section, index) => {
              const Icon = section.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                  <Icon className="w-10 h-10 text-orange-600 mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <Link href={item.href} className="text-gray-600 hover:text-orange-600 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
