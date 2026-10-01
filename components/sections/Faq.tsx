import { Eyebrow, Heading, Section } from "@/components/Section";
import { faqs } from "@/lib/site";

export function Faq() {
  return (
    <Section id="faq" tone="cream">
      <Eyebrow>Questions</Eyebrow>
      <Heading>Frequently asked questions.</Heading>
      <div className="mt-10 divide-y divide-deep-slate/12 border-y border-deep-slate/12">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl tracking-tight">
              {f.q}
              <span aria-hidden="true" className="text-2xl text-harbor transition group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-muted">{f.a}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
