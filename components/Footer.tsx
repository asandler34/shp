import Link from "next/link";
import { brand, nav } from "@/lib/site";
import { Container } from "@/components/Container";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-deep-slate/10 bg-ivory">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr] sm:py-16">
        <div>
          <Logo />
          <p className="mt-2 text-sm tracking-wide text-muted">
            {brand.descriptor}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
            {brand.legal}
          </p>
          <a href={brand.phoneHref} className="mt-4 block text-base font-medium underline underline-offset-4">{brand.phone}</a>
          <a href={`mailto:${brand.email}`} className="mt-2 inline-block break-all text-sm underline underline-offset-4">{brand.email}</a>
          <p className="mt-4 text-sm text-muted">Hours: {brand.hours}</p>
          <p className="mt-1 text-sm text-muted">Serving <Link href="/areas/rye-nh" className="underline-offset-4 hover:underline">Rye</Link>, <Link href="/areas/new-castle-nh" className="underline-offset-4 hover:underline">New Castle</Link>, <Link href="/areas/portsmouth-nh" className="underline-offset-4 hover:underline">Portsmouth</Link>, and <Link href="/areas/north-hampton-nh" className="underline-offset-4 hover:underline">North Hampton</Link>, New Hampshire.</p>
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
