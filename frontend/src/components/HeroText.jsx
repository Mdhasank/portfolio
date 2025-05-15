import React from "react";
import { motion } from "motion/react";
import FlipWords from "./FlipWords";

const HeroText = () => {
  const words = ["Innovative", "Responsive", "User-Centric"];
  const variants = {
    hidden: { opacity: 0,x:-50 },
    visible: { opacity: 1,x:0 },
  }
  return (
    <div className="z-10 mt-20 text-center lg:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktop */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1 
        variants={variants}
          initial="hidden"
          animate="visible"
          transition = {{delay:1}}
         className="text-4xl font-medium">
          Hi I'm HASAN
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.2}}
           className="text-5xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.5}}
          >
            <FlipWords
              words={words}
              duration={3000}
              className="text-white font-black text-7xl"
            />
          </motion.div>
          <motion.p 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.8}}
           className="text-4xl font-medium text-neutral-300">Web Solutions</motion.p>
        </div>
      </div>

      {/* mobile */}
      <div className="flex flex-col space-y-6 md:hidden">
        <motion.h1 
        variants={variants}
          initial="hidden"
          animate="visible"
          transition = {{delay:1}}
         className="text-[clamp(1.87rem,10vmin,3rem)] sm:text-4xl font-medium text-start">
          Hi I'm HASAN
        </motion.h1>
        <div className="flex flex-col items-start  text-start">
          <motion.p 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.2}}
           className="text-[clamp(1.87rem,10vmin,3rem)] sm:text-4xl font-medium text-neutral-300">
            A Developer <br /> Dedicated to Crafting
          </motion.p>
          <motion.div 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.5}}
          >
            <FlipWords
              words={words}
              duration={3000}
              className="text-white font-black text-[clamp(2.25rem,14vmin,3.5rem)] sm:text-6xl  text-start"
            />
          </motion.div>
          <motion.p 
          variants={variants}
            initial="hidden"
            animate="visible"
            transition = {{delay:1.8}}
           className="text-[clamp(1.87rem,10vmin,3rem)] sm:text-4xl font-medium text-neutral-300">Web Solutions</motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
