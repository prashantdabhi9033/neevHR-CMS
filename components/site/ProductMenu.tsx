"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuLinks, type MenuLink } from "@/lib/module-nav";

// The menu's own arrangement of the module groups: Insights joins Platform, and the two longest lists
// (Core HR, Platform and insights) share a wide cell split into two columns.
const wide = [
  { group: "Core HR", items: menuLinks("Core HR") },
  { group: "Platform and insights", items: [...menuLinks("Insights"), ...menuLinks("Platform and security")] },
];
const narrow = ["Time & attendance", "Payroll & pay", "Talent", "Employee experience"].map((group) => ({
  group,
  items: menuLinks(group),
}));

function MenuGroup({
  group,
  items,
  twoCols = false,
  onPick,
}: {
  group: string;
  items: MenuLink[];
  twoCols?: boolean;
  onPick: () => void;
}) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">{group}</p>
      <ul className={`mt-1.5 ${twoCols ? "columns-2 gap-x-5" : ""}`}>
        {items.map((it) => (
          <li key={it.key}>
            <Link
              href={it.href}
              onClick={onPick}
              className="menu-link"
            >
              {it.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
        className="flex items-center gap-1 py-5 text-sm font-medium text-body transition-colors hover:text-ink group-data-[hero=true]:text-white group-data-[hero=true]:hover:text-white/80"
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
        className={`fixed left-1/2 top-16 z-50 max-h-[calc(100vh-72px)] w-[1120px] max-w-[96vw] overflow-y-auto -translate-x-1/2 rounded-2xl border border-line bg-white shadow-[var(--shadow-float)] transition-all ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible translate-y-1 opacity-0"
        }`}
      >
        {/* Six text columns: Core HR and Platform share the first two, so no column runs long and every link
            shows without scrolling on a 1280 x 720 laptop. */}
        <div className="grid grid-cols-6 gap-x-5 px-5 pt-5 pb-4">
          <div className="col-span-2 space-y-4">
            {wide.map((grp) => (
              <MenuGroup key={grp.group} group={grp.group} items={grp.items} twoCols onPick={() => setOpen(false)} />
            ))}
          </div>
          {narrow.map((grp) => (
            <MenuGroup key={grp.group} group={grp.group} items={grp.items} onPick={() => setOpen(false)} />
          ))}
        </div>
        <div className="flex items-center justify-between rounded-b-2xl border-t border-line bg-surface-soft px-5 py-3">
          <span className="text-xs text-muted">30+ modules on one employee record.</span>
          <span className="flex gap-4">
            <Link href="/hrms" onClick={() => setOpen(false)} className="text-xs font-semibold text-brand hover:text-brand-dark">
              HRMS overview →
            </Link>
            <Link href="/features" onClick={() => setOpen(false)} className="text-xs font-semibold text-brand hover:text-brand-dark">
              See all features →
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
