import { Arrow } from "./portfolio-primitives";

const navigationLinks = [
  ["Work", "#work"],
  ["About", "#about"],
  ["Contact", "#contact"],
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 grid min-h-[var(--header-height)] grid-cols-[1fr_auto_1fr] items-center border-b border-[var(--foreground)] bg-[color-mix(in_srgb,var(--background)_94%,transparent)] px-[var(--page-gutter)] backdrop-blur-[12px] max-[56rem]:grid-cols-[1fr_auto] max-[56rem]:grid-rows-[3rem_2.8rem]">
      <a className="w-max font-display text-base tracking-[-0.04em]" href="#top" aria-label="Thaw Zin, back to top">
        Z<span className="font-mono text-[0.65em] tracking-normal text-[var(--accent)]">/26</span>
      </a>
      <nav className="flex gap-[clamp(1.25rem,3vw,3rem)] max-[56rem]:col-start-1 max-[56rem]:col-end-3 max-[56rem]:row-start-2 max-[56rem]:items-center max-[56rem]:justify-between max-[56rem]:self-stretch max-[56rem]:border-t max-[56rem]:border-[var(--rule)]" aria-label="Primary navigation">
        {navigationLinks.map(([label, href]) => (
          <a key={href} className="relative text-xs font-[650] tracking-[0.07em] uppercase after:absolute after:right-0 after:-bottom-[0.28rem] after:left-0 after:h-px after:origin-right after:scale-x-0 after:bg-[var(--foreground)] after:transition-transform after:duration-200 after:content-[''] hover:after:origin-left hover:after:scale-x-100 focus-visible:after:origin-left focus-visible:after:scale-x-100 max-[34rem]:text-[0.65rem]" href={href}>
            {label}
          </a>
        ))}
      </nav>
      <a className="relative flex items-center justify-self-end gap-2 text-xs font-[650] tracking-[0.07em] uppercase max-[56rem]:hidden" href="#contact">
        <span className="h-[0.55rem] w-[0.55rem] rounded-[2px] border border-[var(--foreground)] bg-[var(--accent)] forced-colors:bg-[Highlight]" aria-hidden="true" />
        <span>Available for work</span>
        <Arrow direction="down" />
      </a>
    </header>
  );
}
