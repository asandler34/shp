import type { Metadata } from "next";
import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { ProcessSteps } from "@/components/ProcessSteps";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/home-independence" },
  title: "Home Independence",
  description:
    "Property stewardship that helps older homeowners and families keep the home manageable. Seacoast Home Partners manages the property, not the resident.",
};

const burdens = [
  "HVAC service",
  "Plumbing",
  "Electrical work",
  "Landscaping",
  "Seasonal preparation",
  "Repairs",
  "Contractors",
  "Warranties",
  "Maintenance schedules",
  "Improvement projects",
];

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
      <Section
        containerClassName="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24"
      >
        <div>
          <Eyebrow>Home Independence</Eyebrow>
          <h1 className="mt-3 max-w-xl font-serif text-[2.05rem] leading-[1.15] font-semibold tracking-tight sm:text-[2.5rem]">
            Stay independent at home.
            <br />
            Let us manage more of the home.
          </h1>
          <Lead>
            Seacoast Home Partners helps keep the property maintained,
            organized, and professionally coordinated so homeowners and their
            families have fewer home related details to manage.
          </Lead>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-muted">
            Property stewardship for the home. Not care of the person.
          </p>
          <CtaLink href="/#contact" className="mt-8 w-full sm:w-auto">
            START WITH A HOME OPERATIONS ASSESSMENT
          </CtaLink>
          <p className="mt-4 text-sm text-muted">${pricing.assessment}</p>
        </div>
        <PropertyImage
          kind="interior" priority
          className="min-h-[20rem] lg:min-h-[26rem]"
        />
      </Section>

      <Section tone="cream">
        <Eyebrow>The property burden</Eyebrow>
        <Heading>A home can become a lot to manage.</Heading>
        <Lead>
          Over time, even a well maintained home develops more moving pieces.
          The homeowner or an adult child often becomes the person responsible
          for remembering and coordinating all of it.
        </Lead>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {burdens.map((item) => (
            <li
              key={item}
              className="border border-deep-slate/12 bg-ivory px-5 py-4 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
          Seacoast Home Partners provides one accountable local partner
          focused on the property — so the responsibilities of homeownership
          remain manageable.
        </p>
      </Section>

      <Section>
        <Eyebrow>How it works</Eyebrow>
        <Heading>A clear plan. Less for you to coordinate.</Heading>
        <Lead>
          We start by understanding the property and building a plan. Our aim is to
          keep the home manageable, reduce the property burden, and leave the
          homeowner in control of decisions and spending.
        </Lead>
        <ProcessSteps />
      </Section>

      <Section tone="cream">
        <Eyebrow>What SHP manages</Eyebrow>
        <Heading>Keeping the home easier to run.</Heading>
        <Lead>
          Seacoast Home Partners maintains the property plan, coordinates
          qualified professionals, organizes property information, oversees
          authorized projects, and can keep an authorized family member
          informed about property matters.
        </Lead>
        <ul className="mt-10 space-y-3">
          {managed.map((item) => (
            <li
              key={item}
              className="border-t border-deep-slate/12 pt-3 text-[0.98rem] first:border-t-0 first:pt-0"
            >
              {item}
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Eyebrow>Maintenance planning</Eyebrow>
        <Heading>A plan for what the home needs next.</Heading>
        <Lead>
          Every property receives its own maintenance calendar. Recurring
          service, seasonal needs, and upcoming priorities stay visible. The
          homeowner decides what work gets authorized.
        </Lead>
        <div className="mt-10 border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-xs uppercase tracking-widest text-muted">Illustrative Home Operations Plan</p>
          <dl className="mt-6 grid gap-6 sm:grid-cols-3">
            <div><dt className="font-serif text-xl">Know the home</dt><dd className="mt-2 text-sm text-muted">Systems, vendors, manuals, and service history.</dd></div>
            <div><dt className="font-serif text-xl">Plan ahead</dt><dd className="mt-2 text-sm text-muted">Seasonal maintenance and upcoming property priorities.</dd></div>
            <div><dt className="font-serif text-xl">Keep control</dt><dd className="mt-2 text-sm text-muted">Recommendations and work authorized by the homeowner.</dd></div>
          </dl>
        </div>
      </Section>

      <Section tone="cream">
        <Eyebrow>Family property updates</Eyebrow>
        <Heading>One property plan. Clear communication.</Heading>
        <Lead>
          With the homeowner&apos;s authorization, Seacoast Home Partners can
          provide an authorized family member with updates about property
          maintenance, repairs, contractor activity, projects, and other home
          related matters.
        </Lead>
        <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
          The homeowner remains in control of decisions and spending. Updates
          concern the property. They are not resident monitoring, and they do
          not include health, behavior, cognition, safety, medication, or
          wellness observations.
        </p>
      </Section>

      <Section>
        <Eyebrow>Accessibility and home improvement</Eyebrow>
        <Heading>Adapt the home when the home needs to change.</Heading>
        <Lead>
          When a homeowner wants changes that make the property easier to use,
          Seacoast Home Partners can help coordinate owner requested
          improvements with qualified professionals.
        </Lead>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {accessibility.map((item) => (
            <li
              key={item}
              className="border border-deep-slate/12 bg-paper px-5 py-4 text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-8 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
          Projects are owner requested and completed by qualified contractors.
          Seacoast Home Partners does not assess the resident&apos;s physical
          ability or personal safety, and does not prescribe accessibility
          improvements based on medical judgment.
        </p>
      </Section>

      <Section tone="cream">
        <Eyebrow>Membership</Eyebrow>
        <Heading>How membership works.</Heading>
        <p className="mt-5 font-serif text-3xl tracking-tight">
          ${pricing.membership}
          <span className="ml-2 text-lg font-sans text-muted">per month</span>
        </p>
        <Lead>
          Ongoing Home Stewardship is the recurring relationship behind Home
          Independence. It includes a scheduled monthly property visit, a
          property report with photographs, the maintenance calendar, record
          management, review of upcoming needs, up to 30 minutes of routine
          monthly coordination, priority scheduling, and access to concierge
          and project management services.
        </Lead>
        <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
          Membership does not include unlimited service. Additional concierge
          is ${pricing.concierge} per hour. Project management is separately
          scoped and priced. When a request falls outside the recurring
          scope, expected pricing is explained before meaningful additional
          work begins.
        </p>
      </Section>

      <Section>
        <Eyebrow>Boundaries</Eyebrow>
        <Heading>Focused on the home.</Heading>
        <Lead>
          Home Independence is property stewardship. Seacoast Home Partners
          manages property maintenance, vendors, records, and authorized home
          projects. It does not provide personal care or caregiving.
        </Lead>
        <p className="mt-8 font-serif text-2xl leading-snug tracking-tight">
          We manage the property, not the resident.
        </p>
        <div className="mt-10 border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Home Independence does not include
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {notProvided.map((item) => (
              <li key={item} className="text-sm leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
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
          maintenance priorities, and create a practical operating plan. From
          there, you can decide whether ongoing stewardship makes sense.
        </p>
        <CtaLink href="/#contact" variant="onDark" className="mt-8 w-full sm:w-auto">
          START WITH A HOME OPERATIONS ASSESSMENT
        </CtaLink>
      </Section>
    </main>
  );
}
