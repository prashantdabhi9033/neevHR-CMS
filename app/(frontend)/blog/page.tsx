import type { Metadata } from "next";
import Link from "next/link";
import { getPayload } from "payload";
import config from "@payload-config";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { BlogCover } from "@/components/blog/BlogCover";
import { readMins } from "@/lib/blog";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blog & resources",
  description:
    "Guides on Indian HR, payroll and statutory compliance from the NeevHR team, plus product updates.",
};

function formatDate(d?: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function BlogPage() {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: { _status: { equals: "published" } },
    sort: "-publishedAt",
    limit: 50,
    depth: 1,
  });

  return (
    <>
      <PageHeader
        eyebrow="Blog & resources"
        title="Practical notes on Indian HR, payroll and compliance"
        sub="Written by people who have run HR. Guides, statutory explainers and product updates."
      />
      <section className="py-16">
        <Container>
          {docs.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-surface-soft p-12 text-center">
              <p className="text-sm text-muted">
                No posts published yet. Check back soon.
              </p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {docs.map((post) => {
                const cover =
                  typeof post.coverImage === "object" && post.coverImage
                    ? post.coverImage
                    : null;
                return (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-card)] transition-colors hover:border-brand/40"
                  >
                    <div className="overflow-hidden">
                      {cover?.url ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={cover.url}
                          alt={cover.alt || post.title}
                          className="aspect-[16/10] h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                        />
                      ) : (
                        <BlogCover category={post.category} />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-xs font-medium text-muted">
                        {formatDate(post.publishedAt)}
                        {post.author ? ` · ${post.author}` : ""}
                        {post.bodyMarkdown ? ` · ${readMins(post.bodyMarkdown)} min read` : ""}
                      </p>
                      <h2 className="mt-2 text-lg font-semibold leading-snug text-ink group-hover:text-brand">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-body">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="mt-4 text-sm font-semibold text-brand">
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
