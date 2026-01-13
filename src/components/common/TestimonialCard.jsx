import { FiStar } from 'react-icons/fi'

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-8 hover:shadow-xl transition-all duration-300">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-neutral-700 text-lg leading-relaxed mb-6">
        "{testimonial.quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4 border-t border-neutral-100 pt-6">
        {/* Avatar */}
        <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
          {testimonial.name.charAt(0)}
        </div>

        {/* Info */}
        <div>
          <div className="font-semibold text-neutral-900">
            {testimonial.name}
          </div>
          <div className="text-sm text-neutral-600">
            {testimonial.title}
          </div>
          <div className="text-sm text-primary-600 font-medium">
            {testimonial.organization}
          </div>
        </div>
      </div>

      {/* Logo (if available) */}
      {testimonial.logo && (
        <div className="mt-6 pt-6 border-t border-neutral-100">
          <img 
            src={testimonial.logo} 
            alt={testimonial.organization}
            className="h-12 opacity-60"
            onError={(e) => e.target.style.display = 'none'}
          />
        </div>
      )}
    </div>
  )
}