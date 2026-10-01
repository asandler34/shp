import { Eyebrow, Heading, Lead, Section } from "@/components/Section";

const notThis = [
  "Rental property management",
  "Real estate brokerage",
  "Handyman services",
  "Housekeeping",
  "Home health",
  "Personal care",
  "Caregiving",
];

export function Boundaries() {
  return (
    <Section id="boundaries">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div>
          <Eyebrow>Scope</Eyebrow>
          <Heading>Focused on the property.</Heading>
          <Lead>
            Seacoast Home Partners provides property stewardship,
            coordination, and project oversight. Qualified professionals
            perform licensed trade work.
          </Lead>
          <p className="mt-8 font-serif text-2xl leading-snug tracking-tight">
            We manage the property, not the resident.
          </p>
        </div>
        <div className="border border-deep-slate/12 bg-paper p-7 sm:p-8">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            SHP is not
          </p>
          <ul className="mt-6 space-y-3">
            {notThis.map((item) => (
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
