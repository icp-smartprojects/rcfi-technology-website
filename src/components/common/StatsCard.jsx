export default function StatsCard({ stat, index, variant = 'default' }) {
  const variants = {
    default: 'bg-white text-neutral-900',
    gradient: 'bg-gradient-to-br from-primary-600 to-secondary-600 text-white',
    dark: 'bg-neutral-900 text-white'
  }

  return (
    <div 
      className={`${variants[variant]} rounded-2xl p-8 text-center transition-all duration-300 hover:scale-105`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="text-5xl md:text-6xl font-bold mb-3">
        {stat.number}
      </div>
      <div className={`text-lg font-semibold mb-2 ${variant === 'default' ? 'text-neutral-700' : 'opacity-90'}`}>
        {stat.label}
      </div>
      <div className={`text-sm ${variant === 'default' ? 'text-neutral-600' : 'opacity-75'}`}>
        {stat.description}
      </div>
    </div>
  )
}