import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ items }) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [items.length]);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-lg text-white/90">“{items[index].quote}”</p>
          <div className="mt-3 text-sm text-white/60">— {items[index].name}, {items[index].role}</div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
export default TestimonialCard;