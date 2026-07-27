import { ShieldCheck, FlaskConical, Eye } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

const LOGO = '/Untitled_design_20260726_210210_0000.png';

const founders = [
  {
    name: 'Muhammed Halim',
    initial: 'M',
    role: 'Co-Founder',
    phone: '(+27) 081 053 9335',
  },
  {
    name: 'Nurina Patel',
    initial: 'N',
    role: 'Co-Founder',
    phone: '(+27) 082 555 4498',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 text-mist-50 sm:py-32">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-aqua-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-aqua-500/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
        {/* Founders card */}
        <div className="reveal relative">
          <div className="rounded-4xl border border-aqua-400/30 bg-ink-700/70 p-8 shadow-glow backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-aqua-400 neon-text">Founded in Johannesburg</p>
            <h3 className="display-head mt-2 text-3xl text-mist-50 sm:text-4xl">Meet The Founders</h3>

            {/* Logo mark */}
            <div className="logo-halo mt-6 flex items-center gap-4">
              <img src={LOGO} alt="AquaLab brand mark" className="logo-glow h-14 w-14 object-contain" />
              <span className="display-head text-2xl text-mist-50">
                Aqua<span className="text-aqua-gradient">Lab</span>
              </span>
            </div>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {founders.map((f) => (
                <div key={f.name} className="flex items-center gap-4 rounded-3xl border border-aqua-400/20 bg-ink-800/60 p-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-aqua-400/60 bg-aqua-400/10 text-xl font-extrabold text-aqua-400 shadow-neon">
                    {f.initial}
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-mist-50">{f.name}</p>
                    <p className="text-xs font-semibold uppercase tracking-wide text-aqua-400/80">{f.role}</p>
                    <p className="mt-0.5 text-sm text-mist-100/70">{f.phone}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-base leading-relaxed text-mist-100/80">
              Born and raised in Johannesburg, Muhammed and Nurina set out to make
              clean water something every South African community can count on — fresh,
              safe, and never out of reach.
            </p>
          </div>
        </div>

        {/* Story + vision */}
        <div>
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aqua-400 neon-text">Our Story</p>
          <h2 className="reveal display-head mt-3 text-4xl text-mist-50 sm:text-5xl" data-delay="80">
            Clean, Fresh, <span className="text-aqua-gradient">Accessible</span>
          </h2>
          <p className="reveal mt-5 text-lg leading-relaxed text-mist-100/80" data-delay="160">
            AquaLab was built on a simple belief: clean water isn't a luxury, it's the
            starting point for everything else. Every bottle we fill is a step toward
            healthier South African communities.
          </p>

          <div className="reveal mt-8 grid gap-4 sm:grid-cols-2" data-delay="240">
            <div className="rounded-3xl border border-aqua-400/25 bg-ink-700/50 p-5 backdrop-blur transition-all hover:border-aqua-400/60 hover:shadow-glow">
              <Eye className="h-7 w-7 text-aqua-400" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-mist-50">Our Vision</h4>
              <p className="mt-1.5 text-sm text-mist-100/70">
                Clean, fresh, accessible water for every South African community.
              </p>
            </div>
            <div className="rounded-3xl border border-aqua-400/25 bg-ink-700/50 p-5 backdrop-blur transition-all hover:border-aqua-400/60 hover:shadow-glow">
              <FlaskConical className="h-7 w-7 text-aqua-400" />
              <h4 className="mt-3 font-bold uppercase tracking-wide text-mist-50">Our Promise</h4>
              <p className="mt-1.5 text-sm text-mist-100/70">
                Rigorous water-quality testing for high potability and safety, batch after batch.
              </p>
            </div>
          </div>

          <div className="reveal mt-8 flex flex-wrap gap-6" data-delay="320">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-aqua-400" />
              <span className="font-semibold text-mist-50">Lab-Tested Safety</span>
            </div>
            <div className="flex items-center gap-3">
              <FlaskConical className="h-6 w-6 text-aqua-400" />
              <span className="font-semibold text-mist-50">Community First</span>
            </div>
          </div>
        </div>
      </div>

      <WaveDivider className="absolute -bottom-px left-0 w-full h-16" fill="#0a0a0a" />
    </section>
  );
}
