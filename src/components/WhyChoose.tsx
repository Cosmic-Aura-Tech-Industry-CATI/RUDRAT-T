import { motion } from "framer-motion";
import { SectionHeader } from "./Destinations";
import {
  Sparkles,
  Crown,
  BadgeIndianRupee,
  HeartHandshake,
  Headphones,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Handpicked Tour Packages",
    text: "Itineraries planned by real travel experts — not by any random algorithm.",
  },
  {
    icon: Crown,
    title: "Premium Vehicles",
    text: "Clean, sanitised cars with friendly drivers — sedans, SUVs, tempo travellers and luxury coaches.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Best Price Promise",
    text: "Simple, honest pricing. Find a cheaper quote — we'll match it and beat it.",
  },
  {
    icon: HeartHandshake,
    title: "Wedding Travel Experts",
    text: "From baraat to bidaai — guest pickups, decorated cars and full family fleets.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    text: "A real human on call, any time of day or night. Tension-free travel, guaranteed.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    text: "GPS-tracked cars, verified drivers and full insurance — travel with peace of mind.",
  },
];

export function WhyChoose() {
  return (
    <section className="relative py-5 md:py-6 lg:py-8 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Rudra" title="Why thousands of travellers trust us." />

        <div className="mt-8 md:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/10">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-background p-8 hover:bg-card transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-xl border border-[var(--gold)]/30 grid place-items-center mb-5 group-hover:border-[var(--gold)] transition-colors">
                <f.icon
                  className="w-5 h-5 text-gold transition-transform duration-500 group-hover:scale-110"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-display text-xl mb-3">{f.title}</h3>
              <p className="text-sm text-luxury-gray leading-relaxed">{f.text}</p>
              <div className="absolute bottom-0 left-0 h-px w-0 bg-gold group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
