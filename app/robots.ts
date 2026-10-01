import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
 return { rules: { userAgent: "*", ...(process.env.SHP_PUBLIC_LAUNCH === "true" ? { allow: "/" } : { disallow: "/" }) }, sitemap: "https://seacoasthomepartners.com/sitemap.xml" };
}
