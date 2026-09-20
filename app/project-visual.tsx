import type { Project } from "./portfolio-data";

type ProjectVisualProps = Pick<Project, "slug" | "title">;
type ProjectSlug = ProjectVisualProps["slug"];

const desktopVisualClass = "relative h-full w-full overflow-hidden bg-[var(--surface)] font-sans";
const mobileAppClass = "flex h-full flex-col px-[clamp(0.45rem,1vw,0.85rem)] py-[clamp(0.5rem,1.15vw,1rem)] text-[clamp(0.32rem,0.55vw,0.52rem)] [&>strong]:mt-[0.35rem] [&>strong]:mb-auto [&>strong]:block [&>strong]:text-[clamp(0.7rem,1.5vw,1.35rem)] [&>strong]:leading-[0.95] [&>strong]:tracking-[-0.04em]";
const mobileEyebrowClass = "font-mono text-[0.82em] tracking-[0.05em] uppercase";
const mobileBrandClass = "flex items-center justify-between font-extrabold [&>span]:font-mono [&>span]:text-[0.75em] [&>span]:font-medium [&>span]:uppercase";
const desktopKickerClass = "font-mono text-[clamp(0.45rem,0.65vw,0.62rem)] tracking-[0.08em] uppercase";
const desktopTitleClass = "mt-2 block max-w-[8ch] text-[clamp(1.15rem,2.8vw,2.9rem)] leading-[0.95] tracking-[-0.04em]";

function OrderFlowVisual() {
  return (
    <div className={`${desktopVisualClass} grid grid-cols-[1.65fr_1fr] grid-rows-[auto_1fr]`}>
      <div className="col-span-2 flex justify-between border-b border-current bg-[var(--foreground)] px-[0.9rem] py-[0.7rem] font-mono text-[clamp(0.42rem,0.7vw,0.65rem)] text-[var(--inverse)]">
        <span>ORDERFLOW / TABLE 12</span>
        <span>03 ITEMS</span>
      </div>
      <div className="flex flex-col border-r border-[var(--foreground)] p-[clamp(1rem,2.4vw,2.5rem)] max-[34rem]:p-3">
        <span className={desktopKickerClass}>Popular tonight</span>
        <strong className={desktopTitleClass}>Choose your order</strong>
        <div className="mt-auto [&>div]:grid [&>div]:grid-cols-[auto_1fr_auto] [&>div]:items-center [&>div]:gap-[0.6rem] [&>div]:border-t [&>div]:border-[var(--rule)] [&>div]:py-[clamp(0.5rem,1.2vw,0.9rem)] [&>div]:text-[clamp(0.48rem,0.82vw,0.78rem)] [&_i]:aspect-square [&_i]:w-[clamp(0.75rem,1.7vw,1.5rem)] [&_i]:bg-[var(--accent)]">
          <div><i /> <span>Smoked basil noodles</span><b>฿180</b></div>
          <div><i /> <span>Crispy tofu bowl</span><b>฿160</b></div>
          <div><i /> <span>Pomelo soda</span><b>฿90</b></div>
        </div>
      </div>
      <div className="flex flex-col bg-[var(--accent)] p-[clamp(1rem,2vw,2rem)] text-[var(--inverse)] max-[34rem]:p-3">
        <span className={desktopKickerClass}>Live order</span>
        <strong className="mt-auto font-display text-[clamp(2rem,5.8vw,6rem)] leading-[0.85]">#A-184</strong>
        <div className="my-4 h-[5px] bg-white/35"><span className="block h-full w-[68%] bg-[var(--inverse)]" /></div>
        <small className="max-w-[15ch] text-[clamp(0.46rem,0.75vw,0.7rem)]">Kitchen is preparing your order</small>
      </div>
    </div>
  );
}

