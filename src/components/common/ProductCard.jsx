import Link from 'next/link'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

const PRODUCT_STYLES = {
  primary: {
    headerStyle: { background: 'linear-gradient(135deg, #235e43 0%, #2f7652 100%)' },
    border: 'border-green-100',
    featureDot: 'bg-green-600',
    buttonStyle: { background: '#235e43', color: '#fff' },
    buttonHoverStyle: { background: '#1c4a35' },
  },
  secondary: {
    headerStyle: { background: 'linear-gradient(135deg, #0d2d1f 0%, #1a4d38 100%)' },
    border: 'border-green-200',
    featureDot: 'bg-green-900',
    buttonStyle: { background: '#0d2d1f', color: '#fff' },
    buttonHoverStyle: { background: '#071a12' },
  },
  accent: {
    headerStyle: { background: 'linear-gradient(135deg, #b45309 0%, #d97706 100%)' },
    border: 'border-amber-100',
    featureDot: 'bg-amber-500',
    buttonStyle: { background: '#d97706', color: '#fff' },
    buttonHoverStyle: { background: '#b45309' },
  },
}

export default function ProductCard({ product }) {
  const s = PRODUCT_STYLES[product.color] || PRODUCT_STYLES.primary

  return (
    <div className={`group h-full flex flex-col rounded-2xl overflow-hidden border ${s.border} bg-white shadow-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}>

      {/* Coloured header band */}
      <div className="px-6 pt-6 pb-10 relative" style={s.headerStyle}>
        <div className="flex items-start justify-between mb-4">
          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/20 text-white">
            {product.tagline}
          </span>
          {product.color === 'primary' && (
            <span className="flex items-center gap-1 text-green-200 text-xs font-semibold">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              LIVE
            </span>
          )}
        </div>
        <h3 className="text-2xl font-display font-bold text-white mb-1">{product.name}</h3>
        <p className="text-white/70 text-sm line-clamp-2">{product.shortDescription}</p>
      </div>

      {/* Feature list — overlaps header */}
      <div className="flex-1 flex flex-col px-6 pb-6">
        <div className="-mt-5 bg-white rounded-xl shadow-sm border border-neutral-100 p-4 mb-5">
          {product.features && product.features.length > 0 && (
            <ul className="space-y-2">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-neutral-700">
                  <span className={`flex-shrink-0 w-2 h-2 rounded-full ${s.featureDot} mt-1.5`} />
                  <span className="font-medium">{feature.title}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="mt-auto flex items-center gap-3">
          <Link
            href={`/products/${product.id}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={s.buttonStyle}
          >
            Learn More <FiArrowRight className="w-4 h-4" />
          </Link>
          {product.href && (
            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 text-neutral-400 hover:text-neutral-700 hover:border-neutral-300 transition-colors"
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
