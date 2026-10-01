import type { NextConfig } from "next";

if (process.env.SHP_PUBLIC_LAUNCH === "true") {
  const endpoint = process.env.INQUIRY_WEBHOOK_URL;
  const hasEmail = process.env.RESEND_API_KEY && process.env.INQUIRY_FROM_EMAIL;
  if ((!endpoint && !hasEmail) || (endpoint && new URL(endpoint).protocol !== "https:")) {
    throw new Error("Public launch requires a configured inquiry destination.");
  }
}

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