function UniFindVisual() {
  return (
    <div className={`${desktopVisualClass} flex flex-col p-[clamp(1rem,2.5vw,2.5rem)] max-[34rem]:p-3`}>
      <div className="flex items-baseline justify-between border-b border-[var(--foreground)] pb-4">
        <strong className="font-display text-[clamp(0.9rem,1.8vw,1.8rem)]">UNIFIND</strong>
        <span className="font-mono text-[clamp(0.42rem,0.65vw,0.6rem)] uppercase">Campus item index</span>
      </div>
      <div className="mt-[clamp(1rem,2.5vw,2.5rem)] flex justify-between border border-[var(--foreground)] p-[clamp(0.6rem,1.3vw,1rem)] text-[clamp(0.55rem,1vw,0.95rem)] text-[var(--muted)]">Search bags, keys, cards… <b className="text-[1.4em] text-[var(--foreground)]">⌕</b></div>
      <div className="mt-[clamp(0.75rem,1.5vw,1.5rem)] grid grid-cols-3 gap-[clamp(0.5rem,1.2vw,1rem)] max-[34rem]:gap-[0.35rem]">
        <DesktopItemCard label="FOUND" name="Student ID" detail="Library · Today" accent />
        <DesktopItemCard label="LOST" name="Canvas tote" detail="Building C · Mon" />
        <DesktopItemCard label="FOUND" name="Silver keys" detail="Cafeteria · Fri" />
      </div>
      <div className="mt-auto flex justify-between border-t border-[var(--foreground)] pt-4 font-mono text-[clamp(0.48rem,0.8vw,0.75rem)] uppercase">Possible match <strong>92%</strong></div>
    </div>
  );
}

function DesktopItemCard({ label, name, detail, accent = false }: { label: string; name: string; detail: string; accent?: boolean }) {
  return (
    <div className={`flex aspect-[0.9] flex-col border border-[var(--foreground)] p-[clamp(0.55rem,1.25vw,1rem)] max-[34rem]:p-[0.4rem] ${accent ? "bg-[var(--accent)] text-[var(--inverse)]" : "bg-[var(--background)]"}`}>
      <span className="font-mono text-[clamp(0.35rem,0.55vw,0.55rem)]">{label}</span>
      <strong className="mt-auto text-[clamp(0.6rem,1.2vw,1.15rem)]">{name}</strong>
      <small className={`mt-[0.35rem] font-mono text-[clamp(0.35rem,0.55vw,0.55rem)] ${accent ? "text-[var(--inverse)]" : "text-[var(--muted)]"}`}>{detail}</small>
    </div>
  );
}

function JackVisual() {
  return (
    <div className={`${desktopVisualClass} grid grid-cols-[0.55fr_2fr_0.7fr]`}>
      <div className="flex flex-col gap-5 border-r border-[var(--foreground)] bg-[#d6d1c5] p-[clamp(0.7rem,1.5vw,1.5rem)] [&>span]:font-mono [&>span]:text-[clamp(0.35rem,0.55vw,0.55rem)] [&>span]:[writing-mode:vertical-rl]">
        <strong className="mb-auto font-display text-[clamp(0.8rem,1.6vw,1.5rem)]">J/SG</strong>
        <span>DISCOVER</span><span>SAVED</span><span>APPLIED</span>
      </div>
      <div className="flex flex-col p-[clamp(1rem,2.5vw,2.5rem)] max-[34rem]:p-3">
        <span className={desktopKickerClass}>Open roles / Singapore</span>
        <strong className={desktopTitleClass}>Find work that fits.</strong>
        <DesktopJob index="01" role="Frontend Engineer" detail="Product · Hybrid" first />
        <DesktopJob index="02" role="UI Developer" detail="Platform · Remote" />
        <DesktopJob index="03" role="Software Engineer" detail="Commerce · On-site" />
      </div>
      <div className="flex flex-col items-center justify-between bg-[var(--accent)] p-[clamp(0.6rem,1.4vw,1.4rem)] text-[var(--inverse)]">
        <span className="font-mono text-[clamp(0.35rem,0.55vw,0.55rem)] [writing-mode:vertical-rl]">ACTIVE ROLES</span>
        <strong className="font-display text-[clamp(1.2rem,3vw,3rem)] [writing-mode:vertical-rl]">128</strong>
      </div>
    </div>
  );
}

function DesktopJob({ index, role, detail, first = false }: { index: string; role: string; detail: string; first?: boolean }) {
  return (
    <div className={`grid grid-cols-[auto_1fr_auto] items-center gap-[0.85rem] border-t border-[var(--rule)] py-[clamp(0.55rem,1vw,0.85rem)] ${first ? "mt-auto" : ""}`}>
      <i className="font-mono text-[clamp(0.38rem,0.6vw,0.58rem)] not-italic">{index}</i>
      <span className="flex flex-col"><b className="text-[clamp(0.52rem,0.9vw,0.85rem)]">{role}</b><small className="font-mono text-[clamp(0.38rem,0.6vw,0.58rem)] text-[var(--muted)]">{detail}</small></span>
      <em>→</em>
    </div>
  );
}

