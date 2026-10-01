"use client";

import { useActionState, useState } from "react";
import Link from "next/link";
import { submitInquiry, type InquiryState } from "@/app/actions/inquiry";
import { brand, pricing, towns } from "@/lib/site";

const initialInquiryState: InquiryState = { status: "idle" };

const fieldClass =
  "mt-2 min-h-12 w-full border border-deep-slate/12 bg-paper px-4 text-base text-deep-slate outline-none transition-colors placeholder:text-deep-slate/40 focus:border-deep-slate/40";

const labelClass = "block text-sm font-medium text-ivory";

export function InquiryForm() {
  const [fields, setFields] = useState({ name: "", phone: "", email: "", town: "", interest: "", note: "" });
  const [consent, setConsent] = useState(false);
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );

  if (state.status === "success") {
    return (
      <div role="status" aria-live="polite" className="border border-ivory/15 bg-ivory/8 p-7 sm:p-8">
        <p className="font-serif text-2xl tracking-tight text-ivory">
          We will call you.
        </p>
        <p className="mt-4 text-[1.05rem] leading-relaxed text-ivory/80">
          {state.message}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ivory/65">
          Email is not required. If you also left an email, we may use it for a
          written follow-up about the assessment.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="border border-ivory/15 bg-ivory/8 p-7 sm:p-8">
      <p className="font-serif text-2xl tracking-tight text-ivory">
        Book an assessment
      </p>
      <p className="mt-3 text-[1.05rem] leading-relaxed text-ivory/78">
        Leave a phone number and we will call you about the $
        {pricing.assessment} Home Operations Assessment.
      </p>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Company website
          <input type="text" name="company_website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-8 space-y-5">
        <label className={labelClass}>
          Name
          <input
            className={fieldClass}
            type="text"
            name="name" value={fields.name} onChange={(event) => setFields({ ...fields, name: event.target.value })}
            autoComplete="name"
            maxLength={120}
            required
          />
        </label>

        <label className={labelClass}>
          Phone
          <input
            className={fieldClass}
            type="tel"
            name="phone" value={fields.phone} onChange={(event) => setFields({ ...fields, phone: event.target.value })}
            autoComplete="tel"
            inputMode="tel"
            maxLength={40}
            required
            placeholder="(603) 000-0000"
          />
          <span className="mt-2 block text-sm font-normal text-ivory/65">
            Required. This is how we will reach you.
          </span>
        </label>

        <label className={labelClass}>
          Email
          <span className="ml-2 text-sm font-normal text-ivory/55">Optional</span>
          <input
            className={fieldClass}
            type="email"
            name="email" value={fields.email} onChange={(event) => setFields({ ...fields, email: event.target.value })}
            autoComplete="email"
            maxLength={254}
          />
          <span className="mt-2 block text-sm font-normal text-ivory/65">
            Only if you would also like a written follow-up.
          </span>
        </label>

        <label className={labelClass}>
          Property town
          <select className={fieldClass} name="town" value={fields.town} onChange={(event) => setFields({ ...fields, town: event.target.value })} required>
            <option value="" disabled>
              Select a town
            </option>
            {towns.map((town) => (
              <option key={town} value={town}>
                {town}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>

        <fieldset>
          <legend className={labelClass}>How can we help?</legend>
          <div className="mt-3 space-y-2.5 text-base text-ivory/90">
            <label className="flex items-center gap-3">
              <input type="radio" name="interest" value="Property Stewardship" checked={fields.interest === "Property Stewardship"} onChange={(event) => setFields({ ...fields, interest: event.target.value })} className="size-4" />
              Property Stewardship
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="interest" value="Home Independence" checked={fields.interest === "Home Independence"} onChange={(event) => setFields({ ...fields, interest: event.target.value })} className="size-4" />
              Home Independence
            </label>
            <label className="flex items-center gap-3">
              <input type="radio" name="interest" value="Not sure yet" checked={fields.interest === "Not sure yet"} onChange={(event) => setFields({ ...fields, interest: event.target.value })} className="size-4" />
              Not sure yet
            </label>
          </div>
        </fieldset>

        <label className={labelClass}>
          Anything we should know about the property
          <span className="ml-2 text-sm font-normal text-ivory/55">Optional</span>
          <textarea
            className={`${fieldClass} min-h-28 py-3`}
            name="note" value={fields.note} onChange={(event) => setFields({ ...fields, note: event.target.value })}
            rows={4}
            maxLength={3000}
          />
        </label>
      </div>

      <p className="mt-5 text-sm leading-relaxed text-ivory/75">
        Please share property details only. Do not include access codes, financial information, or medical details.
      </p>
      <label className="mt-5 flex items-start gap-3 text-sm leading-relaxed text-ivory/90">
        <input type="checkbox" name="consent" value="yes" checked={consent} onChange={(event) => setConsent(event.target.checked)} required className="mt-1 size-4 shrink-0" />
        <span>I agree that Seacoast Home Partners may contact me about this inquiry. See our <Link href="/privacy" className="underline underline-offset-4">privacy notice</Link>.</span>
      </label>

      {state.status === "error" ? (
        <p className="mt-5 text-sm text-ivory" role="alert">
          {state.message}
          {" "}<a href={`mailto:${brand.email}`} className="underline underline-offset-4">Email us directly</a>.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 inline-flex min-h-12 w-full items-center justify-center bg-ivory px-6 text-base font-medium tracking-wide text-deep-slate transition-colors hover:bg-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ivory disabled:opacity-60"
      >
        {pending ? "Sending…" : "REQUEST A CALL"}
      </button>
    </form>
  );
}
