import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { moduleHref } from "@/lib/module-nav";
import { tools } from "@/lib/tools";
import { industries } from "@/lib/industries";
import { guides } from "@/lib/guides";
import { glossary } from "@/lib/glossary";
import { states } from "@/lib/states";

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
    "- Security: Postgres row-level tenant isolation, field-level AES-256-GCM encryption of PAN/Aadhaar/UAN/bank details, TOTP MFA, hosted in India (Mumbai)",
    "- Integrations available: biometric devices over ADMS (iClock) push, email, SMS, WhatsApp, browser push, API keys, signed webhooks, CSV import/export, journal voucher CSV",
    "- AI: fully AI enabled, with AI inside each module and an assistant; everything is a labelled suggestion and a person decides; a switch per module, off until switched on; prepaid credits; the same input is not charged twice; shown only under the person's own permissions",
    "- AI inside modules: resume match, payroll change explanation, expense receipt reading, helpdesk category and reply draft, report from a sentence, tax proof reading, review, goal, 1:1 and letter drafts, survey summary, attrition reasons (department level, not a prediction), learning suggestions, setup from Excel or a leave policy PDF",
    "- AI assistant: answers from the company's own records within each person's role, explains why a payroll run or approval is blocked, drafts requests the person confirms, read only in pay and talent modules",
    "- AI data: goes to Anthropic, which may process it outside India. The assistant's tools do not read bank, PAN, Aadhaar, UAN, ESI number, address, health or disciplinary data. On-screen AI, when switched on, can send cleaned resume text and uploaded receipts or proofs as whole files, and a file can contain what is printed on it. Proofs on the 80D, 80DD, 80DDB and 80U lines are not sent. Disciplinary and POSH have no AI",
    "- OKR and goal cascade: company and team objectives with key results, personal goals linked, progress rolled up per review cycle",
    "- Disciplinary cases: notices, replies, inquiry and outcome on one dated case, under its own permission",
    "- POSH complaint route: confidential complaint from self-service that only the Internal Committee reads; committee set-up, case steps and an annual report with no names",
    "- Approvals from Slack, Microsoft Teams and WhatsApp: connected per company with a setup guide for each, using the company's own app or business account; money and pay requests only open in NeevHR",
    `- Implementation: ${site.implementation}`,
    "- Pricing: based on employee count, modules, implementation and integrations; edition-based, in INR; quote on request",
    "",
    "## Not available today (stated for accuracy)",
    "- Mobile app: coming soon (not yet in the App Store or Google Play); web self-service is available",
    "- Hindi: employee self-service only; admin screens and the mobile app are in English",
    "- Single sign-on: Google available and Microsoft being switched on, per company; SAML not available",
    "- Live connection to Tally or Zoho Books: not available; accounting files are downloaded and imported",
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
    "## State payroll guides",
    ...states.map((st) => `- [${st.name} payroll: PT, LWF and rules](${u}/india/payroll/${st.slug})`),
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
