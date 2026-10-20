import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { sendLeadNotification } from "@/lib/email";
import { pushLeadToCrm } from "@/lib/crm";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const dateRe = /^\d{4}-\d{2}-\d{2}$/;

// Trimmed optional text, capped so a crafted request cannot bloat a row.
const opt = (v: unknown, max = 200) => String(v ?? "").trim().slice(0, max) || undefined;

const SIZES = [
  "Under 100",
  "100 - 500",
  "500 - 1,000",
  "1,000 - 2,500",
  "2,500 - 5,000",
  "5,000+",
  "Other",
] as const;
type Size = (typeof SIZES)[number];

function toSize(v: unknown): Size | undefined {
  const s = String(v ?? "").trim();
  return (SIZES as readonly string[]).includes(s) ? (s as Size) : undefined;
}

type Intent = "demo" | "quote";
function toIntent(v: unknown): Intent {
  return String(v ?? "").trim() === "quote" ? "quote" : "demo";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, store nothing.
  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const company = String(body.company ?? "").trim();
  const intent = toIntent(body.intent);
  const rawDate = String(body.preferredDate ?? "").trim();
  const preferredDate = dateRe.test(rawDate) ? rawDate : undefined;

  if (!name || !company || !emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid work email and company." },
      { status: 422 }
    );
  }

  let leadId: string | undefined;
  try {
    const payload = await getPayload({ config });
    const doc = await payload.create({
      collection: "leads",
      // Local API overrides access control, so create() is allowed here only.
      data: {
        name,
        email,
        company,
        intent,
        size: toSize(body.size),
        phone: opt(body.phone, 40),
        role: opt(body.role),
        currentHrms: opt(body.currentHrms),
        requirement: opt(body.requirement),
        preferredDate: preferredDate,
        message: opt(body.message, 2000),
        status: "new",
      },
    });
    leadId = String(doc.id);
  } catch (err) {
    console.error("Lead create failed:", err);
    return NextResponse.json(
      { error: "Could not save your request. Please email us directly." },
      { status: 500 }
    );
  }

  // Push into the admin console's Sales Lead CRM (best effort; the lead is already saved here).
  try {
    await pushLeadToCrm({
      name,
      email,
      company,
      intent,
      size: toSize(body.size),
      phone: opt(body.phone, 40),
      role: opt(body.role),
      currentHrms: opt(body.currentHrms),
      requirement: opt(body.requirement),
      preferredDate,
      message: opt(body.message, 2000),
      channel: body.channel === "popup" ? "popup" : "form",
      page: opt(body.page),
      externalRef: leadId ? `payload:${leadId}` : undefined,
    });
  } catch (err) {
    console.error("Lead CRM push failed:", err);
  }

  // Notify by email (best effort; never blocks the response).
  try {
    await sendLeadNotification({
      name,
      email,
      company,
      intent,
      size: toSize(body.size),
      phone: opt(body.phone, 40),
      role: opt(body.role),
      currentHrms: opt(body.currentHrms),
      requirement: opt(body.requirement),
      preferredDate,
      message: opt(body.message, 2000),
    });
  } catch (err) {
    console.error("Lead email failed:", err);
  }

  return NextResponse.json({ ok: true });
}
