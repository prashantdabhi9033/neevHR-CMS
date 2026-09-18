import type { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

const slugify = (v: string) =>
  v
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

// Blog posts. Published posts appear on the site without a redeploy:
// afterChange revalidates the affected paths (on-demand ISR).
export const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "slug", "_status", "publishedAt"],
    description: "Blog and resource articles shown at /blog.",
  },
  access: {
    read: ({ req }) => {
      if (req.user) return true;
      // Public visitors only see published posts.
      return { _status: { equals: "published" } };
    },
  },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    {
      name: "slug",
      type: "text",
      unique: true,
      index: true,
      admin: {
        position: "sidebar",
        description: "Auto-filled from the title if left blank.",
      },
    },
    {
      name: "excerpt",
      type: "textarea",
      maxLength: 240,
      admin: { description: "One or two lines shown on the blog listing." },
    },
    { name: "coverImage", type: "upload", relationTo: "media" },
    { name: "content", type: "richText" },
    {
      name: "author",
      type: "text",
      admin: { position: "sidebar" },
    },
    {
      name: "publishedAt",
      type: "date",
      admin: {
        position: "sidebar",
        date: { pickerAppearance: "dayOnly" },
      },
    },
  ],
  hooks: {
    beforeValidate: [
      ({ data }) => {
        if (data && !data.slug && data.title) {
          data.slug = slugify(data.title);
        }
        return data;
      },
    ],
    afterChange: [
      ({ doc }) => {
        try {
          revalidatePath("/blog");
          if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
        } catch {
          // Not in a request context (e.g. seeding); ignore.
        }
        return doc;
      },
    ],
    afterDelete: [
      ({ doc }) => {
        try {
          revalidatePath("/blog");
          if (doc?.slug) revalidatePath(`/blog/${doc.slug}`);
        } catch {
          // ignore
        }
        return doc;
      },
    ],
  },
};
