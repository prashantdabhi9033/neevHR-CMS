// Brings the published blog in the CMS in line with the seed articles after the 03 Nov 2026 SEO audit
// (statutory rewrites, merged posts, corrected links). Safe to re-run:
//   - a post whose title, excerpt, category or body already matches the seed is left alone, so its
//     "Updated" date does not move;
//   - a post that differs is updated with only the changed fields;
//   - a seed post missing from the CMS is created as published;
//   - a post merged into another page (lib/merged-posts.ts) is set to draft; next.config.ts redirects it.
// Edits made in /admin to a post the seed also changed are overwritten, so the dry run lists them first.
//
// Run on the server, from the site folder:
//   set -a; . ./.env; set +a; pnpm payload run scripts/update-posts-from-seed.ts            (dry run)
//   set -a; . ./.env; set +a; APPLY=1 pnpm payload run scripts/update-posts-from-seed.ts    (write)
import { writeSync } from "node:fs";
import { getPayload } from "payload";
import config from "@payload-config";
import { seedPosts } from "../lib/seed/posts";
import { articleBatch2, articleBatch3, articleBatch4, articleBatch5 } from "../lib/seed/articles";
import { MERGED_POSTS } from "../lib/merged-posts";

const APPLY = process.env.APPLY === "1";
// Synchronous output: process.exit() below would otherwise drop buffered console output on a pipe.
const say = (line: string) => writeSync(1, `${line}\n`);
const norm = (v: unknown) => (typeof v === "string" ? v.replace(/\r\n/g, "\n").trim() : "");

async function main() {
  const payload = await getPayload({ config });
  const seed = [...seedPosts, ...articleBatch2, ...articleBatch3, ...articleBatch4, ...articleBatch5];
  const out = { updated: [] as string[], created: [] as string[], drafted: [] as string[], unchanged: 0 };

  for (const p of seed) {
    const { docs } = await payload.find({ collection: "posts", where: { slug: { equals: p.slug } }, limit: 1, depth: 0, overrideAccess: true });
    const doc = docs[0];
    if (MERGED_POSTS[p.slug]) {
      if (doc && doc._status !== "draft") {
        out.drafted.push(p.slug);
        if (APPLY) await payload.update({ collection: "posts", id: doc.id, data: { _status: "draft" }, overrideAccess: true });
      }
      continue;
    }
    if (!doc) {
      out.created.push(p.slug);
      if (APPLY)
        await payload.create({
          collection: "posts",
          data: { title: p.title, slug: p.slug, excerpt: p.excerpt, category: p.category, author: p.author, publishedAt: p.publishedAt, bodyMarkdown: p.body, _status: "published" },
          overrideAccess: true,
        });
      continue;
    }
    const data: Record<string, unknown> = {};
    if (norm(doc.title) !== norm(p.title)) data.title = p.title;
    if (norm(doc.excerpt) !== norm(p.excerpt)) data.excerpt = p.excerpt;
    if (doc.category !== p.category) data.category = p.category;
    if (norm(doc.bodyMarkdown) !== norm(p.body)) data.bodyMarkdown = p.body;
    if (Object.keys(data).length === 0) {
      out.unchanged++;
      continue;
    }
    out.updated.push(`${p.slug} (${Object.keys(data).join(", ")})`);
    if (APPLY) await payload.update({ collection: "posts", id: doc.id, data: { ...data, _status: "published" }, overrideAccess: true });
  }

  say(`${APPLY ? "Applied" : "Dry run"}: ${out.updated.length} to update, ${out.created.length} to create, ${out.drafted.length} to set to draft, ${out.unchanged} unchanged.`);
  for (const s of out.updated) say(`  update  ${s}`);
  for (const s of out.created) say(`  create  ${s}`);
  for (const s of out.drafted) say(`  draft   ${s}`);
  if (!APPLY) say("Nothing was written. Re-run with APPLY=1 to apply.");
  process.exit(0);
}

// Top-level await: `payload run` exits as soon as the import resolves, so the work must finish first.
await main().catch((e) => {
  console.error(e);
  process.exit(1);
});
