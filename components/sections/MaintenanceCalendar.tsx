import { Eyebrow, Heading, Lead, Section } from "@/components/Section";

const months = [
  { month: "September", item: "Heating system service" },
  { month: "October", item: "Generator maintenance" },
  { month: "November", item: "Chimney inspection" },
  { month: "January", item: "Guest bedroom renovation" },
  { month: "March", item: "Landscape planning" },
  { month: "May", item: "Exterior maintenance" },
];

export function MaintenanceCalendar() {
  return (
    <Section id="calendar">
      <Eyebrow>Illustrative property example</Eyebrow>
      <Heading>A plan for what the home needs next.</Heading>
      <Lead>
        Every property receives its own plan. This timeline is an example,
        not a standard package. The homeowner decides what work gets
        authorized.
      </Lead>
      <ol className="mt-12 border-t border-deep-slate/12">
        {months.map((entry) => (
          <li
            key={entry.month}
            className="grid gap-2 border-b border-deep-slate/12 py-5 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-8"
          >
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted">
              {entry.month}
            </p>
            <p className="font-serif text-xl tracking-tight">{entry.item}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-sm text-muted">
        Qualified professionals perform licensed trade work. Seacoast Home
        Partners coordinates, documents, and follows through when asked.
      </p>
    </Section>
  );
}
