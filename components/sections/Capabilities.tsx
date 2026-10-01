import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

const capabilities = [
  {
    title: "Maintenance Planning",
    body: "Keep recurring service and upcoming property priorities organized.",
  },
  {
    title: "Property Oversight",
    body: "Scheduled visits, documentation, seasonal needs, and visible property issues.",
  },
  {
    title: "Vendor Coordination",
    body: "Scheduling, access, follow through, and organized vendor information.",
  },
  {
    title: "Property Concierge",
    body: `Additional property related tasks handled at the member rate of $${pricing.concierge} per hour.`,
  },
  {
    title: "Project Management",
    body: "Repairs, renovations, installations, and improvements separately scoped and coordinated using qualified professionals.",
  },
  {
    title: "Property Records",
    body: "Maintenance history, vendor information, reports, manuals, warranties, and project documentation kept organized for the homeowner.",
  },
];

export function Capabilities() {
  return (
    <Section id="capabilities" tone="cream">
      <Eyebrow>Capabilities</Eyebrow>
      <Heading>One partner for the operating side of the home.</Heading>
      <Lead>
        These are the functions behind both Property Stewardship and Home
        Independence. They are not competing packages.
      </Lead>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="border border-deep-slate/12 bg-ivory p-7"
          >
            <h3 className="font-serif text-xl font-semibold tracking-tight">
              {capability.title}
            </h3>
            <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">
              {capability.body}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
