import { FiMail, FiPhone, FiMessageSquare, FiHeadphones } from 'react-icons/fi'

export default function ContactHero() {
  const contactOptions = [
    {
      icon: FiMessageSquare,
      title: 'Request a Demo',
      description: 'See our platforms in action',
      href: '/contact/demo'
    },
    {
      icon: FiPhone,
      title: 'Talk to Sales',
      description: 'Discuss your requirements',
      href: '/contact/sales'
    },
    {
      icon: FiHeadphones,
      title: 'Get Support',
      description: 'Technical assistance',
      href: '/contact/support'
    },
    {
      icon: FiMail,
      title: 'General Inquiry',
      description: 'Any other questions',
      href: '#contact-form'
    }
  ]

  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Let's Talk About Your
            <span className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Digital Transformation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team is ready to help you modernize your operations and achieve your digital goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactOptions.map((option, index) => {
            const Icon = option.icon
            return (
              <a
                key={index}
                href={option.href}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all group text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors">
                  <Icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{option.title}</h3>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}