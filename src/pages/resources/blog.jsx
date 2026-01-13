import Head from 'next/head'
import Link from 'next/link'
import { FiClock, FiUser } from 'react-icons/fi'

export default function Blog() {
  const posts = [
    {
      title: 'Understanding Kenya\'s Data Protection Act: A Guide for Organizations',
      excerpt: 'Everything you need to know about implementing DPA 2019 compliance in your organization.',
      author: 'Kevin Tonui',
      date: 'Jan 10, 2026',
      readTime: '8 min read',
      category: 'Compliance',
      slug: 'kenya-data-protection-act-guide'
    },
    {
      title: 'How Digital Signatures are Transforming Government Services',
      excerpt: 'Exploring the impact of legally binding digital signatures on public service delivery in Kenya.',
      author: 'RCFI Team',
      date: 'Jan 8, 2026',
      readTime: '6 min read',
      category: 'Digital Trust',
      slug: 'digital-signatures-government'
    },
    {
      title: '5 Ways CSOs Can Improve Donor Reporting with Technology',
      excerpt: 'Practical tips for NGOs to streamline compliance and demonstrate impact effectively.',
      author: 'RCFI Team',
      date: 'Jan 5, 2026',
      readTime: '7 min read',
      category: 'NGO',
      slug: 'cso-donor-reporting-tips'
    },
    {
      title: 'e-KYC Integration: Security Best Practices',
      excerpt: 'Technical guide to securely integrating identity verification with government databases.',
      author: 'Tech Team',
      date: 'Jan 3, 2026',
      readTime: '10 min read',
      category: 'Technical',
      slug: 'ekyc-security-best-practices'
    },
    {
      title: 'SME Invoicing: From Manual to Digital in 30 Days',
      excerpt: 'Step-by-step guide for small businesses transitioning to professional digital invoicing.',
      author: 'RCFI Team',
      date: 'Dec 28, 2025',
      readTime: '5 min read',
      category: 'Business',
      slug: 'sme-digital-invoicing-guide'
    },
    {
      title: 'Blockchain for Document Security: Beyond the Hype',
      excerpt: 'Real-world applications of blockchain technology for ensuring document authenticity.',
      author: 'Tech Team',
      date: 'Dec 25, 2025',
      readTime: '9 min read',
      category: 'Technology',
      slug: 'blockchain-document-security'
    }
  ]

  const categories = ['All', 'Digital Trust', 'Compliance', 'NGO', 'Technical', 'Business', 'Technology']

  return (
    <>
      <Head>
        <title>Blog - Latest Insights & Updates | RCFI Technology</title>
        <meta name="description" content="Read the latest articles on digital transformation, compliance, and technology trends in Kenya" />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary-50 via-white to-primary-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, updates, and practical guides on digital transformation in Africa
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-200 hover:border-primary-600 hover:text-primary-600 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-100"></div>
                <div className="p-6">
                  <div className="text-sm font-semibold text-primary-600 mb-2">{post.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <FiUser className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <Link href={`/resources/blog/${post.slug}`} className="text-primary-600 font-semibold hover:text-primary-700">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}