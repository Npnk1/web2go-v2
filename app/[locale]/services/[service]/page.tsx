import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/service-page";
import { getServiceDefinition, serviceDefinitions } from "@/data/services";
import { getDictionary } from "@/i18n/dictionaries";
import { isLocale, locales } from "@/i18n/locales";
import { createPageMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  return locales.flatMap((locale) => serviceDefinitions.map((service) => ({ locale, service: service.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; service: string }> }): Promise<Metadata> {
  const { locale, service } = await params;
  const definition = getServiceDefinition(service);
  if (!isLocale(locale) || !definition) return {};
  const messages = getDictionary(locale);
  const content = messages.services.cards[definition.index];
  return createPageMetadata({ locale, messages, pathname: `/services/${service}`, title: content.title, description: content.description });
}

export default async function Page({ params }: { params: Promise<{ locale: string; service: string }> }) {
  const { locale, service } = await params;
  const definition = getServiceDefinition(service);
  if (!isLocale(locale) || !definition) notFound();
  return <ServicePage locale={locale} messages={getDictionary(locale)} definition={definition} />;
}
