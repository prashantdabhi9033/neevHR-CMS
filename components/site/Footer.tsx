import { BrandMark } from "@/components/brand/BrandMark";
import { Container } from "@/components/ui/Container";

const cols = [
  {
    title: "Product",
    links: [
      { label: "Modules", href: "/#modules" },
      { label: "Why NeevHR", href: "/#why" },
      { label: "Compliance", href: "/#compliance" },
      { label: "Pricing", href: "/pricing" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Contact", href: "/contact" },
      { label: "Book a demo", href: "/demo" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "DPDP notice", href: "/dpdp" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface-soft">
      <Container className="py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm text-muted">
              A configurable, India-first HRMS for teams of 500 to 5,000.
              Payroll, attendance, talent and compliance in one platform.
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NeevHR. Made in India for Indian teams.</p>
          <p>Prices in INR. India statutory compliance built in.</p>
        </div>
      </Container>
    </footer>
  );
}
