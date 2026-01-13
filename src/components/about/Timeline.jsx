export default function Timeline() {
  const milestones = [
    {
      year: '2022',
      title: 'Company Founded',
      description: 'RCFI established with a mission to transform Kenya\'s digital landscape',
      color: 'blue'
    },
    {
      year: '2023',
      title: 'First Government Deployment',
      description: 'Successfully deployed governance platforms for county governments',
      color: 'green'
    },
    {
      year: '2024',
      title: 'ISO 27001 Certified',
      description: 'Achieved international information security certification',
      color: 'purple'
    },
    {
      year: '2025',
      title: 'DigiSign Launch',
      description: 'Launched Kenya\'s first locally-hosted digital trust service',
      color: 'green'
    },
    {
      year: '2026',
      title: 'Regional Expansion',
      description: 'Extending services across East Africa',
      color: 'green'
    }
  ]

  const colorClasses = {
    blue: 'bg-green-600',
    green: 'bg-green-600',
    purple: 'bg-green-600',
    orange: 'bg-green-600',
    red: 'bg-green-600'
  }

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Journey
          </h2>
          <p className="text-xl text-gray-600">
            Key milestones in our growth and impact
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-600 to-green-600"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 0 ? '' : 'lg:text-right'
              }`}>
                {/* Content */}
                <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                  <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                    <div className={`inline-block ${colorClasses[milestone.color]} text-white px-4 py-2 rounded-full text-sm font-bold mb-4`}>
                      {milestone.year}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Circle marker */}
                <div className={`hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${colorClasses[milestone.color]} rounded-full border-4 border-white shadow-lg`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}