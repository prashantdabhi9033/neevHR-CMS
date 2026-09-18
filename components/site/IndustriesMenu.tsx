"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { industries } from "@/lib/industries";

export function IndustriesMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div ref={wrapRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 py-5 text-sm font-medium text-body transition-colors hover:text-ink"
      >
        Industries
        <svg viewBox="0 0 24 24" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[640px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-line bg-white p-4 shadow-[var(--shadow-float)] transition-all ${
          open ? "visible translate-y-0 opacity-100" : "invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-2 gap-1">
          {industries.map((it) => (
            <Link
              key={it.slug}
              href={`/industries/${it.slug}`}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 transition-colors hover:bg-brand-tint"
            >
              <span className="block text-[13px] font-semibold text-ink">{it.name}</span>
              <span className="block text-xs text-muted">{it.tagline}</span>
            </Link>
          ))}
        </div>
        <div className="mt-3 border-t border-line pt-3 text-right">
          <Link href="/industries" onClick={() => setOpen(false)} className="text-xs font-semibold text-brand hover:text-brand-dark">
            All industries →
          </Link>
        </div>
      </div>
    </div>
  );
}
