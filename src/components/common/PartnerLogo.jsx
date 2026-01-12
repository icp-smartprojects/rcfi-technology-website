export default function PartnerLogo({ partner }) {
  return (
    <div className="flex items-center justify-center h-20 bg-white rounded-lg p-4 border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all duration-300 grayscale hover:grayscale-0">
      <img 
        src={partner.logo} 
        alt={partner.name}
        title={partner.name}
        className="max-h-full max-w-full object-contain"
      />
    </div>
  )
}
