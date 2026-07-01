"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
} from "react";
import type { Dictionary, Locale } from "./types";
import { dictionaries } from "./types";

const STORAGE_KEY = "sesajans-locale";

let localeListeners: Array<() => void> = [];

function subscribeLocale(onChange: () => void) {
  localeListeners.push(onChange);
  return () => {
    localeListeners = localeListeners.filter((listener) => listener !== onChange);
  };
}

function readLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "en" ? "en" : "tr";
}

function publishLocale(locale: Locale) {
  localStorage.setItem(STORAGE_KEY, locale);
  document.documentElement.lang = locale;
  localeListeners.forEach((listener) => listener());
}

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribeLocale, readLocale, () => "tr" as Locale);

  const setLocale = useCallback((next: Locale) => {
    publishLocale(next);
  }, []);

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
