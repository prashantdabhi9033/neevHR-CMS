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
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <BrandMark />

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          <ProductMenu />
          <IndustriesMenu />

          {secondaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button href="/demo" className="hidden sm:inline-flex">
            Book a Demo
          </Button>
          <MobileNav secondaryNav={secondaryNav} />
        </div>
      </Container>
    </header>
  );
}
