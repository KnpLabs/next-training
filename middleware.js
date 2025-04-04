import { NextResponse } from "next/server";
import { match } from '@formatjs/intl-localematcher'
import Negotiator from "negotiator";

const locales = ['en', 'fr']
const defaultLocale = 'en'

function getLocale(request) {
  const languages = new Negotiator({ headers: request.headers }).languages(locales)

  return match(languages, locales, defaultLocale)
}

export function middleware(request) {
  /*
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(request.nextUrl)
  */
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and public assets
    '/((?!_next|images|favicon.ico).*)',
  ],
}
