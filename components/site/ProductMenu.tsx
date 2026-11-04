"use client";

import { useState } from "react";
import Link from "next/link";
import { NavDropdown } from "@/components/site/NavDropdown";
import { MenuIconTile } from "@/components/site/MenuIcon";
import { MenuItemLink } from "@/components/site/MenuItemLink";
import { featureGroups } from "@/lib/menu-nav";

// Features menu in two panes: module groups down the left; pointing at one shows its modules on the
// right under a banner, so the menu stays short enough for a 1280 x 720 laptop without scrolling.
export function ProductMenu() {
  const [active, setActive] = useState(0);
  const grp = featureGroups[active];

  return (
    <NavDropdown label="Features">
      {(close) => (
        <>
          <div className="grid grid-cols-[272px_1fr]">
            <div className="border-r border-line p-4">
              <p className="px-2.5 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted">Modules</p>
              <ul className="space-y-1">
                {featureGroups.map((g, i) => (
                  <li key={g.group}>
                    <button
                      type="button"
                      aria-current={i === active ? "true" : undefined}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group/item flex w-full items-center gap-3 rounded-xl px-2.5 py-2 text-left text-sm font-semibold transition-colors ${
                        i === active ? "bg-brand-tint text-brand" : "text-ink hover:bg-surface-soft"
                      }`}
                    >
                      <MenuIconTile name={g.icon} active={i === active} />
                      {g.group}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4">
              <Link
                href="/features"
                onClick={close}
                className="flex items-center justify-between gap-4 rounded-xl bg-brand px-5 py-4 text-white transition-colors hover:bg-brand-dark"
              >
                <span>
                  <span className="block text-base font-bold">{grp.group}</span>
                  <span className="mt-0.5 block text-sm text-brand-mist">{grp.blurb}</span>
                </span>
                <span className="shrink-0 text-xs font-semibold text-white/80">All features →</span>
              </Link>
              <ul className="mt-3 grid grid-cols-2 gap-x-3 gap-y-0.5">
                {grp.items.map((it) => (
                  <li key={it.key}>
                    <MenuItemLink item={it} onPick={close} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-between rounded-b-2xl border-t border-line bg-surface-soft px-5 py-3">
            <span className="text-xs text-muted">30+ modules on one employee record.</span>
            <span className="flex gap-4">
              <Link href="/hrms" onClick={close} className="text-xs font-semibold text-brand hover:text-brand-dark">
                HRMS overview →
              </Link>
              <Link href="/features" onClick={close} className="text-xs font-semibold text-brand hover:text-brand-dark">
                See all features →
              </Link>
            </span>
          </div>
        </>
      )}
    </NavDropdown>
  );
}
