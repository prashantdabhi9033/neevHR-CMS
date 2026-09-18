import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Container } from "@/components/ui/Container";
import { BlogCover } from "@/components/blog/BlogCover";
import { mdToHtml, readMins, categoryOf } from "@/lib/blog";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  const payload = await getPayload({ config });
  const { docs } = await payload.find({
    collection: "posts",
    where: {
      and: [{ slug: { equals: slug } }, { _status: { equals: "published" } }],
    },
    limit: 1,
    depth: 1,
  });
  return docs[0] ?? null;
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.excerpt || undefined,
    openGraph: { title: post.title, description: post.excerpt || undefined },
  };
}

function formatDate(d?: string | null) {
  if (!d) return "";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover =
    typeof post.coverImage === "object" && post.coverImage
      ? post.coverImage
      : null;

  return (
    <article className="py-14 lg:py-16">
      <Container className="max-w-3xl">
        <Link
          href="/blog"
          className="text-sm font-medium text-brand hover:text-brand-dark"
        >
          ← All posts
        </Link>
        <p className="mt-6 text-sm font-medium text-muted">
          <span className="text-brand">{categoryOf(post.category).label}</span>
          {" · "}
          {formatDate(post.publishedAt)}
          {post.author ? ` · ${post.author}` : ""}
          {post.bodyMarkdown ? ` · ${readMins(post.bodyMarkdown)} min read` : ""}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-lg leading-relaxed text-body">
            {post.excerpt}
          </p>
        )}
        <div className="mt-8">
          {cover?.url ? (
            <div className="overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cover.url}
                alt={cover.alt || post.title}
                className="w-full object-cover"
              />
            </div>
          ) : (
            <BlogCover category={post.category} />
          )}
        </div>
        {post.bodyMarkdown ? (
          <div
            className="prose-neev mt-10"
            dangerouslySetInnerHTML={{ __html: mdToHtml(post.bodyMarkdown) }}
          />
        ) : (
          post.content && (
            <div className="prose-neev mt-10">
              <RichText data={post.content as SerializedEditorState} />
            </div>
          )
        )}

        <div className="mt-12 rounded-2xl bg-brand px-7 py-7 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h3 className="text-lg font-bold text-white">
                Run all of this on one platform
              </h3>
              <p className="mt-1 text-sm text-white/80">
                NeevHR handles payroll, attendance and compliance for Indian teams of 500 to 5,000.
              </p>
            </div>
            <Link
              href="/demo"
              className="shrink-0 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand hover:bg-white/90"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </Container>
    </article>
  );
}
