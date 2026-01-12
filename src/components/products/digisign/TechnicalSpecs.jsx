export function DigiSignTechnicalSpecs() {
  const specs = {
    security: [
      'FIPS 140-2 Level 3 HSM',
      'X.509 v3 certificates',
      'TLS 1.3 encryption',
      'AES-256 data encryption',
      'Multi-factor authentication'
    ],
    compliance: [
      'Kenya DPA 2019',
      'CAK e-Certification',
      'ISO/IEC 27001',
      'CA/B Forum Requirements',
      'ETSI EN 319 411-1'
    ],
    architecture: [
      'Cloud-native on AWS/Azure',
      'Kubernetes orchestration',
      'Microservices design',
      'Multi-region redundancy',
      '99.95% uptime SLA'
    ]
  }

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Enterprise-Grade Security</h2>
          <p className="text-xl text-gray-600">Built on international standards and best practices</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(specs).map(([category, items]) => (
            <div key={category} className="bg-white rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 capitalize">{category}</h3>
              <ul className="space-y-2 text-gray-600">
                {items.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
