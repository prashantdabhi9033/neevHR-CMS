"use client";

export function NumberField({
  label,
  value,
  onChange,
  suffix = "₹",
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  suffix?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="mt-1.5 flex items-center rounded-xl border border-line bg-white focus-within:border-brand focus-within:ring-2 focus-within:ring-brand/20">
        <span className="pl-3 text-sm text-muted">{suffix}</span>
        <input
          inputMode="numeric"
          value={value}
          onChange={(e) => onChange(e.target.value.replace(/[^0-9.]/g, ""))}
          className="h-11 w-full rounded-xl bg-transparent px-2 text-sm text-ink outline-none"
          placeholder="0"
        />
      </div>
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}

export function SegField<T extends string>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { label: string; value: T }[];
  onChange: (v: T) => void;
}) {
  const cols = options.length === 3 ? "grid-cols-3" : "grid-cols-2";
  return (
    <div role="group" aria-label={label}>
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className={`mt-1.5 grid ${cols} gap-1 rounded-xl border border-line bg-surface-soft p-1`}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            aria-pressed={value === o.value}
            onClick={() => onChange(o.value)}
            className={`h-9 rounded-lg text-sm font-medium transition-colors ${
              value === o.value
                ? "bg-white text-brand shadow-sm"
                : "text-muted hover:text-ink"
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function ResultRow({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2 ${
        strong ? "" : "border-b border-line/70"
      }`}
    >
      <span className={`text-sm ${strong ? "font-semibold text-ink" : "text-body"}`}>
        {label}
      </span>
      <span
        className={`tnum ${
          strong ? "text-lg font-bold text-brand" : "font-semibold text-ink"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

export function DateField({
  label,
  value,
  onChange,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        type="date"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 h-11 w-full rounded-xl border border-line bg-white px-3 text-sm text-ink outline-none focus:border-brand focus:ring-2 focus:ring-brand/20"
      />
      {hint && <span className="mt-1 block text-xs text-muted">{hint}</span>}
    </label>
  );
}
