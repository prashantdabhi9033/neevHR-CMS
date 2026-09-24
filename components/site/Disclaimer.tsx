import { LAST_REVIEWED } from "@/lib/seo";

// Statutory content disclaimer + review date (spec §41, §42).
export function Disclaimer({
  sources,
  reviewed = LAST_REVIEWED,
  className = "",
}: {
  sources?: { label: string; href: string }[];
  reviewed?: string;
  className?: string;
}) {
  return (
    <aside
      aria-label="Disclaimer and sources"
      className={`rounded-2xl border border-line bg-surface-soft p-5 text-xs leading-relaxed text-muted ${className}`}
    >
      <p>
        <span className="font-semibold text-ink">Last reviewed:</span> {reviewed}
      </p>
      {sources && sources.length > 0 && (
        <p className="mt-2">
          <span className="font-semibold text-ink">Sources:</span>{" "}
          {sources.map((s, i) => (
            <span key={s.href}>
              {i > 0 && ", "}
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline-offset-2 hover:underline"
              >
                {s.label}
              </a>
            </span>
          ))}
        </p>
      )}
      <p className="mt-2">
        This page provides general HR and payroll information for educational
        purposes. Statutory rules, thresholds, rates and filing requirements
        may change. Verify the requirements that apply to you with the relevant
        government authority or a qualified professional before making
        compliance decisions.
      </p>
    </aside>
  );
}
