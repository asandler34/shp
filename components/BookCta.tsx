import Link from "next/link";
import { bookingUrl } from "@/lib/site";

const styles = {
  primary: "bg-deep-slate text-ivory hover:bg-[#1c282c]",
  onDark: "bg-ivory text-deep-slate hover:bg-cream",
  secondary: "border border-deep-slate/25 text-deep-slate hover:border-deep-slate/50",
} as const;

export function BookCta({
  children = "BOOK A CALL",
  variant = "primary",
  className = "",
}: {
  children?: React.ReactNode;
  variant?: keyof typeof styles;
  className?: string;
}) {
  const cls = `inline-flex min-h-12 items-center justify-center px-6 text-sm font-medium tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${styles[variant]} ${className}`;
  if (bookingUrl) {
    return (
      <a href={bookingUrl} target="_blank" rel="noopener" className={cls} data-track="book_call">
        {children}
      </a>
    );
  }
  return (
    <Link href="/#contact" className={cls} data-track="book_call">
      {children}
    </Link>
  );
}
