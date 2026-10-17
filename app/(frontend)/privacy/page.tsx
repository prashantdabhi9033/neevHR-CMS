import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How NeevHR collects, uses, shares and protects personal data across the NeevHR website, web application and mobile app, and how to exercise your rights under the DPDP Act 2023.",
  path: "/privacy",
});

// Facts in this policy were checked against the product, the mobile app and the
// hosting setup on 17 Oct 2026. Update `lastUpdated` whenever the substance changes,
// and keep the sub-processor table in step with what is actually configured.
const lastUpdated = "17 Oct 2026";

// OWNER TO CONFIRM before the app-store submission: the registered legal entity name,
// its registered address and the named Grievance Officer (IT Rules 2011, rule 5(9)).
// Until then the policy names the brand and a role-based contact.
const contact = {
  controller: "NeevHR",
  email: site.email,
  grievanceOfficer: "Grievance Officer, NeevHR",
  address: "India",
};

const toc = [
  { id: "scope", t: "Scope" },
  { id: "roles", t: "Our role" },
  { id: "collect", t: "Data we collect" },
  { id: "app", t: "Mobile app" },
  { id: "use", t: "How we use it" },
  { id: "never", t: "What we never do" },
  { id: "share", t: "Sharing" },
  { id: "location", t: "Where data is stored" },
  { id: "security", t: "Security" },
  { id: "retention", t: "Retention" },
  { id: "rights", t: "Your rights" },
  { id: "children", t: "Children" },
  { id: "cookies", t: "Cookies" },
  { id: "changes", t: "Changes" },
  { id: "contact", t: "Contact & grievances" },
];

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

