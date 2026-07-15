import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";
import { localePath, locales } from "@/i18n/locales";
import { languageAlternates } from "@/i18n/seo";
import { serviceDefinitions } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { path: "/", priority: 1 },
    ...serviceDefinitions.map((service) => ({ path: `/services/${service.slug}`, priority: 0.8 })),
    { path: "/privacy", priority: 0.4 },
    { path: "/terms", priority: 0.4 }
  ];

  return locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${siteConfig.url}${localePath(locale, route.path)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: route.priority,
      alternates: {
        languages: {
          ...languageAlternates(route.path),
          "x-default": `${siteConfig.url}${localePath("en", route.path)}`
        }
      }
    }))
  );
}
