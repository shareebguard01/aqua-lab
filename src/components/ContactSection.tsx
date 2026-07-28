import { useState, type FormEvent } from 'react';
import { MessageCircle, Send, Loader2, CheckCircle2, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import { CONTACTS, whatsappLink } from '@/lib/contacts';
import { supabase } from '@/lib/supabase';

type EnquiryType = 'home' | 'bulk' | 'event' | 'other';

const enquiryTypes: { value: EnquiryType; label: string }[] = [
  { value: 'home', label: 'Home / Personal' },
  { value: 'bulk', label: 'Bulk / Business' },
  { value: 'event', label: 'Custom Event Labels' },
  { value: 'other', label: 'Something Else' },
];

const founders = [
  { ...CONTACTS.muhammed, message: "Hi AquaLab! I'd like to chat about your water." },
  { ...CONTACTS.nurina, message: "Hi AquaLab! I'd like to chat about your water." },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export function ContactSection() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', enquiry_type: 'home' as EnquiryType, message: '' });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('enquiries').insert({
      name: form.name.trim(),
      email: form.email.trim() || null,
      phone: form.phone.trim() || null,
      enquiry_type: form.enquiry_type,
      message: form.message.trim(),
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try WhatsApp instead.');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', phone: '', enquiry_type: 'home', message: '' });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-ink-900 py-24 text-white sm:py-32 border-t border-zinc-800/60">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-900" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="reveal text-sm font-bold uppercase tracking-[0.2em] text-white neon-text">Get In Touch</p>
          <h2 className="reveal display-head mt-3 text-4xl text-white sm:text-5xl" data-delay="80">
            Let's Talk Water
          </h2>
          <p className="reveal mt-4 text-lg text-zinc-300" data-delay="160">
            Questions, bulk orders or a custom label quote — we usually reply within the hour.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-5">
          {/* WhatsApp + contact info */}
          <div className="reveal lg:col-span-2" data-delay="80">
            <div className="card-interactive rounded-4xl border border-white/20 bg-ink-800/80 p-7 shadow-glass backdrop-blur">
              <h3 className="text-xl font-extrabold text-white">Chat to us instantly</h3>
              <p className="mt-2 text-sm text-zinc-400">Tap a founder below to open WhatsApp.</p>

              <div className="mt-6 space-y-4">
                {founders.map((f) => (
                  <a
                    key={f.name}
                    href={whatsappLink(f.phoneRaw, f.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-3xl border border-white/15 bg-ink-900/80 p-4 transition-all hover:-translate-y-0.5 hover:border-white/50 hover:shadow-glow"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white shadow-soft transition-transform group-hover:scale-110">
                      <MessageCircle className="h-6 w-6" fill="white" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-bold text-white">{f.name}</p>
                      <p className="text-sm text-zinc-400">{f.role} · {f.phone}</p>
                    </div>
                    <span className="ml-auto text-xs font-bold uppercase tracking-wide text-[#25D366]">Chat</span>
                  </a>
                ))}
              </div>

              <div className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm">
                <a href={`mailto:${CONTACTS.email}`} className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors">
                  <Mail className="h-5 w-5 text-white" /> {CONTACTS.email}
                </a>
                <p className="flex items-center gap-3 text-zinc-300">
                  <Phone className="h-5 w-5 text-white" /> {CONTACTS.muhammed.phone}
                </p>
                <p className="flex items-center gap-3 text-zinc-300">
                  <MapPin className="h-5 w-5 text-white" /> {CONTACTS.location}
                </p>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="reveal lg:col-span-3" data-delay="160">
            <div className="card-interactive rounded-4xl border border-white/20 bg-ink-800/80 p-7 shadow-glass backdrop-blur sm:p-9">
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 className="h-16 w-16 text-white neon-glow" />
                  <h3 className="display-head mt-5 text-3xl text-white">Message Sent!</h3>
                  <p className="mt-3 max-w-sm text-zinc-300">
                    Thanks for reaching out — we'll get back to you shortly. Want a faster reply? Tap one of our WhatsApp contacts.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="btn-neon mt-7 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                              ? 'border-white bg-white/15 text-white shadow-neon'
                              : 'border-white/20 text-zinc-300 hover:border-white/50'
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
                          <span className={`h-4 w-4 rounded-full border-2 ${form.enquiry_type === t.value ? 'border-white bg-white' : 'border-white/30'}`} />
                          {t.label}
                        </label>
                      ))}
                    </div>
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
                    <div className="flex items-start gap-3 rounded-2xl border border-red-500/40 bg-red-500/10 p-4 text-sm text-red-300">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-cyan group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
                  >
                    {status === 'loading' ? (
                      <><Loader2 className="h-5 w-5 animate-spin" /> Sending…</>
                    ) : (
                      <>Send Enquiry <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" /></>
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
    <label className="block">
      <span className="mb-2 block text-sm font-bold uppercase tracking-wide text-zinc-300">
        {label}{required && <span className="text-white font-extrabold"> *</span>}
      </span>
      {children}
    </label>
  );
}
