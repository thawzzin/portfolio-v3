import { contentWidthClass } from "./portfolio-primitives";

export function SiteFooter() {
  return (
    <footer className={`${contentWidthClass} flex justify-between border-t border-[var(--inverse-rule)] bg-[var(--foreground)] px-[var(--page-gutter)] py-[1.2rem] font-mono text-[0.62rem] tracking-[0.04em] text-[var(--inverse-muted)] uppercase max-[34rem]:grid max-[34rem]:grid-cols-[1fr_auto] max-[34rem]:gap-2`}>
      <span>Thaw Zin © 2026</span>
      <span className="max-[34rem]:col-start-1 max-[34rem]:col-end-3 max-[34rem]:row-start-2">Everything beautiful reminds me of someone. Maybe that’s why I care about every pixel.</span>
      <a className="text-[var(--inverse)]" href="#top">Back to top ↑</a>
    </footer>
  );
}
