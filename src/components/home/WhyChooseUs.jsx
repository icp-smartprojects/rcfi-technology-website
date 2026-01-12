import { FiGlobe, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FiGlobe className="w-8 h-8" />,
      title: 'Built for Africa',
      description: 'Designed specifically for Kenyan and East African markets with local regulations and needs in mind'
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Compliance First',
      description: 'Fully aligned with Kenya DPA, ISO 27001, CAK regulations, and international security standards'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Proven Track Record',
      description: '2+ years serving government agencies, CSOs, financial institutions, and enterprises across Kenya'
    },
    {
      icon: <FiUsers className="w-8 h-8" />,
      title: 'End-to-End Support',
      description: 'From onboarding and training to ongoing technical support and system maintenance'
    }
  ]

  return (
    <section className="section-padding bg-neutral-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
            Why Choose RCFI?
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Built for Africa, trusted by leaders
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                {reason.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-neutral-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl shadow-soft p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-neutral-600">Data Sovereignty</div>
              <div className="text-sm text-neutral-500 mt-2">Hosted in Kenya</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-neutral-600">System Monitoring</div>
              <div className="text-sm text-neutral-500 mt-2">99.95% Uptime SLA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-neutral-600">Powerful Products</div>
              <div className="text-sm text-neutral-500 mt-2">One Ecosystem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}