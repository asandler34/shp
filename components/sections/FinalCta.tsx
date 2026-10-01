import { InquiryForm } from "@/components/InquiryForm";
import { Section } from "@/components/Section";
import { brand, townsLine } from "@/lib/site";

export function FinalCta() {
  return (
    <Section id="contact" tone="slate">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ivory/65">
            Get started
          </p>
          <h2 className="mt-3 max-w-3xl font-serif text-[1.95rem] leading-snug font-semibold tracking-tight text-balance sm:text-[2.2rem]">
            Let&apos;s talk about your home.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ivory/80">
            Leave your number and we will call you back to talk through the
            property and the right first step. Or call now.
          </p>
          <a
            href={brand.phoneHref}
            className="mt-6 inline-flex min-h-12 items-center bg-ivory px-6 font-medium tracking-wide text-deep-slate hover:bg-cream"
          >
            CALL {brand.phone}
          </a>
          <p className="mt-8 text-base tracking-wide text-ivory/70">{townsLine}</p>
          <p className="mt-4 text-base text-ivory/80">
            Prefer email?{" "}
            <a href={`mailto:${brand.email}`} className="break-all underline underline-offset-4">
              {brand.email}
            </a>
          </p>
        </div>
        <InquiryForm />
      </div>
    </Section>
  );
}
