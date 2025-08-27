// import React from "react";
// import { motion } from "motion/react";

// export function ColourfulText() {
//   const phrases = [
    
//      "And Ideas into Reality.",
//      "That You’ll Love.",
//      "Awesome and Better",
    
//   ];

//   const colors = [
//     "rgb(46, 64, 83)", "rgb(64, 83, 105)", "rgb(72, 85, 99)", "rgb(38, 50, 56)",
//     "rgb(54, 69, 79)", "rgb(21, 101, 192)", "rgb(0, 128, 128)", "rgb(75, 0, 130)",
//     "rgb(72, 61, 139)", "rgb(139, 0, 139)", "rgb(128, 0, 128)", "rgb(218, 165, 32)",
//     "rgb(184, 134, 11)", "rgb(169, 169, 169)", "rgb(105, 105, 105)", "rgb(112, 128, 144)",
//     "rgb(119, 136, 153)", "rgb(47, 79, 79)",
//   ];

//   const [currentColors, setCurrentColors] = React.useState(colors);
//   const [phraseIndex, setPhraseIndex] = React.useState(0);
//   const [cycleCount, setCycleCount] = React.useState(0);

//   React.useEffect(() => {
//     const interval = setInterval(() => {
//       setPhraseIndex((prev) => (prev + 1) % phrases.length);
//       setCurrentColors([...colors].sort(() => Math.random() - 0.5));
//       setCycleCount((prev) => prev + 1);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentPhrase = phrases[phraseIndex] || "";

//   return (
//     <div
//       style={{
//         position: "relative",
//         display: "inline-flex",  // keeps text inline and aligned
//         justifyContent: "center", 
//         alignItems: "center",
//         height: "1.5em",
//         overflow: "hidden",
//         verticalAlign: "middle",
//         textAlign: "center",     // makes alignment neat
//       }}
//     >
//       {currentPhrase.split("").map((char, index) => (
//         <motion.span
//           key={`${char}-${cycleCount}-${index}`}
//           initial={{ y: 0 }}
//           animate={{
//             color: currentColors[index % currentColors.length],
//             y: [0, -3, 0],
//             scale: [1, 1.01, 1],
//             filter: ["blur(0px)", "blur(5px)", "blur(0px)"],
//             opacity: [1, 0.8, 1],
//           }}
//           transition={{
//             duration: 0.5,
//             delay: index * 0.05,
//           }}
//           className="inline font-sans tracking-tight"
//         >
//           {char === " " ? "\u00A0" : char}
//         </motion.span>
//       ))}
//     </div>
//   );
// }

"use client";

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
  "relative inline-block rounded-lg pt-2 pb-2 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-2",
  // Light mode: soft indigo/blue glow background
  "[background:linear-gradient(to_bottom,#e0e7ff,#c7d2fe)]",
  "shadow-[inset_0_-1px_#c7d2fe,inset_0_0_0_1px_#c7d2fe,_0_4px_8px_rgba(99,102,241,0.3)]",
  // Dark mode: deeper indigo with subtle glow
  "dark:[background:linear-gradient(to_bottom,#1e1b4b,#111827)]",
  "dark:shadow-[inset_0_-1px_#1e1b4b,inset_0_0_0_1px_rgba(99,102,241,0.3),_0_4px_8px_rgba(99,102,241,0.2)]",
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