function SchoolVisual() {
  return (
    <div className={`${desktopVisualClass} p-[clamp(1rem,2.3vw,2.25rem)] max-[34rem]:p-3`}>
      <div className="flex items-start justify-between">
        <div><span className={desktopKickerClass}>Monday, 08:30</span><strong className={desktopTitleClass}>Good morning, Admin.</strong></div>
        <b className="bg-[var(--accent)] p-[0.45rem] font-display text-[clamp(0.55rem,1vw,0.9rem)] text-[var(--inverse)]">HS</b>
      </div>
      <div className="mt-[clamp(1rem,2.5vw,2.5rem)] grid grid-cols-3 gap-[clamp(0.45rem,1vw,0.9rem)]">
        <DesktopMetric label="STUDENTS" value="1,248" detail="+18 this term" />
        <DesktopMetric label="ATTENDANCE" value="94.8%" detail="Today" />
        <DesktopMetric label="CLASSES" value="42" detail="In progress" />
      </div>
      <div className="mt-[clamp(1rem,2vw,2rem)] border-t border-[var(--foreground)] font-mono text-[clamp(0.35rem,0.55vw,0.55rem)] [&>div]:grid [&>div]:grid-cols-[1fr_1fr_0.75fr] [&>div]:gap-2 [&>div]:border-b [&>div]:border-[var(--rule)] [&>div]:py-[clamp(0.45rem,1vw,0.8rem)] [&_em]:font-bold [&_em]:text-[var(--accent)] [&_em]:not-italic">
        <div><b>Class</b><b>Teacher</b><b>Status</b></div>
        <div><span>Year 8 / A</span><span>Ms. Hla</span><em>IN CLASS</em></div>
        <div><span>Year 10 / C</span><span>Mr. Lin</span><em>IN CLASS</em></div>
      </div>
    </div>
  );
}

function DesktopMetric({ label, value, detail }: { label: string; value: string; detail: string }) {
  return (
    <div className="flex min-w-0 flex-col border border-[var(--foreground)] p-[clamp(0.55rem,1.2vw,1rem)]">
      <span className="font-mono text-[clamp(0.35rem,0.55vw,0.55rem)]">{label}</span>
      <strong className="mt-[clamp(0.5rem,1.2vw,1rem)] text-[clamp(0.7rem,1.7vw,1.6rem)]">{value}</strong>
      <small className="font-mono text-[clamp(0.35rem,0.55vw,0.55rem)] text-[var(--muted)]">{detail}</small>
    </div>
  );
}

function DesktopScreen({ slug }: { slug: ProjectSlug }) {
  if (slug === "orderflow") return <OrderFlowVisual />;
  if (slug === "unifind") return <UniFindVisual />;
  if (slug === "jack-in-sg") return <JackVisual />;
  return <SchoolVisual />;
}

function MobileStatusBar() {
  return (
    <div className="absolute top-0 left-0 z-[3] flex h-[8.5%] w-full items-center justify-between px-[clamp(0.35rem,0.8vw,0.65rem)] font-mono text-[clamp(0.3rem,0.5vw,0.48rem)] font-bold">
      <span>9:41</span>
      <div className="flex items-center gap-[0.2rem] [&_svg]:w-[clamp(0.45rem,0.85vw,0.75rem)] [&_svg]:fill-none [&_svg]:stroke-current [&_svg]:stroke-[1.2]">
        <svg viewBox="0 0 16 12"><path d="M1 4.5C4.9.7 11.1.7 15 4.5M3.7 7.1c2.4-2.2 6.2-2.2 8.6 0M6.5 9.6c.9-.8 2.1-.8 3 0" /></svg>
        <svg viewBox="0 0 18 10"><rect x=".75" y=".75" width="14" height="8.5" rx="1.5" /><path d="M16 3.2h1.2v3.6H16M2.3 2.3h10.8v5.4H2.3z" /></svg>
      </div>
    </div>
  );
}

