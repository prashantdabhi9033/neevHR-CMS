import type { ReactNode } from "react";
import { AppWindow, ShowcaseStage, type Floater } from "@/components/showcase/Showcase";

// Every module visual renders as a layered product screen (see components/showcase/Showcase.tsx): the
// module page inside the real app shell, with its signature pieces lifted out as embossed / glass
// floaters. Built in code with illustrative data that matches each module, never a screenshot.
//
// Stage geometry is shared by all module scenes so they read as one family; how LARGE a scene shows is
// decided by the page layout (full-width for flagship modules, split column elsewhere).
export const MODULE_STAGE = {
  width: 880,
  estHeight: 620,
  bleed: { top: 40, right: 56, bottom: 44, left: 56 },
} as const;

export function ProductFrame({
  title,
  children,
  floaters,
  actions,
}: {
  /** "NeevHR · <Module> · <context>" */
  title: string;
  children: ReactNode;
  floaters?: Floater[];
  /** Page-header buttons (WinButton). */
  actions?: ReactNode;
}) {
  const [, module = title, ...rest] = title.split(" · ");
  return (
    <ShowcaseStage
      width={MODULE_STAGE.width}
      estHeight={MODULE_STAGE.estHeight}
      bleed={MODULE_STAGE.bleed}
      floaters={floaters}
      label={`The NeevHR ${module} screen${rest.length ? ` (${rest.join(", ")})` : ""}.`}
    >
      <AppWindow module={module} heading={module} sub={rest.join(" · ") || undefined} actions={actions}>
        {children}
      </AppWindow>
    </ShowcaseStage>
  );
}

export function StatTile({
  label,
  value,
  sub,
  tone = "muted",
}: {
  label: string;
  value: string;
  sub?: string;
  tone?: "muted" | "accent";
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <p className="text-xs text-muted">{label}</p>
      <p className="tnum mt-1 text-xl font-bold text-ink">{value}</p>
      {sub && (
        <p
          className={`mt-1 text-xs font-medium ${
            tone === "accent" ? "text-success-dark" : "text-muted"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
