import logoAsset from "@/assets/rudra-logo.png";
import { BRAND } from "@/lib/brand";

export const SITE = {
  name: "Rudra Tours and Travels",
  url: "https://www.toursbyrudra.com",
  description:
    "Rudra Tours and Travels offers handpicked India tour packages, car rentals and wedding travel from Kanpur.",
  titleSuffix: "Rudra Tours and Travels",
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

export function pageSeo({ title, description, path, image, noindex = false }: SeoOptions) {
  const canonical = absoluteUrl(path);
  const imageUrl = toAbsoluteAssetUrl(image) ?? absoluteUrl(SITE.logo);
  const robots = noindex
    ? "noindex,nofollow"
    : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:large";

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
  };
}

export function breadcrumbLdJson(items: BreadcrumbItem[]) {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: absoluteUrl(item.path),
      })),
    },
  };
}

export function faqLdJson(items: FaqItem[]) {
  return {
    "script:ld+json": {
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
    },
  };
}

export function organizationLdJson() {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: SITE.name,
          url: SITE.url,
          logo: absoluteUrl(SITE.logo),
          email: BRAND.email,
          telephone: BRAND.phone,
          sameAs: BRAND.socialLinks.length ? BRAND.socialLinks.map((link) => link.href) : undefined,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mall Road, Civil Lines",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              contactType: "customer service",
              telephone: BRAND.phone,
              email: BRAND.email,
              availableLanguage: ["English", "Hindi"],
            },
          ],
        },
        {
          "@type": "WebSite",
          "@id": `${SITE.url}/#website`,
          url: SITE.url,
          name: SITE.name,
          description: SITE.description,
          publisher: { "@id": `${SITE.url}/#organization` },
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE.url}/tours?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        },
        {
          "@type": "TravelAgency",
          "@id": `${SITE.url}/#travel-agency`,
          name: SITE.name,
          url: SITE.url,
          logo: absoluteUrl(SITE.logo),
          telephone: BRAND.phone,
          email: BRAND.email,
          sameAs: BRAND.socialLinks.length ? BRAND.socialLinks.map((link) => link.href) : undefined,
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mall Road, Civil Lines",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN",
          },
          areaServed: "India",
          hasMap: BRAND.mapsUrl,
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "20:00",
            },
          ],
        },
        {
          "@type": "LocalBusiness",
          "@id": `${SITE.url}/#local-business`,
          name: SITE.name,
          url: SITE.url,
          logo: absoluteUrl(SITE.logo),
          telephone: BRAND.phone,
          email: BRAND.email,
          sameAs: BRAND.socialLinks.length ? BRAND.socialLinks.map((link) => link.href) : undefined,
          address: {
            "@type": "PostalAddress",
            streetAddress: "Mall Road, Civil Lines",
            addressLocality: "Kanpur",
            addressRegion: "Uttar Pradesh",
            postalCode: "208001",
            addressCountry: "IN",
          },
          areaServed: ["India", "Kanpur", "Lucknow"],
          serviceType: "Local travel, tour packages and wedding travel",
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "09:00",
              closes: "20:00",
            },
          ],
        },
        {
          "@type": "Service",
          "@id": `${SITE.url}/#service-tour-packages`,
          name: "India Tour Packages",
          serviceType: "Tour packages",
          provider: { "@id": `${SITE.url}/#travel-agency` },
          areaServed: "India",
          url: `${SITE.url}/tours`,
        },
        {
          "@type": "Service",
          "@id": `${SITE.url}/#service-vehicle-rentals`,
          name: "Car Rental and Taxi Service",
          serviceType: "Vehicle rentals",
          provider: { "@id": `${SITE.url}/#local-business` },
          areaServed: "India",
          url: `${SITE.url}/vehicles`,
        },
        {
          "@type": "Service",
          "@id": `${SITE.url}/#service-wedding-travel`,
          name: "Wedding Car Rental",
          serviceType: "Wedding travel",
          provider: { "@id": `${SITE.url}/#travel-agency` },
          areaServed: "India",
          url: `${SITE.url}/weddings`,
        },
      ],
    },
  };
}
