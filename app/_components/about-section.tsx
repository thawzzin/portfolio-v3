import { capabilities, experiences } from "../portfolio-data";
import { contentWidthClass, ledgerHeadingClass, sectionPaddingClass, SectionLabel } from "./portfolio-primitives";

export function AboutSection() {
  return (
    <section className={`${contentWidthClass} ${sectionPaddingClass} scroll-mt-[calc(var(--header-height)+1rem)] border-t border-[var(--foreground)]`} id="about" aria-labelledby="about-title">
      <SectionLabel className="mb-[clamp(2rem,4vw,4rem)]" index="A">About / working style</SectionLabel>
      <div className="grid grid-cols-12 max-[56rem]:grid-cols-1" data-motion-group>
        <h2 className="col-start-1 col-end-9 min-w-0 max-w-[18ch] text-[clamp(2.4rem,5.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] max-[56rem]:col-start-1 max-[56rem]:col-end-2" id="about-title" data-motion="heading">I make complicated products feel straightforward.</h2>
        <div className="col-start-9 col-end-13 flex min-w-0 flex-col gap-6 border-l border-[var(--rule)] pl-[clamp(1rem,3vw,3rem)] text-[clamp(1rem,1.35vw,1.3rem)] text-[var(--muted)] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:mt-8 max-[56rem]:gap-4 max-[56rem]:border-t max-[56rem]:border-l-0 max-[56rem]:p-[1.5rem_0_0]" data-motion="body">
          <p>I’m a full-stack developer with a computer science background and a practical eye for how complete products should work.</p>
          <p>I work across interfaces, APIs, data models, and deployment—connecting the parts people use with the systems that keep them fast and reliable. Give me a messy workflow and I’ll help turn it into a clear, dependable product.</p>
        </div>
      </div>
      <div className="mt-[var(--section-gap)] grid grid-cols-[2fr_1fr] gap-[clamp(2rem,8vw,8rem)] max-[56rem]:grid-cols-1" data-motion-group>
        <div className="min-w-0" data-motion="body">
          <h3 className={ledgerHeadingClass}>Experience</h3>
          {experiences.map((experience, index) => (
            <article className="grid grid-cols-[2rem_1fr_auto] items-start gap-4 border-t border-[var(--foreground)] py-[clamp(1rem,2vw,1.6rem)] last:border-b max-[34rem]:grid-cols-[1.5rem_1fr]" key={experience.company} data-motion-row data-motion-delay={index * 0.06}>
              <span className="font-mono text-[0.66rem] text-[var(--muted)] uppercase">{String(index + 1).padStart(2, "0")}</span>
              <div><h4 className="text-[clamp(1.25rem,2vw,2rem)] font-[650] leading-none">{experience.company}</h4><p className="mt-[0.35rem] text-[var(--muted)]">{experience.role}</p></div>
              <time className="font-mono text-[0.66rem] text-[var(--muted)] uppercase max-[34rem]:col-start-2">{experience.period}</time>
            </article>
          ))}
        </div>
        <div className="min-w-0 border-l border-[var(--foreground)] pl-[clamp(1rem,3vw,3rem)] max-[56rem]:border-l-0 max-[56rem]:p-0" data-motion="body">
          <h3 className={ledgerHeadingClass}>Capabilities</h3>
          <ol className="m-0 list-none p-0">
            {capabilities.map((capability, index) => (
              <li className="grid grid-cols-[2rem_1fr] gap-2 border-t border-[var(--rule)] py-[0.55rem] text-[clamp(0.9rem,1.2vw,1.1rem)] last:border-b" key={capability}>
                <span className="font-mono text-[0.62rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>{capability}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
