import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/site/Reveal";

// Real customer reviews only (PLAN.md: no invented testimonials). Each quote is approved by the person named.
type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted an HR system that fits how an Indian company really runs, not one we had to bend ourselves around. What surprised us most was the configuration. Leave rules, attendance, payroll components and approval workflows are all set up by our own team, without code or consultants. We haven’t seen that level of control in any HR software before. And it’s simple to use. The screens are clean, everything is where you expect it, and our employees started using it from day one without any training.",
    name: "Ujas Khunt",
    role: "Founder",
    company: "Cosmo Chemistry",
    photo: "/customers/ujas-khunt.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="scroll-mt-16 border-b border-line py-20">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            Customer stories
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            What our customers say
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6">
          {testimonials.map((t) => (
            <Reveal key={t.name}>
              <figure className="rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)] sm:p-12">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 32 32"
                  className="h-10 w-10 text-brand/20"
                  fill="currentColor"
                >
                  <path d="M9.3 6C5.3 8.4 2.7 12.3 2.7 17.4c0 4.3 2.5 7.3 6 7.3 3 0 5.2-2.2 5.2-5.1 0-2.8-2-4.9-4.6-4.9-.5 0-1.1.1-1.3.2.6-3.2 3.4-6.6 6.3-8.3L9.3 6Zm14.6 0c-4 2.4-6.6 6.3-6.6 11.4 0 4.3 2.5 7.3 6 7.3 3 0 5.2-2.2 5.2-5.1 0-2.8-2-4.9-4.6-4.9-.5 0-1.1.1-1.3.2.6-3.2 3.4-6.6 6.3-8.3L23.9 6Z" />
                </svg>
                <blockquote className="mt-4 text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                  <p>&ldquo;{t.quote}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={t.photo}
                    alt={`${t.name}, ${t.role}, ${t.company}`}
                    width={64}
                    height={64}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-brand-tint"
                  />
                  <div>
                    <div className="text-base font-semibold text-ink">{t.name}</div>
                    <div className="text-sm text-muted">
                      {t.role}, {t.company}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
