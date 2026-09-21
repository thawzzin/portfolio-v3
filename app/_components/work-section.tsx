import { projects, type Project } from "../portfolio-data";
import { ProjectVisual } from "../project-visual";
import { contentWidthClass, sectionPaddingClass, SectionLabel, sectionTitleClass } from "./portfolio-primitives";

function ProjectShowcase({ project, reverse }: { project: Project; reverse: boolean }) {
  const indexPosition = reverse ? "col-start-12 col-end-13" : "col-start-1 col-end-2";
  const mediaPosition = reverse ? "col-start-5 col-end-12" : "col-start-2 col-end-9";
  const copyPosition = reverse ? "col-start-1 col-end-5 pr-[clamp(1.25rem,3vw,3rem)]" : "col-start-9 col-end-13 pl-[clamp(1.25rem,3vw,3rem)]";

  return (
    <article className="grid min-w-0 grid-cols-12 grid-rows-[auto_1fr] max-[56rem]:grid-cols-[2.4rem_1fr] max-[56rem]:grid-rows-[auto_auto]" data-motion-project data-motion-reverse={reverse ? "true" : undefined}>
      <div className={`row-start-1 row-end-3 flex min-w-0 flex-col justify-between border border-[var(--foreground)] bg-[var(--accent)] p-3 font-mono text-[var(--on-accent)] uppercase max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-start-1 max-[56rem]:row-end-3 ${indexPosition}`} data-motion="project-index" aria-label={`Project ${project.number}`}>
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

export function WorkSection() {
  return (
    <section className={`${contentWidthClass} ${sectionPaddingClass} scroll-mt-[calc(var(--header-height)+1rem)]`} id="work" aria-labelledby="work-title">
      <div className="mb-[clamp(3rem,7vw,7rem)] grid grid-cols-12 items-end max-[56rem]:grid-cols-1 max-[56rem]:gap-6" data-motion-group>
        <SectionLabel className="col-start-1 col-end-3 max-[56rem]:col-start-1 max-[56rem]:col-end-2" index="01—04">Curated project index</SectionLabel>
        <h2 className={`${sectionTitleClass} col-start-3 col-end-10 min-w-0 max-[56rem]:col-start-1 max-[56rem]:col-end-2`} id="work-title" data-motion="heading">Selected work</h2>
        <p className="col-start-10 col-end-13 min-w-0 max-w-96 text-base text-[var(--muted)] max-[56rem]:col-start-1 max-[56rem]:col-end-2" data-motion="body">Products built across the stack for real workflows, not just polished screens.</p>
      </div>
      <div className="flex flex-col gap-[clamp(5rem,12vw,12rem)]">
        {projects.map((project, index) => <ProjectShowcase key={project.slug} project={project} reverse={index % 2 === 1} />)}
      </div>
    </section>
  );
}
