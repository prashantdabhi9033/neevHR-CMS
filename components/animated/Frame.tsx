import type { ReactNode } from "react";

// The shared frame of the animated samples. Each one says it is a sample, and describes itself to a screen reader, because
// the moving part is hidden from assistive technology.
export function SampleFrame({
  title,
  label,
  note,
  sample = true,
  children,
  className = "",
}: {
  title: string;
  label: string;
  note?: string;
  /** False where nothing shown is sample data, such as a map of the integrations. */
  sample?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <figure data-animated-sample className={`rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-card)] sm:p-6 ${className}`}>
      <figcaption className="sr-only">{label}</figcaption>
      <div aria-hidden="true">
        <div className="flex items-center justify-between gap-3">
          <p className="min-w-0 text-sm font-semibold text-ink">{title}</p>
          {sample && <span className="shrink-0 rounded-full bg-surface-soft px-2.5 py-1 text-[11px] font-medium text-muted ring-1 ring-line">Sample</span>}
        </div>
        {children}
      </div>
      {note && <p className="mt-4 border-t border-line pt-3 text-xs leading-relaxed text-muted">{note}</p>}
    </figure>
  );
}

/** Stacks its children in one grid cell, so the tallest panel sets the height and switching panels never moves the page. */
export function Stack({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`grid [&>*]:col-start-1 [&>*]:row-start-1 ${className}`}>{children}</div>;
}

export function Panel({ on, children, className = "" }: { on: boolean; children: ReactNode; className?: string }) {
  return <div className={`min-w-0 transition-opacity duration-300 ${on ? "opacity-100" : "pointer-events-none opacity-0"} ${className}`}>{children}</div>;
}

export function Tick({ on, tone = "accent" }: { on: boolean; tone?: "accent" | "warn" }) {
  const lit = tone === "warn" ? "bg-amber-100 text-amber-700" : "bg-accent-tint text-accent-dark";
  return (
    <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full transition-colors duration-300 ${on ? lit : "bg-surface-soft text-transparent ring-1 ring-line"}`}>
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.5 4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}
