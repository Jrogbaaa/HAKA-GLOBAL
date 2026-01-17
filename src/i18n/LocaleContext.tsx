"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { type Locale } from "./config";

type LocaleContextType = {
  locale: Locale;
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
  initialMessages: Record<string, string>;
};

export const LocaleProvider = ({
  children,
  initialMessages,
}: LocaleProviderProps) => {
  const [locale] = useState<Locale>("en");
  const [messages] = useState<Record<string, string>>(initialMessages);

  const t = (key: string): string => {
    return messages[key] || key;
  };

  return (
    <LocaleContext.Provider value={{ locale, t, messages }}>
      {children}
    </LocaleContext.Provider>
  );
};
