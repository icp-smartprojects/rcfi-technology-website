import Link from 'next/link'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'

export default function CTAButton({ 
  href, 
  children, 
  variant = 'primary', 
  size = 'md', 
  icon = 'arrow',
  external = false,
  className = '',
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-lg hover:shadow-xl',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-lg hover:shadow-xl',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    white: 'bg-white text-primary-600 hover:bg-neutral-50 focus:ring-primary-500 shadow-lg hover:shadow-xl',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const icons = {
    arrow: <FiArrowRight className="w-5 h-5" />,
    external: <FiExternalLink className="w-5 h-5" />,
    none: null,
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
        {icons[icon]}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
      {icons[icon]}
    </Link>
  )
}