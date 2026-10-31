"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/site/MobileNav";
import { ProductMenu } from "@/components/site/ProductMenu";
import { IndustriesMenu } from "@/components/site/IndustriesMenu";

const secondaryNav = [
  { label: "Payroll", href: "/payroll" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
  { label: "Company", href: "/company" },
];

export function Header() {
  // On the home page the header starts on the photo, in white words, and turns white once the first block has gone by.
  const isHome = usePathname() === "/";
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = isHome ? document.getElementById("home-hero") : null;
    if (!hero) return;
    const update = () => setPastHero(hero.getBoundingClientRect().bottom <= 64);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isHome]);

  return (
    <header
      data-hero={isHome && !pastHero}
      className="group sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur transition-colors duration-300 data-[hero=true]:border-transparent data-[hero=true]:bg-transparent data-[hero=true]:bg-gradient-to-b data-[hero=true]:from-[#15147b]/35 data-[hero=true]:to-transparent data-[hero=true]:backdrop-blur-none"
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" aria-label="NeevHR home" className="inline-flex">
          <BrandMark href={null} className="group-data-[hero=true]:!hidden" />
          <BrandMark href={null} tone="white" className="!hidden group-data-[hero=true]:!inline-block" />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          <ProductMenu />
          <IndustriesMenu />

          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-body transition-colors hover:text-ink group-data-[hero=true]:text-white group-data-[hero=true]:hover:text-white/80"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/demo" variant="cta" className="hidden sm:inline-flex">
            Book a Demo
          </Button>
          <MobileNav secondaryNav={secondaryNav} />
        </div>
      </Container>
    </header>
  );
}
