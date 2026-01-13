import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight, FiCheckCircle, FiShield, FiLock, FiGlobe, FiDownload } from 'react-icons/fi'
import CTAButton from '@/components/common/CTAButton'
import FeatureCard from '@/components/common/FeatureCard'
import TestimonialCard from '@/components/common/TestimonialCard'
import { productsData } from '@/data/productsData'

export default function ElanoPage() {
  const product = productsData.elano

  return (
    <>
      <Head>
        <title>{product?.name || 'Elano'} - {product?.tagline || 'E-KYC Solutions'} | RCFI Technology</title>
        <meta name="description" content={product?.longDescription || 'Advanced e-KYC and identity verification platform'} />
        <meta property="og:title" content={`${product?.name || 'Elano'} - ${product?.tagline || 'E-KYC Solutions'}`} />
        <meta property="og:description" content={product?.longDescription || 'Advanced e-KYC and identity verification platform'} />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://rcfi.co.ke/products/elano" />
      </Head>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                <FiShield className="w-4 h-4" />
                {product?.tagline || 'E-KYC & Identity Verification'}
              </div>

              <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
                {product?.name || 'Elano'}
              </h1>

              <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
                {product?.longDescription || 'Comprehensive e-KYC and identity verification platform for financial services and regulated industries.'}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <CTAButton href="/contact/demo" variant="primary" size="lg">
                  Request Demo
                </CTAButton>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Real-time Verification</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Compliance Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="w-5 h-5 text-primary-600" />
                  <span>Multi-factor Auth</span>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:block">
              <div className="bg-gradient-to-br from-primary-100 to-primary-50 rounded-2xl aspect-square flex items-center justify-center">
                <FiGlobe className="w-32 h-32 text-primary-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-center text-neutral-900 mb-16">
            Powerful Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Real-time Verification', description: 'Instant identity verification with multiple data sources' },
              { title: 'Multi-factor Auth', description: 'Enhanced security with biometric and OTP authentication' },
              { title: 'Compliance Ready', description: 'Meets AML/KYC regulatory requirements across regions' },
              { title: 'API Integration', description: 'Easy integration with existing systems and workflows' },
              { title: 'Audit Trail', description: 'Complete transaction history and compliance reporting' },
              { title: '24/7 Support', description: 'Round-the-clock technical support and monitoring' }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 border border-neutral-200 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Streamline Your KYC Process?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo with our team to see how Elano can accelerate your identity verification.
          </p>
          <Link href="/contact/demo" className="inline-block bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
