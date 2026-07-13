import { en } from "./en";
import { es } from "./es";
import { nl } from "./nl";
import type { Locale } from "./locales";
import type { Messages } from "./types";

export const dictionaries: Record<Locale, Messages> = {
  en,
  nl,
  es
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}

export type { Messages };
