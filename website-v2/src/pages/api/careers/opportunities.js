/**
 * Proxy attachment opportunities from support backend
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }
  try {
    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/careers/opportunities`, {
      headers: { Accept: 'application/json' },
    })
    const data = await upstream.json().catch(() => ({}))
    return res.status(upstream.ok ? 200 : upstream.status).json(data)
  } catch {
    return res.status(502).json({ success: false, data: [] })
  }
}
