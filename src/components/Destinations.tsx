import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { PackageSlider } from "./PackageSlider";
import { homepagePackages, priceLines } from "@/data/packages";

export function Destinations() {
  return (
    <section id="destinations" className="relative py-5 md:py-6 lg:py-8 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Popular Packages"
          title="Places you'll love."
          subtitle="Eight travel packages hand-picked by our Kanpur team — safar aasan, memories yaadgaar."
        />

        <div className="mt-8 md:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {homepagePackages.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card flex flex-col"
              style={{ aspectRatio: "4/5" }}
            >
              <PackageSlider images={p.images} alt={p.name} interval={4000 + i * 250} />

              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-[var(--gold)]/40 transition-all duration-500 pointer-events-none" />

              <div className="absolute top-4 left-4 px-3 py-1 rounded-full glass-dark text-[10px] tracking-[0.2em] uppercase text-premium-white font-medium z-10">
                {p.days} Days
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <h3 className="font-display text-2xl md:text-3xl mb-1 leading-tight">{p.name}</h3>
                <div className="text-xs text-luxury-gray mb-3">{p.destinations.join(" · ")}</div>

                <div className="space-y-0.5 mb-4">
                  {priceLines(p.pricing).map((line) => (
                    <div
                      key={line.label}
                      className="flex items-baseline justify-between gap-2 text-[11px]"
                    >
                      <span className="text-luxury-gray uppercase tracking-[0.15em]">
                        {line.label}
                      </span>
                      <span className="text-gold font-medium">{line.value}</span>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/tours/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center justify-center w-full btn-ghost-luxe px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium"
                  >
                    View Details
                  </Link>
                  <Link
                    to="/inquiry"
                    search={{ type: "Tour Inquiry", package: p.name }}
                    className="inline-flex items-center justify-center w-full btn-gold px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium"
                  >
                    Plan My Trip
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/tours"
            className="btn-gold inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium float-y"
          >
            See All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="max-w-3xl"
    >
      <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
        <span className="w-8 h-px bg-gold" />
        {eyebrow}
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-luxury-gray text-base md:text-lg max-w-xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
