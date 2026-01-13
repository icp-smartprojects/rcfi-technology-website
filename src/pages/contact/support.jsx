import Head from 'next/head'
import Link from 'next/link'
import { FiMessageSquare, FiMail, FiPhone, FiBook, FiHelpCircle } from 'react-icons/fi'

export default function Support() {
  const supportChannels = [
    {
      icon: FiMessageSquare,
      title: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: 'Mon-Sat, 8am-8pm EAT',
      action: 'Start Chat',
      href: '#chat',
      color: 'blue'
    },
    {
      icon: FiMail,
      title: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7, response within 24 hours',
      action: 'Send Email',
      href: 'mailto:support@rcfi.co.ke',
      color: 'green'
    },
    {
      icon: FiPhone,
      title: 'Phone Support',
      description: 'Speak directly with our team',
      availability: 'Mon-Fri, 8am-6pm EAT',
      action: 'Call +254 754 134 704',
      href: 'tel:+254754134704',
      color: 'purple'
    },
    {
      icon: FiBook,
      title: 'Documentation',
      description: 'Browse our knowledge base',
      availability: 'Available 24/7',
      action: 'View Docs',
      href: '/resources/documentation',
      color: 'orange'
    }
  ]

  const slaLevels = [
    { priority: 'Critical', response: '30 minutes', resolution: '4 hours', description: 'Service down or major impact' },
    { priority: 'High', response: '2 hours', resolution: '8 hours', description: 'Significant functionality affected' },
    { priority: 'Medium', response: '6 hours', resolution: '1-2 days', description: 'Minor functionality issues' },
    { priority: 'Low', response: '12 hours', resolution: '2-3 days', description: 'General questions or requests' }
  ]

  return (
    <>
      <Head>
        <title>Support - Get Help | RCFI Technology</title>
        <meta name="description" content="Get technical support, troubleshooting, and answers to your questions" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Our support team is here to ensure you get the most out of RCFI solutions
          </p>
          <Link href="/resources/faq" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 font-semibold transition-all">
            <FiHelpCircle /> View FAQ
          </Link>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Choose Your Support Channel</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportChannels.map((channel, index) => {
              const Icon = channel.icon
              const colorClasses = {
                blue: { bg: 'bg-primary-100', icon: 'text-primary-600', btn: 'bg-primary-600 hover:bg-primary-700' },
                green: { bg: 'bg-primary-100', icon: 'text-primary-600', btn: 'bg-primary-600 hover:bg-primary-700' },
                purple: { bg: 'bg-primary-100', icon: 'text-primary-600', btn: 'bg-primary-600 hover:bg-primary-700' },
                orange: { bg: 'bg-primary-100', icon: 'text-primary-600', btn: 'bg-primary-600 hover:bg-primary-700' }
              }
              const colors = colorClasses[channel.color]
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all">
                  <div className={`w-16 h-16 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{channel.title}</h3>
                  <p className="text-gray-600 mb-3">{channel.description}</p>
                  <p className="text-sm text-gray-500 mb-4">{channel.availability}</p>
                  <a
                    href={channel.href}
                    className={`block w-full px-4 py-3 ${colors.btn} text-white rounded-lg font-semibold text-center transition-all`}
                  >
                    {channel.action}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SLA Table */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Our Support Commitment</h2>
          <p className="text-xl text-gray-600 mb-12 text-center">Response times based on issue priority</p>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Priority</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">First Response</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Resolution Time</th>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody>
                {slaLevels.map((level, index) => (
                  <tr key={index} className="border-t border-gray-200">
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                        level.priority === 'Critical' ? 'bg-primary-100 text-primary-600' :
                        level.priority === 'High' ? 'bg-primary-100 text-primary-600' :
                        level.priority === 'Medium' ? 'bg-primary-100 text-primary-600' :
                        'bg-primary-100 text-primary-600'
                      }`}>
                        {level.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-700">{level.response}</td>
                    <td className="px-6 py-4 text-gray-700">{level.resolution}</td>
                    <td className="px-6 py-4 text-gray-600">{level.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Self-Service Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/resources/documentation" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all text-center">
              <FiBook className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-gray-600">Complete technical guides and API references</p>
            </Link>
            <Link href="/resources/faq" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all text-center">
              <FiHelpCircle className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">FAQ</h3>
              <p className="text-gray-600">Answers to frequently asked questions</p>
            </Link>
                        <Link href="/resources/blog" className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all text-center">
                          <FiMessageSquare className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                          <h3 className="text-xl font-bold text-gray-900 mb-2">Community Forum</h3>
                          <p className="text-gray-600">Connect with other users and share experiences</p>
                        </Link>
                      </div>
                    </div>
                  </section>
                </>
              )
            }