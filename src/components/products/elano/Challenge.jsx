import { FiAlertCircle } from 'react-icons/fi'

export function ElanoChallenge() {
  const challenges = [
    'Organizations use disconnected tools for governance, finance, and M&E',
    'Manual reporting is time-consuming and error-prone',
    'Lack of real-time visibility into program performance',
    'Donor reporting requirements are overwhelming',
    'Compliance tracking is scattered across spreadsheets',
    'Strategic plans gather dust without execution tracking'
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FiAlertCircle /> The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Institutional Management is Fragmented
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Disconnected systems create inefficiency, opacity, and compliance risk
          </p>
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
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
            <div className="text-gray-600">Of staff time wasted on manual reporting</div>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">85%</div>
            <div className="text-gray-600">Of strategic plans never fully executed</div>
          </div>
          <div className="bg-red-50 rounded-xl p-6">
            <div className="text-4xl font-bold text-red-600 mb-2">3-6 weeks</div>
            <div className="text-gray-600">Average time for donor report compilation</div>
          </div>
        </div>
      </div>
    </section>
  )
}
