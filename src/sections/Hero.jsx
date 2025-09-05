import Section from "../components/Section";
import { motion } from "framer-motion";
import { NAME } from "../data";
import { ColourfulText } from "../components/ui/ColourfulText";
import { FolderOpen, Mail } from "lucide-react";
import { Highlighter } from "../components/ui/Highliter";
import Beams from "../components/ui/Beams";

const Hero = () => {
  return (
    <Section
      id="hero"
      className="relative md:pt-32 pb-0 md:pb-28 px-4 overflow-hidden min-h-screen"
    >
    <div className="absolute w-full h-full top-0 left-0">
       <Beams
    beamWidth={3}
    beamHeight={30}
    beamNumber={20}
    lightColor="#bb9af9"
    
    speed={2.8}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={30}
  />
    </div>
      {/* Left Side */}
      <div className="flex items-center justify-center flex-col">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl lg:text-6xl font-extrabold leading-tight text-center z-10"
        >
          Building Digital Presence <br />
          <ColourfulText />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mt-6 max-w-xl mx-auto md:mx-0 text-base md:text-lg text-white/70 text-center"
        >
          <p>
            Turning ideas into production-ready web applications. Combining
            cutting-edge frontend technologies with robust backend solutions and
            cloud infrastructure for experiences that scale.
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-3 scale-110 md:scale-100 max-w-full overflow-x-auto">
          {/* Primary Button - View Projects */}
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg border border-[#2a1358]/70 bg-[#2a1358]/30 px-4 sm:px-5 py-2 text-sm sm:text-base font-medium text-white backdrop-blur-md transition hover:bg-[#2a1358]/20 hover:[#2a1358]/40 whitespace-nowrap"
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
