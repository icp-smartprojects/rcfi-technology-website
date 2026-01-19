// Company Information
export const COMPANY = {
  name: 'Reprodrive Center for Innovation Limited',
  shortName: 'RCFI Technology',
  tagline: 'Empowering Africa\'s Digital Transformation',
  founded: '2022',
  email: 'info@rcfi.co.ke',
  phone: '+254 754 134 704',
  address: '5th Floor, Hifadhi House, Along ICD Road, Nairobi, Kenya'
}

/**
 * Color Constants - Government-grade, trust-focused color system
 * Designed for DigiSign KE: Digital Trust, E-Government, Digital Signatures
 */
export const COLORS = {
  // Primary: Dark Green Trust - Navigation, headers, primary actions
  PRIMARY: '#235e43',
  PRIMARY_50: '#e9f2ec',
  PRIMARY_100: '#d4e5d9',
  PRIMARY_200: '#abcbb7',
  PRIMARY_300: '#7fb08f',
  PRIMARY_400: '#56916e',
  PRIMARY_500: '#2f7652',
  PRIMARY_600: '#235e43',
  PRIMARY_700: '#1c4a35',
  PRIMARY_800: '#153828',
  PRIMARY_900: '#0e241b',

  GREEN_50: '#e9f2ec',
  GREEN_100: '#d4e5d9',
  GREEN_200: '#abcbb7',
  GREEN_300: '#7fb08f',
  GREEN_400: '#56916e',
  GREEN_500: '#2f7652',
  GREEN_600: '#235e43',
  GREEN_700: '#1c4a35',
  GREEN_800: '#153828',
  GREEN_900: '#0e241b',

  // Secondary: Supporting Dark Green - Links, icons, active states
  SECONDARY: '#235e43',
  SECONDARY_50: '#e9f2ec',
  SECONDARY_100: '#d4e5d9',
  SECONDARY_200: '#abcbb7',
  SECONDARY_300: '#7fb08f',
  SECONDARY_400: '#56916e',
  SECONDARY_500: '#2f7652',
  SECONDARY_600: '#235e43',
  SECONDARY_700: '#1c4a35',
  SECONDARY_800: '#153828',
  SECONDARY_900: '#0e241b',

  // Success: Deeper Green - Verified, signed states
  SUCCESS: '#2f7652',
  SUCCESS_50: '#e9f2ec',
  SUCCESS_100: '#d4e5d9',
  SUCCESS_200: '#abcbb7',
  SUCCESS_300: '#7fb08f',
  SUCCESS_400: '#56916e',
  SUCCESS_500: '#2f7652',
  SUCCESS_600: '#235e43',
  SUCCESS_700: '#1c4a35',
  SUCCESS_800: '#153828',

  // Error: Dark Green Alerts - Brand-consistent emphasis
  ERROR: '#235e43',
  ERROR_50: '#e9f2ec',
  ERROR_100: '#d4e5d9',
  ERROR_200: '#abcbb7',
  ERROR_300: '#7fb08f',
  ERROR_400: '#56916e',
  ERROR_500: '#235e43',
  ERROR_600: '#1c4a35',
  ERROR_700: '#153828',
  ERROR_800: '#0e241b',

  // Warning: Dark Green Attention - Pending states
  WARNING: '#2f7652',
  WARNING_50: '#e9f2ec',
  WARNING_100: '#d4e5d9',
  WARNING_200: '#abcbb7',
  WARNING_300: '#7fb08f',
  WARNING_400: '#56916e',
  WARNING_500: '#2f7652',
  WARNING_600: '#235e43',
  WARNING_700: '#1c4a35',
  WARNING_800: '#153828',

  // Text: Dark Charcoal
  TEXT_PRIMARY: '#1C1C1C',
  TEXT_SECONDARY: '#6b7280',
  TEXT_TERTIARY: '#9ca3af',

  // Background
  BACKGROUND: '#FFFFFF',
  SURFACE: '#F4F6F8',
  BORDER_LIGHT: '#e8ecf1',
  BORDER_MEDIUM: '#d4dce5',

  // Neutral grayscale
  NEUTRAL_50: '#fafafa',
  NEUTRAL_100: '#f5f5f5',
  NEUTRAL_200: '#f4f6f8',
  NEUTRAL_300: '#e8ecf1',
  NEUTRAL_400: '#d4dce5',
  NEUTRAL_500: '#9ca3af',
  NEUTRAL_600: '#6b7280',
  NEUTRAL_700: '#4b5563',
  NEUTRAL_800: '#374151',
  NEUTRAL_900: '#1C1C1C',
}

