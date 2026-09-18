import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";
import { seedPosts } from "@/lib/seed/posts";

// Seeds blog posts. In production it runs only when the ?key= query matches
// the SEED_KEY env var (set it once, seed, then unset it). Idempotent.
export async function GET(req: Request) {
  if (process.env.NODE_ENV === "production") {
    const key = new URL(req.url).searchParams.get("key");
    if (!process.env.SEED_KEY || key !== process.env.SEED_KEY) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
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
