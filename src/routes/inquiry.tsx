import emailjs from "@emailjs/browser";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import cta from "@/assets/cta-india.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

type InquirySearch = {
  type?: string;
  vehicle?: string;
  category?: string;
  rental?: string;
};

const RENTAL_LABELS: Record<string, string> = {
  local: "Local Rental", outstation: "Outstation", selfDrive: "Self Drive",
  withDriver: "With Driver", weekly: "Weekly Rental", monthly: "Monthly Rental",
};

export const Route = createFileRoute("/inquiry")({
  validateSearch: (s: Record<string, unknown>): InquirySearch => ({
    type: typeof s.type === "string" ? s.type : undefined,
    vehicle: typeof s.vehicle === "string" ? s.vehicle : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
    rental: typeof s.rental === "string" ? s.rental : undefined,
  }),
  head: () => ({
    ...pageSeo({
      title: "Plan My Trip | Rudra Tours and Travels",
      description: "Submit and track travel requests for tours, cars and wedding travel with Rudra Tours and Travels.",
      path: "/inquiry",
      image: cta,
    }),
    ...breadcrumbLdJson([{ name: "Inquiry", path: "/inquiry" }]),
  }),
  component: InquiryPage,
});

type Status = "New" | "In Progress" | "Quotation Sent" | "Booked" | "Closed";
type Inquiry = {
  id: string;
  type: string;
  name: string;
  phone: string;
  detail: string;
  status: Status;
  created: string;
};

const sample: Inquiry[] = [];

const statusColors: Record<Status, string> = {
  "New": "bg-blue-500/20 text-blue-300 border-blue-400/30",
  "In Progress": "bg-amber-500/20 text-amber-300 border-amber-400/30",
  "Quotation Sent": "bg-[var(--gold)]/20 text-gold border-[var(--gold)]/40",
  "Booked": "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  "Closed": "bg-white/10 text-luxury-gray border-white/20",
};

function timeAgo(iso: string): string {
  const t = new Date(iso).getTime();
  if (!t) return "Just now";
  const s = Math.floor((Date.now() - t) / 1000);
  if (s < 60) return "Just now";
  const m = Math.floor(s / 60);
  if (m < 60) return `${m} min ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} hour${h > 1 ? "s" : ""} ago`;
  const d = Math.floor(h / 24);
  return `${d} day${d > 1 ? "s" : ""} ago`;
}