const Mail = () => (
  <a href={`mailto:${contact.email}`} className="font-medium text-brand hover:underline">
    {contact.email}
  </a>
);

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", href: "/privacy" }]} />
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        sub={`How we collect, use, share and protect personal data across the NeevHR website, web application and mobile app. Last updated ${lastUpdated}.`}
      />

      <nav aria-label="On this page" className="border-b border-line">
        <Container className="flex flex-wrap gap-2 py-3">
          {toc.map((x) => (
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

      <section className="py-14">
        <Container className="max-w-3xl space-y-12 text-[15px] leading-relaxed text-body">
          <Section id="scope" title="1. Who we are and what this policy covers">
            <p>
              {contact.controller} (&ldquo;NeevHR&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) provides an India-first HRMS and
              payroll platform for businesses. This policy explains how we handle personal data when you:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>visit our website, {site.url.replace("https://", "")} (the &ldquo;Website&rdquo;);</li>
              <li>request a demo, contact us or become a customer;</li>
              <li>use the NeevHR web application (the &ldquo;Platform&rdquo;); or</li>
              <li>use the NeevHR mobile app for Android and iOS (the &ldquo;App&rdquo;).</li>
            </ul>
            <p>
              We follow the Digital Personal Data Protection Act, 2023 and the Digital Personal Data Protection Rules,
              2025 as their provisions come into force, together with the Information Technology Act, 2000 and the
              rules made under it.
            </p>
          </Section>

          <Section id="roles" title="2. Our role: Data Fiduciary or Data Processor">
            <p>Our role depends on whose data it is and why it is processed.</p>
            <Table
              head={["Whose data", "Our role", "Who decides how it is used"]}
              rows={[
                [
                  "Website visitors, people who request a demo or contact us, and our customers' account and billing contacts",
                  "Data Fiduciary",
                  "NeevHR, as described in this policy",
                ],
                [
                  "Employees, candidates, contractors and their family or nominees, whose records an employer keeps on the Platform or App",
                  "Data Processor",
                  "The employer (our customer), who is the Data Fiduciary. We process this data only on the employer's documented instructions and under our customer agreement.",
                ],
              ]}
            />
            <p>
              <strong className="text-ink">If you are an employee</strong> using NeevHR through your employer, your
              employer decides what data is collected about you, why, and for how long. Please send requests about your
              employment records to your employer&apos;s HR team first, or use the data request option in employee
              self-service. If you contact us, we will pass your request to your employer and help them respond.
            </p>
          </Section>

          <Section id="collect" title="3. Personal data we collect">
            <h3 className="text-base font-semibold text-ink">3.1 On the Website</h3>
            <Table
              head={["Data", "Source", "Purpose"]}
              rows={[
                [
                  "Name, work email, company, phone, role, company size, current HR system, requirement, preferred demo date and your message",
                  "You, through the demo or contact form",
                  "To respond to your enquiry, arrange a demo and follow up about NeevHR",
                ],
                [
                  "Pages visited, referring page, approximate location, device and browser type",
                  "Google Analytics, with IP anonymisation switched on",
                  "To understand how the Website is used and improve it",
                ],
                [
                  "A note in your browser that you closed our pop-up",
                  "Your browser's local storage",
                  "So we do not show the pop-up again for a while",
                ],
              ]}
            />

            <h3 className="pt-2 text-base font-semibold text-ink">3.2 Customer account data</h3>
            <p>
              Names, work email addresses and phone numbers of customer administrators and contacts, company and billing
              details, contracts, support tickets and our correspondence with you. We use this to provide the service,
              invoice, support you and meet legal obligations.
            </p>

            <h3 className="pt-2 text-base font-semibold text-ink">3.3 On the Platform and App, on behalf of employers</h3>
            <p>
              Employers configure which of the following they collect. Depending on that setup and the modules in use,
              the Platform may hold:
            </p>
            <Table
              head={["Category", "Examples"]}
              rows={[
                ["Identity and contact", "Name, photo, date of birth, gender, personal and work contact details, address, emergency contacts"],
                ["Employment", "Employee code, designation, grade, department, location, manager, dates of joining and exit, employment history"],
                ["Statutory identifiers", "PAN, Aadhaar, UAN, ESI number, passport or other identity documents the employer requires"],
                ["Pay and finance", "Salary structure, payslips, tax declarations and proofs, bank account and IFSC, loans, advances, reimbursements and expenses"],
                ["Time and attendance", "Punch times, attendance device logs, shifts, timesheets, leave and holidays"],
                ["Location", "Location at punch-in or punch-out, and for field workers who consent, location during working hours"],
                ["Health and family", "Medical certificates attached to leave, insurance and benefit enrolments, family members and nominees"],
                ["Performance and talent", "Goals, reviews, feedback, learning records, recognition and survey responses"],
                ["Recruitment", "Candidate applications, CVs, interview feedback and offers"],
                ["Exit", "Resignation details, clearances, full and final settlement and exit survey responses"],
                ["Documents", "Letters, certificates and other files uploaded by HR or the employee"],
                ["Usage and security", "Sign-in history, IP address, device type, app version, audit trail of changes, notification preferences"],
              ]}
            />
          </Section>

          <Section id="app" title="4. The NeevHR mobile app">
            <p>
              The App is for employees whose employer uses NeevHR. Accounts are created by the employer, so you cannot
              sign up in the App yourself. The App asks for device permissions only when a feature needs them, and you can
              turn each one off in your phone&apos;s settings.
            </p>
            <Table
              head={["Permission", "When it is used", "What we receive"]}
              rows={[
                [
                  "Location (while using the App)",
                  "When you punch in or out, if your employer uses location-based attendance",
                  "Your location at the moment of the punch",
                ],
                [
                  "Location (background)",
                  "Only for field workers, only after you give consent, and only during working hours",
                  "Periodic location points shared with your manager. Tracking stops outside working hours and as soon as you withdraw consent.",
                ],
                [
                  "Camera and photos",
                  "When you choose to photograph or attach a document, such as a receipt or medical certificate",
                  "Only the image you choose to upload",
                ],
                [
                  "Face ID, fingerprint or device PIN",
                  "To unlock the App",
                  "Nothing. Your phone's operating system does the check, and your biometric data never leaves your device.",
                ],
                [
                  "Notifications",
                  "To alert you to approvals, payslips, leave decisions and other updates",
                  "A device token used only to deliver notifications",
                ],
              ]}
            />
            <p>
              The App also sends its version number and platform with each request, so we can keep it compatible and
              prompt you to update. If the App crashes, a crash report with technical details (device model, OS version,
              App version and the error) is sent to us. Crash reports do not include your name, salary or other HR
              records.
            </p>
            <p>
              To protect your data, the App stores only a limited set of your own non-sensitive information on the
              device for offline use, and encrypts it. It does not store approvals, pay data, loans, expenses or
              colleagues&apos; details on the device. Downloaded payslips and documents are deleted when you sign out.
              The App contains no advertising and no third-party tracking.
            </p>
          </Section>

          <Section id="use" title="5. How and why we use personal data">
            <Table
              head={["Purpose", "Basis"]}
              rows={[
                ["Responding to enquiries and arranging demos", "Your consent, given when you submit the form"],
                ["Providing, securing and supporting the Platform and App for our customers", "Our contract with the customer, and the employer's instructions for employee data"],
                ["Sending service messages, such as sign-in codes, password resets, approvals and payslip alerts", "Needed to provide the service you or your employer asked for"],
                ["Preventing fraud and misuse, keeping audit logs and investigating security incidents", "Legitimate use for security, and legal obligations"],
                ["Website analytics and improving our products, using aggregated or de-identified data", "Your consent and legitimate use"],
                ["Meeting legal, tax and regulatory obligations, and responding to lawful requests", "Compliance with law"],
                ["Occasional updates about NeevHR to business contacts", "Your consent. You can unsubscribe at any time."],
              ]}
            />
            <p>
              Where we rely on consent, you can withdraw it at any time, as easily as you gave it. Withdrawal does not
              affect processing that happened before it.
            </p>
          </Section>

          <Section id="never" title="6. What we never do">
            <ul className="list-disc space-y-1 pl-5">
              <li>We do not sell or rent personal data.</li>
              <li>We do not use employee data for advertising, and the App has no ads.</li>
              <li>We do not use our customers&apos; employee data to train artificial intelligence models.</li>
              <li>We do not access an employer&apos;s data except to provide or support the service, when the customer asks us to, or when the law requires it.</li>
            </ul>
          </Section>

          <Section id="share" title="7. Who we share data with">
            <p>
              We use a small number of service providers (sub-processors). Each is bound by a contract to protect the data
              and use it only to provide its service to us.
            </p>
            <Table
              head={["Provider", "Service", "Data location"]}
              rows={[
                ["DigitalOcean", "Cloud hosting, application servers and the managed database", "India (Bengaluru)"],
                ["Brevo", "Sending transactional email, such as invitations, password resets and notifications", "European Union"],
                ["Google Firebase", "Delivering mobile push notifications (Cloud Messaging) and App crash reports (Crashlytics)", "Google global infrastructure"],
                ["Google Analytics", "Website usage statistics (Website only, never the Platform or App)", "Google global infrastructure"],
                ["Google Workspace", "Our business email, including messages from the Website contact form", "Google global infrastructure"],
              ]}
            />
            <p>We may also share personal data:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>with the employer, for data we process on its behalf;</li>
              <li>
                with integrations the employer chooses to switch on, such as attendance devices, accounting systems or
                SMS and WhatsApp providers, under the employer&apos;s instructions;
              </li>
              <li>
                with government authorities, courts or regulators when the law requires it. Statutory returns such as PF,
                ESI and TDS filings are prepared by and submitted by the employer.
              </li>
              <li>
                with a buyer or successor if our business is merged or sold, under confidentiality obligations and this
                policy.
              </li>
            </ul>
          </Section>

          <Section id="location" title="8. Where your data is stored">
            <p>
              The Platform&apos;s application and database are hosted in India, in the Bengaluru region. Some service
              providers listed above process limited data outside India, for example to deliver an email or a
              notification. We transfer personal data outside India only as permitted under the DPDP Act, 2023, and never
              to a country the Government of India has restricted.
            </p>
          </Section>

          <Section id="security" title="9. How we protect personal data">
            <ul className="list-disc space-y-1 pl-5">
              <li>Encryption in transit (HTTPS) for all traffic to the Website, Platform and App.</li>
              <li>Field-level AES-256 encryption for PAN, Aadhaar, UAN, ESI number and bank details, on top of encrypted database storage.</li>
              <li>Strict separation of each customer&apos;s data, enforced inside the database by row-level security.</li>
              <li>Role-based access with data scopes and field masking, so people see only what their role allows.</li>
              <li>Multi-factor authentication, mandatory for privileged administrator roles, plus session timeouts and account lockout.</li>
              <li>An audit trail of changes, and password-protected payslip PDFs.</li>
              <li>App lock with biometrics or device PIN, encrypted on-device storage, and blocked screenshots on Android.</li>
            </ul>
            <p>
              See our <Link href="/security" className="font-medium text-brand hover:underline">Security &amp; Compliance</Link>{" "}
              page for more detail. No system is completely secure. If a personal data breach occurs, we will inform
              affected customers without undue delay and support them in notifying the Data Protection Board of India and
              affected individuals, as the DPDP Act requires. Where we are the Data Fiduciary, we will make those
              notifications ourselves.
            </p>
          </Section>

          <Section id="retention" title="10. How long we keep data">
            <Table
              head={["Data", "Retention"]}
              rows={[
                ["Demo and contact requests", "Up to 24 months after our last contact with you, unless you become a customer or ask us to delete it sooner"],
                ["Customer account and billing records", "For the contract, then as long as tax and accounting law requires (generally 8 years)"],
                [
                  "Employee data on the Platform",
                  "As set by the employer's retention schedules, which can reflect statutory periods under labour, tax and social security laws. When a contract ends, the employer can export its data, after which we delete it within 90 days, except where the law requires us to keep it.",
                ],
                ["Security and access logs", "At least one year, as the DPDP Rules require, and then deleted on a schedule"],
                ["Backups", "Overwritten on a rolling schedule. Deleted data leaves the backups as they expire."],
              ]}
            />
          </Section>

          <Section id="rights" title="11. Your rights">
            <p>Under the DPDP Act, 2023 you have the right to:</p>
            <ul className="list-disc space-y-1 pl-5">
              <li>get a summary of the personal data processed about you, and of who it has been shared with;</li>
              <li>correct, complete or update inaccurate or incomplete data;</li>
              <li>have your data erased when it is no longer needed for its purpose, unless the law requires us to keep it;</li>
              <li>withdraw consent where processing is based on consent;</li>
              <li>have your grievances addressed; and</li>
              <li>nominate another person to exercise these rights if you die or become incapacitated.</li>
            </ul>
            <p>
              <strong className="text-ink">Employees:</strong> please use the data request option in employee self-service
              or contact your employer&apos;s HR team, because your employer controls your records.{" "}
              <strong className="text-ink">Everyone else:</strong> email <Mail />. We may need to verify your identity
              before acting on a request. We respond as quickly as we can, and within the period the law sets.
            </p>
          </Section>

          <Section id="children" title="12. Children">
            <p>
              The Website, Platform and App are meant for businesses and their working-age staff. We do not knowingly
              collect personal data from anyone under 18 except where an employer must lawfully keep it, for example a
              dependant or nominee in an employee&apos;s record. In that case the employer is responsible for obtaining
              any consent the law requires. If you believe a child has given us personal data directly, contact us and we
              will delete it.
            </p>
          </Section>

          <Section id="cookies" title="13. Cookies and similar technologies">
            <Table
              head={["Name", "Type", "Purpose", "Duration"]}
              rows={[
                ["_ga, _ga_*", "Analytics cookie (Website)", "Google Analytics: tells visits apart to produce usage statistics", "Up to 2 years"],
                ["Pop-up preference", "Local storage (Website)", "Remembers that you closed the demo pop-up", "Until it expires or you clear it"],
                ["Sign-in session", "Essential (Platform)", "Keeps you securely signed in", "The session, as set by your employer"],
              ]}
            />
            <p>
              We do not use advertising or cross-site tracking cookies. You can block or delete cookies in your browser
              settings, or opt out of Google Analytics with Google&apos;s browser add-on. Blocking essential cookies will stop
              you from signing in to the Platform.
            </p>
          </Section>

          <Section id="changes" title="14. Changes to this policy">
            <p>
              We may update this policy as our services or the law change. We will change the &ldquo;last updated&rdquo;
              date above. If a change is significant, we will tell customers in advance and show a notice on the Website
              or in the App.
            </p>
          </Section>

          <Section id="contact" title="15. Contact us and grievances">
            <p>
              For any question, request or complaint about personal data, contact our {contact.grievanceOfficer}:
            </p>
            <div className="rounded-xl border border-line bg-surface-soft p-5">
              <p className="font-semibold text-ink">{contact.grievanceOfficer}</p>
              <p>
                Email: <Mail />
              </p>
              <p>Address: {contact.address}</p>
            </div>
            <p>
              We acknowledge grievances promptly and aim to resolve them within 30 days. If you are not satisfied with our
              response, you may complain to the Data Protection Board of India.
            </p>
          </Section>
        </Container>
      </section>
    </>
  );
}
