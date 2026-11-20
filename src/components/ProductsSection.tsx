import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WaterBottle } from './WaterBottle';
import { CONTACTS, whatsappLink } from '@/lib/contacts';

type Edition = 'classic' | 'primo';

type Product = {
  name: string;
  size: string;
  desc: string;
  tag: string;
  variant: 'clear' | 'blue' | 'flavored' | 'carbonated';
  custom?: { label: string; sublabel?: string; customLabelColor?: string };
  bottle: 'small' | 'dispenser';
  badge?: string;
  image?: string;
  editionKey?: '330' | '500' | '1l';
  editionScoped?: boolean;
};

const classicImages: Record<'330' | '500' | '1l', string> = {
  '330': '/images/classic-330ml.jpg',
  '500': '/images/classic-500ml.jpg',
  '1l': '/images/classic-1l.jpg',
};

const primoImages: Record<'330' | '500' | '1l', string> = {
  '330': '/images/primo-330ml.jpg',
  '500': '/images/primo-500ml.jpg',
  '1l': '/images/primo-1l.jpg',
};

const editionProducts: Product[] = [
  {
    name: '330ml',
    size: '330ml',
    desc: 'Compact and light — ideal for handbags, lunchboxes and on-the-go sips.',
    tag: 'Everyday',
    variant: 'clear',
    bottle: 'small',
    editionKey: '330',
    editionScoped: true,
    custom: { label: 'AquaLab', sublabel: '330ml' },
  },
  {
    name: '500ml',
    size: '500ml',
    desc: 'Our everyday still water — pure, crisp and perfectly portable.',
    tag: 'Best Seller',
    variant: 'blue',
    bottle: 'small',
    editionKey: '500',
    editionScoped: true,
    custom: { label: 'AquaLab', sublabel: '500ml' },
  },
  {
    name: '1.0L',
    size: '1.0L',
    desc: 'The family fridge favourite — enough for the table and the road.',
    tag: 'Family',
    variant: 'blue',
    bottle: 'small',
    editionKey: '1l',
    editionScoped: true,
    badge: 'Popular',
    custom: { label: 'AquaLab', sublabel: '1.0L' },
  },
];

const extraProducts: Product[] = [
  {
    name: 'Big Jug',
    size: '5L',
    desc: 'Bulk drinking water for the home — great value, great taste.',
    tag: 'Home Bulk',
    variant: 'clear',
    bottle: 'small',
    custom: { label: 'AquaLab', sublabel: '5L' },
    image: '/5l-jug.png',
  },
  {
    name: 'Dispenser Bottle',
    size: '18L',
    desc: 'Large-format bottle for water dispensers in offices and homes.',
    tag: 'Dispenser',
    variant: 'blue',
    bottle: 'dispenser',
    badge: 'Bulk',
    image: '/images/dispenser-18l.jpg',
  },
  {
    name: 'Carbonated Water',
    size: '500ml',
    desc: 'Crisp sparkling hydration — perfect bubbles, zero sugar. Available as custom & personalized orders only.',
    tag: 'Sparkling',
    variant: 'carbonated',
    bottle: 'small',
    badge: 'Custom & Personalized Orders Only',
    custom: { label: 'AquaLab', sublabel: 'Sparkling' },
  },
];

function resolveProduct(p: Product, edition: Edition): Product {
  if (!p.editionScoped || !p.editionKey) return p;
  const images = edition === 'primo' ? primoImages : classicImages;
  const editionLabel = edition === 'primo' ? 'Primo' : 'Classic';
  return {
    ...p,
    image: images[p.editionKey],
    tag: edition === 'primo' ? 'Primo Edition' : p.tag,
    desc:
      edition === 'primo'
        ? `${p.desc} Primo Edition features a distinctive premium cap and sleek bottle mold.`
        : p.desc,
    custom: {
      label: 'AquaLab',
      sublabel: `${p.size} · ${editionLabel}`,
    },
  };
}

const cardShell =
  'card-interactive glass-card group relative w-[82vw] max-w-[340px] shrink-0 snap-center overflow-hidden rounded-4xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-slate-500/60 sm:w-full sm:max-w-none sm:min-w-0';

