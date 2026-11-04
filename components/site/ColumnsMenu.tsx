"use client";

import { NavDropdown } from "@/components/site/NavDropdown";
import { MenuItemLink } from "@/components/site/MenuItemLink";
import type { MenuColumn } from "@/lib/menu-nav";

// A header menu laid out as headed columns with dividers (Solutions, Resources). A column with
// span 2 lists its items in two columns.
export function ColumnsMenu({ label, columns }: { label: string; columns: MenuColumn[] }) {
  const tracks = columns.reduce((n, c) => n + (c.span ?? 1), 0);
  return (
    <NavDropdown label={label}>
      {(close) => (
        <div className="grid divide-x divide-line p-4" style={{ gridTemplateColumns: `repeat(${tracks}, minmax(0, 1fr))` }}>
          {columns.map((col) => (
            <div key={col.heading} className="px-3 first:pl-0 last:pr-0" style={{ gridColumn: `span ${col.span ?? 1}` }}>
              <p className="px-2.5 pb-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-muted">{col.heading}</p>
              <ul className={col.span === 2 ? "grid grid-cols-2 gap-x-2" : ""}>
                {col.items.map((it) => (
                  <li key={it.key}>
                    <MenuItemLink item={it} onPick={close} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </NavDropdown>
  );
}
