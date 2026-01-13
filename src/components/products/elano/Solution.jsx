import { FiTrendingUp, FiTarget, FiPieChart, FiUsers, FiFileText, FiCheckCircle } from 'react-icons/fi'

export function ElanoSolution() {
  const benefits = [
    { icon: FiTarget, title: 'Unified Platform', description: 'Single system for all organizational functions' },
    { icon: FiTrendingUp, title: 'Real-Time Dashboards', description: 'Live visibility into performance and impact' },
    { icon: FiFileText, title: 'Automated Reporting', description: 'Generate donor and compliance reports instantly' },
    { icon: FiCheckCircle, title: 'Complete Audit Trail', description: 'Full transparency and accountability' },
    { icon: FiUsers, title: 'Role-Based Access', description: 'Secure collaboration across teams' },
    { icon: FiPieChart, title: 'Impact Measurement', description: 'Track outcomes and demonstrate results' }
  ]

  return (
    <section className="py-24 px-4 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Unified Platform for Institutional Excellence</h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Everything you need to govern, plan, execute, and demonstrate impact
          </p>
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
