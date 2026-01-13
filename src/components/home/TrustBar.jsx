import { partners } from '@/data/companyData'

export default function TrustBar() {
  return (
    <section className="py-12 bg-white border-y border-neutral-200">
      <div className="container-custom">
        <p className="text-center text-neutral-600 font-medium mb-10">
          Trusted by leading organizations across Kenya
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex items-center justify-center opacity-75 hover:opacity-100 transition-opacity duration-300"
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