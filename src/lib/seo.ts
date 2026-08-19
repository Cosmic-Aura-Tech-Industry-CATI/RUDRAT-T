import logoAsset from "@/assets/rudra-logo.png";
import { BRAND } from "@/lib/brand";

export const SITE = {
  name: "Rudra Tours & Travels",
  legalName: "Rudra Tours and Travels",
  url: "https://www.toursbyrudra.com",
  description:
    "Best cab service, car rental, and tour packages in Kanpur & Uttar Pradesh. 24x7 taxi booking, Innova Crysta, tempo travellers, wedding luxury cars & outstation cabs.",
  titleSuffix: "Rudra Tours & Travels",
  logo: logoAsset,
  locale: "en_IN",
};

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
};

type BreadcrumbItem = {
  name: string;
  path: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

function joinPath(path: string): string {
  return path.startsWith("/") ? path : `/${path}`;
}

export function absoluteUrl(path: string): string {
  return new URL(joinPath(path), SITE.url).toString();
}

export function toAbsoluteAssetUrl(assetUrl?: string): string | undefined {
  if (!assetUrl) return undefined;
  if (/^https?:\/\//i.test(assetUrl)) return assetUrl;
  return absoluteUrl(assetUrl);
}

export function pageSeo({
  title,
  description,
  path,
  image,
  noindex = false,
  breadcrumbs,
  faqs,
  schema,
}: SeoOptions & {
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}) {
  const canonical = absoluteUrl(path);
  const imageUrl = toAbsoluteAssetUrl(image) ?? absoluteUrl(SITE.logo);
  const robots = noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:large";

  const scripts: Array<{ type: string; children: string }> = [];

  if (breadcrumbs && breadcrumbs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: absoluteUrl(item.path),
        })),
      }),
    });
  }

  if (faqs && faqs.length > 0) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      }),
    });
  }

  if (schema) {
    scripts.push({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    });
  }

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: robots },
      { name: "theme-color", content: "#0f1620" },
      { property: "og:site_name", content: SITE.name },
      { property: "og:locale", content: SITE.locale },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:type", content: "website" },
      { property: "og:image", content: imageUrl },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: imageUrl },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts,
  };
}

export function breadcrumbLdJson(items: BreadcrumbItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
  return {
    "script:ld+json": schema,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  };
}

export function faqLdJson(items: FaqItem[]) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return {
    "script:ld+json": schema,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  };
}

export function combineSeoHead(
  ...heads: Array<{
    meta?: Array<Record<string, unknown>>;
    links?: Array<Record<string, unknown>>;
    scripts?: Array<{ type?: string; children?: string; [key: string]: unknown }>;
    [key: string]: unknown;
  }>
) {
  const meta: Array<Record<string, unknown>> = [];
  const links: Array<Record<string, unknown>> = [];
  const scripts: Array<{ type?: string; children?: string; [key: string]: unknown }> = [];

  for (const head of heads) {
    if (head.meta) meta.push(...head.meta);
    if (head.links) links.push(...head.links);
    if (head.scripts) scripts.push(...head.scripts);
  }

  return {
    meta,
    links,
    scripts,
  };
}

