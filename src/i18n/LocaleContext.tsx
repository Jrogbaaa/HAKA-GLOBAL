"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { type Locale, defaultLocale } from "./config";

type LocaleContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  messages: Record<string, string>;
};

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

type LocaleProviderProps = {
  children: ReactNode;
  initialLocale?: Locale;
  initialMessages: Record<string, string>;
};

export const LocaleProvider = ({
  children,
  initialLocale = defaultLocale,
  initialMessages,
}: LocaleProviderProps) => {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const [messages, setMessages] = useState<Record<string, string>>(initialMessages);

  const setLocale = async (newLocale: Locale) => {
    // Save to cookie
    document.cookie = `HAKA_LOCALE=${newLocale};path=/;max-age=31536000`;
    setLocaleState(newLocale);

    // Load new messages
    const newMessages = await import(`@/messages/${newLocale}.json`);
    setMessages(newMessages.default);
  };

  const t = (key: string): string => {
    return messages[key] || key;
  };

  useEffect(() => {
    // Check for saved locale in cookie on mount
    const savedLocale = document.cookie
      .split("; ")
      .find((row) => row.startsWith("HAKA_LOCALE="))
      ?.split("=")[1] as Locale | undefined;

    if (savedLocale && savedLocale !== locale) {
      setLocale(savedLocale);
    }
  }, []);

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, messages }}>
      {children}
    </LocaleContext.Provider>
  );
};
