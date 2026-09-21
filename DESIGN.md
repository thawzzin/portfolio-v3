---
version: alpha
name: "Thaw Zin Portfolio"
description: "An editorial brutalist portfolio built around a deep-navy working edge and product-focused project stories."
colors:
  background: "#F1F4F6"
  surface: "#F8FAFB"
  surface-strong: "#D3DDE4"
  foreground: "#0D1B2A"
  muted: "#536475"
  rule: "#AAB7C2"
  primary: "#274C67"
  primary-hover: "#356F95"
  inverse: "#F8FAFC"
  inverse-muted: "#C1CCD5"
  inverse-rule: "#405263"
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

- **Audience and primary job:** Recruiters, clients, and collaborators need to understand Thaw Zin's full-stack role, product experience, technical range, and availability quickly.
- **Target market and evidence:** International English-speaking web roles; the portfolio content and supplied brief are English-first.
- **Locale and language policy:** English only for this release.
- **Usage scene:** Quick review on laptop or mobile, followed by deeper project scanning on larger screens.
- **Register:** Brand/editorial marketing site.
- **Memorable signature:** A deep-navy “working edge” carries factual metadata and the curated order of selected work; each project pairs desktop and mobile interface concepts in a precise side-by-side device plate.
- **Restraint:** Navy and steel-blue contrast is concentrated in structural elements, project numbering is meaningful, and decorative elements never compete with the work.
- **Anti-references:** No SaaS navigation, fake terminal, sticker collage, rounded card grid, gradient blob, acid-yellow brutalism, or arbitrary rotation.
- **Token ownership/runtime mapping:** `app/globals.css` is the canonical runtime source. This file mirrors its accepted values and rationale. `colors.primary` maps to the runtime `--accent` variable; other color names map one-to-one. CSS custom properties feed Tailwind utilities directly; component layout and presentation live in JSX `className` values, while CSS is reserved for document-wide behavior and keyframes.

## Colors

Cool paper white is the primary reading surface, `#0D1B2A` carries the strongest hierarchy and dark sections, and muted steel blue marks the working edge, selection, focus, and limited emphasis. Blue-gray tones separate metadata, rules, and secondary surfaces without competing with the work. The site is intentionally light-only; forced-colors mode returns scrollbar and focus control to the platform.

## Typography

Archivo Black is reserved for the name, project titles, and the contact climax. Instrument Sans carries body copy, navigation, and headings. Monospace appears only in dates, labels, project order, and stack metadata. Display type uses compact leading and restrained negative tracking; body measure stays below 68 characters.

## Layout

Desktop layouts use a twelve-column grid inside a `112rem` maximum canvas. The deep-navy working edge occupies a narrow factual column rather than floating as decoration. The opening hero fits its complete name, portrait, introduction, CTA, and capability index inside the available small viewport at desktop widths, while short screens may grow rather than clip content. Project layouts alternate only to improve pacing. Below `56rem`, compositions become purpose-built single-column spreads, with metadata promoted above supporting copy. Anchor targets reserve space for the sticky header.

## Elevation & Depth

Hierarchy comes from rules, solid color fields, whitespace, and typography. Static surfaces have no soft shadows. Any offset is a physical one- or two-pixel translation on an interactive link, never simulated depth on content.

## Shapes

Containers and controls use square corners. The only permitted radius is `2px` for small status indicators where a fully square mark would read as an accidental rendering artifact. Dividers are one-pixel solid rules.

## Components

### Foundational visual states

Links visibly underline or shift between navy and steel blue on hover and active states. Keyboard focus uses a two-pixel steel-blue outline with a three-pixel offset. Disabled and busy states are not currently needed. Project visuals reserve a stable aspect ratio at every viewport.

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

Copy is direct, specific, and conversational. The personal portrait keeps its natural color against the cool, restrained palette. Code-native project visuals summarize real product workflows without presenting fabricated screenshots or metrics. Selected-work visuals use a square desktop browser plate and a compact mobile frame with a clear three-quarter perspective, a steel-blue offset layer, and restrained vertical motion. Both remain fully visible in a shared, neutral presentation field; neither device overlaps the other.

Testimonials use a manually controlled editorial carousel with visible attribution, position count, numbered slide controls, and previous/next buttons. There is no auto-rotation; keyboard arrows and reduced-motion preferences remain safe by default. When portrait assets are unavailable, compact initial blocks preserve layout stability without presenting invented imagery.

## Do's and Don'ts

- **Do:** Use the deep-navy edge only for real metadata or structural emphasis.
- **Do:** Preserve generous whitespace and strong typographic contrast.
- **Don't:** turn sections into interchangeable bordered cards.
- **Don't:** add decorative labels, rotations, stickers, or animations without informational purpose.
