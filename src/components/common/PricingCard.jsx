export default function PricingCard({ plan, featured = false }) {
  return (
    <div className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
      featured 
        ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl scale-105' 
        : 'bg-white border border-neutral-200 hover:border-primary-300 hover:shadow-xl'
    }`}>
      {featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-2 ${featured ? 'text-white' : 'text-neutral-900'}`}>
        {plan.name}
      </h3>
      
      <p className={`mb-6 ${featured ? 'text-primary-100' : 'text-neutral-600'}`}>
        {plan.description}
      </p>
      
      <div className="mb-6">
        <span className={`text-5xl font-bold ${featured ? 'text-white' : 'text-neutral-900'}`}>
          {plan.price}
        </span>
        {plan.period && (
          <span className={`ml-2 ${featured ? 'text-primary-100' : 'text-neutral-600'}`}>
            /{plan.period}
          </span>
        )}
      </div>
      
      {plan.features && (
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-sm font-bold ${
                featured ? 'bg-primary-500' : 'bg-primary-100 text-primary-600'
              }`}>
                ✓
              </span>
              <span className={featured ? 'text-primary-50' : 'text-neutral-600'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      )}
      
      <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
        featured
          ? 'bg-white text-primary-600 hover:bg-neutral-50'
          : 'bg-primary-600 text-white hover:bg-primary-700'
      }`}>
        Get Started
      </button>
    </div>
  )
}
