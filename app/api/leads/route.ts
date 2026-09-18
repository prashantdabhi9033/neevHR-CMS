import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// Temporary lead sink. In build phase B this is replaced by a Payload
// "Leads" collection so the owner views submissions in the CMS admin panel.
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.jsonl");

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  const lead = {
    name,
    email,
    company,
    size: String(body.size ?? "").trim(),
    phone: String(body.phone ?? "").trim(),
    role: String(body.role ?? "").trim(),
    message: String(body.message ?? "").trim().slice(0, 2000),
    receivedAt: new Date().toISOString(),
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.appendFile(LEADS_FILE, JSON.stringify(lead) + "\n", "utf8");
  } catch {
    return NextResponse.json(
      { error: "Could not save your request. Please email us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
