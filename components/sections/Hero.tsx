import Image from "next/image";
import { BookCta } from "@/components/BookCta";
import { CtaLink } from "@/components/CtaLink";
import { Container } from "@/components/Container";
import { brand } from "@/lib/site";

const trust = [
  { t: "Local to Rye", s: "One person who knows your home" },
  { t: "50 point visits", s: "Photo report within 24 hours" },
  { t: "Clear monthly pricing", s: "Published, no surprises" },
  { t: "Insured and bonded", s: "Protection for your home" },
];

export function Hero() {
  return (
    <section id="top" className="bg-ivory">
      <Container className="grid items-center gap-10 py-10 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-20">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-cream px-3 py-1 text-[0.72rem] font-medium uppercase tracking-[0.14em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-harbor" aria-hidden="true" />
            Rye · New Castle · Portsmouth · North Hampton
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.5rem] leading-[1.05] font-semibold tracking-tight sm:text-[3.1rem] lg:text-[3.5rem]">
            Your home, Handled.
          </h1>
          <p className="mt-5 max-w-xl text-[1.2rem] leading-relaxed text-muted">
            Home management for second homes and for families helping a parent
            stay at home. We check the house, plan the maintenance, and manage
            the professionals, so you don&apos;t have to.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BookCta className="w-full sm:w-auto">BOOK A FREE INTRO CALL</BookCta>
            <CtaLink href="/#pricing" variant="secondary" className="w-full sm:w-auto">
              SEE PRICING
            </CtaLink>
          </div>
          <p className="mt-5 text-base text-muted">
            Or call{" "}
            <a href={brand.phoneHref} className="font-medium text-deep-slate underline underline-offset-4" data-track="phone_click">
              {brand.phone}
            </a>{" "}
            · {brand.hoursShort}
          </p>
        </div>

        <div className="relative">
          <figure className="relative min-h-[19rem] overflow-hidden rounded-2xl sm:min-h-[26rem] lg:min-h-[32rem]">
            <Image
              src="/home-exterior.jpg"
              alt="White clapboard New England home with a porch and autumn trees"
              fill
              preload
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </figure>
          <div className="absolute -bottom-6 left-4 right-4 rounded-xl border border-deep-slate/10 bg-paper p-4 shadow-[0_12px_30px_-12px_rgba(38,52,58,0.35)] sm:left-auto sm:right-6 sm:w-72">
            <p className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-harbor">Sample monthly report</p>
            <p className="mt-1 font-serif text-lg font-semibold">All clear at the house</p>
            <ul className="mt-2 space-y-1 text-sm text-muted">
              <li>✓ Heat at 58°F, no leaks found</li>
              <li>✓ Doors locked, alarm set</li>
              <li>• Gutter cleaning booked for Oct 14</li>
            </ul>
          </div>
        </div>
      </Container>

      <div className="mt-6 border-y border-deep-slate/10 bg-paper">
        <Container className="grid grid-cols-2 gap-x-6 gap-y-5 py-6 lg:grid-cols-4">
          {trust.map((i) => (
            <div key={i.t}>
              <p className="font-serif text-[1.05rem] font-semibold">{i.t}</p>
              <p className="mt-0.5 text-sm text-muted">{i.s}</p>
            </div>
          ))}
        </Container>
      </div>
    </section>
  );
}
