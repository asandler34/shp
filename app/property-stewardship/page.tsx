import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/property-stewardship" },
  title: "Property Stewardship",
  description:
    "Property stewardship for second home owners, seasonal residents, and busy homeowners on the New Hampshire Seacoast. Maintenance planning, vendor coordination, and project oversight from Seacoast Home Partners.",
};

const functions = [
  {
    title: "Second home management",
    body: "One local operator who understands the property when you are somewhere else.",
  },
  {
    title: "Seasonal property services",
    body: "Opening, closing, and seasonal preparation as part of the property plan — not a separate product.",
  },
  {
    title: "Scheduled property observation",
    body: "Visits and reporting that keep the condition of the home visible over time.",
  },
  {
    title: "Storm property review",
    body: "After-storm observation of the property so issues can be documented and next steps organized.",
  },
  {
    title: "Maintenance planning",
    body: "A property-specific calendar for recurring service, seasonal needs, and upcoming priorities.",
  },
  {
    title: "Vendor coordination",
    body: "Scheduling, access, and follow through with the professionals the home already uses or needs.",
  },
  {
    title: "Contractor access",
    body: "Meeting qualified professionals at the property when you cannot or would rather not.",
  },
  {
    title: "Property records",
    body: "Reports, vendors, warranties, manuals, and project documentation kept organized for you.",
  },
  {
    title: "Concierge support",
    body: `Additional property related tasks outside the recurring membership, billed at $${pricing.concierge} per hour.`,
  },
  {
    title: "Projects",
    body: "Repairs, installations, and improvements separately scoped and coordinated with qualified professionals.",
  },
];

export default function PropertyStewardshipPage() {
  return (
    <main id="main">
      <Section
        containerClassName="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24"
      >
        <div>
          <Eyebrow>Property Stewardship</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif text-[2.05rem] leading-[1.15] font-semibold tracking-tight sm:text-[2.5rem]">
            Your home does not stop needing attention when you leave.
          </h1>
          <Lead>
            Seacoast Home Partners keeps track of the property, maintains the
            maintenance plan, coordinates qualified professionals, and manages
            the work you choose to delegate whether you are here or away.
          </Lead>
          <CtaLink href="/#contact" className="mt-8 w-full sm:w-auto">
            BOOK A HOME OPERATIONS ASSESSMENT
          </CtaLink>
          <p className="mt-4 text-sm text-muted">
            ${pricing.assessment} · Understand the property. Build the plan.
          </p>
        </div>
        <PropertyImage
          priority
          className="min-h-[20rem] lg:min-h-[26rem]"
        />
      </Section>

      <Section tone="cream">
        <Eyebrow>Inside Property Stewardship</Eyebrow>
        <Heading>One offer. The capabilities the property actually needs.</Heading>
        <Lead>
          From scheduled visits to seasonal preparation and storm property review,
          support is organized around your home and the work you choose to delegate.
        </Lead>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {functions.map((item) => (
            <article
              key={item.title}
              className="border border-deep-slate/12 bg-ivory p-7"
            >
              <h2 className="font-serif text-xl font-semibold tracking-tight">
                {item.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <Eyebrow>The process</Eyebrow>
        <Heading>Assess. Plan. Steward. Handle.</Heading>
        <Lead>
          A clear plan, ongoing oversight, and help when work needs to happen. You remain in
          control of what work is authorized and what money is spent.
        </Lead>
        <ProcessSteps />
      </Section>

      <Section tone="cream">
        <Eyebrow>Vendors and projects</Eyebrow>
        <Heading>Your vendors can stay your vendors.</Heading>
        <Lead>
          Whenever practical, contractors contract with and bill you directly.
          Seacoast Home Partners separately provides coordination, oversight,
          and project management. We are not a general contractor, and we do
          not perform licensed trade work.
        </Lead>
      </Section>

      <Section tone="slate">
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ivory/65">
          Begin
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-[1.85rem] leading-snug font-semibold tracking-tight sm:text-[2.15rem]">
          Start with a Home Operations Assessment.
        </h2>
        <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ivory/78">
          ${pricing.assessment} one time. We learn the property, organize its
          maintenance priorities, and create a practical operating plan. There
          is no requirement to become a member.
        </p>
        <CtaLink href="/#contact" variant="onDark" className="mt-8 w-full sm:w-auto">
          BOOK A HOME OPERATIONS ASSESSMENT
        </CtaLink>
      </Section>
    </main>
  );
}
