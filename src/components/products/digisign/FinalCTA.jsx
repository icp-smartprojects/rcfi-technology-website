import Link from 'next/link'

export function DigiSignFinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Go Digital?</h2>
        <p className="text-xl mb-8 text-blue-100">
          Join thousands using DigiSign for secure, legally binding digital transactions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact/demo" className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all">
            Schedule a Demo
          </Link>
          <Link href="/contact" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  )
}