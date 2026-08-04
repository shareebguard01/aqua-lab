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
      <div className="section-container relative">
        <div className="section-header">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Why AquaLab</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Purity You Can Trust
          </h2>
          <p className="reveal mt-4 text-lg font-medium text-slate-300" data-delay="160">
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source.
          </p>
        </div>

        <div className="reveal glass-card mx-auto mt-10 max-w-3xl rounded-3xl p-6" data-delay="200">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-slate-600/60 bg-white/10 text-white shadow-neon">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <span className="text-sm font-extrabold uppercase tracking-widest text-white">SANAS Approved</span>
                  <span className="rounded-full border border-slate-600/60 bg-white/20 px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">Certified</span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-300">South African National Accreditation System Standards Compliant</p>
              </div>
            </div>
            <div className="flex items-center gap-2 border-t border-slate-700/50 pt-3 text-xs font-bold uppercase tracking-wider text-slate-300 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <ShieldCheck className="h-4 w-4 shrink-0 text-white" />
              <span>Lab Quality Assured</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="reveal card-interactive glass-card group rounded-4xl p-8 transform-gpu will-change-transform transition-all duration-500 hover:-translate-y-2 hover:border-slate-500/60"
              data-delay={String(i * 100)}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-slate-600/60 bg-white/10 text-white shadow-neon transition-transform group-hover:scale-110">
                <u.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white drop-shadow-sm">{u.title}</h3>
              <p className="mt-2 text-sm font-normal leading-relaxed text-slate-300">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
