import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — India-first HRMS for growing teams`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
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
    title: `${site.name} — India-first HRMS for growing teams`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — India-first HRMS`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function FrontendLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
