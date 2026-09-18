import type { CollectionConfig } from "payload";

// Admin users who sign in to the Payload panel to manage blog posts and leads.
export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: { useAsTitle: "name", defaultColumns: ["name", "email"] },
  fields: [{ name: "name", type: "text", required: true }],
};
