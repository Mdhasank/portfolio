import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/ui/Marquee";
import { SKILLS } from "../data";
import Section from "../components/Section";

const firstRow = SKILLS.slice(0, SKILLS.length / 2);
const secondRow = SKILLS.slice(SKILLS.length / 2);

const SkillsCard = ({ img, name }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-auto cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="" width="40" height="40" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  );
};

export default function SkillsMarquee() {
  return (
    <Section id="skills">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((SKILLS) => (
            <SkillsCard key={SKILLS.name} {...SKILLS} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((SKILLS) => (
            <SkillsCard key={SKILLS.name} {...SKILLS} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
      </div>
    </Section>
  );
}
