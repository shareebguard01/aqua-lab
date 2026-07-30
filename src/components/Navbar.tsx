import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO = '/Untitled_design_20260726_210210_0000.png';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#client-showcase' },
  { label: 'Events', href: '#custom-labels' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass py-3 border-b border-zinc-800/80 shadow-2xl' : 'bg-transparent py-4'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center gap-3.5 group">
          <span className="logo-halo relative grid h-14 w-14 shrink-0 place-items-center">
            <img
              src={LOGO}
              alt="AquaLab logo"
              className="logo-glow h-14 w-14 object-contain transition-transform group-hover:scale-105"
            />
          </span>
          <div className="flex flex-col justify-center">
            <span className="display-head text-2xl sm:text-3xl text-white tracking-wide">
              Aqua<span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]">Lab</span>
            </span>
            <span className="text-[11.5px] font-semibold tracking-normal text-slate-100 leading-tight hidden sm:block">
              Water is the only thing you should taste in water
            </span>
          </div>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-slate-100 transition-all hover:text-white hover:neon-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-cyan rounded-full px-6 py-2.5 text-xs font-extrabold uppercase tracking-wider shadow-neon"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/30 text-white md:hidden neon-border-soft"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile tagline banner */}
      <div className="mx-auto flex w-full flex-col items-center justify-center px-5 pt-1 text-center text-[11.5px] font-semibold tracking-normal text-slate-100 sm:hidden">
        Water is the only thing you should taste in water
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="mx-5 mt-3 flex flex-col gap-1 rounded-3xl glass p-4 shadow-glass border border-white/20">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-slate-100 hover:bg-white/10 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-cyan mt-1 block rounded-2xl px-4 py-3 text-center text-base font-extrabold uppercase shadow-neon"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
