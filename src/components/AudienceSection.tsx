import { Home, Briefcase, Sparkles, ArrowUpRight } from 'lucide-react';
import { CONTACTS, whatsappLink } from '@/lib/contacts';

const cards = [
  {
    icon: Home,
    title: 'For Home',
    desc: 'Everyday bottled water for the whole family — from 500ml grab-and-go bottles to 5L fridge-friendly jugs.',
    tag: '500ml – 5L',
    cta: 'Shop Bottles',
    href: '#products',
  },
  {
    icon: Briefcase,
    title: 'For Business',
    desc: 'Reliable bulk supply and 18L dispenser bottles delivered to your office. Keep your team hydrated, week in, week out.',
    tag: 'Bulk · 18L Dispensers',
    cta: 'WhatsApp Bulk Quote',
    href: whatsappLink(
      CONTACTS.muhammed.phoneRaw,
      "Hi AquaLab, I'd like a bulk supply quote for our business."
    ),
  },
  {
    icon: Sparkles,
    title: 'For Events',
    desc: 'Custom-labeled AquaLab water for weddings, conferences and corporate gifting — your brand, on every bottle.',
    tag: 'Custom Labels',
    cta: 'Get Event Quote',
    href: '#custom-labels',
  },
];

export function AudienceSection() {
  return (
    <section className="relative bg-ink-900 py-24 sm:py-32 border-t border-zinc-800/60">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Water for Everyone</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            However You Pour It
          </h2>
          <p className="reveal mt-4 text-lg text-zinc-300" data-delay="160">
            From your morning glass to a boardroom dispenser to a thousand wedding favours — there's an AquaLab for that.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {cards.map((c, i) => (
            <article
              key={c.title}
              className="reveal group relative overflow-hidden rounded-4xl border border-white/20 bg-ink-800/80 p-8 shadow-glass backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-white/50 hover:shadow-glow"
              data-delay={String(i * 120)}
            >
              {/* corner blob */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />

              <div className="relative">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/40 bg-white/10 text-white shadow-neon transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <c.icon className="h-7 w-7" />
                </span>

                <h3 className="display-head mt-6 text-3xl text-white">{c.title}</h3>
                <span className="mt-2 inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  {c.tag}
                </span>
                <p className="mt-4 text-base leading-relaxed text-zinc-400">{c.desc}</p>

                <a
                  href={c.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-white transition-colors group-hover:text-zinc-200"
                >
                  {c.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
