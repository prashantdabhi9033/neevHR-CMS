import { Container } from "@/components/ui/Container";

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <section className="border-b border-line bg-surface-soft py-14 lg:py-16">
      <Container>
        <span className="text-xs font-semibold uppercase tracking-wider text-brand">
          {eyebrow}
        </span>
        <h1 className="mt-2 max-w-3xl text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {title}
        </h1>
        {sub && (
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            {sub}
          </p>
        )}
      </Container>
    </section>
  );
}
