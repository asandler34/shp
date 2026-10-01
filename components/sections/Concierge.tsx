import { PropertyImage } from "@/components/PropertyImage";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

const forOwners = [
  "Let a repair person in, stay for the visit, and confirm the work is done",
  "Schedule seasonal service and follow up until it happens",
  "Meet a delivery or installation that needs someone at the house",
];

const forFamilies = [
  "Be at the house for the furnace service so Mom or Dad does not have to manage it",
  "Collect quotes for a new roof or a bathroom update and explain them in plain language",
  "Send the family a photo update after each visit and each repair",
];

export function Concierge() {
  return (
    <Section id="concierge">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
        <div>
          <Eyebrow>Concierge</Eyebrow>
          <Heading>The home to do list. Taken care of.</Heading>
          <Lead>
            Tell us what needs to happen at the house. We arrange it, show up
            for it, and close the loop.
          </Lead>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">For homeowners</p>
              <ul className="mt-4 space-y-3">
                {forOwners.map((i) => (
                  <li key={i} className="border-t border-deep-slate/10 pt-3 text-[1.02rem] leading-relaxed first:border-t-0 first:pt-0">{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">For older homeowners and their families</p>
              <ul className="mt-4 space-y-3">
                {forFamilies.map((i) => (
                  <li key={i} className="border-t border-deep-slate/10 pt-3 text-[1.02rem] leading-relaxed first:border-t-0 first:pt-0">{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-10 border-t border-deep-slate/12 pt-6 text-[1.05rem]">
            <span className="font-serif text-2xl tracking-tight">${pricing.concierge}</span>
            <span className="text-muted"> per month. Includes Home Stewardship and up to {pricing.conciergeHours} hours of concierge.</span>
          </p>
          <p className="mt-2 text-sm text-muted">
            Projects are {pricing.projectPercent}% of project cost. Property tasks only: we manage the home, not the resident.
          </p>
        </div>
        <PropertyImage kind="interior" className="hidden min-h-[18rem] lg:block lg:min-h-[30rem]" />
      </div>
    </Section>
  );
}
