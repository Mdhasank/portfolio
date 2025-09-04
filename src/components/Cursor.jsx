// ---------- Custom Cursor ----------
import { useEffect, useRef } from "react";
const Cursor = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const move = (e) => {
      const { clientX, clientY } = e;
      el.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={ref}
      className="hidden lg:block pointer-events-none fixed left-0 top-0 z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-white/10 backdrop-blur h-6 w-6 mix-blend-difference"
    />
  );
};
export default Cursor;