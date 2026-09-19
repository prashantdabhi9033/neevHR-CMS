import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Analytics } from "@/components/site/Analytics";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} - India-first HRMS for growing teams`,
    template: `%s · ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [
    "HRMS India",
    "HR software India",
    "payroll software India",
    "PF ESI PT compliance",
    "attendance management software",
    "greytHR alternative",
    "Keka alternative",
    "mid-market HRMS",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} - India-first HRMS for growing teams`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} - India-first HRMS`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#4338ca",
  colorScheme: "light",
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgId = `${site.url}/#organization`;
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    legalName: `${site.name} (NeevHR)`,
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/icon.svg`,
      width: 64,
      height: 64,
    },
    email: site.email,
    description: site.metaDescription,
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      addressCountry: site.addressCountry,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      ...(site.phone ? { telephone: site.phone } : {}),
      areaServed: "IN",
      availableLanguage: ["en", "hi"],
    },
    ...(site.socials.length
      ? { sameAs: site.socials.map((s) => s.href) }
      : {}),
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };

  return (
    <html lang="en-IN">
      <body className={`${inter.variable} antialiased`}>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
