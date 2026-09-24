import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/site/PageHeader";

export const metadata: Metadata = pageMeta({
  title: "Privacy Policy",
  description:
    "How NeevHR collects, uses and protects personal data on this website, and how to exercise your rights.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy Policy" />
      <section className="py-14">
        <Container className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-body">
          <p>
            This page is a placeholder pending our final privacy policy. NeevHR
            is committed to handling personal data in line with the Digital
            Personal Data Protection Act, 2023.
          </p>
          <p>
            When you submit a demo request or contact us, we collect only the
            details you provide (such as name, work email, company and phone) to
            respond to your enquiry. We do not sell your data.
          </p>
          <p>
            For any data request or question, contact us and we will assist you
            promptly.
          </p>
        </Container>
      </section>
    </>
  );
}
