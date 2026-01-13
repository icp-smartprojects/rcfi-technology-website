export default function TechnologyPartners() {
  const partners = [
    { id: 'aws', name: 'AWS', logo: '/images/assets/partner-aws.png' },
    { id: 'azure', name: 'Microsoft Azure', logo: '/images/assets/partner-azure.png' },
    { id: 'cak', name: 'Communications Authority Kenya', logo: '/images/assets/partner-cak.jpeg' },
    { id: 'crown', name: 'Crown Interactive', logo: '/images/assets/partner-crown.jpeg' },
    { id: 'konza', name: 'Konza Techno City', logo: '/images/assets/partner-konza.png' },
    { id: 'kra', name: 'Kenya Revenue Authority', logo: '/images/assets/partner-kra.png' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-neutral-900 mb-4">
          Technology & Strategic Partners
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          We collaborate with leading technology providers and government institutions to deliver world-class solutions
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div key={partner.id} className="bg-neutral-50 rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-h-32 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
