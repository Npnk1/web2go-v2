import type { Viewport } from "next";
import { notFound } from "next/navigation";
import "@/app/globals.css";
import { isLocale, locales, type Locale } from "@/i18n/locales";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f3ec",
  colorScheme: "light"
};

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const activeLocale: Locale = locale;

  return (
    <html lang={activeLocale}>
      <body>{children}</body>
    </html>
  );
}
