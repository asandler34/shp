import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCta } from "@/components/sections/FinalCta";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/home-independence" },
  title: { absolute: "Home Help for Older Homeowners & Families | Seacoast Home Partners" },
  description:
    "Help your parents stay in the home they love. Property maintenance, contractor coordination, and family updates for older homeowners in Rye, Portsmouth, New Castle, and North Hampton, NH. We manage the property, not the resident.",
};

const managed = [
  "The property plan and maintenance calendar",
  "Scheduled property visits and reports",
  "Vendor coordination and contractor access",
  "Home systems and service records",
  "Seasonal property needs",
  "Authorized repairs and improvement projects",
  "Property updates to an authorized family member",
  "Owner requested accessibility improvements completed by qualified contractors",
];

const concierge = [
  "Be at the house for the furnace, plumber, or electrician visit",
  "Collect quotes for a new roof or bathroom update and explain them in plain language",
  "Arrange and oversee railings, better lighting, or an easier entry",
  "Send the family a photo update after each visit and each repair",
];

const accessibility = [
  "Improved lighting",
  "Railings",
  "Doorway modifications",
  "Bathroom modifications",
  "Entry improvements",
  "Other owner requested property modifications",
];

const notProvided = [
  "Transportation or transportation coordination",
  "Companionship",
  "Wellness checks",
  "Medication assistance",
  "Meal preparation",
  "Grocery shopping",
  "Laundry",
  "Housekeeping by Seacoast Home Partners personnel",
  "Bathing, dressing, transfers, or mobility assistance",
  "Medical scheduling",
  "Caregiver management",
  "Health monitoring",
  "Personal emergency response",
  "Resident safety assessments",
  "Assessment of whether someone can live alone",
  "Control of client money",
  "Routine bill payment",
];

export default function HomeIndependencePage() {
  return (
    <main id="main">
      <Section containerClassName="grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24">
        <div>
          <Eyebrow>Home Independence</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif text-[2.15rem] leading-[1.12] font-semibold tracking-tight sm:text-[2.6rem]">
            Help your parents stay in the home they love.
          </h1>
          <Lead>
            For homeowners over 70 who want the house kept up without the
            hassle, and for their grown children who live away and want one
            local person they can trust with the house.
          </Lead>
          <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Property stewardship for the home. Not care of the person.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#contact" className="w-full sm:w-auto">DISCUSS YOUR HOME</CtaLink>
            <CtaLink href={brand.phoneHref} variant="secondary" className="w-full sm:w-auto">CALL {brand.phone}</CtaLink>
          </div>
        </div>
        <PropertyImage kind="interior" priority className="min-h-[18rem] lg:min-h-[26rem]" />
      </Section>

      <Section tone="cream">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Concierge for families</Eyebrow>
            <Heading>The home to do list. Taken care of.</Heading>
            <ul className="mt-8 space-y-3">
              {concierge.map((item) => (
                <li key={item} className="border-t border-deep-slate/10 pt-3 text-[1.02rem] leading-relaxed first:border-t-0 first:pt-0">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>What we manage</Eyebrow>
            <Heading>Keeping the home easier to run.</Heading>
            <ul className="mt-8 space-y-3">
              {managed.map((item) => (
                <li key={item} className="border-t border-deep-slate/10 pt-3 text-[1.02rem] leading-relaxed first:border-t-0 first:pt-0">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <Eyebrow>Family property updates</Eyebrow>
        <Heading>One property plan. Clear communication.</Heading>
        <Lead>
          With the homeowner&apos;s authorization, Seacoast Home Partners can
          provide an authorized family member with updates about property
          maintenance, repairs, contractor activity, projects, and other home
          related matters.
        </Lead>
        <p className="mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
          The homeowner remains in control of decisions and spending. Updates
          concern the property. They are not resident monitoring, and they do
          not include health, behavior, cognition, safety, medication, or
          wellness observations.
        </p>
      </Section>

      <Section tone="cream">
        <Eyebrow>Accessibility and home improvement</Eyebrow>
        <Heading>Adapt the home when the home needs to change.</Heading>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {accessibility.map((item) => (
            <li key={item} className="border border-deep-slate/12 bg-paper px-5 py-4 text-[1.02rem]">{item}</li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[1.02rem] leading-relaxed text-muted">
          Projects are owner requested and completed by qualified contractors.
          Seacoast Home Partners does not assess the resident&apos;s physical
          ability or personal safety, and does not prescribe accessibility
          improvements based on medical judgment.
        </p>
      </Section>

      <Pricing />

      <Section>
        <Eyebrow>Boundaries</Eyebrow>
        <Heading>We manage the property, not the resident.</Heading>
        <Lead>
          Home Independence is property stewardship. Seacoast Home Partners
          manages property maintenance, vendors, records, and authorized home
          projects. It does not provide personal care or caregiving.
        </Lead>
        <div className="mt-8 border border-deep-slate/12 bg-paper p-6 sm:p-7">
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-muted">
            Home Independence does not include
          </p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {notProvided.map((item) => (
              <li key={item} className="text-[0.98rem] leading-relaxed text-muted">{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <FinalCta />
    </main>
  );
}
