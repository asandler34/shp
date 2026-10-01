import { Eyebrow, Heading, Lead, Section } from "@/components/Section";
import { ProcessSteps } from "@/components/ProcessSteps";

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="cream">
      <Eyebrow>The process</Eyebrow>
      <Heading>Assess. Plan. Steward. Handle.</Heading>
      <Lead>
        We understand the home, build a practical plan, and help keep the work
        moving. You decide what work is authorized and what money is spent.
      </Lead>
      <ProcessSteps />
    </Section>
  );
}
