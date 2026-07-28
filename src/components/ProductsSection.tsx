import { ArrowUpRight } from 'lucide-react';
import { WaterBottle, DispenserBottle } from './WaterBottle';
import { CONTACTS, whatsappLink } from '@/lib/contacts';

type Product = {
  name: string;
  size: string;
  desc: string;
  tag: string;
  variant: 'clear' | 'blue' | 'flavored' | 'carbonated';
  custom?: { label: string; sublabel?: string; customLabelColor?: string };
  bottle: 'small' | 'dispenser';
  badge?: string;
};

const products: Product[] = [
  { name: 'Still Water', size: '500ml', desc: 'Our everyday still water — pure, crisp and perfectly portable.', tag: 'Everyday', variant: 'blue', bottle: 'small', custom: { label: 'AquaLab', sublabel: '500ml' } },
  { name: 'Slim Bottle', size: '350ml', desc: 'Slim and light — ideal for handbags, lunchboxes and on-the-go sips.', tag: 'On-the-go', variant: 'clear', bottle: 'small', custom: { label: 'AquaLab', sublabel: '350ml' } },
  { name: 'Family Jug', size: '1.5L', desc: 'The family fridge favourite — enough for the table and the road.', tag: 'Family', variant: 'blue', bottle: 'small', custom: { label: 'AquaLab', sublabel: '1.5L' }, badge: 'Popular' },
  { name: 'Big Jug', size: '5L', desc: 'Bulk drinking water for the home — great value, great taste.', tag: 'Home Bulk', variant: 'clear', bottle: 'small', custom: { label: 'AquaLab', sublabel: '5L' } },
  { name: 'Dispenser Bottle', size: '18L', desc: 'Large-format bottle for water dispensers in offices and homes.', tag: 'Dispenser', variant: 'blue', bottle: 'dispenser', badge: 'Bulk' },
  { name: 'Flavored Water', size: '500ml', desc: 'A refreshing twist — lightly flavoured hydration with natural taste.', tag: 'Flavored', variant: 'flavored', bottle: 'small', custom: { label: 'AquaLab', sublabel: 'Citrus' }, badge: 'New' },
  { name: 'Carbonated Water', size: '500ml', desc: 'Crisp sparkling hydration — perfect bubbles, zero sugar.', tag: 'Sparkling', variant: 'carbonated', bottle: 'small', custom: { label: 'AquaLab', sublabel: 'Sparkling' } },
];

export function ProductsSection() {
  return (
    <section id="products" className="relative overflow-hidden bg-ink-900 py-28 sm:py-36 border-t border-zinc-800/60 my-6 sm:my-16">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Our Products</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Find Your Size
          </h2>
          <p className="reveal mt-4 text-lg text-slate-300" data-delay="160">
            From pocket-sized still water to office-grade 18L dispensers — plus flavoured and sparkling favourites.
          </p>
          <p className="reveal mt-2 text-xs font-bold uppercase tracking-wider text-slate-400 sm:hidden">
            ← Swipe to view sizes →
          </p>
        </div>

        {/* Horizontal scroll container on mobile, grid layout on tablet/desktop */}
        <div className="mt-14 flex snap-x snap-mandatory overflow-x-auto gap-5 pb-8 pt-2 no-scrollbar sm:grid sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 sm:overflow-x-visible">
          {products.map((p, i) => (
            <article
              key={p.name}
              className="reveal card-interactive group relative min-w-[82vw] max-w-[310px] shrink-0 snap-center overflow-hidden rounded-4xl border border-white/20 bg-ink-800/80 p-7 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/50 hover:shadow-glow sm:min-w-0 sm:max-w-none sm:shrink-1"
              data-delay={String((i % 3) * 100)}
            >
              {p.badge && (
                <span className="absolute right-5 top-5 z-10 rounded-full border border-white/40 bg-ink-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white neon-glow">
                  {p.badge}
                </span>
              )}

              {/* Bottle stage */}
              <div className="relative mx-auto flex h-52 sm:h-56 items-center justify-center">
                <div className="bottle-glow absolute h-40 w-40 sm:h-44 sm:w-44 rounded-full opacity-70 transition-all group-hover:scale-110 group-hover:opacity-90" />
                {p.bottle === 'dispenser' ? (
                  <DispenserBottle className="relative z-10 h-40 sm:h-44 w-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105" />
                ) : (
                  <WaterBottle
                    variant={p.variant}
                    className="relative z-10 h-44 sm:h-48 w-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-105"
                    label={p.custom?.label}
                    sublabel={p.custom?.sublabel}
                    customLabelColor={p.custom?.customLabelColor}
                  />
                )}
              </div>

              <div className="mt-2 flex items-center justify-between">
                <div>
                  <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                    {p.tag}
                  </span>
                  <h3 className="mt-3 text-2xl font-extrabold text-white">{p.name}</h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-300">{p.size}</p>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">{p.desc}</p>

              <a
                href={whatsappLink(
                  CONTACTS.muhammed.phoneRaw,
                  `Hi AquaLab, I'd like to enquire about the ${p.name} (${p.size}).`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide"
              >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}

          {/* CTA tile */}
          <div className="reveal card-interactive group relative min-w-[82vw] max-w-[310px] shrink-0 snap-center flex flex-col items-center justify-center overflow-hidden rounded-4xl border border-white/30 bg-gradient-to-br from-ink-800 to-ink-950 p-8 text-center text-white shadow-glow transition-all duration-500 hover:-translate-y-2 sm:min-w-0 sm:max-w-none sm:shrink-1" data-delay="200">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <h3 className="relative display-head text-3xl sm:text-4xl text-white">Can't See Your Size?</h3>
            <p className="relative mt-3 text-slate-300">We bottle for every need. Tell us what you're after and we'll make it happen.</p>
            <a
              href="#contact"
              className="btn-cyan relative mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-bold uppercase tracking-wide"
            >
              Custom Enquiry <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
