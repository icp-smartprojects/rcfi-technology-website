import Head from 'next/head'
import Link from 'next/link'
import { FiCheckCircle, FiArrowRight, FiShield, FiUsers, FiAward, FiZap } from 'react-icons/fi'

export default function FinancialServicesSolution() {
  return (
    <>
      <Head>
        <title>Financial Services Solutions | RCFI Technology</title>
        <meta name="description" content="Digital transformation solutions for banks, SACCOs, insurance, and fintech companies in Kenya and East Africa" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                🏦 Financial Services
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Secure Onboarding & Digital Transformation
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Instant e-KYC verification, digital signatures, and compliance solutions for financial institutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/demo" className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold text-lg transition-all inline-flex items-center justify-center">
                  Request Demo <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-green-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-12 flex items-center justify-center">
              <div className="text-9xl opacity-20">🏦</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challenges in Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              Traditional processes are holding back digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Customer onboarding (KYC) is slow and manual',
              'Document signing requires physical presence',
              'Fraud and identity theft are rising',
              'Regulatory compliance costs are high',
              'Digital lending requires instant verification',
              'Competition from fintech demands speed'
            ].map((challenge, index) => (
              <div key={index} className="bg-primary-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex-shrink-0 mt-1"></div>
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
              How RCFI Transforms Financial Services
            </h2>
            <p className="text-xl text-gray-600">
              From instant onboarding to secure transactions
            </p>
          </div>

          <div className="space-y-12">
            {/* DigiSign for Financial Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiShield /> DigiSign
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Instant e-KYC & Digital Signatures
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Onboard customers in seconds with automated identity verification and legally binding digital signatures
                  </p>
                  <div className="bg-primary-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <FiZap className="w-8 h-8 text-primary-600" />
                      <div>
                        <div className="font-bold text-2xl text-primary-600">Under 10 seconds</div>
                        <div className="text-sm text-gray-600">Average e-KYC verification time</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Automated KYC via NIIMS, NTSA, CRB',
                      'Digital loan agreement signing',
                      'Biometric verification & liveness detection',
                      'Real-time fraud detection',
                      'Regulatory compliance reporting',
                      'Integration with core banking systems'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiShield className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Elano for Financial Services */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiUsers className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiUsers /> Elano
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Risk Management & Compliance
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete oversight platform for portfolio management and regulatory compliance
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Portfolio monitoring dashboards',
                      'Compliance tracking & reporting',
                      'Audit trail management',
                      'Board governance workflows',
                      'ESG reporting capabilities',
                      'Risk assessment automation'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prezio for SACCOs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiAward /> Prezio
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    SACCO & Microfinance Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Simple financial management for SACCOs and microfinance institutions
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Member invoicing & billing',
                      'Payment tracking',
                      'Financial reporting',
                      'Multi-currency support',
                      'Tax compliance automation',
                      'Loan tracking'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiAward className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 px-4 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Financial Institutions Choose RCFI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Instant Verification',
                description: 'e-KYC completed in under 10 seconds via government database integration',
                stat: '<10s',
                statLabel: 'Average KYC time'
              },
              {
                title: 'Bank-Grade Security',
                description: 'ISO 27001 certified with FIPS 140-2 Level 3 HSM protection',
                stat: '99.95%',
                statLabel: 'Uptime SLA'
              },
              {
                title: 'Full Compliance',
                description: 'CBK, IRA, and Kenya DPA 2019 compliant out of the box',
                stat: '100%',
                statLabel: 'Regulatory aligned'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <div className="text-3xl mb-4">✓</div>
                <div className="text-3xl font-bold mb-2">{benefit.stat}</div>
                <div className="text-sm text-primary-100 mb-4">{benefit.statLabel}</div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Seamless Integration with Your Systems
            </h2>
            <p className="text-xl text-gray-600">
              Works with leading core banking and fintech platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Core Banking Systems',
              'Mobile Money Platforms',
              'Credit Reference Bureaus',
              'NIIMS (Huduma Namba)',
              'NTSA Database',
              'QuickBooks',
              'SAP',
              'Microsoft Dynamics'
            ].map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center">
                <div className="font-semibold text-gray-900">{integration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Financial Services?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join leading banks and SACCOs using RCFI for secure, compliant digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/demo" className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all">
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