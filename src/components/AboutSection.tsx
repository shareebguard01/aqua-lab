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
    <section id="about" className="relative overflow-hidden bg-ink-900 py-28 text-white sm:py-36 border-t border-zinc-800/60 my-6 sm:my-16">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Founders card */}
        <div className="reveal relative">
          <div className="card-interactive rounded-4xl border border-white/20 bg-ink-800/80 p-8 sm:p-10 shadow-glow backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white neon-text">EST. 2024 · Johannesburg</p>
            <h3 className="display-head mt-2 text-3xl text-white sm:text-4xl">Meet The Founders</h3>

            {/* Logo mark */}
            <div className="logo-halo mt-6 flex items-center gap-4">
              <img src={LOGO} alt="AquaLab brand mark" className="logo-glow h-14 w-14 object-contain" />
              <span className="display-head text-2xl text-white">
                Aqua<span className="text-white-gradient drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">Lab</span>
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {founders.map((f) => (
                <div key={f.name} className="flex items-center gap-4 rounded-3xl border border-white/15 bg-ink-900/80 p-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/40 bg-white/10 text-xl font-extrabold text-white shadow-neon">
                    {f.initial}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-white">{f.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-300">{f.role}</p>
                    <p className="mt-0.5 text-sm text-slate-200 font-medium">{f.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-relaxed text-slate-200 font-normal">
              Founded in 2024 in Johannesburg, Nurina and Muhammed set out to make
              Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source — accessible to every South African community.
            </p>
          </div>
        </div>

        {/* Story + vision */}
        <div>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Our Story</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Clean, Fresh, <span className="text-white-gradient drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Accessible</span>
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-slate-300" data-delay="160">
            AquaLab was built on a simple belief: clean water isn't a luxury, it's the
            starting point for everything else. Every bottle we fill is a step toward
            healthier South African communities.
          </p>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-2" data-delay="240">
            <div className="card-interactive rounded-3xl border border-white/20 bg-ink-800/60 p-6 backdrop-blur transition-all hover:border-white/50 hover:shadow-glow">
              <Eye className="h-7 w-7 text-white" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-white">Our Vision</h4>
              <p className="mt-1.5 text-sm text-slate-300">
                Clean, fresh, accessible water for every South African community.
              </p>
            </div>
            <div className="card-interactive rounded-3xl border border-white/20 bg-ink-800/60 p-6 backdrop-blur transition-all hover:border-white/50 hover:shadow-glow">
              <FlaskConical className="h-7 w-7 text-white" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-white">Our Promise</h4>
              <p className="mt-1.5 text-sm text-slate-300">
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
