import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/ui/Marquee";
import { SKILLS } from "../data";
import Section from "../components/Section";
import { Sparkles } from "lucide-react";

const half = Math.ceil(SKILLS.length / 2);
const firstRow = SKILLS.slice(0, half);
const secondRow = SKILLS.slice(half);

function SkillsCard({ img, name, category }) {
  return (
    <figure
      className={twMerge(
        "relative h-full w-auto cursor-pointer overflow-hidden rounded-xl border p-3 sm:p-4 transition",
        "border-gray-950/10 bg-gray-950/[.02] hover:bg-gray-950/[.06]",
        "dark:border-gray-50/10 dark:bg-gray-50/[.08] dark:hover:bg-gray-50/[.12]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60"
      )}
      tabIndex={0}
      aria-label={name}
    >
      <div className="flex items-center gap-3">
        <img
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          alt={name}
          src={img}
          className="h-10 w-10 rounded-md object-contain"
        />
        <figcaption className="flex min-w-0 flex-col">
          <span className="truncate text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {name}
          </span>
          {category && (
            <span className="mt-0.5 w-fit rounded-md bg-zinc-100 px-1.5 py-0.5 text-[10px] font-medium text-zinc-700 ring-1 ring-zinc-200 dark:bg-zinc-900 dark:text-zinc-300 dark:ring-zinc-800">
              {category}
            </span>
          )}
        </figcaption>
      </div>
    </figure>
  );
}

export default function SkillsMarquee() {
  const hasSkills = Array.isArray(SKILLS) && SKILLS.length > 0;

  return (
    <Section id="skills">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
            <Sparkles className="size-3.5" />
            Skills
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            A stack that ships—Frontend, Backend, and Deployment
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
            A continuously evolving toolkit spanning interface engineering, API design, and cloud deployment—shown here as a smooth, accessible marquee without numeric scores.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="relative mt-6 sm:mt-8 flex w-full flex-col items-center justify-center overflow-hidden">
          {hasSkills && (
            <Marquee
              pauseOnHover
              className={twMerge(
                "[--duration:18s] sm:[--duration:24s] lg:[--duration:32s]",
                "motion-reduce:animate-none"
              )}
              aria-label="Skills marquee row one"
            >
              {firstRow.map((item) => (
                <SkillsCard key={item.name} {...item} />
              ))}
            </Marquee>
          )}

          {hasSkills && (
            <Marquee
              reverse
              pauseOnHover
              className={twMerge(
                "[--duration:18s] sm:[--duration:24s] lg:[--duration:32s]",
                "motion-reduce:animate-none"
              )}
              aria-label="Skills marquee row two"
            >
              {secondRow.map((item) => (
                <SkillsCard key={item.name} {...item} />
              ))}
            </Marquee>
          )}

          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white to-transparent dark:from-black" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white to-transparent dark:from-black" />
        </div>
      </div>
    </Section>
  );
}
