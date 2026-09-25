---
version: alpha
name: "Thaw Zin Portfolio"
description: "An editorial brutalist frontend developer portfolio built around a cobalt working edge and product-focused project stories."
colors:
  background: "#F2F1ED"
  surface: "#FFFEFA"
  surface-strong: "#D8D7D2"
  foreground: "#111111"
  muted: "#62615C"
  rule: "#111111"
  primary: "#2447E5"
  primary-hover: "#1838C5"
  orderflow-accent: "#F5810C"
  on-primary: "#FFFFFF"
  inverse: "#FFFFFF"
  inverse-muted: "#D8D7D2"
  inverse-rule: "#555550"
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

- **Audience and primary job:** Recruiters, clients, and collaborators need to understand Thaw Zin's frontend specialization, product experience, technical range, and availability quickly.
- **Target market and evidence:** International English-speaking web roles; the portfolio content and supplied brief are English-first.
- **Locale and language policy:** English only for this release.
- **Usage scene:** Quick review on laptop or mobile, followed by deeper project scanning on larger screens.
- **Register:** Brand/editorial marketing site.
- **Memorable signature:** A cobalt “working edge” carries the curated order of selected work; projects appear as a compact two-column index of image-first, numbered portfolio cards.
- **Restraint:** Cobalt is concentrated in structural elements, project numbering is meaningful, and decorative elements never compete with the work.
- **Anti-references:** No SaaS navigation, fake terminal, sticker collage, rounded card grid, gradient blob, acid-yellow brutalism, or arbitrary card rotation.
- **Token ownership/runtime mapping:** `app/globals.css` is the canonical runtime source. This file mirrors its accepted values and rationale. `colors.primary` maps to the runtime `--accent` variable and `colors.orderflow-accent` maps to `--orderflow-accent`; other color names map one-to-one. CSS custom properties feed Tailwind utilities directly; component layout and presentation live in JSX `className` values, while CSS is reserved for document-wide behavior and keyframes.

## Colors

Warm off-white `#F2F1ED` is the primary reading surface, `#111111` carries the strongest hierarchy and dark sections, and cobalt `#2447E5` marks the working edge, selection, focus, and limited emphasis. OrderFlow orange `#F5810C` is reserved for the OrderFlow Client showcase stage so the cover relates to the shipped product. Muted gray `#D8D7D2` defines secondary surfaces while near-black borders keep the editorial grid crisp. White is used for text on cobalt and dark sections. The site is intentionally light-only; forced-colors mode returns scrollbar and focus control to the platform.

## Typography

Archivo Black is reserved for the name, project titles, and the contact climax. Instrument Sans carries body copy, navigation, and headings. Monospace appears only in dates, labels, project order, and stack metadata. Display type uses compact leading and restrained negative tracking; body measure stays below 68 characters.

## Layout

Desktop layouts use a twelve-column grid inside a `112rem` maximum canvas. The cobalt working edge occupies a narrow factual column rather than floating as decoration. The opening hero fits its complete name, portrait, introduction, CTA, and capability index inside the available small viewport at desktop widths, while short screens may grow rather than clip content. Projects use a compact two-column gallery with equal card widths, close gutters, and image-first hierarchy; below `46rem`, the gallery becomes one column. Anchor targets reserve space for the sticky header.

## Elevation & Depth

Hierarchy comes from rules, solid color fields, whitespace, and typography. Static surfaces have no soft shadows. Project cards use one deliberate three-pixel hard ink offset taken from the supplied portfolio reference; other offsets remain physical one- or two-pixel translations on interactive links.

## Shapes

Containers and controls use square corners. The only permitted radius is `2px` for small status indicators where a fully square mark would read as an accidental rendering artifact. A realistic mobile-device shell is the sole large-radius exception. Dividers are one-pixel solid rules.

## Components

### Foundational visual states

Links visibly underline or shift between near-black and cobalt on hover and active states. Keyboard focus uses a two-pixel cobalt outline with a three-pixel offset. Disabled and busy states are not currently needed. Project visuals reserve a stable aspect ratio at every viewport.

### Buttons and actions

The site has text links rather than button-shaped calls to action. Contact and social destinations use explicit anchors; unavailable case studies are plain status text with no pointer treatment.

### Navigation and data display

Navigation is a compact sticky rule with in-page anchors. Employment and technology information use ledgers and directories rather than cards or badges. Project numbering communicates the curated reading sequence and reflects the current project count.

### Forms and overlays

There are no forms, dialogs, overlays, or asynchronous product states in this release.

### Iconography

Only simple inline arrow SVGs are used. They inherit the current text color and always accompany a text label.

### Motion

Motion is quick and physical: underline growth, one-pixel translation, and one-time scroll sequences powered by Motion. Section headings assemble in short cascades; project headers, screenshots, and metadata arrive with distinct but coordinated movement. The mobile-only OrderFlow Client cover uses one restrained floating-device loop. `prefers-reduced-motion` removes scrolling, reveal, and floating animation.

### Content and data visualization

Copy is direct, specific, and conversational. The personal portrait keeps its natural color against the warm off-white and cobalt palette. Real project screenshots present the shipped interfaces without fabricated screens or metrics. Desktop projects fill their stable widescreen cover with one desktop screenshot. OrderFlow Client is the deliberate exception: its untouched mobile screenshot sits in a thin, front-facing iPhone-style shell with a restrained Dynamic Island. The creativity belongs to the showcase stage behind it—an OrderFlow-orange ordering field, paper-colored target rings, and white workflow labels for menu, cart, and status. Titles and factual role and stack metadata sit directly below the preview.

Testimonials use a manually controlled editorial carousel with visible attribution, position count, numbered slide controls, and previous/next buttons. There is no auto-rotation; keyboard arrows and reduced-motion preferences remain safe by default. When portrait assets are unavailable, compact initial blocks preserve layout stability without presenting invented imagery.

## Do's and Don'ts

- **Do:** Use the cobalt edge only for real metadata or structural emphasis.
- **Do:** Preserve generous whitespace and strong typographic contrast.
- **Don't:** use bordered cards outside the intentionally compact project index.
- **Don't:** add decorative labels, rotations, stickers, or animations without informational purpose.
