import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { VEHICLES, CATEGORY_BY_ID, type Vehicle } from "@/data/vehicles";
import heroLuxuryCar from "@/assets/wedding/hero-luxury-car.jpg";
import decoratedSedan from "@/assets/wedding/decorated-sedan.jpg";
import brideArrival from "@/assets/wedding/bride-arrival.jpg";
import decoratedSuv from "@/assets/wedding/decorated-suv.jpg";
import guestTransport from "@/assets/wedding/guest-transport.jpg";
import chauffeurService from "@/assets/wedding/chauffeur-service.jpg";

export const Route = createFileRoute("/weddings")({
  head: () => ({
    meta: [
      { title: "Wedding Cars & Guest Transport — Rudra Tours & Travels" },
      { name: "description", content: "Beautifully decorated wedding cars, luxury sedans and SUVs with drivers, plus smooth guest pickups and drops for Indian weddings across the country." },
      { property: "og:title", content: "Wedding Cars & Guest Transport — Rudra Tours & Travels" },
      { property: "og:description", content: "Arrive in style. Celebrate tension-free. Full wedding travel handled end to end." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroLuxuryCar },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WeddingsPage,
});

// Exactly six featured wedding vehicles for the desktop row.
const WEDDING_SLUGS = [
  "city", "verna", "scorpio", "fortuner", "audi-a6", "mercedes-benz",
] as const;

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function WeddingsPage() {
  const weddingFleet: Vehicle[] = WEDDING_SLUGS
    .map((s) => VEHICLES.find((v) => v.slug === s))
    .filter((v): v is Vehicle => Boolean(v));

  return (
    <PageLayout>
      <PageHero
        eyebrow="Wedding Cars"
        title={<>Arrive in Style. <span className="shine-text italic">Celebrate Tension-Free.</span></>}
        subtitle="From the bride's grand entry to the last guest's drop-off — beautifully decorated cars with friendly drivers, planned for once-in-a-lifetime moments."
        image={heroLuxuryCar}
      />

      {/* Featured Wedding Vehicles — 6 cards, single row on desktop */}
      <section className="px-6 pb-10 md:pb-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Featured Cars</div>
            <h2 className="font-display text-3xl md:text-4xl">Handpicked for your big day.</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
            {weddingFleet.map((v, i) => (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-strong p-5 overflow-hidden flex flex-col"
              >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "var(--gradient-radial-gold)" }} />

                <div className="relative flex flex-col h-full">
                  <div className="text-[9px] uppercase tracking-[0.28em] text-gold mb-3">{CATEGORY_BY_ID[v.category].name}</div>

                  <div className="relative aspect-[16/10] rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 overflow-hidden mb-4">
                    <div className="absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                    <div className="absolute inset-x-10 bottom-0 h-16 blur-2xl bg-[var(--gold)]/30" />
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <h3 className="font-display text-lg leading-tight mb-2">{v.name}</h3>

                  <div className="flex items-center gap-1.5 text-[11px] text-luxury-gray mb-3">
                    <Users className="w-3.5 h-3.5" /> {v.seats} Seats
                  </div>

                  <div className="text-gold font-display text-sm leading-tight mb-4">
                    {fmt(v.local[0])} – {fmt(v.local[1])}
                  </div>

                  <Link
                    to="/inquiry"
                    search={{ type: "Wedding Inquiry", vehicle: v.name, category: CATEGORY_BY_ID[v.category].name, rental: "local" }}
                    className="mt-auto inline-flex items-center justify-center gap-2 py-2.5 rounded-full glass border border-[var(--gold)]/30 text-[10px] uppercase tracking-[0.22em] text-gold hover:bg-[var(--gold)]/10 transition-colors"
                  >
                    Reserve Car <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form — full width, centered */}
      <section className="px-6 pb-16 md:pb-20">
        <div className="mx-auto max-w-2xl">
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our wedding team will reach out within 1 business hour."); }}
            className="glass-strong rounded-3xl p-7 md:p-10"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Wedding Inquiry</div>
            <h3 className="font-display text-3xl md:text-4xl mb-6">Let's begin your big day.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Bride / Groom name" />
              <Field label="Wedding city" />
              <Field label="Approx. dates" />
              <Field label="Guest count" />
              <div className="sm:col-span-2"><Field label="Phone / Email" /></div>
              <textarea placeholder="Tell us your plan — venues, guests, must-haves…" rows={4} className="sm:col-span-2 w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50" />
            </div>
            <button className="btn-gold w-full mt-5 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium">Get Wedding Quote</button>
          </motion.form>
        </div>
      </section>

      {/* Decorated Wedding Cars Gallery */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 md:mb-10 text-center">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Decorated Wedding Cars</div>
            <h2 className="font-display text-3xl md:text-5xl">Every flower, placed with love.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { src: decoratedSedan, alt: "Luxury white sedan with white rose and marigold garland" },
              { src: brideArrival, alt: "Bride and groom arriving in a decorated luxury car" },
              { src: decoratedSuv, alt: "Premium black SUV with floral wedding decoration" },
            ].map((g, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl overflow-hidden glass-strong group"
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  width={1600}
                  height={1000}
                  className="w-full h-80 md:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Blocks — full-width image → copy */}
      <ContentBlock
        image={brideArrival}
        alt="Bride and groom seated in a decorated luxury wedding car"
        eyebrow="For the Bride & Groom"
        title="A grand entry, perfectly planned."
        body="Beautifully detailed cars, fresh flowers and drivers who understand the timing of a wedding day. Har arrival planned, har doorstep taken care of."
      />

      <ContentBlock
        image={guestTransport}
        alt="A line of premium sedans and SUVs receiving guests at a wedding venue"
        eyebrow="For Your Guests"
        title="Full guest travel, city to venue."
        body="Airport pickups, hotel transfers, baraat processions and end-of-night drops — planned across sedans, SUVs and coaches so no guest is ever left waiting."
      />

      <ContentBlock
        image={chauffeurService}
        alt="Professional chauffeur opening the rear door of a luxury sedan"
        eyebrow="Handled End-to-End"
        title="Clean cars. Warm, professional drivers."
        body="Uniformed drivers, spotless interiors, real-time coordination and one contact person throughout your celebration. Aap moment enjoy karo — hum movement sambhalte hain."
        cta
      />
    </PageLayout>
  );
}

function ContentBlock({
  image, alt, eyebrow, title, body, cta,
}: { image: string; alt: string; eyebrow: string; title: string; body: string; cta?: boolean }) {
  return (
    <section className="px-6 pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden glass-strong"
        >
          <img
            src={image}
            alt={alt}
            loading="lazy"
            width={1600}
            height={1000}
            className="w-full h-[42vh] md:h-[58vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 md:mt-10 max-w-3xl"
        >
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">{eyebrow}</div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4">{title}</h2>
          <p className="text-luxury-gray text-base md:text-lg leading-relaxed">{body}</p>
          {cta && (
            <Link
              to="/inquiry"
              search={{ type: "Wedding Inquiry" }}
              className="mt-8 inline-flex btn-gold px-7 py-3.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium"
            >
              Plan My Wedding Travel
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label }: { label: string }) {
  return (
    <input
      placeholder={label}
      className="w-full glass rounded-xl px-4 py-3 text-sm text-premium-white placeholder:text-luxury-gray/70 outline-none focus:border-[var(--gold)]/50"
    />
  );
}
