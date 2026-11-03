// Server-only helper for the generated logo and OG images. Kept out of
// lib/brand.ts because the header imports that file on the client, and the
// Buffer use here would pull a Node Buffer polyfill into every page's JS.
/** An SVG string as a data URI (for <img> in generated images). */
export function svgDataUri(svg: string): string {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
}
