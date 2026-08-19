import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { Phone, MessageCircle, Sparkles, Search as SearchIcon } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PackageSlider } from "@/components/PackageSlider";
import { packages, priceLines, regionLabel, type Region } from "@/data/packages";
import { BRAND } from "@/lib/brand";
import kashmir from "@/assets/dest-kashmir.jpg";
import { pageSeo, breadcrumbLdJson, faqLdJson } from "@/lib/seo";

export const Route = createFileRoute("/tours/")({
  validateSearch: (search: Record<string, unknown>) => ({
    q: typeof search.q === "string" ? search.q : undefined,
  }),
  head: () => ({
    ...pageSeo({
      title: "India Tour Packages & Pilgrimage Tours from Kanpur | Rudra Tours",
      description:
        "Explore 25+ curated tour packages from Kanpur: Ayodhya Ram Mandir, Kashi Vishwanath, Mathura-Vrindavan, Char Dham Yatra, Kashmir & holiday packages.",
      path: "/tours",
      image: kashmir,
    }),
    ...breadcrumbLdJson([{ name: "Tour Packages", path: "/tours" }]),
    ...faqLdJson([
      {
        question: "Do you offer custom India tour packages?",
        answer:
          "Yes. We build custom packages around your dates, budget, city of departure and preferred vehicle.",
      },
      {
        question: "Can I book pilgrimage and family tours from Kanpur?",
        answer:
          "Yes. We regularly arrange pilgrimage, family and leisure trips from Kanpur and nearby cities such as Lucknow.",
      },
      {
        question: "Are prices shown per vehicle or per person?",
        answer:
          "The listed prices are package or vehicle pricing, so you can compare the trip cost clearly before you enquire.",
      },
      {
        question: "Do you also arrange transport for group tours?",
        answer:
          "Yes. We provide sedans, SUVs, tempo travellers, Urbania and buses for groups of many sizes.",
      },
    ]),
  }),
  component: ToursPage,
});

type FilterId = "all" | Region;
const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All Tours" },
  { id: "pilgrimage", label: "Pilgrimage" },
  { id: "north", label: "North India" },
  { id: "west", label: "West India" },
  { id: "south", label: "South India" },
];

const POPULAR = [
  { label: "Kashmir", slug: "kashmir-paradise" },
  { label: "Kullu Manali", slug: "kullu-manali" },
  { label: "Rajasthan", slug: "rajasthan-heritage" },
  { label: "Kerala", slug: "kerala-tour" },
  { label: "Goa", slug: "goa-tour" },
  { label: "Varanasi", slug: "kashi-vishwanath" },
];

const SEARCH_HINTS = ["Kashmir", "Goa", "Kedarnath", "Ayodhya", "Rajasthan", "Manali"];

function matchesQuery(p: (typeof packages)[number], q: string): boolean {
  const needle = q.trim().toLowerCase();
  if (!needle) return true;
  if (p.name.toLowerCase().includes(needle)) return true;
  if (p.destinations.some((d) => d.toLowerCase().includes(needle))) return true;
  if (p.states.some((s) => s.toLowerCase().includes(needle))) return true;
  if (regionLabel[p.region].toLowerCase().includes(needle)) return true;
  return false;
}

