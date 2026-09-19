import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = {
  alternates: { canonical: "/dpdp" },
  title: "DPDP Notice",
  description:
    "How NeevHR aligns with the Digital Personal Data Protection Act, 2023.",
};

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
