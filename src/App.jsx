import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navbar from "./sections/Navbar";
import classNames from "./utils/classnames";

import {
  NAME,
  TAGLINE,
} from "./data";
import useLocalStorage from "./hooks/useLocalStorage";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Blogs from "./sections/Blogs";
import Experience from "./sections/Experience";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Projects from "./sections/Projects"
import BackgroundGlow from "./components/ui/BackgroundGlow";
export default function App() {
  const [theme, setTheme] = useLocalStorage("mhk-theme", "dark");
  const [loaded, setLoaded] = useState(false);
  const [active, setActive] = useState("hero");

  // Preloader
  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 1200);
    return () => clearTimeout(t);
  }, []);

  // Sections
  const sections = useMemo(
    () => [
      { id: "hero", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
      { id: "blog", label: "Blog" },
      { id: "testimonials", label: "Testimonials" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // Active section highlight on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.1 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const onJump = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className={classNames(
        "min-h-screen bg-neutral-950 text-white",
        theme === "light" && "bg-neutral-50 text-neutral-900"
      )}
    >
    <BackgroundGlow />
      <Helmet>
        <title>{`${NAME} — Portfolio`}</title>
        <meta name="description" content={TAGLINE} />
        <meta property="og:title" content={`${NAME} — Portfolio`} />
        <meta property="og:description" content={TAGLINE} />
        <meta property="og:type" content="website" />
      </Helmet>

      <Preloader done={loaded} />
      <Cursor />
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 mix-blend-screen">
        <div className="absolute -top-40 right-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <Navbar />

      {/* Hero */}
      <Hero/>

      {/* About */}
      <About/>

      {/* Skills */}
      <Skills/>

      {/* Projects */}
      <Projects/>

      {/* Experience */}
      <Experience/>

      {/* Blog */}
      <Blogs/>

      {/* Testimonials */}
      <Testimonials/>

      {/* Contact */}
      <Contact/>

      {/* Footer */}
      <Footer/>
    </div>
  );
}
