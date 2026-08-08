/**
 * Proxy public contact form submissions to RCFI Support:
 * POST /api/support/contact
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')
const WEBSITE_CONTACT_SECRET = process.env.WEBSITE_CONTACT_SECRET || ''

const INTEREST_LABELS = {
  general: 'General inquiry',
  demo: 'Request a demo',
  certysign: 'CertySign',
  elano: 'Elano',
  prezio: 'Prezio',
  partnership: 'Partnership',
  support: 'Technical support',
  sales: 'Sales',
}

const PHONE_RE = /^(?:254[17]\d{8}|0[17]\d{8})$/

function normalizePhoneInput(phone) {
  return String(phone || '').replace(/[\s\-().+]/g, '')
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const {
      name,
      email,
      phone,
      organization,
      interest,
      message,
      consent_ack,
      website_url: honeypot,
    } = req.body || {}

    if (honeypot) {
      return res.status(200).json({ success: true })
    }

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Name, email, and message are required' })
    }

    if (!phone || !String(phone).trim()) {
      return res.status(400).json({ success: false, message: 'Phone number is required' })
    }

    const phoneNorm = normalizePhoneInput(phone)
    if (!PHONE_RE.test(phoneNorm)) {
      return res.status(400).json({ success: false, message: 'Enter a valid Kenyan mobile number (e.g. 07XX XXX XXX)' })
    }

    if (!consent_ack) {
      return res.status(400).json({
        success: false,
        message: 'You must agree to be contacted by RCFI via email and SMS',
      })
    }

    const category = String(interest || 'general').trim().toLowerCase() || 'general'
    const label = INTEREST_LABELS[category] || category
    const subject = `RCFI website — ${label}`

    const details = [
      message.trim(),
      '',
      '—',
      organization ? `Organization: ${String(organization).trim()}` : null,
      `Phone: ${String(phone).trim()}`,
      `Category: ${label}`,
      'Source: rcfi-website-v2/contact',
    ]
      .filter(Boolean)
      .join('\n')

    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(WEBSITE_CONTACT_SECRET ? { 'X-Website-Secret': WEBSITE_CONTACT_SECRET } : {}),
      },
      body: JSON.stringify({
        name: String(name).trim(),
        email: String(email).trim(),
        phone: String(phone).trim(),
        subject,
        message: details,
        category,
        consent_ack: true,
      }),
    })

    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        success: false,
        message: data.message || 'Failed to send message to support',
      })
    }

    return res.status(200).json({ success: true, data: data.data || null })
  } catch (err) {
    console.error('[api/contact]', err)
    return res.status(502).json({
      success: false,
      message: 'Support system is unavailable. Please try again or email info@rcfi.co.ke.',
    })
  }
}
