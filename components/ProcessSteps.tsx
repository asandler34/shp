import { operatingSteps } from "@/lib/site";

export function ProcessSteps() {
  return (
    <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {operatingSteps.map((step, index) => (
        <li key={step.name}>
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.18em] text-muted">
            0{index + 1}
          </p>
          <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight">
            {step.name}
          </h3>
          <p className="mt-3 text-[0.98rem] leading-relaxed text-muted">
            {step.body}
          </p>
        </li>
      ))}
    </ol>
  );
}
