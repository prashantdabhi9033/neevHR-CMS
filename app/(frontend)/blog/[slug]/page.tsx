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
import { pageMeta, OG_IMAGE } from "@/lib/seo";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { Disclaimer } from "@/components/site/Disclaimer";
import { TrackView } from "@/components/site/TrackView";

// Internal links per category (spec §33, §75): article -> tool -> product
// page -> demo. Kept short so they read as help, not link stuffing.
const relatedByCategory: Record<string, { label: string; href: string }[]> = {
  payroll: [
    { label: "Payroll software for Indian companies", href: "/payroll" },
    { label: "India payroll: PF, ESI, PT, LWF, TDS", href: "/india-payroll" },
    { label: "Take-home salary calculator", href: "/tools/take-home-salary-calculator" },
    { label: "PF calculator", href: "/tools/pf-calculator" },
  ],
  compliance: [
    { label: "India payroll: PF, ESI, PT, LWF, TDS", href: "/india-payroll" },
    { label: "Statutory compliance in NeevHR", href: "/features/compliance" },
    { label: "ESI calculator", href: "/tools/esi-calculator" },
    { label: "HR & payroll glossary", href: "/glossary" },
  ],
  time: [
    { label: "Attendance management", href: "/features/attendance" },
    { label: "Leave management", href: "/features/leave" },
    { label: "Biometric integration", href: "/integrations" },
    { label: "Payroll software", href: "/payroll" },
  ],
  performance: [
    { label: "Performance management", href: "/features/performance" },
    { label: "Compensation", href: "/features/compensation" },
    { label: "Salary hike calculator", href: "/tools/salary-hike-calculator" },
  ],
  recruitment: [
    { label: "Recruitment", href: "/features/recruitment" },
    { label: "Onboarding", href: "/features/onboarding" },
  ],
  "hr-strategy": [
    { label: "HRMS software for Indian companies", href: "/hrms" },
    { label: "Exit and full & final settlement", href: "/features/exit" },
    { label: "How to choose an HRMS in India", href: "/best-hrms-software-india" },
  ],
  product: [
    { label: "HRMS overview", href: "/hrms" },
    { label: "All features", href: "/features" },
  ],
};

const STATUTORY_SOURCES = [
  { label: "EPFO", href: "https://www.epfindia.gov.in/" },
  { label: "ESIC", href: "https://www.esic.gov.in/" },
  { label: "Income Tax Department", href: "https://www.incometax.gov.in/" },
  { label: "Ministry of Labour & Employment", href: "https://labour.gov.in/" },
];

// "NeevHR Team" style bylines are the organisation, not a person.
const isOrgAuthor = (a?: string | null) => !a || /neevhr/i.test(a);

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
  return pageMeta({
    title: post.title,
    description: post.excerpt || post.title,
    path: `/blog/${slug}`,
    type: "article",
    publishedTime: post.publishedAt || undefined,
    modifiedTime: post.updatedAt || undefined,
    authors: [post.author || `${site.name} Team`],
    image: cover,
  });
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
    image: [cover?.url || OG_IMAGE.url],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".article-excerpt"],
    },
    datePublished: post.publishedAt || undefined,
    dateModified: post.updatedAt || post.publishedAt || undefined,
    author: isOrgAuthor(post.author)
      ? { "@type": "Organization", name: post.author || `${site.name} Team`, url: site.url }
      : {
          "@type": "Person",
          name: post.author,
          worksFor: { "@type": "Organization", name: site.name, url: site.url },
        },
    publisher: {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    inLanguage: "en-IN",
  };
  return (
    <article className="py-14 lg:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <TrackView event="blog_read" params={{ slug }} />
      <Container className="max-w-3xl">
        <Breadcrumbs
          bare
          items={[
            { name: "Blog", href: "/blog" },
            { name: post.title, href: `/blog/${slug}` },
          ]}
        />
        <p className="mt-6 text-sm font-medium text-muted">
          <span className="text-brand">{categoryOf(post.category).label}</span>
          {post.bodyMarkdown ? ` · ${readMins(post.bodyMarkdown)} min read` : ""}
        </p>
        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-3 text-sm text-muted">
          Published: {formatDate(post.publishedAt)}
          {isUpdated(post.publishedAt, post.updatedAt) && (
            <> · Updated: {formatDate(post.updatedAt)}</>
          )}
          {" · "}Author: {post.author || `${site.name} Team`}
        </p>
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

        {(post.category === "payroll" || post.category === "compliance") && (
          <Disclaimer
            className="mt-12"
            reviewed={formatDate(post.updatedAt || post.publishedAt)}
            sources={STATUTORY_SOURCES}
          />
        )}

        {(relatedByCategory[post.category ?? ""] ?? relatedByCategory["hr-strategy"]).length > 0 && (
          <nav aria-label="Related" className="mt-10">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              Related on NeevHR
            </h2>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {(relatedByCategory[post.category ?? ""] ?? relatedByCategory["hr-strategy"]).map((r) => (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className="block rounded-xl border border-line bg-white px-4 py-2.5 text-sm font-medium text-ink hover:border-brand/40 hover:text-brand"
                  >
                    {r.label} →
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mt-12 rounded-2xl bg-brand px-7 py-7 text-center sm:text-left">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="text-lg font-bold text-white">
                Run all of this on one platform
              </p>
              <p className="mt-1 text-sm text-white/80">
                NeevHR is an India-first HRMS and payroll platform for growing and mid-market businesses.
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
