import React, { lazy, Suspense } from "react";
import { motion } from "framer-motion";

// Dynamically import World using React.lazy
const World = lazy(() => import("./Globe").then((m) => ({ default: m.World })));

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ];

  return (
    <div className="relative w-full h-auto flex flex-col items-center justify-center">
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" px-4 text-center"
      >
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-black dark:text-white">
          Time Zone
        </h2>
        <p className="mt-2 text-sm sm:text-base md:text-lg text-neutral-700 dark:text-neutral-200 max-w-md mx-auto">
          I am based in Mars, and open to remote work worldwide.
        </p>
      </motion.div> */}

      {/* Globe Container */}
      <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-[16rem] sm:h-[20rem] md:h-[24rem] lg:h-[28rem] mt-6">
        <Suspense
          fallback={<div className="text-center text-white">Loading globe...</div>}
        >
          <World data={sampleArcs} globeConfig={globeConfig} />
        </Suspense>

        {/* Gradient overlay */}
        {/* <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-b from-transparent to-white dark:to-black pointer-events-none" /> */}
      </div>
    </div>
  );
}
