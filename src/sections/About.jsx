import { motion } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Rocket,
  Cloud,
  Github,
  Linkedin,
  Wrench,
  LayoutDashboard,
  Server,
  Database,
  ShieldCheck,
  MailIcon,
} from "lucide-react";
import { NAME, ROLE } from "../data";
import { Highlighter } from "../components/ui/Highliter";
import { GlobeDemo } from "../components/ui/GlobeDemo";
import Section from "../components/Section";

export default function About({
  location = "Remote / India",
  availability = "Open to freelance",
  projects = "8+",
  years = "1+",
  github = "https://github.com/your",
  linkedin = "https://linkedin.com/in/your",
  email = "mhasan4368@email.com",
  avatarUrl = "/public/images/hero-img.jpg",
  onContact,       // can be a function or a URL string
  onDownloadCV,    // can be a function or a URL string
}) {

  // Services grid
  const services = [
    {
      title: "Landing pages & sites",
      text: "Fast marketing pages with clean design and solid SEO basics.",
      icon: <Rocket className="size-4" />,
    },
    {
      title: "Dashboards & admin UIs",
      text: "Usable data views, filters, and CRUD flows that scale.",
      icon: <LayoutDashboard className="size-4" />,
    },
    {
      title: "APIs & integrations",
      text: "Node/Express services with auth, validation, and logging.",
      icon: <Server className="size-4" />,
    },
    {
      title: "Data & persistence",
      text: "PostgreSQL/Mongo schemas, migrations, and query tuning.",
      icon: <Database className="size-4" />,
    },
    {
      title: "Deployments (AWS)",
      text: "Hosting, storage, environment configs, and basic CI/CD.",
      icon: <Cloud className="size-4" />,
    },
    {
      title: "Performance & a11y",
      text: "Core Web Vitals, accessible components, and testing.",
      icon: <ShieldCheck className="size-4" />,
    },
  ];

  return (
    <>
      <Section id="about" className="relative isolate pt-0 md:pt-28">
        {/* soft gradient backdrop */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-80 "
        />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-3xl border border-zinc-200/70 bg-white/70 p-8 shadow-sm backdrop-blur-md dark:border-zinc-800/60 dark:bg-zinc-950/60"
          >
            {/* Top: identity + redesigned profile card */}
            <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              {/* Identity */}
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
                  <Sparkles className="size-3.5" />
                  About
                </p>

                
                <h1 className="mt-2 text-xl md:3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
                Hi, I’m {" "}
                <Highlighter action="underline" color="#5b2bbc">{NAME}</Highlighter>
                  . I build end‑to‑end products as a {ROLE || "Full‑Stack Developer"}.
                </h1>

                <p className="mt-4 max-w-2xl text-pretty text-zinc-600 dark:text-zinc-300">
                  BCA graduate shipping fast, accessible front‑ends with React and robust
                  back‑ends with Node/Express and clean databases. I turn ideas into working
                  products with clear scope, reusable components, pragmatic APIs, and steady
                  iteration—deploying with foundational AWS where needed.
                </p>

                {/* Quick facts */}
                <div className="mt-4 inline-flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-50 px-2.5 py-1 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                    <MapPin className="size-3.5 text-zinc-500" />
                    {location}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600/10 px-2.5 py-1 text-emerald-700 ring-1 ring-emerald-600/20 dark:text-emerald-400">
                    ● {availability}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-50 px-2.5 py-1 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                    {projects} projects
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-50 px-2.5 py-1 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-800">
                    {years} years
                  </span>
                </div>

                {/* CTAs */}
                {/* <div className="mt-6 flex flex-wrap gap-3">
                  <button
                    onClick={handleContact}
                    className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                  >
                    Let’s collaborate
                    <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                  </button>
                  <button
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-900/70"
                  >
                    Download CV
                  </button>
                </div> */}
              </div>

              {/* Profile-like card (replaces previous "How I work" card) */}
              <div className="shrink-0 w-full max-w-sm">
               <GlobeDemo/>
              </div>
            </div>

            {/* Services */}
            <div className="mt-10">
              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                <Wrench className="size-3.5" />
                Services
              </div>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-xl border border-zinc-200/70 bg-white p-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950 dark:text-zinc-300"
                  >
                    <div className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400">
                      <span className="inline-flex size-6 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
                        {s.icon}
                      </span>
                      <span className="font-medium text-zinc-900 dark:text-zinc-50">
                        {s.title}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      {s.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
      </Section>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-zinc-200/70 bg-zinc-50 px-3 py-1.5 text-center dark:border-zinc-800/60 dark:bg-zinc-900">
      <p className="text-[10px] uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-50">{value}</p>
    </div>
  );
}



