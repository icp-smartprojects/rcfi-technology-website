import Head from 'next/head'
import Link from 'next/link'
import { FiCheckCircle, FiTrendingUp } from 'react-icons/fi'

export default function CaseStudies() {
  const caseStudies = [
    {
      client: 'Uasin Gishu County Government',
      industry: 'Government & Public Sector',
      logo: '🏛️',
      challenge: 'Manual CSO registration with no centralized accountability system',
      solution: 'Deployed Elano for digital CSO network management',
      results: [
        '200+ CSOs registered digitally',
        '80% reduction in registration time',
        'Complete audit trail for compliance',
        'Real-time dashboard for officials'
      ],
      products: ['Elano'],
      year: '2025'
    },
    {
      client: 'Leading Kenyan SACCO',
      industry: 'Financial Services',
      logo: '🏦',
      challenge: 'Slow manual KYC process causing loan processing delays',
      solution: 'Implemented DigiSign e-KYC for instant verification',
      results: [
        'Under 10 seconds verification time',
        '90% reduction in fraud attempts',
        '5x faster loan processing',
        '95% customer satisfaction increase'
      ],
      products: ['DigiSign'],
      year: '2025'
    },
    {
      client: 'National NGO Network',
      industry: 'Civil Society',
      logo: '🤝',
      challenge: 'Overwhelming donor reporting requirements across multiple grants',
      solution: 'Adopted Elano MEARL framework for unified reporting',
      results: [
        '150+ member CSOs onboarded',
        '70% faster donor report generation',
        'Standardized M&E across network',
        'Real-time impact dashboards'
      ],
      products: ['Elano', 'DigiSign'],
      year: '2025'
    },
    {
      client: 'Growing Tech Startup',
      industry: 'SME & Enterprise',
      logo: '🚀',
      challenge: 'Unprofessional invoicing hurting client perception',
      solution: 'Started using Prezio for professional financial management',
      results: [
        '100% professional presentation',
        '50% reduction in payment delays',
        '3x faster invoice creation',
        'Better cash flow visibility'
      ],
      products: ['Prezio'],
      year: '2025'
    },
    {
      client: 'Law Firm in Nairobi',
      industry: 'Legal & Compliance',
      logo: '⚖️',
      challenge: 'Physical signatures delaying time-sensitive court filings',
      solution: 'Deployed DigiSign for legally binding digital signatures',
      results: [
        'Same-day document execution',
        'Court-admissible signatures',
        'Remote client signing capability',
        '60% reduction in courier costs'
      ],
      products: ['DigiSign'],
      year: '2025'
    },
    {
      client: 'County Health Department',
      industry: 'Government & Public Sector',
      logo: '🏥',
      challenge: 'Paper-based health worker verification causing delays',
      solution: 'Implemented DigiSign e-KYC for instant credential verification',
      results: [
        'Instant license verification',
        '100% fraud prevention',
        'Digital certificate management',
        'Compliance with MOH standards'
      ],
      products: ['DigiSign'],
      year: '2025'
    }
  ]

  return (
    <>
      <Head>
        <title>Case Studies - Real Success Stories | RCFI Technology</title>
        <meta name="description" content="Read how organizations across Kenya are transforming with DigiSign, Elano, and Prezio" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <FiTrendingUp /> Success Stories
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how organizations across Kenya are achieving digital transformation with RCFI solutions
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Left: Client Info */}
                  <div>
                    <div className="text-6xl mb-4">{study.logo}</div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h3>
                    <div className="text-sm text-gray-600 mb-4">{study.industry}</div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.products.map((product) => (
                        <span key={product} className="px-3 py-1 bg-green-100 text-green-600 rounded-full text-sm font-semibold">
                          {product}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{study.year}</div>
                  </div>

                  {/* Middle: Challenge & Solution */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Challenge</h4>
                    <p className="text-gray-600 mb-6">{study.challenge}</p>
                    <h4 className="font-bold text-gray-900 mb-2">Solution</h4>
                    <p className="text-gray-600">{study.solution}</p>
                  </div>

                  {/* Right: Results */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4">Results</h4>
                    <ul className="space-y-3">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <FiCheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-green-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <Link href="/contact/demo" className="px-8 py-4 bg-white text-green-600 rounded-lg hover:bg-green-50 font-semibold text-lg transition-all inline-block">
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}