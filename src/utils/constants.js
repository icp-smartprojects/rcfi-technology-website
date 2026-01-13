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
  PRIMARY: '#1B6B3F',
  PRIMARY_50: '#f0f7f4',
  PRIMARY_100: '#d9f0e8',
  PRIMARY_200: '#b3e0d1',
  PRIMARY_300: '#6fbf9f',
  PRIMARY_400: '#3d9f6d',
  PRIMARY_500: '#1B6B3F',
  GREEN_50: '#1B6B3F',
  GREEN_100: '#1B6B3F',
  GREEN_200: '#1B6B3F',
  GREEN_300: '#1B6B3F',
  GREEN_400: '#1B6B3F',
  GREEN_500: '#1B6B3F',
  GREEN_600: '#1B6B3F',
  GREEN_700: '#1B6B3F',
  GREEN_800: '#1B6B3F',
  GREEN_900: '#1B6B3F',
  PRIMARY_600: '#155a33',
  PRIMARY_700: '#104829',
  PRIMARY_800: '#0b361f',
  PRIMARY_900: '#062415',

  // Secondary: Technology Teal - Links, icons, active states
  SECONDARY: '#1ABC9C',
  SECONDARY_50: '#f0fdf9',
  SECONDARY_100: '#ccf9f0',
  SECONDARY_200: '#99f3e0',
  SECONDARY_300: '#66ecd0',
  SECONDARY_400: '#33e5c1',
  SECONDARY_500: '#1ABC9C',
  SECONDARY_600: '#169481',
  SECONDARY_700: '#126b65',
  SECONDARY_800: '#0d4239',
  SECONDARY_900: '#081a16',

  // Success: Compliance Green - Verified, signed states
  SUCCESS: '#2ECC71',
  SUCCESS_50: '#f0f9f4',
  SUCCESS_100: '#d9f2e3',
  SUCCESS_200: '#b3e5c8',
  SUCCESS_300: '#6fd4a0',
  SUCCESS_400: '#4ac980',
  SUCCESS_500: '#2ECC71',
  SUCCESS_600: '#26a35a',
  SUCCESS_700: '#1e7a43',
  SUCCESS_800: '#16522d',

  // Error: Security Red - Revoked, failed states
  ERROR: '#E74C3C',
  ERROR_50: '#fef2f1',
  ERROR_100: '#fcd9d5',
  ERROR_200: '#fab3ab',
  ERROR_300: '#f68d81',
  ERROR_400: '#f26657',
  ERROR_500: '#E74C3C',
  ERROR_600: '#c93c2f',
  ERROR_700: '#9f2c23',
  ERROR_800: '#7a2218',

  // Warning: Amber Orange - Pending states
  WARNING: '#F39C12',
  WARNING_50: '#fffaf0',
  WARNING_100: '#fff4dd',
  WARNING_200: '#fde8ba',
  WARNING_300: '#fdd574',
  WARNING_400: '#fcc142',
  WARNING_500: '#F39C12',
  WARNING_600: '#c97c0d',
  WARNING_700: '#9f6109',
  WARNING_800: '#7a4a07',

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