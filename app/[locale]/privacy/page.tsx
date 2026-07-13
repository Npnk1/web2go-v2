import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalPage } from "@/components/legal-page";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/locales";
import { createPageMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return {};
  }

  const messages = getDictionary(locale);
  return createPageMetadata({
    locale,
    messages,
    pathname: "/privacy",
    title: messages.legal.privacy.metadataTitle,
    description: messages.legal.privacy.metadataDescription
  });
}

export default async function PrivacyPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const messages = getDictionary(locale);

  return (
    <LegalPage
      locale={locale}
      backLabel={messages.legal.back}
      content={messages.legal.privacy}
    />
  );
}
