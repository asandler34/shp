import { About } from "@/components/sections/About";
import { Assessment } from "@/components/sections/Assessment";
import { Boundaries } from "@/components/sections/Boundaries";
import { Capabilities } from "@/components/sections/Capabilities";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HomeownershipOffers } from "@/components/sections/HomeownershipOffers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { LocalPresence } from "@/components/sections/LocalPresence";
import { MaintenanceCalendar } from "@/components/sections/MaintenanceCalendar";
import { Membership } from "@/components/sections/Membership";
import { Problem } from "@/components/sections/Problem";
import { RecordsAndTrust } from "@/components/sections/RecordsAndTrust";
import { TwoOffers } from "@/components/sections/TwoOffers";
import { VendorTransparency } from "@/components/sections/VendorTransparency";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Problem />
      <HomeownershipOffers />
      <TwoOffers />
      <Capabilities />
      <HowItWorks />
      <Assessment />
      <Membership />
      <MaintenanceCalendar />
      <VendorTransparency />
      <RecordsAndTrust />
      <Boundaries />
      <LocalPresence />
      <About />
      <FinalCta />
    </main>
  );
}
