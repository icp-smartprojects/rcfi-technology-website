import { FiCheckCircle } from 'react-icons/fi'

export function ElanoUseCases() {
  const useCases = [
    {
      title: 'Government Agencies',
      icon: '🏛️',
      examples: ['Ministry strategic planning', 'Program M&E', 'Inter-agency coordination', 'Citizen engagement', 'Compliance reporting']
    },
    {
      title: 'NGOs & CSOs',
      icon: '🤝',
      examples: ['Multi-donor programs', 'Beneficiary tracking', 'Impact measurement', 'Grant compliance', 'Board governance']
    },
    {
      title: 'Development Partners',
      icon: '🌍',
      examples: ['Grantee monitoring', 'Portfolio dashboards', 'Impact aggregation', 'Risk management', 'Knowledge management']
    },
    {
      title: 'Enterprises',
      icon: '🏢',
      examples: ['Strategic execution', 'Project portfolio', 'Board meetings', 'Compliance monitoring', 'ESG reporting']
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Who Uses Elano?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6">
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
