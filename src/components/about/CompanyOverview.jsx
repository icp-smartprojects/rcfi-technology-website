import { FiCheckCircle, FiGlobe, FiUsers, FiAward } from 'react-icons/fi'

export default function CompanyOverview() {
  const strengths = [
    {
      icon: FiUsers,
      title: 'Multidisciplinary Expertise',
      description: 'Blending advanced ICT with deep understanding of governance, development, and local context'
    },
    {
      icon: FiAward,
      title: 'Human-Centered Design',
      description: 'Platforms co-created with end users to maximize relevance, usability, and long-term impact'
    },
    {
      icon: FiCheckCircle,
      title: 'Regulatory Compliance',
      description: 'All platforms aligned with Kenya DPA 2019, ISO/IEC 27001, and CA/B Forum standards'
    },
    {
      icon: FiGlobe,
      title: 'Social Impact Focus',
      description: 'Committed to inclusive development and equitable access to digital services'
    }
  ]

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Reprodrive Center for Innovation Limited (RCFI) is an innovative Kenyan ICT and social enterprise firm, registered under the Companies Act, 2015, and headquartered in Nairobi.
              </p>
              <p>
                Founded in 2022, RCFI's mission is to drive digital transformation that fosters inclusive development, strengthens public institutions, and promotes equitable access to essential services across Kenya and the region.
              </p>
              <p>
                We integrate deep expertise in software engineering, data science, AI/ML, Internet of Things (IoT), and enterprise systems development with a unique focus on social impact.
              </p>
              <p>
                Our project footprint spans diverse sectors including public sector digitization, community health systems, construction and logistics, civil society accountability platforms, and IoT-enabled public service infrastructure.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-100 to-green-100 rounded-2xl p-12 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">3</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">47</div>
                <div className="text-sm text-gray-600">Counties</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">5</div>
                <div className="text-sm text-gray-600">Industries</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2+</div>
                <div className="text-sm text-gray-600">Years</div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Strengths */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Core Strengths
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => {
              const Icon = strength.icon
              return (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <Icon className="w-12 h-12 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{strength.title}</h4>
                  <p className="text-gray-600">{strength.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}