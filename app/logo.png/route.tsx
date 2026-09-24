import { ImageResponse } from "next/og";

// 512×512 raster logo for schema.org Organization.logo (Google requires a
// raster image of at least 112px; the favicon SVG is too small for that).
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
        <div
          style={{
            width: 448,
            height: 448,
            borderRadius: 112,
            background: "#4338ca",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: 300,
              fontWeight: 800,
              lineHeight: 1,
              marginTop: -20,
            }}
          >
            N
          </div>
          <div
            style={{
              width: 150,
              height: 34,
              borderRadius: 17,
              background: "#10b981",
              marginTop: 18,
            }}
          />
        </div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
