import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Filter,
  Search,
  X,
  Globe,
  Github,
  Tag,
  CalendarDays,
  FolderKanban,
  ArrowUpRight,
} from "lucide-react";
import Section from "../components/Section";

export default function Projects({
  title = "Projects",
  subtitle = "Selected work across interfaces, APIs, and deployments.",
  projects = [],
}) {
  // Derive categories dynamically from project data
  const categories = useMemo(() => {
    const set = new Set(["All"]);
    projects.forEach((p) => p?.category && set.add(p.category));
    return Array.from(set);
  }, [projects]);

  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects
      .filter((p) => (active === "All" ? true : p.category === active))
      .filter((p) => (q ? `${p.title} ${p.description} ${p.tags?.join(" ")}`.toLowerCase().includes(q) : true));
  }, [projects, active, query]);

  return (
    <Section id="projects">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            <Sparkles className="size-3.5" />
            {title}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Built with care, shipped with clarity
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            Interfaces, services, and releases—organized for quick scanning with smooth, stable interactions.
          </p>
        </div>

        {/* Toolbar */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* Filters */}
          <div className="flex w-full items-center gap-2 overflow-x-auto">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
              <Filter className="size-4 text-zinc-500" />
              Filter
            </span>
            {categories.map((c) => {
              const isActive = c === active;
              return (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={[
                    "inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm ring-1 transition shrink-0",
                    isActive
                      ? "bg-zinc-900 text-white ring-black/5 dark:bg-zinc-100 dark:text-zinc-900"
                      : "bg-white text-zinc-700 ring-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800 dark:hover:bg-zinc-900/70",
                  ].join(" ")}
                  aria-pressed={isActive}
                >
                  <FolderKanban className="size-4 text-zinc-500" />
                  {c}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="flex w-full items-center gap-2 sm:max-w-xs">
            <div className="relative w-full">
              <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 text-zinc-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects…"
                className="w-full rounded-xl border border-zinc-200 bg-white pl-8 pr-8 py-2 text-sm text-zinc-900 placeholder-zinc-400 outline-none ring-1 ring-transparent transition focus:border-zinc-300 focus:ring-zinc-200 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:placeholder-zinc-500 dark:focus:border-zinc-700 dark:focus:ring-zinc-800"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                  aria-label="Clear search"
                  title="Clear search"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.length === 0 ? (
            <div className="col-span-full rounded-2xl border border-zinc-200/70 bg-white p-6 text-sm text-zinc-500 dark:border-zinc-800/60 dark:bg-zinc-950 dark:text-zinc-400">
              No projects match the current filters.
            </div>
          ) : (
            visible.map((p) => <ProjectCard key={p.id || p.title} project={p} onQuickView={setSelected} />)
          )}
        </div>

        {/* Quick view modal */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 grid place-items-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setSelected(null)}
                aria-hidden
              />
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.25 }}
                role="dialog"
                aria-modal="true"
                className="relative z-10 w-full max-w-2xl rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-6 shadow-lg dark:border-zinc-800/60 dark:bg-zinc-950"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {selected.title}
                    </h3>
                    {selected.date && (
                      <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
                        <CalendarDays className="size-3.5" />
                        {selected.date}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="rounded-md p-1 text-zinc-500 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-900"
                    aria-label="Close"
                    title="Close"
                  >
                    <X className="size-5" />
                  </button>
                </div>

                {selected.image && (
                  <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="h-48 w-full object-cover sm:h-64"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                )}

                {selected.longDescription && (
                  <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                    {selected.longDescription}
                  </p>
                )}

                {Array.isArray(selected.tags) && selected.tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
                      >
                        <Tag className="size-3.5 text-zinc-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  {selected.demoUrl && (
                    <a
                      href={selected.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-3.5 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
                    >
                      <Globe className="size-4" />
                      Live
                      <ArrowUpRight className="size-4" />
                    </a>
                  )}
                  {selected.repoUrl && (
                    <a
                      href={selected.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3.5 py-2 text-sm font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-900/70"
                    >
                      <Github className="size-4" />
                      Code
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Section>
  );
}

function ProjectCard({ project, onQuickView }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="group relative rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950"
    >
      <div className="overflow-hidden rounded-xl ring-1 ring-zinc-200 dark:ring-zinc-800">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">{project.description}</p>

        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={`${project.title}-${t}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-[11px] text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"
              >
                <Tag className="size-3.5 text-zinc-500" />
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white"
            >
              <Globe className="size-4" />
              Live
              <ArrowUpRight className="size-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-900/70"
            >
              <Github className="size-4" />
              Code
            </a>
          )}
          <button
            onClick={() => onQuickView(project)}
            className="inline-flex items-center gap-1.5 rounded-xl bg-white px-3 py-1.5 text-xs font-medium text-zinc-900 ring-1 ring-zinc-200 transition hover:bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-800 dark:hover:bg-zinc-900/70"
          >
            Details
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/*
Expected project shape (example):
{
  id: "proj-001",
  title: "DealsHub Marketplace",
  description: "List, discover, and manage deals for cars, homes, jobs, and services.",
  longDescription: "Extended synopsis for the modal...",
  image: "/images/projects/dealshub-cover.jpg",
  category: "Web App", // or "UI/Components" | "Backend" | "Experiment"
  tags: ["React", "Node.js", "AWS", "Stripe"],
  date: "2025",
  demoUrl: "https://example.com",
  repoUrl: "https://github.com/user/repo"
}
*/
