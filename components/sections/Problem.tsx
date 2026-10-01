import { Eyebrow, Heading, Section } from "@/components/Section";

const points = [
  {
    title: "Know what needs attention.",
    body: "We maintain the property plan, track recurring maintenance, and keep upcoming priorities visible.",
  },
  {
    title: "Stop coordinating everyone yourself.",
    body: "We organize vendors, access, scheduling, and follow through so you are not managing every moving piece.",
  },
  {
    title: "Hand off the projects you do not want to manage.",
    body: "From repairs and installations to larger home improvements, Seacoast Home Partners can coordinate the work on your behalf.",
  },
];

export function Problem() {
  return (
    <Section tone="cream">
      <Eyebrow>The gap</Eyebrow>
      <Heading>Owning the home should not mean managing every detail.</Heading>
      <div className="mt-12 grid gap-px border border-deep-slate/10 bg-deep-slate/10 sm:grid-cols-3">
        {points.map((point, index) => (
          <article key={point.title} className="bg-ivory p-7 sm:p-8">
            <p className="font-serif text-3xl text-harbor/80">{index + 1}</p>
            <h3 className="mt-5 font-serif text-xl font-semibold tracking-tight">
              {point.title}
            </h3>
            <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
              {point.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
