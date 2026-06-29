import { partners } from '@/data/companyData'

export default function TrustBar() {
  return (
    <section className="py-12 bg-primary-900 border-y border-primary-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-pattern-dots pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
      }} />
      <div className="container-custom relative z-10">
        <p className="text-center text-primary-200 font-medium mb-10">
          Trusted by leading organizations across Kenya
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center px-4 py-3 rounded-xl bg-white/10 border border-white/10 hover:bg-white/15 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="h-20 w-auto object-contain"
                onError={(e) => {
                  // Fallback to text if logo fails to load
                  const parent = e.target.parentElement
                  parent.innerHTML = `<div class="text-center font-semibold text-neutral-500 text-sm">${partner.name}</div>`
                }}
              />
            </div>
          ))}
        </div>

        {/* Optional: Scrolling Logos for many partners */}
        {/* <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img src={partner.logo} alt={partner.name} className="h-12" />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}