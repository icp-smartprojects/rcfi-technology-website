import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = {
    products: {
      name: 'Products',
      items: [
        { name: 'CertySign', href: '/products/certysign', description: 'Digital Trust Platform' },
        { name: 'Elano', href: '/products/elano', description: 'Governance & Intelligence' },
        { name: 'Prezio', href: '/products/prezio', description: 'Business Management' },
      ]
    },
    solutions: {
      name: 'Solutions',
      items: [
        { name: 'Government & Public Sector', href: '/solutions/government' },
        { name: 'Financial Services', href: '/solutions/financial-services' },
        { name: 'NGOs & Civil Society', href: '/solutions/ngo-civil-society' },
        { name: 'SMEs & Enterprises', href: '/solutions/sme-enterprises' },
        { name: 'Legal & Compliance', href: '/solutions/legal-compliance' },
      ]
    },
    resources: {
      name: 'Resources',
      items: [
        { name: 'Case Studies', href: '/resources/case-studies' },
        { name: 'White Papers', href: '/resources/white-papers' },
        { name: 'Blog', href: '/resources/blog' },
        { name: 'Documentation', href: '/resources/documentation' },
        { name: 'FAQ', href: '/resources/faq' },
      ]
    }
  }

  const isHome = router.pathname === '/'
  const useDarkHeader = isHome && !isScrolled

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      useDarkHeader
        ? 'bg-transparent'
        : isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <img
              src={useDarkHeader ? '/images/assets/logo-white.svg' : '/images/assets/logo-black.svg'}
              alt="RCFI Logo"
              className="h-12 w-auto object-contain"
            />
            <div>
              <div className={`font-display font-bold text-lg ${useDarkHeader ? 'text-white' : 'text-neutral-900'}`}>RCFI</div>
              <div className={`text-xs ${useDarkHeader ? 'text-primary-200' : 'text-neutral-600'}`}>Technology</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium ${useDarkHeader ? 'text-primary-100 hover:text-white' : 'text-neutral-700 hover:text-primary-600'}`}>
                <span>Products</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  {navigation.products.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                    >
                      <div className="font-semibold text-neutral-900">{item.name}</div>
                      <div className="text-sm text-neutral-600">{item.description}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium ${useDarkHeader ? 'text-primary-100 hover:text-white' : 'text-neutral-700 hover:text-primary-600'}`}>
                <span>Solutions</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  {navigation.solutions.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors text-neutral-700 hover:text-primary-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className={`flex items-center space-x-1 font-medium ${useDarkHeader ? 'text-primary-100 hover:text-white' : 'text-neutral-700 hover:text-primary-600'}`}>
                <span>Resources</span>
                <FiChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="p-4 space-y-2">
                  {navigation.resources.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors text-neutral-700 hover:text-primary-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/partners" className={`font-medium ${useDarkHeader ? 'text-primary-100 hover:text-white' : 'text-neutral-700 hover:text-primary-600'}`}>
              Partners
            </Link>

            <Link href="/about" className={`font-medium ${useDarkHeader ? 'text-primary-100 hover:text-white' : 'text-neutral-700 hover:text-primary-600'}`}>
              About
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <Link href="/contact" className={`font-semibold ${useDarkHeader ? 'text-white hover:text-primary-100' : 'text-primary-600 hover:text-primary-700'}`}>
              Contact Sales
            </Link>
            <Link href="/contact/demo" className={useDarkHeader ? 'btn btn-white' : 'btn btn-primary'}>
              Request Demo
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${useDarkHeader ? 'text-white' : 'text-neutral-700'}`}
          >
            {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden py-4 border-t ${useDarkHeader ? 'border-white/20 bg-primary-900/95 backdrop-blur-md' : 'border-neutral-200'}`}>
            <div className="space-y-4">
              {/* Mobile Products */}
              <div>
                <div className="font-semibold text-neutral-900 mb-2">Products</div>
                {navigation.products.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-4 text-neutral-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Solutions */}
              <div>
                <div className="font-semibold text-neutral-900 mb-2">Solutions</div>
                {navigation.solutions.items.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block py-2 pl-4 text-neutral-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <Link href="/partners" className="block py-2 text-neutral-700 font-medium">
                Partners
              </Link>

              <Link href="/about" className="block py-2 text-neutral-700 font-medium">
                About
              </Link>

              <div className="pt-4 space-y-3">
                <Link href="/contact" className="block w-full btn btn-outline text-center">
                  Contact Sales
                </Link>
                <Link href="/contact/demo" className="block w-full btn btn-primary text-center">
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}