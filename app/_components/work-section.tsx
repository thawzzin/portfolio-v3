import { projects, type Project } from "../portfolio-data";
import { ProjectVisual } from "../project-visual";
import {
  contentWidthClass,
  sectionPaddingClass,
  SectionLabel,
  sectionTitleClass,
} from "./portfolio-primitives";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="flex min-w-0 flex-col border border-[var(--foreground)] bg-[var(--surface)] shadow-[3px_3px_0_var(--foreground)]"
      data-motion-project
    >
      <div
        className="min-w-0 border-b border-[var(--foreground)] p-[clamp(0.55rem,1vw,0.85rem)]"
        data-motion="project-media"
      >
        <ProjectVisual title={project.title} visual={project.visual} />
      </div>

      <div
        className="flex flex-1 flex-col p-[clamp(1rem,2vw,1.75rem)]"
        data-motion="project-copy"
      >
        <div className="flex items-start justify-between gap-5">
          <div className="min-w-0">
            <p className="mb-2 font-mono text-[0.62rem] tracking-[0.07em] text-[var(--muted)] uppercase">
              {project.type}
            </p>
            <h3 className="font-display text-[clamp(1.75rem,3vw,3.25rem)] leading-[0.9] tracking-[-0.055em] uppercase max-[32rem]:[overflow-wrap:anywhere]">
              {project.title}
            </h3>
          </div>
          <span
            className="grid size-10 shrink-0 place-items-center bg-[var(--foreground)] font-mono text-[0.72rem] text-[var(--inverse)]"
            data-motion="project-index"
            aria-label={`Project ${project.number}`}
          >
            {project.number}
          </span>
        </div>

        <p className="mt-4 max-w-[56rem] text-[0.94rem] leading-[1.55] text-[var(--muted)]">
          {project.description}
        </p>

        <dl className="mt-auto pt-5 font-mono text-[0.64rem] leading-relaxed tracking-[0.035em] uppercase">
          <div
            className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-[var(--rule)] py-2.5"
            data-motion="meta-row"
          >
            <dt className="text-[var(--muted)]">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div
            className="grid grid-cols-[4.5rem_1fr] gap-3 border-t border-[var(--rule)] pt-2.5"
            data-motion="meta-row"
          >
            <dt className="text-[var(--muted)]">Stack</dt>
            <dd>{project.stack.join(" / ")}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function WorkSection() {
  const lastProjectNumber = String(projects.length).padStart(2, "0");

  return (
    <section
      className={`${contentWidthClass} ${sectionPaddingClass} scroll-mt-[calc(var(--header-height)+1rem)]`}
      id="work"
      aria-labelledby="work-title"
    >
      <div
        className="mb-[clamp(2.5rem,4vw,4rem)] grid grid-cols-12 items-end max-[56rem]:grid-cols-1 max-[56rem]:gap-6"
        data-motion-group
      >
        <SectionLabel
          className="col-start-1 col-end-3 max-[56rem]:col-start-1 max-[56rem]:col-end-2"
          index={`01—${lastProjectNumber}`}
        >
          Curated project index
        </SectionLabel>
        <h2
          className={`${sectionTitleClass} col-start-3 col-end-10 min-w-0 max-[56rem]:col-start-1 max-[56rem]:col-end-2`}
          id="work-title"
          data-motion="heading"
        >
          Selected Works
        </h2>
        <p
          className="col-start-10 col-end-13 min-w-0 max-w-96 text-base text-[var(--muted)] max-[56rem]:col-start-1 max-[56rem]:col-end-2"
          data-motion="body"
        >
          Products built across the stack for real workflows, not just polished screens.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-[clamp(0.75rem,1.5vw,1.5rem)] max-[46rem]:grid-cols-1">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
