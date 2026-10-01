import type { ReactNode } from "react";
import Link from "next/link";

const variants = {
  primary:
    "bg-deep-slate text-ivory hover:bg-[#1c282c] focus-visible:outline-deep-slate",
  onDark:
    "bg-ivory text-deep-slate hover:bg-cream focus-visible:outline-ivory",
  secondary:
    "border border-deep-slate/20 bg-transparent text-deep-slate hover:border-deep-slate/45 focus-visible:outline-deep-slate",
} as const;

const baseClass =
  "inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2";

export function CtaLink({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof variants;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${baseClass} ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
