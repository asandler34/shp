import { Eyebrow, Heading, Lead, Section } from "@/components/Section";

const records = [
  "Maintenance records",
  "Vendor information",
  "Property reports",
  "Project documentation",
  "Manuals",
  "Warranties",
  "Service history",
  "Upcoming maintenance",
];

export function RecordsAndTrust() {
  return (
    <Section id="trust" tone="cream">
      <Eyebrow>Records</Eyebrow>
      <Heading>Your property records belong to you.</Heading>
      <Lead>
        Keep access to the maintenance history, vendor details, and documents
        that help you make informed decisions about your home.
      </Lead>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {records.map((record) => (
          <li
            key={record}
            className="border border-deep-slate/12 bg-ivory px-5 py-4 text-sm"
          >
            {record}
          </li>
        ))}
      </ul>
      <blockquote className="mt-12 max-w-3xl border-l-2 border-harbor pl-6">
        <p className="font-serif text-2xl leading-snug tracking-tight">
          Clients should stay because the service is valuable, not because
          leaving is difficult.
        </p>
      </blockquote>
      <p className="mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted">
        If the relationship ends, Seacoast Home Partners provides an orderly
        handoff of relevant property documentation, vendor information, open
        items, and records.
      </p>
    </Section>
  );
}
