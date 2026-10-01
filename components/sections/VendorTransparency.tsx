import { Eyebrow, Heading, Lead, Section } from "@/components/Section";

const points = [
  {
    title: "Keep the people you already trust",
    body: "Seacoast Home Partners is designed to work with the professionals homeowners already know.",
  },
  {
    title: "Identify additional help when needed",
    body: "When further expertise is required, SHP can help identify qualified professionals for consideration.",
  },
  {
    title: "Clear lines of responsibility",
    body: "Whenever practical, contractors contract with and bill homeowners directly. SHP separately provides coordination, oversight, and project management.",
  },
];

export function VendorTransparency() {
  return (
    <Section id="vendors">
      <Eyebrow>Vendors</Eyebrow>
      <Heading>Your vendors can stay your vendors.</Heading>
      <Lead>
        Keep working with professionals you trust. We help organize the work
        and make responsibilities, scope, and fees clear.
      </Lead>
      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {points.map((point) => (
          <article key={point.title}>
            <h3 className="font-serif text-xl font-semibold tracking-tight">
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
