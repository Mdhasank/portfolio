import { useState } from "react";
import MainMenu from "../components/MainMenu";
import { AnimatePresence, motion } from "motion/react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed inset-x-0 z-20 w-full bg-primary/40 backdrop-blur-lg">
      <div className="mx-auto c-space max-w-7xl">
        <div className="flex items-center justify-between py-2 sm:py-0">
          <a
            href="/"
            className="text-2xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            HASAN
          </a>
          <button
            className="flex cursor-pointer text-neutral-400 hover:text-white focus-outline-none sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              className="w-8 h-8"
              alt="toggle"
            />
          </button>
          <nav className="hidden sm:flex">
            <MainMenu />
          </nav>
        </div>
      </div>
     <AnimatePresence>
       {isOpen && (
          <motion.div className="block text-center overflow-hidden sm:hidden min-h-screen"
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1, x:0 }}
          exit={{ opacity: 0, x:-100 }}
          transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <MainMenu />
            </nav>
          </motion.div>
      )}
     </AnimatePresence>
    </div>
  );
};

export default Navbar;
