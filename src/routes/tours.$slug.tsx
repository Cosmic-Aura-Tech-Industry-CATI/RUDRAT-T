import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { packages, priceLines } from "@/data/packages";
import { pageSeo, breadcrumbLdJson, faqLdJson, absoluteUrl } from "@/lib/seo";

import { packageContent } from "@/data/packageContent";
import { Timeline } from "@/components/Timeline";
import { FAQAccordion } from "@/components/FAQAccordion";
import { TourImageGallery } from "@/components/TourImageGallery";
import { TourTestimonials } from "@/components/TourTestimonials";
import { StickyBookingSummary } from "@/components/StickyBookingSummary";
import { FloatingBookCTA } from "@/components/FloatingBookCTA";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const pkg = packages.find((item) => item.slug === params.slug);
    if (!pkg) throw notFound();
    const content = packageContent[params.slug];
    return {
      pkg: {
        ...pkg,
        content,
      },
    };
  },
  head: ({ loaderData }) => {
    const seoMeta = pageSeo({
      title: `${loaderData.pkg.name} | India Tour Package`,
      description:
        loaderData.pkg.tagline ||
        `${loaderData.pkg.name} is a ${loaderData.pkg.days}-day India tour package covering ${loaderData.pkg.destinations.join(", ")}.`,
      path: `/tours/${loaderData.pkg.slug}`,
      image: loaderData.pkg.images[0],
    });

    const graph: Record<string, unknown>[] = [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Tour Packages",
            item: absoluteUrl("/tours"),
          },
          {
            "@type": "ListItem",
            position: 2,
            name: loaderData.pkg.name,
            item: absoluteUrl(`/tours/${loaderData.pkg.slug}`),
          },
        ],
      },
    ];

    if (loaderData.pkg.content?.faqs) {
      graph.push({
        "@type": "FAQPage",
        mainEntity: loaderData.pkg.content.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      });
    }

    if (loaderData.pkg.content?.itinerary) {
      graph.push({
        "@type": "TouristTrip",
        name: loaderData.pkg.name,
        description: loaderData.pkg.tagline || loaderData.pkg.name,
        touristType: "Leisure, Pilgrimage",
        itinerary: {
          "@type": "ItemList",
          numberOfItems: loaderData.pkg.days,
          itemListElement: loaderData.pkg.content.itinerary.map((day, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            item: {
              "@type": "TouristAttraction",
              name: day.title,
              description: day.description,
            },
          })),
        },
      });
    }

    return {
      meta: seoMeta.meta,
      links: seoMeta.links,
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": graph,
      },
    };
  },
  component: TourDetailPage,
});

