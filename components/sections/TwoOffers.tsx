import { CtaLink } from "@/components/CtaLink";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";

const stewardshipItems = [
  "Scheduled property visits",
  "Property reports",
  "Maintenance calendar management",
  "Seasonal preparation",
  "Storm related property review",
  "Vendor coordination",
  "Contractor access",
  "Property documentation",
  "Concierge support",
  "Project management",
];

const independenceItems = [
  "Property maintenance planning",
  "Scheduled property visits and reports",
  "Vendor coordination",
  "Contractor access",
  "Home systems and service records",
  "Seasonal property needs",
  "Repair and improvement project oversight",
  "Property updates to an authorized family member",
  "Owner requested accessibility improvements completed by qualified contractors",
];

export function TwoOffers() {
  return (
    <Section id="offers">
      <Eyebrow>What we can handle</Eyebrow>
      <Heading>Support shaped around your home.</Heading>
      <Lead>
        Whether you are away from home or want less to coordinate while living
        there, we bring a clear property plan and one local point of contact.
      </Lead>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Property Stewardship
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            Less to manage. More confidence in the property.
          </h3>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
            For second home owners, seasonal residents, frequent travelers,
            and busy homeowners who want one accountable local partner
            keeping track of the home.
          </p>
          <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Property Stewardship may include
          </p>
          <ul className="mt-4 flex-1 space-y-2">
            {stewardshipItems.map((item) => (
              <li
                key={item}
                className="border-t border-deep-slate/10 pt-2 text-sm first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Visits, seasonal preparation, and coordination are shaped around
            your property and agreed service scope.
          </p>
          <CtaLink href="/property-stewardship" className="mt-8 w-full">
            EXPLORE PROPERTY STEWARDSHIP
          </CtaLink>
        </article>

        <article className="flex flex-col border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Home Independence
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            Stay independent at home. Let us manage more of the home.
          </h3>
          <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
            For older homeowners and families who want the property
            maintained, organized, and professionally coordinated so the
            responsibilities of homeownership remain manageable.
          </p>
          <p className="mt-6 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Home Independence may include
          </p>
          <ul className="mt-4 flex-1 space-y-2">
            {independenceItems.map((item) => (
              <li
                key={item}
                className="border-t border-deep-slate/10 pt-2 text-sm first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Property stewardship for the home. Not care of the person.
          </p>
          <CtaLink href="/home-independence" className="mt-8 w-full">
            EXPLORE HOME INDEPENDENCE
          </CtaLink>
        </article>
      </div>
    </Section>
  );
}
