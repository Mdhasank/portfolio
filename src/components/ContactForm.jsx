import { useState } from "react";
import { Star, ChevronRight } from "lucide-react";
import classNames from "../utils/classnames";

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name) e.name = "Please enter your name";
    if (!values.email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) e.email = "Valid email required";
    if (!values.message || values.message.length < 10) e.message = "Message should be 10+ chars";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    // TODO: integrate EmailJS here
    setSent(true);
  };

  if (sent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center text-white/80">
        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><Star size={18} /></div>
        Thanks! I\'ll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-white/60">Name</label>
          <input
            className={classNames(
              "w-full rounded-xl border bg-transparent px-3 py-2 text-sm outline-none",
              "border-white/10 focus:border-fuchsia-400/60",
              errors.name && "border-red-500/60"
            )}
            placeholder="Your name"
            value={values.name}
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-xs text-white/60">Email</label>
          <input
            className={classNames(
              "w-full rounded-xl border bg-transparent px-3 py-2 text-sm outline-none",
              "border-white/10 focus:border-cyan-400/60",
              errors.email && "border-red-500/60"
            )}
            placeholder="you@example.com"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs text-white/60">Message</label>
        <textarea
          rows={5}
          className={classNames(
            "w-full rounded-xl border bg-transparent px-3 py-2 text-sm outline-none",
            "border-white/10 focus:border-cyan-400/60",
            errors.message && "border-red-500/60"
          )}
          placeholder="Tell me about your project or idea…"
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
        />
        {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>
      <div className="flex items-center gap-3">
        <button type="submit" className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 hover:bg-white/20">
          Send Message <ChevronRight size={16} className="transition group-hover:translate-x-0.5" />
        </button>
        <div className="text-xs text-white/50">Or email me directly.</div>
      </div>
    </form>
  );
};
export default ContactForm;