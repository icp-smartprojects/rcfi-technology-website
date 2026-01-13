import { FiCheckCircle } from 'react-icons/fi'

export function DigiSignUseCases() {
  const useCases = [
    {
      title: 'Government & Public Sector',
      icon: '🏛️',
      examples: ['e-Government permits', 'Public procurement', 'Inter-agency documents', 'Citizen services', 'Digital land registry']
    },
    {
      title: 'Financial Services',
      icon: '🏦',
      examples: ['Customer onboarding', 'Loan agreements', 'Insurance policies', 'Mobile banking', 'Compliance reporting']
    },
    {
      title: 'Legal & Compliance',
      icon: '⚖️',
      examples: ['Contract signing', 'Court filings', 'Legal correspondence', 'Power of attorney', 'Corporate resolutions']
    },
    {
      title: 'NGOs & Civil Society',
      icon: '🤝',
      examples: ['Grant agreements', 'Beneficiary verification', 'Financial reporting', 'Board resolutions', 'Donor compliance']
    },
    {
      title: 'Private Enterprises',
      icon: '🏢',
      examples: ['Employment contracts', 'Supplier agreements', 'Invoice processing', 'HR documents', 'Board minutes']
    },
    {
      title: 'SMEs & Startups',
      icon: '🚀',
      examples: ['Client contracts', 'Investor agreements', 'Vendor contracts', 'Employee onboarding', 'Service agreements']
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who Uses DigiSign?</h2>
          <p className="text-xl text-gray-600">Trusted across sectors for secure digital transactions</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all">
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
