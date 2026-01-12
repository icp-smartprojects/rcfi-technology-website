export default function IndustryCard({ industry }) {
  return (
    <div className="p-6 bg-white rounded-lg border border-neutral-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
      <div className="mb-4 text-4xl">{industry.icon}</div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2">{industry.name}</h3>
      <p className="text-neutral-600 mb-4">{industry.description}</p>
      <div className="flex items-center text-primary-600 font-semibold hover:text-primary-700">
        Learn more →
      </div>
    </div>
  )
}
