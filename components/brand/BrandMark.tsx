import Link from "next/link";
import { BRAND, WORDMARK_RATIO, wordmarkSvg } from "@/lib/brand";

type Tone = "brand" | "white" | "charcoal" | "twotone";

const COLORS: Record<Tone, [string, string]> = {
  brand: [BRAND.blue, BRAND.blue],
  white: ["#FFFFFF", "#FFFFFF"],
  charcoal: [BRAND.charcoal, BRAND.charcoal],
  twotone: [BRAND.charcoal, BRAND.pebble],
};

// NeevHR brand lockup (brand v2.0): the "neevHR" wordmark with the three pebbles on the v. It IS the name,
// so it is never paired with a separate "NeevHR" text label or the pebble mark.
export function BrandMark({
  href = "/",
  className = "",
  height = 30,
  tone = "brand",
}: {
  href?: string | null;
  className?: string;
  height?: number;
  tone?: Tone;
}) {
  const [color, pebble] = COLORS[tone];
  const mark = (
    <span
      className={`inline-block shrink-0 [&>svg]:block [&>svg]:h-full [&>svg]:w-full ${className}`}
      style={{ height, width: Math.round(height * WORDMARK_RATIO) }}
      // Static brand artwork from lib/brand.ts (no user input).
      dangerouslySetInnerHTML={{ __html: wordmarkSvg(color, pebble) }}
    />
  );

  if (!href) return mark;
  return (
    <Link href={href} aria-label="NeevHR home" className="inline-flex">
      {mark}
    </Link>
  );
}