function OrderFlowMobile() {
  return (
    <div className={mobileAppClass}>
      <span className={mobileEyebrowClass}>Table 12 · Dinner</span>
      <strong>Popular tonight</strong>
      <MobileFoodCard name="Smoked basil" detail="Spicy · ฿180" />
      <MobileFoodCard name="Crispy tofu" detail="Plant-based · ฿160" />
      <div className="mt-1 flex justify-between bg-[var(--accent)] p-[0.45rem] text-[var(--inverse)]"><span>3 items</span><b>View order · ฿430</b></div>
    </div>
  );
}

function MobileFoodCard({ name, detail }: { name: string; detail: string }) {
  return (
    <div className="grid grid-cols-[22%_1fr_auto] items-center gap-[0.35rem] border-t border-[var(--rule)] py-[0.38rem]">
      <i className="aspect-square bg-[var(--accent)]" />
      <span className="flex flex-col"><b>{name}</b><small className="text-[0.82em] text-[var(--muted)]">{detail}</small></span>
      <em className="grid aspect-square w-[1.2rem] place-content-center bg-[var(--foreground)] text-[var(--inverse)] not-italic">+</em>
    </div>
  );
}

function UniFindMobile() {
  return (
    <div className={`${mobileAppClass} [&>strong]:mt-3`}>
      <div className={mobileBrandClass}>UF<span>●</span></div>
      <strong>What did you lose?</strong>
      <div className="my-[0.7rem] flex justify-between border border-[var(--foreground)] p-[0.45rem] text-[var(--muted)]">Search campus <b>⌕</b></div>
      <div className="flex flex-1 flex-col bg-[var(--accent)] p-2 text-[var(--inverse)]">
        <span className="font-mono text-[0.7em]">FOUND · TODAY</span><i className="m-auto aspect-square w-[34%] border border-[var(--inverse)]" /><b className="text-[1.25em]">Student ID</b><small className="opacity-80">Central library</small>
      </div>
      <div className="flex justify-between pt-[0.45rem] font-mono uppercase">Possible match <b>92%</b></div>
    </div>
  );
}

function JackMobile() {
  return (
    <div className={`${mobileAppClass} bg-[var(--surface)] [&>strong]:mt-3`}>
      <div className={mobileBrandClass}>J/SG<span>128 roles</span></div>
      <span className={mobileEyebrowClass}>Singapore · All teams</span>
      <strong>Find work that fits.</strong>
      <MobileJob category="Product" role="Frontend Engineer" mode="Hybrid · Singapore" />
      <MobileJob category="Platform" role="UI Developer" mode="Remote · Singapore" />
      <div className="mt-auto flex justify-between border-t border-[var(--foreground)] pt-2 font-mono text-[0.78em] uppercase"><b className="text-[var(--accent)]">Discover</b><span>Saved</span><span>Applied</span></div>
    </div>
  );
}

function MobileJob({ category, role, mode }: { category: string; role: string; mode: string }) {
  return (
    <div className="relative flex flex-col border-t border-[var(--rule)] py-[0.45rem] [&>small]:text-[0.78em] [&>small]:text-[var(--muted)] [&>span]:text-[0.78em] [&>span]:text-[var(--muted)]">
      <span>{category}</span><b>{role}</b><small>{mode}</small><em className="absolute top-1/2 right-0 text-[var(--accent)] not-italic">→</em>
    </div>
  );
}

function SchoolMobile() {
  return (
    <div className={`${mobileAppClass} [&>strong]:mt-3`}>
      <div className={mobileBrandClass}>Monday<span>HS</span></div>
      <strong>Good morning, Admin.</strong>
      <div className="mt-[0.65rem] mb-auto flex flex-col bg-[var(--accent)] p-[0.65rem] text-[var(--inverse)]"><span>Attendance today</span><b className="my-[0.35rem] text-[clamp(1rem,2.4vw,2rem)] leading-none">94.8%</b><small className="opacity-80">1,183 students present</small></div>
      <span className={mobileEyebrowClass}>Classes now</span>
      <MobileClass name="Year 8 / A" />
      <MobileClass name="Year 10 / C" />
    </div>
  );
}

function MobileClass({ name }: { name: string }) {
  return <div className="flex justify-between border-t border-[var(--rule)] py-[0.4rem]"><b>{name}</b><span className="font-mono text-[0.75em] text-[var(--accent)] uppercase">In class</span></div>;
}

function MobileScreen({ slug }: { slug: ProjectSlug }) {
  if (slug === "orderflow") return <OrderFlowMobile />;
  if (slug === "unifind") return <UniFindMobile />;
  if (slug === "jack-in-sg") return <JackMobile />;
  return <SchoolMobile />;
}

