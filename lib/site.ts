export const brand = {
  name: "Seacoast Home Partners",
  descriptor: "Home Management & Property Stewardship",
  headline: "Your home, Handled.",
  legal: "Granite Coast Ventures, LLC d/b/a Seacoast Home Partners",
  location: "Rye, New Hampshire",
  founder: "Adam",
  email: "seacoasthomepartners@gmail.com",
} as const;

export const towns = [
  "Rye",
  "New Castle",
  "Portsmouth",
  "North Hampton",
] as const;

export const townsLine = "Rye · New Castle · Portsmouth · North Hampton";

export const pricing = {
  assessment: 399,
  membership: 399,
  concierge: 175,
} as const;

export const nav = [
  { href: "/property-stewardship", label: "Property Stewardship" },
  { href: "/home-independence", label: "Home Independence" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#about", label: "About & Trust" },
  { href: "/#contact", label: "Contact" },
] as const;

export const operatingSteps = [
  {
    name: "Assess",
    body: "Understand the property, systems, vendors, maintenance needs, and priorities.",
  },
  {
    name: "Plan",
    body: "Build the Home Operations Plan and maintenance calendar.",
  },
  {
    name: "Steward",
    body: "Maintain ongoing knowledge of the property through visits, records, planning, and follow through.",
  },
  {
    name: "Handle",
    body: "When something needs to happen, the homeowner chooses whether to manage it personally, work directly with a vendor, or ask Seacoast Home Partners to coordinate it.",
  },
] as const;
