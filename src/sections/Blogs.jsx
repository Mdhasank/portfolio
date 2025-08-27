import Section from "../components/Section";
import { BLOG } from "../data";
import { motion } from "framer-motion";

const Blogs = () => {
  return (
    <Section id="blog">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">Latest Posts</h3>
          <a href="#" className="text-sm text-white/60 hover:text-white">
            View all
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {BLOG.map((b) => (
            <motion.a
              key={b.title}
              href={b.href}
              whileHover={{ y: -3 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="text-xs text-white/60">
                {new Date(b.date).toDateString()}
              </div>
              <div className="mt-1 text-lg font-semibold group-hover:underline">
                {b.title}
              </div>
              <p className="mt-1 text-sm text-white/70">{b.excerpt}</p>
            </motion.a>
          ))}
        </div>
      </Section>
  )
}

export default Blogs