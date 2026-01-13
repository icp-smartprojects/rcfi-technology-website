import Head from 'next/head'
import Link from 'next/link'
import { FiBarChart2, FiCheckCircle, FiShield, FiUsers, FiAward, FiArrowRight, FiTrendingUp, FiDollarSign } from 'react-icons/fi'

export default function SMESolution() {
  return (
    <>
      <Head>
        <title>SME & Enterprise Solutions | RCFI Technology</title>
        <meta name="description" content="Digital transformation solutions for small and medium enterprises, startups, and growing businesses in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <FiBarChart2 /> SMEs & Enterprises
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Digital Transformation for Growing Businesses
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Professional invoicing, digital contracts, and business management solutions that scale with you
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
              <FiBarChart2 className="w-64 h-64 text-primary-600 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Challenges */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Challenges Small Businesses Face
            </h2>
            <p className="text-xl text-gray-600">
              Limited resources, growing demands, and increasing complexity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Manual invoicing wastes time and looks unprofessional',
              'Contract signing requires physical meetings',
              'Financial management is done in spreadsheets',
              'KRA e-TIMS compliance is confusing',
              'Customer data is scattered and unsecured',
              'No clear visibility into business performance'
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
              How RCFI Transforms SMEs
            </h2>
            <p className="text-xl text-gray-600">
              Simple, affordable tools that make you look like an enterprise
            </p>
          </div>

          <div className="space-y-12">
            {/* Prezio for SMEs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiAward /> Prezio
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Simple, Professional Business Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Create professional invoices, track clients, and manage finances without hiring an accountant
                  </p>
                  <div className="bg-primary-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                    <div className="flex items-center gap-4">
                      <FiDollarSign className="w-8 h-8 text-primary-600" />
                      <div>
                        <div className="font-bold text-2xl text-primary-600">Free Tier Available</div>
                        <div className="text-sm text-gray-600">Perfect for startups and freelancers</div>
                      </div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {[
                      'Professional invoicing & quotations',
                      'Client management database',
                      'Payment tracking',
                      'Financial reports',
                      'Multi-currency support',
                      'Tax compliance automation'
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

            {/* DigiSign for SMEs */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiShield className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiShield /> DigiSign
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Professional Digital Signatures for Business
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Sign contracts, authenticate invoices, and close deals faster with legally binding digital signatures
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Digital contract signing',
                      'KRA e-TIMS invoice authentication',
                      'Employee document signing',
                      'Supplier agreement management',
                      'Board resolution signatures',
                      'Remote closing of deals'
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

            {/* Elano for Growing Enterprises */}
            <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    <FiUsers /> Elano
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Strategic Planning & Project Management
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Scale your operations with enterprise-grade planning and execution tools
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Business plan execution tracking',
                      'Project portfolio management',
                      'Team collaboration tools',
                      'Performance dashboards',
                      'Compliance management',
                      'Board meeting workflows'
                    ].map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-xl p-12 flex items-center justify-center">
                  <FiUsers className="w-48 h-48 text-primary-600 opacity-20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-24 px-4 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The SME Advantage
            </h2>
            <p className="text-xl text-primary-100">
              See the impact on your business performance
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                stat: '70%',
                label: 'Faster Invoice Processing',
                description: 'From creation to payment'
              },
              {
                stat: '50%',
                label: 'Time Saved on Admin',
                description: 'Focus on growth, not paperwork'
              },
              {
                stat: '100%',
                label: 'Professional Presentation',
                description: 'Compete with larger companies'
              },
              {
                stat: '90%',
                label: 'Improved Cash Flow',
                description: 'Better tracking and follow-ups'
              }
            ].map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-2">{metric.stat}</div>
                <div className="text-lg font-semibold mb-2">{metric.label}</div>
                <p className="text-primary-100 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Comparison */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Affordable for Any Business Size
            </h2>
            <p className="text-xl text-gray-600">
              Start free, upgrade as you grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Startup */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Startup</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Free</div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Up to 10 invoices/month',
                  'Basic client management',
                  'Standard templates',
                  'PDF export'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full px-6 py-3 border-2 border-green-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-center transition-all">
                Get Started
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-primary-600 text-white rounded-2xl p-8 relative transform scale-105 shadow-xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-800 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">Professional</h3>
                <div className="text-4xl font-bold mb-2">KES 1,500</div>
                <p className="text-primary-100">per month</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Unlimited invoices',
                  'Custom branding',
                  'All currencies',
                  'Financial reports',
                  'Priority support',
                  'API access'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact/demo" className="block w-full px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-center transition-all">
                Start Free Trial
              </Link>
            </div>

            {/* Business */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Business</h3>
                <div className="text-4xl font-bold text-gray-900 mb-2">Custom</div>
                <p className="text-gray-600">For growing teams</p>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'Everything in Professional',
                  'Multi-user access',
                  'Advanced analytics',
                  'Custom integrations',
                  'Dedicated support'
                ].map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full px-6 py-3 border-2 border-green-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-center transition-all">
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Your Business?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Join thousands of SMEs using RCFI to grow faster and more professionally
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/demo" className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all">
              Start Free Trial
            </Link>
            <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}