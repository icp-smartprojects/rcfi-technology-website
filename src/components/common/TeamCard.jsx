export default function TeamCard({ member }) {
  return (
    <div className="text-center">
      <div className="mb-4 overflow-hidden rounded-lg bg-neutral-200 h-64 w-full">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-1">{member.name}</h3>
      <p className="text-primary-600 font-semibold mb-2">{member.role}</p>
      <p className="text-neutral-600 text-sm">{member.bio}</p>
    </div>
  )
}
