import Image from "next/image";
import { Arrow, contentWidthClass } from "./portfolio-primitives";

export function HeroSection() {
  return (
    <section className={`${contentWidthClass} hero grid min-h-[calc(100svh-var(--header-height))] scroll-mt-[calc(var(--header-height)+1rem)] grid-cols-12 border-b border-[var(--foreground)] px-[var(--page-gutter)] pt-[clamp(1.5rem,4vw,4rem)] pb-[clamp(2rem,5vw,4rem)] max-[56rem]:min-h-0 max-[56rem]:grid-cols-1 max-[56rem]:overflow-visible max-[56rem]:pt-4`} id="top" aria-labelledby="hero-title">
      <div className="col-start-1 col-end-2 row-start-1 row-end-4 flex min-w-0 rotate-180 flex-col items-start justify-between bg-[var(--accent)] px-3 py-4 font-mono text-[0.65rem] tracking-[0.06em] text-[var(--on-accent)] uppercase [writing-mode:vertical-rl] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-auto max-[56rem]:rotate-0 max-[56rem]:flex-row max-[56rem]:items-center max-[56rem]:px-3 max-[56rem]:py-2.5 max-[56rem]:text-[0.6rem] max-[56rem]:[writing-mode:horizontal-tb]">
        <span>Frontend developer</span>
        <span>Based in Thailand</span>
      </div>
      <h1 className="hero__title col-start-2 col-end-13 row-start-1 flex min-w-0 flex-col self-start pl-[clamp(1rem,2vw,2rem)] font-display text-[clamp(5rem,15.2vw,16.75rem)] leading-[0.72] tracking-[-0.075em] uppercase max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-auto max-[56rem]:mt-7 max-[56rem]:pl-0 max-[56rem]:text-[clamp(4.2rem,22vw,7.5rem)] max-[56rem]:tracking-[-0.08em] max-[34rem]:text-[clamp(3.6rem,21vw,5rem)]" id="hero-title">
        <span>Thaw</span>
        <span className="ml-[26%] text-transparent [-webkit-text-stroke:clamp(1px,0.12vw,2px)_var(--foreground)] max-[56rem]:ml-[18%] forced-colors:text-[currentColor] forced-colors:[-webkit-text-stroke:0]">Zin</span>
      </h1>
      <div className="hero__statement col-start-2 col-end-9 min-w-0 self-end p-[clamp(2rem,6vw,5rem)_clamp(1rem,3vw,3rem)_0] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-auto max-[56rem]:p-[2.75rem_0_0]">
          <p className="max-w-[18ch] text-[clamp(1.85rem,3.75vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.055em] max-[56rem]:max-w-[21ch] max-[56rem]:text-[clamp(1.75rem,7vw,2.75rem)] max-[56rem]:break-words">Frontend developer building clear, fast interfaces for real products.</p>
      </div>
      <div className="hero__aside col-start-9 col-end-13 flex min-w-0 flex-col justify-end gap-8 border-l border-[var(--rule)] p-[clamp(2rem,6vw,5rem)_0_0_clamp(1rem,2vw,2rem)] max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-auto max-[56rem]:mt-8 max-[56rem]:grid max-[56rem]:grid-cols-[6rem_minmax(0,1fr)] max-[56rem]:gap-x-5 max-[56rem]:gap-y-4 max-[56rem]:border-t max-[56rem]:border-l-0 max-[56rem]:p-[1.5rem_0_0] max-[34rem]:grid-cols-[5.25rem_minmax(0,1fr)] max-[34rem]:gap-x-4">
        <figure className="hero__portrait relative w-[clamp(6.5rem,9vw,9rem)] max-[56rem]:col-start-1 max-[56rem]:row-start-1 max-[56rem]:row-end-2 max-[56rem]:w-full max-[56rem]:self-start" data-motion="body">
          <span className="absolute inset-0 translate-x-2 translate-y-2 bg-[var(--accent)]" aria-hidden="true" />
          <Image className="relative aspect-[29/36] h-auto w-full border border-[var(--foreground)] object-cover" src="/images/avatar.jpeg" width={928} height={1152} sizes="(max-width: 896px) 104px, 144px" alt="Portrait of Thaw Zin" preload />
        </figure>
        <p className="max-w-[33rem] text-[clamp(1rem,1.35vw,1.35rem)] leading-[1.45] text-[var(--muted)] max-[56rem]:col-start-2 max-[56rem]:row-start-1 max-[34rem]:text-[0.92rem]">I turn complex product workflows into responsive, accessible interfaces that feel simple to use and stay solid in production.</p>
        <a className="group inline-flex w-max items-center gap-[0.65rem] border-b border-[var(--foreground)] pb-[0.35rem] font-bold transition-[color,transform] duration-150 hover:translate-x-0.5 hover:-translate-y-0.5 hover:text-[var(--accent)] max-[56rem]:col-start-2 max-[56rem]:row-start-2 max-[56rem]:self-end max-[34rem]:text-sm" href="#work">
          See selected work <Arrow direction="down" className="group-hover:translate-x-0.5" />
        </a>
      </div>
      <div className="hero__tags col-start-2 col-end-13 mt-[clamp(3rem,6vw,6rem)] ml-[clamp(1rem,3vw,3rem)] flex min-w-0 flex-wrap gap-x-6 gap-y-2 self-end border-t border-[var(--foreground)] pt-[0.8rem] font-mono text-[0.68rem] tracking-[0.04em] uppercase max-[56rem]:col-start-1 max-[56rem]:col-end-2 max-[56rem]:row-auto max-[56rem]:mt-10 max-[56rem]:ml-0 max-[34rem]:grid max-[34rem]:grid-cols-2 max-[34rem]:gap-x-3 max-[34rem]:text-[0.6rem] [&>span]:before:text-[var(--accent)] [&>span]:before:content-['×_']">
        <span>Product interfaces</span><span>Design systems</span><span>Responsive builds</span>
      </div>
    </section>
  );
}
