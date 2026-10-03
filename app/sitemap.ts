import type { MetadataRoute } from "next";
import { townPages } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/property-stewardship", "/home-independence", ...townPages.map((t) => `/areas/${t.slug}`), "/privacy"];
  return paths.map((path) => ({
    url: `https://seacoasthomepartners.com${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : path === "/privacy" ? 0.3 : 0.8,
  }));
}
