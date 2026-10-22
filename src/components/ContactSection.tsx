import { useEffect, useState, type FormEvent } from 'react';
import { MessageCircle, Send, Loader2, CheckCircle2, AlertCircle, Mail, MapPin, Phone, Upload, PhoneCall } from 'lucide-react';
import { CONTACTS, buildWebsiteEnquiryMessage, telLink, whatsappLink } from '@/lib/contacts';

type EnquiryType = 'home' | 'bulk' | 'event' | 'birthday' | 'other';
type Representative = 'muhammed' | 'nurina';

const enquiryTypes: { value: EnquiryType; label: string }[] = [
  { value: 'home', label: 'Home / Personal' },
  { value: 'bulk', label: 'Bulk / Business' },
  { value: 'event', label: 'Custom Event Labels' },
  { value: 'birthday', label: 'Kids Birthday / Event' },
  { value: 'other', label: 'Something Else' },
];

const ENQUIRY_PRESELECT_KEY = 'aqualab_enquiry_type';

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [fileName, setFileName] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    enquiry_type: 'home' as EnquiryType,
    representative: 'muhammed' as Representative,
    message: '',
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  useEffect(() => {
    const applyPreselect = () => {
      try {
        const stored = sessionStorage.getItem(ENQUIRY_PRESELECT_KEY) as EnquiryType | null;
        if (stored && enquiryTypes.some((t) => t.value === stored)) {
          setForm((f) => ({ ...f, enquiry_type: stored }));
          setStatus('idle');
          sessionStorage.removeItem(ENQUIRY_PRESELECT_KEY);
        }
      } catch {
        /* ignore */
      }

      const hash = window.location.hash;
      if (hash.includes('enquiry=birthday') || hash === '#contact-birthday') {
        setForm((f) => ({ ...f, enquiry_type: 'birthday' }));
      }
    };

    applyPreselect();
    window.addEventListener('hashchange', applyPreselect);
    return () => window.removeEventListener('hashchange', applyPreselect);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const contact = [email, phone].filter(Boolean).join(' · ') || 'Not provided';
    const enquiryLabel =
      enquiryTypes.find((t) => t.value === form.enquiry_type)?.label ?? form.enquiry_type;
    const message = form.message.trim();
    const representative =
      form.representative === 'muhammed' ? CONTACTS.muhammed.name : CONTACTS.nurina.name;

    const text = buildWebsiteEnquiryMessage({
      name,
      contact,
      enquiryLabel,
      message,
      representative,
      attachmentName: fileName || undefined,
    });

    let opened: Window | null = null;

    if (form.representative === 'muhammed') {
      const url = whatsappLink(CONTACTS.muhammed.whatsappRaw, text);
      opened = window.open(url, '_blank', 'noopener,noreferrer');
      if (!opened) {
        setStatus('error');
        setErrorMsg(
          'Your browser blocked the WhatsApp window. Please allow pop-ups, or tap Muhammed\'s WhatsApp card on the left.'
        );
        return;
      }
    } else {
      // Nurina — designated email line (primary) with WhatsApp as secondary chat channel
      const mail = `mailto:${CONTACTS.nurina.email}?subject=${encodeURIComponent(
        `AquaLab Enquiry — ${enquiryLabel}`
      )}&body=${encodeURIComponent(text)}`;
      window.location.href = mail;
      opened = window.open(whatsappLink(CONTACTS.nurina.phoneRaw, text), '_blank', 'noopener,noreferrer');
    }

    setForm({
      name: '',
      email: '',
      phone: '',
      enquiry_type: 'home',
      representative: 'muhammed',
      message: '',
    });
    setFileName('');
    setStatus('success');
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-zinc-800/60 bg-ink-900 py-20 text-white sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="section-container relative">
        <div className="section-header">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Get In Touch</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Let's Talk Water
          </h2>
          <p className="reveal mt-4 text-lg font-medium text-slate-300" data-delay="160">
            Questions, bulk orders or a custom label quote — we usually reply within the hour.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <div className="reveal lg:col-span-2" data-delay="80">
            <div className="card-interactive glass-card rounded-4xl p-7">
              <h3 className="text-xl font-extrabold text-white">Reach the founders</h3>
              <p className="mt-2 text-sm font-medium text-slate-300">
                Call Muhammed directly, or WhatsApp our primary line.
              </p>

              <div className="mt-6 space-y-4">
                {/* Muhammed — call */}
                <a
                  href={telLink(CONTACTS.muhammed.phoneRaw)}
                  className="group flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-950/60 p-4 transition-all hover:-translate-y-0.5 hover:border-slate-500/60"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-slate-600/60 bg-white/10 text-white">
                    <PhoneCall className="h-6 w-6" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-white">{CONTACTS.muhammed.name}</p>
                    <p className="text-sm font-medium text-slate-300">Call only · {CONTACTS.muhammed.phone}</p>
                  </div>
                  <span className="ml-auto text-xs font-extrabold uppercase tracking-wide text-white">Call</span>
                </a>

                {/* Primary WhatsApp */}
                <a
                  href={whatsappLink(
                    CONTACTS.muhammed.whatsappRaw,
                    "Hi AquaLab! I'd like to chat about your water."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-950/60 p-4 transition-all hover:-translate-y-0.5 hover:border-slate-500/60"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-soft transition-transform group-hover:scale-110">
                    <MessageCircle className="h-6 w-6" fill="white" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-white">Primary WhatsApp</p>
                    <p className="text-sm font-medium text-slate-300">
                      {CONTACTS.muhammed.name} · +27 {CONTACTS.muhammed.whatsapp}
                    </p>
                  </div>
                  <span className="ml-auto text-xs font-extrabold uppercase tracking-wide text-[#25D366]">Chat</span>
                </a>

                {/* Nurina WhatsApp */}
                <a
                  href={whatsappLink(
                    CONTACTS.nurina.phoneRaw,
                    "Hi AquaLab! I'd like to chat about your water."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-3xl border border-slate-700/50 bg-slate-950/60 p-4 transition-all hover:-translate-y-0.5 hover:border-slate-500/60"
                >
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-soft transition-transform group-hover:scale-110">
                    <MessageCircle className="h-6 w-6" fill="white" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-bold text-white">{CONTACTS.nurina.name}</p>
                    <p className="text-sm font-medium text-slate-300">WhatsApp · {CONTACTS.nurina.phone}</p>
                  </div>
                  <span className="ml-auto text-xs font-extrabold uppercase tracking-wide text-[#25D366]">Chat</span>
                </a>
              </div>

              <div className="mt-7 space-y-3 border-t border-slate-700/50 pt-6 text-sm">
                <a
                  href={`mailto:${CONTACTS.email}`}
                  className="flex items-center gap-3 font-medium text-slate-100 transition-colors hover:text-white"
                >
                  <Mail className="h-5 w-5 text-white" /> {CONTACTS.email}
                </a>
                <a
                  href={telLink(CONTACTS.muhammed.phoneRaw)}
                  className="flex items-center gap-3 font-medium text-slate-100 transition-colors hover:text-white"
                >
                  <Phone className="h-5 w-5 text-white" /> {CONTACTS.muhammed.name}: {CONTACTS.muhammed.phone} (call)
                </a>
                <p className="flex items-center gap-3 font-medium text-slate-100">
                  <MessageCircle className="h-5 w-5 text-white" /> WhatsApp: +27 {CONTACTS.muhammed.whatsapp}
                </p>
                <p className="flex items-start gap-3 font-medium text-slate-100">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-white" /> {CONTACTS.location}
                </p>
              </div>
            </div>
          </div>

          <div className="reveal lg:col-span-3" data-delay="160">
            <div className="card-interactive glass-card rounded-4xl p-7 sm:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 className="h-16 w-16 text-white neon-glow" />
                  <h3 className="display-head mt-5 text-3xl text-white">Enquiry dispatched</h3>
                  <p className="mt-3 max-w-sm font-medium text-slate-100">
                    Your message is ready with your preferred representative. Complete send in WhatsApp or your email client
                    {fileName ? ', and attach your logo file there' : ''}.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-cyan mt-7 rounded-full px-6 py-3 text-sm font-extrabold uppercase tracking-wide shadow-neon"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Preferred Representative / Contact Person" required>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      <label
                        className={`flex cursor-pointer flex-col gap-1 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                          form.representative === 'muhammed'
                            ? 'border-white bg-white/20 text-white shadow-neon'
                            : 'border-white/30 text-slate-100 hover:border-white/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="representative"
                          value="muhammed"
                          checked={form.representative === 'muhammed'}
                          onChange={() => update('representative', 'muhammed')}
                          className="sr-only"
                        />
                        <span className="font-extrabold">{CONTACTS.muhammed.name}</span>
                        <span className="text-xs font-medium text-slate-300">WhatsApp · +27 {CONTACTS.muhammed.whatsapp}</span>
                      </label>
                      <label
                        className={`flex cursor-pointer flex-col gap-1 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                          form.representative === 'nurina'
                            ? 'border-white bg-white/20 text-white shadow-neon'
                            : 'border-white/30 text-slate-100 hover:border-white/60'
                        }`}
                      >
                        <input
                          type="radio"
                          name="representative"
                          value="nurina"
                          checked={form.representative === 'nurina'}
                          onChange={() => update('representative', 'nurina')}
                          className="sr-only"
                        />
                        <span className="font-extrabold">{CONTACTS.nurina.name}</span>
                        <span className="text-xs font-medium text-slate-300">Email &amp; WhatsApp · {CONTACTS.nurina.phone}</span>
                      </label>
                    </div>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your Name" required>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        placeholder="Jane Doe"
                        className="form-input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+27 71 000 0000"
                        className="form-input"
                      />
                    </Field>
                  </div>

                  <Field label="Email">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => update('email', e.target.value)}
                      placeholder="jane@example.com"
                      className="form-input"
                    />
                  </Field>

                  <Field label="Type of Enquiry" required>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {enquiryTypes.map((t) => (
                        <label
                          key={t.value}
                          className={`flex cursor-pointer items-center gap-2.5 rounded-2xl border-2 px-4 py-3 text-sm font-semibold transition-all ${
                            form.enquiry_type === t.value
                              ? 'border-white bg-white/20 text-white shadow-neon'
                              : 'border-white/30 text-slate-100 hover:border-white/60'
                          }`}
                        >
                          <input
                            type="radio"
                            name="enquiry_type"
                            value={t.value}
                            checked={form.enquiry_type === t.value}
                            onChange={() => update('enquiry_type', t.value)}
                            className="sr-only"
                          />
                          <span
                            className={`h-4 w-4 rounded-full border-2 ${
                              form.enquiry_type === t.value ? 'border-white bg-white' : 'border-white/40'
                            }`}
                          />
                          {t.label}
                        </label>
                      ))}
                    </div>
                  </Field>

                  <Field label="Upload Custom Logo or Inspiration (Optional)">
                    <label className="form-input flex cursor-pointer items-center gap-3 border-dashed">
                      <Upload className="h-5 w-5 shrink-0 text-slate-300" />
                      <span className="truncate text-sm text-slate-300">
                        {fileName || 'Choose image or PDF…'}
                      </span>
                      <input
                        type="file"
                        accept="image/*,application/pdf"
                        className="sr-only"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          setFileName(file?.name ?? '');
                        }}
                      />
                    </label>
                    <p className="mt-1.5 text-xs text-slate-400">
                      File name is included in your enquiry — attach the file in WhatsApp/email after it opens.
                    </p>
                  </Field>

                  <Field label="Message" required>
                    <textarea
                      required
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      rows={4}
                      placeholder="Tell us what you need — sizes, quantities, event dates…"
                      className="form-input resize-none"
                    />
                  </Field>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm font-medium text-red-200">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-cyan group inline-flex w-full items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-extrabold uppercase tracking-wide shadow-neon disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" /> Sending…
                      </>
                    ) : (
                      <>
                        Send Enquiry <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="block">
      <span className="mb-2 block text-sm font-bold uppercase tracking-wide text-slate-100">
        {label}
        {required && <span className="font-extrabold text-white"> *</span>}
      </span>
      {children}
    </div>
  );
}

/** Call from CTAs to pre-select enquiry type before scrolling to #contact */
export function preselectEnquiry(type: EnquiryType) {
  try {
    sessionStorage.setItem(ENQUIRY_PRESELECT_KEY, type);
  } catch {
    /* ignore */
  }
}
