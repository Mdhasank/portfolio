import Section from "../components/Section";
// import TextHoverEffect from "../components/ui/TextHoverEffect";
import { motion } from "framer-motion";
import { NAME } from "../data";
import { ColourfulText } from "../components/ui/ColourfulText";
import { FolderOpen, Mail } from "lucide-react";
import { Highlighter } from "../components/ui/Highliter";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="pt-20 md:pt-32 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-1 px-4 overflow-hidden min-h-screen"
    >
      {/* Left Side */}
      <div className="flex items-center justify-center flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-center z-10"
        >
          Building Digital Presence <br />
          <ColourfulText />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mt-6 max-w-xl mx-auto md:mx-0 text-sm sm:text-base md:text-lg text-white/70 text-center"
        >
          <span>
            Turning ideas into production-ready web applications. Combining
            cutting-edge frontend technologies with robust backend solutions and
            cloud infrastructure for experiences that scale.
          </span>
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-3 scale-90 sm:scale-100 max-w-full overflow-x-auto">
          {/* Primary Button - View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-indigo-400/20 bg-indigo-500/10 px-4 sm:px-5 py-2 text-sm sm:text-base font-medium text-white backdrop-blur-md transition hover:bg-indigo-500/20 hover:border-indigo-400/40 whitespace-nowrap"
          >
            <FolderOpen size={16} className="sm:size-5" />
            View Projects
          </a>

          {/* Secondary Button - Contact Me */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 sm:px-5 py-2 text-sm sm:text-base font-medium text-white backdrop-blur-md transition hover:bg-white/10 whitespace-nowrap"
          >
            <Mail size={16} className="sm:size-5" />
            Contact Me
          </a>
        </div>
      </div>
      {/* <div className="absolute inset-0"> <TextHoverEffect text="HASAN" /></div> */}
    </Section>
  );
};

export default Hero;
