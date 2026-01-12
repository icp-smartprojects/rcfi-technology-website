import { FiFileText, FiUserCheck, FiLink, FiSmartphone, FiCheckCircle } from 'react-icons/fi'

export default function DigiSignFeatures() {
  const features = [
    {
      icon: FiFileText,
      title: 'Digital Signature Certificates',
      description: 'Legally binding X.509 v3 certificates for individuals and organizations',
      badge: 'Core Feature',
      badgeColor: 'bg-blue-100 text-blue-600',
      items: [
        'Advanced Electronic Signatures (AdES)',
        'Qualified Electronic Signatures (QES)',
        'Compatible with PDF/A, Microsoft Office, Adobe',
        'Certificate lifecycle management',
        'Multi-factor authentication',
        'HSM-backed security'
      ]
    },
    {
      icon: FiFileText,
      title: 'Invoice Authentication & Signing',
      description: 'Cryptographically signed invoices for KRA e-TIMS compliance',
      badge: 'Business Feature',
      badgeColor: 'bg-green-100 text-green-600',
      items: [
        'PAdES standard implementation',
        'Automatic tax calculation',
        'KRA e-TIMS integration',
        'Fraud prevention',
        'Audit trail logging',
        'ERP system integration'
      ]
    },
    {
      icon: FiUserCheck,
      title: 'e-KYC Identity Verification',
      description: 'Instant automated identity verification via government databases',
      badge: 'Identity Feature',
      badgeColor: 'bg-purple-100 text-purple-600',
      items: [
        'NIIMS (Huduma Namba) integration',
        'NTSA driving license verification',
        'OCR document scanning',
        'Facial recognition & liveness',
        'Real-time fraud detection',
        'CRB credit checks'
      ]
    },
    {
      icon: FiLink,
      title: 'Blockchain Document Security',
      description: 'Immutable proof of document authenticity and integrity',
      badge: 'Security Feature',
      badgeColor: 'bg-orange-100 text-orange-600',
      items: [
        'Hyperledger Fabric blockchain',
        'Cryptographic hash anchoring',
        'RFC 3161 timestamping',
        'Long-term validation (LTV)',
        'Independent verification portal',
        'Complete audit trails'
      ]
    },
    {
      icon: FiSmartphone,
      title: 'Mobile & Web Access',
      description: 'Sign and verify documents from any device, anywhere',
      badge: 'Access Feature',
      badgeColor: 'bg-blue-100 text-blue-600',
      items: [
        'Android & iOS apps',
        'Web portal dashboard',
        'RESTful API access',
        'OAuth2/SAML SSO',
        'Offline signing capability',
        'Multi-device sync'
      ]
    }
  ]

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Complete Digital Trust Platform
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for secure digital transactions
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const isEven = index % 2 === 0
            
            return (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className={`inline-flex items-center gap-2 ${feature.badgeColor} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
                      <Icon className="w-4 h-4" /> {feature.badge}
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <FiCheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl p-12 flex items-center justify-center ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <Icon className="w-48 h-48 text-blue-600 opacity-20" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}