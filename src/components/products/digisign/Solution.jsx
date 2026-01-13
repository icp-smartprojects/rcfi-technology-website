import { FiZap, FiLock, FiUserCheck, FiLink, FiCheckCircle, FiGlobe } from 'react-icons/fi'

export default function DigiSignSolution() {
  const benefits = [
    {
      icon: FiZap,
      title: 'Sign Anywhere, Anytime',
      description: 'Complete document signing in seconds from any device'
    },
    {
      icon: FiLock,
      title: 'Cryptographically Sealed',
      description: 'Tamper-evident protection with blockchain anchoring'
    },
    {
      icon: FiUserCheck,
      title: 'Automated e-KYC',
      description: 'Instant identity verification via government databases'
    },
    {
      icon: FiLink,
      title: 'Blockchain Proof',
      description: 'Immutable record of every signature and timestamp'
    },
    {
      icon: FiCheckCircle,
      title: 'Fully Compliant',
      description: 'Kenya Data Protection Act 2019 and CAK certified'
    },
    {
      icon: FiGlobe,
      title: 'Universal Compatibility',
      description: 'Works with PDF, Office, and all major platforms'
    }
  ]

  return (
    <section className="py-24 px-4 bg-primary-600 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Secure, Legal, and Instant Digital Trust
          </h2>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            DigiSign makes digital transformation simple, secure, and legally compliant
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-primary-100">{benefit.description}</p>
              </div>
            )
          })}
        </div>

        {/* Key Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold mb-2">10s</div>
            <div className="text-primary-100">Average signing time</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">24/7</div>
            <div className="text-primary-100">Available anytime</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">100%</div>
            <div className="text-primary-100">Legally binding</div>
          </div>
          <div>
            <div className="text-5xl font-bold mb-2">99.95%</div>
            <div className="text-primary-100">Uptime guarantee</div>
          </div>
        </div>
      </div>
    </section>
  )
}