/**
 * Semantic color meanings for UI states
 */
export const SEMANTIC_COLORS = {
  trust: COLORS.PRIMARY,
  verified: COLORS.SUCCESS,
  pending: COLORS.WARNING,
  failed: COLORS.ERROR,
  active: COLORS.SECONDARY,
  disabled: COLORS.NEUTRAL_400,
  info: COLORS.PRIMARY,
}

/**
 * Component-specific color palettes
 */
export const COMPONENT_COLORS = {
  // Button colors
  button: {
    primary: {
      bg: COLORS.PRIMARY,
      text: '#FFFFFF',
      hover: COLORS.PRIMARY_700,
      disabled: COLORS.NEUTRAL_400,
    },
    secondary: {
      bg: COLORS.SECONDARY,
      text: '#FFFFFF',
      hover: COLORS.SECONDARY_700,
      disabled: COLORS.NEUTRAL_400,
    },
    success: {
      bg: COLORS.SUCCESS,
      text: '#FFFFFF',
      hover: COLORS.SUCCESS_700,
      disabled: COLORS.NEUTRAL_400,
    },
    error: {
      bg: COLORS.ERROR,
      text: '#FFFFFF',
      hover: COLORS.ERROR_700,
      disabled: COLORS.NEUTRAL_400,
    },
  },

  // Input/Form colors
  input: {
    border: COLORS.BORDER_MEDIUM,
    borderFocus: COLORS.PRIMARY,
    borderError: COLORS.ERROR,
    borderSuccess: COLORS.SUCCESS,
    background: COLORS.BACKGROUND,
    text: COLORS.TEXT_PRIMARY,
    placeholder: COLORS.TEXT_SECONDARY,
  },

  // Badge/Tag colors
  badge: {
    primary: {
      bg: COLORS.PRIMARY_100,
      text: COLORS.PRIMARY,
    },
    success: {
      bg: COLORS.SUCCESS_50,
      text: COLORS.SUCCESS,
    },
    error: {
      bg: COLORS.ERROR_50,
      text: COLORS.ERROR,
    },
    warning: {
      bg: COLORS.WARNING_50,
      text: COLORS.WARNING,
    },
  },

  // Card colors
  card: {
    background: COLORS.SURFACE,
    border: COLORS.BORDER_LIGHT,
    text: COLORS.TEXT_PRIMARY,
  },

  // Alert/Toast colors
  alert: {
    success: {
      bg: COLORS.SUCCESS_50,
      border: COLORS.SUCCESS_200,
      text: COLORS.SUCCESS_700,
      icon: COLORS.SUCCESS,
    },
    error: {
      bg: COLORS.ERROR_50,
      border: COLORS.ERROR_200,
      text: COLORS.ERROR_700,
      icon: COLORS.ERROR,
    },
    warning: {
      bg: COLORS.WARNING_50,
      border: COLORS.WARNING_200,
      text: COLORS.WARNING_700,
      icon: COLORS.WARNING,
    },
    info: {
      bg: COLORS.PRIMARY_50,
      border: COLORS.PRIMARY_200,
      text: COLORS.PRIMARY_700,
      icon: COLORS.PRIMARY,
    },
  },
}


// Social Media Links
export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/rcfi-technology',
  twitter: 'https://twitter.com/rcfi_tech',
  facebook: 'https://facebook.com/rcfitechnology'
}

