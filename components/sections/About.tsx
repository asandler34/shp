import Image from "next/image";
import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { brand } from "@/lib/site";

const standards = [
  "Be accountable.",
  "Communicate clearly.",
  "Protect your time.",
  "Take care of the property.",
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-16">
        <figure className="mx-auto w-full max-w-[22rem] overflow-hidden border border-deep-slate/12 bg-cream">
          <Image
            src="/adam.jpg"
            alt={`${brand.founder}, founder of Seacoast Home Partners`}
            width={360}
            height={393}
            sizes="(min-width: 768px) 22rem, 90vw"
            className="h-auto w-full"
          />
        </figure>
        <div>
          <Eyebrow>Meet {brand.founder}</Eyebrow>
          <Heading>Your local point of contact.</Heading>
          <Lead>
            I am based in {brand.location} and bring more than 15 years of
            experience in operations, partnerships, and vendor management.
            Seacoast Home Partners gives homeowners one accountable person for
            the house. When you call, you reach me.
          </Lead>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {standards.map((s) => (
              <li key={s} className="border-t border-deep-slate/10 pt-3 font-serif text-xl tracking-tight">{s}</li>
            ))}
          </ul>
          <p className="mt-8 text-[1.02rem]">
            <a href={brand.phoneHref} className="font-medium underline underline-offset-4">{brand.phone}</a>
          </p>
        </div>
      </div>
    </Section>
  );
}
