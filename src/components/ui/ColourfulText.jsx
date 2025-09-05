import React, { useState, useEffect, useId, useRef } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export function ColourfulText({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
     className={twMerge(
  "relative inline-block rounded-lg pt-2 pb-2 text-center text-5xl lg:text-6xl font-bold text-white mt-2",
  // Light mode: soft indigo/blue glow background
  // "[background:#bb9af9] bg-gradient-to-b from-[#bb9af9]/20 via-[#8b5cf6]/10 to-[#6366f1]/10",
  // "shadow-[inset_0_-1px_#c7d2fe,inset_0_0_0_1px_#c7d2fe,_0_4px_8px_rgba(99,102,241,0.3)]",
  // Dark mode: deeper indigo with subtle glow
  "dark:[background:linear-gradient(to_bottom,#2a1358,#120a2c)]",
"dark:shadow-[inset_0_-1px_#1d0e3f,inset_0_0_0_1px_rgba(99,102,241,0.15),_0_6px_12px_rgba(99,102,241,0.2)]"
,
  className
)}

      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={twMerge("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
