import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { Section } from "@/components/Section";
import { pricing, townsLine } from "@/lib/site";

export function Hero() {
  return (
    <Section
      id="top"
      containerClassName="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24"
    >
      <div>
        <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
          HOME MANAGEMENT & PROPERTY STEWARDSHIP
        </p>
        <h1 className="mt-4 max-w-xl font-serif text-[2.15rem] leading-[1.15] font-semibold tracking-tight sm:text-[2.65rem] lg:text-[2.9rem]">
          Your home, Handled.
        </h1>
        <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-muted">
          Seacoast Home Partners keeps the property maintained, organized, and
          moving forward by managing the maintenance plan, coordinating
          qualified professionals, and overseeing the work you choose to
          delegate.
        </p>
        <p className="mt-4 max-w-xl text-[1.05rem] leading-relaxed text-muted">
          For second home owners, busy homeowners, and families who want a
          trusted local partner managing the property.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaLink href="/#contact" className="w-full sm:w-auto">
            BOOK A HOME OPERATIONS ASSESSMENT
          </CtaLink>
          <CtaLink
            href="/#how-it-works"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            SEE HOW IT WORKS
          </CtaLink>
        </div>
        <p className="mt-4 text-sm text-muted">
          ${pricing.assessment} · Understand the property. Build the plan.
        </p>
        <p className="mt-6 text-sm tracking-wide text-muted">{townsLine}</p>
      </div>

      <PropertyImage
        priority
        className="min-h-[22rem] sm:min-h-[26rem] lg:min-h-[32rem]"
      />
    </Section>
  );
}
