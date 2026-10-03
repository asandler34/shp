import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookCta } from "@/components/BookCta";
import { PropertyImage } from "@/components/PropertyImage";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { FinalCta } from "@/components/sections/FinalCta";
import { Pricing } from "@/components/sections/Pricing";
import { VisitChecklist } from "@/components/sections/VisitChecklist";
import { brand, townPages } from "@/lib/site";

export function generateStaticParams() {
  return townPages.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const t = townPages.find((x) => x.slug === slug);
  if (!t) return {};
  return {
    alternates: { canonical: `/areas/${t.slug}` },
    title: { absolute: `Home Watch & Home Management in ${t.town}, NH | Seacoast Home Partners` },
    description: `Home watch, second home management, and concierge for ${t.town}, New Hampshire. 50 point monthly visits, photo reports, and trusted contractor coordination. Call ${brand.phone}.`,
  };
}

export default async function TownPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = townPages.find((x) => x.slug === slug);
  if (!t) notFound();

  return (
    <main id="main">
      <Section containerClassName="grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>{t.town}, New Hampshire</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif text-[2.15rem] leading-[1.12] font-semibold tracking-tight sm:text-[2.6rem]">
            Home watch and home management in {t.town}, NH
          </h1>
          <Lead>{t.intro}</Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <BookCta className="w-full sm:w-auto">BOOK A FREE INTRO CALL</BookCta>
            <a href={brand.phoneHref} data-track="phone_click" className="inline-flex min-h-12 w-full items-center justify-center border border-deep-slate/25 px-6 text-sm font-medium tracking-wide sm:w-auto">
              CALL {brand.phone}
            </a>
          </div>
        </div>
        <PropertyImage priority className="min-h-[18rem] rounded-2xl lg:min-h-[26rem]" />
      </Section>
      <Section tone="cream">
        <Eyebrow>Local knowledge</Eyebrow>
        <Heading>Looking after {t.town} homes.</Heading>
        <Lead>{t.local}</Lead>
      </Section>
      <VisitChecklist />
      <Pricing />
      <FinalCta />
    </main>
  );
}
