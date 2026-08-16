import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { siteConfig } from "../data/siteConfig";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#dsa", label: "DSA" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur border-b border-hairline" : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-5xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono-tight text-sm text-paper hover:text-gold transition-colors">
          kshitiz<span className="text-gold">.</span>mishra
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="font-mono-tight text-xs uppercase tracking-wider text-paper-dim hover:text-paper transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={siteConfig.resumeUrl}
          download
          className="hidden md:inline-flex items-center gap-2 border border-hairline hover:border-gold text-xs font-mono-tight uppercase tracking-wider px-3 py-2 rounded-sm text-paper hover:text-gold transition-colors"
        >
          <Download size={13} /> Resume
        </a>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-paper p-2 -mr-2"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-ink border-b border-hairline px-5 pb-6 pt-2">
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-mono-tight text-sm text-paper-dim hover:text-paper border-b border-hairline/60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={siteConfig.resumeUrl}
            download
            className="mt-4 inline-flex items-center gap-2 border border-hairline text-xs font-mono-tight uppercase tracking-wider px-3 py-2 rounded-sm text-gold"
          >
            <Download size={13} /> Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
