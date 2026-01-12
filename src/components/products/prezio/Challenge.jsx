import { FiAlertCircle } from 'react-icons/fi'

export function PrezioChallenge() {
  const challenges = [
    'Manual invoicing wastes time and looks unprofessional',
    'Tracking clients and payments is chaotic',
    'Accounting software is expensive and complex',
    'Tax compliance (e-TIMS) is confusing',
    'Financial reports for accountants are time-consuming',
    'No professional presentation of business documents'
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiAlertCircle /> The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Small Businesses Struggle with Financial Management
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div key={index} className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">{challenge}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
