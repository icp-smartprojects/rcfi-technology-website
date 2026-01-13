import Head from 'next/head'
import Link from 'next/link'
import { FiCheckCircle, FiArrowRight, FiShield, FiUsers, FiAward } from 'react-icons/fi'

export default function GovernmentSolution() {
  return (
    <>
      <Head>
        <title>Government & Public Sector Solutions | RCFI Technology</title>
        <meta name="description" content="Digital transformation solutions for government agencies, county governments, and public institutions in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                ⚖️ Government & Public Sector
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Modernize Public Service Delivery
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Digital transformation solutions that ensure compliance, build citizen trust, and streamline government operations
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact/demo" className="px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-lg transition-all inline-flex items-center justify-center">
                  Request Demo <FiArrowRight className="ml-2" />
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-semibold text-lg transition-all text-center">
                  Contact Sales
                </Link>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 flex items-center justify-center text-blue-600 text-9xl opacity-20">
              ⚖️
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challenges Facing Public Institutions
            </h2>
            <p className="text-xl text-gray-600">
              Manual processes and outdated systems slow down progress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Manual, paper-based processes slow down service delivery',
              'Lack of transparency erodes public trust',
              'Data silos prevent inter-agency collaboration',
              'Compliance with regulations is complex and time-consuming',
              'Citizens demand digital services but infrastructure is lacking',
              'Budget constraints limit technology adoption'
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
              How RCFI Helps Government
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive digital solutions for public sector transformation
            </p>
          </div>

          <div className="space-y-12">
            {/* DigiSign for Government */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiShield /> DigiSign
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Secure Digital Signatures for Citizen Services
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Enable legally binding digital signatures for permits, licenses, and official documents with full KRA e-TIMS compliance
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Digitally signed permits and licenses',
                      'Secure inter-agency document exchange',
                      'e-KYC for citizen verification',
                      'Blockchain-secured public records',
                      'Mobile-first service delivery',
                      'Integration with NIIMS, NTSA, and eCitizen'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-12 flex items-center justify-center">
                  <FiShield className="w-48 h-48 text-blue-600 opacity-20" />
                </div>
              </div>
            </div>

            {/* Elano for Government */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-12 flex items-center justify-center">
                  <FiUsers className="w-48 h-48 text-purple-600 opacity-20" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiUsers /> Elano
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Governance, Strategic Planning & M&E
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Complete institutional management platform for public agencies and county governments
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Strategic plan execution tracking',
                      'Program monitoring and evaluation',
                      'Budget and financial management',
                      'Compliance and audit trails',
                      'Public performance dashboards',
                      'Inter-departmental collaboration'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Prezio for Government */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiAward /> Prezio
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    County Revenue & Procurement Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Simple financial management for county governments and public procurement
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Revenue collection tracking',
                      'Supplier invoice management',
                      'Procurement documentation',
                      'Financial reporting',
                      'Multi-department coordination',
                      'Budget variance analysis'
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
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Success Story: Uasin Gishu County
            </h2>
            <p className="text-xl text-blue-100">
              Transforming civil society governance at the county level
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Challenge</h3>
                <p className="text-blue-100">
                  Manual CSO registration and tracking processes with no centralized system for accountability and performance monitoring
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Solution</h3>
                <p className="text-blue-100">
                  Deployed Elano platform for digital CSO network management, enabling real-time tracking and transparent governance
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Results</h3>
                <ul className="space-y-2 text-blue-100">
                  <li>✓ 200+ CSOs registered digitally</li>
                  <li>✓ 80% reduction in registration time</li>
                  <li>✓ Complete audit trail for compliance</li>
                  <li>✓ Real-time dashboard for officials</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relevant Features */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Built for Kenya's Public Sector
            </h2>
            <p className="text-xl text-gray-600">
              Features designed specifically for government compliance and operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Kenya DPA 2019 Compliant',
                description: 'Full compliance with Kenya Data Protection Act and CAK regulations'
              },
              {
                title: 'National System Integration',
                description: 'Seamless integration with NIIMS, NTSA, KRA, and eCitizen'
              },
              {
                title: 'Konza Data Center Hosted',
                description: 'Hosted on Kenya\'s national data center for data sovereignty'
              },
              {
                title: 'Multi-Language Support',
                description: 'Available in English and Kiswahili for accessibility'
              },
              {
                title: 'Offline Capable',
                description: 'Works in low-connectivity rural areas with sync capability'
              },
              {
                title: 'ISO 27001 Certified',
                description: 'International information security standards compliance'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 text-blue-600 mb-4 text-2xl">✓</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Public Service Delivery?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join leading government agencies using RCFI for secure, compliant digital transformation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/demo" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
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