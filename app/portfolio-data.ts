export type Project = {
  number: string;
  slug: "orderflow" | "unifind" | "jack-in-sg" | "school";
  title: string;
  type: string;
  role: string;
  description: string;
  stack: readonly string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
};

export const projects: readonly Project[] = [
  {
    number: "01",
    slug: "orderflow",
    title: "OrderFlow",
    type: "Restaurant platform",
    role: "Full-stack Developer",
    description:
      "A QR ordering system that takes customers from menu to live order tracking, with restaurant tools for menus, fulfilment, and performance.",
    stack: ["React", "TanStack", "TypeScript", "PostgreSQL"],
  },
  {
    number: "02",
    slug: "unifind",
    title: "UniFind",
    type: "University platform",
    role: "Full-stack Developer",
    description:
      "A campus lost-and-found product for reporting items, searching listings, and managing claims without turning a simple task into paperwork.",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "Node.js",
      "PostgreSQL",
    ],
  },
  {
    number: "03",
    slug: "jack-in-sg",
    title: "Jack in SG",
    type: "Recruitment product",
    role: "Frontend Developer",
    description:
      "A job platform covering role discovery, application flows, and the administrative work behind keeping listings and candidates moving.",
    stack: ["React", "TypeScript", "Tailwind CSS", "API Integration"],
  },
  {
    number: "04",
    slug: "school",
    title: "School Management System",
    type: "Operations dashboard",
    role: "Frontend Developer",
    description:
      "A dashboard-led system that brings school workflows, student records, scheduling, and day-to-day administration into one clear workspace.",
    stack: ["Next.js", "TypeScript", "shadcn/ui", "Tailwind CSS", "Zustand"],
  },
] as const;

export const experiences: readonly Experience[] = [
  {
    company: "Hysan Education",
    role: "Frontend Developer",
    period: "Jan — Nov 2025",
  },
  {
    company: "Blue Planet Co., Ltd",
    role: "Software Engineer",
    period: "Jul 2023 — May 2024",
  },
  {
    company: "Hexcode Technologies",
    role: "Frontend Developer, Internship",
    period: "Mar — Apr 2023",
  },
] as const;

export const capabilities = [
  "Frontend development",
  "UI implementation",
  "Responsive web design",
  "Design systems",
  "Dashboard interfaces",
  "API integration",
  "Authentication flows",
  "Performance optimization",
  "Full-stack collaboration",
] as const;

export const stackGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "TanStack Query",
      "TanStack Router",
      "Zustand",
      "Redux",
    ],
  },
  {
    label: "Backend / Data",
    items: ["Node.js", "Express", "PostgreSQL", "Prisma"],
  },
  {
    label: "Tools",
    items: ["Git", "GitHub", "Figma"],
  },
] as const;
