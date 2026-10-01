import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { visitCheckCount, visitChecklist } from "@/lib/site";

export function VisitChecklist() {
  let n = 0;
  const numbered = visitChecklist.map((g) => ({
    area: g.area,
    items: g.items.map((item) => ({ item, n: ++n })),
  }));

  return (
    <Section id="visit">
      <Eyebrow>Monthly property visit</Eyebrow>
      <Heading>A {visitCheckCount} point check at every visit.</Heading>
      <Lead>
        We walk the whole property, inside and out, every month. You get a
        photo report within 24 hours, and anything that needs attention goes
        on your maintenance calendar.
      </Lead>

      {/* Phones: tap a category to expand */}
      <div className="mt-8 divide-y divide-deep-slate/12 border-y border-deep-slate/12 md:hidden">
        {numbered.map((g) => (
          <details key={g.area} className="group py-4">
            <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl tracking-tight">
              <span>
                {g.area}{" "}
                <span className="font-sans text-sm text-muted">({g.items.length})</span>
              </span>
              <span aria-hidden="true" className="text-2xl text-harbor transition group-open:rotate-45">+</span>
            </summary>
            <ol className="mt-3 space-y-2">
              {g.items.map(({ item, n }) => (
                <li key={item} className="flex gap-3 text-[1rem] leading-relaxed">
                  <span className="w-6 shrink-0 text-right font-serif text-harbor">{n}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </details>
        ))}
      </div>

      {/* Tablet and desktop: everything visible */}
      <div className="mt-10 hidden gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {numbered.map((g) => (
          <div key={g.area} className="border border-deep-slate/12 bg-paper p-6">
            <p className="font-serif text-xl font-semibold tracking-tight">{g.area}</p>
            <ol className="mt-4 space-y-2">
              {g.items.map(({ item, n }) => (
                <li key={item} className="flex gap-3 text-[0.95rem] leading-relaxed">
                  <span className="w-6 shrink-0 text-right font-serif text-harbor">{n}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  );
}
