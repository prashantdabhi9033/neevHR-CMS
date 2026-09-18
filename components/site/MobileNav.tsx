"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { moduleGroups } from "@/lib/module-nav";
import { industries } from "@/lib/industries";

export function MobileNav({
  secondaryNav,
}: {
  secondaryNav: { label: string; href: string }[];
}) {
  const [open, setOpen] = useState(false);
  const [modulesOpen, setModulesOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="grid h-10 w-10 place-items-center rounded-lg border border-line text-ink"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="fixed inset-x-0 top-16 z-40 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white px-5 py-5 shadow-lg">
          <button
            type="button"
            onClick={() => setModulesOpen((v) => !v)}
            className="flex w-full items-center justify-between py-2 text-sm font-semibold text-ink"
          >
            Features
            <span className={`transition-transform ${modulesOpen ? "rotate-45" : ""}`}>+</span>
          </button>
          {modulesOpen && (
            <div className="space-y-4 pb-3 pl-1">
              {moduleGroups.map((grp) => (
                <div key={grp.group}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-brand">
                    {grp.group}
                  </p>
                  <div className="mt-1 grid grid-cols-2 gap-x-3">
                    {grp.items.map((it) => (
                      <Link
                        key={it.slug}
                        href={it.href ?? `/features/${it.slug}`}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-[13px] text-body"
                      >
                        {it.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <Link
                href="/features"
                onClick={() => setOpen(false)}
                className="inline-block text-xs font-semibold text-brand"
              >
                View the full platform →
              </Link>
            </div>
          )}

          <button
            type="button"
            onClick={() => setIndustriesOpen((v) => !v)}
            className="mt-1 flex w-full items-center justify-between border-t border-line py-2 text-sm font-semibold text-ink"
          >
            Industries
            <span className={`transition-transform ${industriesOpen ? "rotate-45" : ""}`}>+</span>
          </button>
          {industriesOpen && (
            <div className="grid grid-cols-2 gap-x-3 pb-3 pl-1">
              {industries.map((it) => (
                <Link
                  key={it.slug}
                  href={`/industries/${it.slug}`}
                  onClick={() => setOpen(false)}
                  className="py-1.5 text-[13px] text-body"
                >
                  {it.name}
                </Link>
              ))}
            </div>
          )}

          <div className="mt-1 divide-y divide-line border-t border-line">
            {secondaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-body"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="mt-5">
            <Button href="/demo" className="w-full" size="lg">
              Book a demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
