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
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center">
        <div>
          <Eyebrow>Monthly property visit</Eyebrow>
          <Heading>A {visitCheckCount} point check at every visit.</Heading>
          <Lead>
            We walk the whole property, inside and out, every month. You get a
            photo report within 24 hours, and anything that needs attention
            goes on your maintenance calendar.
          </Lead>
        </div>
        <figure className="rounded-2xl border border-deep-slate/12 bg-paper p-6 shadow-[0_16px_36px_-20px_rgba(38,52,58,0.45)]">
          <figcaption className="flex items-center justify-between text-[0.7rem] font-medium uppercase tracking-[0.16em] text-harbor">
            <span>Sample visit report</span>
            <span className="rounded-full bg-[#e4efe9] px-2.5 py-1 text-[#2f6b4f]">All clear</span>
          </figcaption>
          <p className="mt-3 font-serif text-xl font-semibold">Monthly visit · 14 Ocean Lane</p>
          <p className="text-sm text-muted">Illustrative example · 50 of 50 points checked</p>
          <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-lg bg-ivory p-3"><dt className="text-muted">Thermostat</dt><dd className="font-medium">58°F, running</dd></div>
            <div className="rounded-lg bg-ivory p-3"><dt className="text-muted">Water / leaks</dt><dd className="font-medium">None found</dd></div>
            <div className="rounded-lg bg-ivory p-3"><dt className="text-muted">Security</dt><dd className="font-medium">Locked, alarm set</dd></div>
            <div className="rounded-lg bg-ivory p-3"><dt className="text-muted">Photos</dt><dd className="font-medium">24 attached</dd></div>
          </dl>
          <p className="mt-4 rounded-lg border-l-4 border-[#c9a227] bg-[#fbf6e6] p-3 text-sm">
            <span className="font-medium">Next up:</span> gutters are filling with leaves. Cleaning is scheduled with your usual vendor for Oct 14.
          </p>
        </figure>
      </div>

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
