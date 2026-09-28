import type { CSSProperties, ReactNode } from "react";
import { appIconSvg } from "@/lib/brand";
import { ScaledStage } from "./ScaledStage";

// The site's single product-image format (owner decision, 28 Sep 2026): a real product screen built in
// code, with its focal pieces lifted out of the screen as embossed cards, notifications as frosted glass,
// and secondary UI set back in soft focus. Every product visual on the site renders through this stage.
//
// Coordinates (floater positions, widths) are in design pixels of the stage; ScaledStage scales the whole
// scene to the column it sits in. Page layouts decide how big a scene is shown, not the scene itself.

export type Floater = {
  node: ReactNode;
  /** Card width in design px. */
  width: number;
  /** Position inside the stage, in design px (use negative-free values; the stage has bleed for this). */
  pos: { top?: number; bottom?: number; left?: number; right?: number };
  /** emboss = lifted solid card (default); glass = frosted notification. */
  look?: "emboss" | "glass";
  /** Gentle float animation phase, or none. */
  motion?: "a" | "b" | "c" | "none";
  /** Also shown at native size under the scene on phones, where the scaled scene is small. */
  mobile?: boolean;
};

export type Bleed = { top: number; right: number; bottom: number; left: number };

export function ShowcaseStage({
  width,
  estHeight,
  bleed,
  floaters = [],
  label,
  children,
}: {
  width: number;
  estHeight: number;
  bleed: Bleed;
  floaters?: Floater[];
  /** Screen-reader description of the scene. */
  label: string;
  /** The base screen (usually an AppWindow). */
  children: ReactNode;
}) {
  const mobile = floaters.filter((f) => f.mobile);
  return (
    <figure className="relative">
      <figcaption className="sr-only">{label} Illustrative sample data.</figcaption>
      <ScaledStage width={width} estHeight={estHeight}>
        <div
          className="relative"
          style={{
            padding: `${bleed.top}px ${bleed.right}px ${bleed.bottom}px ${bleed.left}px`,
          }}
        >
          {/* brand glow behind the screen */}
          <div
            className="pointer-events-none absolute rounded-[48px] bg-[radial-gradient(60%_60%_at_50%_40%,rgba(91,69,232,0.32),transparent_70%)] blur-3xl"
            style={{
              top: bleed.top + 30,
              bottom: bleed.bottom - 10,
              left: bleed.left + 20,
              right: bleed.right + 20,
            }}
          />
          <div className="relative">{children}</div>
          {floaters.map((f, i) => (
            <div
              key={i}
              className={`absolute z-10 ${f.motion === "none" ? "" : `float-${f.motion ?? (["a", "b", "c"] as const)[i % 3]}`} ${f.mobile ? "max-sm:hidden" : ""}`}
              style={{ ...f.pos, width: f.width } as CSSProperties}
            >
              <div className={`${f.look === "glass" ? "glass" : "emboss"} rounded-[18px]`}>
                {f.node}
              </div>
            </div>
          ))}
          <span
            className="absolute text-[11px] font-medium text-slate-400"
            style={{ bottom: Math.max(6, bleed.bottom / 2 - 8), right: bleed.right + 4 }}
          >
            Illustrative data
          </span>
        </div>
      </ScaledStage>
      {mobile.length > 0 && (
        <div className="relative z-10 -mt-4 flex flex-col items-center gap-3 sm:hidden">
          {mobile.map((f, i) => (
            <div
              key={i}
              className={`${f.look === "glass" ? "glass" : "emboss"} w-full rounded-[18px]`}
              style={{ maxWidth: f.width }}
            >
              {f.node}
            </div>
          ))}
        </div>
      )}
    </figure>
  );
}

/* --------------------------------------------------------------------------------- base app window */

const RAIL_ITEMS = 9;

/**
 * The product shell, as a real screen: collapsed Neev Night rail with the app icon, a top bar with
 * breadcrumb, ⌘K search and the signed-in user, then the module page header and body.
 */
export function AppWindow({
  module,
  heading,
  sub,
  actions,
  activeRail = 2,
  children,
  bodyClassName = "",
}: {
  module: string;
  heading: string;
  sub?: string;
  actions?: ReactNode;
  activeRail?: number;
  children: ReactNode;
  bodyClassName?: string;
}) {
  return (
    <div className="flex overflow-hidden rounded-[20px] border border-white/70 bg-white shadow-[0_50px_120px_-40px_rgba(12,11,74,0.55),0_0_0_1px_rgba(21,20,123,0.06)]">
      <aside className="flex w-[56px] shrink-0 flex-col items-center gap-2 bg-[#0C0B4A] py-4">
        <span
          className="mb-3 block h-8 w-8 [&>svg]:h-full [&>svg]:w-full"
          // Static brand artwork from lib/brand.ts (no user input).
          dangerouslySetInnerHTML={{ __html: appIconSvg("#5B45E8") }}
        />
        <div className="depth-blur-soft flex flex-col items-center gap-2">
          {Array.from({ length: RAIL_ITEMS }).map((_, i) => (
            <span
              key={i}
              className={`grid h-9 w-9 place-items-center rounded-lg ${i === activeRail ? "bg-white/15" : ""}`}
            >
              <span className={`h-4 w-4 rounded-[5px] ${i === activeRail ? "bg-[#8B7BFF]" : "bg-white/25"}`} />
            </span>
          ))}
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col bg-[#FAFAFD]">
        <header className="flex h-[48px] shrink-0 items-center gap-3 border-b border-slate-200/80 bg-white px-5">
          <p className="text-[12px] text-slate-400">
            Home <span className="mx-1">/</span>
            <span className="font-medium text-slate-600">{module}</span>
          </p>
          <div className="ml-auto flex items-center gap-3">
            <span className="flex w-[190px] items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-[11px] text-slate-400">
              <span className="h-3 w-3 rounded-full border-2 border-slate-300" />
              Search
              <span className="ml-auto rounded border border-slate-200 bg-white px-1 text-[9px] font-semibold text-slate-500">⌘K</span>
            </span>
            <span className="relative h-4 w-4 rounded-full border-2 border-slate-300">
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-white bg-red-500" />
            </span>
            <span className="grid h-7 w-7 place-items-center rounded-full bg-[#5B45E8] text-[10px] font-semibold text-white">PS</span>
          </div>
        </header>
        <div className="flex items-end justify-between gap-4 px-6 pt-5">
          <div className="min-w-0">
            <h3 className="text-[19px] font-bold tracking-tight text-ink">{heading}</h3>
            {sub && <p className="mt-0.5 text-[12px] text-slate-500">{sub}</p>}
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </div>
        <div className={`px-6 pb-6 pt-4 ${bodyClassName}`}>{children}</div>
      </div>
    </div>
  );
}

/** Header buttons for AppWindow `actions`. */
export function WinButton({ children, primary = false }: { children: ReactNode; primary?: boolean }) {
  return (
    <span
      className={`rounded-lg px-3 py-1.5 text-[12px] font-semibold ${
        primary ? "bg-[#15147B] text-white" : "border border-slate-200 bg-white text-slate-600"
      }`}
    >
      {children}
    </span>
  );
}

/** Secondary UI set back in soft focus (depth of field). */
export function Soft({ children, strong = false, className = "" }: { children: ReactNode; strong?: boolean; className?: string }) {
  return <div className={`${strong ? "depth-blur" : "depth-blur-soft"} ${className}`}>{children}</div>;
}
