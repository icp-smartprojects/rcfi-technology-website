import Link from 'next/link'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

export default function ProductCard({ product }) {
  const colorClasses = {
    primary: {
      headerBg: 'gradient-primary',
      iconBg: 'bg-white/20',
      iconText: 'text-white',
      badge: 'bg-white/20 text-white',
      border: 'border-primary-100',
      featureDot: 'bg-primary-500',
      featureText: 'text-primary-700',
      button: 'btn-primary',
      liveRing: 'ring-2 ring-green-400/50',
      tag: 'badge-green',
    },
    secondary: {
      headerBg: 'gradient-secondary',
      iconBg: 'bg-white/20',
      iconText: 'text-white',
      badge: 'bg-white/20 text-white',
      border: 'border-secondary-100',
      featureDot: 'bg-secondary-500',
      featureText: 'text-secondary-700',
      button: 'btn-secondary',
      liveRing: '',
      tag: 'badge-blue',
    },
    accent: {
      headerBg: 'gradient-accent',
      iconBg: 'bg-white/20',
      iconText: 'text-white',
      badge: 'bg-white/20 text-white',
      border: 'border-accent-100',
      featureDot: 'bg-accent-500',
      featureText: 'text-accent-700',
      button: 'btn-accent',
      liveRing: '',
      tag: 'badge-amber',
    }
  }

  const colors = colorClasses[product.color] || colorClasses.primary

  return (
    <div className={`group h-full card-elevated flex flex-col border ${colors.border} overflow-hidden`}>
      {/* Colored header band */}
      <div className={`${colors.headerBg} px-6 pt-6 pb-10 relative`}>
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${colors.badge}`}>
            {product.tagline}
          </span>
          {product.color === 'primary' && (
            <span className="flex items-center gap-1 text-green-300 text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              LIVE
            </span>
          )}
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-1">{product.name}</h3>
        <p className="text-white/70 text-sm line-clamp-2">{product.shortDescription}</p>
      </div>

      {/* Content area — negative margin to overlap header */}
      <div className="flex-1 flex flex-col px-6 pb-6">
        <div className="-mt-5 bg-white rounded-xl shadow-sm border border-neutral-100 p-4 mb-5">
          {product.features && product.features.length > 0 && (
            <ul className="space-y-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className={`flex-shrink-0 w-2 h-2 rounded-full ${colors.featureDot} mt-1.5`} />
                  <span className="font-medium">{feature.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <Link
            href={`/products/${product.id}`}
            className={`btn ${colors.button} flex-1 justify-center text-sm py-2.5`}
          >
            Learn More <FiArrowRight className="w-4 h-4" />
          </Link>
          {product.href && (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 text-neutral-500 hover:text-primary-600 hover:border-primary-300 transition-colors"
              title={`Visit ${product.name}`}
            >
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
