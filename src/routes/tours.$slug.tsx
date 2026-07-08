import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { packages, priceLines } from "@/data/packages";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/tours/$slug")({
  loader: ({ params }) => {
    const pkg = packages.find((item) => item.slug === params.slug);
    if (!pkg) throw notFound();
    return { pkg };
  },
  head: ({ loaderData }) => ({
    ...pageSeo({
      title: `${loaderData.pkg.name} | India Tour Package`,
      description: `${loaderData.pkg.name} is a ${loaderData.pkg.days}-day India tour package covering ${loaderData.pkg.destinations.join(", ")}.`,
      path: `/tours/${loaderData.pkg.slug}`,
      image: loaderData.pkg.images[0],
    }),
    ...breadcrumbLdJson([
      { name: "Tour Packages", path: "/tours" },
      { name: loaderData.pkg.name, path: `/tours/${loaderData.pkg.slug}` },
    ]),
  }),
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
        subtitle={`${pkg.days}-day itinerary covering ${pkg.destinations.join(", ")} with transparent pricing and easy planning from Kanpur.`}
        image={pkg.images[0]}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-6xl grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
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
            <h2 className="font-display text-3xl md:text-4xl mb-4">
              Why travellers book this route.
            </h2>
            <p className="text-luxury-gray leading-relaxed mb-6">
              This package is designed for travellers looking for a smooth, well-planned route with
              comfortable stays, clear pricing and a travel team that understands the destination.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
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

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="glass-strong rounded-3xl p-7 md:p-10 h-fit"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">Pricing</div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">Transparent package pricing.</h2>
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
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-6 pb-14 md:pb-16">
          <div className="mx-auto max-w-7xl">
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
              Related Packages
            </div>
            <h2 className="font-display text-3xl md:text-4xl mb-6">More routes like this.</h2>
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
                  <div className="font-display text-2xl leading-tight mb-2">{item.name}</div>
                  <p className="text-sm text-luxury-gray">{item.destinations.join(" · ")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageLayout>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
      <div className="text-[10px] uppercase tracking-[0.22em] text-luxury-gray mb-2">{label}</div>
      <div className="font-display text-2xl">{value}</div>
    </div>
  );
}
