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
    <section id="custom-labels" className="relative overflow-hidden bg-ink-800 py-28 text-mist-50 sm:py-36">
      {/* ambient glow */}
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-aqua-400/15 blur-3xl animate-blob" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[28rem] w-[28rem] rounded-full bg-aqua-500/10 blur-3xl animate-blob" style={{ animationDelay: '5s' }} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div>
          <span className="reveal neon-border-soft inline-flex items-center gap-2 rounded-full bg-ink-700/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-aqua-400 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Custom Labels
          </span>
          <h2 className="reveal display-head mt-5 text-4xl text-mist-50 sm:text-5xl lg:text-6xl" data-delay="80">
            Make Your Event<br />
            <span className="text-aqua-gradient">Memorable</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-mist-100/80" data-delay="160">
            Custom-labeled AquaLab water for weddings, conferences and corporate
            gifting. Your brand on every bottle — a small detail your guests will
            actually remember.
          </p>

          <ul className="reveal mt-8 grid gap-3 sm:grid-cols-2" data-delay="240">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-mist-100/85">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-aqua-400 shadow-neon">
                  <Check className="h-3 w-3 text-ink-900" strokeWidth={3} />
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
          <div className="bottle-glow absolute h-[32rem] w-[32rem] rounded-full" />
          <div className="absolute h-80 w-80 rounded-full border border-aqua-400/40 neon-glow" />
          <div className="absolute h-[28rem] w-[28rem] rounded-full border border-aqua-400/25" />

          {/* floating sample swatches */}
          <div className="absolute -left-2 top-12 hidden rounded-2xl glass px-4 py-3 shadow-glass neon-border sm:block animate-floatSlow">
            <p className="text-xs font-bold uppercase text-aqua-400">Sample</p>
            <div className="mt-2 flex gap-1.5">
              <span className="h-6 w-6 rounded-md bg-aqua-400 neon-glow" />
              <span className="h-6 w-6 rounded-md bg-ink-900 border border-mist-100/20" />
              <span className="h-6 w-6 rounded-md bg-mist-50 border border-mist-100/20" />
            </div>
          </div>
          <div className="absolute -right-3 bottom-20 hidden rounded-2xl glass px-4 py-3 shadow-glass neon-border sm:block animate-float" style={{ animationDelay: '1.5s' }}>
            <p className="text-xs font-bold uppercase text-aqua-400">Your Logo</p>
            <p className="text-sm font-extrabold text-aqua-400 neon-text">→ Here</p>
          </div>

          <div className="relative z-10 rounded-3xl p-3 neon-border">
            <WaterBottle
              variant="custom"
              className="h-[26rem] w-auto animate-float drop-shadow-2xl sm:h-[30rem]"
              label="Your Event"
              sublabel="Est. 2026"
              customLabelColor="#00b8d4"
            />
          </div>
        </div>
      </div>

      <WaveDivider className="absolute -bottom-px left-0 w-full h-16" fill="#0a0a0a" />
    </section>
  );
}
