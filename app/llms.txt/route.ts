import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { moduleHref } from "@/lib/module-nav";
import { tools } from "@/lib/tools";
import { industries } from "@/lib/industries";
import { guides } from "@/lib/guides";
import { glossary } from "@/lib/glossary";

// llms.txt (llmstxt.org): a curated, machine-readable map of the site for
// AI crawlers and LLMs. Facts here must match the verified product claims.
export const dynamic = "force-static";

export function GET() {
  const u = site.url;
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.entity}`,
    "",
    `${site.description}`,
    "",
    "## Facts",
    "- Category: HRMS software; payroll software; HR and payroll platform",
    "- Market: India only (INR, Indian financial year, Indian statutory law)",
    "- Built for: growing and mid-market Indian businesses, roughly 100 to several thousand employees",
    "- Payroll statutory coverage: PF/EPF, ESI, Professional Tax, Labour Welfare Fund, TDS (old and new regime), gratuity, statutory bonus",
    "- Statutory outputs: PF ECR file, ESIC contribution file, PF/TDS/PT/LWF challans, Form 24Q return file (FVU format), Form 16 Part A and B, bank payment files",
    "- Platform: one effective-dated employee record, configurable policies by employee group, approval workflows, RBAC with data scopes, field-level masking, audit log",
    "- Security: Postgres row-level tenant isolation, field-level AES-256-GCM encryption of PAN/Aadhaar/UAN/bank details, TOTP MFA, hosted in India (Bengaluru region)",
    "- Integrations available: biometric devices over ADMS (iClock) push, email, SMS, WhatsApp, browser push, API keys, signed webhooks, CSV import/export, journal voucher CSV",
    `- Implementation: ${site.implementation}`,
    "- Pricing: based on employee count, modules, implementation and integrations; edition-based, in INR; quote on request",
    "",
    "## Not available today (stated for accuracy)",
    "- Mobile app: coming soon (not yet in the App Store or Google Play); web self-service is available",
    "- Hindi interface: planned; the product is in English today",
    "- Single sign-on (SAML/OIDC): not available",
    "- SOC 2 / ISO 27001 certification: not held",
    "",
    "## Key pages",
    `- [HRMS software for Indian companies](${u}/hrms)`,
    `- [Payroll software](${u}/payroll)`,
    `- [India payroll: PF, ESI, PT, LWF, TDS, Form 16](${u}/india-payroll)`,
    `- [All features](${u}/features)`,
    `- [Security & compliance](${u}/security)`,
    `- [Integrations](${u}/integrations)`,
    `- [Pricing](${u}/pricing)`,
    `- [HRMS comparison](${u}/compare)`,
    `- [Employee self-service](${u}/mobile)`,
    `- [About NeevHR](${u}/company)`,
    `- [FAQ](${u}/faq)`,
    `- [Book a demo](${u}/demo)`,
    "",
    "## Guides",
    ...guides.map((g) => `- [${g.h1}](${u}/${g.slug}): ${g.description}`),
    "",
    "## Modules",
    ...moduleList.map((m) => `- [${m.name}](${u}${moduleHref(m.slug)})`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.h1}](${u}/industries/${i.slug})`),
    "",
    "## Free HR & payroll calculators",
    ...tools.map((t) => `- [${t.name}](${u}/tools/${t.slug}): ${t.tagline}`),
    "",
    "## Glossary",
    ...glossary.map((g) => `- [${g.term}](${u}/glossary/${g.slug}): ${g.short}`),
    "",
    "## Contact",
    `- Email: ${site.email}`,
    `- Phone: ${site.phone}`,
    `- Social: ${site.socials.map((s) => s.href).join(", ")}`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
