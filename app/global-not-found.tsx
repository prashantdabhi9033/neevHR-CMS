import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { NotFoundBody } from "@/components/site/NotFoundBody";

// Unmatched URLs anywhere on the site. The app has two root layouts (site and CMS admin),
// so this page renders its own <html> with the site font and a minimal header.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "Page not found | NeevHR",
  description: "The page you are looking for does not exist on neevhr.com.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en-IN" className={inter.variable}>
      <body className="bg-white font-sans text-ink antialiased">
        <header className="border-b border-line">
          <div className="mx-auto flex max-w-6xl items-center px-4 py-4 sm:px-6">
            <Link href="/" className="text-lg font-bold text-brand">
              NeevHR
            </Link>
          </div>
        </header>
        <main>
          <NotFoundBody />
        </main>
      </body>
    </html>
  );
}
