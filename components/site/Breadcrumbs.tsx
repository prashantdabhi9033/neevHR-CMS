import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export type Crumb = { name: string; href: string };

// Visible breadcrumb trail plus matching BreadcrumbList JSON-LD, so the
// structured data always mirrors what the visitor sees. "Home" is implied.
export function Breadcrumbs({
  items,
  className = "",
  bare = false,
}: {
  items: Crumb[];
  className?: string;
  /** Render without the Container wrapper (for use inside a hero). */
  bare?: boolean;
}) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.href === "/" ? "" : c.href}`,
    })),
  };
  const nav = (
    <nav aria-label="Breadcrumb" className={className}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted">
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className="inline-flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className="font-medium text-body">
                  {c.name}
                </span>
              ) : (
                <>
                  <Link href={c.href} className="transition-colors hover:text-brand">
                    {c.name}
                  </Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
  if (bare) return nav;
  return <Container className="pt-5">{nav}</Container>;
}
