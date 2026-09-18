import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { primaryNav } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-7 md:flex">
          {primaryNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-body transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/demo"
            className="hidden text-sm font-medium text-body transition-colors hover:text-ink sm:block"
          >
            Sign in
          </a>
          <Button href="/demo">Book a demo</Button>
        </div>
      </Container>
    </header>
  );
}
