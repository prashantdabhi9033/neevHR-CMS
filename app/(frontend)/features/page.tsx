import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { platformCapabilities } from "@/lib/site";
import { moduleGroups } from "@/lib/module-nav";

export const metadata: Metadata = pageMeta({
  title: "HRMS Features: All NeevHR Modules",
  description:
    "Every NeevHR module on one effective-dated employee record: core HR, attendance, leave, payroll and compliance, talent, employee experience and analytics.",
  path: "/features",
});

const whatsNew = [
  { name: "AI assistant", desc: "Answers from your own records, with your admin in control of who uses it and how much.", href: "/features/ai-assistant" },
  { name: "QR code attendance", desc: "Scan at the site with the mobile app, coming soon.", href: "/features/attendance" },
  { name: "Daily-wage and hourly payroll", desc: "Weekly and fortnightly runs from attendance.", href: "/payroll" },
  { name: "Tally and Zoho Books entries", desc: "Vouchers and journals from published payroll.", href: "/payroll" },
  { name: "PF correction and manual PT, LWF", desc: "Correct a filed month and record liabilities.", href: "/features/compliance" },
  { name: "Careers website applications", desc: "From your own website into Recruitment.", href: "/features/recruitment" },
  { name: "Internal jobs and resume parsing", desc: "Open roles for employees, and details suggested from a resume.", href: "/features/recruitment" },
  { name: "1:1 meetings", desc: "Manager and team member, with talking points.", href: "/features/performance" },
  { name: "Digital ID cards and asset QR labels", desc: "ID cards to view and print, labels for your assets.", href: "/features/assets" },
  { name: "Approve from email", desc: "Decide from the request email, once a Company Admin switches it on.", href: "/features/manager-self-service" },
  { name: "Google sign-in", desc: "Sign in with your company's Google account.", href: "/security#sign-in" },
  { name: "Process Studio", desc: "Your own HR flows, from templates.", href: "/features/process-studio" },
  { name: "Travel advance", desc: "Trip limits, auto-adjust and recovery.", href: "/features/expenses" },
  { name: "Data migration workspace", desc: "Dry run, undo, parallel run and sign-off.", href: "/hrms-data-migration" },
];

export default function ProductOverviewPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Features", href: "/features" }]} />
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-white">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black,transparent_65%)]" />
        <Container className="relative py-16 text-center lg:py-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            The platform
          </span>
          <h1 className="mx-auto mt-2 max-w-3xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Every HR process, on one employee record
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-body">
            NeevHR brings the full employee lifecycle into one platform. Every
            change is a dated event on a single timeline, so you can run any
            report as of any date, and every module is a configurable rule set.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button href="/demo" size="lg">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/compare" variant="secondary" size="lg">
              Why NeevHR
            </Button>
          </div>
        </Container>
      </section>

      {/* New */}
      <section className="border-b border-line bg-surface-soft py-14 lg:py-16">
        <Container>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">New in NeevHR</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {whatsNew.map((n) => (
              <Link key={n.name} href={n.href} className="block rounded-xl border border-line bg-white p-4 transition-colors hover:border-brand">
                <span className="text-[15px] font-semibold text-ink">{n.name}</span>
                <p className="mt-1 text-sm leading-relaxed text-body">{n.desc}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Module map */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="space-y-10">
            {moduleGroups.map((grp) => (
              <div key={grp.group}>
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
                    {grp.group}
                  </h2>
                  <p className="text-sm text-muted">{grp.blurb}</p>
                </div>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grp.items.map((m) => (
                    <Link
                      key={m.slug}
                      href={m.href ?? `/features/${m.slug}`}
                      className="group block rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand/40 hover:bg-brand-tint/40"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-[15px] font-semibold text-ink">
                          {m.name}
                        </h3>
                        <span className="text-xs font-semibold text-brand opacity-0 transition-opacity group-hover:opacity-100">
                          View →
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-body">
                        {m.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Platform capabilities */}
      <section className="border-y border-line bg-surface-soft py-16 lg:py-20">
        <Container>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-brand">
              Platform underneath
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink">
              Configurable by design, governed by default
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-body">
              The same cross-cutting platform powers every module, so
              configuration, access and audit work the same way everywhere.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {platformCapabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-base font-semibold text-ink">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="rounded-3xl bg-brand px-8 py-12 text-center shadow-[var(--shadow-float)]">
            <h2 className="text-3xl font-bold text-white">
              One platform for all of HR
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
              See how NeevHR maps to how your team actually runs HR.
            </p>
            <div className="mt-7 flex justify-center">
              <Button href="/demo" size="lg" variant="inverse">
                Book a demo
                <Icon name="arrow" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
