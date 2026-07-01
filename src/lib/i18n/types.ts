import { dictionary as trDictionary } from "./dictionaries/tr";
import { dictionary as enDictionary } from "./dictionaries/en";

export type Locale = "tr" | "en";

export const locales: Locale[] = ["tr", "en"];
export const defaultLocale: Locale = "tr";

export type Dictionary = typeof trDictionary | typeof enDictionary;

export const dictionaries: Record<Locale, Dictionary> = {
  tr: trDictionary,
  en: enDictionary,
};
