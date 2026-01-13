import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

export function PrezioPricing() {
  const plans = [
    {
      name: 'Free',
      price: 'KES 0',
      period: 'forever',
      features: ['Up to 10 invoices/month', 'Basic client management', 'Standard templates', 'PDF export', 'Email support'],
      cta: 'Start Free',
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 1,500',
      period: 'per month',
      features: ['Unlimited invoices', 'Custom branding', 'All currencies', 'Financial reports', 'Priority support', 'API access'],
      cta: 'Start Free Trial',
      popular: true
    },
    {
      name: 'Business',
      price: 'KES 5,000',
      period: 'per month',
      features: ['Multi-user access', 'Advanced analytics', 'Inventory management', 'Custom integrations', 'Dedicated support', 'White-label'],
      cta: 'Contact Sales',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl p-8 ${plan.popular ? 'bg-primary-600 text-white transform scale-105 shadow-xl' : 'bg-white border-2 border-gray-200'}`}>
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
              <p className={`mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-600'}`}>{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <FiCheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-primary-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className={`block w-full px-6 py-3 rounded-lg font-semibold text-center ${plan.popular ? 'bg-white text-primary-600' : 'border-2 border-primary-600 text-primary-600 hover:bg-primary-50'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
