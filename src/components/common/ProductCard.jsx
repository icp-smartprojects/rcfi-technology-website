import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const colorClasses = {
    primary: {
      bg: 'bg-primary-50',
      border: 'border-primary-200 hover:border-primary-300',
      text: 'text-primary-600',
      badge: 'bg-primary-100 text-primary-700',
      button: 'bg-primary-600 hover:bg-primary-700 text-white'
    },
    secondary: {
      bg: 'bg-primary-50',
      border: 'border-primary-200 hover:border-primary-300',
      text: 'text-primary-600',
      badge: 'bg-primary-100 text-primary-700',
      button: 'bg-primary-600 hover:bg-primary-700 text-white'
    },
    accent: {
      bg: 'bg-primary-50',
      border: 'border-primary-200 hover:border-primary-300',
      text: 'text-primary-600',
      badge: 'bg-primary-100 text-primary-700',
      button: 'bg-primary-600 hover:bg-primary-700 text-white'
    }
  }

  const colors = colorClasses[product.color] || colorClasses.primary

  return (
    <div className={`group h-full ${colors.bg} border ${colors.border} rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2`}>
      {/* Badge */}
      <div className={`inline-block ${colors.badge} px-3 py-1 rounded-full text-sm font-semibold mb-4`}>
        {product.tagline}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-neutral-900 mb-3">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-neutral-600 mb-6 line-clamp-3">
        {product.shortDescription}
      </p>

      {/* Key Features */}
      {product.features && product.features.length > 0 && (
        <ul className="space-y-2 mb-8">
          {product.features.slice(0, 3).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-neutral-600">
              <span className={`flex-shrink-0 w-4 h-4 rounded-full ${colors.text} mt-1`}></span>
              <span>{feature.title}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      <Link 
        href={`/products/${product.id}`}
        className={`inline-flex items-center gap-2 ${colors.button} px-6 py-3 rounded-lg font-semibold transition-all duration-200 group-hover:gap-3`}
      >
        Learn More
        <FiArrowRight className="w-4 h-4" />
      </Link>
    </div>
  )
}
