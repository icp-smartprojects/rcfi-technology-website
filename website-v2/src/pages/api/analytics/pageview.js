/**
 * Proxy anonymous pageview beacons to RCFI Support (consent-gated client-side).
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/website-analytics/pageview`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(req.body),
    })
    const data = await upstream.json().catch(() => ({}))
    return res.status(upstream.status).json(data)
  } catch {
    return res.status(502).json({ success: false, message: 'Analytics service unavailable' })
  }
}
