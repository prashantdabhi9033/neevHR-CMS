import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";

export const metadata: Metadata = pageMeta({
  title: "Terms of Use",
  description:
    "The terms that govern use of the NeevHR website, its free HR and payroll calculators and its other public content.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Terms of Use", href: "/terms" }]} />
      <PageHeader eyebrow="Legal" title="Terms of Use" />
      <section className="py-14">
        <Container className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-body">
          <p>
            This page is a placeholder pending our final terms of use. By using
            this website you agree to use it lawfully and not to misuse any
            content or forms.
          </p>
          <p>
            Product features described here are subject to change as we build.
            Nothing on this site constitutes a binding commitment until captured
            in a signed agreement.
          </p>
        </Container>
      </section>
    </>
  );
}
