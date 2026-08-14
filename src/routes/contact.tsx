import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BRAND } from "@/lib/brand";
import cta from "@/assets/cta-india.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    ...pageSeo({
      title: "Contact Rudra Tours & Travels | Kanpur Travel Team",
      description:
        "Contact Rudra Tours and Travels by phone, WhatsApp or email for tours, vehicles and wedding travel from Kanpur.",
      path: "/contact",
      image: cta,
    }),
    ...breadcrumbLdJson([{ name: "Contact", path: "/contact" }]),
  }),
  component: ContactPage,
});

function ContactPage() {
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
        eyebrow="Get in touch"
        title={
          <>
            Contact our Kanpur team to <span className="shine-text italic">plan</span> your trip.
          </>
        }
        subtitle="Our Kanpur team is ready to help — bilkul tension free. Talk to a real travel expert within one business hour."
        image={cta}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-10">
          <div className="space-y-4">
            {items.map((it, i) => {
              const Inner = (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06 }}
                  className="glass-strong rounded-2xl p-5 flex items-center gap-5 group hover:border-[var(--gold)]/40 border border-white/5 transition-all"
                >
                  <span
                    className="grid place-items-center w-14 h-14 rounded-full"
                    style={{ background: "var(--gradient-gold)" }}
                  >
                    <it.icon className="w-5 h-5 text-[var(--primary-foreground)]" />
                  </span>
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                      {it.label}
                    </div>
                    <div className="text-premium-white text-sm md:text-base">{it.value}</div>
                  </div>
                </motion.div>
              );
              return it.href ? (
                <a
                  key={it.label}
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  {Inner}
                </a>
              ) : (
                <div key={it.label}>{Inner}</div>
              );
            })}

            {/* Google Maps Embed */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-strong rounded-2xl overflow-hidden border border-white/5 relative h-[380px] w-full mt-4 group"
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
              <iframe
                src="https://www.google.com/maps?q=26.3899338,80.3581066&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rudra Tour & Travels Location"
              />
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Our team will get in touch with you shortly.");
            }}
            className="glass-strong rounded-3xl p-7"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">
              Quick Message
            </div>
            <h2 className="font-display text-3xl mb-6">Drop us a line.</h2>
            <div className="space-y-4">
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Full name
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Full name"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Email
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Phone
                <input
                  name="phone"
                  autoComplete="tel"
                  placeholder="Phone"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Inquiry type
                <select
                  name="type"
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white outline-none focus:border-[var(--gold)]/50"
                >
                  <option className="bg-[var(--deep-2)]">Tour Inquiry</option>
                  <option className="bg-[var(--deep-2)]">Vehicle Inquiry</option>
                  <option className="bg-[var(--deep-2)]">Wedding Inquiry</option>
                  <option className="bg-[var(--deep-2)]">General Inquiry</option>
                </select>
              </label>
              <label className="block text-[10px] uppercase tracking-[0.25em] text-luxury-gray">
                Tell us about your trip
                <textarea
                  name="message"
                  placeholder="Tell us about your trip…"
                  rows={5}
                  className="mt-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
                />
              </label>
              <button className="btn-gold w-full py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium">
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </section>

    </PageLayout>
  );
}
