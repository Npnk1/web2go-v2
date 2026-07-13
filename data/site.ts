const fallbackSiteUrl = "http://localhost:3000";

function cleanUrl(value: string | undefined) {
  return (value || fallbackSiteUrl).replace(/\/$/, "");
}

export const siteConfig = {
  name: "Web2Go",
  url: cleanUrl(process.env.NEXT_PUBLIC_SITE_URL),
  publicEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || process.env.CONTACT_TO_EMAIL || "",
  defaultDescription:
    "Web2Go improves business websites for AI readability, search visibility, technical SEO, performance, trust, and conversion."
};
