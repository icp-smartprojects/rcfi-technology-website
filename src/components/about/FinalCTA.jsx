import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function AboutFinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Join Us in Building Africa's Digital Future
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Whether you're a government agency, enterprise, or civil society organization, we're here to help you succeed
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact/demo" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all inline-flex items-center justify-center">
            Schedule a Demo
            <FiArrowRight className="ml-2" />
          </Link>
          <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
            Get in Touch
          </Link>
        </div>
        <div className="mt-8 text-blue-100">
          <p>Or email us at <a href="mailto:info@rcfi.co.ke" className="underline hover:text-white">info@rcfi.co.ke</a></p>
        </div>
      </div>
    </section>
  )
}