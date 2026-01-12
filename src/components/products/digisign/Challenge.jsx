import { FiAlertCircle } from 'react-icons/fi'

export default function DigiSignChallenge() {
  const challenges = [
    'Physical signatures require in-person meetings, causing delays',
    'Paper documents are easily forged or tampered with',
    'Manual identity verification is slow and error-prone',
    'Invoice fraud costs businesses millions annually',
    'No legal framework for digital transactions',
    'Remote work is impossible with paper-based processes'
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiAlertCircle /> The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Traditional Document Signing is Broken
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Manual processes are slowing down business, government, and civil society
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="bg-red-50 border-2 border-red-200 rounded-xl p-6 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-red-600 rounded-full flex-shrink-0 mt-1"></div>
                <p className="text-gray-700">{challenge}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">3-7 days</div>
            <div className="text-gray-600">Average time for physical signature collection</div>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">40%</div>
            <div className="text-gray-600">Of business documents delayed by manual processes</div>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">KES 50M+</div>
            <div className="text-gray-600">Annual losses to invoice fraud in Kenya</div>
          </div>
        </div>
      </div>
    </section>
  )
}