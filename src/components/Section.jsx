import { motion } from "framer-motion";
import classNames from "../utils/classnames";

const Section = ({ id, className, children }) => (
  <motion.section
    id={id}
    className={classNames("relative mx-auto w-full max-w-6xl px-4 py-20 md:py-28", className)}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.section>
);
export default Section;