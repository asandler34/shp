import Link from "next/link";
import { Eyebrow, Heading, Section } from "@/components/Section";

const audiences = [
  {
    eyebrow: "Second homes and seasonal residents",
    title: "Away for the season?",
    worries: [
      "A pipe bursts in February and nobody notices for weeks.",
      "A storm rolls through and you can't see the house.",
      "You've called three contractors and no one shows up.",
    ],
    outcome:
      "We visit every month, send photos within 24 hours, check after storms, and get repairs done without you flying back.",
    href: "/property-stewardship",
    cta: "Second home management",
  },
  {
    eyebrow: "Home Independence",
    title: "Helping a parent stay at home?",
    worries: [
      "Mom's furnace is making a noise and you're three hours away.",
      "Dad is getting quotes from people you've never heard of.",
      "You find out about problems only after they're expensive.",
    ],
    outcome:
      "One trusted local person handles the house, the contractors and the quotes, and keeps the family updated with the homeowner's permission.",
    href: "/home-independence",
    cta: "Home Independence",
  },
];

export function WhoWeHelp() {
  return (
    <Section id="who-we-help" tone="cream">
      <Eyebrow>Sound familiar?</Eyebrow>
      <Heading>Owning a home shouldn&apos;t mean managing it from a distance.</Heading>
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {audiences.map((a) => (
          <article key={a.href} className="flex flex-col rounded-2xl border border-deep-slate/10 bg-paper p-7 sm:p-8">
            <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-harbor">{a.eyebrow}</p>
            <h3 className="mt-2 font-serif text-[1.7rem] font-semibold tracking-tight">{a.title}</h3>
            <ul className="mt-5 space-y-2.5">
              {a.worries.map((w) => (
                <li key={w} className="flex gap-3 text-[1.02rem] leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b8826b]" />
                  {w}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex-1 rounded-xl bg-ivory p-5">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-harbor">With Seacoast Home Partners</p>
              <p className="mt-2 text-[1.05rem] leading-relaxed">{a.outcome}</p>
            </div>
            <Link href={a.href} className="mt-6 inline-flex items-center gap-2 font-medium text-deep-slate underline underline-offset-4">
              {a.cta} <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </Section>
  );
}
