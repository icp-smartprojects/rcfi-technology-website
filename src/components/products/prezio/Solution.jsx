import { FiDollarSign, FiUsers, FiPieChart, FiGlobe, FiFileText, FiZap } from 'react-icons/fi'

export function PrezioSolution() {
  const benefits = [
    { icon: FiZap, title: 'Create Invoices in Minutes', description: 'Professional invoices with your branding' },
    { icon: FiUsers, title: 'Track All Clients', description: 'Organized customer database' },
    { icon: FiDollarSign, title: 'Automatic Calculations', description: 'Tax and totals computed instantly' },
    { icon: FiGlobe, title: 'Multi-Currency', description: 'KES, USD, EUR, UGX, TZS supported' },
    { icon: FiFileText, title: 'Export Reports', description: 'Excel-ready for your accountant' },
    { icon: FiPieChart, title: 'Financial Insights', description: 'See your business performance' }
  ]

  return (
    <section className="py-24 px-4 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple, Affordable, Professional</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
