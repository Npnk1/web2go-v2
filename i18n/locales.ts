export const locales = ["en", "nl", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  nl: "NL",
  es: "ES"
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function stripLocale(pathname: string) {
  const segments = pathname.split("/");
  const firstSegment = segments[1];

  if (firstSegment && isLocale(firstSegment)) {
    const stripped = `/${segments.slice(2).join("/")}`;
    return stripped === "/" ? "/" : stripped.replace(/\/$/, "");
  }

  return pathname || "/";
}

export function localePath(locale: Locale, pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (normalizedPath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${normalizedPath}`;
}

export function switchLocalePath(pathname: string, locale: Locale) {
  return localePath(locale, stripLocale(pathname));
}