function ToursPage() {
  const { q } = Route.useSearch();
  const [filter, setFilter] = useState<FilterId>("all");

  const list = useMemo(() => {
    const base = filter === "all" ? packages : packages.filter((t) => t.region === filter);
    return q ? base.filter((t) => matchesQuery(t, q)) : base;
  }, [filter, q]);

  const noResults = list.length === 0;

  // Scroll to anchor (?#slug) after the grid renders.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const tries = [0, 120, 360];
    tries.forEach((t) =>
      window.setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, t),
    );
  }, []);

  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Tour Packages", to: "/tours" }]} />
      <PageHero
        eyebrow="Travel Packages"
        title={
          <>
            India tour packages, <span className="shine-text italic">made easy</span> for you.
          </>
        }
        subtitle="Twenty-five ready-to-go itineraries across pilgrimage, heritage, hills and beaches — handpicked by our friendly Kanpur team. Bilkul easy booking."
        image={kashmir}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl">
          {q && (
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs text-luxury-gray">
              <SearchIcon className="w-4 h-4 text-gold" />
              <span>
                Showing results for <span className="text-premium-white">"{q}"</span>
              </span>
              <Link
                to="/tours"
                className="text-gold hover:underline uppercase tracking-[0.2em] text-[10px]"
              >
                Clear search
              </Link>
            </div>
          )}

          <div className="flex flex-wrap items-center gap-3 mb-8 md:mb-10">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] transition-all ${
                  filter === f.id
                    ? "bg-[var(--gold)] text-[var(--primary-foreground)]"
                    : "glass text-luxury-gray hover:text-premium-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {noResults ? (
            <NoResults query={q ?? ""} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {list.map((t, i) => (
                <motion.article
                  key={t.slug}
                  id={t.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -8 }}
                  className="group glass-strong rounded-3xl overflow-hidden border border-white/5 hover:border-[var(--gold)]/40 transition-all duration-500 flex flex-col scroll-mt-28"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <PackageSlider images={t.images} alt={t.name} interval={4500 + i * 200} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent pointer-events-none" />
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center gap-2 z-10">
                      <div className="px-3 py-1 glass-dark rounded-full text-[10px] uppercase tracking-[0.3em] text-gold font-semibold whitespace-nowrap">
                        {regionLabel[t.region]}
                      </div>
                      <div className="px-3 py-1 glass-dark rounded-full text-[10px] uppercase tracking-[0.2em] text-premium-white font-medium whitespace-nowrap">
                        {t.days} Days
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <h3 className="font-display text-2xl mb-1 leading-tight">{t.name}</h3>
                      <p className="text-luxury-gray text-xs">{t.destinations.join(" · ")}</p>
                    </div>
                  </div>

                  <div className="p-5 border-t border-white/5 flex flex-col gap-4">
                    <div className="space-y-1">
                      {priceLines(t.pricing).map((line) => (
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
                        params={{ slug: t.slug }}
                        className="btn-ghost-luxe px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-center inline-flex items-center justify-center"
                      >
                        View Details
                      </Link>
                      <Link
                        to="/inquiry"
                        search={{ type: "Tour Inquiry", package: t.name }}
                        className="w-full btn-gold px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium text-center inline-flex items-center justify-center"
                      >
                        Plan My Trip
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-7 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
            Frequently Asked Questions
          </div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Tour planning questions, answered.
          </h2>
          <div className="grid gap-4">
            {[
              [
                "Do you offer custom India tour packages?",
                "Yes. We build custom packages around your dates, budget, city of departure and preferred vehicle.",
              ],
              [
                "Can I book pilgrimage and family tours from Kanpur?",
                "Yes. We regularly arrange pilgrimage, family and leisure trips from Kanpur and nearby cities such as Lucknow.",
              ],
              [
                "Are prices shown per vehicle or per person?",
                "The listed prices are package or vehicle pricing, so you can compare the trip cost clearly before you enquire.",
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

function NoResults({ query }: { query: string }) {
  const navigate = Route.useNavigate();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      role="status"
      aria-live="polite"
      className="glass-strong rounded-3xl border border-white/5 p-8 md:p-12 text-center"
    >
      <div className="mx-auto w-16 h-16 rounded-full grid place-items-center glass mb-6 border border-[var(--gold)]/30">
        <Sparkles className="w-6 h-6 text-gold" />
      </div>

      <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">No Results Found</div>
      <h2 className="font-display text-3xl md:text-4xl mb-3">
        {query ? (
          <>
            Sorry! We couldn't find packages for <span className="italic">"{query}"</span>.
          </>
        ) : (
          "Oops! No travel packages found."
        )}
      </h2>
      <p className="text-luxury-gray max-w-xl mx-auto mb-8">
        We couldn't find any packages matching your search — but don't worry. Our travel experts can
        create a completely personalised trip just for you, based on your budget, dates and style.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <Link
          to="/tours/customize"
          className="btn-gold px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium"
        >
          Create My Custom Package
        </Link>
        <button
          onClick={() => navigate({ to: "/tours", search: {} })}
          className="glass px-7 py-3 rounded-full text-xs uppercase tracking-[0.2em] text-premium-white hover:text-gold transition-colors"
        >
          Explore All Tour Packages
        </button>
      </div>

      <div className="mb-8">
        <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-4">
          Popular Destinations
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {POPULAR.map((p) => (
            <Link
              key={p.slug}
              to="/tours/$slug"
              params={{ slug: p.slug }}
              className="glass px-4 py-2 rounded-full text-xs text-premium-white hover:text-gold hover:border-[var(--gold)]/40 border border-transparent transition-all"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-3">
          Try Searching For
        </div>
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-luxury-gray">
          {SEARCH_HINTS.map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span className="text-premium-white">{s}</span>
              {i < SEARCH_HINTS.length - 1 && <span className="text-luxury-gray/40">·</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-white/5">
        <p className="text-sm text-luxury-gray mb-4">
          Can't find your dream destination? Talk to our travel experts.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href={BRAND.whatsappHref}
            target="_blank"
            rel="noreferrer"
            aria-label="Chat with us on WhatsApp"
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] text-premium-white hover:text-gold transition-colors"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
          <a
            href={BRAND.phoneHref}
            aria-label={`Call ${BRAND.phone}`}
            className="inline-flex items-center gap-2 glass px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] text-premium-white hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <Link
            to="/tours/customize"
            className="inline-flex items-center gap-2 btn-gold px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.2em] font-medium"
          >
            Request Custom Package
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
