import { Cake, PartyPopper, Sparkles, ArrowRight, Gift, Users, Heart } from 'lucide-react';
import { preselectEnquiry } from './ContactSection';

const highlights = [
  {
    icon: Cake,
    title: 'Kids Birthday Bottles',
    desc: 'Custom labels with names, ages, themes and colours — a keepsake guests actually take home.',
  },
  {
    icon: PartyPopper,
    title: 'Party & Event Favours',
    desc: 'Corporate functions, school parties and celebrations elevated with branded AquaLab water.',
  },
  {
    icon: Heart,
    title: 'Weddings & Milestones',
    desc: 'Elegant custom labels for weddings, baby showers and anniversaries that match your décor.',
  },
];

const gallery = [
  {
    src: '/event-bottle.png',
    title: 'Celebration Label',
    caption: 'Pastel party themes & name stickers',
  },
  {
    src: '/client-4.png',
    title: 'Sports Day Vibes',
    caption: 'Team colours & event crests',
  },
  {
    src: '/client-2.png',
    title: 'Tournament Energy',
    caption: 'Bold graphics for big days',
  },
  {
    src: '/client-5.png',
    title: 'Elegant Occasions',
    caption: 'Minimal luxury for formal events',
  },
  {
    src: '/client-1.png',
    title: 'Brand Moments',
    caption: 'Corporate & community branding',
  },
  {
    src: '/aqualab_bottle_clean.png',
    title: 'Blank Canvas',
    caption: 'Your artwork, our premium bottle',
  },
];

export function BirthdaysSection() {
  const openPartyQuote = () => {
    preselectEnquiry('birthday');
    window.location.hash = 'contact';
  };

  return (
    <section
      id="birthdays"
      className="relative overflow-x-hidden overflow-hidden border-t border-zinc-800/60 bg-ink-900 py-20 text-white sm:py-28 my-4 sm:my-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-pink-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

      <div className="section-container relative">
        <div className="section-header">
          <span className="reveal glass-card neon-border-soft inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-neon">
            <Sparkles className="h-3.5 w-3.5 text-white" /> Kids · Parties · Celebrations
          </span>
          <h2 className="reveal display-head mt-5 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Kids Birthdays &amp; Event Parties
          </h2>
          <p className="reveal mt-4 max-w-2xl text-lg font-medium leading-relaxed text-slate-300" data-delay="160">
            Make every celebration unforgettable with custom AquaLab water labels — from kids&apos; birthday
            themes and school parties to corporate functions, weddings and special events. Vibrant designs,
            low minimums, and bottles guests love to take home.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <article
              key={item.title}
              className="reveal card-interactive glass-card rounded-4xl p-7 transform-gpu will-change-transform transition-all duration-500 hover:-translate-y-2 hover:border-slate-500/60"
              data-delay={String(i * 100)}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-600/60 bg-white/10 text-white shadow-neon">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white drop-shadow-sm">{item.title}</h3>
              <p className="mt-3 text-sm font-medium leading-relaxed text-slate-300">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-16">
          <div className="section-header">
            <h3 className="reveal display-head text-3xl text-white sm:text-4xl">
              Label Inspiration Gallery
            </h3>
            <p className="reveal mt-3 max-w-xl text-base font-medium text-slate-300" data-delay="80">
              Browse past custom labels and event styles — then tell us your theme and we&apos;ll design yours.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((g, i) => (
              <figure
                key={g.title}
                className="reveal glass-card group overflow-hidden rounded-3xl transform-gpu will-change-transform"
                data-delay={String((i % 3) * 80)}
              >
                <div className="relative flex h-56 items-center justify-center bg-ink-950/80 p-6">
                  <img
                    src={g.src}
                    alt={g.title}
                    className="h-full w-auto max-w-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="border-t border-slate-700/50 p-4 text-left">
                  <p className="font-bold text-slate-100">{g.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{g.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div className="reveal mt-14 flex flex-col items-center justify-center gap-4 text-center" data-delay="160">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-semibold text-slate-300">
            <span className="inline-flex items-center gap-2">
              <Gift className="h-4 w-4 text-white" /> Custom themes
            </span>
            <span className="inline-flex items-center gap-2">
              <Users className="h-4 w-4 text-white" /> Low minimums
            </span>
            <span className="inline-flex items-center gap-2">
              <PartyPopper className="h-4 w-4 text-white" /> Fast turnaround
            </span>
          </div>
          <button
            type="button"
            onClick={openPartyQuote}
            className="btn-cyan group inline-flex w-full max-w-md items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide shadow-neon sm:w-auto"
          >
            Get Custom Party Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
