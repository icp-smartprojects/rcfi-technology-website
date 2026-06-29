import { FiShield, FiAward, FiCheckCircle } from 'react-icons/fi'
import CTAButton from '@/components/common/CTAButton'
import { companyInfo } from '@/data/companyData'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-mesh-dark text-white">
      {/* Africa map background (Kame) */}
      <div
        className="absolute inset-0 -z-20 pointer-events-none"
        style={{
          backgroundImage: "url('/images/mockups/africa.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.35,
          filter: 'saturate(1.1) contrast(1.05)',
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-950/85 via-primary-900/75 to-primary-800/80 pointer-events-none" />

      {/* Dot grid texture */}
      <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      {/* Mesh aurora blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-[32rem] h-[32rem] bg-primary-500 rounded-full mix-blend-screen filter blur-[100px] opacity-25 animate-float" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-primary-400 rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-float animation-delay-300" />
        <div className="absolute bottom-0 left-1/3 w-[28rem] h-[28rem] bg-accent-500 rounded-full mix-blend-screen filter blur-[120px] opacity-10 animate-float animation-delay-500" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-primary-100">
              Now serving 10,000+ users across Kenya
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
            Empowering Africa&apos;s
            <span className="block mt-2 text-gradient-gold">
              Digital Transformation
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-100/90 mb-10 leading-relaxed max-w-3xl mx-auto animate-slide-up animation-delay-100">
            {companyInfo.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up animation-delay-200">
            <CTAButton href="/products" variant="white" size="lg">
              Explore Our Products
            </CTAButton>
            <CTAButton href="/contact/demo" variant="outline-white" size="lg">
              Request a Demo
            </CTAButton>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 animate-fade-in animation-delay-300">
            {companyInfo.certifications.slice(0, 3).map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-primary-100">
                <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center border border-white/10">
                  {cert.icon === 'shield' && <FiShield className="w-5 h-5 text-accent-300" />}
                  {cert.icon === 'certificate' && <FiAward className="w-5 h-5 text-accent-300" />}
                  {cert.icon === 'lock' && <FiCheckCircle className="w-5 h-5 text-accent-300" />}
                  {cert.icon === 'globe' && <FiCheckCircle className="w-5 h-5 text-accent-300" />}
                </div>
                <span className="font-medium text-sm md:text-base">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 animate-slide-up animation-delay-400">
          <div className="relative max-w-6xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/20">
              <img
                src="/images/hero/dashboard-preview.jpg"
                alt="RCFI Platform Dashboard"
                className="w-full h-auto"
                onError={(e) => {
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1200" height="675"%3E%3Crect fill="%23153828" width="1200" height="675"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="48" fill="%23abcbb7"%3ERCFI Platform Dashboard%3C/text%3E%3C/svg%3E'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-transparent" />
            </div>
            <div className="hidden lg:block absolute -top-8 -left-8 w-64 glass-white rounded-xl shadow-xl p-6 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiCheckCircle className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">99.95%</div>
                  <div className="text-xs text-neutral-600">Uptime SLA</div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block absolute -bottom-8 -right-8 w-64 glass-white rounded-xl shadow-xl p-6 animate-float animation-delay-300">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                  <FiShield className="w-6 h-6 text-primary-700" />
                </div>
                <div>
                  <div className="font-semibold text-neutral-900">ISO 27001</div>
                  <div className="text-xs text-neutral-600">Certified Security</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
