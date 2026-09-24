"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { moduleGroups } from "@/lib/module-nav";

export function ProductMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  // Close on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
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
    <div
      ref={wrapRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 py-5 text-sm font-medium text-body transition-colors hover:text-ink"
      >
        Features
        <svg
          viewBox="0 0 24 24"
          className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 w-[860px] max-w-[92vw] -translate-x-1/2 rounded-2xl border border-line bg-white p-5 shadow-[var(--shadow-float)] transition-all ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0"
        }`}
      >
        <div className="grid grid-cols-3 gap-x-6 gap-y-5">
          {moduleGroups.map((grp) => (
            <div key={grp.group}>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                {grp.group}
              </p>
              <ul className="mt-2 space-y-0.5">
                {grp.items.map((it) => (
                  <li key={it.slug}>
                    <Link
                      href={it.href ?? `/features/${it.slug}`}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-2 py-1.5 text-[13px] font-medium text-body transition-colors hover:bg-brand-tint hover:text-brand"
                    >
                      {it.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span className="text-xs text-muted">
            30+ modules on one employee record.
          </span>
          <div className="flex gap-4">
            <Link
              href="/hrms"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-brand hover:text-brand-dark"
            >
              HRMS overview →
            </Link>
            <Link
              href="/features"
              onClick={() => setOpen(false)}
              className="text-xs font-semibold text-brand hover:text-brand-dark"
            >
              All features →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
