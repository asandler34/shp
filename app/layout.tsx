import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seacoasthomepartners.com"),
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Seacoast Home Partners", locale: "en_US" },
  robots: { index: process.env.SHP_PUBLIC_LAUNCH === "true", follow: process.env.SHP_PUBLIC_LAUNCH === "true" },
  title: {
    default: "Seacoast Home Partners | Home Management & Property Stewardship",
    template: "%s | Seacoast Home Partners",
  },
  description:
    "Home management and property stewardship for second home owners, busy homeowners, and families in Rye, New Castle, Portsmouth, and North Hampton, New Hampshire.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-deep-slate">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-deep-slate focus:px-4 focus:py-2 focus:text-ivory"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
