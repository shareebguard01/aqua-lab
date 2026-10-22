import { ArrowRight, MessageCircle, Droplet, Leaf, ShieldCheck } from 'lucide-react';
import { AquaBackground } from './AquaBackground';

export function Hero() {
  return (
    <section id="hero" className="relative overflow-x-hidden overflow-hidden bg-ink-900 pt-28 pb-20 sm:pt-36 sm:pb-28 my-4 sm:my-8">
      <AquaBackground />

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />

      <div className="section-container grid items-center gap-8 lg:gap-12 lg:grid-cols-2">
        {/* Copy — center-aligned on all sizes */}
        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center justify-center text-center lg:mx-0 lg:max-w-none">
          <span className="reveal neon-border-soft glass-card mx-auto inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-neon">
            <Droplet className="h-3.5 w-3.5 shrink-0 text-white" fill="currentColor" /> EST. 2024 · Johannesburg, South Africa
          </span>

          <h1
            className="reveal display-head mt-5 w-full text-center text-4xl text-white sm:mt-6 sm:text-6xl lg:text-7xl xl:text-8xl"
            data-delay="80"
          >
            Life Starts<br />
            <span className="text-cyan-accent">With Clean</span><br />
            Water
          </h1>

          <p
            className="reveal mx-auto mt-6 w-full max-w-xl text-center text-lg font-medium leading-relaxed text-slate-100"
            data-delay="160"
          >
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source. AquaLab brings
            Johannesburg fresh, lab-tested water — for your home, your office, and your
            biggest celebrations.
          </p>

          <div
            className="reveal mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
            data-delay="240"
          >
            <a
              href="#products"
              className="btn-cyan group inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide shadow-neon sm:w-auto sm:max-w-none"
            >
              Shop Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="btn-neon inline-flex w-full max-w-xs items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide sm:w-auto sm:max-w-none"
            >
              <MessageCircle className="h-5 w-5 text-white" /> Request Bulk Quote
            </a>
          </div>

          <div
            className="reveal mt-9 flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-slate-300"
            data-delay="320"
          >
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-white" /> Reverse Osmosis Purity
            </span>
            <span className="inline-flex items-center gap-2">
              <Leaf className="h-4 w-4 text-white" /> SANAS Compliant
            </span>
            <span className="inline-flex items-center gap-2">
              <Droplet className="h-4 w-4 text-white" fill="currentColor" /> Bottled at the Source
            </span>
          </div>
        </div>

        {/* Hero bottle */}
        <div className="hero-bottle-stage relative flex w-full items-center justify-center overflow-visible py-2 sm:py-8 lg:py-6">
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
            <div className="bottle-glow-cyan-outer h-[28rem] w-[28rem] rounded-full sm:h-[46rem] sm:w-[46rem]" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center" aria-hidden>
            <div className="bottle-glow-cyan h-[24rem] w-[24rem] rounded-full sm:h-[40rem] sm:w-[40rem]" />
          </div>

          <div className="animate-float relative z-10 flex w-full transform-gpu will-change-transform justify-center">
            <div className="-rotate-8 transition-transform duration-500 hover:-rotate-6">
              <img
                src="/aqualab_bottle_clean.png"
                alt="AquaLab Water Bottle"
                className="hero-bottle-img relative z-10 w-auto max-w-[98vw] object-contain sm:h-[48rem] sm:max-h-none lg:h-[54rem] drop-shadow-[0_0_45px_rgba(0,229,255,0.35)] drop-shadow-[0_24px_60px_rgba(0,180,220,0.2)]"
              />
            </div>
          </div>

          <div className="absolute -left-2 top-10 hidden rounded-2xl glass-card px-4 py-3 sm:block animate-floatSlow">
            <p className="text-2xl font-extrabold text-white neon-text">100%</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Potable</p>
          </div>
          <div
            className="absolute -right-2 bottom-16 hidden rounded-2xl glass-card px-4 py-3 sm:block animate-float"
            style={{ animationDelay: '2s' }}
          >
            <p className="text-2xl font-extrabold text-white neon-text">500ml</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">Still Water</p>
          </div>
        </div>
      </div>
    </section>
  );
}
