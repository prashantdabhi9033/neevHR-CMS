import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Analytics } from "@/components/site/Analytics";
import { site } from "@/lib/site";
import { OG_IMAGE } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const homeTitle = "NeevHR - India-first HRMS & Payroll Software";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s | ${site.name}`,
  },
  description: site.metaDescription,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: homeTitle,
    description: site.metaDescription,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.metaDescription,
    images: [OG_IMAGE.url],
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
  // Search Console / Bing ownership tokens, set in the environment.
  verification: {
    ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
      : {}),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION } }
      : {}),
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
    url: site.url,
    logo: {
      "@type": "ImageObject",
      url: `${site.url}/logo.png`,
      width: 512,
      height: 512,
    },
    email: site.email,
    telephone: site.phone,
    description: site.entity,
    slogan: site.tagline,
    areaServed: { "@type": "Country", name: "India" },
    address: {
      "@type": "PostalAddress",
      addressCountry: site.addressCountry,
    },
    knowsAbout: [
      "Human resource management software",
      "HRMS",
      "Payroll software",
      "Indian payroll compliance",
      "Provident Fund (EPF)",
      "Employees' State Insurance (ESI)",
      "Professional Tax",
      "TDS on salary",
      "Attendance management",
      "Leave management",
      "Performance management",
      "Recruitment",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: site.email,
      telephone: site.phone,
      areaServed: "IN",
      availableLanguage: ["en"],
    },
    sameAs: site.socials.map((s) => s.href),
  };
  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    description: site.entity,
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
        <main id="main-content" className="overflow-x-clip">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
