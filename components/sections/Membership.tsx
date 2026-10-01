import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

const inclusions = [
  "One scheduled property visit each month",
  "Property report with photographs",
  "Ongoing maintenance calendar",
  "Property and vendor record management",
  "Review of upcoming maintenance needs",
  "Up to 30 minutes of routine monthly coordination",
  "Priority scheduling",
  "Access to member concierge services",
  "Access to project management services",
];

export function Membership() {
  return (
    <Section id="membership" tone="cream">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div>
          <Eyebrow>Ongoing care of the property</Eyebrow>
          <Heading>Ongoing Home Stewardship</Heading>
          <p className="mt-5 font-serif text-3xl tracking-tight">
            ${pricing.membership}
            <span className="ml-2 text-lg font-sans text-muted">per month</span>
          </p>
          <Lead>
            Keep your property plan, records, and recurring maintenance organized
            with a scheduled monthly visit and a familiar local point of contact.
          </Lead>
          <dl className="mt-8 space-y-4 border-t border-deep-slate/12 pt-6">
            <div>
              <dt className="text-sm text-muted">Additional concierge</dt>
              <dd className="mt-1 text-[1.05rem]">
                ${pricing.concierge} per hour
              </dd>
            </div>
            <div>
              <dt className="text-sm text-muted">Project management</dt>
              <dd className="mt-1 text-[1.05rem]">
                Separately scoped and priced
              </dd>
            </div>
          </dl>
        </div>
        <div className="border border-deep-slate/12 bg-ivory p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Included
          </p>
          <ul className="mt-6 space-y-3">
            {inclusions.map((item) => (
              <li
                key={item}
                className="border-t border-deep-slate/10 pt-3 text-[0.98rem] first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-8 border-t border-deep-slate/10 pt-6 text-[0.95rem] leading-relaxed text-muted">
            Membership does not include unlimited service. When a request
            falls outside the recurring scope, Seacoast Home Partners
            explains the expected pricing before undertaking meaningful
            additional work.
          </p>
        </div>
      </div>
    </Section>
  );
}
