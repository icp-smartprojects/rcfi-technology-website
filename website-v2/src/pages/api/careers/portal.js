/**
 * Proxy applicant portal API calls to support backend
 */
const SUPPORT_API_URL = (process.env.SUPPORT_API_URL || 'http://localhost:7000').replace(/\/$/, '')
const GATEWAY_INTERNAL_SECRET = process.env.GATEWAY_INTERNAL_SECRET || ''

export const config = {
  api: { bodyParser: false },
}

async function readBody(req) {
  const chunks = []
  for await (const chunk of req) chunks.push(chunk)
  return Buffer.concat(chunks)
}

export default async function handler(req, res) {
  const action = req.query.action
  const routes = {
    'verify-reference': '/api/support/careers/portal/verify-reference',
    'verify-invitation': '/api/support/careers/portal/verify-invitation',
    'verify-otp': '/api/support/careers/portal/verify-otp',
    'set-password': '/api/support/careers/portal/set-password',
    login: '/api/support/careers/portal/login',
    upload: '/api/support/careers/portal/upload',
  }

  if (!routes[action]) {
    return res.status(400).json({ success: false, message: 'Invalid portal action' })
  }

  try {
    const isMultipart = action === 'upload'
    let body
    if (isMultipart) {
      body = await readBody(req)
    } else {
      const raw = await readBody(req)
      body = raw.length ? raw : JSON.stringify({})
    }

    const headers = { Accept: 'application/json' }
    if (GATEWAY_INTERNAL_SECRET) {
      headers['x-rcfi-gateway-secret'] = GATEWAY_INTERNAL_SECRET
    }
    if (isMultipart) {
      headers['Content-Type'] = req.headers['content-type'] || 'multipart/form-data'
    } else {
      headers['Content-Type'] = 'application/json'
    }

    const upstream = await fetch(`${SUPPORT_API_URL}${routes[action]}`, {
      method: 'POST',
      headers,
      body,
    })
    const data = await upstream.json().catch(() => ({}))
    return res.status(upstream.status).json(data)
  } catch (err) {
    console.error('[api/careers/portal]', err)
    return res.status(502).json({ success: false, message: 'Portal unavailable' })
  }
}
