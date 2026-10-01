import Image from "next/image";

export function PropertyImage({ kind = "exterior", className = "", priority = false }: {
  kind?: "exterior" | "interior"; className?: string; priority?: boolean;
}) {
  return <figure className={`relative overflow-hidden border border-deep-slate/12 bg-cream ${className}`}>
    <Image src={kind === "interior" ? "/home-interior.jpg" : "/home-exterior.jpg"}
      alt={kind === "interior" ? "Sunlit living room with wood furnishings and large windows" : "White clapboard New England home with a porch and mature trees"}
      fill sizes="(min-width: 1024px) 45vw, 100vw" preload={priority} className="object-cover" />
  </figure>;
}
