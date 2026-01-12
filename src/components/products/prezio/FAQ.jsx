import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export function PrezioFAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  const faqs = [
    { question: 'Is the free plan really free?', answer: 'Yes! You can use Prezio free forever for up to 10 invoices per month.' },
    { question: 'Can I upgrade or downgrade anytime?', answer: 'Absolutely. Change your plan anytime with no penalties.' },
    { question: 'Do you offer training?', answer: 'Yes. We provide video tutorials, documentation, and email support.' },
    { question: 'Is my data secure?', answer: 'Yes. We use bank-level encryption and daily backups to protect your data.' }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Questions</h2>
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

