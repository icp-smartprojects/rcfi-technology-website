import { FiBriefcase, FiMapPin, FiCheckCircle, FiXCircle } from 'react-icons/fi'
import { openPositions } from '@/data/careersData'

export default function Careers() {
  const availablePositions = openPositions.filter(p => p.status === 'available')
  const unavailablePositions = openPositions.filter(p => p.status === 'unavailable')

  const PositionCard = ({ position }) => (
    <div className={`p-6 rounded-lg border-2 ${position.status === 'available' ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <FiBriefcase className="w-4 h-4" />
              {position.department}
            </div>
            <div className="flex items-center gap-1">
              <FiMapPin className="w-4 h-4" />
              {position.location}
            </div>
            <div className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold">
              {position.type}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {position.status === 'available' ? (
            <>
              <FiCheckCircle className="w-6 h-6 text-green-600" />
              <span className="font-semibold text-green-600">Available</span>
            </>
          ) : (
            <>
              <FiXCircle className="w-6 h-6 text-gray-400" />
              <span className="font-semibold text-gray-400">Closed</span>
            </>
          )}
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{position.description}</p>
      
      <div className="mb-4">
        <p className="text-sm font-semibold text-gray-700 mb-2">Requirements:</p>
        <ul className="list-disc list-inside space-y-1">
          {position.requirements.map((req, idx) => (
            <li key={idx} className="text-sm text-gray-600">{req}</li>
          ))}
        </ul>
      </div>

      {position.status === 'available' && (
        <a 
          href={`mailto:careers@rcfi.co.ke?subject=Application for ${position.title}`}
          className="inline-block px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
        >
          Apply Now
        </a>
      )}
    </div>
  )

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Passionate about digital transformation? Help us build the future of governance and trust in Africa.
          </p>
        </div>

        {/* Available Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
            <FiCheckCircle className="w-8 h-8 text-green-600" />
            Currently Hiring
          </h2>
          <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-12 text-center">
            <p className="text-xl text-gray-700">No open positions at the moment. Check back soon!</p>
          </div>
        </div>

        {/* Unavailable Positions - Hidden when no jobs */}

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Don't see your role?</h3>
          <p className="text-primary-100 mb-6">Send your CV and we'll keep it on file for future opportunities</p>
          <a 
            href="mailto:careers@rcfi.co.ke"
            className="inline-block px-8 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 font-semibold transition-all"
          >
            Submit Your CV
          </a>
        </div>
      </div>
    </section>
  )
}
