import { FiCheckCircle } from 'react-icons/fi'

export function PrezioUseCases() {
  const useCases = [
    { title: 'Freelancers', icon: '💼', examples: ['Service quotations', 'Time-based billing', 'Client proposals', 'Payment tracking', 'Tax prep'] },
    { title: 'SMEs', icon: '🏪', examples: ['Product invoicing', 'Supplier management', 'Cash flow tracking', 'Sales reports', 'VAT compliance'] },
    { title: 'Consultants', icon: '📊', examples: ['Project proposals', 'Milestone billing', 'Client comms', 'Service docs', 'Performance tracking'] },
    { title: 'Startups', icon: '🚀', examples: ['Investor financials', 'Revenue tracking', 'Customer analytics', 'Growth reports', 'Team collaboration'] }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Perfect For</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase) => (
            <div key={useCase.title} className="bg-gray-50 rounded-xl p-6">
              <div className="text-4xl mb-4">{useCase.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{useCase.title}</h3>
              <ul className="space-y-2">
                {useCase.examples.map((example) => (
                  <li key={example} className="flex items-start gap-2 text-sm text-gray-600">
                    <FiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{example}</span>
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
