import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { spanishCountries, type Locale, defaultLocale } from "./i18n/config";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if locale is already set in cookie
  const savedLocale = request.cookies.get("HAKA_LOCALE")?.value;

  if (!savedLocale) {
    // Try to detect country from IP using geolocation
    // Vercel and other platforms provide this header automatically
    const country = request.headers.get("x-vercel-ip-country") || null;

    if (country) {
      response.headers.set("x-user-country", country);

      // Auto-set locale based on country
      const detectedLocale: Locale = spanishCountries.includes(country)
        ? "es"
        : defaultLocale;

      // Set the locale cookie for first-time visitors
      response.cookies.set("HAKA_LOCALE", detectedLocale, {
        path: "/",
        maxAge: 60 * 60 * 24 * 365, // 1 year
      });
    }
  }

  return response;
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*|api).*)",
  ],
};
