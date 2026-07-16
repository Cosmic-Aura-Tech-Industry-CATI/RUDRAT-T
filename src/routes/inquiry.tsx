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
  package?: string;
  vehicle?: string;
  category?: string;
  rental?: string;
};

const RENTAL_LABELS: Record<string, string> = {
  local: "Local Rental",
  outstation: "Outstation",
  selfDrive: "Self Drive",
  withDriver: "With Driver",
  weekly: "Weekly Rental",
  monthly: "Monthly Rental",
};

export const Route = createFileRoute("/inquiry")({
  validateSearch: (s: Record<string, unknown>): InquirySearch => ({
    type: typeof s.type === "string" ? s.type : undefined,
    package: typeof s.package === "string" ? s.package : undefined,
    vehicle: typeof s.vehicle === "string" ? s.vehicle : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
    rental: typeof s.rental === "string" ? s.rental : undefined,
  }),
  head: () => ({
    ...pageSeo({
      title: "Plan My Trip | Travel Quote & Inquiry",
      description:
        "Submit and track travel requests for tours, cars and wedding travel with Rudra Tours and Travels.",
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
  email: string;
  packageName: string;
  detail: string;
  status: Status;
  created: string;
};

const sample: Inquiry[] = [];

const statusColors: Record<Status, string> = {
  New: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  "In Progress": "bg-amber-500/20 text-amber-300 border-amber-400/30",
  "Quotation Sent": "bg-[var(--gold)]/20 text-gold border-[var(--gold)]/40",
  Booked: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  Closed: "bg-white/10 text-luxury-gray border-white/20",
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
  const [form, setForm] = useState({
    type: "Tour Inquiry",
    name: "",
    phone: "",
    email: "",
    packageName: "",
    vehicleName: "",
    detail: "",
  });
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState<{ kind: "success" | "error"; text: string } | null>(
    null,
  );

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("rudra_inquiries") || "[]") as Array<{
        id: string;
        type: string;
        name: string;
        phone?: string;
        email?: string;
        packageName?: string;
        detail: string;
        status: Status;
        created: string;
      }>;
      if (stored.length) {
        const mapped: Inquiry[] = stored.map((s) => ({
          id: s.id,
          type: s.type,
          name: s.name,
          phone: s.phone ?? "",
          email: s.email ?? "",
          packageName: s.packageName ?? "",
          detail: s.detail,
          status: (s.status || "New") as Status,
          created: s.created,
        }));
        setInquiries([...mapped, ...sample]);
      }
    } catch {
      /* ignore */
    }
  }, []);

  // Hydrate form from query string (e.g. ?type=Vehicle+Inquiry&vehicle=Innova+Crysta&category=MUVs&rental=outstation)
  useEffect(() => {
    const derivedDetails: string[] = [];
    if (!search.type && !search.vehicle && !search.package) return;
    const parts: string[] = [];
    if (search.vehicle) parts.push(`Vehicle: ${search.vehicle}`);
    if (search.category) parts.push(`Category: ${search.category}`);
    if (search.rental) parts.push(`Rental: ${RENTAL_LABELS[search.rental] ?? search.rental}`);
    if (search.package) derivedDetails.push(`Package: ${search.package}`);
    setForm((f) => ({
      ...f,
      type: search.type ?? f.type,
      packageName: search.package ?? f.packageName,
      vehicleName: search.vehicle ?? f.vehicleName,
      detail: parts.length ? [...derivedDetails, ...parts].join(" · ") : f.detail,
    }));
  }, [search.type, search.package, search.vehicle, search.category, search.rental]);

  const resetForm = () => {
    setForm((current) => ({
      type: search.type ?? current.type,
      name: "",
      phone: "",
      email: "",
      packageName: search.package ?? current.packageName,
      vehicleName: search.vehicle ?? current.vehicleName,
      detail: "",
    }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback(null);

    const trimmedName = form.name.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedEmail = form.email.trim();
    const trimmedPackage = form.packageName.trim();
    const trimmedVehicle = form.vehicleName.trim();
    const trimmedDetail = form.detail.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isVehicleInquiry = form.type.includes("Vehicle");
    const serviceName = isVehicleInquiry ? trimmedVehicle : trimmedPackage;

    if (!trimmedName || !trimmedPhone || !form.type.trim() || !serviceName || !trimmedDetail) {
      setFeedback({
        kind: "error",
        text: `Name, phone, inquiry type, ${isVehicleInquiry ? "vehicle" : "package"} and trip details are required.`,
      });
      return;
    }

    if (phoneDigits.length !== 10) {
      setFeedback({ kind: "error", text: "Phone must contain 10 digits." });
      return;
    }

    if (trimmedEmail && !emailPattern.test(trimmedEmail)) {
      setFeedback({ kind: "error", text: "Email must be valid if provided." });
      return;
    }

    const id = `RT-${2402 + inquiries.length}`;
    const createdIso = new Date().toISOString();

    const next: Inquiry = {
      id,
      type: form.type.replace(" Inquiry", ""),
      name: trimmedName,
      phone: phoneDigits,
      email: trimmedEmail,
      packageName: serviceName,
      detail: trimmedDetail,
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
          {
            id,
            type: form.type,
            name: trimmedName,
            phone: phoneDigits,
            email: trimmedEmail,
            packageName: serviceName,
            detail: trimmedDetail,
            status: "New",
            created: createdIso,
          },
          ...stored,
        ]),
      );
    } catch {
      /* ignore */
    }

    setSending(true);
    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: form.type,
          name: trimmedName,
          phone: phoneDigits,
          email: trimmedEmail,
          package: serviceName,
          detail: trimmedDetail,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { message?: string }
          | null;
        throw new Error(payload?.message ?? `Inquiry email request failed with status ${response.status}`);
      }

      setFeedback({
        kind: "success",
        text: "Inquiry Submitted Successfully. Our team will contact you shortly.",
      });
      resetForm();
    } catch (err) {
      setFeedback({ kind: "error", text: "Something went wrong. Please try again." });
      console.error("Inquiry send failed:", err);
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
        title={
          <>
            Request a travel quote. <span className="shine-text italic">Track. Travel.</span>
          </>
        }
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
            <h2 className="font-display text-3xl mb-6">Tell us your plan.</h2>
            {feedback ? (
              <div
                className={`mb-5 rounded-2xl border px-4 py-3 text-sm ${
                  feedback.kind === "success"
                    ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-200"
                    : "border-red-400/30 bg-red-500/10 text-red-200"
                }`}
              >
                <div className="font-medium mb-1">
                  {feedback.kind === "success" ? "✅ Inquiry Submitted Successfully." : "Something went wrong."}
                </div>
                <div>{feedback.text}</div>
              </div>
            ) : null}
            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Inquiry type
                <select
                  name="type"
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white outline-none focus:border-[var(--gold)]/50"
                >
                  <option className="bg-[var(--deep-2)]">Tour Inquiry</option>
                  <option className="bg-[var(--deep-2)]">Vehicle Inquiry</option>
                  <option className="bg-[var(--deep-2)]">Wedding Inquiry</option>
                  <option className="bg-[var(--deep-2)]">General Inquiry</option>
                </select>
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Package
                <input
                  name="package"
                  value={form.packageName}
                  onChange={(e) => setForm({ ...form, packageName: e.target.value })}
                  placeholder="Mathura-Vrindavan"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Your name
                <input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  autoComplete="name"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Phone
                <input
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="10-digit phone number"
                  autoComplete="tel"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Email
                <input
                  name="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="rahul@gmail.com"
                  autoComplete="email"
                  type="email"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Trip details
                <textarea
                  name="detail"
                  value={form.detail}
                  onChange={(e) => setForm({ ...form, detail: e.target.value })}
                  placeholder="Destination, dates, guests…"
                  rows={5}
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <button
                disabled={sending}
                className="btn-gold w-full py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium disabled:opacity-60"
              >
                {sending ? "Sending..." : "Send My Request"}
              </button>
              <p className="text-[11px] text-luxury-gray/70 text-center">
                Package, phone and trip details are required. Email is optional for auto-reply.
              </p>
            </div>
          </motion.form>

          <div>
            <div className="flex items-end justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
                  Live Tracker
                </div>
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
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                    Nothing here yet
                  </div>
                  <div className="font-display text-xl mb-2">Your tracker is empty.</div>
                  <div className="text-sm text-luxury-gray">
                    Send your first request on the left — it will show up here instantly.
                  </div>
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
                          <span className="text-[10px] uppercase tracking-[0.3em] text-gold">
                            {q.id}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">
                            {q.type}
                          </span>
                        </div>
                        <div className="font-display text-xl mb-1">{q.name}</div>
                        <div className="text-sm text-gold/90 mb-1">{q.packageName}</div>
                        <div className="text-sm text-luxury-gray">{q.detail}</div>
                      </div>
                      <div className="text-right">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] border ${statusColors[q.status]}`}
                        >
                          {q.status}
                        </span>
                        <div className="text-[11px] text-luxury-gray mt-2">
                          {timeAgo(q.created)}
                        </div>
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
