import { CtaLink } from "@/components/CtaLink";
import { Eyebrow, Heading, Section } from "@/components/Section";

const audiences = [
  {
    eyebrow: "Second homes and seasonal residents",
    title: "Away for the season? Someone local is looking after the house.",
    points: [
      "A 50 point monthly visit and a photo report you can read from anywhere",
      "Storm checks, seasonal opening and closing, deliveries met",
      "Repairs scheduled and supervised without you flying back",
    ],
    href: "/property-stewardship",
    cta: "SECOND HOME MANAGEMENT",
  },
  {
    eyebrow: "Home Independence",
    title: "Help your parents stay in the home they love.",
    points: [
      "For homeowners over 70 who want the house kept up without the hassle",
      "For their grown children who live away and want straight answers",
      "One local contact, with updates to the family when the homeowner approves",
    ],
    href: "/home-independence",
    cta: "HOME INDEPENDENCE",
  },
];

export function WhoWeHelp() {
  return (
    <Section id="who-we-help" tone="cream">
      <Eyebrow>Who we help</Eyebrow>
      <Heading>Home management for second homes and for families.</Heading>
      <div className="mt-10 grid gap-4 lg:grid-cols-2">
        {audiences.map((a) => (
          <article key={a.href} className="flex flex-col border border-deep-slate/12 bg-paper p-7 sm:p-8">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">{a.eyebrow}</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">{a.title}</h3>
            <ul className="mt-5 flex-1 space-y-3">
              {a.points.map((p) => (
                <li key={p} className="border-t border-deep-slate/10 pt-3 text-[1.02rem] leading-relaxed first:border-t-0 first:pt-0">
                  {p}
                </li>
              ))}
            </ul>
            <CtaLink href={a.href} variant="secondary" className="mt-8 w-full">
              {a.cta}
            </CtaLink>
          </article>
        ))}
      </div>
    </Section>
  );
}
