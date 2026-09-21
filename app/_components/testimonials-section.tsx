"use client";

import { useState, type KeyboardEvent } from "react";
import { testimonials } from "../portfolio-data";
import { contentWidthClass, sectionPaddingClass, SectionLabel, sectionTitleClass } from "./portfolio-primitives";

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setActiveIndex((index) => Math.max(0, index - 1));
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      setActiveIndex((index) => Math.min(testimonials.length - 1, index + 1));
    }
  }

  return (
    <section className={`${contentWidthClass} ${sectionPaddingClass} border-t border-[var(--foreground)]`} id="testimonials" aria-labelledby="testimonials-title">
      <div className="mb-[clamp(3rem,7vw,7rem)] grid grid-cols-12 items-end max-[56rem]:grid-cols-1 max-[56rem]:gap-6" data-motion-group>
        <SectionLabel className="col-start-1 col-end-3 max-[56rem]:col-start-1 max-[56rem]:col-end-2" index="T">From the team</SectionLabel>
        <h2 className={`${sectionTitleClass} col-start-3 col-end-11 min-w-0 max-[56rem]:col-start-1 max-[56rem]:col-end-2`} id="testimonials-title" data-motion="heading">What collaborators say.</h2>
      </div>
      <div className="border-t border-[var(--foreground)]" role="region" aria-roledescription="carousel" aria-label="Testimonials" onKeyDown={handleKeyDown} tabIndex={0}>
        <div className="flex items-center justify-between gap-4 border-b border-[var(--rule)] py-3 font-mono text-[0.65rem] tracking-[0.05em] text-[var(--muted)] uppercase">
          <span aria-live="polite">{String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}</span>
          <div className="flex gap-2">
            <button className="grid h-9 w-9 place-items-center border border-[var(--foreground)] text-base leading-none transition-[background-color,color,opacity] hover:bg-[var(--accent)] hover:text-[var(--on-accent)] focus-visible:bg-[var(--accent)] focus-visible:text-[var(--on-accent)] disabled:cursor-not-allowed disabled:opacity-30" type="button" onClick={() => setActiveIndex((index) => Math.max(0, index - 1))} disabled={activeIndex === 0} aria-label="Previous testimonial">←</button>
            <button className="grid h-9 w-9 place-items-center border border-[var(--foreground)] text-base leading-none transition-[background-color,color,opacity] hover:bg-[var(--accent)] hover:text-[var(--on-accent)] focus-visible:bg-[var(--accent)] focus-visible:text-[var(--on-accent)] disabled:cursor-not-allowed disabled:opacity-30" type="button" onClick={() => setActiveIndex((index) => Math.min(testimonials.length - 1, index + 1))} disabled={activeIndex === testimonials.length - 1} aria-label="Next testimonial">→</button>
          </div>
        </div>
        <div aria-live="polite">
        {testimonials.map((testimonial, index) => {
          const initials = testimonial.name.split(" ").map((part) => part[0]).join("").slice(0, 2);

          return (
            <figure className={`${index === activeIndex ? "flex" : "hidden"} min-h-[clamp(22rem,32vw,30rem)] min-w-0 flex-col py-[clamp(1.5rem,3vw,3rem)]`} key={testimonial.name} id={`testimonial-${index + 1}`} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${testimonials.length}`} aria-hidden={index !== activeIndex} data-motion-row>
              <span className="font-display text-[clamp(2.5rem,5vw,5rem)] leading-[0.7] text-[var(--accent)]" aria-hidden="true">“</span>
              <blockquote className="mt-6 max-w-[58rem] text-[clamp(1rem,1.35vw,1.25rem)] leading-[1.55] text-[var(--foreground)]">
                <p>{testimonial.quote}</p>
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-[var(--rule)] pt-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[2px] border border-[var(--foreground)] bg-[var(--accent)] font-mono text-[0.65rem] text-[var(--on-accent)]" aria-hidden="true">{initials}</span>
                <span className="flex flex-col">
                  <strong className="text-sm font-[650]">{testimonial.name}</strong>
                  <span className="font-mono text-[0.65rem] tracking-[0.04em] text-[var(--muted)] uppercase">{testimonial.designation}</span>
                </span>
              </figcaption>
            </figure>
          );
        })}
        </div>
        <div className="flex gap-2 border-t border-[var(--rule)] pt-4" aria-label="Choose testimonial">
          {testimonials.map((testimonial, index) => (
            <button className={`grid h-8 min-w-8 place-items-center border px-2 font-mono text-[0.65rem] transition-[background-color,color] ${index === activeIndex ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--on-accent)]" : "border-[var(--foreground)] bg-transparent text-[var(--foreground)] hover:bg-[var(--surface-strong)]"}`} type="button" key={testimonial.name} onClick={() => setActiveIndex(index)} aria-label={`Show testimonial ${index + 1}`} aria-current={index === activeIndex ? "true" : undefined}>{String(index + 1).padStart(2, "0")}</button>
          ))}
        </div>
      </div>
    </section>
  );
}
