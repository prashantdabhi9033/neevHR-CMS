import type { CollectionConfig } from "payload";
import path from "path";

// Uploaded images for blog posts. Stored under public/media so Next serves them.
export const Media: CollectionConfig = {
  slug: "media",
  access: { read: () => true },
  upload: {
    staticDir: path.resolve(process.cwd(), "public/media"),
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "card", width: 768, height: 480, position: "centre" },
      { name: "hero", width: 1600, height: 900, position: "centre" },
    ],
  },
  fields: [{ name: "alt", type: "text", label: "Alt text" }],
};
