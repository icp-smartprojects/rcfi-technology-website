/**
 * Proxy careers applications (multipart + documents) to RCFI Support:
 * POST /api/support/careers/apply
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')

export const config = {
  api: { bodyParser: false },
}

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ success: false, message: 'Method not allowed' })
  }

  try {
    const body = await readBody(req)
    const upstream = await fetch(`${SUPPORT_API_URL}/api/support/careers/apply`, {
      method: 'POST',
      headers: {
        'Content-Type': req.headers['content-type'] || 'multipart/form-data',
        Accept: 'application/json',
      },
      body,
    })

    const data = await upstream.json().catch(() => ({}))
    if (!upstream.ok) {
      return res.status(upstream.status).json({
        success: false,
        message: data.message || 'Application could not be submitted',
      })
    }

    return res.status(201).json({ success: true, data: data.data || null, message: data.message })
  } catch (err) {
    console.error('[api/careers]', err)
    return res.status(502).json({
      success: false,
      message: 'Application system is unavailable. Email careers@rcfi.co.ke with your CV.',
    })
  }
}
