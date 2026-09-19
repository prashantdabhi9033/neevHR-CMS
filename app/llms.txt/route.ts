import { site } from "@/lib/site";
import { moduleList } from "@/lib/modules";
import { tools } from "@/lib/tools";
import { industries } from "@/lib/industries";

// llms.txt (llmstxt.org): a curated, machine-readable map of the site for
// AI crawlers and LLMs. Served as text/markdown from /llms.txt.
export const dynamic = "force-static";

export function GET() {
  const u = site.url;
  const lines: string[] = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `${site.name} is a configurable, India-only Human Resource Management System (HRMS) for mid-market companies with 500 to 5,000 employees. It covers payroll with PF, ESI, PT and TDS statutory accuracy, attendance, leave, performance, recruitment and employee self-service on web and mobile, on one effective-dated employee record. Implementations go live in 4 to 8 weeks and are configured by a trained HR admin.`,
    "",
    "## Key pages",
    `- [Product overview](${u}/features): All HR modules on one platform`,
    `- [Pricing](${u}/pricing): Edition-based packaging for the Indian mid-market`,
    `- [Why NeevHR](${u}/compare): How NeevHR compares to tier-one suites and point tools`,
    `- [Security & compliance](${u}/security): Tenant isolation, RBAC, audit trail, DPDP Act 2023`,
    `- [Mobile app](${u}/mobile): Employee self-service on any phone`,
    `- [Integrations](${u}/integrations): How NeevHR connects to your stack`,
    `- [Company](${u}/company): Who builds NeevHR`,
    `- [Book a demo](${u}/demo): Request a personalised walkthrough`,
    `- [Get a quote](${u}/demo?intent=quote): Request pricing sized to your team`,
    `- [FAQ](${u}/faq): Common questions about NeevHR`,
    `- [Blog](${u}/blog): Guides on Indian HR, payroll and compliance`,
    "",
    "## Modules",
    ...moduleList.map((m) => `- [${m.name}](${u}/features/${m.slug})`),
    "",
    "## Free HR & payroll calculators",
    ...tools.map((t) => `- [${t.name}](${u}/tools/${t.slug})`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${site.name} for ${i.name}](${u}/industries/${i.slug})`),
    "",
    "## Contact",
    `- Email: ${site.email}`,
    ...(site.phone ? [`- Phone: ${site.phone}`] : []),
    ...(site.socials.length
      ? [`- Social: ${site.socials.map((s) => s.href).join(", ")}`]
      : []),
    "",
    "## Notes",
    "- India-only product: INR, the India financial year and India statutory law (PF, ESI, PT, LWF, TDS, gratuity, bonus, POSH, DPDP Act 2023).",
    "- Available in English and Hindi.",
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
