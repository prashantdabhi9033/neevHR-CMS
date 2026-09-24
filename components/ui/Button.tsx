import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "inverse";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand disabled:opacity-60 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark shadow-sm",
  secondary:
    "bg-white text-ink ring-1 ring-line hover:bg-surface-soft hover:ring-brand/30",
  ghost: "text-brand hover:bg-brand-tint",
  inverse: "bg-white text-brand hover:bg-white/90 shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  type,
  disabled,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls} disabled={disabled}>
      {children}
    </button>
  );
}
