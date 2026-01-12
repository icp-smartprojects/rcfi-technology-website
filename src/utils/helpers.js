/**
 * Utility helper functions for RCFI Technology website
 */

// Format phone number to Kenyan format
export const formatPhoneNumber = (phone) => {
  if (!phone) return ''
  
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, '')
  
  // Format as +254 XXX XXX XXX
  if (cleaned.startsWith('254')) {
    return `+${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`
  }
  
  // Format as 0XXX XXX XXX
  if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`
  }
  
  return phone
}

// Format currency to KES
export const formatCurrency = (amount, currency = 'KES') => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

// Format date
export const formatDate = (date, format = 'long') => {
  const d = new Date(date)
  
  if (format === 'long') {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }
  
  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  
  return d.toLocaleDateString()
}

// Truncate text
export const truncateText = (text, maxLength = 150) => {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

// Slugify string
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

// Validate email
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Validate Kenyan phone number
export const isValidKenyanPhone = (phone) => {
  const regex = /^(\+254|0)[17]\d{8}$/
  return regex.test(phone.replace(/\s/g, ''))
}

// Generate random ID
export const generateId = () => {
  return Math.random().toString(36).substr(2, 9)
}

// Debounce function
export const debounce = (func, wait = 300) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function
export const throttle = (func, limit = 300) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

// Scroll to element
export const scrollToElement = (elementId, offset = 80) => {
  const element = document.getElementById(elementId)
  if (element) {
    const top = element.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

// Copy to clipboard
export const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch (err) {
    console.error('Failed to copy:', err)
    return false
  }
}

// Get color class by product
export const getProductColor = (productId) => {
  const colors = {
    digisign: 'blue',
    elano: 'purple',
    prezio: 'orange'
  }
  return colors[productId] || 'blue'
}

// Get icon by category
export const getIconByCategory = (category) => {
  const icons = {
    security: 'FiShield',
    compliance: 'FiCheckCircle',
    integration: 'FiLink',
    performance: 'FiZap',
    support: 'FiHeadphones',
    analytics: 'FiBarChart'
  }
  return icons[category] || 'FiCircle'
}

// Parse query string
export const parseQueryString = (queryString) => {
  const params = new URLSearchParams(queryString)
  const result = {}
  for (const [key, value] of params) {
    result[key] = value
  }
  return result
}

// Build query string
export const buildQueryString = (params) => {
  const query = new URLSearchParams(params)
  return query.toString()
}

// Check if element is in viewport
export const isInViewport = (element) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

// Get reading time
export const getReadingTime = (text) => {
  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Format file size
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes'
  
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i]
}

// Clean object (remove null/undefined values)
export const cleanObject = (obj) => {
  return Object.entries(obj).reduce((acc, [key, value]) => {
    if (value !== null && value !== undefined && value !== '') {
      acc[key] = value
    }
    return acc
  }, {})
}

// Group array by key
export const groupBy = (array, key) => {
  return array.reduce((result, item) => {
    const group = item[key]
    result[group] = result[group] || []
    result[group].push(item)
    return result
  }, {})
}

// Sort array by key
export const sortBy = (array, key, order = 'asc') => {
  return [...array].sort((a, b) => {
    if (order === 'asc') {
      return a[key] > b[key] ? 1 : -1
    }
    return a[key] < b[key] ? 1 : -1
  })
}

// Check if user is on mobile
export const isMobile = () => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < 768
}

// Get browser info
export const getBrowserInfo = () => {
  if (typeof window === 'undefined') return null
  
  const ua = navigator.userAgent
  let browserName = 'Unknown'
  
  if (ua.indexOf('Firefox') > -1) browserName = 'Firefox'
  else if (ua.indexOf('Opera') > -1 || ua.indexOf('OPR') > -1) browserName = 'Opera'
  else if (ua.indexOf('Trident') > -1) browserName = 'IE'
  else if (ua.indexOf('Edge') > -1) browserName = 'Edge'
  else if (ua.indexOf('Chrome') > -1) browserName = 'Chrome'
  else if (ua.indexOf('Safari') > -1) browserName = 'Safari'
  
  return {
    name: browserName,
    userAgent: ua
  }
}

export default {
  formatPhoneNumber,
  formatCurrency,
  formatDate,
  truncateText,
  slugify,
  isValidEmail,
  isValidKenyanPhone,
  generateId,
  debounce,
  throttle,
  scrollToElement,
  copyToClipboard,
  getProductColor,
  getIconByCategory,
  parseQueryString,
  buildQueryString,
  isInViewport,
  getReadingTime,
  formatFileSize,
  cleanObject,
  groupBy,
  sortBy,
  isMobile,
  getBrowserInfo
}