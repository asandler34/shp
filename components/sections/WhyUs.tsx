import { Eyebrow, Heading, Section } from "@/components/Section";

const others = [
  { who: "Home watch", does: "Checks the house." },
  { who: "A handyman", does: "Fixes things." },
  { who: "A property manager", does: "Runs rentals." },
];

const promises = [
  "Your vendors can stay your vendors.",
  "Your property records belong to you.",
  "You approve the work and the spending.",
  "We manage the property, not the resident.",
];

export function WhyUs() {
  return (
    <Section id="why" tone="cream">
      <Eyebrow>Why Seacoast Home Partners</Eyebrow>
      <Heading>One local person who knows your home and takes responsibility for it.</Heading>
      <div className="mt-10 grid gap-px border border-deep-slate/10 bg-deep-slate/10 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((o) => (
          <div key={o.who} className="bg-ivory p-6">
            <p className="font-serif text-lg font-semibold">{o.who}</p>
            <p className="mt-1 text-muted">{o.does}</p>
          </div>
        ))}
        <div className="bg-deep-slate p-6 text-ivory">
          <p className="font-serif text-lg font-semibold">Seacoast Home Partners</p>
          <p className="mt-1 text-ivory/85">Plans, coordinates, documents, and oversees all of it.</p>
        </div>
      </div>
      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {promises.map((p) => (
          <li key={p} className="font-serif text-xl tracking-tight">{p}</li>
        ))}
      </ul>
    </Section>
  );
}
