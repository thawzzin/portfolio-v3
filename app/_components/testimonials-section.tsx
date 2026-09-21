import { testimonials } from "../portfolio-data";
import { contentWidthClass, sectionPaddingClass, SectionLabel, sectionTitleClass } from "./portfolio-primitives";

export function TestimonialsSection() {
  return (
    <section className={`${contentWidthClass} ${sectionPaddingClass} border-t border-[var(--foreground)]`} id="testimonials" aria-labelledby="testimonials-title">
      <div className="mb-[clamp(3rem,7vw,7rem)] grid grid-cols-12 items-end max-[56rem]:grid-cols-1 max-[56rem]:gap-6" data-motion-group>
        <SectionLabel className="col-start-1 col-end-3 max-[56rem]:col-start-1 max-[56rem]:col-end-2" index="T">From the team</SectionLabel>
        <h2 className={`${sectionTitleClass} col-start-3 col-end-11 min-w-0 max-[56rem]:col-start-1 max-[56rem]:col-end-2`} id="testimonials-title" data-motion="heading">What collaborators say.</h2>
      </div>
      <div className="grid grid-cols-3 border-t border-[var(--foreground)] max-[56rem]:grid-cols-1">
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

          return (
            <figure className="flex min-w-0 flex-col border-r border-[var(--rule)] px-[clamp(1rem,2.5vw,2.5rem)] py-[clamp(1.5rem,3vw,3rem)] first:pl-0 last:border-r-0 last:pr-0 max-[56rem]:border-r-0 max-[56rem]:border-b max-[56rem]:px-0 max-[56rem]:last:border-b-0" key={testimonial.name} data-motion-row data-motion-delay={index * 0.08}>
              <span className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.7] text-[var(--accent)]" aria-hidden="true">“</span>
              <blockquote className="mt-6 mb-[clamp(2rem,4vw,4rem)] text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.55] text-[var(--foreground)]">
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--rule)] pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[2px] border border-[var(--foreground)] bg-[var(--accent)] font-mono text-[0.65rem] text-[var(--inverse)]" aria-hidden="true">{initials}</span>
                <span className="flex flex-col">
                  <strong className="text-sm font-[650]">{testimonial.name}</strong>
                  <span className="font-mono text-[0.65rem] tracking-[0.04em] text-[var(--muted)] uppercase">{testimonial.designation}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
