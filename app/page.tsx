import { About } from "@/components/sections/About";
import { Concierge } from "@/components/sections/Concierge";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { VisitChecklist } from "@/components/sections/VisitChecklist";
import { WhoWeHelp } from "@/components/sections/WhoWeHelp";
import { WhyUs } from "@/components/sections/WhyUs";
import { faqs } from "@/lib/site";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <WhoWeHelp />
      <Concierge />
      <Pricing />
      <VisitChecklist />
      <WhyUs />
      <About />
      <Faq />
      <FinalCta />
    </main>
  );
}
