/**
 * Proxy careers EOI (JSON) to RCFI Support:
 * POST /api/support/careers/eoi
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/careers/eoi`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(req.body),
    })
    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok) {
      return res.status(upstream.status).json({ success: false, message: data.message || 'Application could not be submitted' })
    }
    return res.status(201).json({ success: true, data: data.data, message: data.message })
  } catch (err) {
    console.error('[api/careers]', err)
    return res.status(502).json({ success: false, message: 'Application system is unavailable.' })
  }
}
