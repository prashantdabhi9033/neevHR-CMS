import { ReactNode } from "react";

// Shared browser-window chrome for the designed product mockups.
// These are illustrations built in code (not screenshots), with realistic
// dummy data that matches each module's content.
export function ProductFrame({
  title,
  children,
  glow = true,
}: {
  title: string;
  children: ReactNode;
  glow?: boolean;
}) {
  return (
    <figure className="relative">
      <figcaption className="sr-only">
        Illustration of the NeevHR {title} screen, shown with illustrative
        sample data.
      </figcaption>
      {glow && (
        <div className="pointer-events-none absolute -inset-6 rounded-[2rem] bg-brand/10 blur-2xl" />
      )}
      <div className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-float)]">
        <div className="flex items-center gap-2 border-b border-line bg-surface-soft px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="ml-3 truncate text-xs font-medium text-muted">{title}</span>
          <span className="ml-auto shrink-0 rounded-full border border-line bg-white px-2 py-0.5 text-[10px] font-medium text-muted">
            Illustrative data
          </span>
        </div>
        <div className="overflow-x-auto p-5">{children}</div>
      </div>
    </figure>
  );
}

export function StatTile({
  label,
  value,
  sub,
  tone = "muted",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "muted" | "accent";
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="tnum mt-1 text-xl font-bold text-ink">{value}</p>
      {sub && (
        <p
          className={`mt-1 text-xs font-medium ${
            tone === "accent" ? "text-accent-dark" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
