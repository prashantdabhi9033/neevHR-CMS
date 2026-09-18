import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

// Dev-only helper to seed sample published blog posts.
// Returns 404 in production. Hit it with: curl http://localhost:3100/api/dev-seed

type TextNode = {
  type: "text";
  text: string;
  format: number;
  style: "";
  mode: "normal";
  detail: 0;
  version: 1;
};

const text = (t: string): TextNode => ({
  type: "text",
  text: t,
  format: 0,
  style: "",
  mode: "normal",
  detail: 0,
  version: 1,
});

const para = (t: string) => ({
  type: "paragraph",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  textFormat: 0,
  children: [text(t)],
});

const heading = (t: string) => ({
  type: "heading",
  tag: "h2",
  format: "",
  indent: 0,
  version: 1,
  direction: "ltr",
  children: [text(t)],
});

const doc = (nodes: object[]) => ({
  root: {
    type: "root",
    format: "",
    indent: 0,
    version: 1,
    direction: "ltr",
    children: nodes,
  },
});

const posts = [
  {
    title:
      "PF, ESI, PT and TDS: the four statutory deductions every Indian payroll must get right",
    slug: "india-statutory-payroll-deductions",
    excerpt:
      "A plain-language primer on the four core statutory deductions in Indian payroll, the thresholds that trigger them, and where teams most often slip up.",
    author: "NeevHR Team",
    publishedAt: "2026-09-10",
    content: doc([
      para(
        "Indian payroll lives or dies on four statutory deductions. Get the thresholds and due dates right and payroll is boring, which is exactly how it should be. Get them wrong and you are looking at interest, penalties and unhappy employees."
      ),
      heading("Provident Fund (PF)"),
      para(
        "PF is contributed by both employee and employer, calculated on basic wages up to a ceiling of Rs 15,000. Employees earning above the ceiling can still contribute on actual basic if the establishment allows it."
      ),
      heading("Employees' State Insurance (ESI)"),
      para(
        "ESI applies to employees with gross wages up to Rs 21,000 per month. It funds medical and cash benefits, and both employer and employee contribute at prescribed rates."
      ),
      heading("Professional Tax and TDS"),
      para(
        "Professional Tax is a state-level deduction with slabs that vary by state. TDS on salary is deducted per the income tax slabs the employee falls into, and reconciled through Form 24Q and Form 16."
      ),
    ]),
  },
  {
    title: "Why mid-market companies outgrow spreadsheets (and when to switch)",
    slug: "outgrowing-spreadsheets-hrms",
    excerpt:
      "The signals that tell a 500 to 5,000 person company it is time to move HR and payroll off spreadsheets and point tools onto a single platform.",
    author: "NeevHR Team",
    publishedAt: "2026-09-14",
    content: doc([
      para(
        "Spreadsheets scale further than people expect, until they suddenly do not. For companies between 500 and 5,000 employees, a few consistent signals show the model has run out of road."
      ),
      heading("The signals"),
      para(
        "Payroll takes a week and still throws surprises. Attendance data lives in three places. Every policy exception is a manual email. Reports are stitched together by hand the night before a review. None of these are people problems, they are system problems."
      ),
      heading("What good looks like"),
      para(
        "One employee record, effective-dated, feeding attendance into payroll into analytics without re-keying. Policies configured once as rule sets and assigned to groups. That is the bar a modern HRMS should clear before you sign."
      ),
    ]),
  },
];

export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const payload = await getPayload({ config });
  const results: string[] = [];
  for (const p of posts) {
    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: p.slug } },
      limit: 1,
    });
    if (existing.docs.length > 0) {
      results.push(`exists: ${p.slug}`);
      continue;
    }
    await payload.create({
      collection: "posts",
      data: {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        author: p.author,
        publishedAt: p.publishedAt,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        content: p.content as any,
        _status: "published",
      },
    });
    results.push(`created: ${p.slug}`);
  }
  return NextResponse.json({ ok: true, results });
}
