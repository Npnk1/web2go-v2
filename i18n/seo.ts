import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { localePath, locales, type Locale } from "./locales";
import type { Messages } from "./types";

export function localizedUrl(locale: Locale, pathname = "/") {
  return `${siteConfig.url}${localePath(locale, pathname)}`;
}

export function languageAlternates(pathname = "/") {
  return Object.fromEntries(
    locales.map((locale) => [locale, localizedUrl(locale, pathname)])
  ) as Record<Locale, string>;
}

export function createPageMetadata({
  locale,
  messages,
  pathname = "/",
  title,
  description
}: {
  locale: Locale;
  messages: Messages;
  pathname?: string;
  title?: string;
  description?: string;
}): Metadata {
  const pageTitle = title || messages.metadata.title;
  const pageDescription = description || messages.metadata.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: pageTitle,
    description: pageDescription,
    applicationName: siteConfig.name,
    keywords: messages.metadata.keywords,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: localizedUrl(locale, pathname),
      languages: {
        ...languageAlternates(pathname),
        "x-default": localizedUrl("en", pathname)
      }
    },
    openGraph: {
      title: title || messages.metadata.ogTitle,
      description: description || messages.metadata.ogDescription,
      url: localizedUrl(locale, pathname),
      siteName: siteConfig.name,
      locale,
      type: "website",
      images: [
        {
          url: "/images/ai-visibility-dashboard.png",
          width: 1200,
          height: 630,
          alt: "Web2Go website readiness interface"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: title || messages.metadata.twitterTitle,
      description: description || messages.metadata.twitterDescription,
      images: ["/images/ai-visibility-dashboard.png"]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    }
  };
}
