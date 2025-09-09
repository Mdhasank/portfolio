export const NAME = "Mohd Hasan Khan";
export const TAGLINE = "Crafting scalable applications with modern design and interactive experiences.";
export const ROLE = 
  "Fullstack Developer";


import { Github, Linkedin, Mail } from "lucide-react";
export const SOCIALS = [
  { href: "https://github.com/", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/", label: "LinkedIn", Icon: Linkedin },
  { href: "mailto:hello@example.com", label: "Email", Icon: Mail },
];

export const SKILLS = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Bootstrap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "WordPress", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "Visual Studio Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Vite.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Express.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
];


export const PROJECT_TAGS = ["All", "Frontend", "Fullstack", "Backend", "UI/UX"];

export const PROJECTS = [
  {
    title: "Neon Commerce",
    desc: "Headless e-commerce starter with Stripe, Next API, and stunning product pages.",
    tags: ["Fullstack"],
    links: { demo: "#", code: "#" },
    image: null,
  },
  {
    title: "Glasmorphism Dashboard",
    desc: "Realtime admin dashboard with charts, WebSocket feed, and theme sync.",
    tags: ["Frontend"],
    links: { demo: "#", code: "#" },
    image: null,
  },
  {
    title: "Devfolio CMS",
    desc: "Markdown-powered portfolio/blog engine with OG image automation.",
    tags: ["Fullstack", "UI/UX"],
    links: { demo: "#", code: "#" },
    image: null,
  },
  {
    title: "API Forge",
    desc: "Scalable Express + Mongo template with role-based auth and testing.",
    tags: ["Backend"],
    links: { demo: "#", code: "#" },
    image: null,
  },
];

export const EXPERIENCE = [
  {
    role: "Freelance Full‑Stack Developer",
    company: "Remote • India",
    period: "2025 — Present",
    points: [
      "Design and ship React + Tailwind interfaces with subtle Motion animations for smooth UX.",
      "Build Node/Express REST APIs with routing, validation, and JWT-based authentication.",
      "Set up AWS foundations (S3 static hosting, simple EC2 deploys, environment configs, CI basics).",
      "Collaborate via GitHub with scoped issues, PR reviews, and versioned releases.",
    ],
  },
  {
    role: "DealsHub Marketplace (Case Study)",
    company: "Personal Project",
    period: "2025",
    points: [
      "Productized listing flow (cars, homes, jobs/services) with search, filters, and role-based UI.",
      "Implemented modular UI components and a clean design system to speed iteration.",
      "Structured API and data models to enable future payments and verification workflows.",
      "Deployed a demo build with environment separation for safe iteration.",
    ],
  },
  {
    role: "Portfolio Platform",
    company: "Personal Project",
    period: "2025",
    points: [
      "Built a fast React 19 + Vite portfolio with SEO-friendly meta, social previews, and clean routing.",
      "Implemented responsive sections (About, Skills, Projects, Experience) with layout-stable motion.",
      "Adopted reusable cards, chips, and grids for maintainable UI across pages.",
      "Automated build steps and preview deploys for rapid feedback.",
    ],
  },
  {
    role: "AWS Learning Labs",
    company: "Self‑Directed",
    period: "2025",
    points: [
      "Created a VPC in the Mumbai region with multiple subnets across AZs for isolation and availability.",
      "Practiced secure access patterns and basic networking (route tables, gateways, security groups).",
      "Deployed sample apps/static sites and documented repeatable steps for future projects.",
      "Captured architecture notes to inform future cost‑aware deployments.",
    ],
  },
  {
    role: "HTML5 Game — Tetris (JS)",
    company: "Personal Project",
    period: "2025",
    points: [
      "Implemented grid logic, piece rotation, line detection, and scoring with clean state updates.",
      "Optimized input handling and render loops for smooth play on desktop and mobile.",
      "Refactored modules for readability and incremental feature additions.",
      "Used Git for iterative changes and reproducible builds.",
    ],
  },
];


export const BLOG = [
  { title: "Why I moved to Vite + SWC", date: "2025-06-12", excerpt: "Blazing fast DX with modern tooling...", href: "#" },
  { title: "Designing with Motion: Micro-interactions", date: "2025-05-03", excerpt: "Elevate UX with subtle feedback...", href: "#" },
  { title: "SEO for SPAs with React Helmet", date: "2025-04-10", excerpt: "SPA doesn't mean ignoring SEO...", href: "#" },
];

export const TESTIMONIALS = [
  {
    name: "Ayesha R.",
    role: "Product Designer",
    quote: "Hasan crafts delightful interfaces that feel alive. A joy to collaborate with!",
  },
  {
    name: "Rohit K.",
    role: "Engineering Manager",
    quote: "He ships reliably with clean code and a user-first mindset.",
  },
  {
    name: "Sara M.",
    role: "Founder",
    quote: "Our MVP went from idea to launch in weeks thanks to his fullstack expertise.",
  },
];


