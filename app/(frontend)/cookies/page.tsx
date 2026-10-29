import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const metadata: Metadata = pageMeta({
  title: "Cookie Policy",
  description:
    "The cookies and browser storage the NeevHR website uses, why, for how long, and how to refuse or withdraw consent under the DPDP Act 2023.",
  path: "/cookies",
});

// Checked against the code on 29 Oct 2026: GA4 (components/site/Analytics.tsx),
// the lead pop-up storage keys (components/site/LeadPopup.tsx) and the Payload
// admin session cookie. Keep this table in step with what the site sets.
const lastUpdated = "29 Oct 2026";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 space-y-4">
      <h2 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">{title}</h2>
      {children}
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-line">
      <table className="w-full min-w-[560px] border-collapse text-left text-sm">
        <thead className="bg-surface-soft text-ink">
          <tr>
            {head.map((h) => (
              <th key={h} className="border-b border-line px-4 py-3 font-semibold">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="align-top">
              {r.map((c, j) => (
                <td key={j} className={`border-b border-line px-4 py-3 ${j === 0 ? "font-medium text-ink" : ""}`}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const linkCls = "font-medium text-brand hover:underline";

export default function CookiesPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Cookie Policy", href: "/cookies" }]} />
      <PageHeader
        eyebrow="Legal"
        title="Cookie Policy"
        sub={`Which cookies and browser storage the NeevHR website uses, and how you can control them. Last updated ${lastUpdated}.`}
      />
      <section className="py-14">
        <Container className="max-w-3xl space-y-12 text-[15px] leading-relaxed text-body">
          <Section id="what" title="1. What cookies are">
            <p>
              A cookie is a small text file a website saves in your browser. Local storage and session storage are
              similar browser features that keep small settings on your device. This policy covers all three on{" "}
              {site.url.replace("https://", "")} (the &ldquo;Website&rdquo;). It forms part of our{" "}
              <Link href="/privacy" className={linkCls}>Privacy Policy</Link>, which explains how we handle personal
              data under the Digital Personal Data Protection Act, 2023 (DPDP Act).
            </p>
          </Section>

          <Section id="list" title="2. What we use">
            <Table
              head={["Name", "Type", "Purpose", "Duration"]}
              rows={[
                ["_ga", "Analytics cookie (Google Analytics 4)", "Tells visits apart so we can count pages viewed and see which content helps. IP addresses are anonymised.", "2 years"],
                ["_ga_<ID>", "Analytics cookie (Google Analytics 4)", "Keeps the state of the current visit for the same statistics", "2 years"],
                ["neevhr_lead_popup", "Local storage", "Remembers that you closed or answered the demo pop-up, so it does not reappear", "3 days after closing, 180 days after submitting"],
                ["neevhr_pages, neevhr_popup_shown, neevhr_popup_variant", "Session storage", "Counts pages in this visit and records whether the pop-up was shown, and which version", "Until you close the tab"],
                ["payload-token", "Essential cookie (site admin only)", "Keeps NeevHR staff signed in to the content admin at /admin. Not set for visitors.", "The admin session"],
              ]}
            />
            <p>
              We do not use advertising, retargeting or cross-site tracking cookies, and we do not sell data collected
              through cookies. Google processes analytics data for us as a processor; see Google&apos;s own privacy policy
              for its practices.
            </p>
          </Section>

          <Section id="consent" title="3. Your choice and withdrawing consent">
            <p>
              The storage needed for the Website to work as you would expect (the pop-up memory and the admin session)
              does not require consent. Analytics cookies are optional. The Website does not yet show a cookie consent
              banner; until it does, you can refuse or withdraw consent for analytics at any time by:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>blocking or deleting cookies for this site in your browser settings;</li>
              <li>installing Google&apos;s Analytics opt-out browser add-on; or</li>
              <li>writing to us, and we will help you.</li>
            </ul>
            <p>Withdrawing consent does not affect processing that happened before you withdrew it.</p>
          </Section>

          <Section id="contact" title="4. Contact">
            <p>
              Questions about cookies, or a grievance about how we handle your data, can be sent to our Grievance
              Officer at{" "}
              <a href={`mailto:${site.email}`} className={linkCls}>
                {site.email}
              </a>
              . The full contact details and your rights are in the{" "}
              <Link href="/privacy#contact" className={linkCls}>Privacy Policy</Link>.
            </p>
          </Section>
        </Container>
      </section>
    </>
  );
}