function ProductVisual({ product, edition }: { product: Product; edition: Edition }) {
  const alt = product.editionScoped
    ? `AquaLab ${product.name} ${edition} edition (${product.size})`
    : `AquaLab ${product.name} (${product.size})`;

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
      {product.image ? (
        <img
          src={product.image}
          alt={alt}
          className="h-full w-full object-cover object-center [mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_at_center,black_65%,transparent_100%)]"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <WaterBottle
            variant={product.variant}
            className="h-[78%] w-auto drop-shadow-2xl"
            label={product.custom?.label}
            sublabel={product.custom?.sublabel}
            customLabelColor={product.custom?.customLabelColor}
          />
        </div>
      )}
    </div>
  );
}

export function ProductsSection() {
  const [edition, setEdition] = useState<Edition>('classic');
  const carouselRef = useRef<HTMLDivElement>(null);
  const catalog = [
    ...editionProducts.map((p) => resolveProduct(p, edition)),
    ...extraProducts,
  ];

  useEffect(() => {
    carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  }, [edition]);

  return (
    <section id="products" className="relative bg-ink-900 py-20 sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -top-20 right-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="section-container relative">
        <div className="section-header">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Our Products</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Find Your Size
          </h2>
          <p className="reveal mt-4 text-lg font-medium text-slate-300" data-delay="160">
            Choose Classic or Primo Edition — then pick your size from 330ml to bulk dispensers.
          </p>
        </div>

        {/* Classic / Primo edition toggle */}
        <div className="reveal mt-10 flex justify-center" data-delay="180">
          <div
            className="inline-flex rounded-full border border-slate-700/60 bg-slate-950/70 p-1.5 shadow-xl backdrop-blur-md"
            role="tablist"
            aria-label="Bottle edition"
          >
            {([
              { id: 'classic' as const, label: 'Classic Edition' },
              { id: 'primo' as const, label: 'Primo Edition' },
            ]).map((opt) => (
              <button
                key={opt.id}
                type="button"
                role="tab"
                aria-selected={edition === opt.id}
                onClick={() => {
                  setEdition(opt.id);
                  carouselRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
                }}
                className={`rounded-full px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider transition-all sm:px-7 sm:text-sm ${
                  edition === opt.id
                    ? 'bg-white text-ink-950 shadow-neon'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <p className="reveal mt-4 text-center text-sm font-medium text-slate-400" data-delay="200">
          {edition === 'primo'
            ? 'Primo — premium cap, sleek mold, elevated finish.'
            : 'Classic — our signature bottle look for everyday hydration.'}
        </p>
        <p className="reveal mt-2 text-center text-xs font-bold uppercase tracking-wider text-slate-300 sm:hidden">
          ← Swipe to view sizes →
        </p>

        <div
          ref={carouselRef}
          className="mt-10 flex min-w-0 w-full max-w-full snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-8 pt-2 no-scrollbar touch-pan-x sm:grid sm:grid-cols-2 sm:gap-7 sm:overflow-x-visible sm:touch-auto lg:grid-cols-3"
        >
          {catalog.map((p) => (
            <article
              key={`${edition}-${p.name}-${p.size}`}
              className={cardShell}
            >
              {p.badge && (
                <span className="absolute right-4 top-4 z-10 max-w-[9.5rem] rounded-full border border-white/40 bg-ink-950 px-2.5 py-1 text-center text-[10px] font-bold uppercase leading-tight tracking-wide text-white neon-glow sm:max-w-[11rem] sm:text-xs">
                  {p.badge}
                </span>
              )}

              <ProductVisual product={p} edition={edition} />

              <div className="mt-2">
                <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-white">
                  {p.tag}
                </span>
                <h3 className="display-head mt-3 text-2xl text-white">{p.name}</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-slate-100">{p.size}</p>
              </div>

              <p className="mt-3 text-sm font-normal leading-relaxed text-slate-300">{p.desc}</p>

              <a
                href={whatsappLink(
                  CONTACTS.muhammed.whatsappRaw,
                  `Hi AquaLab, I'd like to enquire about the ${p.name} (${p.size})${p.editionScoped ? ` — ${edition === 'primo' ? 'Primo' : 'Classic'} Edition` : ''}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-extrabold uppercase tracking-wide"
              >
                Enquire
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}

          <div className={`${cardShell} flex flex-col items-center justify-center text-center text-white`}>
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
            <h3 className="display-head relative text-3xl text-white sm:text-4xl">Can't See Your Size?</h3>
            <p className="relative mt-3 font-medium text-slate-300">
              We bottle for every need. Tell us what you're after and we'll make it happen.
            </p>
            <a
              href="#contact"
              className="btn-cyan relative mt-6 inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-extrabold uppercase tracking-wide shadow-neon"
            >
              Custom Enquiry <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
