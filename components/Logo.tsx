export function LogoMark({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} role={title ? "img" : undefined} aria-hidden={title ? undefined : true} aria-label={title}>
      <rect width="200" height="200" rx="28" fill="#26343a" />
      <path d="M44 78 L100 36 L156 78" fill="none" stroke="#8fb0ba" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <text x="100" y="136" textAnchor="middle" fontFamily="var(--font-source-serif), Georgia, serif" fontSize="62" fontWeight="600" letterSpacing="2" fill="#f4f1ea">SHP</text>
      <path d="M50 160 Q 75 148 100 160 T 150 160" fill="none" stroke="#8fb0ba" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const main = tone === "dark" ? "text-deep-slate" : "text-ivory";
  const sub = tone === "dark" ? "text-harbor" : "text-[#a9bcc2]";
  return (
    <span className="flex items-center gap-3">
      <LogoMark className="h-10 w-10 shrink-0 sm:h-11 sm:w-11" />
      <span className="leading-none">
        <span className={`block font-serif text-[1.35rem] font-semibold tracking-tight ${main}`}>Seacoast</span>
        <span className={`mt-1 block text-[0.62rem] font-medium tracking-[0.3em] ${sub}`}>HOME PARTNERS</span>
      </span>
    </span>
  );
}
