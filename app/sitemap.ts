import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
 return ["", "/property-stewardship", "/home-independence", "/privacy"].map(path => ({ url: `https://seacoasthomepartners.com${path}`, changeFrequency: "monthly" as const }));
}
