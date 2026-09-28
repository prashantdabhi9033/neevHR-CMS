import type { CSSProperties, ReactNode } from "react";
import { ScaledStage } from "@/components/showcase/ScaledStage";

// Feature visuals, one composition per feature (owner direction, 28 Sep 2026): each image is built
// around what the feature MEANS, not one shared "app window + floating cards" template. A pipeline
// reads as a flow, an org as a canvas, a statutory return as paper, the employee app as the real app.
//
// VisualStage is only the frame: a rounded panel with a backdrop picked for the feature's mood,
// scaled like an image (design px) by ScaledStage. Everything inside is composed per visual.

export type Backdrop =
  | "canvas" // light dotted canvas: spatial things (org, maps, grids, boards)
  | "night" // Neev Night: money, compliance and data outputs
  | "lilac" // soft Lilac wash: people moments (journeys, feedback, kudos)
  | "cream" // warm paper desk: documents, letters, statements
  | "sky" // cool blue-white: time (calendars, rosters, timesheets)
  | "mint"; // pale green: approvals, wellbeing, benefits

const BACKDROP: Record<Backdrop, { className: string; style?: CSSProperties }> = {
  canvas: {
    className: "bg-[#F7F7FB]",
    style: {
      backgroundImage: "radial-gradient(rgba(21,20,123,0.14) 1px, transparent 1.2px)",
      backgroundSize: "22px 22px",
    },
  },
  night: {
    className: "bg-[#0C0B4A]",
    style: {
      backgroundImage:
        "radial-gradient(70% 60% at 80% 0%, rgba(91,69,232,0.45), transparent 70%), radial-gradient(50% 50% at 0% 100%, rgba(91,69,232,0.25), transparent 70%)",
    },
  },
  lilac: {
    className: "bg-[#F3F0FF]",
    style: {
      backgroundImage:
        "radial-gradient(60% 70% at 100% 0%, rgba(91,69,232,0.18), transparent 70%), radial-gradient(50% 60% at 0% 100%, rgba(232,137,56,0.10), transparent 70%)",
    },
  },
  cream: {
    className: "bg-[#F7F3EB]",
    style: {
      backgroundImage: "radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.9), transparent 70%)",
    },
  },
  sky: {
    className: "bg-[#EEF4FF]",
    style: {
      backgroundImage:
        "linear-gradient(to right, rgba(21,20,123,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(21,20,123,0.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    },
  },
  mint: {
    className: "bg-[#EEFBF5]",
    style: {
      backgroundImage: "radial-gradient(60% 60% at 90% 10%, rgba(16,185,129,0.16), transparent 70%)",
    },
  },
};

export function VisualStage({
  width = 880,
  estHeight = 600,
  backdrop,
  label,
  padding = 40,
  children,
}: {
  /** Design width in px; the stage scales to its column. */
  width?: number;
  estHeight?: number;
  backdrop: Backdrop;
  /** Screen-reader description of the image. */
  label: string;
  padding?: number;
  children: ReactNode;
}) {
  const b = BACKDROP[backdrop];
  const dark = backdrop === "night";
  return (
    <figure className="relative">
      <figcaption className="sr-only">{label} Illustrative sample data.</figcaption>
      <ScaledStage width={width} estHeight={estHeight}>
        <div
          className={`relative overflow-hidden rounded-[28px] ring-1 ${dark ? "ring-white/10" : "ring-[#15147B]/[0.07]"} ${b.className}`}
          style={{ ...b.style, padding }}
        >
          <div className="relative">{children}</div>
          <span
            className={`absolute bottom-3 right-5 text-[11px] font-medium ${dark ? "text-white/40" : "text-slate-400"}`}
          >
            Illustrative data
          </span>
        </div>
      </ScaledStage>
    </figure>
  );
}

/** A plain lifted surface. */
export function Card({
  children,
  className = "",
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-2xl border border-white bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),0_12px_32px_-12px_rgba(21,20,123,0.25)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/** A printed sheet (statement, letter, return): square-ish corners, paper shadow, optional tilt. */
export function Paper({
  children,
  className = "",
  rotate = 0,
  style,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`rounded-[6px] bg-white shadow-[0_1px_1px_rgba(0,0,0,0.04),0_18px_40px_-18px_rgba(36,36,43,0.45),0_2px_6px_rgba(36,36,43,0.08)] ${className}`}
      style={{ transform: rotate ? `rotate(${rotate}deg)` : undefined, ...style }}
    >
      {children}
    </div>
  );
}

/** Phone hardware frame. `src` = a real screenshot of the NeevHR employee app. */
export function Phone({
  src,
  alt = "",
  width = 250,
  children,
  className = "",
  style,
  eager = false,
}: {
  src?: string;
  alt?: string;
  width?: number;
  /** Load immediately (above-the-fold hero phones). */
  eager?: boolean;
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className={`relative rounded-[42px] bg-[#16161c] p-[9px] shadow-[0_50px_90px_-30px_rgba(12,11,74,0.65),inset_0_0_0_1.5px_rgba(255,255,255,0.14)] ${className}`}
      style={{ width, ...style }}
    >
      <div className="relative overflow-hidden rounded-[34px] bg-white" style={{ aspectRatio: "390 / 844" }}>
        {src ? (
          // Static screenshot at a fixed design size inside a scaled stage; next/image adds nothing here.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={src} alt={alt} className="absolute inset-0 h-full w-full object-cover object-top" loading={eager ? "eager" : "lazy"} />
        ) : (
          children
        )}
        <span className="absolute left-1/2 top-[9px] h-[22px] w-[78px] -translate-x-1/2 rounded-full bg-[#16161c]" />
      </div>
    </div>
  );
}

const AVATAR_TONES = ["#5B45E8", "#0EA5E9", "#10B981", "#F59E0B", "#EC4899", "#14B8A6", "#15147B", "#8B5CF6"];

/** Initials avatar; tone picked from the initials so a person keeps one colour across a visual. */
export function Avatar({ initials, size = 32, ring = false }: { initials: string; size?: number; ring?: boolean }) {
  const tone = AVATAR_TONES[(initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % AVATAR_TONES.length];
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full font-semibold text-white ${ring ? "ring-[3px] ring-white" : ""}`}
      style={{ width: size, height: size, background: tone, fontSize: Math.round(size * 0.36) }}
    >
      {initials}
    </span>
  );
}

/** Small uppercase label used above groups inside a visual. */
export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-[10.5px] font-semibold uppercase tracking-[0.12em] ${dark ? "text-[#A9A8E8]" : "text-[#5B45E8]"}`}>
      {children}
    </p>
  );
}
