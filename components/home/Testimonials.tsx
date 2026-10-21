import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/site/Reveal";
import { TestimonialCarousel, type Testimonial } from "@/components/home/TestimonialCarousel";

// Real customer reviews only (PLAN.md: no invented testimonials). Each quote is approved by the person named.
const testimonials: Testimonial[] = [
  {
    quote:
      "We wanted an HR system that fits how an Indian company really runs, not one we had to bend ourselves around. What surprised us most was the configuration. Leave rules, attendance, payroll components and approval workflows are all set up by our own team, without code or consultants. We haven’t seen that level of control in any HR software before. And it’s simple to use. The screens are clean, everything is where you expect it, and our employees started using it from day one without any training.",
    name: "Ujas Khunt",
    role: "Founder",
    company: "Cosmo Chemistry",
    photo: "/customers/ujas-khunt.jpg",
  },
  {
    quote:
      "Payroll used to take our team days of spreadsheets every month. With NeevHR it is a few clicks, and PF, ESI, PT and TDS are worked out correctly without anyone chasing numbers. What surprised us was performance management. Goals, self-appraisals, manager reviews and final ratings now run in one clear cycle instead of scattered sheets and emails. Our managers actually finish reviews on time, and appraisal decisions are finally backed by data. One system now covers both how we pay people and how we grow them.",
    name: "Kartik Desai",
    role: "Founder",
    company: "Mototive Web Solutions",
    photo: "/customers/kartik-desai.jpg",
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
      </Container>
      <Reveal className="mt-12">
        <TestimonialCarousel items={testimonials} />
      </Reveal>
    </section>
  );
}
