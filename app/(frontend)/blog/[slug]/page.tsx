import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Container } from "@/components/ui/Container";

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
          {formatDate(post.publishedAt)}
          {post.author ? ` · ${post.author}` : ""}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="mt-4 text-lg leading-relaxed text-body">
            {post.excerpt}
          </p>
        )}
        {cover?.url && (
          <div className="mt-8 overflow-hidden rounded-2xl border border-line">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={cover.url}
              alt={cover.alt || post.title}
              className="w-full object-cover"
            />
          </div>
        )}
        {post.content && (
          <div className="prose-neev mt-10">
            <RichText data={post.content as SerializedEditorState} />
          </div>
        )}
      </Container>
    </article>
  );
}
