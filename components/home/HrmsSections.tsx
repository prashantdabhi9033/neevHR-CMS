import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";
import { EmployeesVisual } from "@/components/product/EmployeesVisual";
import { taxonomy, hrmsIncludes } from "@/lib/taxonomy";
import { site } from "@/lib/site";

// Shared, content-heavy sections used on the homepage and the /hrms pillar.

export function TaxonomyGrid() {
  return (
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {taxonomy.map((g, i) => (
        <Reveal key={g.group} delay={i * 50}>
          <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-tint text-brand">
                <Icon name={g.icon} />
              </span>
              <h3 className="text-base font-semibold text-ink">{g.group}</h3>
            </div>
            <ul className="mt-4 space-y-2">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-center gap-2 text-sm">
                  <Icon name="check" className="h-4 w-4 shrink-0 text-accent" />
                  {it.href ? (
                    <Link href={it.href} className="text-body transition-colors hover:text-brand">
                      {it.name}
                    </Link>
                  ) : (
                    <span className="text-body">{it.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function WhatIsHrmsSection() {
  return (
    <section id="what-is-hrms" className="scroll-mt-16 border-b border-line bg-surface-soft py-20">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            HRMS explained
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What is an HRMS?
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            An HRMS (Human Resource Management System) is software that helps
            organizations manage employee information, HR processes,
            attendance, leave, payroll, recruitment, performance, documents and
            workforce reporting from a centralized system.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            NeevHR combines these HR functions into one platform so HR,
            payroll, finance, managers and employees can work from the same
            employee record.
          </p>
          <p className="mt-6 text-sm text-muted">
            New to the term? Read the{" "}
            <Link href="/glossary/hrms" className="font-medium text-brand hover:text-brand-dark">
              HRMS definition
            </Link>{" "}
            or compare{" "}
            <Link href="/glossary/hris" className="font-medium text-brand hover:text-brand-dark">
              HRMS and HRIS
            </Link>
            .
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">
              What an HRMS typically covers
            </h3>
            <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {hrmsIncludes.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-body">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm font-medium text-ink">
              NeevHR provides these capabilities in one India-first HRMS platform.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export function OneRecordSection() {
  return (
    <section id="one-record" className="scroll-mt-16 border-b border-line py-20">
      <Container wide className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            The NeevHR difference
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            One Employee Record. One Source of Truth.
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            NeevHR maintains one employee record across the entire HR
            lifecycle. Promotions, transfers, salary revisions, organizational
            changes and other employment events are saved with their dates as
            a full change history, so nothing earlier is overwritten.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            This allows HR and payroll teams to understand employee information
            as it existed at a specific point in time and reduces duplicate
            data entry across HR modules.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Promotions, transfers and pay revisions saved with their dates",
              "Org charts and master reports as of any date",
              "Backdated revisions flow into payroll as arrears",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-body">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
          <Link
            href="/features/employees"
            className="mt-6 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Explore employee management →
          </Link>
        </Reveal>
        <Reveal delay={80}>
          <EmployeesVisual />
        </Reveal>
      </Container>
    </section>
  );
}

// A plain statement of what NeevHR is, near the top of the home page, for people and for search engines.
export function WhatIsNeevhrSection() {
  return (
    <section id="what-is-neevhr" className="scroll-mt-16 border-b border-line bg-white py-14">
      <Container className="grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">What is NeevHR?</h2>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            {site.entity} HR, payroll, finance, managers and employees work from one employee
            record, with Indian statutory rules such as PF, ESI, PT, LWF and TDS built into payroll.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-body">
            It covers{" "}
            <Link href="/features/employees" className="font-medium text-brand hover:text-brand-dark">employee management</Link>,{" "}
            <Link href="/features/attendance" className="font-medium text-brand hover:text-brand-dark">attendance</Link>,{" "}
            <Link href="/features/leave" className="font-medium text-brand hover:text-brand-dark">leave</Link>,{" "}
            <Link href="/payroll" className="font-medium text-brand hover:text-brand-dark">payroll</Link> with{" "}
            <Link href="/india-payroll" className="font-medium text-brand hover:text-brand-dark">PF, ESI, PT, LWF and TDS</Link>,{" "}
            <Link href="/features/recruitment" className="font-medium text-brand hover:text-brand-dark">recruitment</Link> and{" "}
            <Link href="/features/performance" className="font-medium text-brand hover:text-brand-dark">performance</Link>, among more than 30 modules.
          </p>
        </div>
        <div>
          <h3 className="text-base font-semibold text-ink">Who it is for: HRMS for 500 to 5,000+ employees</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-body">
            Indian organisations of roughly 500 to 5,000+ employees that have outgrown
            spreadsheets and disconnected HR tools. It is built for India only.
          </p>
          <p className="mt-3 text-sm text-muted">
            Working out what you need at your size? See the{" "}
            <Link href="/best-hrms-software-india" className="font-medium text-brand hover:text-brand-dark">
              HRMS selection guide for India
            </Link>
            , or the notes for a{" "}
            <Link href="/best-hrms-for-small-business" className="font-medium text-brand hover:text-brand-dark">
              small business
            </Link>
            , a{" "}
            <Link href="/best-hrms-for-mid-sized-business" className="font-medium text-brand hover:text-brand-dark">
              mid-sized business
            </Link>{" "}
            and{" "}
            <Link href="/best-hrms-for-1000-employees" className="font-medium text-brand hover:text-brand-dark">
              1,000 or more employees
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
