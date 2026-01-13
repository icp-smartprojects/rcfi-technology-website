import Head from 'next/head'
import Link from 'next/link'
import { FiCheckCircle, FiShield, FiLock, FiFileText, FiArrowRight, FiClock, FiAward } from 'react-icons/fi'

export default function LegalSolution() {
  return (
    <>
      <Head>
        <title>Legal & Compliance Solutions | RCFI Technology</title>
        <meta name="description" content="Secure, legally binding digital workflow solutions for law firms, advocates, notaries, and compliance professionals in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FiCheckCircle /> Legal & Compliance
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Secure, Legally Binding Digital Workflows
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Court-admissible digital signatures, client verification, and case management for legal professionals
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
              <FiCheckCircle className="w-64 h-64 text-primary-600 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challenges in Legal Practice
            </h2>
            <p className="text-xl text-gray-600">
              Time-sensitive matters require modern solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Physical signatures delay time-sensitive filings',
              'Document authenticity is hard to verify',
              'Client onboarding requires in-person meetings',
              'Notarization is slow and expensive',
              'Audit trails are manual and incomplete',
              'Remote work is difficult with paper documents'
            ].map((challenge, index) => (
              <div key={index} className="bg-primary-50 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
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
              How RCFI Modernizes Legal Practice
            </h2>
            <p className="text-xl text-gray-600">
              CAK-licensed digital trust for the legal profession
            </p>
          </div>

          <div className="space-y-12">
            {/* DigiSign for Legal */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiShield /> DigiSign
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Legally Binding Digital Signatures
                  </h3>
                  <p className="text-gray-600 mb-6">
                    CAK-licensed digital certificates with full legal validity under Kenyan law
                  </p>
                  <div className="bg-primary-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4">
                      <FiAward className="w-8 h-8 text-primary-600" />
                      <div>
                        <div className="font-bold text-lg text-primary-600">Kenya Evidence Act Compliant</div>
                        <div className="text-sm text-gray-600">Court-admissible digital signatures</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'CAK-licensed digital certificates',
                      'Court-admissible digital signatures',
                      'Client identity verification (e-KYC)',
                      'Document timestamping',
                      'Blockchain proof of execution',
                      'Multi-party signing workflows'
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

            {/* Elano for Legal */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiFileText className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiFileText /> Elano
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Case & Matter Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Organize your practice with secure document management and workflow automation
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Secure document repository',
                      'Deadline tracking & reminders',
                      'Client communication logs',
                      'Time and billing tracking',
                      'Compliance monitoring',
                      'Matter-based file organization'
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
          </div>
        </div>
      </section>

      {/* Legal Features */}
      <section className="py-24 px-4 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Legal Professionals
            </h2>
            <p className="text-xl text-primary-100">
              Features designed specifically for legal practice requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: FiLock,
                title: 'Legal-Grade Security',
                description: 'FIPS 140-2 Level 3 HSM protection with tamper-evident sealing'
              },
              {
                icon: FiClock,
                title: 'Timestamping',
                description: 'RFC 3161 compliant timestamps for proving document existence'
              },
              {
                icon: FiAward,
                title: 'Court Integration',
                description: 'Compatible with court filing systems and legal document standards'
              },
              {
                icon: FiShield,
                title: 'Client Privilege',
                description: 'End-to-end encryption protecting attorney-client communications'
              },
              {
                icon: FiFileText,
                title: 'Audit Trails',
                description: 'Complete, immutable audit logs for every document action'
              },
              {
                icon: FiCheckCircle,
                title: 'Compliance Ready',
                description: 'Meets Law Society of Kenya and bar association requirements'
              }
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-primary-100">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Use Cases for Legal Practice
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Contract Signing',
                items: [
                  'Employment agreements',
                  'Commercial contracts',
                  'Tenancy agreements',
                  'Sale agreements',
                  'Non-disclosure agreements'
                ]
              },
              {
                title: 'Court Filings',
                items: [
                  'Pleadings and submissions',
                  'Affidavits and exhibits',
                  'Appeal documents',
                  'Case management docs',
                  'Evidence submissions'
                ]
              },
              {
                title: 'Client Services',
                items: [
                  'Legal opinion letters',
                  'Client onboarding (KYC)',
                  'Retainer agreements',
                  'Fee notes and invoices',
                  'Power of attorney'
                ]
              },
              {
                title: 'Internal Operations',
                items: [
                  'Partnership agreements',
                  'Board resolutions',
                  'Staff contracts',
                  'Compliance reports',
                  'Audit documentation'
                ]
              }
            ].map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <ul className="space-y-2">
                  {useCase.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Compliance & Standards
            </h2>
            <p className="text-xl text-gray-600">
              Meeting the highest legal and security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Kenya Evidence Act',
              'CAK e-Certification Guidelines',
              'Kenya Data Protection Act 2019',
              'ISO/IEC 27001',
              'CA/B Forum Baseline Requirements',
              'ETSI EN 319 411-1',
              'Law Society of Kenya Requirements',
              'International Bar Association Standards'
            ].map((standard, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center border-2 border-gray-200">
                <FiAward className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                <div className="font-semibold text-gray-900">{standard}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Modernize Your Legal Practice?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join leading law firms using RCFI for secure, compliant digital workflows
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