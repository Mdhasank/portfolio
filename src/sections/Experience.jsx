import Section from "../components/Section";
import { Timeline } from "../components/ui/Timeline";

const Experience = () => {
const data = [
  {
    title: "Freelance · Full‑Stack Developer",
    content: (
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          Since early 2025, I’ve been working independently with clients and on personal products—delivering small, focused web apps from idea to deployment. Each project taught me how to balance form with function, speed with usability, and code with clarity.
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Designed intuitive user interfaces with an emphasis on clarity and responsiveness.</li>
          <li>Built full-stack solutions that prioritized simplicity, performance, and user needs.</li>
          <li>Handled everything from planning and prototyping to feedback cycles and deployment.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Frontend Developer · Product Team",
    content: (
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          From September 2024 to February 2025, I joined a growing product team at a fast-paced tech company, initially as an intern and later transitioning into a full-time role. This stretch shaped my developer habits—writing maintainable code, shipping under deadlines, and thinking in terms of user flows, not just components.
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Helped revamp key parts of the web app, improving both performance and usability.</li>
          <li>Worked closely with designers and backend engineers to ship polished features.</li>
          <li>Contributed to planning meetings, bug triage, and post-release QA loops.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "Frontend Developer · Internship Journey",
    content: (
      <div className="rounded-2xl border border-zinc-200/70 bg-white p-4 sm:p-5 shadow-sm dark:border-zinc-800/60 dark:bg-zinc-950">
        <p className="text-sm text-zinc-600 dark:text-zinc-300">
          My professional journey began in June 2024 with a hands-on internship that opened up the real world of frontend development. For four intense months, I moved from following tutorials to contributing meaningful code to a live product.
        </p>

        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>Wrote UI components that made it into production and handled real user feedback.</li>
          <li>Collaborated with senior devs, learning the value of clean code and reusable patterns.</li>
          <li>Gained firsthand experience in sprints, standups, and fast-paced iteration cycles.</li>
        </ul>
      </div>
    ),
  },
];



  return (
    <Section id="experience">
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </Section>
  );
};

export default Experience;
