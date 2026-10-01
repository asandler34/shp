import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { brand, pricing, towns } from "@/lib/site";

export function FinalCta() {
  return (
    <Section id="contact" tone="slate">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-ivory/65">
            Begin
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-[1.85rem] leading-snug font-semibold tracking-tight text-balance sm:text-[2.15rem]">
            Start by understanding your home.
          </h2>
          <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ivory/78">
            The first step is a ${pricing.assessment} Home Operations Assessment.
            We learn the property, organize its maintenance priorities, and
            create a practical operating plan.
          </p>
          <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-ivory/78">
            Leave a phone number. We will call you to discuss the property and
            whether an assessment is the right next step.
          </p>
          <p className="mt-8 text-sm tracking-wide text-ivory/65">
            Serving {towns.slice(0, 3).join(", ")}, and {towns[3]}.
          </p>
          <p className="mt-6 text-sm text-ivory/80">Prefer email? <a href={`mailto:${brand.email}`} className="break-all underline underline-offset-4">{brand.email}</a></p>
        </div>
        <InquiryForm />
      </div>
    </Section>
  );
}
