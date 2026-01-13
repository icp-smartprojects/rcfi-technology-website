import { FiCheckCircle } from 'react-icons/fi'

export function PrezioFeatures() {
  const features = [
    {
      title: 'Quotations & Invoices',
      description: 'Professional documents in minutes',
      items: ['Customizable templates', 'Company branding', 'Automatic calculations', 'Tax & discount handling', 'PDF generation', 'QR code sharing']
    },
    {
      title: 'Client Management',
      description: 'Keep all customer info organized',
      items: ['Client database', 'Contact information', 'Transaction history', 'Document linking', 'Quick search']
    },
    {
      title: 'Financial Tracking',
      description: 'Stay on top of your finances',
      items: ['Income & expense tracking', 'Payment status', 'Financial reports', 'Profit/loss statements', 'Excel export']
    },
    {
      title: 'Multi-Currency',
      description: 'Work with clients across borders',
      items: ['KES, USD, EUR, UGX, TZS', 'Auto conversion', 'Exchange rates', 'Currency formatting']
    }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <FiCheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
