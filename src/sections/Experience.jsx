import { Calendar } from "lucide-react";
import Section from "../components/Section";
import { EXPERIENCE } from "../data";

const Experience = () => {
  return (
    <Section id="experience">
        <h3 className="mb-6 text-2xl font-semibold">Experience</h3>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-fuchsia-400/60 via-white/10 to-cyan-400/60" />
          <div className="space-y-6">
            {EXPERIENCE.map((x, i) => (
              <div key={i} className="relative ml-10">
                <div className="absolute -left-[9px] top-1 h-4 w-4 rounded-full bg-gradient-to-tr from-fuchsia-400 to-cyan-400" />
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-lg font-semibold">{x.role}</div>
                    <div className="inline-flex items-center gap-1 text-xs text-white/60">
                      <Calendar size={14} /> {x.period}
                    </div>
                  </div>
                  <div className="text-sm text-white/70">{x.company}</div>
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/70">
                    {x.points.map((p, idx) => (
                      <li key={idx}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
  )
}

export default Experience