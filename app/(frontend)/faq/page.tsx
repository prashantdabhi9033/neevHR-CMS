import type { Metadata } from "next";
import { PageHeader } from "@/components/site/PageHeader";
import { Faq } from "@/components/site/Faq";

export const metadata: Metadata = {
  alternates: { canonical: "/faq" },
  title: "FAQ",
  description:
    "Common questions about NeevHR: India statutory coverage, implementation time, configurability, company size, mobile and data protection.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions teams ask before they switch"
        sub="The essentials on compliance, implementation and configurability. If yours is not here, book a demo and we will answer it for your specific setup."
      />
      <Faq withSchema heading="Frequently asked questions" />
    </>
  );
}
