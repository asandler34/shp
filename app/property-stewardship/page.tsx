import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { Pricing } from "@/components/sections/Pricing";
import { VisitChecklist } from "@/components/sections/VisitChecklist";
import { FinalCta } from "@/components/sections/FinalCta";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/property-stewardship" },
  title: { absolute: "Second Home Management, Rye & Portsmouth NH | Seacoast Home Partners" },
  description:
    "Second home and seasonal home management on the New Hampshire Seacoast: monthly visits with photo reports, storm checks, vendor coordination, concierge, and project oversight.",
};

const handled = [
  { title: "50 point monthly visits", body: "A full property check and a photo report you can read from anywhere." },
  { title: "Storm and seasonal checks", body: "Opening, closing, and a look at the property after a storm." },
  { title: "Vendors and access", body: "We schedule the professionals, let them in, and confirm the work." },
  { title: "Your maintenance calendar", body: "Recurring service and upcoming needs, planned ahead." },
  { title: "Deliveries and installations", body: "Someone at the house when it needs to be you." },
  { title: "Records in one place", body: "Reports, vendors, warranties, manuals, and project history, all yours." },
];

export default function PropertyStewardshipPage() {
  return (
    <main id="main">
      <Section containerClassName="grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>Second homes and seasonal residents</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif text-[2.15rem] leading-[1.12] font-semibold tracking-tight sm:text-[2.6rem]">
            Your home does not stop needing attention when you leave.
          </h1>
          <Lead>
            One local partner who visits, reports, coordinates the
            professionals, and handles the to do list while you are away.
          </Lead>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#contact" className="w-full sm:w-auto">DISCUSS YOUR HOME</CtaLink>
            <CtaLink href={brand.phoneHref} variant="secondary" className="w-full sm:w-auto">CALL {brand.phone}</CtaLink>
          </div>
        </div>
        <PropertyImage priority className="min-h-[18rem] lg:min-h-[26rem]" />
      </Section>

      <Section tone="cream">
        <Eyebrow>What we handle</Eyebrow>
        <Heading>Everything the house needs while you are somewhere else.</Heading>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {handled.map((item) => (
            <article key={item.title} className="border border-deep-slate/12 bg-ivory p-6">
              <h2 className="font-serif text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-[1.02rem] leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-[1.02rem] leading-relaxed text-muted">
          Qualified professionals perform all trade work. We are not a general
          contractor, and your existing vendors can stay your vendors.
        </p>
      </Section>

      <VisitChecklist />
      <Pricing />
      <FinalCta />
    </main>
  );
}
