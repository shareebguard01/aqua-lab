import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Tag } from 'lucide-react';
import { CONTACTS, whatsappLink } from '@/lib/contacts';

type ClientItem = {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  description: string;
};

const clientCases: ClientItem[] = [
  {
    id: 'ringpharm',
    title: 'Ringpharm Pharmacy Group',
    category: 'Healthcare & Pharmacy',
    tag: 'Corporate Edition',
    image: '/client-1.png',
    description: 'Bespoke corporate bottled water with custom blue labeling and red cap detailing for pharmacy branches.',
  },
  {
    id: 'kad-volleyball',
    title: 'KAD Volleyball Championship',
    category: 'Tournament & Athletics',
    tag: 'Event Bottling',
    image: '/client-2.png',
    description: 'Custom tournament hydration featuring multi-sponsor crests and sleek obsidian black caps.',
  },
  {
    id: 'automotive-dealerships',
    title: 'AutoLab & Zambesi ARC',
    category: 'Luxury Automotive',
    tag: 'Corporate Edition',
    image: '/client-3.png',
    description: 'Premium executive bottled water for luxury automotive dealerships including BMW & Mercedes-Benz partner centres.',
  },
  {
    id: 'savages-padel',
    title: 'Supr Quik Savages Club',
    category: 'Fitness & Athletics',
    tag: 'Fitness & Wellness',
    image: '/client-4.png',
    description: 'High-performance sports hydration for padel and tennis clubs featuring custom sport push-pull caps.',
  },
  {
    id: 'fouche-luxury',
    title: 'Fouche Private Collection',
    category: 'Luxury & Hospitality',
    tag: 'Bespoke Branding',
    image: '/client-5.png',
    description: 'Ultra-clean minimalist branding with matte black cap detailing created for luxury private events.',
  },
  {
    id: 'weddings-galas',
    title: 'Weddings & Private Galas',
    category: 'Weddings & Celebrations',
    tag: 'Event Bottling',
    image: '/event-bottle.png',
    description: 'Personalized branded bottles for weddings, anniversaries, and exclusive private galas with custom foil finishes.',
  },
];

export function ClientShowcase() {
  const whatsappQuoteMsg = "Hi AquaLab, I'd like to get a quote for custom branded water bottles.";

  return (
    <section id="client-showcase" className="relative overflow-hidden bg-ink-900 py-20 sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      {/* Ambient background glows */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal neon-border-soft inline-flex items-center gap-2 rounded-full bg-ink-800/80 px-4.5 py-2 text-xs font-bold uppercase tracking-widest text-white backdrop-blur border border-white/20 shadow-neon">
            <Sparkles className="h-4 w-4 text-white" /> PROVEN QUALITY &amp; BESPOKE BRANDING
          </span>

          <h2 className="reveal display-head mt-5 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Trusted by Premier Brands &amp; Elite Events
          </h2>

          <p className="reveal mt-5 text-lg leading-relaxed text-slate-100 font-medium" data-delay="160">
            From luxury automotive dealerships to fitness studios and private celebrations, see how we bring custom branding to life on premium water bottles.
          </p>
        </div>

        {/* Interactive Portfolio Grid */}
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {clientCases.map((client, index) => (
            <article
              key={client.id}
              className="reveal card-interactive group relative overflow-hidden rounded-4xl border border-white/20 bg-ink-800/80 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/50 hover:shadow-glow"
              data-delay={String((index % 3) * 100)}
            >
              {/* Image container with scale & hover overlay */}
              <div className="relative h-72 w-full overflow-hidden bg-ink-950">
                <img
                  src={client.image}
                  alt={client.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Subtle dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />

                {/* Pill Tag */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-ink-950/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur shadow-neon">
                    <Tag className="h-3 w-3 text-white" /> {client.tag}
                  </span>
                </div>
              </div>

              {/* Card content */}
              <div className="p-7">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-200">
                  {client.category}
                </span>
                <h3 className="mt-2 text-2xl font-extrabold text-white">
                  {client.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-100 font-normal">
                  {client.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Bottling Enquiry Banner */}
        <div className="reveal mt-16 rounded-4xl border border-white/30 bg-gradient-to-r from-ink-800 via-ink-800/90 to-ink-950 p-8 sm:p-12 shadow-glow backdrop-blur" data-delay="200">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-neon">
                <ShieldCheck className="h-4 w-4 text-white" /> Turnkey Bottling Solutions
              </div>
              <h3 className="display-head mt-4 text-3xl sm:text-4xl lg:text-5xl text-white">
                Want Your Brand on Our Bottles?
              </h3>
              <p className="mt-3 text-base sm:text-lg text-slate-100 font-medium">
                Low minimum order quantities, fast turnaround, and custom label finishes (Gloss, Matte, Metallic).
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto shrink-0">
              <a
                href={whatsappLink(CONTACTS.nurina.phoneRaw, whatsappQuoteMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyan group inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full px-8 py-4 text-sm font-extrabold uppercase tracking-wide shadow-neon"
              >
                <MessageCircle className="h-5 w-5 text-ink-950" />
                Get Custom Batch Quote
              </a>
              <a
                href="#products"
                className="btn-neon inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-wide"
              >
                View Bottle Styles &amp; Sizes
                <ArrowRight className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
