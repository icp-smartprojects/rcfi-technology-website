import Link from 'next/link'
import { FiCheckCircle } from 'react-icons/fi'

export function DigiSignPricing() {
  const plans = [
    {
      name: 'Individual',
      price: 'KES 500',
      period: 'per year',
      features: ['1 Digital Signature Certificate', 'Unlimited document signing', 'Mobile & web access', 'Basic e-KYC verification', 'Email support'],
      cta: 'Get Started',
      href: '/contact',
      popular: false
    },
    {
      name: 'Business',
      price: 'KES 2,000',
      period: 'per user/year',
      features: ['Organization certificates', 'Invoice signing (e-TIMS ready)', 'API access', 'Advanced e-KYC (1000/month)', 'Priority support', 'Blockchain timestamping'],
      cta: 'Start Free Trial',
      href: '/contact/demo',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      features: ['Unlimited certificates', 'Dedicated HSM instance', 'Custom integrations', 'SLA guarantees', '24/7 phone support', 'On-site training', 'White-labeling options'],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`rounded-2xl p-8 ${plan.popular ? 'bg-blue-600 text-white transform scale-105 shadow-xl relative' : 'bg-white border-2 border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
              )}
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.name}</h3>
              <div className={`text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>{plan.price}</div>
              <p className={`mb-6 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>{plan.period}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <FiCheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.popular ? 'text-white' : 'text-blue-600'}`} />
                    <span className={plan.popular ? 'text-white' : 'text-gray-700'}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className={`block w-full px-6 py-3 rounded-lg font-semibold text-center transition-all ${plan.popular ? 'bg-white text-blue-600 hover:bg-blue-50' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
