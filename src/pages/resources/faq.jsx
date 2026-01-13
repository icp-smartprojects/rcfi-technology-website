import Head from 'next/head'
import { useState } from 'react'
import { FiChevronDown, FiSearch } from 'react-icons/fi'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const faqs = [
    {
      category: 'General',
      questions: [
        {
          q: 'What is RCFI Technology?',
          a: 'RCFI Technology is a Kenyan ICT and social enterprise firm providing digital trust, governance, and business management solutions. We specialize in digital signatures, e-KYC, institutional management platforms, and SME accounting tools.'
        },
        {
          q: 'Who can use RCFI products?',
          a: 'Our solutions serve government agencies, financial institutions, NGOs, CSOs, SMEs, legal firms, and enterprises across Kenya and East Africa.'
        },
        {
          q: 'Are RCFI solutions compliant with Kenyan regulations?',
          a: 'Yes. All our products are fully compliant with Kenya Data Protection Act 2019, CAK e-Certification Guidelines, and other relevant regulations.'
        }
      ]
    },
    {
      category: 'DigiSign',
      questions: [
        {
          q: 'Is DigiSign legally recognized in Kenya?',
          a: 'Yes. DigiSign is CAK-licensed and our digital signatures have the same legal standing as handwritten signatures under Kenyan law.'
        },
        {
          q: 'How secure are DigiSign certificates?',
          a: 'DigiSign uses FIPS 140-2 Level 3 certified Hardware Security Modules (HSMs) and X.509 v3 compliant certificates with industry-standard encryption.'
        },
        {
          q: 'How long does e-KYC verification take?',
          a: 'Most e-KYC verifications complete in under 10 seconds via our integrations with NIIMS, NTSA, and other government databases.'
        },
        {
          q: 'Can I use DigiSign offline?',
          a: 'Yes. DigiSign supports offline signing with synchronization when you reconnect to the internet.'
        }
      ]
    },
    {
      category: 'Elano',
      questions: [
        {
          q: 'Can Elano handle multiple donor requirements?',
          a: 'Yes. Elano is designed to manage multi-donor programs with custom reporting templates for each donor.'
        },
        {
          q: 'Is training provided for Elano?',
          a: 'Yes. We provide comprehensive onboarding, training materials, video tutorials, and ongoing support.'
        },
        {
          q: 'Can we migrate existing data to Elano?',
          a: 'Yes. We offer data migration services from Excel, other platforms, and legacy systems.'
        },
        {
          q: 'Is Elano suitable for small organizations?',
          a: 'Absolutely. Our Basic plan is perfect for small CSOs with up to 10 users.'
        }
      ]
    },
    {
      category: 'Prezio',
      questions: [
        {
          q: 'Is the Prezio free plan really free?',
          a: 'Yes! You can use Prezio free forever for up to 10 invoices per month with basic features.'
        },
        {
          q: 'Can I upgrade or downgrade my Prezio plan anytime?',
          a: 'Absolutely. Change your plan anytime with no penalties or long-term commitments.'
        },
        {
          q: 'Does Prezio support multi-currency?',
          a: 'Yes. Prezio supports KES, USD, EUR, UGX, and TZS with automatic currency conversion.'
        },
        {
          q: 'Is my financial data secure in Prezio?',
          a: 'Yes. We use bank-level encryption, daily backups, and comply with Kenya DPA 2019 for data protection.'
        }
      ]
    },
    {
      category: 'Billing & Pricing',
      questions: [
        {
          q: 'What payment methods do you accept?',
          a: 'We accept M-PESA, bank transfers, Visa/MasterCard, and eCitizen wallet for government clients.'
        },
        {
          q: 'Do you offer discounts for NGOs?',
          a: 'Yes. We offer special pricing for registered CSOs, NGOs, and grassroots organizations.'
        },
        {
          q: 'Can I try before I buy?',
          a: 'Yes. We offer free trials for Business plans and free plans for individual and SME users.'
        },
        {
          q: 'What is your refund policy?',
          a: 'We offer refunds within 30 days if you\'re not satisfied, minus any usage fees.'
        }
      ]
    },
    {
      category: 'Technical Support',
      questions: [
        {
          q: 'What support channels are available?',
          a: 'We offer live chat (8am-8pm Mon-Sat), email support (24/7), phone support during business hours, and comprehensive documentation.'
        },
        {
          q: 'How quickly do you respond to support requests?',
          a: 'Critical issues: 30 minutes. High priority: 2 hours. Medium: 6 hours. Low: 12 hours.'
        },
        {
          q: 'Do you provide on-site training?',
          a: 'Yes, for Enterprise clients. We also offer remote training, video tutorials, and documentation for all users.'
        },
        {
          q: 'What is your uptime guarantee?',
          a: 'We guarantee 99.95% uptime with redundant infrastructure and automatic failover.'
        }
      ]
    }
  ]

  const filteredFAQs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <>
      <Head>
        <title>FAQ - Frequently Asked Questions | RCFI Technology</title>
        <meta name="description" content="Find answers to common questions about DigiSign, Elano, Prezio, and RCFI services" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers to common questions about our products and services
          </p>
          
          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border-2 border-gray-200 focus:border-blue-600 focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const globalIndex = `${catIndex}-${faqIndex}`
                  return (
                    <div key={faqIndex} className="bg-white rounded-xl shadow-lg overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(openIndex === globalIndex ? null : globalIndex)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">{faq.q}</span>
                        <FiChevronDown 
                          className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                            openIndex === globalIndex ? 'transform rotate-180' : ''
                          }`} 
                        />
                      </button>
                      {openIndex === globalIndex && (
                        <div className="px-6 pb-4 text-gray-600 border-t border-gray-100 pt-4">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help. Contact us and we'll get back to you within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-all">
              Contact Support
            </a>
            <a href="/contact/demo" className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition-all">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </>
  )
}