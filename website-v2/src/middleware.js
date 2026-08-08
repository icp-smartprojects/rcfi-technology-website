import { NextResponse } from 'next/server'

/**
 * Lightweight bot friction for obvious scrapers / empty clients.
 * Skips Next internals so Fast Refresh / HMR never get blocked.
 */
const BLOCKED_UA =
  /(?:scrapy|httrack|wget|python-requests|python-urllib|libwww-perl|httpclient|go-http-client\/|phantomjs|headlesschrome|selenium|puppeteer|playwright|bytespider|petalbot|ahrefsbot|semrushbot|mj12bot|dotbot|dataforseobot|mauibot|claudebot|gptbot|ccbot|anthropic-ai)/i

const ALLOWED_BOTS =
  /(?:googlebot|bingbot|duckduckbot|slurp|applebot|yandexbot|baiduspider|facebookexternalhit|twitterbot|linkedinbot|whatsapp|telegrambot)/i

export function middleware(request) {
  const ua = request.headers.get('user-agent') || ''
  const path = request.nextUrl.pathname

  // Never interfere with Next runtime / HMR / assets / API proxies
  if (
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/images') ||
    path.startsWith('/favicon') ||
    path === '/robots.txt' ||
    path === '/sitemap.xml'
  ) {
    return NextResponse.next()
  }

  if (!ua || ua.length < 12) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  if (/RCFI-E2E/i.test(ua)) {
    return NextResponse.next()
  }

  if (BLOCKED_UA.test(ua) && !ALLOWED_BOTS.test(ua)) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  const response = NextResponse.next()
  if (process.env.NODE_ENV === 'production') {
    response.headers.set('X-Robots-Tag', 'index, follow, max-image-preview:large')
  }
  return response
}

export const config = {
  matcher: ['/((?!_next/|images/|favicon.ico|robots.txt|sitemap.xml).*)'],
}
