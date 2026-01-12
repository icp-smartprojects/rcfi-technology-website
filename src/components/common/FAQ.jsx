import { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'

export default function FAQ({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {faqs?.map((item, index) => (
        <div 
          key={index}
          className="border border-neutral-200 rounded-lg hover:border-primary-300 transition-colors"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between hover:bg-neutral-50 transition-colors"
          >
            <span className="font-semibold text-neutral-900 text-left">
              {item.question}
            </span>
            <FiChevronDown 
              className={`flex-shrink-0 w-5 h-5 text-neutral-600 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 border-t border-neutral-200 bg-neutral-50">
              <p className="text-neutral-600">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
