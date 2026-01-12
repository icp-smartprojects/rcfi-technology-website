import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export function DigiSignFAQ() {
  const [openIndex, setOpenIndex] = useState(null)
  
  const faqs = [
    {
      question: 'Is DigiSign legally recognized in Kenya?',
      answer: 'Yes. DigiSign is fully compliant with Kenya\'s Data Protection Act 2019 and CAK e-Certification Guidelines. Our digital signatures have the same legal standing as handwritten signatures under Kenyan law.'
    },
    {
      question: 'How secure are DigiSign certificates?',
      answer: 'DigiSign uses FIPS 140-2 Level 3 certified Hardware Security Modules (HSMs) to protect cryptographic keys. All certificates are X.509 v3 compliant and use industry-standard encryption.'
    },
    {
      question: 'Can I use DigiSign with existing software?',
      answer: 'Yes. DigiSign works with Adobe Acrobat, Microsoft Office, and major ERP/CRM systems via our RESTful APIs.'
    },
    {
      question: 'How long does e-KYC verification take?',
      answer: 'Most e-KYC verifications complete in under 10 seconds via our integrations with NIIMS, NTSA, and other government databases.'
    },
    {
      question: 'What happens if I need to revoke a certificate?',
      answer: 'You can instantly revoke certificates through your dashboard. Revocation is published via OCSP and CRL within minutes.'
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about DigiSign</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <FiChevronDown className={`w-5 h-5 text-gray-600 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
