import { ShieldCheck, FlaskConical, Eye } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const LOGO = '/Untitled_design_20260726_210210_0000.png';

const founders = [
  {
    name: 'Nurina Patel',
    initial: 'N',
    role: 'Co-Founder',
    phone: '082 855 4498',
  },
  {
    name: 'Muhammed Halim',
    initial: 'M',
    role: 'Co-Founder',
    phone: '081 053 9335',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="section-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Founders card */}
        <div className="reveal relative">
          <div className="card-interactive glass-card rounded-4xl p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white neon-text">EST. 2024 · Johannesburg</p>
            <h3 className="display-head mt-2 text-3xl text-white sm:text-4xl">Meet The Founders</h3>

            <div className="logo-halo mt-6 flex items-center justify-center gap-4 sm:justify-start">
              <img src={LOGO} alt="AquaLab brand mark" className="logo-glow h-14 w-14 object-contain" />
              <span className="display-head text-2xl text-white">
                Aqua<span className="text-white-gradient drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]">Lab</span>
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {founders.map((f) => (
                <div key={f.name} className="flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-950/60 p-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-slate-600/60 bg-white/10 text-xl font-extrabold text-white shadow-neon">
                    {f.initial}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-white">{f.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">{f.role}</p>
                    <p className="mt-0.5 text-sm font-semibold text-slate-100">{f.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base font-medium leading-relaxed text-slate-300">
              Founded in 2024 in Johannesburg, Nurina and Muhammed set out to make
              Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source — accessible to every South African community.
            </p>
          </div>
        </div>

        {/* Story + vision */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Our Story</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Clean, Fresh, <span className="text-white-gradient drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">Accessible</span>
          </h2>
          <p className="reveal mt-5 text-lg font-medium leading-relaxed text-slate-100" data-delay="160">
            AquaLab was built on a simple belief: clean water isn't a luxury, it's the
            starting point for everything else. Every bottle we fill is a step toward
            healthier South African communities.
          </p>

          <div className="reveal mt-8 grid w-full gap-4 sm:grid-cols-2" data-delay="240">
            <div className="card-interactive glass-card rounded-3xl p-6 transition-all hover:border-slate-500/60">
              <Eye className="mx-auto h-7 w-7 text-white lg:mx-0" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-white">Our Vision</h4>
              <p className="mt-1.5 text-sm font-medium text-slate-300">
                Clean, fresh, accessible water for every South African community.
              </p>
            </div>
            <div className="card-interactive glass-card rounded-3xl p-6 transition-all hover:border-slate-500/60">
              <FlaskConical className="mx-auto h-7 w-7 text-white lg:mx-0" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-white">Our Promise</h4>
              <p className="mt-1.5 text-sm font-medium text-slate-300">
                Rigorous water-quality testing for high potability and safety, batch after batch.
              </p>
            </div>
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-6" data-delay="320">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-white" />
              <span className="font-semibold text-white">Lab-Tested Safety</span>
            </div>
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-white" />
              <span className="font-semibold text-white">Community First</span>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider className="absolute -bottom-px left-0 w-full h-16" fill="#0a0a0c" />
    </section>
  );
}
