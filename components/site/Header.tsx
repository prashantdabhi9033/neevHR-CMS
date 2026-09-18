import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/site/MobileNav";
import { moduleGroups } from "@/lib/module-nav";

const secondaryNav = [
  { label: "Why NeevHR", href: "/compare" },
  { label: "Security", href: "/security" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Company", href: "/company" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-white/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <BrandMark />

        <nav className="hidden items-center gap-6 lg:flex">
          {/* Product mega-menu (CSS hover + focus-within) */}
          <div className="group relative">
            <Link
              href="/product"
              className="flex items-center gap-1 py-5 text-sm font-medium text-body transition-colors hover:text-ink"
            >
              Product
              <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <div className="invisible absolute left-1/2 top-full z-50 w-[860px] max-w-[92vw] -translate-x-1/2 translate-y-1 rounded-2xl border border-line bg-white p-5 opacity-0 shadow-[var(--shadow-float)] transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="grid grid-cols-3 gap-x-6 gap-y-5">
                {moduleGroups.map((grp) => (
                  <div key={grp.group}>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                      {grp.group}
                    </p>
                    <ul className="mt-2 space-y-0.5">
                      {grp.items.map((it) => (
                        <li key={it.slug}>
                          <Link
                            href={it.href ?? `/product/${it.slug}`}
                            className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-body transition-colors hover:bg-brand-tint hover:text-brand"
                          >
                            {it.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
                <span className="text-xs text-muted">
                  20+ modules on one employee record.
                </span>
                <Link
                  href="/product"
                  className="text-xs font-semibold text-brand hover:text-brand-dark"
                >
                  View the full platform →
                </Link>
              </div>
            </div>
          </div>

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
            Book a demo
          </Button>
          <MobileNav secondaryNav={secondaryNav} />
        </div>
      </Container>
    </header>
  );
}
