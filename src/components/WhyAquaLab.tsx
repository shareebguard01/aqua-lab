import { MapPin, Filter, Tag, Leaf, Award, ShieldCheck } from 'lucide-react';

const usps = [
  {
    icon: MapPin,
    title: 'Bottled at the Source',
    desc: 'Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source in Johannesburg.',
  },
  {
    icon: Filter,
    title: 'Reverse Osmosis Purity',
    desc: 'Multi-stage Reverse Osmosis purification removes impurities down to micro-levels for absolute safety.',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    desc: 'Competitive, fair pricing on every size — clean, pure water should never be out of reach.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Packaging',
    desc: 'Sustainable, recyclable bottles and responsible packaging that respects our environment.',
  },
];

export function WhyAquaLab() {
  return (
    <section className="relative bg-ink-900 py-20 sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 to-ink-900" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Why AquaLab</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Purity You Can Trust
          </h2>
          <p className="reveal mt-4 text-lg text-slate-100 font-medium" data-delay="160">
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source.
          </p>
        </div>

        {/* SANAS Certification Badge Strip */}
        <div className="reveal mt-10 mx-auto max-w-3xl rounded-3xl border border-white/30 bg-gradient-to-r from-ink-800 via-ink-800/90 to-ink-800 p-6 shadow-glow backdrop-blur" data-delay="200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-white/40 bg-white/10 text-white shadow-neon">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-white">SANAS Approved</span>
                  <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white border border-white/30">Certified</span>
                </div>
                <p className="mt-1 text-sm text-slate-100 font-medium">South African National Accreditation System Standards Compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-100 border-t sm:border-t-0 sm:border-l border-white/15 pt-3 sm:pt-0 sm:pl-6">
              <ShieldCheck className="h-4 w-4 text-white shrink-0" />
              <span>Lab Quality Assured</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="reveal card-interactive group rounded-4xl border border-white/20 bg-ink-800/80 p-8 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/50 hover:shadow-glow"
              data-delay={String(i * 100)}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-white/40 bg-white/10 text-white shadow-neon transition-transform group-hover:scale-110">
                <u.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-100 font-normal">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
