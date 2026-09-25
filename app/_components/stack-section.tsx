import { stackGroups } from "../portfolio-data";
import { contentWidthClass, sectionPaddingClass, SectionLabel } from "./portfolio-primitives";

export function StackSection() {
  return (
    <section className={`${contentWidthClass} ${sectionPaddingClass} border-t border-[var(--foreground)]`} aria-labelledby="stack-title">
      <div className="mb-[clamp(3rem,6vw,6rem)] grid grid-cols-[1fr_3fr] items-start gap-[clamp(2rem,5vw,5rem)] max-[56rem]:grid-cols-1 max-[56rem]:gap-5" data-motion-group>
        <SectionLabel index="T">Working toolkit</SectionLabel>
        <h2 className="min-w-0 max-w-[18ch] text-[clamp(2.5rem,5vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.055em]" id="stack-title" data-motion="heading">Technology, organized by use.</h2>
      </div>
      <div className="border-t border-[var(--foreground)]">
        {stackGroups.map((group, index) => (
          <section className="grid grid-cols-[1fr_3fr] gap-[clamp(2rem,5vw,5rem)] border-b border-[var(--foreground)] py-[clamp(1.25rem,2.2vw,2rem)] max-[56rem]:grid-cols-1 max-[56rem]:gap-5" key={group.label} data-motion-row data-motion-delay={index * 0.08}>
            <header className="grid min-w-0 grid-cols-[2rem_1fr] gap-2">
              <span className="font-mono text-[0.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-[650]">{group.label}</h3>
            </header>
            <p className="min-w-0 max-w-[64rem] text-[clamp(1.15rem,2.25vw,2.4rem)] leading-[1.35] tracking-[-0.025em]">{group.items.join(" · ")}</p>
          </section>
        ))}
      </div>
    </section>
  );
}
