import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiShield, FiLock, FiGlobe, FiDownload } from 'react-icons/fi'
import CTAButton from '@/components/common/CTAButton'
import FeatureCard from '@/components/common/FeatureCard'
import TestimonialCard from '@/components/common/TestimonialCard'
import { productsData } from '@/data/productsData'

export default function DigiSignPage() {
  const product = productsData.digisign

  return (
    <>
      <Head>
        <title>{product.name} - {product.tagline} | RCFI Technology</title>
        <meta name="description" content={product.longDescription} />
        <meta property="og:title" content={`${product.name} - ${product.tagline}`} />
        <meta property="og:description" content={product.longDescription} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href={`https://rcfi.co.ke/products/${product.id}`} />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <FiShield className="w-4 h-4" />
                {product.tagline}
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
                {product.name}
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {product.longDescription}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CTAButton href="/contact/demo" variant="primary" size="lg">
                  Request Demo
                </CTAButton>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                  <span>CAK Licensed</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-green-600" />
                  <span>Kenya DPA Compliant</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={product.heroImage} 
                  alt={product.name}
                  className="w-full h-auto"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="600"%3E%3Crect fill="%23f3f4f6" width="800" height="600"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%239ca3af"%3EDigiSign Platform%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {product.challenge.title}
            </h2>
            <p className="text-lg text-neutral-600">
              Traditional processes are holding businesses back
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {product.challenge.problems.map((problem, index) => (
              <div key={index} className="flex items-start gap-3 bg-white rounded-xl p-6">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-red-600 text-xl">✕</span>
                </div>
                <p className="text-neutral-700">{problem}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              {product.solution.title}
            </h2>
            <p className="text-lg text-neutral-600">
              Everything you need for digital trust and security
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {product.solution.benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 bg-primary-50 rounded-xl p-6">
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                <p className="text-neutral-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-neutral-600">
              Everything you need for secure digital operations
            </p>
          </div>

          <div className="space-y-24">
            {product.features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Who Uses DigiSign?
            </h2>
            <p className="text-xl text-neutral-600">
              Trusted across industries for secure digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {product.useCases.map((useCase, index) => (
              <div key={index} className="bg-neutral-50 rounded-2xl p-8 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">
                  {useCase.icon === 'landmark' && '🏛️'}
                  {useCase.icon === 'university' && '🏦'}
                  {useCase.icon === 'gavel' && '⚖️'}
                  {useCase.icon === 'hands-helping' && '🤝'}
                  {useCase.icon === 'building' && '🏢'}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {useCase.title}
                </h3>
                <p className="text-neutral-600 mb-4">
                  {useCase.description}
                </p>
                <ul className="space-y-2">
                  {useCase.examples.slice(0, 3).map((example, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-neutral-600">
                      <FiCheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span>{example}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="section-padding bg-neutral-900 text-white">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-neutral-300">
              Built on world-class infrastructure and standards
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiShield className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold">Security</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                {product.technicalSpecs.security.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiLock className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold">Compliance</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                {product.technicalSpecs.compliance.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <FiGlobe className="w-6 h-6 text-primary-400" />
                <h3 className="text-xl font-bold">Architecture</h3>
              </div>
              <ul className="space-y-2 text-neutral-300">
                {product.technicalSpecs.architecture.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-400">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {product.faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-xl p-6 group">
                <summary className="font-semibold text-lg text-neutral-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <FiArrowRight className="w-5 h-5 text-primary-600 group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-secondary-600 text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started with DigiSign?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of organizations transforming their digital operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton href="/contact/demo" variant="white" size="lg">
              Request a Demo
            </CTAButton>
            <CTAButton 
              href="/contact" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary-600"
            >
              Talk to Sales
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}