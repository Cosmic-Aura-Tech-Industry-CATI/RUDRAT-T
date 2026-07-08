import { LANDING_PAGES } from "../data/seo-landings";

export type SitemapEntry = {
  loc: string;
  changefreq: "daily" | "weekly" | "monthly";
  priority: string;
  lastmod?: string;
};

const DESTINATION_SLUGS = [
  "kashmir",
  "ladakh",
  "himachal-pradesh",
  "uttarakhand",
  "rajasthan",
  "goa",
  "kerala",
];

const STATIC_PAGES: SitemapEntry[] = [
  { loc: "/", changefreq: "weekly", priority: "1.0" },
  { loc: "/about", changefreq: "monthly", priority: "0.8" },
  { loc: "/contact", changefreq: "monthly", priority: "0.8" },
  { loc: "/destinations", changefreq: "monthly", priority: "0.8" },
  { loc: "/gallery", changefreq: "monthly", priority: "0.7" },
  { loc: "/inquiry", changefreq: "monthly", priority: "0.8" },
  { loc: "/reviews", changefreq: "monthly", priority: "0.7" },
  { loc: "/tours", changefreq: "weekly", priority: "0.9" },
  { loc: "/tours/customize", changefreq: "monthly", priority: "0.7" },
  { loc: "/vehicles", changefreq: "weekly", priority: "0.9" },
  { loc: "/weddings", changefreq: "monthly", priority: "0.8" },
];

const PACKAGE_SLUGS = [
  "ayodhya-darshan",
  "mathura-vrindavan",
  "chitrakoot-tour",
  "khatu-shyam-ji",
  "mahakal-omkareshwar",
  "kashi-vishwanath",
  "prayagraj-sangam",
  "haridwar-rishikesh",
  "nainital-tour",
  "mussoorie-tour",
  "neem-karoli-kainchi-dham",
  "kullu-manali",
  "shimla-tour",
  "vaishno-devi",
  "jaipur-tour",
  "rajasthan-heritage",
  "goa-tour",
  "kerala-tour",
  "amritsar-wagah",
  "ujjain-indore",
  "dwarka-somnath",
  "rameshwaram-madurai",
  "leh-ladakh",
  "mumbai-tour",
  "kashmir-paradise",
  "char-dham-yatra",
];

export function getSitemapEntries(lastmod: string): SitemapEntry[] {
  return [
    ...STATIC_PAGES.map((entry) => ({ ...entry, lastmod })),
    ...LANDING_PAGES.map((page) => ({
      loc: `/${page.slug}`,
      changefreq: "monthly" as const,
      priority: page.kind === "service" ? "0.8" : "0.7",
      lastmod,
    })),
    ...DESTINATION_SLUGS.map((slug) => ({
      loc: `/destinations/${slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
      lastmod,
    })),
    ...PACKAGE_SLUGS.map((slug) => ({
      loc: `/tours/${slug}`,
      changefreq: "monthly" as const,
      priority: "0.7",
      lastmod,
    })),
  ];
}

export function buildSitemapXml(origin: string, lastmod: string): string {
  const entries = getSitemapEntries(lastmod)
    .map(
      (entry) =>
        `  <url>\n    <loc>${origin}${entry.loc}</loc>\n    <lastmod>${entry.lastmod ?? lastmod}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`;
}
