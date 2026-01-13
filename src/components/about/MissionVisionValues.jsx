import { FiTarget, FiEye, FiHeart, FiAward, FiUsers, FiTrendingUp, FiCheckCircle } from 'react-icons/fi'

export default function MissionVisionValues() {
  const values = [
    {
      icon: FiCheckCircle,
      title: 'Integrity',
      description: 'We operate with the highest ethical standards in all our dealings'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We continuously push the boundaries of what\'s possible in digital transformation'
    },
    {
      icon: FiUsers,
      title: 'Inclusivity',
      description: 'We design solutions that serve everyone, from large enterprises to grassroots organizations'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We deliver world-class solutions that meet international standards'
    },
    {
      icon: FiHeart,
      title: 'Impact',
      description: 'We measure our success by the positive change we create in communities'
    }
  ]

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-green-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <FiTarget className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To drive digital transformation that fosters inclusive development, strengthens public institutions, and promotes equitable access to essential services across Kenya and the region.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <FiEye className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the digital backbone for institutional governance, accountability, and impact across Africa and emerging markets.
            </p>
          </div>
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}