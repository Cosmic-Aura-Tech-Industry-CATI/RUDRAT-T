import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Star } from "lucide-react";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeader } from "@/components/Destinations";
import { reviews } from "@/data/reviews";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import hero from "@/assets/hero-suv.jpg";
import abhayNigamPhoto from "@/assets/team/abhay-nigam.jpg";
import rudraFounderPhoto from "@/assets/team/rudra-founder.jpg";
import { pageSeo, breadcrumbLdJson } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...pageSeo({
      title: "About Us | Rudra Tours & Travels — Trusted Travel Agency in Kanpur",
      description:
        "Founded in 2014 by Mr. Abhay Nigam in Kanpur, Rudra Tours & Travels has served over 1 Lakh+ happy travellers with reliable cabs and tour packages.",
      path: "/about",
      image: hero,
    }),
    ...breadcrumbLdJson([{ name: "About", path: "/about" }]),
  }),
  component: AboutPage,
});

const storySections = [
  {
    eyebrow: "The Dream",
    title: "Where it all began",
    paragraphs: [
      "Every good journey starts with a dream. For Rudra Tour and Travels, that dream came true in 2014, when Mr. Abhay Nigam decided to build a travel company based on trust, honesty and a genuine wish to help people explore the world with ease.",
      "The company was lovingly named after his son, Rudra Nigam — making it more than a business. It became a reflection of family values, hope and a bright vision for the future.",
    ],
  },
  {
    eyebrow: "The Struggle",
    title: "Built through challenges",
    paragraphs: [
      "Like every new beginning, the journey wasn't easy. Starting with limited resources, Mr. Abhay Nigam faced many challenges in the early years — difficult days, uncertain moments and countless obstacles. But his determination never shook. With hard work, patience and a promise to always serve customers honestly, he slowly built the trust that became the foundation of the company.",
    ],
  },
  {
    eyebrow: "The Growth",
    title: "A name you can trust",
    paragraphs: [
      "What started as a small travel agency has grown into a trusted name in the travel industry. Today, Rudra Tour and Travels has proudly served over 1 lakh happy travellers — helping families, groups and businesses create yaadgaar journeys across India and beyond.",
      "We believe every traveller is different, so we offer a wide range of services for every need — from carefully planned tour packages and customised itineraries to comfortable car and vehicle rentals. Family vacation ho, pilgrimage ho, honeymoon ho, corporate trip ho ya weekend getaway — our goal is simple: safe, smooth and enjoyable travel every time.",
    ],
  },
  {
    eyebrow: "The Promise",
    title: "Our promise to you",
    paragraphs: [
      "For us, success isn't just the number of trips we've organised — it's the smiles of our customers and the relationships we've built over the years. Every trip we plan is guided by the same values we started with: honesty, dedication, transparency and full customer satisfaction.",
      "As we continue to grow, our promise stays the same — reliable travel services, personalised care and yaadgaar journeys you'll cherish for life.",
      "At Rudra Tour and Travels, we don't just plan trips — we help create memories that last forever.",
    ],
  },
];

const founderPhotos = [
  {
    src: abhayNigamPhoto,
    alt: "Mr. Abhay Nigam, Founder of Rudra Tours & Travels",
    caption: "Mr. Abhay Nigam",
    role: "Founder",
  },
  {
    src: rudraFounderPhoto,
    alt: "Rudra Nigam, son of founder Mr. Abhay Nigam, after whom the company is named",
    caption: "Rudra Nigam",
    role: "The name behind the brand",
  },
];

function AboutPage() {
  return (
    <PageLayout>
      <Breadcrumbs items={[{ label: "About", to: "/about" }]} />
      <PageHero
        eyebrow="Our Story"
        title={
          <>
            About Rudra Tours & Travels — <span className="shine-text italic">14+ years</span> on
            the road.
          </>
        }
        subtitle="Born in Kanpur, raised on every road of India. Rudra Tours & Travels is here for travellers who measure a trip by its memories, not its kilometres."
        image={hero}
      />

      <section id="founder-story" className="relative px-6 pb-10 md:pb-12 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="Our Journey"
            title="The story behind Rudra Tours & Travels."
            subtitle="A family dream, built one honest trip at a time."
          />

          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {founderPhotos.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="group relative rounded-3xl glass-strong overflow-hidden hover:border-[var(--gold)]/40 transition-all duration-500"
              >
                <div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  style={{ background: "var(--gradient-radial-gold)" }}
                />
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
                </div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">
                    {p.role}
                  </div>
                  <div className="font-display text-xl md:text-2xl">{p.caption}</div>
                </figcaption>
              </motion.figure>
            ))}
          </div>

          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-10 glass-strong rounded-3xl p-7 md:p-10 lg:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-8">
              {storySections.map((section, i) => (
                <div key={i} className="space-y-4">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {section.eyebrow}
                  </div>
                  <h4 className="font-display text-xl md:text-2xl leading-tight">
                    {section.title}
                  </h4>
                  <div className="space-y-4 text-luxury-gray leading-[1.75] text-[15px] md:text-base">
                    {section.paragraphs.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </section>

      <section id="about-gallery" className="relative px-6 pb-10 md:pb-12 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Moments"
            title="Moments from the road."
            subtitle="Har tasveer ek yaadgar safar ki kahani kehti hai — moments captured straight from our travellers' journeys."
          />
          <div className="mt-8 md:mt-9">
            <GalleryGrid limit={12} />
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/gallery"
              aria-label="View full gallery"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium float-y"
            >
              View <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section id="about-reviews" className="relative px-6 pb-12 md:pb-16 overflow-hidden">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Guest Stories"
            title="Words from the road."
            subtitle="Unedited, unpaid, unfiltered."
          />
          <div className="mt-8 md:mt-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 9).map((r, i) => (
              <motion.div
                key={`${r.name}-${i}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 6) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6 }}
                className="glass-strong rounded-2xl p-7"
              >
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star key={k} className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-premium-white/90 mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--accent-blue)] grid place-items-center font-display text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm">{r.name}</div>
                    <div className="text-xs text-luxury-gray">{r.city}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-end">
            <Link
              to="/reviews"
              aria-label="View all reviews"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.24em] font-medium float-y"
            >
              View <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
