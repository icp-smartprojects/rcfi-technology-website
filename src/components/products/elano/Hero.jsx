import Link from 'next/link'
import { FiUsers, FiArrowRight, FiCheckCircle, FiShield } from 'react-icons/fi'

export function ElanoHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FiUsers /> Governance Platform
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Elano</h1>
            <p className="text-2xl text-primary-600 font-semibold mb-4">Governance & Intelligence</p>
            <p className="text-xl text-gray-600 mb-8">
              Cloud-based platform for institutional efficiency, transparency, and accountability. Unify governance, strategy, finance, and performance management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/contact/demo" className="px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold text-lg transition-all inline-flex items-center justify-center group">
                Request Demo <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="#pricing" className="px-8 py-4 border-2 border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all text-center">
                View Pricing
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <FiShield className="text-primary-600" />
                <span>ISO 27001 Certified</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FiCheckCircle className="text-primary-600" />
                <span>MEARL Framework</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl p-12 flex items-center justify-center">
            <FiUsers className="w-64 h-64 text-primary-600 opacity-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