function InquiryPage() {
  const search = Route.useSearch();
  const [inquiries, setInquiries] = useState<Inquiry[]>(sample);
  const [form, setForm] = useState({ type: "Tour Inquiry", name: "", phone: "", detail: "" });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("rudra_inquiries") || "[]") as Array<{
        id: string; type: string; name: string; phone?: string; detail: string; status: Status; created: string;
      }>;
      if (stored.length) {
        const mapped: Inquiry[] = stored.map((s) => ({
          id: s.id, type: s.type, name: s.name, phone: s.phone ?? "", detail: s.detail,
          status: (s.status || "New") as Status,
          created: s.created,
        }));
        setInquiries([...mapped, ...sample]);
      }
    } catch { /* ignore */ }
  }, []);

  // Hydrate form from query string (e.g. ?type=Vehicle+Inquiry&vehicle=Innova+Crysta&category=MUVs&rental=outstation)
  useEffect(() => {
    if (!search.type && !search.vehicle) return;
    const parts: string[] = [];
    if (search.vehicle) parts.push(`Vehicle: ${search.vehicle}`);
    if (search.category) parts.push(`Category: ${search.category}`);
    if (search.rental) parts.push(`Rental: ${RENTAL_LABELS[search.rental] ?? search.rental}`);
    setForm((f) => ({
      ...f,
      type: search.type ?? f.type,
      detail: parts.length ? parts.join(" · ") : f.detail,
    }));
  }, [search.type, search.vehicle, search.category, search.rental]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.detail) return;

    const id = `RT-${2402 + inquiries.length}`;
    const createdIso = new Date().toISOString();

    const next: Inquiry = {
      id,
      type: form.type.replace(" Inquiry", ""),
      name: form.name,
      phone: form.phone,
      detail: form.detail,
      status: "New",
      created: createdIso,
    };

    const updated = [next, ...inquiries];
    setInquiries(updated);

    // Persist locally — store raw ISO timestamp so timeAgo() stays accurate on reload
    try {
      const stored = JSON.parse(localStorage.getItem("rudra_inquiries") || "[]");
      localStorage.setItem(
        "rudra_inquiries",
        JSON.stringify([
          { id, type: form.type, name: form.name, phone: form.phone, detail: form.detail, status: "New", created: createdIso },
          ...stored,
        ])
      );
    } catch { /* ignore */ }

    setForm({ type: "Tour Inquiry", name: "", phone: "", detail: "" });

    setSending(true);
    try {
      // Email the client via EmailJS
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            type: form.type,
            name: form.name,
            phone: form.phone,
            detail: form.detail,
          },
          publicKey
        );
      }
    } catch (err) {
      console.error("Email send failed:", err);
    }

    try {
      // Log to Google Sheet — text/plain avoids a CORS preflight Apps Script can't answer
      const webhookUrl = import.meta.env.VITE_SHEET_WEBHOOK_URL as string | undefined;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            id,
            type: form.type,
            name: form.name,
            phone: form.phone,
            detail: form.detail,
            status: "New",
            created: createdIso,
          }),
        });
      }
    } catch (err) {
      console.error("Sheet webhook failed:", err);
    } finally {
      setSending(false);
    }
  };

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Inquiry", to: "/inquiry" }]} />
      <PageHero
        eyebrow="Plan My Trip"
        title={<>Submit. Track. <span className="shine-text italic">Travel.</span></>}
        subtitle="Send us a new request or check the status of an existing one. Our team replies within one business hour — bilkul promise."
        image={cta}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={submit}
            className="glass-strong rounded-3xl p-7 lg:sticky lg:top-32 h-fit"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">New Request</div>
            <h3 className="font-display text-3xl mb-6">Tell us your plan.</h3>
            <div className="space-y-4">
              <select value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })} className="w-full glass rounded-xl px-4 py-3 text-sm text-premium-white outline-none focus:border-[var(--gold)]/50">
                <option className="bg-[var(--deep-2)]">Tour Inquiry</option>
                <option className="bg-[var(--deep-2)]">Vehicle Inquiry</option>
                <option className="bg-[var(--deep-2)]">Wedding Inquiry</option>
                <option className="bg-[var(--deep-2)]">General Inquiry</option>
              </select>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50" />
              <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Phone / Email" className="w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50" />
              <textarea value={form.detail} onChange={(e) => setForm({ ...form, detail: e.target.value })} placeholder="Destination, dates, guests…" rows={5} className="w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50" />
              <button disabled={sending} className="btn-gold w-full py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium disabled:opacity-60">{sending ? "Sending…" : "Send My Request"}</button>
              <p className="text-[11px] text-luxury-gray/70 text-center">Saved in this session for now — full tracking coming soon.</p>
            </div>
          </motion.form>

          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Live Tracker</div>
                <h3 className="font-display text-3xl">Your requests</h3>
              </div>
              <div className="text-xs text-luxury-gray">{inquiries.length} total</div>
            </div>

            <div className="space-y-4">
              {inquiries.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="glass-strong rounded-2xl p-10 text-center border border-white/5"
                >
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Nothing here yet</div>
                  <div className="font-display text-xl mb-2">Your tracker is empty.</div>
                  <div className="text-sm text-luxury-gray">Send your first request on the left — it will show up here instantly.</div>
                </motion.div>
              ) : (
                inquiries.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="glass-strong rounded-2xl p-6 border border-white/5 hover:border-[var(--gold)]/30 transition-all"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">{q.id}</span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">{q.type}</span>
                        </div>
                        <div className="font-display text-xl mb-1">{q.name}</div>
                        <div className="text-sm text-luxury-gray">{q.detail}</div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] border ${statusColors[q.status]}`}>
                          {q.status}
                        </span>
                        <div className="text-[11px] text-luxury-gray mt-2">{timeAgo(q.created)}</div>
                      </div>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
