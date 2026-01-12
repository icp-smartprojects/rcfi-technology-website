/**
 * Color System Usage Guide
 * Quick reference for implementing the new color scheme in components
 */

// ============================================
// USING COLORS IN TAILWIND CLASSES
// ============================================

// Primary Color (Deep Trust Blue)
// bg-primary-50 through bg-primary-950
// text-primary-50 through text-primary-950
// border-primary-50 through border-primary-950
// hover:bg-primary-700, focus:ring-primary-500, etc.

// Example: Primary Button
// <button className="bg-primary-600 text-white hover:bg-primary-700 px-6 py-3 rounded-lg">
//   Sign Document
// </button>

// Secondary Color (Technology Teal)
// bg-secondary-50 through bg-secondary-950
// text-secondary-50 through text-secondary-950
// hover:text-secondary-600, etc.

// Example: Active Navigation Link
// <a href="#" className="text-secondary-600 hover:text-secondary-700 font-semibold">
//   Active Link
// </a>

// Success Color (Compliance Green)
// bg-success-50 through bg-success-800
// text-success-50 through text-success-800

// Example: Verification Badge
// <div className="bg-success-50 border border-success-200 text-success-700 px-4 py-2 rounded">
//   ✓ Document Verified
// </div>

// Error Color (Security Red)
// bg-error-50 through bg-error-800
// text-error-50 through text-error-800

// Example: Error Message
// <div className="bg-error-50 border border-error-200 text-error-700 px-4 py-2 rounded">
//   ✗ Signature Invalid
// </div>

// Warning Color (Amber Orange)
// bg-warning-50 through bg-warning-800
// text-warning-50 through text-warning-800

// Example: Pending Badge
// <div className="bg-warning-50 border border-warning-200 text-warning-700 px-4 py-2 rounded">
//   ⏳ Pending Approval
// </div>

// ============================================
// USING COLORS IN JAVASCRIPT/REACT
// ============================================

import { COLORS, SEMANTIC_COLORS, COMPONENT_COLORS } from '@/utils/constants'

// Direct color reference
const headerColor = COLORS.PRIMARY // #0A3D62
const successColor = COLORS.SUCCESS // #2ECC71
const errorColor = COLORS.ERROR // #E74C3C

// Semantic colors for state-based logic
const getStatusColor = (status) => {
  const colors = {
    verified: SEMANTIC_COLORS.verified, // Green
    pending: SEMANTIC_COLORS.pending,   // Orange
    failed: SEMANTIC_COLORS.failed,     // Red
    active: SEMANTIC_COLORS.active,     // Teal
  }
  return colors[status] || COLORS.NEUTRAL_500
}

// Component-specific colors
const buttonStyles = {
  backgroundColor: COMPONENT_COLORS.button.primary.bg,
  color: COMPONENT_COLORS.button.primary.text,
  ':hover': {
    backgroundColor: COMPONENT_COLORS.button.primary.hover,
  }
}

const inputStyles = {
  borderColor: COMPONENT_COLORS.input.border,
  ':focus': {
    borderColor: COMPONENT_COLORS.input.borderFocus,
  }
}

// ============================================
// COLOR USAGE BY COMPONENT
// ============================================

// BUTTONS
// Primary CTA
bg-primary-600 text-white hover:bg-primary-700

// Secondary CTA
bg-secondary-600 text-white hover:bg-secondary-700

// Success Action
bg-success-600 text-white hover:bg-success-700

// Error/Delete Action
bg-error-600 text-white hover:bg-error-700

// Text Link
text-primary-600 hover:text-primary-700 underline

// ============================================
// FORMS & INPUTS
// ============================================

// Standard Input
border border-neutral-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-100

// Error State
border-2 border-error-500 focus:ring-error-100

// Success State
border-2 border-success-500 focus:ring-success-100

// ============================================
// ALERTS & NOTIFICATIONS
// ============================================

// Success Alert
bg-success-50 border border-success-200 text-success-700

// Error Alert
bg-error-50 border border-error-200 text-error-700

// Warning Alert
bg-warning-50 border border-warning-200 text-warning-700

// Info Alert
bg-primary-50 border border-primary-200 text-primary-700

// ============================================
// BADGES & TAGS
// ============================================

// Verified Badge
bg-success-50 text-success-700 border border-success-200

// Pending Badge
bg-warning-50 text-warning-700 border border-warning-200

// Failed Badge
bg-error-50 text-error-700 border border-error-200

// ============================================
// BACKGROUNDS & CONTAINERS
// ============================================

// Card Background
bg-neutral-200 border border-neutral-300

// Page Background
bg-white

// Section Background
bg-neutral-50

// ============================================
// TEXT & TYPOGRAPHY
// ============================================

// Primary Text
text-neutral-900

// Secondary Text
text-neutral-600

// Muted Text
text-neutral-500

// Link Color
text-primary-600 hover:text-primary-700

// ============================================
// ICONS
// ============================================

// Primary Icon Color
text-primary-600

// Success Icon
text-success-600

// Error Icon
text-error-600

// Warning Icon
text-warning-600

// Neutral Icon
text-neutral-500

// ============================================
// ACCESSIBILITY NOTES
// ============================================

// Always combine colors with clear semantics:
// - Use icons + color for status indicators
// - Use text labels in addition to color
// - Ensure 4.5:1 contrast ratio for text
// - Never use color alone to convey meaning

// Dark mode consideration:
// Test all colors for dark theme compatibility
// Use CSS variables for easy theme switching

// Color-blind friendly:
// Verify designs in color-blind simulators
// Use patterns + color (not just color) for distinction

// ============================================
// EXAMPLE: CERTIFICATE STATUS COMPONENT
// ============================================

/*
<div className="p-6 bg-white border border-neutral-300 rounded-lg">
  <div className="flex items-center gap-4">
    {status === 'verified' && (
      <>
        <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-success-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">Verified</h3>
          <p className="text-sm text-success-700">Document successfully signed</p>
        </div>
      </>
    )}
    
    {status === 'pending' && (
      <>
        <div className="w-12 h-12 bg-warning-100 rounded-full flex items-center justify-center">
          <Clock className="w-6 h-6 text-warning-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">Pending</h3>
          <p className="text-sm text-warning-700">Awaiting approval</p>
        </div>
      </>
    )}
    
    {status === 'failed' && (
      <>
        <div className="w-12 h-12 bg-error-100 rounded-full flex items-center justify-center">
          <XCircle className="w-6 h-6 text-error-600" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900">Failed</h3>
          <p className="text-sm text-error-700">Signature verification failed</p>
        </div>
      </>
    )}
  </div>
</div>
*/
