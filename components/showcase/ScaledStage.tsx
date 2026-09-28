"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

// Renders a fixed-width design and scales it to the available width, like an image would, so a
// code-built product screen keeps its exact desktop layout at every viewport (and stays crisp when
// scaled up, since it is DOM, not pixels). Height follows the design's natural height.
export function ScaledStage({
  width,
  estHeight,
  children,
  className = "",
}: {
  width: number;
  /** Used for the aspect ratio before the first measurement, to avoid layout shift. */
  estHeight: number;
  children: ReactNode;
  className?: string;
}) {
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  const [box, setBox] = useState<{ scale: number; h: number } | null>(null);

  useLayoutEffect(() => {
    const o = outer.current;
    const i = inner.current;
    if (!o || !i) return;
    const fit = () => setBox({ scale: o.clientWidth / width, h: i.offsetHeight });
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(o);
    ro.observe(i);
    return () => ro.disconnect();
  }, [width]);

  return (
    <div
      ref={outer}
      className={`relative w-full ${className}`}
      style={
        box
          ? { height: box.h * box.scale }
          : { aspectRatio: `${width} / ${estHeight}` }
      }
    >
      <div
        ref={inner}
        className="absolute left-0 top-0 origin-top-left"
        style={{
          width,
          transform: `scale(${box?.scale ?? 1})`,
          visibility: box ? "visible" : "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}
