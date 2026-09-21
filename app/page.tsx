import Image from "next/image";
import { ProjectVisual } from "./project-visual";
import { ScrollMotion } from "./scroll-motion";
import {
  capabilities,
  experiences,
  projects,
  stackGroups,
  testimonials,
  type Project,
} from "./portfolio-data";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/thawzzin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thaw-zin-876380253" },
] as const;

const contentWidthClass = "mx-auto w-[min(100%,var(--content-max))]";
const sectionPaddingClass = "px-[var(--page-gutter)] py-[var(--section-gap)] max-[34rem]:px-4";
const sectionTitleClass = "font-display text-[clamp(3rem,7.25vw,8.2rem)] leading-[0.86] tracking-[-0.065em] uppercase max-[56rem]:text-[clamp(3.4rem,15vw,6.5rem)]";
const ledgerHeadingClass = "mb-4 font-mono text-[0.7rem] tracking-[0.08em] uppercase";

function Arrow({ direction = "up", className = "" }: { direction?: "up" | "down"; className?: string }) {
  return (
    <svg className={`h-[1em] w-[1em] overflow-visible fill-none stroke-current [stroke-linecap:square] [stroke-linejoin:miter] [stroke-width:1.6] transition-transform duration-150 ${direction === "down" ? "rotate-90" : ""} ${className}`} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

function SectionLabel({ index, children, className = "" }: { index: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex min-w-0 flex-col gap-[0.35rem] font-mono text-[0.67rem] tracking-[0.06em] uppercase ${className}`} data-motion="label">
      <span className="text-[var(--accent)]">{index}</span><p>{children}</p>
    </div>
  );
}

function ProjectShowcase({ project, reverse }: { project: Project; reverse: boolean }) {
  const indexPosition = reverse ? "col-start-12 col-end-13" : "col-start-1 col-end-2";
  const mediaPosition = reverse ? "col-start-5 col-end-12" : "col-start-2 col-end-9";
  const copyPosition = reverse ? "col-start-1 col-end-5 pr-[clamp(1.25rem,3vw,3rem)]" : "col-start-9 col-end-13 pl-[clamp(1.25rem,3vw,3rem)]";

  return (
    <article className="grid min-w-0 grid-cols-12 grid-rows-[auto_1fr] max-[56rem]:grid-cols-[2.4rem_1fr] max-[56rem]:grid-rows-[auto_auto]" data-motion-project data-motion-reverse={reverse ? "true" : undefined}>
      <div className={`row-start-1 row-end-3 flex min-w-0 flex-col justify-between border border-[var(--foreground)] bg-[var(--accent)] p-3 font-mono text-[var(--inverse)] uppercase max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-start-1 max-[56rem]:row-end-3 ${indexPosition}`} data-motion="project-index" aria-label={`Project ${project.number}`}>
        <span className="text-[clamp(1.6rem,3vw,3.5rem)] leading-none max-[56rem]:text-[1.15rem]">{project.number}</span>
        <p className="rotate-180 text-[0.6rem] tracking-[0.06em] [writing-mode:vertical-rl]">Selected work</p>
      </div>
      <div className={`row-start-1 row-end-3 min-w-0 max-[56rem]:col-start-2 max-[56rem]:col-end-3 max-[56rem]:row-start-1 max-[56rem]:row-end-2 ${mediaPosition}`} data-motion="project-media">
        <ProjectVisual slug={project.slug} title={project.title} />
      </div>
      <div className={`row-start-1 row-end-3 flex min-w-0 flex-col max-[56rem]:col-start-2 max-[56rem]:col-end-3 max-[56rem]:row-start-2 max-[56rem]:row-end-3 max-[56rem]:p-[1.5rem_0_0_1rem] max-[34rem]:pl-3 ${copyPosition}`} data-motion="project-copy">
        <p className="mb-auto pb-10 font-mono text-[0.68rem] tracking-[0.06em] text-[var(--muted)] uppercase max-[56rem]:pb-4">{project.type}</p>
        <h3 className="font-display text-[clamp(2.4rem,4.2vw,5.2rem)] leading-[0.88] tracking-[-0.06em] break-normal uppercase max-[56rem]:text-[clamp(2.5rem,12vw,5rem)] max-[56rem]:[overflow-wrap:anywhere]">{project.title}</h3>
        <p className="mt-[clamp(1.5rem,3vw,3rem)] max-w-[38rem] text-[clamp(1rem,1.3vw,1.25rem)] text-[var(--muted)]">{project.description}</p>
        <dl className="mt-[clamp(2rem,4vw,4rem)] border-t border-[var(--foreground)] [&>div]:grid [&>div]:grid-cols-[5rem_1fr] [&>div]:gap-4 [&>div]:border-b [&>div]:border-[var(--rule)] [&>div]:py-3 [&_dd]:text-[0.72rem] [&_dd]:font-semibold [&_dt]:font-mono [&_dt]:text-[0.72rem] [&_dt]:text-[var(--muted)] [&_dt]:uppercase max-[34rem]:[&>div]:grid-cols-[4.25rem_1fr] max-[34rem]:[&>div]:gap-2">
          <div data-motion="meta-row"><dt>Role</dt><dd>{project.role}</dd></div>
          <div data-motion="meta-row"><dt>Stack</dt><dd>{project.stack.join(" / ")}</dd></div>
          <div data-motion="meta-row"><dt>Case study</dt><dd>In progress</dd></div>
        </dl>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="fixed top-3 left-3 z-[100] -translate-y-[180%] bg-[var(--foreground)] px-4 py-[0.7rem] font-bold text-[var(--inverse)] focus:translate-y-0" href="#main-content">Skip to content</a>
      <ScrollMotion />

      <header className="sticky top-0 z-50 grid min-h-[var(--header-height)] grid-cols-[1fr_auto_1fr] items-center border-b border-[var(--foreground)] bg-[color-mix(in_srgb,var(--background)_94%,transparent)] px-[var(--page-gutter)] backdrop-blur-[12px] max-[56rem]:grid-cols-[1fr_auto] max-[56rem]:grid-rows-[3rem_2.8rem]">
        <a className="w-max font-display text-base tracking-[-0.04em]" href="#top" aria-label="Thaw Zin, back to top">TZ<span className="font-mono text-[0.65em] tracking-normal text-[var(--accent)]">/26</span></a>
        <nav className="flex gap-[clamp(1.25rem,3vw,3rem)] max-[56rem]:col-start-1 max-[56rem]:col-end-3 max-[56rem]:row-start-2 max-[56rem]:items-center max-[56rem]:justify-between max-[56rem]:self-stretch max-[56rem]:border-t max-[56rem]:border-[var(--rule)]" aria-label="Primary navigation">
          {[["Work", "#work"], ["About", "#about"], ["Contact", "#contact"]].map(([label, href]) => (
            <a key={href} className="relative text-xs font-[650] tracking-[0.07em] uppercase after:absolute after:right-0 after:-bottom-[0.28rem] after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-[var(--foreground)] after:transition-transform after:duration-200 after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 max-[34rem]:text-[0.65rem]" href={href}>{label}</a>
          ))}
        </nav>
        <a className="relative flex items-center justify-self-end gap-2 text-xs font-[650] tracking-[0.07em] uppercase max-[56rem]:col-start-2 max-[56rem]:row-start-1 max-[34rem]:text-[0.65rem] max-[34rem]:after:text-[0.65rem] max-[34rem]:after:content-['Available']" href="#contact">
          <span className="h-[0.55rem] w-[0.55rem] rounded-[2px] border border-[var(--foreground)] bg-[var(--accent)] forced-colors:bg-[Highlight]" aria-hidden="true" />
          <span className="max-[34rem]:sr-only">Available for work</span><Arrow direction="down" className="max-[56rem]:hidden" />
        </a>
      </header>

      <main id="main-content">
        <section className={`${contentWidthClass} grid min-h-[calc(100svh-var(--header-height))] scroll-mt-[calc(var(--header-height)+1rem)] grid-cols-12 border-b border-[var(--foreground)] px-[var(--page-gutter)] pt-[clamp(1.5rem,4vw,4rem)] pb-[clamp(2rem,5vw,4rem)] max-[56rem]:min-h-0 max-[56rem]:grid-cols-[2.4rem_repeat(5,minmax(0,1fr))] max-[56rem]:overflow-hidden max-[56rem]:pt-4`} id="top" aria-labelledby="hero-title">
          <div className="col-start-1 col-end-2 row-start-1 row-end-4 flex min-w-0 rotate-180 flex-col items-start justify-between bg-[var(--accent)] px-3 py-4 font-mono text-[0.65rem] tracking-[0.06em] text-[var(--inverse)] uppercase [writing-mode:vertical-rl] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-start-1 max-[56rem]:row-end-5 max-[56rem]:px-[0.55rem] max-[34rem]:[&>span:last-child]:hidden">
            <span>Frontend developer</span><span>Based in Thailand</span>
          </div>
          <h1 className="col-start-2 col-end-13 row-start-1 flex min-w-0 flex-col self-start pl-[clamp(1rem,2vw,2rem)] font-display text-[clamp(5rem,15.2vw,16.75rem)] leading-[0.72] tracking-[-0.075em] uppercase max-[56rem]:col-start-2 max-[56rem]:col-end-7 max-[56rem]:pl-3 max-[56rem]:text-[clamp(4rem,20vw,6rem)] max-[56rem]:tracking-[-0.085em] max-[34rem]:text-[clamp(3.9rem,20vw,5.5rem)]" id="hero-title">
            <span>Thaw</span><span className="ml-[26%] text-transparent [-webkit-text-stroke:clamp(1px,0.12vw,2px)_var(--foreground)] max-[56rem]:ml-[12%] forced-colors:text-[currentColor] forced-colors:[-webkit-text-stroke:0]">Zin</span>
          </h1>
          <div className="col-start-2 col-end-9 min-w-0 self-end p-[clamp(2rem,6vw,5rem)_clamp(1rem,3vw,3rem)_0] max-[56rem]:col-start-2 max-[56rem]:col-end-7 max-[56rem]:p-[3.5rem_0_0_0.75rem]">
            <p className="max-w-[18ch] text-[clamp(1.85rem,3.75vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] max-[56rem]:max-w-none max-[56rem]:text-[clamp(1.75rem,7vw,2.75rem)] max-[56rem]:break-words">Frontend developer building clear interfaces for complicated products.</p>
          </div>
          <div className="col-start-9 col-end-13 flex min-w-0 flex-col justify-end gap-8 border-l border-[var(--rule)] p-[clamp(2rem,6vw,5rem)_0_0_clamp(1rem,2vw,2rem)] max-[56rem]:col-start-2 max-[56rem]:col-end-7 max-[56rem]:border-l-0 max-[56rem]:p-[2rem_0_0_0.75rem]">
            <figure className="relative w-[clamp(6.5rem,9vw,9rem)]" data-motion="body">
              <span className="absolute inset-0 translate-x-2 translate-y-2 bg-[var(--accent)]" aria-hidden="true" />
              <Image
                className="relative aspect-[29/36] h-auto w-full border border-[var(--foreground)] object-cover"
                src="/images/avatar.jpeg"
                width={928}
                height={1152}
                sizes="(max-width: 896px) 104px, 144px"
                alt="Portrait of Thaw Zin"
                preload
              />
            </figure>
            <p className="max-w-[33rem] text-[clamp(1rem,1.35vw,1.35rem)] leading-[1.45] text-[var(--muted)]">I turn product ideas into fast, dependable web apps—mostly with React, Next.js, and TypeScript.</p>
            <a className="group inline-flex w-max items-center gap-[0.65rem] border-b border-[var(--foreground)] pb-[0.35rem] font-bold transition-[color,transform] duration-150 hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-[var(--accent)]" href="#work">See selected work <Arrow direction="down" className="group-hover:translate-x-0.5" /></a>
          </div>
          <div className="col-start-2 col-end-13 mt-[clamp(3rem,6vw,6rem)] ml-[clamp(1rem,3vw,3rem)] flex min-w-0 flex-wrap gap-x-6 gap-y-2 self-end border-t border-[var(--foreground)] pt-[0.8rem] font-mono text-[0.68rem] tracking-[0.04em] uppercase max-[56rem]:col-start-2 max-[56rem]:col-end-7 max-[56rem]:mt-12 max-[56rem]:ml-3 max-[34rem]:grid max-[34rem]:grid-cols-2 [&>span]:before:text-[var(--accent)] [&>span]:before:content-['×_']">
            <span>Admin tools</span><span>Job platforms</span><span>SaaS products</span><span>Full-stack builds</span>
          </div>
        </section>

        <section className={`${contentWidthClass} ${sectionPaddingClass} scroll-mt-[calc(var(--header-height)+1rem)]`} id="work" aria-labelledby="work-title">
          <div className="mb-[clamp(3rem,7vw,7rem)] grid grid-cols-12 items-end max-[56rem]:grid-cols-1 max-[56rem]:gap-6" data-motion-group>
            <SectionLabel className="col-start-1 col-end-3 max-[56rem]:col-start-1 max-[56rem]:col-end-2" index="01—04">Curated project index</SectionLabel>
            <h2 className={`${sectionTitleClass} col-start-3 col-end-10 min-w-0 max-[56rem]:col-start-1 max-[56rem]:col-end-2`} id="work-title" data-motion="heading">Selected work</h2>
            <p className="col-start-10 col-end-13 min-w-0 max-w-96 text-base text-[var(--muted)] max-[56rem]:col-start-1 max-[56rem]:col-end-2" data-motion="body">Products built for real workflows, not just polished screens.</p>
          </div>
          <div className="flex flex-col gap-[clamp(5rem,12vw,12rem)]">{projects.map((project, index) => <ProjectShowcase key={project.slug} project={project} reverse={index % 2 === 1} />)}</div>
        </section>

        <section className={`${contentWidthClass} ${sectionPaddingClass} scroll-mt-[calc(var(--header-height)+1rem)] border-t border-[var(--foreground)]`} id="about" aria-labelledby="about-title">
          <SectionLabel className="mb-[clamp(2rem,4vw,4rem)]" index="A">About / working style</SectionLabel>
          <div className="grid grid-cols-12 max-[56rem]:grid-cols-1" data-motion-group>
            <h2 className="col-start-1 col-end-9 min-w-0 max-w-[18ch] text-[clamp(2.4rem,5.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] max-[56rem]:col-start-1 max-[56rem]:col-end-2" id="about-title" data-motion="heading">I make complicated products feel straightforward.</h2>
            <div className="col-start-9 col-end-13 flex min-w-0 flex-col gap-6 border-l border-[var(--rule)] pl-[clamp(1rem,3vw,3rem)] text-[clamp(1rem,1.35vw,1.3rem)] text-[var(--muted)] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:mt-8 max-[56rem]:gap-4 max-[56rem]:border-t max-[56rem]:border-l-0 max-[56rem]:p-[1.5rem_0_0]" data-motion="body">
              <p>I’m a frontend developer with a computer science background and a practical eye for how products should work.</p>
              <p>I pay attention to the parts people notice—hierarchy, spacing, feedback, and responsiveness—and the technical choices that keep those parts fast and reliable. Give me a messy workflow and I’ll help turn it into a clear interface.</p>
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
              <ol className="m-0 list-none p-0">{capabilities.map((capability, index) => (
                <li className="grid grid-cols-[2rem_1fr] gap-2 border-t border-[var(--rule)] py-[0.55rem] text-[clamp(0.9rem,1.2vw,1.1rem)] last:border-b" key={capability}><span className="font-mono text-[0.62rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span>{capability}</li>
              ))}</ol>
            </div>
          </div>
        </section>

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

        <section className={`${contentWidthClass} ${sectionPaddingClass} border-t border-[var(--foreground)]`} aria-labelledby="stack-title">
          <div className="mb-[clamp(3rem,6vw,6rem)] grid grid-cols-[1fr_3fr] items-start gap-[clamp(2rem,5vw,5rem)] max-[56rem]:grid-cols-1 max-[56rem]:gap-5" data-motion-group>
            <SectionLabel index="S">Working toolkit</SectionLabel>
            <h2 className="min-w-0 max-w-[18ch] text-[clamp(2.5rem,5vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.055em]" id="stack-title" data-motion="heading">Technology, organized by use.</h2>
          </div>
          <div className="border-t border-[var(--foreground)]">{stackGroups.map((group, index) => (
            <section className="grid grid-cols-[1fr_3fr] gap-[clamp(2rem,5vw,5rem)] border-b border-[var(--foreground)] py-[clamp(1.25rem,2.2vw,2rem)] max-[56rem]:grid-cols-1 max-[56rem]:gap-5" key={group.label} data-motion-row data-motion-delay={index * 0.08}>
              <header className="grid min-w-0 grid-cols-[2rem_1fr] gap-2"><span className="font-mono text-[0.65rem] text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span><h3 className="text-[clamp(1rem,1.5vw,1.3rem)] font-[650]">{group.label}</h3></header>
              <p className="min-w-0 max-w-[64rem] text-[clamp(1.15rem,2.25vw,2.4rem)] leading-[1.35] tracking-[-0.025em]">{group.items.join(" · ")}</p>
            </section>
          ))}</div>
        </section>

        <section className={`${contentWidthClass} scroll-mt-[calc(var(--header-height)+1rem)] bg-[var(--foreground)] px-[var(--page-gutter)] pt-[clamp(2rem,4vw,4rem)] pb-[clamp(3rem,7vw,7rem)] text-[var(--inverse)]`} id="contact" aria-labelledby="contact-title" data-motion-group>
          <div className="flex justify-between gap-4 border-b border-[#55534e] pb-4 font-mono text-[0.65rem] tracking-[0.05em] uppercase max-[34rem]:grid max-[34rem]:grid-cols-1" data-motion="meta">
            <span className="before:mr-[0.6rem] before:inline-block before:h-[0.55rem] before:w-[0.55rem] before:rounded-[2px] before:border before:border-[var(--inverse)] before:bg-[var(--accent)] before:content-[''] forced-colors:before:bg-[Highlight]">Available for freelance</span><span>Selected full-time roles</span><span>Thailand / Myanmar</span>
          </div>
          <p className="mt-[clamp(4rem,8vw,8rem)] font-mono text-[0.68rem] tracking-[0.06em] uppercase" data-motion="kicker">Have a project?</p>
          <h2 className="mt-4 font-display text-[clamp(3.8rem,12.3vw,14rem)] leading-[0.78] tracking-[-0.075em] uppercase" id="contact-title" data-motion="heading">Let’s make it clear.</h2>
          <a className="group mt-[clamp(3rem,7vw,7rem)] flex items-center justify-between gap-4 border-y border-[var(--inverse)] py-[clamp(1rem,2vw,1.5rem)] text-[clamp(1.2rem,3.7vw,4.2rem)] font-semibold leading-none tracking-[-0.04em] transition-[color,padding,background-color] duration-150 hover:bg-[var(--accent)] hover:px-2 focus-visible:bg-[var(--accent)] focus-visible:px-2 max-[34rem]:items-start max-[34rem]:text-[clamp(1rem,5vw,1.5rem)]" href="mailto:thawzzin.dev@gmail.com" data-motion="link">
            <span>thawzzin.dev@gmail.com</span><Arrow className="shrink-0 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
          </a>
          <div className="mt-[clamp(2rem,4vw,4rem)] grid grid-cols-[2fr_1fr] gap-8 max-[56rem]:grid-cols-1" data-motion="body">
            <p className="max-w-[33rem] text-[#bcb9b0]">Tell me what you’re building, where it gets complicated, and what needs to ship.</p>
            <div className="flex justify-end gap-6 max-[56rem]:justify-start">{socialLinks.map((link) => (
              <a className="group inline-flex items-center gap-[0.4rem] border-b border-current pb-1 font-mono text-[0.72rem] uppercase hover:text-[#7b9bff]" key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} <Arrow className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></a>
            ))}</div>
          </div>
        </section>
      </main>

      <footer className={`${contentWidthClass} flex justify-between border-t border-[#55534e] bg-[var(--foreground)] px-[var(--page-gutter)] py-[1.2rem] font-mono text-[0.62rem] tracking-[0.04em] text-[#bcb9b0] uppercase max-[34rem]:grid max-[34rem]:grid-cols-[1fr_auto] max-[34rem]:gap-2`}>
        <span>Thaw Zin © 2026</span><span className="max-[34rem]:col-start-1 max-[34rem]:col-end-3 max-[34rem]:row-start-2">Built with Next.js</span><a className="text-[var(--inverse)]" href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
