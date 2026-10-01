import { CtaLink } from "@/components/CtaLink";
import { Heading, Section } from "@/components/Section";

export function HomeownershipOffers() {
  return (
    <Section>
      <Heading>Two ways to make homeownership easier.</Heading>
      <div className="mt-12 grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            PROPERTY STEWARDSHIP
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            Less to manage. More confidence in the property.
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-muted">
            For second home owners, seasonal residents, frequent travelers,
            and busy homeowners who want one accountable local partner
            keeping track of the home.
          </p>
          <CtaLink href="/property-stewardship" className="mt-8 w-full">
            EXPLORE PROPERTY STEWARDSHIP
          </CtaLink>
        </article>

        <article className="flex flex-col border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            HOME INDEPENDENCE
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            Stay independent at home. Let us manage more of the home.
          </h3>
          <p className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-muted">
            For older homeowners and families who want the property
            maintained, organized, and professionally coordinated so the
            responsibilities of homeownership remain manageable.
          </p>
          <CtaLink href="/home-independence" className="mt-8 w-full">
            EXPLORE HOME INDEPENDENCE
          </CtaLink>
        </article>
      </div>
    </Section>
  );
}
