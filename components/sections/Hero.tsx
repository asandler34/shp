import { CtaLink } from "@/components/CtaLink";
import { PropertyImage } from "@/components/PropertyImage";
import { Section } from "@/components/Section";
import { brand } from "@/lib/site";

export function Hero() {
  return (
    <Section
      id="top"
      containerClassName="grid items-center gap-10 py-12 sm:py-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:py-24"
    >
      <div>
        <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
          Home management on the New Hampshire Seacoast
        </p>
        <h1 className="mt-4 max-w-xl font-serif text-[2.4rem] leading-[1.1] font-semibold tracking-tight sm:text-[2.8rem] lg:text-[3.1rem]">
          Your home, Handled.
        </h1>
        <p className="mt-6 max-w-xl font-serif text-[1.3rem] leading-snug tracking-tight">
          Maintenance planned. Professionals coordinated. Home projects moving
          forward.
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          One trusted local partner for the responsibilities you would rather
          delegate, whether you are away for the season or helping a parent
          stay in the home they love.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <CtaLink href="/#contact" className="w-full sm:w-auto">
            DISCUSS YOUR HOME
          </CtaLink>
          <CtaLink href="/#pricing" variant="secondary" className="w-full sm:w-auto">
            EXPLORE SERVICES
          </CtaLink>
        </div>
        <p className="mt-5 text-base text-muted">
          Or call{" "}
          <a href={brand.phoneHref} className="font-medium text-deep-slate underline underline-offset-4">
            {brand.phone}
          </a>
        </p>
      </div>

      <PropertyImage
        priority
        className="min-h-[18rem] sm:min-h-[26rem] lg:min-h-[32rem]"
      />
    </Section>
  );
}
