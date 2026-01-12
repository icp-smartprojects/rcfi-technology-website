import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export function ElanoFAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    { question: 'Can Elano handle multiple donor requirements?', answer: 'Yes. Elano is designed to manage multi-donor programs with custom reporting templates for each donor.' },
    { question: 'Is training provided?', answer: 'Yes. We provide comprehensive onboarding, training materials, and ongoing support.' },
    { question: 'Can we migrate existing data?', answer: 'Yes. We offer data migration services from Excel, other platforms, and legacy systems.' },
    { question: 'Is Elano suitable for small organizations?', answer: 'Absolutely. Our Basic plan is perfect for small CSOs with up to 10 users.' }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left">
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <FiChevronDown className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === index && <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