function TourDetailPage() {
  const { pkg } = Route.useLoaderData();
  const related = packages
    .filter((item) => item.region === pkg.region && item.slug !== pkg.slug)
    .slice(0, 3);

  return (
    <PageLayout>
      <Breadcrumbs
        items={[
          { label: "Tour Packages", to: "/tours" },
          { label: pkg.name, to: `/tours/${pkg.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Tour Package"
        title={
          <>
            {pkg.name} <span className="shine-text italic">tour package</span>.
          </>
        }
        subtitle={
          pkg.tagline || `${pkg.days}-day itinerary covering ${pkg.destinations.join(", ")}.`
        }
        image={pkg.images[0]}
      >
        <div className="flex flex-wrap gap-4 text-xs md:text-sm mt-6">
          {pkg.bestSeason && (
            <div className="glass px-4 py-2 rounded-full border border-white/5 flex items-center gap-2">
              <span className="text-gold font-medium uppercase tracking-wider text-[10px]">
                Best Season:
              </span>
              <span className="text-premium-white/80">{pkg.bestSeason}</span>
            </div>
          )}
          {pkg.startingPrice && (
            <div className="glass px-4 py-2 rounded-full border border-gold/20 flex items-center gap-2">
              <span className="text-gold font-medium uppercase tracking-wider text-[10px]">
                Starting From:
              </span>
              <span className="text-gold font-semibold">{pkg.startingPrice}</span>
            </div>
          )}
          {pkg.highlights &&
            pkg.highlights.slice(0, 3).map((highlight) => (
              <div
                key={highlight}
                className="glass px-4 py-2 rounded-full border border-white/5 flex items-center gap-2 text-premium-white/60"
              >
                <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
        </div>
      </PageHero>

      {/* Main 2-Column Responsive Layout */}
      <section className="px-6 pb-12 md:pb-16">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          {/* Left Column: Itinerary, Guide, and Interactive elements */}
          <div className="space-y-12">
            {/* Overview / Why Travelers Book */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-strong rounded-3xl p-7 md:p-10"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                Trip Overview
              </div>
              <h2 className="font-display text-3xl md:text-4xl mb-4 text-premium-white leading-tight">
                Why travellers book this route.
              </h2>
              <p className="text-luxury-gray leading-relaxed mb-6 text-sm md:text-base">
                This package is designed for travellers looking for a smooth, well-planned route
                with comfortable stays, clear pricing and a travel team that understands the
                destination.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <InfoCard label="Duration" value={`${pkg.days} Days`} />
                <InfoCard label="Destinations" value={pkg.destinations.length.toString()} />
                <InfoCard label="Region" value={pkg.region.toUpperCase()} />
              </div>

              <div className="space-y-3">
                {pkg.destinations.map((destination) => (
                  <div
                    key={destination}
                    className="flex items-center gap-3 text-sm text-premium-white"
                  >
                    <Check className="w-4 h-4 text-gold shrink-0" />
                    {destination}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Interactive Image Gallery */}
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3xl text-premium-white">
                Tour Image Gallery
              </h2>
              <TourImageGallery images={pkg.images} packageName={pkg.name} />
            </div>

            {/* Extended SEO Content Guide */}
            {pkg.content && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="font-display text-2xl md:text-3xl text-premium-white mb-4">
                    About the Journey
                  </h2>
                  <p className="text-luxury-gray leading-relaxed text-sm md:text-base">
                    {pkg.content.overview}
                  </p>
                </div>

                <div className="border-t border-white/5 pt-8">
                  <h3 className="font-display text-xl text-gold mb-3">History & Heritage</h3>
                  <p className="text-luxury-gray leading-relaxed text-sm">{pkg.content.history}</p>
                </div>

                <div className="border-t border-white/5 pt-8">
                  <h3 className="font-display text-xl text-gold mb-3">
                    Cultural & Spiritual Significance
                  </h3>
                  <p className="text-luxury-gray leading-relaxed text-sm">
                    {pkg.content.significance}
                  </p>
                </div>

                {/* Key Attractions Grid */}
                <div className="border-t border-white/5 pt-8 space-y-6">
                  <h3 className="font-display text-xl text-premium-white">
                    Top Attractions & Landmarks
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {pkg.content.attractions.map((attraction) => (
                      <div
                        key={attraction.name}
                        className="p-5 rounded-2xl glass border border-white/5 bg-white/[0.01] hover:border-gold/20 transition-all duration-300"
                      >
                        <h4 className="font-display text-base text-gold mb-2">{attraction.name}</h4>
                        <p className="text-luxury-gray text-xs leading-relaxed">
                          {attraction.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hidden Gems Grid */}
                <div className="border-t border-white/5 pt-8 space-y-6">
                  <h3 className="font-display text-xl text-premium-white">
                    Hidden Gems & Local Secrets
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {pkg.content.hiddenGems.map((gem) => (
                      <div
                        key={gem.name}
                        className="p-4 rounded-xl border border-white/5 bg-white/[0.01]"
                      >
                        <h4 className="font-display text-sm text-gold mb-2">{gem.name}</h4>
                        <p className="text-luxury-gray text-xs leading-relaxed">
                          {gem.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Day-by-Day Itinerary Timeline */}
            {pkg.content && (
              <div className="border-t border-white/5 pt-8 space-y-6">
                <h2 className="font-display text-2xl md:text-3xl text-premium-white">
                  Day-by-Day Itinerary
                </h2>
                <Timeline items={pkg.content.itinerary} />
              </div>
            )}

            {/* Tour Reviews & Testimonials */}
            <div className="border-t border-white/5 pt-8">
              <TourTestimonials packageName={pkg.name} destinations={pkg.destinations} />
            </div>
          </div>

          {/* Right Column: Original Pricing card, Local insights, Logistics, and Sticky Booking */}
          <div className="space-y-8 lg:sticky lg:top-28">
            {/* Original Pricing card */}
            <motion.aside
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="glass-strong rounded-3xl p-7 md:p-10 h-fit"
            >
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Pricing</div>
              <h2 className="font-display text-3xl md:text-4xl mb-6 text-premium-white leading-tight">
                Transparent pricing.
              </h2>
              <div className="space-y-3 mb-8">
                {priceLines(pkg.pricing).map((line) => (
                  <div
                    key={line.label}
                    className="flex items-baseline justify-between gap-3 border-b border-white/5 pb-3"
                  >
                    <span className="text-[11px] uppercase tracking-[0.18em] text-luxury-gray">
                      {line.label}
                    </span>
                    <span className="text-gold font-medium">{line.value}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/inquiry"
                search={{ type: "Tour Inquiry", package: pkg.name }}
                className="btn-gold w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
              >
                Plan This Trip <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.aside>

            {/* Local Insights Widget */}
            {pkg.content && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-6 md:p-8 space-y-6 border border-white/5"
              >
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Festivals & Culture
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">
                    {pkg.content.festivals}
                  </p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Food & Cuisine
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">{pkg.content.food}</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Shopping Souvenirs
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">{pkg.content.shopping}</p>
                </div>
              </motion.div>
            )}

            {/* Logistics & Practical Info */}
            {pkg.content && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-6 md:p-8 space-y-6 border border-white/5"
              >
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Weather & Climate
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">{pkg.content.weather}</p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    How to Reach from Kanpur
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">
                    {pkg.content.howToReach}
                  </p>
                </div>
                <hr className="border-white/5" />
                <div>
                  <h4 className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                    Accommodation Info
                  </h4>
                  <p className="text-luxury-gray text-xs leading-relaxed">
                    {pkg.content.accommodation}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Travel Tips List */}
            {pkg.content && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-6 md:p-8 space-y-4 border border-white/5"
              >
                <h4 className="font-display text-base text-premium-white mb-2">
                  Essential Travel Tips
                </h4>
                <ul className="space-y-3">
                  {pkg.content.tips.map((tip, idx) => (
                    <li
                      key={idx}
                      className="flex gap-2 text-xs text-luxury-gray leading-relaxed align-top"
                    >
                      <span className="text-gold text-xs shrink-0 select-none">•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {/* Sticky Booking Summary Widget (renders sticky card on desktop, floating bottom bar on mobile) */}
            <StickyBookingSummary pkg={pkg} />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {pkg.content && (
        <section className="px-6 pb-12 md:pb-16 border-t border-white/5 pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
              <div>
                <h2 className="font-display text-2xl md:text-3xl text-premium-white mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-luxury-gray text-xs md:text-sm">
                  Find quick answers to common queries regarding routes, planning, and logistics for
                  this tour.
                </p>
              </div>
              <FAQAccordion items={pkg.content.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related Packages section */}
      {related.length > 0 && (
        <section className="px-6 pb-14 md:pb-16 border-t border-white/5 pt-12">
          <div className="mx-auto max-w-6xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Related Packages
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6 text-premium-white">
              More routes like this.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to="/tours/$slug"
                  params={{ slug: item.slug }}
                  className="glass-strong rounded-2xl p-5 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.25em] text-luxury-gray mb-2">
                    {item.days} Days
                  </div>
                  <div className="font-display text-xl leading-tight mb-2 text-premium-white">
                    {item.name}
                  </div>
                  <p className="text-xs text-luxury-gray">{item.destinations.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Floating CTA (visible after scroll on mobile/desktop) */}
      <FloatingBookCTA packageName={pkg.name} />
    </PageLayout>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-center sm:text-left">
      <div className="text-[9px] uppercase tracking-[0.22em] text-luxury-gray mb-2">{label}</div>
      <div className="font-display text-xl text-premium-white">{value}</div>
    </div>
  );
}
