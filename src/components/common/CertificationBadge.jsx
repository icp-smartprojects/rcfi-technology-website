export default function CertificationBadge({ certification }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="w-20 h-20 bg-neutral-100 rounded-lg flex items-center justify-center">
        <img 
          src={certification.icon} 
          alt={certification.name}
          className="w-16 h-16 object-contain"
        />
      </div>
      <h4 className="font-semibold text-neutral-900 text-center text-sm">
        {certification.name}
      </h4>
    </div>
  )
}
