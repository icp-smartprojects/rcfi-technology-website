import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin, FiLinkedin, FiTwitter, FiFacebook } from 'react-icons/fi'
import { companyInfo } from '@/data/companyData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission & Vision', href: '/about/mission-vision' },
      { name: 'Team', href: '/about/team' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Contact', href: '/contact' },
    ],
    products: [
      { name: 'DigiSign', href: '/products/digisign' },
      { name: 'Elano', href: '/products/elano' },
      { name: 'Prezio', href: '/products/prezio' },
    ],
    solutions: [
      { name: 'Government', href: '/solutions/government' },
      { name: 'Financial Services', href: '/solutions/financial-services' },
      { name: 'NGOs', href: '/solutions/ngo-civil-society' },
      { name: 'SMEs', href: '/solutions/sme-enterprises' },
      { name: 'Legal', href: '/solutions/legal-compliance' },
    ],
    resources: [
      { name: 'Case Studies', href: '/resources/case-studies' },
      { name: 'Blog', href: '/resources/blog' },
      { name: 'Documentation', href: '/resources/documentation' },
      { name: 'FAQ', href: '/resources/faq' },
      { name: 'Support', href: '/contact/support' },
    ],
  }

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="font-display font-bold text-lg">RCFI Technology</div>
                <div className="text-xs text-neutral-400">Digital Transformation</div>
              </div>
            </div>
            <p className="text-neutral-400 mb-6 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <div className="flex gap-4">
              <a 
                href={companyInfo.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href={companyInfo.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href={companyInfo.social.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <FiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-neutral-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-neutral-400">
                <FiMapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{companyInfo.address.full}</span>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <FiPhone className="w-5 h-5 flex-shrink-0" />
                <a href={`tel:${companyInfo.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {companyInfo.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-neutral-400">
                <FiMail className="w-5 h-5 flex-shrink-0" />
                <a href={`mailto:${companyInfo.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {companyInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-neutral-400 text-sm text-center md:text-left">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-neutral-400">
              <span className="flex items-center gap-2">
                ISO 27001 Certified
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                CAK Licensed
              </span>
              <span className="hidden md:inline">•</span>
              <span className="flex items-center gap-2">
                Kenya DPA Compliant
              </span>
            </div>
            <div className="flex gap-4 text-neutral-400 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}