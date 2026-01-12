import { FiAward, FiShield, FiUsers } from 'react-icons/fi'

export default function AboutHero() {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Driving Digital Transformation
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Across Africa
            </span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Since 2022, RCFI has been empowering institutions with innovative ICT solutions that foster inclusive development, strengthen public institutions, and promote equitable access to essential services.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FiAward className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">2022</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FiUsers className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
            <div className="text-gray-600">Users Served</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <FiShield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <div className="text-4xl font-bold text-gray-900 mb-2">ISO 27001</div>
            <div className="text-gray-600">Certified</div>
          </div>
        </div>
      </div>
    </section>
  )
}