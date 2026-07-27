import { Sparkles, ArrowRight, Check } from 'lucide-react';
import { WaterBottle } from './WaterBottle';
import { WaveDivider } from './WaveDivider';

const features = [
  'Your logo, names or event artwork on every bottle',
  'Perfect for weddings, conferences & corporate gifting',
  'Low minimum order quantities',
  'Premium bottle quality your guests will notice',
];

export function CustomLabelsSection() {
  return (
    <section id="custom-labels" className="relative overflow-hidden bg-ink-900 py-28 text-white sm:py-36 border-t border-zinc-800/60">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-white/5 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-white/5 blur-3xl animate-blob" style={{ animationDelay: '5s' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="reveal neon-border-soft inline-flex items-center gap-2 rounded-full bg-ink-800/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur border border-white/20">
            <Sparkles className="h-3.5 w-3.5 text-white" /> Custom Labels
          </span>
          <h2 className="reveal display-head mt-5 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Make Your Event<br />
            <span className="text-white-gradient drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]">Memorable</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-zinc-300" data-delay="160">
            Custom-labeled AquaLab water for weddings, conferences and corporate
            gifting. Your brand on every bottle — a small detail your guests will
            actually remember.
          </p>

          <ul className="reveal mt-8 grid gap-3 sm:grid-cols-2" data-delay="240">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white shadow-neon">
                  <Check className="h-3 w-3 text-black" strokeWidth={3} />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="reveal btn-cyan group mt-9 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide"
            data-delay="320"
          >
            Get a Custom Label Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Mockup */}
        <div className="reveal relative flex items-center justify-center" data-delay="200">
          {/* Soft pure-white radial glow */}
          <div className="bottle-glow absolute h-[32rem] w-[32rem] rounded-full opacity-80" />

          {/* floating sample swatches */}
          <div className="absolute -left-2 top-12 hidden rounded-2xl glass px-4 py-3 shadow-glass border border-white/20 sm:block animate-floatSlow">
            <p className="text-xs font-bold uppercase text-white">Sample</p>
            <div className="mt-2 flex gap-1.5">
              <span className="h-6 w-6 rounded-md bg-white neon-glow" />
              <span className="h-6 w-6 rounded-md bg-ink-950 border border-white/20" />
              <span className="h-6 w-6 rounded-md bg-zinc-300 border border-white/20" />
            </div>
          </div>
          <div className="absolute -right-3 bottom-20 hidden rounded-2xl glass px-4 py-3 shadow-glass border border-white/20 sm:block animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs font-bold uppercase text-zinc-400">Your Logo</p>
            <p className="text-sm font-extrabold text-white neon-text">→ Here</p>
          </div>

          <div className="relative z-10 rounded-3xl p-3 border border-white/20 bg-ink-800/40 shadow-glow">
            <WaterBottle
              variant="custom"
              className="h-[26rem] w-auto animate-float drop-shadow-2xl sm:h-[30rem]"
              label="Your Event"
              sublabel="Est. 2026"
              customLabelColor="#ffffff"
            />
          </div>
        </div>
      </div>

      <WaveDivider className="absolute -bottom-px left-0 w-full h-16" fill="#0a0a0c" />
    </section>
  );
}
