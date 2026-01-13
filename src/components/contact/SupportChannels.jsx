import Link from 'next/link'
import { FiMessageCircle, FiMail, FiPhone, FiBook, FiHeadphones } from 'react-icons/fi'

export default function SupportChannels() {
  const channels = [
    {
      icon: FiMessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      availability: '8am-8pm Mon-Sat',
      action: 'Start Chat',
      href: '#',
      color: 'blue'
    },
    {
      icon: FiMail,
      title: 'Email Support',
      description: 'Send us an email and get a response within 24 hours',
      availability: '24/7',
      action: 'Email Us',
      href: 'mailto:support@rcfi.co.ke',
      color: 'purple'
    },
    {
      icon: FiPhone,
      title: 'Phone Support',
      description: 'Call our support hotline for urgent issues',
      availability: '8am-6pm Mon-Fri',
      action: '+254 754 134 704',
      href: 'tel:+254754134704',
      color: 'green'
    },
    {
      icon: FiBook,
      title: 'Documentation',
      description: 'Browse our comprehensive help articles and guides',
      availability: 'Always available',
      action: 'View Docs',
      href: '/resources/documentation',
      color: 'orange'
    }
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700'
    },
    purple: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700'
    },
    green: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700'
    },
    orange: {
      bg: 'bg-primary-100',
      text: 'text-primary-600',
      button: 'bg-primary-600 hover:bg-primary-700'
    }
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How Can We Help You?
          </h2>
          <p className="text-xl text-gray-600">
            Choose the support channel that works best for you
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {channels.map((channel, index) => {
            const Icon = channel.icon
            const colors = colorClasses[channel.color]
            
            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-6`}>
                  <Icon className={`w-8 h-8 ${colors.text}`} />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                <p className="text-gray-600 mb-4">{channel.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{channel.availability}</span>
                  <a
                    href={channel.href}
                    className={`px-6 py-3 text-white rounded-lg font-semibold transition-all ${colors.button}`}
                  >
                    {channel.action}
                  </a>
                </div>
              </div>
            )
          })}
        </div>

        {/* Enterprise Support */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <FiHeadphones className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-3">Need Enterprise Support?</h3>
                <p className="text-xl text-primary-100">
                  Get dedicated support with custom SLAs, priority response times, and a dedicated account manager
                </p>
              </div>
            </div>
            <Link href="/contact/sales" className="px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold text-lg transition-all whitespace-nowrap">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}