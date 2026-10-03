import type { Metadata } from "next";
import { Inter, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Analytics } from "@/components/Analytics";
import { brand, pricing, towns } from "@/lib/site";
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
    default: "Home Watch & Home Management in Rye, NH | Seacoast Home Partners",
    template: "%s | Seacoast Home Partners",
  },
  description:
    "Home watch and home management for second homes and older homeowners in Rye, New Castle, Portsmouth, and North Hampton, NH. 50 point monthly visits, photo reports, clear pricing. Call (603) 396-7828.",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: brand.name,
  description: brand.descriptor,
  url: "https://seacoasthomepartners.com",
  telephone: "+1-603-396-7828",
  email: brand.email,
  image: "https://seacoasthomepartners.com/opengraph-image",
  address: { "@type": "PostalAddress", addressLocality: "Rye", addressRegion: "NH", addressCountry: "US" },
  areaServed: towns.map((t) => ({ "@type": "City", name: `${t}, NH` })),
  founder: { "@type": "Person", name: brand.founder },
  priceRange: `$${pricing.membership} to $${pricing.concierge} per month`,
  logo: "https://seacoasthomepartners.com/icon.svg",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  makesOffer: [
    { "@type": "Offer", name: "Home Operations Assessment", price: pricing.assessment, priceCurrency: "USD" },
    { "@type": "Offer", name: "Home Stewardship membership", price: pricing.membership, priceCurrency: "USD" },
    { "@type": "Offer", name: "Concierge membership", price: pricing.concierge, priceCurrency: "USD" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        {children}
        <Footer />
        {process.env.SHP_PUBLIC_LAUNCH === "true" ? <Analytics /> : null}
      </body>
    </html>
  );
}
