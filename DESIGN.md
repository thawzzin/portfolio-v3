---
version: alpha
name: "Thaw Zin Portfolio"
description: "An editorial brutalist portfolio built around a cobalt working edge and product-focused project stories."
colors:
  background: "#F2F0E9"
  surface: "#F8F6EF"
  foreground: "#151515"
  muted: "#68665F"
  rule: "#B8B4AA"
  primary: "#2457D6"
  inverse: "#F8F6EF"
typography:
  display:
    fontFamily: "Archivo Black, Arial Black, sans-serif"
  sans:
    fontFamily: "Instrument Sans, Arial, sans-serif"
  mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
rounded:
  DEFAULT: "0px"
  small: "2px"
spacing:
  page-gutter: "clamp(1rem, 3vw, 3rem)"
  section-gap: "clamp(5rem, 11vw, 10rem)"
  content-max: "112rem"
components:
  navigation:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
  working-edge:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.inverse}"
  project-showcase:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
  metadata:
    textColor: "{colors.muted}"
  divider:
    backgroundColor: "{colors.rule}"
  text-link:
    textColor: "{colors.foreground}"
---

# Thaw Zin Portfolio Design System

## Overview

### Creative North Star

The portfolio should feel like a carefully typeset product field guide: a Swiss editorial grid with the directness of contemporary web brutalism. It is a brand surface for recruiters, clients, and product teams evaluating Thaw Zin's judgment as much as his implementation skill.

### Product context and register

- **Audience and primary job:** Recruiters, clients, and collaborators need to understand Thaw Zin's role, product experience, technical range, and availability quickly.
- **Target market and evidence:** International English-speaking web roles; the portfolio content and supplied brief are English-first.
- **Locale and language policy:** English only for this release.
- **Usage scene:** Quick review on laptop or mobile, followed by deeper project scanning on larger screens.
- **Register:** Brand/editorial marketing site.
- **Memorable signature:** A cobalt “working edge” carries factual metadata and the curated order of selected work; each project pairs desktop and mobile interface concepts in a precise side-by-side device plate.
- **Restraint:** Cobalt is sparse, project numbering is meaningful, and decorative elements never compete with the work.
- **Anti-references:** No SaaS navigation, fake terminal, sticker collage, rounded card grid, gradient blob, acid-yellow brutalism, or arbitrary rotation.
- **Token ownership/runtime mapping:** `app/globals.css` is the canonical runtime source. This file mirrors its accepted values and rationale. `colors.primary` maps to the runtime `--accent` variable; other color names map one-to-one. CSS custom properties feed Tailwind utilities directly; component layout and presentation live in JSX `className` values, while CSS is reserved for document-wide behavior and keyframes.

## Colors

Bone is the primary reading surface, ink carries almost all hierarchy, and muted ink supports metadata. Cobalt is expressive rather than semantic: it marks the working edge, selection, focus, and limited emphasis. Near-black owns the final contact section. The site is intentionally light-only; forced-colors mode returns scrollbar and focus control to the platform.

## Typography

Archivo Black is reserved for the name, project titles, and the contact climax. Instrument Sans carries body copy, navigation, and headings. Monospace appears only in dates, labels, project order, and stack metadata. Display type uses compact leading and restrained negative tracking; body measure stays below 68 characters.

## Layout

Desktop layouts use a twelve-column grid inside a `112rem` maximum canvas. The cobalt working edge occupies a narrow factual column rather than floating as decoration. Project layouts alternate only to improve pacing. Below `56rem`, compositions become purpose-built single-column spreads, with metadata promoted above supporting copy. Anchor targets reserve space for the sticky header.

## Elevation & Depth

Hierarchy comes from rules, solid color fields, whitespace, and typography. Static surfaces have no soft shadows. Any offset is a physical one- or two-pixel translation on an interactive link, never simulated depth on content.

## Shapes

Containers and controls use square corners. The only permitted radius is `2px` for small status indicators where a fully square mark would read as an accidental rendering artifact. Dividers are one-pixel solid rules.

## Components

### Foundational visual states

Links visibly underline or change field color on hover and active states. Keyboard focus uses a two-pixel cobalt outline with a three-pixel offset. Disabled and busy states are not currently needed. Project visuals reserve a stable aspect ratio at every viewport.

### Buttons and actions

The site has text links rather than button-shaped calls to action. Contact and social destinations use explicit anchors; unavailable case studies are plain status text with no pointer treatment.

### Navigation and data display

Navigation is a compact sticky rule with in-page anchors. Employment and technology information use ledgers and directories rather than cards or badges. Project order `01–04` communicates the curated reading sequence.

### Forms and overlays

There are no forms, dialogs, overlays, or asynchronous product states in this release.

### Iconography

Only simple inline arrow SVGs are used. They inherit the current text color and always accompany a text label.

### Motion

Motion is quick and physical: underline growth, one-pixel translation, and one-time scroll sequences powered by Motion. Section headings assemble in short cascades; project rails, media, device frames, copy, and metadata arrive with distinct but coordinated movement. `prefers-reduced-motion` removes scrolling, reveal, depth, and floating animation.

### Content and data visualization

Copy is direct, specific, and conversational. Code-native project visuals summarize real product workflows without presenting fabricated screenshots or metrics. Selected-work visuals use a square desktop browser plate and a compact mobile frame with a clear three-quarter perspective, a cobalt offset layer, and restrained vertical motion. Both remain fully visible in a shared, neutral presentation field; neither device overlaps the other.

Testimonials use an editorial three-column quote ledger with visible attribution. When portrait assets are unavailable, compact initial blocks preserve layout stability without presenting invented imagery.

## Do's and Don'ts

- **Do:** Use the cobalt edge only for real metadata or structural emphasis.
- **Do:** Preserve generous whitespace and strong typographic contrast.
- **Don't:** turn sections into interchangeable bordered cards.
- **Don't:** add decorative labels, rotations, stickers, or animations without informational purpose.
