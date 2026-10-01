import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { brand, towns } from "@/lib/site";

export function LocalPresence() {
  return (
    <Section id="service-area" tone="cream">
      <Eyebrow>Service area</Eyebrow>
      <Heading>Local accountability.</Heading>
      <Lead>
        Seacoast Home Partners is based in {brand.location}. The
        deliberately focused service area supports responsive local service.
      </Lead>
      <ul className="mt-12 grid grid-cols-2 gap-px border border-deep-slate/10 bg-deep-slate/10 sm:grid-cols-4">
        {towns.map((town) => (
          <li
            key={town}
            className="bg-ivory px-5 py-8 text-center font-serif text-xl tracking-tight"
          >
            {town}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-muted">New Hampshire</p>
    </Section>
  );
}
