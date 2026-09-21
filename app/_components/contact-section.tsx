import { Arrow, contentWidthClass } from "./portfolio-primitives";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/thawzzin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thaw-zin-876380253" },
] as const;

export function ContactSection() {
  return (
    <section className={`${contentWidthClass} scroll-mt-[calc(var(--header-height)+1rem)] bg-[var(--foreground)] px-[var(--page-gutter)] pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,7vw,7rem)] text-[var(--inverse)]`} id="contact" aria-labelledby="contact-title" data-motion-group>
      <div className="flex justify-between gap-4 border-b border-[#55534e] pb-4 font-mono text-[0.65rem] tracking-[0.05em] uppercase max-[34rem]:grid max-[34rem]:grid-cols-1" data-motion="meta">
        <span className="before:mr-[0.6rem] before:inline-block before:h-[0.55rem] before:w-[0.55rem] before:rounded-[2px] before:border before:border-[var(--inverse)] before:bg-[var(--accent)] before:content-[''] forced-colors:before:bg-[Highlight]">Available for freelance</span>
        <span>Selected full-time roles</span>
        <span>Thailand / Myanmar</span>
      </div>
      <p className="mt-[clamp(4rem,8vw,8rem)] font-mono text-[0.68rem] tracking-[0.06em] uppercase" data-motion="kicker">Have a project?</p>
      <h2 className="mt-4 font-display text-[clamp(3.8rem,12.3vw,14rem)] leading-[0.78] tracking-[-0.075em] uppercase" id="contact-title" data-motion="heading">Let’s make it clear.</h2>
      <a className="group mt-[clamp(3rem,7vw,7rem)] flex items-center justify-between gap-4 border-y border-[var(--inverse)] py-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.2rem,3.7vw,4.2rem)] font-semibold leading-none tracking-[-0.04em] transition-[color,padding,background-color] duration-150 hover:bg-[var(--accent)] hover:px-2 focus-visible:bg-[var(--accent)] focus-visible:px-2 max-[34rem]:items-start max-[34rem]:text-[clamp(1rem,5vw,1.5rem)]" href="mailto:thawzzin.dev@gmail.com" data-motion="link">
        <span>thawzzin.dev@gmail.com</span>
        <Arrow className="shrink-0 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
      </a>
      <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-[2fr_1fr] gap-8 max-[56rem]:grid-cols-1" data-motion="body">
        <p className="max-w-[33rem] text-[#bcb9b0]">Tell me what you’re building, where it gets complicated, and what needs to ship.</p>
        <div className="flex justify-end gap-6 max-[56rem]:justify-start">
          {socialLinks.map((link) => (
            <a className="group inline-flex items-center gap-[0.4rem] border-b border-current pb-1 font-mono text-[0.72rem] uppercase hover:text-[#7b9bff]" key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label} <Arrow className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
