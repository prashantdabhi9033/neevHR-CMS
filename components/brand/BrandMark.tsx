import Link from "next/link";

// NeevHR wordmark: an "N" resting on an emerald foundation bar (neev = foundation).
export function BrandMark({
  href = "/",
  className = "",
}: {
  href?: string | null;
  className?: string;
}) {
  const mark = (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span className="relative inline-flex h-9 w-9 flex-col items-center justify-end rounded-xl bg-brand shadow-sm">
        <span className="absolute top-1.5 text-[17px] font-bold leading-none text-white">
          N
        </span>
        <span className="mb-1.5 h-1 w-5 rounded-full bg-accent" />
      </span>
      <span className="text-[19px] font-bold tracking-tight text-ink">
        Neev<span className="text-brand">HR</span>
      </span>
    </span>
  );

  if (!href) return mark;
  return (
    <Link href={href} aria-label="NeevHR home" className="inline-flex">
      {mark}
    </Link>
  );
}
