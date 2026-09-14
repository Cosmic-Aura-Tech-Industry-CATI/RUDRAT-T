import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHero } from "@/components/PageHero";
import { PageLayout } from "@/components/PageLayout";
import { DESTINATIONS, getDestinationBySlug } from "@/data/destinations";
import { packages } from "@/data/packages";
import { breadcrumbLdJson, faqLdJson, pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/destinations/$slug")({
  loader: ({ params }) => {
    const destination = getDestinationBySlug(params.slug);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ loaderData }) =>
    pageSeo({
      title: `${loaderData.destination.name} Tour Guide | Rudra Tours and Travels`,
      description: `${loaderData.destination.name} travel guide with top highlights, best season advice and package options from Rudra Tours and Travels.`,
      path: `/destinations/${loaderData.destination.slug}`,
      image: loaderData.destination.image,
      breadcrumbs: [
        { name: "Destinations", path: "/destinations" },
        {
          name: loaderData.destination.name,
          path: `/destinations/${loaderData.destination.slug}`,
        },
      ],
      faqs: loaderData.destination.faqs,
    }),
  component: DestinationDetailPage,
});

function DestinationDetailPage() {
  const { destination } = Route.useLoaderData();

  const relatedPackages = packages.filter((item) =>
    destination.featuredPackages.includes(item.slug),
  );

  return (
    <PageLayout>
      <Breadcrumbs
        items={[
          { label: "Destinations", to: "/destinations" },
          { label: destination.name, to: `/destinations/${destination.slug}` },
        ]}
      />
      <PageHero
        eyebrow="Destination Guide"
        title={
          <>
            {destination.name} <span className="shine-text italic">travel guide</span>.
          </>
        }
        subtitle={destination.overview}
        image={destination.image}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-7 md:p-10"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Why Visit</div>
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              What makes this route popular.
            </h2>
            <p className="text-luxury-gray leading-relaxed mb-6">
              This guide gives travellers a quick read on the destination so they can decide the
              right season, trip style and package before enquiring.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {destination.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-4 flex items-center gap-3"
                >
                  <Check className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-sm text-premium-white">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/5 bg-white/[0.03] p-5">
              <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                Best Time to Visit
              </div>
              <p className="text-premium-white leading-relaxed">{destination.bestTime}</p>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-strong rounded-3xl p-7 md:p-10 h-fit"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Suggested Packages
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Trips that cover this destination.
            </h2>

            <div className="space-y-4 mb-8">
              {relatedPackages.map((item) => (
                <Link
                  key={item.slug}
                  to="/tours/$slug"
                  params={{ slug: item.slug }}
                  className="block rounded-2xl border border-white/5 bg-white/[0.03] p-4 hover:border-[var(--gold)]/40 transition-colors"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                    {item.days} Days
                  </div>
                  <div className="font-display text-2xl leading-tight mb-2">{item.name}</div>
                  <p className="text-sm text-luxury-gray">{item.destinations.join(" · ")}</p>
                </Link>
              ))}
            </div>

            <Link
              to="/inquiry"
              search={{ type: "Destination Inquiry", package: destination.name }}
              className="btn-gold w-full px-5 py-3 rounded-full text-[11px] uppercase tracking-[0.2em] font-medium inline-flex items-center justify-center gap-2"
            >
              Plan This Destination <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.aside>
        </div>
      </section>

      <section className="px-6 pb-14 md:pb-16">
        <div className="mx-auto max-w-5xl glass-strong rounded-3xl p-7 md:p-10">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">FAQs</div>
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            {destination.name} travel questions, answered.
          </h2>
          <div className="grid gap-4">
            {destination.faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5"
              >
                <summary className="cursor-pointer list-none font-medium text-premium-white flex items-center justify-between gap-4">
                  <span>{faq.question}</span>
                  <span className="text-gold text-lg">+</span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-luxury-gray">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {DESTINATIONS.length > 1 && (
        <section className="px-6 pb-14 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Other Guides
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">More places to compare.</h2>
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
              {DESTINATIONS.filter((item) => item.slug !== destination.slug)
                .slice(0, 4)
                .map((item) => (
                  <Link
                    key={item.slug}
                    to="/destinations/$slug"
                    params={{ slug: item.slug }}
                    className="glass-strong rounded-2xl p-4 hover:border-[var(--gold)]/40 transition-colors"
                  >
                    <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">
                      Destination Guide
                    </div>
                    <div className="font-display text-2xl leading-tight">{item.name}</div>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}
