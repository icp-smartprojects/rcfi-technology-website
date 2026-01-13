export default function PartnerLogo({ partner }) {
  return (
    <div className="flex items-center justify-center h-28 bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-4 border-2 border-neutral-200 hover:border-primary-400 hover:shadow-lg hover:from-neutral-100 hover:to-neutral-50 transition-all duration-300">
      <img 
        src={partner.logo} 
        alt={partner.name}
        title={partner.name}
        className="max-h-full max-w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
      />
    </div>
  )
}
