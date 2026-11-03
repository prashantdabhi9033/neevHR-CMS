import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/site";

// Accordion built on native <details> (no client JS). Optionally emits
// FAQPage structured data for SEO.
export function Faq({
  items = faqs,
  withSchema = false,
  heading = "Questions, answered",
}: {
  items?: { q: string; a: string }[];
  withSchema?: boolean;
  heading?: string;
}) {
  return (
    <section className="py-16 lg:py-20">
      {withSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: items.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      )}
      <Container className="max-w-3xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-ink">
          {heading}
        </h2>
        <div className="mt-10 divide-y divide-line rounded-2xl border border-line bg-white">
          {items.map((f) => (
            <details key={f.q} className="group px-6">
              <summary className="faq-q">
                <h3 className="text-[15px] font-semibold">{f.q}</h3>
                <span aria-hidden="true" className="faq-plus">
                  +
                </span>
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-body">{f.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
