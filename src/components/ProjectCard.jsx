import { ExternalLink, LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

const ProjectCard = ({ p, onMouseMove }) => (
  <motion.div
    onMouseMove={onMouseMove}
    whileHover={{ y: -4 }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500/10 via-cyan-400/10 to-transparent opacity-0 transition group-hover:opacity-100" />
    <div className="flex items-start justify-between gap-3">
      <h4 className="text-lg font-semibold text-white">{p.title}</h4>
      <div className="flex gap-2">
        <a href={p.links.demo} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10 inline-flex items-center gap-1">
          <ExternalLink size={14} /> Demo
        </a>
        <a href={p.links.code} className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80 hover:bg-white/10 inline-flex items-center gap-1">
          <LinkIcon size={14} /> Code
        </a>
      </div>
    </div>
    <p className="mt-2 text-sm text-white/70">{p.desc}</p>
    <div className="mt-3 flex flex-wrap gap-2">
      {p.tags.map((t) => (
        <span key={t} className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/70">{t}</span>
      ))}
    </div>
  </motion.div>
);
export default ProjectCard;