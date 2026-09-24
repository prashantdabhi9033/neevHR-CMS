import type { CollectionConfig } from "payload";

const authed = ({ req }: { req: { user?: unknown } }) => Boolean(req.user);

// Demo-request submissions. Created by the /api/demo-request route (Local API,
// which overrides access). Only signed-in admins can read or manage them.
export const Leads: CollectionConfig = {
  slug: "leads",
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "company", "intent", "email", "size", "createdAt"],
    description: "Demo requests submitted from the website.",
    group: "Sales",
  },
  access: {
    read: authed,
    update: authed,
    delete: authed,
    create: () => false, // only via the server route's Local API
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "email", type: "email", required: true },
    { name: "company", type: "text", required: true },
    {
      name: "intent",
      type: "select",
      defaultValue: "demo",
      admin: { position: "sidebar" },
      options: [
        { label: "Demo request", value: "demo" },
        { label: "Quote request", value: "quote" },
      ],
    },
    {
      name: "size",
      type: "select",
      options: [
        "Under 100",
        "100 - 500",
        "500 - 1,000",
        "1,000 - 2,500",
        "2,500 - 5,000",
        "5,000+",
        "Other",
      ],
    },
    { name: "phone", type: "text" },
    { name: "role", type: "text" },
    { name: "currentHrms", type: "text", label: "Current HRMS" },
    { name: "requirement", type: "text", label: "Primary requirement" },
    { name: "preferredDate", type: "text", label: "Preferred demo date" },
    { name: "message", type: "textarea" },
    {
      name: "status",
      type: "select",
      defaultValue: "new",
      admin: { position: "sidebar" },
      options: [
        { label: "New", value: "new" },
        { label: "Contacted", value: "contacted" },
        { label: "Qualified", value: "qualified" },
        { label: "Closed", value: "closed" },
      ],
    },
  ],
};
