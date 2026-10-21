"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo: string;
};

// Horizontal story strip: the active story sits in the centre; the previous and next ones peek in at the edges,
// blurred and faded, and come into focus when scrolled, swiped, clicked or reached with the arrows.
export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  // The active card is the one whose centre is nearest the strip's centre.
  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const mid = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    Array.from(track.children).forEach((child, i) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    syncActive();
    track.addEventListener("scroll", syncActive, { passive: true });
    window.addEventListener("resize", syncActive);
    return () => {
      track.removeEventListener("scroll", syncActive);
      window.removeEventListener("resize", syncActive);
    };
  }, [syncActive]);

  const goTo = (i: number) => {
    const track = trackRef.current;
    const el = track?.children[i] as HTMLElement | undefined;
    if (!track || !el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({
      left: el.offsetLeft - (track.clientWidth - el.offsetWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  const many = items.length > 1;

  return (
    <div className="relative" role="region" aria-roledescription="carousel" aria-label="Customer stories">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[calc(50%-min(360px,38vw))] pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") goTo(Math.min(active + 1, items.length - 1));
          if (e.key === "ArrowLeft") goTo(Math.max(active - 1, 0));
        }}
        tabIndex={0}
      >
        {items.map((t, i) => {
          const isActive = i === active;
          return (
            <figure
              key={t.name}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${items.length}`}
              aria-hidden={!isActive}
              onClick={() => !isActive && goTo(i)}
              className={`w-[min(720px,76vw)] shrink-0 snap-center rounded-3xl border border-line bg-white p-8 shadow-[var(--shadow-card)] transition-[filter,opacity,transform] duration-500 sm:p-12 ${
                isActive ? "scale-100 opacity-100 blur-0" : "scale-[0.94] cursor-pointer opacity-50 blur-[3px]"
              }`}
            >
              <svg aria-hidden="true" viewBox="0 0 32 32" className="h-10 w-10 text-brand/20" fill="currentColor">
                <path d="M9.3 6C5.3 8.4 2.7 12.3 2.7 17.4c0 4.3 2.5 7.3 6 7.3 3 0 5.2-2.2 5.2-5.1 0-2.8-2-4.9-4.6-4.9-.5 0-1.1.1-1.3.2.6-3.2 3.4-6.6 6.3-8.3L9.3 6Zm14.6 0c-4 2.4-6.6 6.3-6.6 11.4 0 4.3 2.5 7.3 6 7.3 3 0 5.2-2.2 5.2-5.1 0-2.8-2-4.9-4.6-4.9-.5 0-1.1.1-1.3.2.6-3.2 3.4-6.6 6.3-8.3L23.9 6Z" />
              </svg>
              <blockquote className="mt-4 text-lg leading-relaxed text-ink sm:text-xl sm:leading-relaxed">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.photo}
                  alt={`${t.name}, ${t.role}, ${t.company}`}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="h-16 w-16 shrink-0 rounded-full object-cover ring-4 ring-brand-tint"
                />
                <div>
                  <div className="text-base font-semibold text-ink">{t.name}</div>
                  <div className="text-sm text-muted">
                    {t.role}, {t.company}
                  </div>
                </div>
              </figcaption>
            </figure>
          );
        })}
      </div>

      {many && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => goTo(Math.max(active - 1, 0))}
            disabled={active === 0}
            aria-label="Previous story"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-brand hover:text-brand disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="M12.5 15 7.5 10l5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="flex gap-2">
            {items.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show story ${i + 1}: ${t.name}`}
                aria-current={i === active}
                className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-brand" : "w-2 bg-line hover:bg-brand/40"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(Math.min(active + 1, items.length - 1))}
            disabled={active === items.length - 1}
            aria-label="Next story"
            className="grid h-10 w-10 place-items-center rounded-full border border-line bg-white text-ink transition hover:border-brand hover:text-brand disabled:opacity-40 disabled:hover:border-line disabled:hover:text-ink"
          >
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="m7.5 15 5-5-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
