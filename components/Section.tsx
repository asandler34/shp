import type { ReactNode } from "react";
import { Container } from "@/components/Container";

const tones = {
  ivory: "bg-ivory text-deep-slate",
  cream: "bg-cream text-deep-slate",
  slate: "bg-deep-slate text-ivory",
} as const;

export function Section({
  id,
  children,
  className = "",
  tone = "ivory",
  containerClassName = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: keyof typeof tones;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-32 ${tones[tone]} ${className}`}
    >
      <Container className={`py-14 sm:py-24 lg:py-28 ${containerClassName}`}>
        {children}
      </Container>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
      {children}
    </p>
  );
}

export function Heading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mt-3 max-w-3xl font-serif text-[1.85rem] leading-snug font-semibold tracking-tight text-balance sm:text-[2.15rem] ${className}`}
    >
      {children}
    </h2>
  );
}

export function Lead({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-muted ${className}`}
    >
      {children}
    </p>
  );
}