export function ProjectVisual({ slug, title }: ProjectVisualProps) {
  return (
    <figure
      className="relative aspect-[1.35/1] overflow-hidden border border-[var(--foreground)] bg-[var(--surface)] max-[56rem]:aspect-[1.18/1]"
      role="img"
      aria-label={`Desktop and mobile interface concepts for ${title}`}
    >
      <div
        className="absolute inset-0 grid grid-cols-[minmax(0,3.8fr)_minmax(5rem,1fr)] items-center gap-[clamp(0.8rem,2.5vw,2.25rem)] p-[clamp(1.25rem,3.5vw,3.5rem)] [perspective:52rem]"
        aria-hidden="true"
      >
        <div className="relative aspect-[4/3] w-full border border-[var(--foreground)] bg-[var(--foreground)]" data-motion-device="desktop">
          <div className="grid h-[8.5%] min-h-[1.3rem] grid-cols-[1fr_3fr_1fr] items-center border-b border-[var(--foreground)] bg-[#d6d1c5] px-[clamp(0.35rem,1vw,0.8rem)] font-mono text-[clamp(0.32rem,0.55vw,0.52rem)] uppercase">
            <div className="flex gap-[clamp(0.18rem,0.45vw,0.35rem)] [&_i]:aspect-square [&_i]:w-[clamp(0.24rem,0.45vw,0.4rem)] [&_i]:rounded-full [&_i]:border [&_i]:border-current [&_i:first-child]:bg-[var(--accent)]"><i /><i /><i /></div>
            <span className="w-[min(100%,13rem)] justify-self-center overflow-hidden border border-[color-mix(in_srgb,var(--foreground)_45%,transparent)] px-2 py-[0.18rem] text-center text-ellipsis whitespace-nowrap">{slug.replaceAll("-", "")}.product</span>
            <b className="justify-self-end text-[1.2em]">+</b>
          </div>
          <div className="h-[91.5%] w-full overflow-hidden bg-[var(--surface)]"><DesktopScreen slug={slug} /></div>
          <span className="absolute -top-[1.15rem] left-0 font-mono text-[clamp(0.3rem,0.54vw,0.5rem)] font-bold tracking-[0.06em] whitespace-nowrap text-[var(--foreground)] uppercase">Desktop / 1440</span>
        </div>

        <div className="relative flex min-w-0 flex-col items-center self-end gap-[0.55rem]" data-motion-device="phone">
          <div className="relative aspect-[9/18.5] w-full origin-center [transform:rotateY(-28deg)_rotateX(12deg)] [transform-style:preserve-3d] before:absolute before:inset-0 before:rounded-[clamp(0.8rem,1.8vw,1.5rem)] before:border before:border-[var(--foreground)] before:bg-[var(--accent)] before:content-[''] before:[transform:translate(0.48rem,0.6rem)_translateZ(-1px)]">
            <div className="relative h-full w-full overflow-hidden rounded-[clamp(0.8rem,1.8vw,1.5rem)] border-[clamp(2px,0.35vw,4px)] border-[var(--foreground)] bg-[var(--surface)] [animation:phone-lift_3s_ease-in-out_infinite_alternate] [transform:translateZ(0.6rem)] [will-change:transform] motion-reduce:animate-none motion-reduce:[transform:translateZ(0.6rem)]">
              <div className="absolute top-[clamp(0.28rem,0.65vw,0.55rem)] left-1/2 z-[4] h-[clamp(0.18rem,0.32vw,0.3rem)] w-[29%] -translate-x-1/2 rounded-full bg-[var(--foreground)]" />
              <MobileStatusBar />
              <div className="absolute inset-x-0 top-[8.5%] bottom-0 overflow-hidden"><MobileScreen slug={slug} /></div>
              <div className="absolute bottom-[clamp(0.22rem,0.45vw,0.4rem)] left-1/2 z-[4] h-0.5 w-[34%] -translate-x-1/2 bg-[var(--foreground)]" />
            </div>
          </div>
          <span className="self-end font-mono text-[clamp(0.3rem,0.54vw,0.5rem)] font-bold tracking-[0.06em] whitespace-nowrap text-[var(--foreground)] uppercase">Mobile / 390</span>
        </div>
      </div>
    </figure>
  );
}
