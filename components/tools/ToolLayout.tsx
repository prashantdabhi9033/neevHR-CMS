import type { ReactNode } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHeader } from "@/components/site/PageHeader";
import { tools } from "@/lib/tools";

export function ToolLayout({
  slug,
  name,
  tagline,
  children,
  note,
}: {
  slug: string;
  name: string;
  tagline: string;
  children: ReactNode;
  note?: ReactNode;
}) {
  const others = tools.filter((t) => t.slug !== slug);
  return (
    <>
      <PageHeader eyebrow="Free HR tools" title={name} sub={tagline} />

      <section className="py-12 lg:py-16">
        <Container className="max-w-4xl">
          {children}
          {note && (
            <div className="mt-8 rounded-2xl border border-line bg-white p-6 text-sm leading-relaxed text-body">
              {note}
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl bg-brand px-7 py-7 text-center sm:flex-row sm:text-left">
            <div>
              <h3 className="text-lg font-bold text-white">
                NeevHR does this for your whole payroll, automatically
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Gratuity, HRA, PF and TDS computed every cycle, statutory-accurate.
              </p>
            </div>
            <Button href="/demo" variant="inverse">
              Book a demo
              <Icon name="arrow" className="h-4 w-4" />
            </Button>
          </div>

          {/* Other tools */}
          <div className="mt-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-brand">
              More free tools
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {others.map((t) => (
                <Link
                  key={t.slug}
                  href={`/tools/${t.slug}`}
                  className="group rounded-xl border border-line bg-white p-5 transition-colors hover:border-brand/40 hover:bg-brand-tint/40"
                >
                  <h3 className="text-[15px] font-semibold text-ink group-hover:text-brand">
                    {t.name}
                  </h3>
                  <p className="mt-1.5 text-sm text-body">{t.tagline}</p>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
