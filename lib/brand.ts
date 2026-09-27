// NeevHR brand v2.0 (27 Sep 2026), the single source of the logo artwork on the site. Geometry is the
// brand book's (assets/brand/src/logo_geom.py in the product repo), the same the product app renders.
//
// Wordmark rule (owner): where the NAME appears as a brand lockup, use the wordmark alone. Never put the
// pebble mark next to a "NeevHR" text label; the wordmark already carries the name.

export const BRAND = {
  blue: "#15147B", // Neev Blue: primary, wordmark
  night: "#0C0B4A", // Neev Night: depth, pressed
  mist: "#A9A8E8", // Neev Mist: text on Neev Blue
  pebble: "#5B45E8", // Pebble Purple: interactive, two-tone pebbles
  orange: "#E88938", // Warm Orange: the single key CTA (text on it is Charcoal)
  cream: "#F7F3EB",
  charcoal: "#24242B",
  lilac: "#EEEAFE",
} as const;

/** Width : height of the wordmark artwork (viewBox 1059 x 258). */
export const WORDMARK_RATIO = 1059 / 258;

/** The "neevHR" wordmark with its three pebbles on the v, as an SVG string. */
export function wordmarkSvg(color: string = BRAND.blue, pebbleColor: string = color): string {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="11 50 1059 258" role="img" aria-label="NeevHR">` +
    `<g fill="none" stroke="${color}" stroke-width="32" stroke-linecap="round" stroke-linejoin="round">` +
    `<path d="M29 290 L29 209 A84 84 0 0 1 197 209 L197 236"/>` +
    `<path d="M381.0 228.5 A64 61.5 0 1 0 363.8 270.4"/>` +
    `<path d="M315.0 226 L381.0 226" stroke-width="29"/>` +
    `<path d="M552.0 228.5 A64 61.5 0 1 0 534.8 270.4"/>` +
    `<path d="M486.0 226 L552.0 226" stroke-width="29"/>` +
    `<path d="M742.5 163 L742.5 290 M872 163 L872 290 M742.5 225 L872 225"/>` +
    `<path d="M925 162 L1018 162 A34.5 34.5 0 0 1 1018 231 L950 231 Q918 231 918 263 L918 290"/>` +
    `<path d="M999 231 L1050 290"/>` +
    `<path d="M582 186 L636 290 L699 184"/>` +
    `</g>` +
    `<g fill="${color}"><path d="M181 232 L181 240 C184 283 210 305 272 306 C258 304 222 285 213 240 L213 232 Z"/></g>` +
    `<g fill="${pebbleColor}">` +
    `<ellipse cx="640" cy="160.5" rx="62" ry="21.5" transform="rotate(-3 640 160.5)"/>` +
    `<ellipse cx="641" cy="114" rx="51" ry="20" transform="rotate(-2 641 114)"/>` +
    `<ellipse cx="645.5" cy="71" rx="33" ry="15" transform="rotate(-24 645.5 71)"/>` +
    `</g></svg>`
  );
}

/** The app icon: the Neev mark (n flowing into v, three pebbles) in white on a Neev Blue tile. */
export function appIconSvg(tile: string = BRAND.blue, mark: string = "#FFFFFF"): string {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" role="img" aria-label="NeevHR">` +
    `<rect width="1024" height="1024" rx="230" fill="${tile}"/>` +
    `<g transform="translate(-77.72 -80.99) scale(0.93237)">` +
    `<path d="M349 840 L349 700 C349 620 410 566 484 566 C540 566 578 600 603 645 L692 800 Q734 874 792 800 L917 641" fill="none" stroke="${mark}" stroke-width="70" stroke-linecap="round" stroke-linejoin="round"/>` +
    `<g fill="${mark}">` +
    `<ellipse cx="779" cy="603.5" rx="125" ry="44.5" transform="rotate(-3.5 779 603.5)"/>` +
    `<ellipse cx="797.5" cy="509.5" rx="94.5" ry="39" transform="rotate(-3 797.5 509.5)"/>` +
    `<ellipse cx="808.5" cy="428.5" rx="60" ry="22" transform="rotate(-18 808.5 428.5)"/>` +
    `</g></g></svg>`
  );
}

/** An SVG string as a data URI (for <img> in generated images). */
export function svgDataUri(svg: string): string {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
