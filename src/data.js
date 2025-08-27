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
    company: "Intelli Market Solutions",
    role: "Frontend Developer Intern → Engineer",
    period: "2024 — 2025",
    points: [
      "Built responsive, high-performance UIs with React + Tailwind",
      "Improved Lighthouse score to 95+ via lazy loading & code splitting",
      "Led component refactor with accessibility-first design",
    ],
  },
  {
    company: "Freelance",
    role: "Fullstack Developer",
    period: "2023 — Present",
    points: [
      "Delivered MERN apps with CI/CD on Vercel/Netlify",
      "Designed interactive experiences with Framer Motion & Three.js",
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


