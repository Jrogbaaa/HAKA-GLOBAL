import { type Locale } from "./config";

export const getServerLocale = async (): Promise<Locale> => {
  // Always return English
  return "en";
};

export const getMessages = async (locale: Locale) => {
  const messages = await import(`@/messages/${locale}.json`);
  return messages.default;
};
