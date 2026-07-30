import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';

type SpecItem = {
  label: string;
  value: string;
  status: string;
  note?: string;
};

const labSpecs: SpecItem[] = [
  { label: 'Purification Method', value: 'Reverse Osmosis', status: 'Multi-Stage Micro-Filtration' },
  { label: 'pH Level', value: '7.01', status: 'Perfectly Balanced', note: 'Neutral & Refreshing' },
  { label: 'Chloride (Cl-)', value: '< 3.00 mg/L', status: 'Ultra Low Pure' },
  { label: 'Fluoride (F-)', value: '< 0.10 mg/L', status: 'Trace Safe' },
  { label: 'Calcium (Ca2+)', value: '< 0.50 mg/L', status: 'Optimal Clarity' },
];

export function LabSpecsSection() {
  return (
    <section id="quality" className="relative overflow-hidden bg-ink-900 py-20 text-white sm:py-28 border-t border-zinc-800/60 my-4 sm:my-8">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink-800/80 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur shadow-neon">
            <Award className="h-4 w-4 text-white" /> Official Quality Standard
          </span>

          <h2 className="reveal display-head mt-4 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Lab Quality &amp; Nutritional Specs
          </h2>

          <p className="reveal mt-4 text-lg text-slate-100 font-medium" data-delay="160">
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source. Every batch is rigorously tested for maximum safety and crisp taste.
          </p>
        </div>

        {/* Highlight SANAS Badge */}
        <div className="reveal mt-12 mx-auto max-w-4xl rounded-4xl border border-white/30 bg-gradient-to-r from-ink-800 via-ink-800/95 to-ink-800 p-8 shadow-glow backdrop-blur sm:p-10" data-delay="200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5 text-center sm:text-left">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl border border-white/40 bg-white/10 text-white shadow-neon">
                <ShieldCheck className="h-9 w-9 text-white" />
              </div>
              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2.5">
                  <h3 className="text-xl font-extrabold text-white">SANAS Approved</h3>
                  <span className="rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold uppercase text-white border border-white/40">
                    National Standard
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-100 font-medium">
                  South African National Accreditation System — Batch Certified &amp; Continuously Tested.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-ink-900/80 px-5 py-3 text-sm font-extrabold text-white shadow-soft">
              <Sparkles className="h-5 w-5 text-white" />
              <span>100% Potable &amp; Safe</span>
            </div>
          </div>
        </div>

        {/* Lab Breakdown Grid */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className="reveal card-interactive group relative flex flex-col justify-between rounded-3xl border border-white/20 bg-ink-800/80 p-7 shadow-glass backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/50 hover:shadow-glow"
              data-delay={String(index * 100)}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-200 max-sm:text-[#b0b0b0]">
                    {spec.label}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-white opacity-90" />
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="display-head text-3xl sm:text-4xl text-white">
                    {spec.value}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
                  {spec.status}
                </span>
                {spec.note && (
                  <span className="text-[11px] font-semibold text-slate-200 max-sm:text-[#b0b0b0]">
                    {spec.note}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
