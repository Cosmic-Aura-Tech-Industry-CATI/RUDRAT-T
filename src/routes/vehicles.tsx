import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Users,
  UserCheck,
  MapPin,
  Shield,
  Headphones,
  Sparkles,
  BadgeIndianRupee,
  Wrench,
  Plane,
  Building2,
  Heart,
  Mountain,
  Users2,
  Crown,
  PhoneCall,
  MessageCircle,
  ArrowRight,
  Filter,
  KeyRound,
} from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BRAND } from "@/lib/brand";
import hero from "@/assets/hero-suv.jpg";
import {
  CATEGORIES,
  VEHICLES,
  CATEGORY_BY_ID,
  priceFor,
  type Vehicle,
  type CategoryId,
  type RentalType,
} from "@/data/vehicles";
import { pageSeo, breadcrumbLdJson, faqLdJson } from "@/lib/seo";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    ...pageSeo({
      title: "Car Rental, Taxi Service & Tempo Traveller Booking",
      description:
        "Book hatchbacks, sedans, SUVs, tempo travellers, luxury cars and buses with driver or self drive across India.",
      path: "/vehicles",
      image: hero,
    }),
    ...breadcrumbLdJson([{ name: "Vehicle Rentals", path: "/vehicles" }]),
    ...faqLdJson([
      {
        question: "Do you offer self drive and chauffeur driven cars?",
        answer:
          "Yes. We offer both self drive and chauffeur driven options across select vehicles and categories.",
      },
      {
        question: "Can I book a tempo traveller for group travel?",
        answer:
          "Yes. We have 12, 17 and 26 seater tempo traveller options for pilgrimages, family trips and group tours.",
      },
      {
        question: "Do you provide outstation cab service from Kanpur?",
        answer:
          "Yes. Our fleet covers local, outstation and long-distance travel from Kanpur and surrounding cities.",
      },
      {
        question: "Are luxury cars available for weddings?",
        answer: "Yes. We provide premium sedans and SUVs for weddings, events and VIP transfers.",
      },
    ]),
  }),
  component: VehiclesPage,
});

const RENTAL_TABS: { id: RentalType; label: string }[] = [
  { id: "local", label: "Local" },
  { id: "outstation", label: "Outstation" },
  { id: "selfDrive", label: "Self Drive" },
  { id: "withDriver", label: "With Driver" },
];

const stats = [
  { label: "Vehicles in Fleet", value: `${VEHICLES.length}+` },
  { label: "Vehicle Categories", value: `${CATEGORIES.length}` },
  { label: "Self-Drive Options", value: `${VEHICLES.filter((v) => v.selfDrive).length}` },
  { label: "Pan-India Service", value: "28 States" },
];

const whyChoose = [
  { icon: UserCheck, title: "Friendly, Experienced Drivers" },
  { icon: Headphones, title: "24 / 7 Support" },
  { icon: MapPin, title: "GPS-Enabled Cars" },
  { icon: Wrench, title: "Regularly Serviced" },
  { icon: Sparkles, title: "Clean & Sanitised" },
  { icon: BadgeIndianRupee, title: "Honest, Transparent Pricing" },
  { icon: Shield, title: "No Hidden Charges" },
  { icon: Mountain, title: "Pan-India Travel" },
];

const useCases = [
  { icon: Plane, title: "Airport Pickups & Drops" },
  { icon: Building2, title: "Corporate Travel" },
  { icon: Heart, title: "Wedding Cars" },
  { icon: Users2, title: "Family Vacations" },
  { icon: Sparkles, title: "Pilgrimage Trips" },
  { icon: Users, title: "Group Tours" },
  { icon: KeyRound, title: "Self Drive Rentals" },
  { icon: Crown, title: "VIP Events" },
];

