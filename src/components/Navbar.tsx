import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const LOGO = '/Untitled_design_20260726_210210_0000.png';

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Shop', href: '#products' },
  { label: 'About', href: '#about' },
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
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#hero" className="flex items-center gap-3 group">
          <span className="logo-halo relative grid h-11 w-11 place-items-center">
            <img
              src={LOGO}
              alt="AquaLab logo"
              className="logo-glow h-11 w-11 object-contain transition-transform group-hover:scale-110"
            />
          </span>
          <span className="display-head text-2xl text-mist-50">
            Aqua<span className="text-aqua-gradient">Lab</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-4 py-2 text-sm font-semibold text-mist-100 transition-colors hover:text-aqua-400 hover:neon-text"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="btn-neon rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide"
          >
            Get a Quote
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-xl border border-aqua-400/40 text-aqua-400 md:hidden neon-border-soft"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${open ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="mx-5 mt-3 flex flex-col gap-1 rounded-3xl glass p-4 shadow-glass">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-semibold text-mist-100 hover:bg-aqua-400/10 hover:text-aqua-400"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-neon mt-1 block rounded-2xl px-4 py-3 text-center text-base font-bold uppercase"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
