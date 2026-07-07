import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import cta from "@/assets/cta-india.jpg";

export const Route = createFileRoute("/tours/customize")({
  head: () => ({
    meta: [
      { title: "Customised Package — Rudra Tours & Travels" },
      { name: "description", content: "Design a trip made just for you. Share your travel preferences and our team will build a personalised package that fits your budget, dates and style." },
      { property: "og:title", content: "Plan Your Perfect Trip — Rudra Tours" },
      { property: "og:description", content: "Personalised travel packages planned by our friendly Kanpur team." },
      { property: "og:image", content: cta },
    ],
  }),
  component: CustomizePage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  phone: z.string().trim().min(7, "Enter a valid mobile number").max(20),
  email: z.string().trim().email("Enter a valid email").max(200),
  departure: z.string().trim().min(2, "Departure city is required").max(80),
  destination: z.string().trim().min(2, "Destination is required").max(120),
  dates: z.string().trim().min(2, "Travel dates required").max(80),
  travelers: z.string().trim().min(1).max(20),
  budget: z.string().trim().min(1, "Select a budget"),
  hotel: z.string().trim().min(1),
  vehicle: z.string().trim().min(1),
  notes: z.string().trim().max(800).optional(),
});

const initial = {
  name: "", phone: "", email: "", departure: "", destination: "", dates: "",
  travelers: "2", budget: "", hotel: "", vehicle: "", notes: "",
};

function CustomizePage() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (k: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrs: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = String(issue.path[0]);
        if (!fieldErrs[key]) fieldErrs[key] = issue.message;
      }
      setErrors(fieldErrs);
      return;
    }
    setErrors({});

    try {
      const existing = JSON.parse(localStorage.getItem("rudra_inquiries") || "[]");
      const record = {
        id: `RT-${2500 + existing.length}`,
        tag: "Custom Package Inquiry",
        type: "Custom Package",
        name: result.data.name,
        phone: result.data.phone,
        email: result.data.email,
        detail: `${result.data.destination} from ${result.data.departure} · ${result.data.dates} · ${result.data.travelers} travelers · ${result.data.budget} · ${result.data.hotel} · ${result.data.vehicle}${result.data.notes ? ` · ${result.data.notes}` : ""}`,
        status: "New",
        created: new Date().toISOString(),
      };
      localStorage.setItem("rudra_inquiries", JSON.stringify([record, ...existing]));
    } catch { /* ignore storage issues */ }

    setSubmitted(true);
    setForm(initial);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Customised Package"
        title={<>Plan Your <span className="shine-text italic">Perfect Trip</span>.</>}
        subtitle="Bas share your travel preferences and our team will build a trip made just for you — matching your budget, dates and style."
        image={cta}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-4xl">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="glass-strong rounded-3xl p-8 md:p-10 text-center border border-[var(--gold)]/30"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Request Received</div>
              <h3 className="font-display text-3xl md:text-4xl mb-4">Thank you!</h3>
              <p className="text-luxury-gray max-w-xl mx-auto mb-8">
                We've received your custom trip request. A travel expert will reach out within one business hour to build your itinerary — bilkul tension free.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button onClick={() => setSubmitted(false)} className="glass px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] text-premium-white hover:text-gold transition-colors">
                  Send Another
                </button>
                <Link to="/inquiry" className="btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium">
                  Track My Requests
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={submit}
              className="glass-strong rounded-3xl p-7 md:p-8 border border-white/5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Field label="Full Name" error={errors.name}>
                  <input value={form.name} onChange={set("name")} className={inputCls} placeholder="Your full name" />
                </Field>
                <Field label="Mobile Number" error={errors.phone}>
                  <input value={form.phone} onChange={set("phone")} className={inputCls} placeholder="+91 ..." />
                </Field>
                <Field label="Email Address" error={errors.email}>
                  <input type="email" value={form.email} onChange={set("email")} className={inputCls} placeholder="you@email.com" />
                </Field>
                <Field label="Departure City" error={errors.departure}>
                  <input value={form.departure} onChange={set("departure")} className={inputCls} placeholder="e.g. Kanpur" />
                </Field>
                <Field label="Preferred Destination" error={errors.destination}>
                  <input value={form.destination} onChange={set("destination")} className={inputCls} placeholder="e.g. Kashmir, Kerala" />
                </Field>
                <Field label="Travel Dates" error={errors.dates}>
                  <input value={form.dates} onChange={set("dates")} className={inputCls} placeholder="e.g. 12 – 18 Oct 2026" />
                </Field>
                <Field label="Number of Travelers" error={errors.travelers}>
                  <input type="number" min={1} value={form.travelers} onChange={set("travelers")} className={inputCls} />
                </Field>
                <Field label="Budget Range" error={errors.budget}>
                  <select value={form.budget} onChange={set("budget")} className={inputCls}>
                    <option value="" className="bg-[var(--deep-2)]">Select budget</option>
                    <option className="bg-[var(--deep-2)]">Under ₹25,000 / person</option>
                    <option className="bg-[var(--deep-2)]">₹25,000 – ₹50,000 / person</option>
                    <option className="bg-[var(--deep-2)]">₹50,000 – ₹1,00,000 / person</option>
                    <option className="bg-[var(--deep-2)]">₹1,00,000+ / person</option>
                  </select>
                </Field>
                <Field label="Hotel Category" error={errors.hotel}>
                  <select value={form.hotel} onChange={set("hotel")} className={inputCls}>
                    <option value="" className="bg-[var(--deep-2)]">Select category</option>
                    <option className="bg-[var(--deep-2)]">3 Star</option>
                    <option className="bg-[var(--deep-2)]">4 Star</option>
                    <option className="bg-[var(--deep-2)]">5 Star</option>
                    <option className="bg-[var(--deep-2)]">Luxury / Boutique</option>
                  </select>
                </Field>
                <Field label="Vehicle Preference" error={errors.vehicle}>
                  <select value={form.vehicle} onChange={set("vehicle")} className={inputCls}>
                    <option value="" className="bg-[var(--deep-2)]">Select vehicle</option>
                    <option className="bg-[var(--deep-2)]">Sedan</option>
                    <option className="bg-[var(--deep-2)]">SUV</option>
                    <option className="bg-[var(--deep-2)]">Premium SUV</option>
                    <option className="bg-[var(--deep-2)]">Tempo Traveller</option>
                    <option className="bg-[var(--deep-2)]">Luxury Coach</option>
                  </select>
                </Field>
                <div className="md:col-span-2">
                  <Field label="Anything Special?" error={errors.notes}>
                    <textarea value={form.notes} onChange={set("notes")} rows={4} className={inputCls} placeholder="Food preferences, accessibility, celebrations, must-see places…" />
                  </Field>
                </div>
              </div>

              <button type="submit" className="btn-gold w-full md:w-auto md:px-10 mt-6 py-4 rounded-full text-xs uppercase tracking-[0.25em] font-medium">
                Get My Custom Package
              </button>
              <p className="text-[11px] text-luxury-gray/70 mt-4">
                Your request is tagged <span className="text-gold">Custom Package Inquiry</span> and saved in your tracker.
              </p>
            </motion.form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}

const inputCls = "w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50";

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-2">{label}</div>
      {children}
      {error && <div className="text-[11px] text-red-400 mt-1">{error}</div>}
    </label>
  );
}
