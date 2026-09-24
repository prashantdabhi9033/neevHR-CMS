import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "HRMS Security & Compliance | NeevHR",
  absoluteTitle: true,
  description:
    "How NeevHR protects employee data: Postgres row-level tenant isolation, field-level encryption, RBAC with data scopes, MFA, audit logs, India hosting and DPDP Act 2023 support.",
  path: "/security",
});

// Every control listed is implemented in the product (verified 24 Sep 2026).
const groups: { id: string; title: string; items: { t: string; b: string }[] }[] = [
  {
    id: "application",
    title: "Application security",
    items: [
      { t: "Authentication", b: "Email and password sign-in with account lockout after repeated failed attempts." },
      { t: "MFA", b: "Authenticator-app (TOTP) codes with recovery codes. Each company can make MFA mandatory for every user." },
      { t: "Password policy", b: "At least 12 characters with mixed character types, the last five passwords blocked, and 90-day expiry." },
      { t: "Session management", b: "Per-company idle and absolute session timeouts, a limit on concurrent sessions, and session revocation." },
      { t: "Authorization and RBAC", b: "Permissions are granted through roles, with time-bound grants and separation-of-duties checks on conflicting roles." },
      { t: "Data scopes", b: "Each role sees only the entities, departments or teams in its scope, per module." },
      { t: "Login IP allowlist", b: "Optionally restrict sign-in to your office or VPN IP ranges." },
    ],
  },
  {
    id: "data",
    title: "Data security",
    items: [
      { t: "Tenant isolation", b: "Every company's data is separated by Postgres row-level security enforced in the database. The application connects with a role that cannot bypass it." },
      { t: "Encryption in transit", b: "All traffic to the application is served over HTTPS." },
      { t: "Encryption at rest", b: "PAN, Aadhaar, UAN, ESI number, bank account and IFSC are encrypted at the field level with AES-256-GCM, with key rotation, on top of storage encryption provided by the managed database." },
      { t: "Field-level protection", b: "Sensitive fields can be shown in full, masked or hidden per role, module and data class." },
      { t: "Backup and recovery", b: "Database backups and a documented restore procedure are in place. Recovery objectives are discussed during security review." },
    ],
  },
  {
    id: "privacy",
    title: "Privacy and the DPDP Act 2023",
    items: [
      { t: "Consent", b: "Consent is recorded per purpose, with a consent register." },
      { t: "Data principal rights", b: "Requests for access, correction, erasure, grievance and nomination are logged and tracked to closure, including from employee self-service." },
      { t: "Data retention", b: "Retention schedules define how long each kind of record is kept before purge." },
      { t: "Data deletion", b: "Records past retention are purged by policy, and erasure requests follow a governed process." },
      { t: "Legal hold", b: "Legal hold suspends deletion for records under dispute or investigation." },
    ],
  },
  {
    id: "audit",
    title: "Audit",
    items: [
      { t: "Audit logs", b: "Create, update and delete actions are recorded with who, what and when." },
      { t: "Administrative activity", b: "Settings, policy and configuration changes are logged." },
      { t: "Payroll changes", b: "Payroll runs record compute, verify, approve and publish steps, with separation of duties." },
      { t: "Permission changes", b: "Role assignments, grants and revocations are recorded." },
      { t: "Effective-dated history", b: "Employee changes are kept as dated history rather than overwritten." },
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Security", href: "/security" }]} />
      <PageHeader
        eyebrow="Security & compliance"
        title="NeevHR Security & Compliance"
        sub="Employee and payroll data is among the most sensitive a company holds. This page describes the controls NeevHR operates today, stated plainly."
      />

      <nav aria-label="On this page" className="border-b border-line">
        <Container className="flex flex-wrap gap-2 py-3">
          {[...groups.map((g) => ({ id: g.id, t: g.title })), { id: "infrastructure", t: "Infrastructure" }, { id: "certifications", t: "Certifications" }].map((x) => (
            <a
              key={x.id}
              href={`#${x.id}`}
              className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-body hover:border-brand/40 hover:text-brand"
            >
              {x.t}
            </a>
          ))}
        </Container>
      </nav>

      {groups.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`scroll-mt-20 border-b border-line py-14 lg:py-16 ${gi % 2 ? "bg-surface-soft" : ""}`}
        >
          <Container>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">{g.title}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {g.items.map((c) => (
                <div key={c.t} className="rounded-2xl border border-line bg-white p-6 shadow-[var(--shadow-card)]">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-tint text-brand">
                    <Icon name="shield" className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-[15px] font-semibold text-ink">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{c.b}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      ))}

      <section id="infrastructure" className="scroll-mt-20 border-b border-line bg-ink py-14 text-white lg:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Infrastructure</h2>
          <ul className="mt-6 space-y-3 text-[15px] text-white/80">
            {[
              "Hosted in India, on cloud infrastructure in the Bengaluru region.",
              "Managed PostgreSQL database with row-level security on tenant tables.",
              "Separate environments for staging and production.",
              "Further architecture detail is shared with your IT team during security review.",
            ].map((t) => (
              <li key={t} className="flex items-start gap-2.5">
                <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section id="certifications" className="scroll-mt-20 py-14 lg:py-16">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">Certifications</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            NeevHR does not currently hold SOC 2, ISO/IEC 27001 or other
            third-party security certifications. We will say so here when that
            changes. In the meantime, we walk your IT and information security
            team through the controls above in as much depth as your due
            diligence requires, and answer security questionnaires.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-body">
            Single sign-on (SAML or OpenID Connect) is not available today.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/demo">
              Request a security review
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
            <Button href="/dpdp" variant="secondary">
              DPDP notice
            </Button>
          </div>
          <p className="mt-8 text-sm text-muted">
            Related:{" "}
            <Link href="/privacy" className="text-brand hover:text-brand-dark">Privacy policy</Link>
            {" · "}
            <Link href="/integrations" className="text-brand hover:text-brand-dark">Integrations</Link>
            {" · "}
            <Link href="/faq#security" className="text-brand hover:text-brand-dark">Security FAQ</Link>
          </p>
        </Container>
      </section>
    </>
  );
}
