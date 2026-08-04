import { ShieldCheck, Palette, Car, Hand, Sparkles, Megaphone, Award, MessageCircle, CheckCircle2 } from 'lucide-react';
import { CONTACTS, whatsappLink } from '@/lib/contacts';

const DEALERSHIP_WA_MSG =
  "Hello AquaLab team! I'm interested in custom-branded water bottles for our dealership showroom/handovers.";

const valueProps = [
  {
    icon: ShieldCheck,
    title: 'Quality You Can Trust',
    desc: 'Just as your dealership is committed to delivering quality vehicles, AquaLab is committed to delivering premium purified water. Our rigorous purification process ensures every bottle is clean, refreshing, and produced to the highest standards.',
  },
  {
    icon: Palette,
    title: 'Pick a Design',
    desc: "Choose a bottle design that reflects your dealership's identity. From your logo and brand colors to your contact details, every bottle is customized to create a professional and lasting impression.",
  },
  {
    icon: Car,
    title: 'The Perfect Finish',
    desc: 'The vehicle handover is one of the most memorable moments in the buying journey. Complement the experience with a premium bottle of AquaLab water, adding a small but meaningful touch that leaves a lasting impression on every customer.',
  },
];

const whyItWorks = [
  {
    icon: Hand,
    title: "Keeps Your Brand in Customers' Hands",
    desc: 'Your logo stays visible beyond the showroom.',
  },
  {
    icon: Sparkles,
    title: 'Creates a Lasting Impression',
    desc: 'A simple gesture makes a big difference.',
  },
  {
    icon: Car,
    title: 'Elevates Vehicle Handover',
    desc: 'Adds a premium touch to every car delivery.',
  },
  {
    icon: CheckCircle2,
    title: 'Enhances Customer Experience',
    desc: 'Makes every visit feel welcoming & professional.',
  },
  {
    icon: Megaphone,
    title: 'Promotes Your Dealership',
    desc: 'Every bottle serves as a mobile advertisement.',
  },
  {
    icon: Award,
    title: 'Reinforces Brand Quality',
    desc: 'Shows attention to detail & professionalism.',
  },
];

export function DealershipSection() {
  return (
    <section
      id="dealership"
      className="relative overflow-x-hidden overflow-hidden bg-ink-900 py-20 text-white sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -left-24 top-20 h-80 w-80 rounded-full bg-cyan-400/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="section-container relative">
        <div className="section-header">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">
            B2B &amp; Dealership Solutions
          </p>
          <h2
            className="reveal display-head mt-3 text-4xl text-white sm:text-5xl lg:text-6xl"
            data-delay="80"
          >
            Elevate Your Customer Experience
          </h2>
          <p className="reveal mt-4 max-w-2xl text-lg font-medium text-slate-300" data-delay="160">
            Custom Branded Water for Dealerships &amp; Showrooms
          </p>
        </div>

        {/* Value props */}
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {valueProps.map((item, i) => (
            <article
              key={item.title}
              className="reveal card-interactive glass-card group transform-gpu will-change-transform rounded-4xl p-7 sm:p-8 transition-all duration-500 hover:-translate-y-2 hover:border-slate-500/60"
              data-delay={String(i * 100)}
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-slate-600/60 bg-white/10 text-white shadow-neon">
                <item.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-extrabold text-white drop-shadow-sm">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 font-medium">{item.desc}</p>
            </article>
          ))}
        </div>

        {/* Why it works */}
        <div className="mt-16">
          <div className="section-header">
            <h3 className="reveal display-head text-3xl text-white sm:text-4xl">
              Why Custom Branded Water Works
            </h3>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyItWorks.map((item, i) => (
              <div
                key={item.title}
                className="reveal glass-card flex gap-4 rounded-3xl p-5 transform-gpu will-change-transform"
                data-delay={String(80 + i * 60)}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-slate-600/60 bg-white/10 text-white">
                  <item.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 text-left">
                  <p className="font-bold text-slate-100">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-14 flex flex-col items-center justify-center text-center" data-delay="200">
          <a
            href={whatsappLink(CONTACTS.nurina.phoneRaw, DEALERSHIP_WA_MSG)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyan group inline-flex w-full max-w-md items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide shadow-neon sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Order Custom Dealership Water
          </a>
          <p className="mt-4 text-sm font-medium text-slate-300">
            Chat with {CONTACTS.nurina.name} on WhatsApp — typically replies within the hour.
          </p>
        </div>
      </div>
    </section>
  );
}
