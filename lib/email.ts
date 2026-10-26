import nodemailer from "nodemailer";

export type LeadEmail = {
  name: string;
  email: string;
  company: string;
  intent?: "demo" | "quote";
  size?: string;
  phone?: string;
  role?: string;
  currentHrms?: string;
  requirement?: string;
  preferredDate?: string;
  message?: string;
};

// Form input is untrusted: escape before placing it in the HTML body.
const esc = (v: string) =>
  v.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

// Sends a notification email for a new demo request to LEAD_NOTIFY_TO (default hello@neevhr.com).
// With BREVO_API_KEY set it goes through Brevo's REST API (the same account and verified sender as the
// HRMS; since 26 Oct 2026, after the SMTP login stopped working on the new server). Otherwise SMTP, as
// before. No-ops (does not throw) when neither is configured, so a missing config never breaks the form;
// a configured send that fails throws, so the route logs it.
export async function sendLeadNotification(lead: LeadEmail): Promise<void> {
  const to = process.env.LEAD_NOTIFY_TO || "hello@neevhr.com";
  const apiKey = process.env.BREVO_API_KEY;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!apiKey && (!user || !pass)) return; // not configured

  const { subject, html } = renderLeadNotification(lead);

  if (apiKey) {
    const from = process.env.LEAD_NOTIFY_FROM || "hello@neevhr.com";
    const res = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: { "api-key": apiKey, "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        sender: { email: from, name: "NeevHR Website" },
        to: [{ email: to }],
        replyTo: { email: lead.email, name: lead.name },
        subject,
        htmlContent: html,
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`Brevo send failed: HTTP ${res.status}`);
    return;
  }

  const port = Number(process.env.SMTP_PORT || 587);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    port,
    secure: port === 465,
    auth: { user, pass },
  });
  await transporter.sendMail({
    from: `"NeevHR Website" <${user}>`,
    to,
    replyTo: lead.email,
    subject,
    html,
  });
}

/** Subject + HTML body of the new-lead notification (form input escaped). */
export function renderLeadNotification(lead: LeadEmail): { subject: string; html: string } {
  const isQuote = lead.intent === "quote";
  const kind = isQuote ? "quote" : "demo";
  const rows: [string, string | undefined][] = [
    ["Name", lead.name],
    ["Work email", lead.email],
    ["Company", lead.company],
    ["Request type", isQuote ? "Quote request" : "Demo request"],
    ["Company size", lead.size],
    ["Phone", lead.phone],
    ["Role", lead.role],
    ["Current HRMS", lead.currentHrms],
    ["Primary requirement", lead.requirement],
    ["Preferred demo date", lead.preferredDate],
    ["Message", lead.message],
  ];
  const html = `
    <h2 style="margin:0 0 12px">New ${kind} request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="color:#64748b">${k}</td><td style="font-weight:600">${esc(String(v))}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="color:#94a3b8;font-size:12px;margin-top:16px">Sent from the NeevHR website.</p>`;

  return { subject: `New ${kind} request: ${lead.company} (${lead.name})`, html };
}
