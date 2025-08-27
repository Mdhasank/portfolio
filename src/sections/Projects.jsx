import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard"
import { PROJECT_TAGS, PROJECTS } from "../data";
import { useMemo, useState } from "react";
import classNames from "../utils/classnames";


const Projects = () => {
    const [projectFilter, setProjectFilter] = useState("All");
    // Projects filtered
    const filtered = useMemo(
      () =>
        PROJECTS.filter(
          (p) => projectFilter === "All" || p.tags.includes(projectFilter)
        ),
      [projectFilter]
    );
  
    // Tilt handler
    const onTilt = (e) => {
      const card = e.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rx = ((y - rect.height / 2) / rect.height) * -6;
      const ry = ((x - rect.width / 2) / rect.width) * 6;
      card.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg)`;
      card.onmouseleave = () =>
        (card.style.transform = "perspective(800px) rotateX(0) rotateY(0)");
    };
  return (
    <Section id="projects">
            <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <h3 className="text-2xl font-semibold">Featured Projects</h3>
              <div className="flex flex-wrap gap-2">
                {PROJECT_TAGS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setProjectFilter(t)}
                    className={classNames(
                      "rounded-full border px-3 py-1 text-xs",
                      projectFilter === t
                        ? "border-fuchsia-400/60 bg-fuchsia-500/10"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    )}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {filtered.map((p) => (
                <ProjectCard key={p.title} p={p} onMouseMove={onTilt} />
              ))}
            </div>
          </Section>
  )
}

export default Projects