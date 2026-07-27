import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { CONTACTS } from '@/lib/contacts';

const LOGO = '/Untitled_design_20260726_210210_0000.png';

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
];

const nav = [
  { label: 'Shop', href: '#products' },
  { label: 'About', href: '#about' },
  { label: 'Custom Labels', href: '#custom-labels' },
  { label: 'Contact', href: '#contact' },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink-900 text-mist-100">
      {/* top wave — dark with cyan glow outline */}
      <div className="absolute -top-px left-0 w-full">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-12 w-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C 200 80, 400 0, 720 40 C 1040 80, 1240 0, 1440 40 L 1440 0 L 0 0 Z" fill="#0a0a0a" stroke="rgba(0,229,255,0.5)" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 0 6px rgba(0,229,255,0.5))' }} />
        </svg>
      </div>

      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-aqua-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -top-10 right-0 h-64 w-64 rounded-full bg-aqua-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#hero" className="flex items-center gap-3">
              <span className="logo-halo relative grid h-11 w-11 place-items-center">
                <img src={LOGO} alt="AquaLab logo" className="logo-glow h-11 w-11 object-contain" />
              </span>
              <span className="display-head text-2xl text-mist-50">
                Aqua<span className="text-aqua-gradient">Lab</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-mist-100/70">
              Life starts with clean water. Premium Johannesburg bottled water — locally sourced, lab-tested and sustainably packaged.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-aqua-400/40 bg-ink-700/60 text-aqua-400 transition-all hover:bg-aqua-400/15 hover:shadow-neon hover:scale-110"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-aqua-400 neon-text">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-mist-100/75 transition-colors hover:text-aqua-400">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-aqua-400 neon-text">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-3 text-mist-100/75 transition-colors hover:text-aqua-400">
                  <Mail className="h-4 w-4 text-aqua-400" /> {CONTACTS.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-mist-100/75">
                <Phone className="h-4 w-4 text-aqua-400" /> {CONTACTS.muhammed.phone}
              </li>
              <li className="flex items-center gap-3 text-mist-100/75">
                <Phone className="h-4 w-4 text-aqua-400" /> {CONTACTS.nurina.phone}
              </li>
              <li className="flex items-center gap-3 text-mist-100/75">
                <MapPin className="h-4 w-4 text-aqua-400" /> {CONTACTS.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-aqua-400/20 pt-6 text-sm text-mist-100/55 sm:flex-row">
          <p>© {new Date().getFullYear()} AquaLab. All rights reserved.</p>
          <p>Founded by Muhammed Halim &amp; Nurina Patel · Johannesburg, South Africa</p>
        </div>
      </div>
    </footer>
  );
}
