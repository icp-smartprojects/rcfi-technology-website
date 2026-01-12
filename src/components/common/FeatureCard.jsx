import { FiCheckCircle } from 'react-icons/fi'

export default function FeatureCard({ feature, reverse = false }) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 items-center ${reverse ? 'md:grid-flow-dense' : ''}`}>
      {/* Image */}
      <div className={reverse ? 'md:col-start-2' : ''}>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
          <img 
            src={feature.image} 
            alt={feature.title}
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3E' + feature.title + '%3C/text%3E%3C/svg%3E'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </div>

      {/* Content */}
      <div className={reverse ? 'md:col-start-1' : ''}>
        {/* Icon */}
        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
          <span className="text-3xl">
            {feature.icon === 'certificate' && '📜'}
            {feature.icon === 'file-invoice' && '🧾'}
            {feature.icon === 'user-check' && '✅'}
            {feature.icon === 'link' && '🔗'}
            {feature.icon === 'mobile-alt' && '📱'}
            {feature.icon === 'sitemap' && '🗺️'}
            {feature.icon === 'tasks' && '✓'}
            {feature.icon === 'chart-line' && '📈'}
            {feature.icon === 'coins' && '💰'}
            {feature.icon === 'file-chart-line' && '📊'}
            {feature.icon === 'file-invoice-dollar' && '💵'}
            {feature.icon === 'users' && '👥'}
            {feature.icon === 'chart-pie' && '🥧'}
            {feature.icon === 'exchange-alt' && '🔄'}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold text-neutral-900 mb-4">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
          {feature.description}
        </p>

        {/* Details List */}
        <ul className="space-y-3">
          {feature.details.map((detail, index) => (
            <li key={index} className="flex items-start gap-3">
              <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-1" />
              <span className="text-neutral-700">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}