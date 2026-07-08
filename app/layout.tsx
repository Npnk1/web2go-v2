import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Web2Go | AI Website Optimization for Modern Businesses",
    template: "%s | Web2Go"
  },
  description: siteConfig.description,
  applicationName: "Web2Go",
  keywords: [
    "AI website optimization",
    "GEO optimization",
    "LLM optimization",
    "technical SEO",
    "structured data",
    "website redesign",
    "conversion-focused websites"
  ],
  authors: [{ name: "Web2Go" }],
  creator: "Web2Go",
  publisher: "Web2Go",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Web2Go | Make your website easier for AI to understand",
    description:
      "Premium website optimization for AI readability, search visibility, technical SEO, performance, trust, and conversion.",
    url: "/",
    siteName: "Web2Go",
    type: "website",
    images: [
      {
        url: "/images/ai-visibility-dashboard.png",
        width: 1200,
        height: 630,
        alt: "Abstract AI visibility dashboard for website optimization"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Web2Go | AI Website Optimization",
    description:
      "Websites structured for search, AI answers, performance, trust, and real customers.",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050713",
  colorScheme: "dark"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

