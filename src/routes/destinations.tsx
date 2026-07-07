import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import kashmir from "@/assets/dest-kashmir.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import goa from "@/assets/dest-goa.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    ...pageSeo({
      title: "India Tour Destinations | Rudra Tours and Travels",
      description: "Discover Kashmir, Ladakh, Goa, Kerala, Rajasthan, Himachal and Uttarakhand with Rudra Tours and Travels.",
      path: "/destinations",
      image: ladakh,
    }),
    ...breadcrumbLdJson([{ name: "Destinations", path: "/destinations" }]),
  }),
  component: DestinationsPage,
});

const places = [
  { name: "Kashmir", img: kashmir, blurb: "Shikara mornings on Dal Lake, snow-cloaked Gulmarg, the green meadows of Sonmarg.", highlights: ["Dal Lake", "Gulmarg Gondola", "Pahalgam", "Sonmarg"] },
  { name: "Ladakh", img: ladakh, blurb: "Moonscapes, monasteries and the highest motorable roads on earth.", highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Thiksey"] },
  { name: "Himachal Pradesh", img: himachal, blurb: "Manali's apple orchards, colonial Shimla and the lunar Spiti circuit.", highlights: ["Manali", "Shimla", "Spiti", "Dharamshala"] },
  { name: "Uttarakhand", img: uttarakhand, blurb: "Yoga ashrams, river rafting, and the four sacred shrines of Char Dham.", highlights: ["Rishikesh", "Mussoorie", "Char Dham", "Auli"] },
  { name: "Rajasthan", img: rajasthan, blurb: "Palaces, dunes, lakes and the most romantic sunsets in India.", highlights: ["Udaipur", "Jaisalmer", "Jodhpur", "Jaipur"] },
  { name: "Goa", img: goa, blurb: "Beach clubs, Portuguese quarters, sunset cruises and seafood feasts.", highlights: ["Anjuna", "Old Goa", "Palolem", "Dudhsagar"] },
  { name: "Kerala", img: kerala, blurb: "Backwater houseboats, Munnar's tea hills and the spice trails of Thekkady.", highlights: ["Munnar", "Alleppey", "Thekkady", "Kovalam"] },
];

function DestinationsPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "Destinations", to: "/destinations" }]} />
      <PageHero
        eyebrow="Destinations"
        title={<>Places you'll <span className="shine-text italic">love</span> to visit.</>}
        subtitle="A friendly guide to the destinations we know inside out — every trip refined over a decade on the road."
        image={ladakh}
      />

      <section className="px-6 pb-10 md:pb-12">
        <div className="mx-auto max-w-7xl space-y-10 md:space-y-12">
          {places.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong">
                <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">0{i + 1} / 0{places.length}</div>
                <h2 className="font-display text-5xl md:text-6xl font-light leading-tight mb-4">{p.name}</h2>
                <p className="text-luxury-gray text-lg leading-relaxed mb-6">{p.blurb}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.highlights.map((h) => (
                    <span key={h} className="px-4 py-1.5 rounded-full glass text-xs text-luxury-gray">{h}</span>
                  ))}
                </div>
                <Link to="/tours" className="btn-gold px-6 py-3 rounded-full text-xs uppercase tracking-[0.2em] font-medium">Explore Packages</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}
