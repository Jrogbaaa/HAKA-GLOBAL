import { cookies, headers } from "next/headers";
import { type Locale, defaultLocale, spanishCountries } from "./config";

export const getServerLocale = async (): Promise<Locale> => {
  const cookieStore = await cookies();
  const savedLocale = cookieStore.get("HAKA_LOCALE")?.value as Locale | undefined;

  if (savedLocale) {
    return savedLocale;
  }

  // Try to detect from geolocation header (set by middleware)
  const headersList = await headers();
  const country = headersList.get("x-user-country");

  if (country && spanishCountries.includes(country)) {
    return "es";
  }

  // Fallback to Accept-Language header
  const acceptLanguage = headersList.get("accept-language");
  if (acceptLanguage?.startsWith("es")) {
    return "es";
  }

  return defaultLocale;
};

export const getMessages = async (locale: Locale) => {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
};
