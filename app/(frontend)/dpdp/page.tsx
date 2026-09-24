import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = pageMeta({
  title: "DPDP Act 2023 Notice",
  description:
    "How NeevHR processes personal data under India's Digital Personal Data Protection Act, 2023, and how to contact us about your rights.",
  path: "/dpdp",
});

export default function DpdpPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Digital Personal Data Protection notice"
      />
      <section className="py-14">
        <Container className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-body">
          <p>
            NeevHR is designed for compliance with the Digital Personal Data
            Protection Act, 2023 (DPDP). This notice is a placeholder pending our
            full data-principal rights statement.
          </p>
          <p>
            In the product, employee data is protected with row-level tenant
            isolation, consent handling and data-principal rights (access,
            correction and erasure) built in. On this website we collect only
            the contact details you choose to share with us.
          </p>
        </Container>
      </section>
    </>
  );
}
