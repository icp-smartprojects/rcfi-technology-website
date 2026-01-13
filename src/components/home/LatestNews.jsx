import Link from 'next/link'
import { FiArrowRight, FiCalendar, FiClock } from 'react-icons/fi'

export default function LatestNews() {
  const posts = [
    {
      id: 1,
      title: 'RCFI Receives CAK Certification for DigiSign Platform',
      excerpt: 'DigiSign becomes Kenya\'s first locally-hosted digital trust service to receive official certification from the Communications Authority of Kenya.',
      date: 'January 10, 2026',
      readTime: '5 min read',
      category: 'Company News',
      image: '/images/blog/cak-certification.jpg',
      href: '/resources/blog/cak-certification'
    },
    {
      id: 2,
      title: 'How NGOs Can Leverage Elano for Better Grant Management',
      excerpt: 'Learn how civil society organizations across Kenya are using Elano to streamline donor reporting and impact measurement.',
      date: 'January 5, 2026',
      readTime: '8 min read',
      category: 'Product Guide',
      image: '/images/blog/ngo-grant-management.jpg',
      href: '/resources/blog/ngo-grant-management'
    },
    {
      id: 3,
      title: 'The Future of Digital Signatures in East Africa',
      excerpt: 'Exploring the regulatory landscape and opportunities for digital trust services across the EAC region.',
      date: 'December 28, 2025',
      readTime: '10 min read',
      category: 'Industry Insights',
      image: '/images/blog/digital-signatures-eac.jpg',
      href: '/resources/blog/digital-signatures-eac'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-2">
              Latest Updates
            </h2>
            <p className="text-lg text-neutral-600">
              News, insights, and product updates
            </p>
          </div>
          <Link 
            href="/resources/blog"
            className="hidden md:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
          >
            View All Posts
            <FiArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              href={post.href}
              className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 card-hover animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="hidden h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%23f3f4f6" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%239ca3af"%3E' + post.category + '%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Category Badge */}
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-neutral-900 mb-4 group-hover:text-primary-600 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-600 mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4 border-t border-neutral-100 pt-4">
                  <div className="flex items-center gap-1">
                    <FiCalendar className="w-3 h-3" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FiClock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <FiArrowRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile: View All Button */}
        <div className="md:hidden text-center mt-8">
          <Link 
            href="/resources/blog"
            className="btn btn-outline"
          >
            View All Posts
          </Link>
        </div>
      </div>
    </section>
  )
}