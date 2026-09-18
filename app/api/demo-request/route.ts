import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { sendLeadNotification } from "@/lib/email";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SIZES = ["500 - 1,000", "1,000 - 2,500", "2,500 - 5,000", "Other"] as const;
type Size = (typeof SIZES)[number];

function toSize(v: unknown): Size | undefined {
  const s = String(v ?? "").trim();
  return (SIZES as readonly string[]).includes(s) ? (s as Size) : undefined;
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

  if (!name || !company || !emailRe.test(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid work email and company." },
      { status: 422 }
    );
  }

  try {
    const payload = await getPayload({ config });
    await payload.create({
      collection: "leads",
      // Local API overrides access control, so create() is allowed here only.
      data: {
        name,
        email,
        company,
        size: toSize(body.size),
        phone: String(body.phone ?? "").trim() || undefined,
        role: String(body.role ?? "").trim() || undefined,
        message: String(body.message ?? "").trim().slice(0, 2000) || undefined,
        status: "new",
      },
    });
  } catch (err) {
    console.error("Lead create failed:", err);
    return NextResponse.json(
      { error: "Could not save your request. Please email us directly." },
      { status: 500 }
    );
  }

  // Notify by email (best effort; never blocks the response).
  try {
    await sendLeadNotification({
      name,
      email,
      company,
      size: toSize(body.size),
      phone: String(body.phone ?? "").trim() || undefined,
      role: String(body.role ?? "").trim() || undefined,
      message: String(body.message ?? "").trim().slice(0, 2000) || undefined,
    });
  } catch (err) {
    console.error("Lead email failed:", err);
  }

  return NextResponse.json({ ok: true });
}
