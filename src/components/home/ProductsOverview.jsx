import Link from 'next/link'
import ProductCard from '@/components/common/ProductCard'
import { productsData } from '@/data/productsData'

export default function ProductsOverview() {
  const products = [
    productsData.digisign,
    productsData.elano,
    productsData.prezio
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Our Products
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Complete digital transformation solutions for every need
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
        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">
            Not sure which solution is right for you?
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-lg"
          >
            Talk to our team
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}