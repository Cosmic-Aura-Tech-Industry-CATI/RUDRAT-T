import kashmir from "@/assets/dest-kashmir.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import goa from "@/assets/dest-goa.jpg";
import kerala from "@/assets/dest-kerala.jpg";

export type DestinationGuide = {
  slug: string;
  name: string;
  image: string;
  overview: string;
  highlights: string[];
  bestTime: string;
  faqs: { question: string; answer: string }[];
  featuredPackages: string[];
};

export const DESTINATIONS: DestinationGuide[] = [
  {
    slug: "kashmir",
    name: "Kashmir",
    image: kashmir,
    overview:
      "Shikara rides, snow valleys and cedar-lined escapes make Kashmir one of India's most searched tour destinations.",
    highlights: ["Dal Lake", "Gulmarg Gondola", "Pahalgam", "Sonmarg"],
    bestTime: "March to June for greenery and December to February for snow.",
    faqs: [
      {
        question: "What is the best time to visit Kashmir?",
        answer:
          "March to June is ideal for green valleys, while December to February suits snow travellers.",
      },
      {
        question: "Which Kashmir places are included in your tours?",
        answer:
          "Most itineraries cover Srinagar, Gulmarg, Pahalgam and Sonmarg depending on your trip length.",
      },
    ],
    featuredPackages: ["kashmir-paradise", "vaishno-devi"],
  },
  {
    slug: "ladakh",
    name: "Ladakh",
    image: ladakh,
    overview:
      "High-altitude lakes, monasteries and dramatic roads make Ladakh a bucket-list road trip from North India.",
    highlights: ["Pangong Lake", "Nubra Valley", "Khardung La", "Thiksey Monastery"],
    bestTime: "May to September when the high passes are open.",
    faqs: [
      {
        question: "When should I plan a Ladakh trip?",
        answer:
          "May to September is the safest and most practical window because the roads and passes stay open.",
      },
      {
        question: "Do Ladakh packages include lake and monastery stops?",
        answer:
          "Yes. Our Ladakh itineraries are built around the classic lake, valley and monastery circuit.",
      },
    ],
    featuredPackages: ["leh-ladakh"],
  },
  {
    slug: "himachal-pradesh",
    name: "Himachal Pradesh",
    image: himachal,
    overview:
      "From Manali's adventure circuits to Shimla's colonial charm, Himachal remains a classic mountain escape.",
    highlights: ["Manali", "Shimla", "Solang Valley", "Dharamshala"],
    bestTime: "March to June for pleasant weather and December to February for snow.",
    faqs: [
      {
        question: "What is the best season for Himachal Pradesh?",
        answer:
          "March to June is best for sightseeing, while December to February suits snow-focused trips.",
      },
      {
        question: "Can I combine Shimla and Manali in one itinerary?",
        answer: "Yes. Many travellers combine Shimla and Manali into a single hill-station route.",
      },
    ],
    featuredPackages: ["kullu-manali", "shimla-tour"],
  },
  {
    slug: "uttarakhand",
    name: "Uttarakhand",
    image: uttarakhand,
    overview:
      "Temple circuits, river towns and hill stations make Uttarakhand ideal for spiritual and scenic itineraries.",
    highlights: ["Haridwar", "Rishikesh", "Nainital", "Mussoorie"],
    bestTime: "March to June for hill travel and October to December for pilgrimage trips.",
    faqs: [
      {
        question: "When is the best time for Uttarakhand travel?",
        answer:
          "March to June works well for the hills, while October to December is strong for pilgrimage travel.",
      },
      {
        question: "Which Uttarakhand destinations do you cover?",
        answer:
          "Our itineraries commonly include Haridwar, Rishikesh, Nainital, Mussoorie and Neem Karoli routes.",
      },
    ],
    featuredPackages: [
      "haridwar-rishikesh",
      "nainital-tour",
      "mussoorie-tour",
      "neem-karoli-kainchi-dham",
    ],
  },
  {
    slug: "rajasthan",
    name: "Rajasthan",
    image: rajasthan,
    overview:
      "Palaces, desert forts and heritage cities give Rajasthan a strong cultural search intent across India.",
    highlights: ["Jaipur", "Jodhpur", "Udaipur", "Jaisalmer"],
    bestTime: "October to March for cool, comfortable sightseeing.",
    faqs: [
      {
        question: "What is the best season for Rajasthan tours?",
        answer:
          "October to March gives the most comfortable weather for forts, palaces and desert sightseeing.",
      },
      {
        question: "Can Rajasthan tours include heritage and desert stops?",
        answer:
          "Yes. We can combine Jaipur, heritage cities and desert-focused stops depending on the package.",
      },
    ],
    featuredPackages: ["jaipur-tour", "rajasthan-heritage", "khatu-shyam-ji"],
  },
  {
    slug: "goa",
    name: "Goa",
    image: goa,
    overview:
      "Beach holidays, Portuguese heritage and nightlife make Goa one of the most competitive destination searches.",
    highlights: ["North Goa", "South Goa", "Old Goa", "Dudhsagar"],
    bestTime: "November to February for the best beach weather.",
    faqs: [
      {
        question: "When should I book a Goa holiday?",
        answer:
          "November to February is best for pleasant beach weather, sightseeing and water activities.",
      },
      {
        question: "Do Goa packages cover beaches and heritage areas?",
        answer:
          "Yes. Goa trips can include North Goa beaches, South Goa relaxation and Old Goa heritage stops.",
      },
    ],
    featuredPackages: ["goa-tour"],
  },
  {
    slug: "kerala",
    name: "Kerala",
    image: kerala,
    overview:
      "Backwaters, tea hills and coastal wellness stays make Kerala a premium leisure destination year-round.",
    highlights: ["Munnar", "Alleppey", "Thekkady", "Kovalam"],
    bestTime: "September to March for the most comfortable travel conditions.",
    faqs: [
      {
        question: "What is the best time to visit Kerala?",
        answer:
          "September to March is the most comfortable window for backwaters, beaches and hill stations.",
      },
      {
        question: "Can Kerala itineraries include Munnar and Alleppey?",
        answer:
          "Yes. We can combine tea hills, backwaters and coastal stays into one relaxed Kerala route.",
      },
    ],
    featuredPackages: ["kerala-tour"],
  },
];

export function getDestinationBySlug(slug: string) {
  return DESTINATIONS.find((destination) => destination.slug === slug);
}
