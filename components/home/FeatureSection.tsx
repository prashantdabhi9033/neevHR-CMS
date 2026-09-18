import type { ComponentType } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/site/Reveal";

export type Feature = {
  eyebrow: string;
  title: string;
  body: string;
  highlights: string[];
  href: string;
  Visual: ComponentType;
};

export function FeatureSection({
  feature,
  flip = false,
}: {
  feature: Feature;
  flip?: boolean;
}) {
  const { eyebrow, title, body, highlights, href, Visual } = feature;
  return (
    <Container className="py-14 lg:py-20">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={flip ? "lg:order-2" : ""}>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">
            {eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-body sm:text-base">
            {body}
          </p>
          <ul className="mt-6 space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-[15px] text-body">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent-tint text-accent-dark">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:text-brand-dark"
          >
            Explore {eyebrow.toLowerCase()}
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </Reveal>

        <Reveal delay={80} className={flip ? "lg:order-1" : ""}>
          <div className="relative rounded-3xl bg-gradient-to-br from-brand-tint via-white to-accent-tint/50 p-5 sm:p-8">
            <Visual />
          </div>
        </Reveal>
      </div>
    </Container>
  );
}
