import StatsCard from '@/components/common/StatsCard'
import { companyInfo } from '@/data/companyData'

export default function SuccessMetrics() {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Driving Real Impact
          </h2>
          <p className="text-xl text-primary-100 leading-relaxed">
            Numbers that tell our story
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {companyInfo.stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="text-5xl md:text-6xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold mb-2 text-primary-100">
                  {stat.label}
                </div>
                <div className="text-sm text-primary-200">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl mb-2">🏆</div>
            <div className="font-semibold text-lg mb-1">ISO 27001 Certified</div>
            <div className="text-sm text-primary-100">International Security Standard</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">🛡️</div>
            <div className="font-semibold text-lg mb-1">CAK Licensed</div>
            <div className="text-sm text-primary-100">Official Certification Authority</div>
          </div>
          <div className="text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="font-semibold text-lg mb-1">99.95% Uptime</div>
            <div className="text-sm text-primary-100">Enterprise-Grade Reliability</div>
          </div>
        </div>
      </div>
    </section>
  )
}