import { routing } from '@/libs/next-intl/routing'
import createMiddleware from 'next-intl/middleware'

export default createMiddleware(routing)

export const config = {
  matcher: ['/((?!api|_next|_vercel|icon|opengraph|mock/*|.*\\..*).*)'],
}
