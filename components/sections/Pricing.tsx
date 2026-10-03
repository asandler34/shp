import { BookCta } from "@/components/BookCta";
import { Eyebrow, Heading, Section } from "@/components/Section";
import { pricing } from "@/lib/site";

const stewardship = [
  "50 point property visit every month",
  "Photo report within 24 hours",
  "Review of upcoming maintenance needs",
  "Your maintenance calendar, kept up to date",
  "Vendor and property records in one place",
  "Up to 30 minutes of coordination a month",
];

const concierge = [
  "Everything in Home Stewardship",
  `Up to ${pricing.conciergeHours} hours of concierge every month`,
  "We meet contractors and deliveries at the house",
  "Quotes collected and explained in plain language",
  "Family updates with the homeowner's permission",
  "Priority scheduling",
];

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="currentColor" opacity="0.15" />
      <path d="M6 10.5l2.5 2.5L14 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Plan({
  name,
  price,
  per,
  blurb,
  items,
  featured = false,
}: {
  name: string;
  price: number;
  per: string;
  blurb: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <article
      className={`relative flex flex-col rounded-2xl p-7 sm:p-8 ${
        featured ? "bg-deep-slate text-ivory shadow-[0_20px_40px_-20px_rgba(38,52,58,0.6)]" : "border border-deep-slate/12 bg-paper"
      }`}
    >
      {featured ? (
        <span className="absolute -top-3 left-7 rounded-full bg-[#8fb0ba] px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-deep-slate">
          Most complete
        </span>
      ) : null}
      <h3 className="font-serif text-2xl font-semibold tracking-tight">{name}</h3>
      <p className={`mt-1 text-[0.98rem] ${featured ? "text-ivory/80" : "text-muted"}`}>{blurb}</p>
      <p className="mt-6 flex items-baseline gap-2">
        <span className="font-serif text-5xl font-semibold tracking-tight">${price}</span>
        <span className={featured ? "text-ivory/75" : "text-muted"}>{per}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3">
        {items.map((i) => (
          <li key={i} className={`flex gap-3 text-[1rem] leading-snug ${featured ? "text-[#cfe0e4]" : "text-harbor"}`}>
            <Check />
            <span className={featured ? "text-ivory" : "text-deep-slate"}>{i}</span>
          </li>
        ))}
      </ul>
      <BookCta variant={featured ? "onDark" : "primary"} className="mt-8 w-full">
        BOOK A FREE INTRO CALL
      </BookCta>
    </article>
  );
}

export function Pricing() {
  return (
    <Section id="pricing" tone="cream">
      <Eyebrow>Pricing</Eyebrow>
      <Heading>Simple, published pricing.</Heading>
      <p className="mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-muted">
        Many local home watch companies only quote after a sales visit. We
        think you should know the price up front.
      </p>

      <p className="mt-6 max-w-2xl rounded-xl bg-ivory/70 p-4 text-[0.98rem] text-muted">
        <span className="font-semibold text-deep-slate">Questions first?</span>{" "}
        Book a free intro call. We&apos;ll answer your questions before you
        schedule the in home assessment.
      </p>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-deep-slate/12 bg-ivory p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
        <div>
          <p className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-harbor">Step 1 · Everyone starts here</p>
          <p className="mt-1 font-serif text-2xl font-semibold tracking-tight">Home Operations Assessment</p>
          <p className="text-sm font-medium text-harbor">In home consultation</p>
          <p className="mt-1 max-w-xl text-[0.98rem] text-muted">
            We walk the whole property and give you a written plan: systems,
            vendors, maintenance priorities and next steps.
          </p>
        </div>
        <p className="shrink-0 sm:text-right">
          <span className="font-serif text-4xl font-semibold">${pricing.assessment}</span>
          <span className="block text-sm text-muted">one time</span>
        </p>
      </div>

      <p className="mt-10 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-harbor">Step 2 · Choose a monthly plan</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-2">
        <Plan
          name="Home Stewardship"
          price={pricing.membership}
          per="per month"
          blurb="We watch the house and keep it maintained."
          items={stewardship}
        />
        <Plan
          name="Concierge"
          price={pricing.concierge}
          per="per month"
          blurb="We also handle the home to do list for you."
          items={concierge}
          featured
        />
      </div>

      <div className="mt-6 grid gap-4 text-[0.98rem] text-muted sm:grid-cols-2">
        <p className="rounded-xl bg-ivory p-5">
          <span className="font-semibold text-deep-slate">Bigger projects?</span>{" "}
          Repairs, installations and improvements are coordinated for{" "}
          {pricing.projectPercent}% of the project cost, on one invoice.
          Licensed professionals do the work.
        </p>
        <p className="rounded-xl bg-ivory p-5">
          <span className="font-semibold text-deep-slate">No surprises.</span>{" "}
          Plans aren&apos;t unlimited, and we always tell you the cost before
          any extra work begins. Nothing happens without your OK.
        </p>
      </div>
    </Section>
  );
}
