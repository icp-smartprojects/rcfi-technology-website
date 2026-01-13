import { FiCheckCircle } from 'react-icons/fi'

export function ElanoFeatures() {
  const features = [
    {
      title: 'Organization Registration',
      description: 'Complete digital registry of organizational structure',
      badge: 'Foundation',
      badgeColor: 'bg-primary-100 text-primary-600',
      items: ['Legal entity registration', 'Governance structure mapping', 'Leadership management', 'Regulatory compliance', 'Document repository']
    },
    {
      title: 'Strategic Planning',
      description: 'Align goals, programs, and resources',
      badge: 'Planning',
      badgeColor: 'bg-primary-100 text-primary-600',
      items: ['Strategic plan development', 'Theory of Change mapping', 'Program & project management', 'Activity tracking', 'Milestone monitoring']
    },
    {
      title: 'MEARL Framework',
      description: 'Monitoring, Evaluation, Accountability, Research & Learning',
      badge: 'M&E',
      badgeColor: 'bg-green-100 text-green-600',
      items: ['Indicator tracking', 'Data collection tools', 'Performance dashboards', 'Impact assessment', 'Learning management']
    },
    {
      title: 'Financial Management',
      description: 'Budgeting, tracking, and approval workflows',
      badge: 'Finance',
      badgeColor: 'bg-primary-100 text-primary-600',
      items: ['Budget creation', 'Expenditure tracking', 'Multi-currency support', 'Approval workflows', 'Financial reporting']
    }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Institutional Management</h2>
        </div>
        <div className="space-y-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className={`inline-flex items-center gap-2 ${feature.badgeColor} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                {feature.badge}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 mb-6">{feature.description}</p>
              <ul className="grid md:grid-cols-2 gap-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
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
