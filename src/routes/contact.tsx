import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BRAND } from "@/lib/brand";
import cta from "@/assets/cta-india.jpg";
import { pageSeo, absoluteUrl, SITE } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageSeo({
      title: "Contact Rudra Tours & Travels Kanpur | Office Address & Phone",
      description:
        "Contact Rudra Tours & Travels in Kanpur. Call +91 70145 47628 / +91 93361 17414 or WhatsApp for 24x7 cab booking, car rentals, tempo travellers & tour packages.",
      path: "/contact",
      image: cta,
      breadcrumbs: [{ name: "Contact Us", path: "/contact" }],
      schema: {
        "@type": "ContactPage",
        "@id": `${SITE.url}/contact#webpage`,
        url: `${SITE.url}/contact`,
        name: "Contact Rudra Tours & Travels Kanpur",
        description:
          "24x7 contact information, head office address, phone numbers and Google Map location for Rudra Tours & Travels in Kanpur.",
        mainEntity: {
          "@type": "LocalBusiness",
          name: BRAND.name,
          telephone: BRAND.phone,
          email: BRAND.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: BRAND.streetAddress,
            addressLocality: BRAND.city,
            addressRegion: BRAND.state,
            postalCode: BRAND.postalCode,
            addressCountry: BRAND.country,
          },
          hasMap: BRAND.mapsUrl,
          openingHours: "Mo-Su 00:00-23:59",
        },
      },
    }),
  component: ContactPage,
});

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Tour Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const trimmedName = formData.name.trim();
    const trimmedPhone = formData.phone.trim();
    const phoneDigits = trimmedPhone.replace(/\D/g, "");
    if (!trimmedName || !phoneDigits || !formData.message.trim()) {
      setError("Please fill out your name, 10-digit phone number, and message.");
      return;
    }
    if (phoneDigits.length !== 10) {
      setError("Phone number must be a valid 10-digit Indian mobile number.");
      return;
    }

    setIsSubmitting(true);
    const id = `RT-${Date.now().toString().slice(-4)}`;
    const createdIso = new Date().toISOString();

    try {
      const stored = JSON.parse(localStorage.getItem("rudra_inquiries") || "[]");
      localStorage.setItem(
        "rudra_inquiries",
        JSON.stringify([
          {
            id,
            type: formData.type,
            name: trimmedName,
            phone: phoneDigits,
            email: formData.email.trim(),
            packageName: formData.type,
            detail: formData.message.trim(),
            status: "New",
            created: createdIso,
          },
          ...stored,
        ]),
      );
    } catch {
      /* ignore storage errors */
    }

    try {
      await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: trimmedName,
          phone: phoneDigits,
          email: formData.email.trim(),
          type: formData.type,
          detail: formData.message.trim(),
        }),
      });
    } catch {
      /* ignore network errors */
    }

    setIsSubmitting(false);
    setSubmitted(true);
  };

  const items = [
    { icon: Phone, label: "Phone", value: BRAND.phone, href: BRAND.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: BRAND.whatsapp, href: BRAND.whatsappHref },
    { icon: Mail, label: "Email", value: BRAND.email, href: BRAND.emailHref },
    { icon: MapPin, label: "Head Office", value: BRAND.address, href: BRAND.mapsUrl },
    { icon: Clock, label: "Business Hours", value: BRAND.hours },
  ];

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Contact", to: "/contact" }]} />
      <PageHero
        eyebrow="Get In Touch"
        title={
          <>
            Always here for your <span className="shine-text italic">journey</span>.
          </>
        }
        subtitle="Call, WhatsApp, or visit our head office in Koyla Nagar, Kanpur. Our team is available round-the-clock for cab bookings and tour planning."
        image={cta}
        imageAlt="Rudra Tours Kanpur Office and Fleet"
      />

      <section className="px-6 py-12 md:py-16">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="glass-strong rounded-3xl p-7 space-y-4">
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Direct Channels
              </div>
              <h2 className="font-display text-3xl">Let's talk travel.</h2>
              <p className="text-sm text-luxury-gray leading-relaxed">
                Connect with Mr. Abhay Nigam and the Rudra Tours team for quick vehicle availability, customized pilgrimage tours, and transparent fares.
              </p>
              <div className="space-y-3 pt-2">
                {items.map((it) => {
                  const Icon = it.icon;
                  const content = (
                    <div className="flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] hover:border-gold/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 grid place-items-center text-gold shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">
                          {it.label}
                        </div>
                        <div className="text-sm text-premium-white font-medium">{it.value}</div>
                      </div>
                    </div>
                  );

                  return it.href ? (
                    <a
                      key={it.label}
                      href={it.href}
                      target={it.href.startsWith("http") ? "_blank" : undefined}
                      rel={it.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={it.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Google Maps Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-[280px] rounded-3xl overflow-hidden glass-strong border border-white/10 shadow-2xl group"
            >
              <a
                href={BRAND.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-3 right-3 z-10 glass-panel px-3.5 py-2 rounded-xl text-[10px] uppercase tracking-wider text-gold hover:text-white flex items-center gap-2 transition-all bg-black/70 backdrop-blur-md border border-white/10 hover:border-gold/50 shadow-lg"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                Open in Google Maps
              </a>
              <div className="absolute inset-0 overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3567.123!2d80.3581066!3d26.3899338!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4714e9342f85%3A0xecb3997adb46ff71!2sRudra%20Tour%20%26%20Travels!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
                  width="100%"
                  height="130%"
                  style={{ border: 0, marginTop: "-24%" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Rudra Tour & Travels Location"
                />
              </div>
            </motion.div>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-strong rounded-3xl p-8 text-center space-y-5 border border-emerald-500/30 self-start"
            >
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 grid place-items-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl text-premium-white">Message Received!</h3>
              <p className="text-sm text-luxury-gray leading-relaxed max-w-md mx-auto">
                Thank you, <span className="text-premium-white font-medium">{formData.name}</span>. Our Kanpur travel desk has received your request and will contact you shortly.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/917014547628?text=${encodeURIComponent(
                    `Hello Rudra Tours, I just submitted an inquiry on your website.\nName: ${formData.name}\nPhone: ${formData.phone}\nType: ${formData.type}\nMessage: ${formData.message}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" /> Connect on WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", phone: "", type: "Tour Inquiry", message: "" });
                  }}
                  className="btn-ghost-luxe w-full sm:w-auto px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium"
                >
                  Send Another Message
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              onSubmit={handleSubmit}
              className="glass-strong rounded-3xl p-7 space-y-4"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                Quick Message
              </div>
              <h2 className="font-display text-3xl">Drop us a line.</h2>

              {error && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                  Full name *
                  <input
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    autoComplete="name"
                    placeholder="e.g. Rahul Sharma"
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                  />
                </label>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                  Phone Number (10 digits) *
                  <input
                    name="phone"
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    autoComplete="tel"
                    placeholder="e.g. 9876543210"
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                  />
                </label>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                  Email (Optional)
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    autoComplete="email"
                    placeholder="e.g. rahul@example.com"
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                  />
                </label>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                  Inquiry type
                  <select
                    name="type"
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white outline-none focus:border-[var(--gold)]/50"
                  >
                    <option className="bg-[var(--deep-2)]">Tour Inquiry</option>
                    <option className="bg-[var(--deep-2)]">Taxi & Cab Booking</option>
                    <option className="bg-[var(--deep-2)]">Car Rental</option>
                    <option className="bg-[var(--deep-2)]">Tempo Traveller</option>
                    <option className="bg-[var(--deep-2)]">Wedding Car Rental</option>
                    <option className="bg-[var(--deep-2)]">General Inquiry</option>
                  </select>
                </label>
                <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                  Trip Details / Message *
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Pickup location, dates, destination, number of passengers..."
                    rows={4}
                    className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                  />
                </label>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium disabled:opacity-50"
                >
                  {isSubmitting ? "Sending Request..." : "Send Message & Get Quote"}
                </button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </PageLayout>
  );
}
