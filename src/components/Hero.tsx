import { ArrowRight, MessageCircle, Droplet, Leaf, ShieldCheck } from 'lucide-react';
import { WaterBottle } from './WaterBottle';
import { AquaBackground } from './AquaBackground';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink-900 pt-32 pb-28 sm:pt-40 sm:pb-36">
      <AquaBackground />

      {/* Top gradient wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-800 via-ink-900 to-ink-900" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="reveal neon-border-soft inline-flex items-center gap-2 rounded-full bg-ink-800/60 px-4 py-2 text-xs font-bold uppercase tracking-wider text-aqua-400 backdrop-blur">
            <Droplet className="h-3.5 w-3.5" fill="currentColor" /> Johannesburg, South Africa
          </span>

          <h1 className="reveal display-head mt-6 text-5xl text-mist-50 sm:text-6xl lg:text-7xl xl:text-8xl" data-delay="80">
            Life Starts<br />
            <span className="text-aqua-gradient">With Clean</span><br />
            Water
          </h1>

          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-mist-100/80 lg:mx-0" data-delay="160">
            Pure, sustainably sourced and surprisingly affordable. AquaLab brings
            Johannesburg fresh, lab-tested water — for your home, your office, and your
            biggest celebrations.
          </p>

          <div className="reveal mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start" data-delay="240">
            <a
              href="#products"
              className="btn-cyan group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide sm:w-auto"
            >
              Shop Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-neon inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide sm:w-auto"
            >
              <MessageCircle className="h-5 w-5" /> Request Bulk Quote
            </a>
          </div>

          {/* Trust strip */}
          <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-mist-100/75 lg:justify-start" data-delay="320">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-aqua-400" /> Lab-Tested Purity</span>
            <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-aqua-400" /> Eco-Friendly Packaging</span>
            <span className="inline-flex items-center gap-2"><Droplet className="h-4 w-4 text-aqua-400" fill="currentColor" /> Locally Sourced</span>
          </div>
        </div>

        {/* Hero bottle */}
        <div className="relative flex items-center justify-center">
          <div className="bottle-glow absolute h-[34rem] w-[34rem] rounded-full" />
          {/* decorative ring */}
          <div className="absolute h-80 w-80 rounded-full border border-aqua-400/40 sm:h-96 sm:w-96 neon-glow" />
          <div className="absolute h-[26rem] w-[26rem] rounded-full border border-aqua-400/25 sm:h-[30rem] sm:w-[30rem]" />

          <div className="relative z-10 rounded-3xl p-3 neon-border">
            <WaterBottle
              variant="blue"
              className="h-[24rem] w-auto animate-float drop-shadow-2xl sm:h-[30rem]"
              sublabel="Pure Spring"
            />
          </div>

          {/* floating mini badges */}
          <div className="absolute -left-2 top-10 hidden rounded-2xl glass px-4 py-3 shadow-glass sm:block animate-floatSlow neon-border">
            <p className="text-2xl font-extrabold text-aqua-400 neon-text">100%</p>
            <p className="text-xs font-semibold uppercase text-mist-100/70">Potable</p>
          </div>
          <div className="absolute -right-2 bottom-16 hidden rounded-2xl glass px-4 py-3 shadow-glass sm:block animate-float neon-border" style={{ animationDelay: '2s' }}>
            <p className="text-2xl font-extrabold text-aqua-400 neon-text">5L</p>
            <p className="text-xs font-semibold uppercase text-mist-100/70">Family Size</p>
          </div>
        </div>
      </div>
    </section>
  );
}