function VehiclesPage() {
  const [rental, setRental] = useState<RentalType>("local");
  const [activeCat, setActiveCat] = useState<CategoryId | "all">("all");

  const filtered = useMemo(() => {
    let list =
      activeCat === "all" ? [...VEHICLES] : VEHICLES.filter((v) => v.category === activeCat);
    if (rental === "selfDrive") list = list.filter((v) => v.selfDrive);
    return list;
  }, [rental, activeCat]);

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Vehicle Rentals", to: "/vehicles" }]} />
      <PageHero
        eyebrow="Car & Vehicle Rentals"
        title={
          <>
            Car rental, taxi service and <span className="shine-text italic">tempo traveller</span>{" "}
            booking.
          </>
        }
        subtitle="Browse our full rental catalogue — hatchbacks to luxury coaches, with driver or self drive, all across India. Bilkul easy booking."
        image={hero}
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.7 }}
              className="glass rounded-2xl px-4 py-3"
            >
              <div className="text-gold font-display text-2xl">{s.value}</div>
              <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mt-1">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </PageHero>

      {/* RENTAL TYPE TABS */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-2 mb-3 text-[11px] uppercase tracking-[0.3em] text-gold">
            <Sparkles className="w-3.5 h-3.5" /> Rental Type
          </div>
          <div className="flex flex-wrap gap-2">
            {RENTAL_TABS.map((t) => {
              const active = rental === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setRental(t.id)}
                  className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${active ? "btn-gold" : "btn-ghost-luxe"}`}
                >
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORY FILTER */}
      <section className="px-6 mt-6">
        <div className="mx-auto max-w-7xl glass-strong rounded-2xl p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4 text-[11px] uppercase tracking-[0.3em] text-gold">
            <Filter className="w-3.5 h-3.5" /> Browse by Category
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCat("all")}
              className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${activeCat === "all" ? "btn-gold" : "btn-ghost-luxe"}`}
            >
              All ({VEHICLES.length})
            </button>
            {CATEGORIES.map((c) => {
              const count = VEHICLES.filter((v) => v.category === c.id).length;
              return (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] transition ${activeCat === c.id ? "btn-gold" : "btn-ghost-luxe"}`}
                >
                  {c.name} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VEHICLE GRID */}
      <section id="tempo-traveller" className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl">
          <SectionTitle
            eyebrow={`${activeCat === "all" ? "Full Fleet" : CATEGORY_BY_ID[activeCat].name}`}
            title={`${filtered.length} vehicles available.`}
          >
            {activeCat === "all"
              ? "Tap any category above to narrow down, or pick a rental type to see matching prices."
              : CATEGORY_BY_ID[activeCat].blurb}
          </SectionTitle>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v, i) => (
              <VehicleCard key={v.slug} v={v} rental={rental} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="mt-10 text-center text-luxury-gray glass-strong rounded-2xl p-10">
              No vehicles match this rental type in this category — try Local or Outstation instead.
            </div>
          )}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="px-6 py-14 md:py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--deep-2)]/50 to-transparent pointer-events-none" />
        <div className="relative mx-auto max-w-7xl">
          <SectionTitle eyebrow="Why Our Fleet" title="Built around your comfort.">
            Every ride is planned with safety, warm service and reliability at its heart.
          </SectionTitle>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {whyChoose.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.5 }}
                className="glass rounded-2xl p-5 hover:border-[var(--gold)]/40 transition-colors"
              >
                <span className="grid place-items-center w-11 h-11 rounded-full glass text-gold mb-3">
                  <w.icon className="w-5 h-5" />
                </span>
                <div className="text-sm font-medium text-premium-white">{w.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-6 py-14 md:py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Popular Use Cases" title="One fleet, every occasion.">
            Booked daily for weddings, weekend getaways and important business trips.
          </SectionTitle>
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {useCases.map((u, i) => (
              <motion.div
                key={u.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.45 }}
                whileHover={{ y: -4 }}
                className="glass-strong rounded-2xl p-6 text-center"
              >
                <span
                  className="grid place-items-center w-12 h-12 rounded-full mx-auto mb-3"
                  style={{ background: "var(--gradient-gold)" }}
                >
                  <u.icon className="w-5 h-5 text-[var(--deep)]" />
                </span>
                <div className="text-sm text-premium-white">{u.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK BOOK CTA */}
      <section className="px-6 py-16 md:py-20">
        <div
          className="mx-auto max-w-6xl relative rounded-3xl overflow-hidden border border-[var(--gold)]/30"
          style={{
            background:
              "linear-gradient(135deg, var(--deep-2) 0%, oklch(0.16 0.02 260) 60%, oklch(0.22 0.05 80 / 0.4) 100%)",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-40"
            style={{ background: "var(--gradient-radial-gold)" }}
          />
          <div className="relative p-10 md:p-16 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-gold mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Quick Booking
              </div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Need a car <span className="shine-text italic">today</span>?
              </h2>
              <p className="mt-4 text-luxury-gray max-w-md">
                Get instant pricing and availability from our travel team — bilkul easy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
              <a
                href={BRAND.phoneHref}
                className="btn-gold px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] inline-flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4" /> Call Now
              </a>
              <a
                href={BRAND.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn-ghost-luxe px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
              <Link
                to="/inquiry"
                search={{ type: "Vehicle Inquiry" }}
                className="btn-ghost-luxe px-6 py-3.5 rounded-full text-xs uppercase tracking-[0.22em] inline-flex items-center justify-center gap-2"
              >
                Get Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-7 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Vehicle booking questions, answered.
          </h2>
          <div className="grid gap-4">
            {[
              [
                "Do you offer self drive and chauffeur driven cars?",
                "Yes. We offer both self drive and chauffeur driven options across select vehicles and categories.",
              ],
              [
                "Can I book a tempo traveller for group travel?",
                "Yes. We have 12, 17 and 26 seater tempo traveller options for pilgrimages, family trips and group tours.",
              ],
              [
                "Do you provide outstation cab service from Kanpur?",
                "Yes. Our fleet covers local, outstation and long-distance travel from Kanpur and surrounding cities.",
              ],
            ].map(([q, a]) => (
              <details
                key={q}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-premium-white flex items-center justify-between gap-4">
                  <span>{q}</span>
                  <span className="text-gold text-lg">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-luxury-gray">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full glass text-[10px] tracking-[0.3em] uppercase text-luxury-gray">
        <span className="w-1.5 h-1.5 rounded-full bg-gold" /> {eyebrow}
      </div>
      <h2 className="mt-4 font-display text-4xl md:text-5xl font-light leading-tight">{title}</h2>
      {children && <p className="mt-3 text-luxury-gray">{children}</p>}
    </div>
  );
}

function VehicleCard({ v, rental, index }: { v: Vehicle; rental: RentalType; index: number }) {
  const categoryName = CATEGORY_BY_ID[v.category].name;
  const isLuxury = v.category === "luxury";
  const bookLabel = rental === "selfDrive" ? "Book Self Drive" : "Check Vehicle";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.04, 0.3) }}
      whileHover={{ y: -6 }}
      className="glass-strong rounded-2xl overflow-hidden border border-white/5 hover:border-[var(--gold)]/40 transition"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-b from-white/5 to-transparent">
        <img
          src={v.image}
          alt={v.name}
          loading="lazy"
          width={1280}
          height={800}
          className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
        />
        {v.popular && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-[0.22em] btn-gold">
            Popular
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{categoryName}</div>
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-xl">{v.name}</h4>
          <div className="flex items-center gap-1.5 text-xs text-luxury-gray whitespace-nowrap">
            <Users className="w-3.5 h-3.5 text-gold" /> {v.seats}
          </div>
        </div>
        <div className="mt-3 space-y-0.5">
          {isLuxury ? (
            <div className="text-gold font-display text-lg leading-tight">
              {priceFor(v, "local")}
            </div>
          ) : (
            <>
              <div className="text-gold font-display text-lg leading-tight">
                Local: ₹{v.local[0].toLocaleString("en-IN")} – ₹{v.local[1].toLocaleString("en-IN")}
              </div>
              <div className="text-xs text-luxury-gray">
                Outstation: ₹{v.outstation[0]} – ₹{v.outstation[1]}/km
              </div>
            </>
          )}
        </div>
        {v.notes && v.notes.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {v.notes.map((n) => (
              <span key={n} className="px-2 py-1 rounded-full glass text-[10px] text-luxury-gray">
                {n}
              </span>
            ))}
          </div>
        )}
        <div className="mt-5 flex items-center gap-2">
          <Link
            to="/inquiry"
            search={{ type: "Vehicle Inquiry", vehicle: v.name, category: categoryName, rental }}
            className="btn-gold px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em]"
          >
            {bookLabel}
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