// Navigation Links
export const NAV_LINKS = {
  products: [
    { name: 'DigiSign', href: '/products/digisign', description: 'Digital Trust & Security' },
    { name: 'Elano', href: '/products/elano', description: 'Governance & Intelligence' },
    { name: 'Prezio', href: '/products/prezio', description: 'Business Management' }
  ],
  solutions: [
    { name: 'Government & Public Sector', href: '/solutions/government' },
    { name: 'Financial Services', href: '/solutions/financial-services' },
    { name: 'NGOs & Civil Society', href: '/solutions/ngo-civil-society' },
    { name: 'SMEs & Enterprises', href: '/solutions/sme-enterprises' },
    { name: 'Legal & Compliance', href: '/solutions/legal-compliance' }
  ],
  resources: [
    { name: 'Case Studies', href: '/resources/case-studies' },
    { name: 'White Papers', href: '/resources/white-papers' },
    { name: 'Blog', href: '/resources/blog' },
    { name: 'Documentation', href: '/resources/documentation' },
    { name: 'FAQ', href: '/resources/faq' }
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Team', href: '/about/team' },
    { name: 'Certifications', href: '/about/certifications' },
    { name: 'Partners', href: '/partners' }
  ]
}

// Products
export const PRODUCTS = {
  digisign: {
    id: 'digisign',
    name: 'DigiSign',
    tagline: 'Digital Trust & Security',
    color: 'blue',
    href: '/products/digisign'
  },
  elano: {
    id: 'elano',
    name: 'Elano',
    tagline: 'Governance & Intelligence',
    color: 'purple',
    href: '/products/elano'
  },
  prezio: {
    id: 'prezio',
    name: 'Prezio',
    tagline: 'Business Management Made Simple',
    color: 'orange',
    href: '/products/prezio'
  }
}

// Certifications
export const CERTIFICATIONS = [
  'ISO 27001 Certified',
  'CAK Licensed',
  'Kenya DPA Compliant',
  'CA/B Forum Aligned'
]

// Success Metrics
export const METRICS = [
  { number: '10,000+', label: 'Users Served' },
  { number: '47', label: 'Counties Reached' },
  { number: '99.95%', label: 'Uptime SLA' },
  { number: '2+', label: 'Years of Innovation' }
]

// Feature Categories
export const FEATURE_CATEGORIES = {
  security: {
    name: 'Security',
    icon: 'shield',
    color: 'blue'
  },
  compliance: {
    name: 'Compliance',
    icon: 'check-circle',
    color: 'green'
  },
  integration: {
    name: 'Integration',
    icon: 'link',
    color: 'purple'
  },
  performance: {
    name: 'Performance',
    icon: 'zap',
    color: 'orange'
  }
}

// API Endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  demo: '/api/demo-request',
  newsletter: '/api/newsletter'
}

// Form Validation Rules
export const VALIDATION = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^(\+254|0)[17]\d{8}$/,
  minLength: {
    name: 2,
    message: 10,
    password: 8
  }
}

// Pagination
export const PAGINATION = {
  defaultPageSize: 12,
  pageSizeOptions: [12, 24, 48]
}

// Date Formats
export const DATE_FORMATS = {
  display: 'MMMM DD, YYYY',
  api: 'YYYY-MM-DD',
  time: 'HH:mm'
}

// File Upload
export const FILE_UPLOAD = {
  maxSize: 5 * 1024 * 1024, // 5MB
  acceptedTypes: ['image/jpeg', 'image/png', 'application/pdf']
}

// Cache Duration (in seconds)
export const CACHE_DURATION = {
  short: 300, // 5 minutes
  medium: 3600, // 1 hour
  long: 86400 // 24 hours
}

export default {
  COMPANY,
  SOCIAL_LINKS,
  NAV_LINKS,
  PRODUCTS,
  CERTIFICATIONS,
  METRICS,
  FEATURE_CATEGORIES,
  API_ENDPOINTS,
  VALIDATION,
  PAGINATION,
  DATE_FORMATS,
  FILE_UPLOAD,
  CACHE_DURATION
}
