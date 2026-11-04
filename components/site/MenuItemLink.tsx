import Link from "next/link";
import { MenuIconTile } from "@/components/site/MenuIcon";
import type { MenuItem } from "@/lib/menu-nav";

// A menu entry: icon tile, name, and a one-line summary.
export function MenuItemLink({ item, onPick }: { item: MenuItem; onPick: () => void }) {
  return (
    <Link
      href={item.href}
      onClick={onPick}
      title={item.desc}
      className="group/item flex items-center gap-3 rounded-xl px-2.5 py-2 transition-colors hover:bg-surface-soft"
    >
      <MenuIconTile name={item.icon} />
      <span className="min-w-0">
        <span className="block text-sm font-semibold leading-5 text-ink group-hover/item:text-brand">{item.name}</span>
        <span className="block truncate text-xs leading-5 text-muted">{item.desc}</span>
      </span>
    </Link>
  );
}
