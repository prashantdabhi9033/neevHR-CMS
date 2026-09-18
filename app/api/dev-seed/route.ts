import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { seedPosts } from "@/lib/seed/posts";

// Dev-only helper to seed blog posts. Returns 404 in production.
// Idempotent: updates a post if the slug already exists, else creates it.
export async function GET() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  const payload = await getPayload({ config });
  const results: string[] = [];

  for (const p of seedPosts) {
    const existing = await payload.find({
      collection: "posts",
      where: { slug: { equals: p.slug } },
      limit: 1,
    });
    const data = {
      title: p.title,
      slug: p.slug,
      excerpt: p.excerpt,
      category: p.category,
      author: p.author,
      publishedAt: p.publishedAt,
      bodyMarkdown: p.body,
      _status: "published" as const,
    };
    if (existing.docs.length > 0) {
      await payload.update({
        collection: "posts",
        id: existing.docs[0].id,
        data,
      });
      results.push(`updated: ${p.slug}`);
    } else {
      await payload.create({ collection: "posts", data });
      results.push(`created: ${p.slug}`);
    }
  }

  return NextResponse.json({ ok: true, count: results.length, results });
}
