# Thaw Zin — Portfolio

A personal portfolio for Thaw Zin, a frontend developer based in Thailand. The site presents selected product work, professional experience, technical capabilities, testimonials, and contact details in a responsive editorial layout.

## Built with

- [Next.js 16](https://nextjs.org/) App Router
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Motion](https://motion.dev/) for scroll and interface animation
- `next/image` and `next/font` for optimized media and typography

## Getting started

Requirements:

- Node.js 20 or later
- npm

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available commands

```bash
npm run dev     # Start the local development server
npm run build   # Create a production build
npm run start   # Serve the production build
npm run lint    # Run ESLint
```

## Project structure

```text
app/
├── _components/       # Page sections and shared portfolio UI
├── globals.css        # Theme tokens, global styles, and motion rules
├── layout.tsx         # Fonts, metadata, and root document
├── page.tsx           # Homepage composition
├── portfolio-data.ts  # Projects, experience, testimonials, and skills
├── project-visual.tsx # Desktop and mobile project presentations
└── scroll-motion.tsx  # Scroll-based animation behavior

public/images/
├── avatar.jpeg
└── projects/          # Project screenshots used in Selected Works
```

## Updating the portfolio

Most portfolio content lives in [`app/portfolio-data.ts`](app/portfolio-data.ts). Update that file to add or edit projects, experience, testimonials, capabilities, and technology groups.

Project screenshots belong in `public/images/projects`. Each project has a `visual.kind` of either `desktop` or `mobile`; the selected kind controls how the screenshot is presented by `app/project-visual.tsx`.

The main page copy is split across the components in `app/_components`. Site metadata is configured in `app/layout.tsx`, while colors, spacing, and global presentation tokens are defined in `app/globals.css`.

## Quality checks

Before shipping changes, run:

```bash
npm run lint
npm run build
```

## Contact

- Email: [thawzzin.dev@gmail.com](mailto:thawzzin.dev@gmail.com)
- GitHub: [thawzzin](https://github.com/thawzzin)
- LinkedIn: [Thaw Zin](https://www.linkedin.com/in/thaw-zin-876380253)
