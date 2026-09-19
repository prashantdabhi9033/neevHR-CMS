import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { RichText } from "@payloadcms/richtext-lexical/react";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { Container } from "@/components/ui/Container";
import { BlogCover } from "@/components/blog/BlogCover";
import { renderArticle, readMins, categoryOf } from "@/lib/blog";
import { site } from "@/lib/site";

export const revalidate = 60;

type Params = { params: Promise<{ slug: string }> };

async function getPost(slug: string) {
  try {
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
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Post not found", robots: { index: false } };
  const cover =
    typeof post.coverImage === "object" && post.coverImage?.url
      ? post.coverImage.url
      : undefined;
  return {
    title: post.title,
    description: post.excerpt || undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt || undefined,
      url: `${site.url}/blog/${slug}`,
      publishedTime: post.publishedAt || undefined,
      modifiedTime: post.updatedAt || undefined,
      authors: post.author ? [post.author] : undefined,
      images: cover ? [cover] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || undefined,
      images: cover ? [cover] : undefined,
    },
  };
}

// True when the post was meaningfully edited after publishing (> 1 day later),
// so the visible "Last updated" line only appears when it adds information.
function isUpdated(published?: string | null, updated?: string | null) {
  if (!published || !updated) return false;
  return new Date(updated).getTime() - new Date(published).getTime() > 86400000;
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

  const article = post.bodyMarkdown ? renderArticle(post.bodyMarkdown) : null;

  const url = `${site.url}/blog/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt || undefined,
    image: cover?.url ? [cover.url] : undefined,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-excerpt"],
    },
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    author: post.author
      ? {
          "@type": "Person",
          name: post.author,
          worksFor: { "@type": "Organization", name: site.name, url: site.url },
        }
      : { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/icon.svg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-IN",
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${site.url}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  return (
    <article className="py-14 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
        {isUpdated(post.publishedAt, post.updatedAt) && (
          <p className="mt-1 text-xs text-muted">
            Last updated: {formatDate(post.updatedAt)}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && (
          <p className="article-excerpt mt-4 text-lg leading-relaxed text-body">
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
                width={cover.width || 1600}
                height={cover.height || 900}
                fetchPriority="high"
                className="w-full object-cover"
              />
            </div>
          ) : (
            <BlogCover category={post.category} />
          )}
        </div>
        {article && article.toc.length >= 3 && (
          <nav
            aria-label="On this page"
            className="mt-10 rounded-2xl border border-line bg-surface-soft p-5"
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">
              On this page
            </p>
            <ol className="mt-3 space-y-2">
              {article.toc.map((t) => (
                <li
                  key={t.id}
                  className={t.level === 3 ? "ml-4" : ""}
                >
                  <a
                    href={`#${t.id}`}
                    className="text-sm text-body transition-colors hover:text-brand"
                  >
                    {t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}
        {article ? (
          <div
            className="prose-neev mt-10"
            dangerouslySetInnerHTML={{ __html: article.html }}
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
                NeevHR handles payroll, attendance and compliance for growing and enterprise companies across India.
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
