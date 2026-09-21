import type { ReactNode } from "react";

export const contentWidthClass = "mx-auto w-[min(100%,var(--content-max))]";
export const sectionPaddingClass = "px-[var(--page-gutter)] py-[var(--section-gap)] max-[34rem]:px-4";
export const sectionTitleClass = "font-display text-[clamp(3rem,7.25vw,8.2rem)] leading-[0.86] tracking-[-0.065em] uppercase max-[56rem]:text-[clamp(3.4rem,15vw,6.5rem)]";
export const ledgerHeadingClass = "mb-4 font-mono text-[0.7rem] tracking-[0.08em] uppercase";

export function Arrow({ direction = "up", className = "" }: { direction?: "up" | "down"; className?: string }) {
  return (
    <svg className={`h-[1em] w-[1em] overflow-visible fill-none stroke-current [stroke-linecap:square] [stroke-linejoin:miter] [stroke-width:1.6] transition-transform duration-150 ${direction === "down" ? "rotate-90" : ""} ${className}`} viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 16 16 4M7 4h9v9" />
    </svg>
  );
}

export function SectionLabel({ index, children, className = "" }: { index: string; children: ReactNode; className?: string }) {
  return (
    <div className={`flex min-w-0 flex-col gap-[0.35rem] font-mono text-[0.67rem] tracking-[0.06em] uppercase ${className}`} data-motion="label">
      <span className="text-[var(--accent)]">{index}</span>
      <p>{children}</p>
    </div>
  );
}
