import { ImageResponse } from "next/og";
import { appIconSvg, svgDataUri } from "@/lib/brand";

// 512×512 raster logo for schema.org Organization.logo (Google requires a
// raster image of at least 112px; the favicon SVG is too small for that).
// The brand v2.0 app icon: the Neev mark in white on a Neev Blue tile.
export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={svgDataUri(appIconSvg())} width={448} height={448} alt="NeevHR" />
      </div>
    ),
    { width: 512, height: 512 },
  );
}
