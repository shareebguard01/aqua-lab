import { ArrowRight, MessageCircle, Droplet, Leaf, ShieldCheck } from 'lucide-react';
import { AquaBackground } from './AquaBackground';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-ink-900 pt-28 pb-20 sm:pt-36 sm:pb-28 my-4 sm:my-8">
      <AquaBackground />

      {/* Top gradient wash */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:gap-14 px-5 sm:px-8 lg:grid-cols-2">
        {/* Copy */}
        <div className="relative z-10 text-center lg:text-left">
          <span className="reveal neon-border-soft inline-flex items-center gap-2 rounded-full bg-ink-800/80 px-4.5 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur border border-white/20 shadow-neon">
            <Droplet className="h-3.5 w-3.5 text-white" fill="currentColor" /> EST. 2024 · Johannesburg, South Africa
          </span>

          <h1 className="reveal display-head mt-6 text-5xl text-white sm:text-6xl lg:text-7xl xl:text-8xl" data-delay="80">
            Life Starts<br />
            <span className="text-white-gradient drop-shadow-[0_2px_10px_rgba(255,255,255,0.35)]">With Clean</span><br />
            Water
          </h1>

          <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-100 lg:mx-0 font-medium" data-delay="160">
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source. AquaLab brings
            Johannesburg fresh, lab-tested water — for your home, your office, and your
            biggest celebrations.
          </p>

          <div className="reveal mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start" data-delay="240">
            <a
              href="#products"
              className="btn-cyan group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide sm:w-auto shadow-neon"
            >
              Shop Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-neon inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide sm:w-auto"
            >
              <MessageCircle className="h-5 w-5 text-white" /> Request Bulk Quote
            </a>
          </div>

          {/* Trust strip */}
          <div className="reveal mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-100 lg:justify-start" data-delay="320">
            <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-white" /> Reverse Osmosis Purity</span>
            <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-white" /> SANAS Approved</span>
            <span className="inline-flex items-center gap-2"><Droplet className="h-4 w-4 text-white" fill="currentColor" /> Bottled at the Source</span>
          </div>
        </div>

        {/* Hero bottle stage */}
        <div className="relative flex items-center justify-center py-2 sm:py-6">
          {/* Soft ambient pure-white radial glow directly behind the bottle */}
          <div className="bottle-glow-pulse absolute h-[22rem] w-[22rem] sm:h-[40rem] sm:w-[40rem] rounded-full pointer-events-none" />

          {/* Enlarged bottle asset with prominent drop shadow, sleek -8 deg rotation & floating animation */}
          <div className="animate-float -rotate-8 transform transition-transform duration-500 hover:-rotate-6 w-full flex justify-center">
            <img
              src="/aqualab_bottle_clean.png"
              alt="AquaLab Water Bottle"
              className="relative z-10 w-auto h-[78vh] min-h-[380px] max-h-[580px] sm:max-h-none sm:h-[44rem] lg:h-[50rem] object-contain drop-shadow-[0_0_40px_rgba(255,255,255,0.45)] drop-shadow-[0_20px_50px_rgba(255,255,255,0.2)]"
            />
          </div>

          {/* floating mini badges */}
          <div className="absolute -left-2 top-10 hidden rounded-2xl glass px-4 py-3 shadow-glass sm:block animate-floatSlow border border-white/20">
            <p className="text-2xl font-extrabold text-white neon-text">100%</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Potable</p>
          </div>
          <div className="absolute -right-2 bottom-16 hidden rounded-2xl glass px-4 py-3 shadow-glass sm:block animate-float border border-white/20" style={{ animationDelay: '2s' }}>
            <p className="text-2xl font-extrabold text-white neon-text">500ml</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Still Water</p>
          </div>
        </div>
      </div>
    </section>
  );
}
