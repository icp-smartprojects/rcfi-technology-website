/**
 * Proxy careers document config from RCFI Support:
 * GET /api/support/careers/document-config
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/careers/document-config`, {
      headers: { Accept: 'application/json' },
    })
    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok) {
      return res.status(upstream.status).json({ success: false, message: data.message || 'Could not load document requirements' })
    }
    return res.status(200).json(data)
  } catch (err) {
    console.error('[api/careers/document-config]', err)
    return res.status(502).json({ success: false, message: 'Application system is unavailable.' })
  }
}
