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

      <div className="section-container relative">
        <div className="section-header">
          <span className="reveal glass-card inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-neon">
            <Award className="h-4 w-4 text-white" /> Official Quality Standard
          </span>

          <h2 className="reveal display-head mt-4 text-4xl text-white sm:text-5xl lg:text-6xl" data-delay="80">
            Lab Quality &amp; Nutritional Specs
          </h2>

          <p className="reveal mt-4 text-lg font-medium text-slate-300" data-delay="160">
            Prepared Pure Water via Advanced Reverse Osmosis — Bottled at the Source. Every batch is rigorously tested for maximum safety and crisp taste.
          </p>
        </div>

        <div className="reveal glass-card mx-auto mt-12 max-w-4xl rounded-4xl p-8 sm:p-10" data-delay="200">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:text-left">
              <div className="grid h-16 w-16 shrink-0 place-items-center rounded-3xl border border-slate-600/60 bg-white/10 text-white shadow-neon">
                <ShieldCheck className="h-9 w-9 text-white" />
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
                  <h3 className="text-xl font-extrabold text-white">SANAS Compliant</h3>
                  <span className="rounded-full border border-slate-600/60 bg-white/20 px-3 py-0.5 text-xs font-bold uppercase text-white">
                    National Standard
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  South African National Accreditation System — Batch Certified &amp; Continuously Tested.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-slate-700/50 bg-slate-950/60 px-5 py-3 text-sm font-extrabold text-white shadow-soft">
              <Sparkles className="h-5 w-5 text-white" />
              <span>100% Potable &amp; Safe</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {labSpecs.map((spec, index) => (
            <div
              key={spec.label}
              className="reveal card-interactive glass-card group relative flex flex-col justify-between rounded-3xl p-7 transform-gpu will-change-transform transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-500/60"
              data-delay={String(index * 100)}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-300">
                    {spec.label}
                  </span>
                  <CheckCircle2 className="h-4 w-4 text-white opacity-90" />
                </div>

                <div className="mt-4 flex items-baseline gap-2">
                  <span className="display-head text-3xl text-white sm:text-4xl">
                    {spec.value}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-700/50 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-100">
                  {spec.status}
                </span>
                {spec.note && (
                  <span className="text-[11px] font-semibold text-slate-300">
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
