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

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
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

export const testimonials: readonly Testimonial[] = [
  {
    quote:
      "I had the pleasure of working with Thaw Zin at Blue Planet Co., Ltd on several IT projects. As a Frontend Developer, he consistently impressed me with his creativity, strategic thinking, and ability to lead cross-functional teams. He brought energy to every project and was always ready to support his teammates. I highly recommend Thaw Zin to any team looking for a dedicated and innovative professional.",
    name: "Eaint Thayaphy Oo",
    designation: "Project Coordinator",
    src: "/images/avatar3.png",
  },
  {
    quote:
      "Working with Thaw Zin has been a great experience, as he brings a high level of commitment to everything he does. He's incredibly reliable when it comes to frontend development, consistently delivering quality work on time. As a team player, he’s always ready to lend a hand and collaborate to solve problems. His attention to detail and ability to adapt quickly make him a valuable asset to any project. I believe Thaw Zin's strong work ethic and positive attitude contribute significantly to the success of our team.",
    name: "Ent Bhone Myint Mo",
    designation: "Senior Software Engineer",
    src: "/images/avatar2.png",
  },
  {
    quote:
      "I had the pleasure of working closely with Thaw Zin for nearly a year, and during that time, I was consistently impressed by his exceptional frontend development skills. His ability to turn complex ideas into intuitive designs is remarkable. His contributions always added significant value, and I often found myself learning new techniques and best practices from him. Thaw Zin's dedication to his work, combined with his technical expertise and teamwork, makes him an asset to any team. I highly recommend him for any role that requires a skilled and reliable frontend developer.",
    name: "Shine Htet Naing",
    designation: "Frontend Developer",
    src: "/images/avatar1.png",
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
      "TanStack Start",
      "Zustand",
      "Redux",
    ],
  },
  {
    label: "Backend / Data",
    items: [
      "Node.js",
      "Express",
      "Nestjs",
      "PostgreSQL",
      "MySql",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    label: "Tools",
    items: ["Git", "AWS"],
  },
] as const;
