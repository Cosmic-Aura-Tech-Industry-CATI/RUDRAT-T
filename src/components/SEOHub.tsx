import { Link } from "@tanstack/react-router";
import { LANDING_PAGES } from "@/data/seo-landings";

const servicePages = LANDING_PAGES.filter((page) => page.kind === "service").slice(0, 8);
const locationPages = LANDING_PAGES.filter((page) => page.kind === "location").slice(0, 8);

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
            Find the right travel page faster.
          </h2>
          <p className="mt-4 text-luxury-gray text-base md:text-lg max-w-2xl">
            These internal links help travellers jump straight into the exact service or city guide
            they need, which improves both user flow and crawl depth.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              Service Pages
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {servicePages.map((page) => (
                <Link
                  key={page.slug}
                  to="/$slug"
                  params={{ slug: page.slug }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                    {page.kind === "service" ? "Service" : "Guide"}
                  </div>
                  <div className="font-display text-2xl leading-tight mb-2">{page.eyebrow}</div>
                  <p className="text-sm text-luxury-gray">{page.title}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-4">
              City Guides
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {locationPages.map((page) => (
                <Link
                  key={page.slug}
                  to="/$slug"
                  params={{ slug: page.slug }}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                    City Guide
                  </div>
                  <div className="font-display text-2xl leading-tight mb-2">{page.eyebrow}</div>
                  <p className="text-sm text-luxury-gray">{page.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
