import Head from 'next/head'
import Link from 'next/link'
import { FiFileText, FiBook, FiVideo, FiHelpCircle, FiTrendingUp, FiMail } from 'react-icons/fi'

export default function ResourcesIndex() {
  const categories = [
    {
      title: 'Case Studies',
      description: 'Real success stories from our clients',
      icon: FiTrendingUp,
      href: '/resources/case-studies',
      count: '12 stories',
      color: 'blue'
    },
    {
      title: 'White Papers',
      description: 'In-depth reports on digital transformation',
      icon: FiFileText,
      href: '/resources/white-papers',
      count: '8 reports',
      color: 'purple'
    },
    {
      title: 'Blog',
      description: 'Latest news, updates, and insights',
      icon: FiBook,
      href: '/resources/blog',
      count: '50+ articles',
      color: 'green'
    },
    {
      title: 'Documentation',
      description: 'Technical guides and API references',
      icon: FiVideo,
      href: '/resources/documentation',
      count: 'Complete docs',
      color: 'orange'
    },
    {
      title: 'FAQ',
      description: 'Answers to common questions',
      icon: FiHelpCircle,
      href: '/resources/faq',
      count: '50+ answers',
      color: 'red'
    }
  ]

  const featured = [
    {
      type: 'Case Study',
      title: 'How Uasin Gishu County Digitized CSO Governance',
      excerpt: 'Transforming civil society management for 200+ organizations',
      image: '/images/resources/case-study-1.jpg',
      href: '/resources/case-studies',
      date: 'Jan 2026'
    },
    {
      type: 'White Paper',
      title: 'Digital Trust in East Africa: 2026 Report',
      excerpt: 'Comprehensive analysis of digital signature adoption across Kenya',
      image: '/images/resources/whitepaper-1.jpg',
      href: '/resources/white-papers',
      date: 'Dec 2025'
    },
    {
      type: 'Blog Post',
      title: 'Understanding Kenya\'s Data Protection Act',
      excerpt: 'A practical guide for organizations implementing DPA 2019',
      image: '/images/resources/blog-1.jpg',
      href: '/resources/blog',
      date: 'Jan 2026'
    }
  ]

  return (
    <>
      <Head>
        <title>Resources - Knowledge Center | RCFI Technology</title>
        <meta name="description" content="Case studies, white papers, blog, documentation, and FAQs about digital transformation in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Knowledge Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Insights, guides, and success stories to help you succeed with digital transformation
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Link 
                  key={category.title}
                  href={category.href}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all group"
                >
                  <div className={`w-16 h-16 bg-${category.color}-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${category.color}-600`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{category.title}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <div className="text-sm font-semibold text-green-600">{category.count}</div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map((resource, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-green-100 to-green-100"></div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-green-600 mb-2">{resource.type}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{resource.date}</span>
                    <Link href={resource.href} className="text-blue-600 font-semibold hover:text-blue-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <FiMail className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get the latest insights on digital transformation in Africa
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900"
            />
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}