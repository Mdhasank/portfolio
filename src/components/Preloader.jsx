
// ---------- Preloader ----------
import { AnimatePresence, motion } from "framer-motion";

const Preloader = ({ done }) => (
  <AnimatePresence>
    {!done && (
      <motion.div
        className="fixed inset-0 z-[999] flex items-center justify-center bg-neutral-950"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.6 } }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ repeat: Infinity, repeatType: "mirror", duration: 1.2 }}
          className="text-center"
        >
          <div className="text-5xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400">
            MHK
          </div>
          <div className="mt-2 text-xs text-white/60">Loading experience…</div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);
export default Preloader;