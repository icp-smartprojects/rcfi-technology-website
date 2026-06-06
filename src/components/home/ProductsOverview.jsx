import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import ProductCard from '@/components/common/ProductCard'
import { productsData } from '@/data/productsData'

export default function ProductsOverview() {
  const products = [
    productsData.certysign,
    productsData.elano,
    productsData.prezio
  ]

  return (
    <section className="section-padding relative overflow-hidden bg-neutral-50">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 15% 50%, rgba(35,94,67,0.06) 0%, transparent 50%), radial-gradient(circle at 85% 20%, rgba(37,99,235,0.06) 0%, transparent 40%)'
      }} />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-5">
            Our Platform
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Built for Africa's Digital Future
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Three distinct platforms. One mission — powering digital trust, governance, and commerce across East Africa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-neutral-500 mb-5 text-sm uppercase tracking-widest font-medium">
            Not sure which solution fits your needs?
          </p>
          <Link
            href="/contact"
            className="btn btn-outline text-base"
          >
            Talk to Our Team <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
