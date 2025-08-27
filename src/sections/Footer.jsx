import { SOCIALS,NAME } from "../data"

const Footer = () => {
   const year = new Date().getFullYear();
  return (
          <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row">
          <div className="text-xs text-white/60">
            © {year} {NAME}. All rights reserved.
          </div>
          <div className="flex gap-3">
            {SOCIALS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:bg-white/10"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </footer>
  )
}

export default Footer