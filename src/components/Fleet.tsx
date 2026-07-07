import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { SectionHeader } from "./Destinations";
import { Users, ArrowRight } from "lucide-react";
import { popularVehicles, CATEGORY_BY_ID } from "@/data/vehicles";

export function Fleet() {
  const fleet = popularVehicles();
  return (
    <section id="vehicles" className="relative py-5 md:py-6 lg:py-8 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--deep-2)]/50 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-7xl relative">
        <SectionHeader eyebrow="Our Fleet" title="Comfortable rides for every trip." subtitle="Every car is checked, cleaned and paired with a friendly driver who knows the roads." />

        <div className="mt-8 md:mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {fleet.map((v) => {
            const isLuxury = v.category === "luxury";
            return (
              <motion.div
                key={v.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px" }}
                transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl glass-strong p-7 overflow-hidden"
              >
                <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: "var(--gradient-radial-gold)" }} />

                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">{CATEGORY_BY_ID[v.category].name}</div>
                  <h3 className="font-display text-2xl mb-6">{v.name}</h3>

                  {/* Illuminated platform with vehicle image */}
                  <div className="relative aspect-[16/10] rounded-xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 overflow-hidden">
                    <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
                    <div className="absolute inset-x-12 bottom-0 h-20 blur-2xl bg-[var(--gold)]/30" />
                    <img
                      src={v.image}
                      alt={v.name}
                      loading="lazy"
                      width={1280}
                      height={800}
                      className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-luxury-gray">
                    <Users className="w-4 h-4" /> {v.seats} Seats
                  </div>

                  <div className="mt-3 space-y-0.5">
                    {isLuxury ? (
                      <div className="text-gold font-display text-lg leading-tight">Rental: ₹{v.local[0].toLocaleString("en-IN")} – ₹{v.local[1].toLocaleString("en-IN")}</div>
                    ) : (
                      <>
                        <div className="text-gold font-display text-lg leading-tight">Local: ₹{v.local[0].toLocaleString("en-IN")} – ₹{v.local[1].toLocaleString("en-IN")}</div>
                        <div className="text-xs text-luxury-gray">Outstation: ₹{v.outstation[0]} – ₹{v.outstation[1]}/km</div>
                      </>
                    )}
                  </div>

                  <Link
                    to="/inquiry"
                    search={{ type: "Vehicle Inquiry", vehicle: v.name, category: CATEGORY_BY_ID[v.category].name, rental: "local" }}
                    className="mt-5 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold hover:gap-3 transition-all"
                  >
                    Check Vehicle <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/vehicles"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium float-y"
          >
            See Full Fleet <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
