import { CtaLink } from "@/components/CtaLink";
import { Eyebrow, Heading, Section } from "@/components/Section";
import { services } from "@/lib/site";

const steps = [
  { n: "1", t: "Assess", b: "We walk the home and write the plan." },
  { n: "2", t: "Maintain", b: "Monthly visits keep the plan on track." },
  { n: "3", t: "Delegate", b: "Hand us the to do list and the projects." },
];

export function Pricing() {
  return (
    <Section id="pricing" tone="cream">
      <Eyebrow>Services and pricing</Eyebrow>
      <Heading>Simple pricing. No surprises.</Heading>

      <ol className="mt-8 grid gap-px border border-deep-slate/10 bg-deep-slate/10 sm:grid-cols-3">
        {steps.map((s) => (
          <li key={s.n} className="bg-ivory p-5">
            <p className="font-serif text-lg font-semibold">
              <span className="text-harbor">{s.n}.</span> {s.t}
            </p>
            <p className="mt-1 text-[0.98rem] text-muted">{s.b}</p>
          </li>
        ))}
      </ol>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <article
            key={s.name}
            className={`flex flex-col border p-6 ${"featured" in s && s.featured ? "border-deep-slate bg-deep-slate text-ivory" : "border-deep-slate/12 bg-paper"}`}
          >
            <h3 className="font-serif text-xl font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-4">
              <span className="font-serif text-3xl tracking-tight">{s.price}</span>
              <span className={`ml-2 text-sm ${"featured" in s && s.featured ? "text-ivory/75" : "text-muted"}`}>{s.unit}</span>
            </p>
            <p className={`mt-4 flex-1 text-[0.98rem] leading-relaxed ${"featured" in s && s.featured ? "text-ivory/85" : "text-muted"}`}>
              {s.body}
            </p>
          </article>
        ))}
      </div>

      <p className="mt-6 max-w-3xl text-[0.98rem] leading-relaxed text-muted">
        Start with an assessment. Continue with monthly stewardship. Hand off
        more through concierge. Plans are not unlimited, and we tell you the
        cost before any additional work begins.
      </p>
      <CtaLink href="/#contact" className="mt-8 w-full sm:w-auto">
        DISCUSS YOUR HOME
      </CtaLink>
    </Section>
  );
}
