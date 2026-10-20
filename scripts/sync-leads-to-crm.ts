// One-off back-fill: copies every lead already saved on the website (Payload "leads") into the NeevHR admin
// console's Sales Lead CRM. Safe to re-run: each lead is sent with its Payload id as externalRef, and the CRM
// ignores a ref it has already received.
//
// Run on the server, from the site folder, after HRMS_LEAD_INTAKE_URL / HRMS_LEAD_INTAKE_KEY are set in .env:
//   set -a; . ./.env; set +a; pnpm payload run scripts/sync-leads-to-crm.ts
import { getPayload } from "payload";
import config from "@payload-config";
import { crmConfigured, pushLeadToCrm } from "../lib/crm";

const str = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim() : undefined);

async function main() {
  if (!crmConfigured()) {
    console.error("Set HRMS_LEAD_INTAKE_URL and HRMS_LEAD_INTAKE_KEY first.");
    process.exit(1);
  }
  const payload = await getPayload({ config });
  let page = 1;
  let sent = 0;
  let skipped = 0;
  let failed = 0;
  for (;;) {
    const res = await payload.find({ collection: "leads", limit: 100, page, sort: "createdAt", overrideAccess: true });
    for (const doc of res.docs) {
      try {
        const out = await pushLeadToCrm({
          name: String(doc.name),
          email: String(doc.email),
          company: String(doc.company),
          intent: doc.intent === "quote" ? "quote" : "demo",
          size: str(doc.size),
          phone: str(doc.phone),
          role: str(doc.role),
          currentHrms: str(doc.currentHrms),
          requirement: str(doc.requirement),
          preferredDate: str(doc.preferredDate),
          message: str(doc.message),
          channel: "form",
          externalRef: `payload:${doc.id}`,
          submittedAt: str(doc.createdAt),
        });
        if (out?.duplicate) skipped += 1;
        else sent += 1;
        console.log(`${out?.duplicate ? "skip" : "sent"}  ${doc.company} (${doc.email}) -> ${out?.ref ?? "?"}`);
      } catch (err) {
        failed += 1;
        console.error(`FAIL  ${doc.company} (${doc.email}):`, err instanceof Error ? err.message : err);
      }
    }
    if (!res.hasNextPage) break;
    page += 1;
  }
  console.log(`Done: ${sent} sent, ${skipped} already in the CRM, ${failed} failed.`);
  process.exit(failed ? 1 : 0);
}

void main();