export function organizationSchema() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: "3/46 LIG Swarn Jayanti Vihar, Koyala Nagar, Mall Road",
    addressLocality: "Kanpur",
    addressRegion: "Uttar Pradesh",
    postalCode: "208001",
    addressCountry: "IN",
  };

  const geoCoordinates = {
    "@type": "GeoCoordinates",
    latitude: 26.3899338,
    longitude: 80.3581066,
  };

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1280",
    bestRating: "5",
    worstRating: "1",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        legalName: SITE.legalName,
        alternateName: [
          "Rudra Tours and Travels",
          "Rudra Cab Service Kanpur",
          "Rudra Tour and Travels",
          "Rudra Car Rental Kanpur",
        ],
        url: SITE.url,
        logo: absoluteUrl(SITE.logo),
        image: absoluteUrl(SITE.logo),
        email: BRAND.email,
        telephone: BRAND.phone,
        foundingDate: "2014",
        founder: {
          "@type": "Person",
          name: "Mr. Abhay Nigam",
        },
        sameAs: BRAND.socialLinks.length ? BRAND.socialLinks.map((link) => link.href) : undefined,
        address,
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "customer service",
            telephone: BRAND.phone,
            email: BRAND.email,
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
          },
          {
            "@type": "ContactPoint",
            contactType: "reservations",
            telephone: BRAND.phone,
            email: BRAND.email,
            availableLanguage: ["English", "Hindi"],
            areaServed: "IN",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        alternateName: [
          "Rudra Tours and Travels",
          "Rudra Cab Service Kanpur",
          "Rudra Tour & Travels",
        ],
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        potentialAction: {
          "@type": "SearchAction",
          target: `${SITE.url}/tours?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "TaxiService",
        "@id": `${SITE.url}/#taxi-service`,
        name: "Rudra Taxi Service & Cab Booking Kanpur",
        url: `${SITE.url}/taxi-service-kanpur`,
        image: absoluteUrl(SITE.logo),
        provider: { "@id": `${SITE.url}/#organization` },
        serviceType: "Taxi service, Cab Booking, Outstation Cabs & Airport Transfer",
        areaServed: [
          "Kanpur",
          "Lucknow",
          "Ayodhya",
          "Prayagraj",
          "Varanasi",
          "Agra",
          "Delhi NCR",
          "Uttar Pradesh",
          "India",
        ],
        telephone: BRAND.phone,
        priceRange: "₹₹",
        hasMap: BRAND.mapsUrl,
        geo: geoCoordinates,
        address,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
      {
        "@type": "AutoRental",
        "@id": `${SITE.url}/#auto-rental`,
        name: "Rudra Car Rental Kanpur",
        url: `${SITE.url}/vehicles`,
        image: absoluteUrl(SITE.logo),
        provider: { "@id": `${SITE.url}/#organization` },
        serviceType: "Car Rental, SUV Hire, Innova Crysta & Luxury Wedding Cars",
        areaServed: ["Kanpur", "Uttar Pradesh", "India"],
        telephone: BRAND.phone,
        priceRange: "₹₹",
        hasMap: BRAND.mapsUrl,
        geo: geoCoordinates,
        address,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
      {
        "@type": "TravelAgency",
        "@id": `${SITE.url}/#travel-agency`,
        name: SITE.name,
        url: SITE.url,
        logo: absoluteUrl(SITE.logo),
        image: absoluteUrl(SITE.logo),
        telephone: BRAND.phone,
        email: BRAND.email,
        sameAs: BRAND.socialLinks.length ? BRAND.socialLinks.map((link) => link.href) : undefined,
        priceRange: "₹₹",
        address,
        geo: geoCoordinates,
        areaServed: ["India", "Uttar Pradesh", "Kanpur", "Lucknow"],
        hasMap: BRAND.mapsUrl,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
      },
      {
        "@type": "ItemList",
        "@id": `${SITE.url}/#site-navigation`,
        name: "Main Navigation",
        itemListElement: [
          {
            "@type": "SiteNavigationElement",
            position: 1,
            name: "Car Rental in Kanpur",
            description: "Book sedans, SUVs, Innova Crysta, Fortuner & tempo travellers in Kanpur.",
            url: `${SITE.url}/vehicles`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 2,
            name: "Taxi Service Kanpur",
            description:
              "24x7 local taxi, railway station pickup, airport drop & city cab booking.",
            url: `${SITE.url}/taxi-service-kanpur`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 3,
            name: "Cab Booking Kanpur",
            description: "Instant cab hire for local city rides and outstation journeys across UP.",
            url: `${SITE.url}/cab-booking-kanpur`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 4,
            name: "Outstation Taxi Service",
            description:
              "One-way and round-trip outstation cabs from Kanpur to Lucknow, Ayodhya, Varanasi & Delhi.",
            url: `${SITE.url}/outstation-taxi`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 5,
            name: "Tempo Traveller Kanpur",
            description:
              "Hire 12, 17 and 26 seater tempo travellers & Force Urbania for group travel.",
            url: `${SITE.url}/tempo-traveller-kanpur`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 6,
            name: "India Tour Packages",
            description:
              "Curated tour packages: Ayodhya Ram Mandir, Kashi Vishwanath, Mathura, Char Dham & Kashmir.",
            url: `${SITE.url}/tours`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 7,
            name: "Wedding Car Rental",
            description:
              "Luxury wedding cars in Kanpur: Audi, BMW, Mercedes, vintage cars & baraat buses.",
            url: `${SITE.url}/weddings`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 8,
            name: "About Us",
            description:
              "Learn about Rudra Tours and Travels, trusted by 1 Lakh+ happy travellers since 2014.",
            url: `${SITE.url}/about`,
          },
          {
            "@type": "SiteNavigationElement",
            position: 9,
            name: "Contact Us",
            description:
              "Get in touch with our Kanpur travel team for instant bookings and quotes.",
            url: `${SITE.url}/contact`,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/#service-tour-packages`,
        name: "India Tour Packages",
        serviceType: "Tour packages & Pilgrimages",
        provider: { "@id": `${SITE.url}/#travel-agency` },
        areaServed: "India",
        url: `${SITE.url}/tours`,
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/#service-vehicle-rentals`,
        name: "Car Rental and Taxi Service Kanpur",
        serviceType: "Vehicle rentals & Cabs",
        provider: { "@id": `${SITE.url}/#taxi-service` },
        areaServed: ["Kanpur", "Uttar Pradesh", "India"],
        url: `${SITE.url}/vehicles`,
      },
      {
        "@type": "Service",
        "@id": `${SITE.url}/#service-wedding-travel`,
        name: "Wedding Car Rental Kanpur",
        serviceType: "Wedding car rental & guest fleet",
        provider: { "@id": `${SITE.url}/#travel-agency` },
        areaServed: ["Kanpur", "Uttar Pradesh", "India"],
        url: `${SITE.url}/weddings`,
      },
    ],
  };
}

export function organizationLdJson() {
  const schema = organizationSchema();
  return {
    "script:ld+json": schema,
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  };
}
