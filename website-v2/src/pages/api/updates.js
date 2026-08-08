/**
 * Proxy published website posts from RCFI Support:
 * GET /api/support/website-posts
 *
 * website-v2 (:3015) → this route → Back-end (:7000)
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const qs = new URLSearchParams()
    if (req.query.limit) qs.set('limit', String(req.query.limit))
    if (req.query.category) qs.set('category', String(req.query.category))
    const url = `${SUPPORT_API_URL}/api/support/website-posts${qs.toString() ? `?${qs}` : ''}`

    const upstream = await fetch(url, { headers: { Accept: 'application/json' } })
    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        success: false,
        message: data.message || 'Failed to load updates',
      })
    }
    return res.status(200).json({ success: true, data: data.data || [] })
  } catch (err) {
    console.error('[api/updates]', err)
    return res.status(502).json({ success: false, message: 'Support system unavailable', data: [] })
  }
}
