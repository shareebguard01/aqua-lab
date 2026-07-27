import { MapPin, Filter, Tag, Leaf } from 'lucide-react';

const usps = [
  {
    icon: MapPin,
    title: 'Locally Sourced',
    desc: 'High-quality freshwater drawn from trusted South African sources, bottled close to home.',
  },
  {
    icon: Filter,
    title: 'Advanced Filtration',
    desc: 'Multi-stage filtration and treatment removes impurities while keeping the fresh, natural taste.',
  },
  {
    icon: Tag,
    title: 'Affordable Pricing',
    desc: 'Competitive, fair pricing on every size — clean water should never be out of reach.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Packaging',
    desc: 'Sustainable, recyclable bottles and responsible packaging that respects our water sources.',
  },
];

export function WhyAquaLab() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-800 to-ink-900" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-aqua-400 neon-text">Why AquaLab</p>
          <h2 className="reveal display-head mt-3 text-4xl text-mist-50 sm:text-5xl" data-delay="80">
            Purity You Can Trust
          </h2>
          <p className="reveal mt-4 text-lg text-mist-100/70" data-delay="160">
            Four promises in every bottle — from source to sip.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {usps.map((u, i) => (
            <div
              key={u.title}
              className="reveal group rounded-4xl border border-aqua-400/25 bg-ink-700/60 p-7 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-aqua-400/70 hover:shadow-glow"
              data-delay={String(i * 100)}
            >
              <span className="grid h-14 w-14 place-items-center rounded-2xl border border-aqua-400/50 bg-aqua-400/10 text-aqua-400 shadow-neon transition-transform group-hover:scale-110">
                <u.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-mist-50">{u.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-100/70">{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
