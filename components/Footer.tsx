import Link from "next/link";
import { brand, nav } from "@/lib/site";
import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-deep-slate/10 bg-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr] sm:py-16">
        <div>
          <p className="font-serif text-xl font-semibold tracking-tight">
            {brand.name}
          </p>
          <p className="mt-2 text-sm tracking-wide text-muted">
            {brand.descriptor}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            {brand.legal}
          </p>
          <a href={`mailto:${brand.email}`} className="mt-4 inline-block break-all text-sm underline underline-offset-4">{brand.email}</a>
        </div>

        <div>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            Explore
          </p>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-deep-slate hover:underline"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-sm text-muted">
            <Link href="/privacy" className="underline underline-offset-4">Privacy notice</Link>
          </p>
        </div>
      </Container>
    </footer>
  );
}
