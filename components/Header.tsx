"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { brand, nav } from "@/lib/site";
import { Container } from "@/components/Container";
import { BookCta } from "@/components/BookCta";
import { Logo } from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    function onResize() { if (desktop.matches) setOpen(false); }
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-ivory">
      <p className="bg-deep-slate py-2 text-center text-[0.72rem] font-medium tracking-[0.08em] text-ivory/90">
        <a href={brand.phoneHref} className="underline-offset-4 hover:underline" data-track="phone_click">Call {brand.phone}</a>
        <span className="hidden sm:inline"> · {brand.hoursShort} · Serving Rye, New Castle, Portsmouth & North Hampton</span>
      </p>
      <div className="border-b border-deep-slate/10">
        <Container className="flex h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" className="min-w-0 py-1" aria-label={`${brand.name} home`} onClick={() => setOpen(false)}>
            <Logo />
          </Link>

          <nav
            className="hidden items-center gap-4 xl:flex"
            aria-label="Primary"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-[0.92rem] tracking-wide text-deep-slate/80 transition-colors hover:text-deep-slate"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={brand.phoneHref}
              className="hidden whitespace-nowrap text-[0.95rem] font-medium tracking-wide text-deep-slate 2xl:inline"
            >
              {brand.phone}
            </a>
            <a
              href={brand.phoneHref}
              className="inline-flex h-11 items-center bg-deep-slate px-4 text-sm font-medium tracking-wide text-ivory sm:hidden"
            >
              CALL
            </a>
            <div className="hidden sm:block">
              <BookCta className="whitespace-nowrap">BOOK A CALL</BookCta>
            </div>
            <button
              type="button"
              ref={toggle}
              className="inline-flex h-11 w-11 items-center justify-center border border-deep-slate/15 text-deep-slate xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen((value) => !value)}
            >
              <span className="sr-only">
                {open ? "Close menu" : "Open menu"}
              </span>
              <span className="flex flex-col items-center gap-1.5" aria-hidden="true">
                <span
                  className={`block h-px w-5 bg-current transition ${open ? "translate-y-[4px] rotate-45" : ""}`}
                />
                <span className={`block h-px w-5 bg-current ${open ? "opacity-0" : ""}`} />
                <span
                  className={`block h-px w-5 bg-current transition ${open ? "-translate-y-[8px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </Container>

        {open ? (
          <div
            id="mobile-navigation"
            className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-deep-slate/10 bg-ivory xl:hidden"
          >
            <Container className="flex flex-col gap-1 py-5">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-3 text-base text-deep-slate"
                  onClick={() => setOpen(false)}
                >
                  {item.label.toUpperCase()}
                </Link>
              ))}
              <BookCta className="mt-3 w-full">BOOK A FREE INTRO CALL</BookCta>
              <a href={brand.phoneHref} className="mt-2 py-3 text-center text-base font-medium underline underline-offset-4">
                Call {brand.phone}
              </a>
            </Container>
          </div>
        ) : null}
      </div>
    </header>
  );
}
