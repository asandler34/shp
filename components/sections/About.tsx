import { PropertyImage } from "@/components/PropertyImage";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { brand } from "@/lib/site";

const standards = [
  "Be accountable.",
  "Communicate clearly.",
  "Protect the client's time.",
  "Take care of the property.",
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div>
          <Eyebrow>About</Eyebrow>
          <Heading>A more accountable way to manage the home.</Heading>
          <Lead>
            {brand.founder} has more than 15 years of experience across
            sales, marketing, partnerships, operations, vendor management,
            and entrepreneurship. He is based in {brand.location}.
          </Lead>
          <ul className="mt-10 space-y-4">
            {standards.map((standard) => (
              <li
                key={standard}
                className="border-t border-deep-slate/10 pt-4 font-serif text-xl tracking-tight first:border-t-0 first:pt-0"
              >
                {standard}
              </li>
            ))}
          </ul>
        </div>
        <PropertyImage
          kind="exterior"
          className="min-h-[20rem] lg:min-h-[26rem]"
        />
      </div>
    </Section>
  );
}
