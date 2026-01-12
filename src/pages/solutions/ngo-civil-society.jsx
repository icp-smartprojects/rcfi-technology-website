import Head from 'next/head'
import Link from 'next/link'
import { FiUsers, FiCheckCircle, FiShield, FiAward, FiArrowRight, FiHeart, FiTrendingUp } from 'react-icons/fi'

export default function NGOSolution() {
  return (
    <>
      <Head>
        <title>NGO & Civil Society Solutions | RCFI Technology</title>
        <meta name="description" content="Grant management, compliance, and impact tracking solutions for NGOs, CSOs, and development organizations in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-purple-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FiUsers /> NGOs & Civil Society
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Grant Management & Impact Tracking
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Comprehensive solutions for managing multi-donor programs, tracking beneficiaries, and demonstrating impact
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/demo" className="px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-lg transition-all inline-flex items-center justify-center">
                  Request Demo <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl p-12 flex items-center justify-center">
              <FiUsers className="w-64 h-64 text-purple-600 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challenges Facing NGOs & CSOs
            </h2>
            <p className="text-xl text-gray-600">
              Complex reporting requirements and limited resources
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Managing multiple donor requirements is overwhelming',
              'Manual beneficiary verification is slow and unreliable',
              'Financial reporting across projects is complex',
              'Board governance documentation is scattered',
              'Proving impact to donors requires extensive manual work',
              'Limited IT budgets prevent digital adoption'
            ].map((challenge, index) => (
              <div key={index} className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                  <p className="text-gray-700">{challenge}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How RCFI Empowers Civil Society
            </h2>
            <p className="text-xl text-gray-600">
              Affordable, comprehensive solutions built for social impact
            </p>
          </div>

          <div className="space-y-12">
            {/* DigiSign for NGOs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiShield /> DigiSign
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Secure Grant Agreements & Beneficiary Verification
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Digital signatures for grant documents and instant beneficiary identity verification
                  </p>
                  <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 mb-6">
                    <div className="text-sm font-semibold text-purple-600 mb-2">Special NGO Pricing</div>
                    <div className="font-bold text-2xl text-purple-600">KES 500/year</div>
                    <div className="text-sm text-gray-600">per certificate for registered CSOs</div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Digital grant agreement signing',
                      'e-KYC beneficiary verification',
                      'Board resolution signatures',
                      'Blockchain-secured reporting',
                      'Donor document authentication',
                      'Mobile-first for field operations'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-12 flex items-center justify-center">
                  <FiShield className="w-48 h-48 text-purple-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Elano for NGOs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-12 flex items-center justify-center">
                  <FiTrendingUp className="w-48 h-48 text-blue-600 opacity-20" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiTrendingUp /> Elano
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Complete Grant Lifecycle Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    From proposal to impact reporting, manage everything in one platform
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Multi-donor program tracking',
                      'MEARL (Monitoring, Evaluation, Accountability, Research & Learning) framework',
                      'Budget and expenditure management',
                      'Automated donor reporting',
                      'Impact measurement dashboards',
                      'Board governance workflows'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prezio for Small CSOs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiAward /> Prezio
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Simple Financial Management for Small CSOs
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Affordable accounting and invoicing for grassroots organizations
                  </p>
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-6 mb-6">
                    <div className="text-sm font-semibold text-orange-600 mb-2">Free for Small CSOs</div>
                    <div className="font-bold text-2xl text-orange-600">KES 0</div>
                    <div className="text-sm text-gray-600">Up to 10 invoices/month for registered CSOs</div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Grant budget tracking',
                      'Expense documentation',
                      'Donor invoicing',
                      'Financial reports for audits',
                      'Multi-currency support',
                      'Receipt management'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-12 flex items-center justify-center">
                  <FiAward className="w-48 h-48 text-orange-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-24 px-4 bg-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Story: Uasin Gishu CSO Network
            </h2>
            <p className="text-xl text-purple-100">
              Transforming civil society governance and accountability
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Challenge</h3>
                <p className="text-purple-100">
                  No centralized system for CSO accountability, making it difficult to track programs and demonstrate impact to donors
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-purple-100">
                  Implemented Elano for network-wide governance, enabling digital registration, program tracking, and transparent reporting
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <ul className="space-y-2 text-purple-100">
                  <li>✓ 150+ member CSOs onboarded</li>
                  <li>✓ Transparent grant tracking</li>
                  <li>✓ Standardized M&E across network</li>
                  <li>✓ Real-time impact dashboards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CSOs Choose RCFI */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Civil Society Organizations Choose RCFI
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiHeart,
                title: 'Mission-Driven',
                description: 'Built by a social enterprise that understands your challenges'
              },
              {
                icon: FiAward,
                title: 'Affordable Pricing',
                description: 'Special rates and free tiers for registered CSOs and grassroots organizations'
              },
              {
                icon: FiUsers,
                title: 'Donor Compatible',
                description: 'Integrates with major donor portals and reporting requirements'
              },
              {
                icon: FiCheckCircle,
                title: 'Community Support',
                description: 'Training, documentation, and peer learning networks included'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                  <Icon className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Amplify Your Social Impact?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Join hundreds of CSOs using RCFI to improve governance, compliance, and impact reporting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/demo" className="px-8 py-4 bg-white text-purple-600 rounded-lg hover:bg-purple-50 font-semibold text-lg transition-all">
              Schedule a Demo
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}