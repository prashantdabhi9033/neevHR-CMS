import { BrandMark } from "@/components/brand/BrandMark";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StoreBadges } from "@/components/site/StoreBadges";
import { SocialIcon } from "@/components/site/SocialIcon";
import { site } from "@/lib/site";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Overview", href: "/features" },
      { label: "Payroll", href: "/features/payroll" },
      { label: "Attendance", href: "/features/attendance" },
      { label: "Leave", href: "/features/leave" },
      { label: "Performance", href: "/features/performance" },
      { label: "Recruitment", href: "/features/recruitment" },
    ],
  },
  {
    title: "More modules",
    links: [
      { label: "Onboarding", href: "/features/onboarding" },
      { label: "Compliance", href: "/features/compliance" },
      { label: "Expenses", href: "/features/expenses" },
      { label: "Mobile app", href: "/mobile" },
      { label: "Reports & analytics", href: "/features/reports" },
      { label: "See all 20+ →", href: "/features" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/company" },
      { label: "Industries", href: "/industries" },
      { label: "Why NeevHR", href: "/compare" },
      { label: "Security", href: "/security" },
      { label: "Integrations", href: "/integrations" },
      { label: "Pricing", href: "/pricing" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/faq" },
      { label: "Free tools", href: "/tools" },
      { label: "Take-home calculator", href: "/tools/take-home-salary-calculator" },
      { label: "Gratuity calculator", href: "/tools/gratuity-calculator" },
      { label: "HRA calculator", href: "/tools/hra-calculator" },
      { label: "Contact", href: "/contact" },
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
            <h3 className="text-lg font-bold text-ink">
              Ready to see NeevHR on your own numbers?
            </h3>
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
              HR built on a stronger foundation. One configurable, India-first
              platform for payroll, people, attendance and compliance.
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
              Made in India · English &amp; Hindi
            </p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href + l.label}>
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
          <p>
            Prices in INR. India statutory compliance built in. · Last updated{" "}
            {new Date().toLocaleDateString("en-IN", {
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </Container>
    </footer>
  );
}
