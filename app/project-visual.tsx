import Image from "next/image";
import type { Project } from "./portfolio-data";

type ProjectVisualProps = Pick<Project, "title" | "visual">;

function MobileProjectVisual({ title, src }: { title: string; src: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[var(--orderflow-accent)] text-[var(--on-accent)]">
      <div className="absolute inset-x-0 top-1/3 border-t border-white/30" />
      <div className="absolute inset-x-0 top-2/3 border-t border-white/30" />
      <div className="absolute top-0 bottom-0 left-[12%] border-l border-white/25" />

      <div className="absolute top-1/2 right-[-7%] h-[138%] aspect-square -translate-y-1/2 rounded-full border border-[var(--foreground)] bg-[var(--surface)]" />
      <div className="absolute top-1/2 right-[1%] h-[108%] aspect-square -translate-y-1/2 rounded-full border border-[var(--orderflow-accent)]" />

      <div className="absolute top-[clamp(0.8rem,1.8vw,1.35rem)] left-[clamp(0.85rem,2vw,1.5rem)] z-[1] font-mono text-[clamp(0.42rem,0.65vw,0.62rem)] tracking-[0.08em] uppercase">
        OrderFlow / Mobile ordering
      </div>

      <p className="absolute top-1/2 left-[clamp(0.85rem,2vw,1.5rem)] z-[1] -translate-y-1/2 font-display text-[clamp(1.05rem,2.7vw,2.55rem)] leading-[0.88] tracking-[-0.055em] uppercase">
        Scan.
        <br />
        Order.
        <br />
        Track.
      </p>

      <div className="absolute bottom-[clamp(0.75rem,1.6vw,1.25rem)] left-[clamp(0.85rem,2vw,1.5rem)] z-[1] flex gap-[clamp(0.65rem,1.5vw,1.4rem)] font-mono text-[clamp(0.36rem,0.55vw,0.52rem)] tracking-[0.05em] uppercase">
        <span>01 Menu</span>
        <span>02 Cart</span>
        <span>03 Status</span>
      </div>

      <div className="absolute top-1/2 right-[10%] z-[2] h-[88%] -translate-y-1/2">
        <div className="h-full" data-motion-device="phone">
          <div className="h-full [animation:phone-float_3.4s_ease-in-out_infinite_alternate] [will-change:transform] motion-reduce:animate-none">
            <div className="relative h-full aspect-[9/19.5] rounded-[clamp(0.82rem,1.35vw,1.25rem)] border border-[var(--foreground)] bg-[var(--foreground)] p-0.5">
              <span className="absolute top-[clamp(0.25rem,0.42vw,0.38rem)] left-1/2 z-[4] h-[clamp(0.1rem,0.16vw,0.15rem)] w-[22%] -translate-x-1/2 rounded-full bg-[var(--foreground)]" />
              <div className="relative h-full w-full overflow-hidden rounded-[clamp(0.68rem,1.18vw,1.08rem)] bg-white">
                <Image
                  src={src}
                  alt={`${title} mobile interface`}
                  fill
                  sizes="(max-width: 736px) 28vw, 14vw"
                  className="object-contain object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ProjectVisual({ title, visual }: ProjectVisualProps) {
  const isMobile = visual.kind === "mobile";

  return (
    <figure className="relative aspect-[16/9] min-w-0 overflow-hidden border border-[var(--foreground)] bg-[var(--surface-strong)]">
      {isMobile ? (
        <MobileProjectVisual title={title} src={visual.src} />
      ) : (
        <div className="absolute inset-0" data-motion-device="desktop">
          <Image
            src={visual.src}
            alt={`${title} desktop interface`}
            fill
            sizes="(max-width: 736px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      )}

      <figcaption className="sr-only">
        {title} {isMobile ? "mobile" : "desktop"} interface
      </figcaption>
    </figure>
  );
}
