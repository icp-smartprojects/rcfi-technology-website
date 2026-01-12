import Head from 'next/head'
import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'
import SEO from '@/components/common/SEO'

const products = [
  {
    id: 'digisign',
    name: 'DigiSign',
    description: 'Government-grade digital signature platform for e-government and corporate authentication',
    features: ['PKIX Compliant', 'CAK Licensed', 'ISO 27001 Certified'],
    image: '/images/products/digisign.jpg'
  },
  {
    id: 'elano',
    name: 'Elano',
    description: 'Comprehensive e-KYC and identity verification solution for financial services',
    features: ['Real-time Verification', 'Multi-factor Authentication', 'Compliance Ready'],
    image: '/images/products/elano.jpg'
  },
  {
    id: 'prezio',
    name: 'Prezio',
    description: 'Business process automation and workflow management platform',
    features: ['Workflow Automation', 'Document Management', 'Real-time Analytics'],
    image: '/images/products/prezio.jpg'
  }
]

export default function Products() {
  return (
    <>
      <Head>
        <title>Products | RCFI Technology</title>
        <meta name="description" content="Discover RCFI's suite of digital transformation products: DigiSign, Elano, and Prezio. Trusted by enterprises across East Africa." />
        <meta name="keywords" content="products, digital signatures, e-KYC, workflow automation, DigiSign, Elano, Prezio" />
        <meta property="og:title" content="Products | RCFI Technology" />
        <meta property="og:description" content="Digital transformation solutions for Kenya and East Africa" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rcfi.co.ke/products" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rcfi.co.ke/products" />
      </Head>

      <SEO title="Our Products" description="Explore our comprehensive suite of digital solutions" />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary-50 to-white">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-900 mb-6">
            Our Products
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-8">
            Comprehensive solutions designed to empower your digital transformation journey
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className="group h-full bg-white border border-neutral-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-neutral-600 mb-6">
                      {product.description}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {product.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-neutral-700">
                          <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Learn More
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a demo with our team to see how our solutions can accelerate your digital transformation.
          </p>
          <Link href="/contact/demo" className="inline-block bg-white text-primary-900 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Request a Demo
          </Link>
        </div>
      </section>
    </>
  )
}
