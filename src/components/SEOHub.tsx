import { Link } from "@tanstack/react-router";
import { LANDING_PAGES } from "@/data/seo-landings";

const cabServices = LANDING_PAGES.filter(
  (page) => page.kind === "service" && !page.slug.startsWith("kanpur-to-"),
).slice(0, 6);

const outstationRoutes = LANDING_PAGES.filter((page) => page.slug.startsWith("kanpur-to-")).slice(
  0,
  6,
);

const locationPages = LANDING_PAGES.filter((page) => page.kind === "location").slice(0, 6);

export function SEOHub() {
  return (
    <section className="px-6 py-14 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl mb-8 md:mb-10">
          <div className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-gold mb-4">
            <span className="w-8 h-px bg-gold" />
            Popular Searches
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-light leading-[1.05]">
            Find the right cab, route or tour page.
          </h2>
          <p className="mt-4 text-luxury-gray text-base md:text-lg max-w-2xl">
            Quickly book local cabs in Kanpur, outstation taxis across Uttar Pradesh, or explore
            handpicked holiday and pilgrimage packages.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cabs & Rentals */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Kanpur Cab & Car Rental
            </div>
            <div className="grid gap-3 flex-1">
              {cabServices.map((page) => (
                <Link
                  key={page.slug}
                  to="/$slug"
                  params={{ slug: page.slug }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-1">
                    Service
                  </div>
                  <div className="font-display text-xl leading-tight mb-1">{page.eyebrow}</div>
                  <p className="text-xs text-luxury-gray line-clamp-2">{page.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Outstation Routes */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Popular Outstation Routes
            </div>
            <div className="grid gap-3 flex-1">
              {outstationRoutes.map((page) => (
                <Link
                  key={page.slug}
                  to="/$slug"
                  params={{ slug: page.slug }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-1">
                    Outstation Route
                  </div>
                  <div className="font-display text-xl leading-tight mb-1">{page.eyebrow}</div>
                  <p className="text-xs text-luxury-gray line-clamp-2">{page.title}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* City Guides */}
          <div className="glass-strong rounded-3xl p-6 md:p-8 flex flex-col">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              UP City & Travel Guides
            </div>
            <div className="grid gap-3 flex-1">
              {locationPages.map((page) => (
                <Link
                  key={page.slug}
                  to="/$slug"
                  params={{ slug: page.slug }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-1">
                    City Guide
                  </div>
                  <div className="font-display text-xl leading-tight mb-1">{page.eyebrow}</div>
                  <p className="text-xs text-luxury-gray line-clamp-2">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
