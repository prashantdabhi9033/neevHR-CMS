import Link from "next/link";
import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/site/StoreBadges";
import { SocialIcon } from "@/components/site/SocialIcon";
import { site } from "@/lib/site";

const cols = [
  {
    title: "HRMS",
    links: [
      { label: "HRMS overview", href: "/hrms" },
      { label: "Employee Management", href: "/features/employees" },
      { label: "Payroll", href: "/payroll" },
      { label: "Attendance", href: "/features/attendance" },
      { label: "Leave", href: "/features/leave" },
      { label: "Recruitment", href: "/features/recruitment" },
      { label: "Performance", href: "/features/performance" },
      { label: "Employee Self Service", href: "/mobile" },
      { label: "HR Analytics", href: "/features/reports" },
      { label: "All features", href: "/features" },
    ],
  },
  {
    title: "Industries",
    links: [
      { label: "Manufacturing", href: "/industries/manufacturing" },
      { label: "IT & ITES", href: "/industries/it-ites" },
      { label: "Retail", href: "/industries/retail-qsr" },
      { label: "Healthcare", href: "/industries/healthcare" },
      { label: "BFSI", href: "/industries/bfsi" },
      { label: "Logistics", href: "/industries/logistics" },
      { label: "Pharma", href: "/industries/pharma" },
      { label: "Hospitality", href: "/industries/hospitality" },
      { label: "All industries", href: "/industries" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "HRMS Guide", href: "/best-hrms-software-india" },
      { label: "Payroll Guide", href: "/india-payroll" },
      { label: "HR Glossary", href: "/glossary" },
      { label: "Calculators", href: "/tools" },
      { label: "Blog", href: "/blog" },
      { label: "Implementation", href: "/hrms-implementation" },
      { label: "Data migration", href: "/hrms-data-migration" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Security", href: "/security" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
      { label: "HRMS comparison", href: "/compare" },
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
      {/* CTA band */}
      <Container className="py-12">
        <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-white p-7 shadow-[var(--shadow-card)] sm:flex-row sm:items-center">
          <div>
            <p className="text-lg font-bold text-ink">
              Ready to see NeevHR on your own numbers?
            </p>
            <p className="mt-1 text-sm text-body">
              A tailored walkthrough for your team, no generic slide deck.
            </p>
          </div>
          <div className="flex gap-3">
            <Button href="/demo">Book a demo</Button>
            <Button href="/pricing" variant="secondary">
              See pricing
            </Button>
          </div>
        </div>
      </Container>

      <Container className="pb-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
          <div>
            <BrandMark />
            <p className="mt-4 max-w-xs text-sm text-muted">
              NeevHR is an India-first HRMS and payroll software platform for
              growing and mid-market businesses.
            </p>
            <StoreBadges className="mt-6" />
            <div className="mt-6 space-y-1.5 text-sm text-muted">
              <a
                href={`mailto:${site.email}`}
                className="block transition-colors hover:text-brand"
              >
                {site.email}
              </a>
              <a
                href={`tel:${site.phone.replace(/\s/g, "")}`}
                className="block transition-colors hover:text-brand"
              >
                {site.phone}
              </a>
            </div>
            <ul className="mt-4 flex items-center gap-3">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid h-9 w-9 place-items-center rounded-full border border-line bg-white text-muted transition-colors hover:border-brand hover:text-brand"
                  >
                    <SocialIcon name={s.icon} className="h-[18px] w-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs font-medium text-muted">
              Made in India · Data hosted in India
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-muted transition-colors hover:text-brand"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} NeevHR. Made in India for Indian teams.</p>
          <p>
            Prices in INR. Product illustrations use sample data.
          </p>
        </div>
      </Container>
    </footer>
  );
}
