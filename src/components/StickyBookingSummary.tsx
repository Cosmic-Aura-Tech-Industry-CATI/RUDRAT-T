import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { formatINR, startingFrom, type Pkg } from "@/data/packages";

export function StickyBookingSummary({ pkg }: { pkg: Pkg }) {
  const price = startingFrom(pkg.pricing);

  return (
    <>
      {/* Desktop: sticky sidebar card */}
      <motion.aside
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="hidden lg:block sticky top-28 h-fit glass-strong rounded-3xl p-7 border border-white/5"
      >
        <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">Quick Booking</div>
        <h3 className="font-display text-2xl mb-4 leading-tight">{pkg.name}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-baseline justify-between gap-2 text-sm">
            <span className="text-luxury-gray">Duration</span>
            <span className="text-premium-white font-medium">{pkg.days} Days</span>
          </div>
          <div className="flex items-baseline justify-between gap-2 text-sm">
            <span className="text-luxury-gray">Starting from</span>
            <span className="text-gold font-display text-xl">{formatINR(price)}</span>
          </div>
          {pkg.bestSeason && (
            <div className="flex items-baseline justify-between gap-2 text-sm">
              <span className="text-luxury-gray">Best Season</span>
              <span className="text-premium-white">{pkg.bestSeason}</span>
            </div>
          )}
        </div>

        <div className="border-t border-white/5 pt-5 space-y-3">
          <Link
            to="/inquiry"
            search={{ type: "Tour Inquiry", package: pkg.name }}
            className="btn-gold w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
          >
            Plan This Trip <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/917014547628?text=Hello%20Rudra%20Tours%2C%20I%27d%20like%20to%20plan%20a%20journey."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-luxe w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
          >
            WhatsApp Us
          </a>
        </div>
      </motion.aside>

      {/* Mobile: fixed bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] lg:hidden glass-strong border-t border-white/10 px-4 py-3">
        <div className="flex items-center justify-between gap-3 max-w-lg mx-auto">
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-luxury-gray">
              Starting from
            </div>
            <div className="text-gold font-display text-xl">{formatINR(price)}</div>
          </div>
          <Link
            to="/inquiry"
            search={{ type: "Tour Inquiry", package: pkg.name }}
            className="btn-gold px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center gap-2"
          >
            Book Now <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </>
  );
}
