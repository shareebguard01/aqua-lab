import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { WaveDivider } from './WaveDivider';

// Established date placeholder — easily update this value when finalizing established date
export const ESTABLISHED_DATE = 'Est. 2024';

const features = [
  'Your logo, names or event artwork on every bottle',
  'Perfect for weddings, conferences & corporate gifting',
  'Low minimum order quantities',
  'Premium bottle quality your guests will notice',
];

export function CustomLabelsSection() {
  return (
    <section id="custom-labels" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      {/* ambient background glows */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl animate-blob" style={{ animationDelay: '5s' }} />

      <div className="section-container relative grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Copy */}
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center lg:mx-0 lg:items-start lg:text-left">
          <span className="reveal glass-card neon-border-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-neon">
            <Sparkles className="h-3.5 w-3.5 text-white" /> Custom Labels · EST. 2024
          </span>
          <h2 className="reveal display-head mt-5 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Make Your Event<br />
            <span className="text-white-gradient drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">Memorable</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg font-medium leading-relaxed text-slate-100" data-delay="160">
            Custom-labeled AquaLab water for weddings, conferences and corporate
            gifting. Your brand on every bottle — a small detail your guests will
            actually remember.
          </p>

          <ul className="reveal mt-8 grid w-full gap-3 sm:grid-cols-2" data-delay="240">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm font-semibold text-slate-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white shadow-neon">
                  <Check className="h-3 w-3 text-black" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="reveal btn-cyan group mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide shadow-neon"
            data-delay="320"
          >
            Get a Custom Label Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Clean Bottle Display with Ambient White Glow */}
        <div className="reveal bottle-feature-stage relative flex items-center justify-center overflow-visible border-0 bg-transparent py-0 shadow-none sm:py-4" data-delay="200">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
            <div className="bottle-glow-cyan-outer h-[22rem] w-[22rem] rounded-full sm:h-[38rem] sm:w-[38rem]" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
            <div className="bottle-glow-cyan h-[20rem] w-[20rem] rounded-full sm:h-[34rem] sm:w-[34rem]" />
          </div>

          {/* Floating sample swatches */}
          <div className="absolute -left-2 top-8 hidden rounded-2xl glass px-4 py-3 shadow-glass border border-white/20 sm:block animate-floatSlow z-20">
            <p className="text-xs font-bold uppercase text-white">Sample</p>
            <div className="mt-2 flex gap-1.5">
              <span className="h-6 w-6 rounded-md bg-white neon-glow" />
              <span className="h-6 w-6 rounded-md bg-ink-950 border border-white/20" />
              <span className="h-6 w-6 rounded-md bg-zinc-300 border border-white/20" />
            </div>
          </div>
          <div className="absolute -right-3 bottom-16 hidden rounded-2xl glass px-4 py-3 shadow-glass border border-white/20 sm:block animate-float z-20" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs font-bold uppercase text-slate-300">Your Logo</p>
            <p className="text-sm font-extrabold text-white neon-text">→ Here</p>
          </div>

          {/* High-resolution clean bottle image filling 75%-85% container height on mobile */}
          <img
            src="/aqualab_bottle_clean.png"
            alt="AquaLab Custom Bottle"
            className="bottle-feature-img relative z-10 w-auto object-contain sm:h-[38rem] sm:max-h-none lg:h-[42rem] drop-shadow-[0_0_35px_rgba(255,255,255,0.4)] transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>

      <WaveDivider className="absolute -bottom-px left-0 w-full h-16" fill="#0a0a0c" />
    </section>
  );
}

