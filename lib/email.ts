import nodemailer from "nodemailer";

export type LeadEmail = {
  name: string;
  email: string;
  company: string;
  intent?: "demo" | "quote";
  size?: string;
  phone?: string;
  role?: string;
  message?: string;
};

// Sends a notification email for a new demo request. No-ops (does not throw)
// if SMTP is not configured, so a missing config never breaks the form.
export async function sendLeadNotification(lead: LeadEmail): Promise<void> {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.LEAD_NOTIFY_TO || "hello@neevhr.com";

  if (!user || !pass) return; // not configured

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

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
    ["Message", lead.message],
  ];
  const html = `
    <h2 style="margin:0 0 12px">New ${kind} request</h2>
    <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
      ${rows
        .filter(([, v]) => v)
        .map(
          ([k, v]) =>
            `<tr><td style="color:#64748b">${k}</td><td style="font-weight:600">${v}</td></tr>`,
        )
        .join("")}
    </table>
    <p style="color:#94a3b8;font-size:12px;margin-top:16px">Sent from the NeevHR website.</p>`;

  await transporter.sendMail({
    from: `"NeevHR Website" <${user}>`,
    to,
    replyTo: lead.email,
    subject: `New ${kind} request: ${lead.company} (${lead.name})`,
    html,
  });
}
