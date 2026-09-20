import { ProjectVisual } from "./project-visual";
import {
  capabilities,
  experiences,
  projects,
  stackGroups,
  type Project,
} from "./portfolio-data";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/thawzzin" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thaw-zin-876380253" },
] as const;

function Arrow({ direction = "up" }: { direction?: "up" | "down" }) {
  return (
    <svg
      className={direction === "down" ? "arrow arrow--down" : "arrow"}
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <p>{children}</p>
    </div>
  );
}

function ProjectShowcase({ project, reverse }: { project: Project; reverse: boolean }) {
  return (
    <article className={`project reveal${reverse ? " project--reverse" : ""}`}>
      <div className="project-index" aria-label={`Project ${project.number}`}>
        <span>{project.number}</span>
        <p>Selected work</p>
      </div>
      <div className="project-media">
        <ProjectVisual slug={project.slug} title={project.title} />
      </div>
      <div className="project-copy">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <dl className="project-meta">
          <div>
            <dt>Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>{project.stack.join(" / ")}</dd>
          </div>
          <div>
            <dt>Case study</dt>
            <dd>In progress</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Thaw Zin, back to top">
          TZ<span>/26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="availability-link" href="#contact">
          <span className="status-dot" aria-hidden="true" />
          <span className="availability-text">Available for work</span>
          <Arrow direction="down" />
        </a>
      </header>

      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-edge">
            <span>Frontend developer</span>
            <span>Based in Thailand</span>
          </div>
          <h1 className="hero-name" id="hero-title">
            <span>Thaw</span>
            <span>Zin</span>
          </h1>
          <div className="hero-statement">
            <p>Frontend developer building clear interfaces for complicated products.</p>
          </div>
          <div className="hero-intro">
            <p>
              I turn product ideas into fast, dependable web apps—mostly with React,
              Next.js, and TypeScript.
            </p>
            <a className="text-link" href="#work">
              See selected work <Arrow direction="down" />
            </a>
          </div>
          <div className="hero-note">
            <span>Admin tools</span>
            <span>Job platforms</span>
            <span>SaaS products</span>
            <span>Full-stack builds</span>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <SectionLabel index="01—04">Curated project index</SectionLabel>
            <h2 id="work-title">Selected work</h2>
            <p>Products built for real workflows, not just polished screens.</p>
          </div>
          <div className="projects-list">
            {projects.map((project, index) => (
              <ProjectShowcase key={project.slug} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <SectionLabel index="A">About / working style</SectionLabel>
          <div className="about-intro reveal">
            <h2 id="about-title">I make complicated products feel straightforward.</h2>
            <div>
              <p>
                I’m a frontend developer with a computer science background and a practical
                eye for how products should work.
              </p>
              <p>
                I pay attention to the parts people notice—hierarchy, spacing, feedback,
                and responsiveness—and the technical choices that keep those parts fast
                and reliable. Give me a messy workflow and I’ll help turn it into a clear interface.
              </p>
            </div>
          </div>

          <div className="experience-capabilities">
            <div className="experience-ledger reveal">
              <h3>Experience</h3>
              {experiences.map((experience, index) => (
                <article key={experience.company}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h4>{experience.company}</h4>
                    <p>{experience.role}</p>
                  </div>
                  <time>{experience.period}</time>
                </article>
              ))}
            </div>
            <div className="capability-index reveal">
              <h3>Capabilities</h3>
              <ol>
                {capabilities.map((capability, index) => (
                  <li key={capability}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    {capability}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="stack-section" aria-labelledby="stack-title">
          <div className="stack-heading">
            <SectionLabel index="S">Working toolkit</SectionLabel>
            <h2 id="stack-title">Technology, organized by use.</h2>
          </div>
          <div className="stack-directory reveal">
            {stackGroups.map((group, index) => (
              <section key={group.label}>
                <header>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.label}</h3>
                </header>
                <p>{group.items.join(" · ")}</p>
              </section>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-meta">
            <span>Available for freelance</span>
            <span>Selected full-time roles</span>
            <span>Thailand / Remote</span>
          </div>
          <p className="contact-kicker">Have a project?</p>
          <h2 id="contact-title">Let’s make it clear.</h2>
          <a className="contact-email" href="mailto:thawzzin.dev@gmail.com">
            <span>thawzzin.dev@gmail.com</span>
            <Arrow />
          </a>
          <div className="contact-bottom">
            <p>Tell me what you’re building, where it gets complicated, and what needs to ship.</p>
            <div className="social-links">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label} <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Thaw Zin © 2026</span>
        <span>Built with Next.js</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
