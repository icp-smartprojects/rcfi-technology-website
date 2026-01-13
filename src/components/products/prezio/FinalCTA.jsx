import Link from 'next/link'

export function PrezioFinalCTA() {
  return (
    <section className="py-24 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Managing Your Business Better Today</h2>
        <p className="text-xl mb-8">Join thousands of Kenyan businesses using Prezio</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all">
            Start Free Trial
          </Link>
          <Link href="#pricing" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 font-semibold text-lg transition-all">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  )
}