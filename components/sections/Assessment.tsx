import { CtaLink } from "@/components/CtaLink";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

const items = [
  "Major home systems",
  "Existing vendors",
  "Visible property priorities",
  "Seasonal requirements",
  "Recurring maintenance needs",
  "Upcoming maintenance",
  "Important operating information",
];

export function Assessment() {
  return (
    <Section id="assessment">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
        <div>
          <Eyebrow>The first step</Eyebrow>
          <Heading>Start with a Home Operations Assessment.</Heading>
          <p className="mt-5 font-serif text-3xl tracking-tight">
            ${pricing.assessment}
            <span className="ml-2 text-lg font-sans text-muted">one time</span>
          </p>
          <Lead>
            The assessment establishes the operating baseline for the
            property. You receive a written Home Operations Plan. There is no
            requirement to become a member.
          </Lead>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
            The assessment is not a licensed home inspection. Where an item
            may require evaluation by a qualified professional, that is noted
            so you can decide on the right next step.
          </p>
          <CtaLink href="/#contact" className="mt-8 w-full sm:w-auto">
            Book Your Home Operations Assessment
          </CtaLink>
        </div>
        <div className="border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            The assessment may document
          </p>
          <ul className="mt-6 space-y-3">
            {items.map((item) => (
              <li
                key={item}
                className="border-t border-deep-slate/10 pt-3 text-[0.98rem] first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
