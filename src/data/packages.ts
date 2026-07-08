// Single source of truth for tour packages.
// Prices are strict per-vehicle ranges (or fixed for Char Dham).

import ayodhya1 from "@/assets/packages/ayodhya-darshan-1.jpg";
import ayodhya2 from "@/assets/packages/ayodhya-darshan-2.jpg";
import mathura1 from "@/assets/packages/mathura-vrindavan-1.jpg";
import mathura2 from "@/assets/packages/mathura-vrindavan-2.jpg";
import chitrakoot1 from "@/assets/packages/chitrakoot-1.jpg";
import chitrakoot2 from "@/assets/packages/chitrakoot-2.jpg";
import khatu1 from "@/assets/packages/khatu-shyam-1.jpg";
import khatu2 from "@/assets/packages/khatu-shyam-2.jpg";
import mahakal1 from "@/assets/packages/mahakal-omkareshwar-1.jpg";
import mahakal2 from "@/assets/packages/mahakal-omkareshwar-2.jpg";
import kashi1 from "@/assets/packages/kashi-vishwanath-1.jpg";
import kashi2 from "@/assets/packages/kashi-vishwanath-2.jpg";
import prayagraj1 from "@/assets/packages/prayagraj-1.jpg";
import prayagraj2 from "@/assets/packages/prayagraj-2.jpg";
import haridwar1 from "@/assets/packages/haridwar-rishikesh-1.jpg";
import haridwar2 from "@/assets/packages/haridwar-rishikesh-2.jpg";
import nainital1 from "@/assets/packages/nainital-1.jpg";
import nainital2 from "@/assets/packages/nainital-2.jpg";
import mussoorie1 from "@/assets/packages/mussoorie-1.jpg";
import mussoorie2 from "@/assets/packages/mussoorie-2.jpg";
import kullu1 from "@/assets/packages/kullu-manali-1.jpg";
import kullu2 from "@/assets/packages/kullu-manali-2.jpg";
import shimla1 from "@/assets/packages/shimla-1.jpg";
import shimla2 from "@/assets/packages/shimla-2.jpg";
import vaishno1 from "@/assets/packages/vaishno-devi-1.jpg";
import vaishno2 from "@/assets/packages/vaishno-devi-2.jpg";
import jaipur1 from "@/assets/packages/jaipur-1.jpg";
import jaipur2 from "@/assets/packages/jaipur-2.jpg";
import rajH1 from "@/assets/packages/rajasthan-heritage-1.jpg";
import rajH2 from "@/assets/packages/rajasthan-heritage-2.jpg";
import goa1 from "@/assets/packages/goa-1.jpg";
import goa2 from "@/assets/packages/goa-2.jpg";
import kerala1 from "@/assets/packages/kerala-1.jpg";
import kerala2 from "@/assets/packages/kerala-2.jpg";
import amritsar1 from "@/assets/packages/amritsar-1.jpg";
import amritsar2 from "@/assets/packages/amritsar-2.jpg";
import ujjain1 from "@/assets/packages/ujjain-indore-1.jpg";
import ujjain2 from "@/assets/packages/ujjain-indore-2.jpg";
import dwarka1 from "@/assets/packages/dwarka-somnath-1.jpg";
import dwarka2 from "@/assets/packages/dwarka-somnath-2.jpg";
import rames1 from "@/assets/packages/rameshwaram-madurai-1.jpg";
import rames2 from "@/assets/packages/rameshwaram-madurai-2.jpg";
import leh1 from "@/assets/packages/leh-ladakh-1.jpg";
import leh2 from "@/assets/packages/leh-ladakh-2.jpg";
import kashmir1 from "@/assets/packages/kashmir-paradise-1.jpg";
import kashmir2 from "@/assets/packages/kashmir-paradise-2.jpg";
import charDham1 from "@/assets/packages/char-dham-1.jpg";
import charDham2 from "@/assets/packages/char-dham-2.jpg";
import mumbai1 from "@/assets/packages/mumbai-1.jpg";
import mumbai2 from "@/assets/packages/mumbai-2.jpg";
import mumbai3 from "@/assets/packages/mumbai-3.jpg";
import neem1 from "@/assets/packages/neem-karoli-1.jpg";
import neem2 from "@/assets/packages/neem-karoli-2.jpg";
import neem3 from "@/assets/packages/neem-karoli-3.jpg";

export type Region = "north" | "south" | "west" | "pilgrimage";

export type Pricing =
  | { kind: "seater"; fiveSeater: [number, number]; sevenSeater: [number, number] }
  | { kind: "fixed"; tempo17: number; bus26: number };

export type Pkg = {
  slug: string;
  name: string;
  days: number;
  destinations: string[];
  region: Region;
  states: string[]; // for map cross-referencing
  images: string[];
  pricing: Pricing;
  homepage: boolean;
};

const seater = (a: [number, number], b: [number, number]): Pricing => ({
  kind: "seater",
  fiveSeater: a,
  sevenSeater: b,
});

export const packages: Pkg[] = [
  {
    slug: "ayodhya-darshan",
    name: "Ayodhya Darshan",
    days: 2,
    destinations: ["Ayodhya"],
    states: ["Uttar Pradesh"],
    region: "pilgrimage",
    images: [ayodhya1, ayodhya2],
    pricing: seater([5500, 6200], [7500, 8200]),
    homepage: true,
  },
  {
    slug: "mathura-vrindavan",
    name: "Mathura-Vrindavan",
    days: 2,
    destinations: ["Mathura", "Vrindavan"],
    states: ["Uttar Pradesh"],
    region: "pilgrimage",
    images: [mathura1, mathura2],
    pricing: seater([11000, 11700], [15000, 15700]),
    homepage: true,
  },
  {
    slug: "chitrakoot-tour",
    name: "Chitrakoot Tour",
    days: 2,
    destinations: ["Chitrakoot"],
    states: ["Uttar Pradesh"],
    region: "pilgrimage",
    images: [chitrakoot1, chitrakoot2],
    pricing: seater([8000, 8700], [10000, 10700]),
    homepage: false,
  },
  {
    slug: "khatu-shyam-ji",
    name: "Khatu Shyam Ji",
    days: 3,
    destinations: ["Khatu Shyam", "Rajasthan"],
    states: ["Rajasthan"],
    region: "pilgrimage",
    images: [khatu1, khatu2],
    pricing: seater([17000, 18000], [21000, 22000]),
    homepage: false,
  },
  {
    slug: "mahakal-omkareshwar",
    name: "Mahakal – Omkareshwar – Bhairav Baba",
    days: 3,
    destinations: ["Ujjain", "Omkareshwar"],
    states: ["Madhya Pradesh"],
    region: "pilgrimage",
    images: [mahakal1, mahakal2],
    pricing: seater([20000, 21000], [26000, 27000]),
    homepage: true,
  },
  {
    slug: "kashi-vishwanath",
    name: "Kashi Vishwanath – Sankat Mochan – Ganga Aarti",
    days: 2,
    destinations: ["Varanasi"],
    states: ["Uttar Pradesh"],
    region: "pilgrimage",
    images: [kashi1, kashi2],
    pricing: seater([10500, 11200], [12500, 13200]),
    homepage: true,
  },
  {
    slug: "prayagraj-sangam",
    name: "Prayagraj Sangam Tour",
    days: 2,
    destinations: ["Prayagraj"],
    states: ["Uttar Pradesh"],
    region: "pilgrimage",
    images: [prayagraj1, prayagraj2],
    pricing: seater([6500, 7200], [8500, 9200]),
    homepage: false,
  },
  {
    slug: "haridwar-rishikesh",
    name: "Haridwar – Rishikesh",
    days: 2,
    destinations: ["Haridwar", "Rishikesh"],
    states: ["Uttarakhand"],
    region: "pilgrimage",
    images: [haridwar1, haridwar2],
    pricing: seater([6500, 7200], [8500, 9200]),
    homepage: false,
  },
  {
    slug: "nainital-tour",
    name: "Nainital Tour",
    days: 3,
    destinations: ["Nainital"],
    states: ["Uttarakhand"],
    region: "north",
    images: [nainital1, nainital2],
    pricing: seater([9500, 10500], [12500, 13500]),
    homepage: false,
  },
  {
    slug: "mussoorie-tour",
    name: "Mussoorie Tour",
    days: 3,
    destinations: ["Mussoorie"],
    states: ["Uttarakhand"],
    region: "north",
    images: [mussoorie1, mussoorie2],
    pricing: seater([10500, 11500], [13500, 14500]),
    homepage: false,
  },
  {
    slug: "neem-karoli-kainchi-dham",
    name: "Neem Karoli Baba Kainchi Dham Tour",
    days: 3,
    destinations: ["Kainchi Dham", "Nainital", "Bhimtal"],
    states: ["Uttarakhand"],
    region: "pilgrimage",
    images: [neem1, neem2, neem3],
    pricing: seater([11500, 13000], [14500, 16500]),
    homepage: true,
  },
  {
    slug: "kullu-manali",
    name: "Kullu Manali",
    days: 6,
    destinations: ["Kullu", "Manali", "Solang Valley"],
    states: ["Himachal Pradesh"],
    region: "north",
    images: [kullu1, kullu2],
    pricing: seater([32000, 33800], [42000, 43800]),
    homepage: true,
  },
  {
    slug: "shimla-tour",
    name: "Shimla Tour",
    days: 6,
    destinations: ["Shimla", "Kufri"],
    states: ["Himachal Pradesh"],
    region: "north",
    images: [shimla1, shimla2],
    pricing: seater([26000, 27800], [36000, 37800]),
    homepage: false,
  },
  {
    slug: "vaishno-devi",
    name: "Vaishno Devi – Gulmarg – Sonmarg",
    days: 10,
    destinations: ["Katra", "Gulmarg", "Sonmarg"],
    states: ["Jammu & Kashmir"],
    region: "north",
    images: [vaishno1, vaishno2],
    pricing: seater([40000, 43500], [50000, 53500]),
    homepage: true,
  },
  {
    slug: "jaipur-tour",
    name: "Jaipur Tour",
    days: 3,
    destinations: ["Jaipur"],
    states: ["Rajasthan"],
    region: "west",
    images: [jaipur1, jaipur2],
    pricing: seater([11500, 12500], [14500, 15500]),
    homepage: false,
  },
  {
    slug: "rajasthan-heritage",
    name: "Rajasthan Heritage Tour",
    days: 6,
    destinations: ["Jaipur", "Jodhpur", "Udaipur"],
    states: ["Rajasthan"],
    region: "west",
    images: [rajH1, rajH2],
    pricing: seater([38000, 39800], [48000, 49800]),
    homepage: false,
  },
  {
    slug: "goa-tour",
    name: "Goa Tour",
    days: 4,
    destinations: ["North Goa", "South Goa"],
    states: ["Goa"],
    region: "west",
    images: [goa1, goa2],
    pricing: seater([24000, 25500], [31000, 32500]),
    homepage: false,
  },
  {
    slug: "kerala-tour",
    name: "Kerala Tour",
    days: 5,
    destinations: ["Munnar", "Alleppey", "Thekkady"],
    states: ["Kerala"],
    region: "south",
    images: [kerala1, kerala2],
    pricing: seater([28000, 29800], [36000, 37800]),
    homepage: false,
  },
  {
    slug: "amritsar-wagah",
    name: "Amritsar – Wagah Border",
    days: 3,
    destinations: ["Amritsar"],
    states: ["Punjab"],
    region: "north",
    images: [amritsar1, amritsar2],
    pricing: seater([9000, 10000], [11500, 12500]),
    homepage: false,
  },
  {
    slug: "ujjain-indore",
    name: "Ujjain – Indore Tour",
    days: 2,
    destinations: ["Ujjain", "Indore"],
    states: ["Madhya Pradesh"],
    region: "pilgrimage",
    images: [ujjain1, ujjain2],
    pricing: seater([7500, 8200], [9500, 10200]),
    homepage: false,
  },
  {
    slug: "dwarka-somnath",
    name: "Dwarka – Somnath",
    days: 4,
    destinations: ["Dwarka", "Somnath"],
    states: ["Gujarat"],
    region: "pilgrimage",
    images: [dwarka1, dwarka2],
    pricing: seater([22000, 23500], [28000, 29500]),
    homepage: false,
  },
  {
    slug: "rameshwaram-madurai",
    name: "Rameshwaram – Madurai",
    days: 4,
    destinations: ["Rameshwaram", "Madurai"],
    states: ["Tamil Nadu"],
    region: "pilgrimage",
    images: [rames1, rames2],
    pricing: seater([24000, 25500], [30000, 31500]),
    homepage: false,
  },
  {
    slug: "leh-ladakh",
    name: "Leh Ladakh Adventure",
    days: 7,
    destinations: ["Leh", "Pangong Lake", "Nubra Valley"],
    states: ["Ladakh"],
    region: "north",
    images: [leh1, leh2],
    pricing: seater([55000, 58500], [70000, 73500]),
    homepage: false,
  },
  {
    slug: "mumbai-tour",
    name: "Mumbai Tour",
    days: 4,
    destinations: [
      "Gateway of India",
      "Marine Drive",
      "Juhu Beach",
      "Siddhivinayak Temple",
      "Haji Ali Dargah",
      "Bandra-Worli Sea Link",
    ],
    states: ["Maharashtra"],
    region: "west",
    images: [mumbai1, mumbai2, mumbai3],
    pricing: seater([28000, 34000], [36000, 44000]),
    homepage: false,
  },
  {
    slug: "kashmir-paradise",
    name: "Kashmir Paradise Tour",
    days: 7,
    destinations: ["Srinagar", "Gulmarg", "Sonmarg"],
    states: ["Jammu & Kashmir"],
    region: "north",
    images: [kashmir1, kashmir2],
    pricing: seater([50000, 53500], [65000, 68500]),
    homepage: false,
  },
  {
    slug: "char-dham-yatra",
    name: "Char Dham Yatra",
    days: 10,
    destinations: ["Yamunotri", "Gangotri", "Kedarnath", "Badrinath"],
    states: ["Uttarakhand"],
    region: "pilgrimage",
    images: [charDham1, charDham2],
    pricing: { kind: "fixed", tempo17: 140000, bus26: 190000 },
    homepage: true,
  },
];

// ---------- Format helpers ----------

const fmt = new Intl.NumberFormat("en-IN");
export const formatINR = (n: number) => `₹${fmt.format(n)}`;

export function priceLines(p: Pricing): { label: string; value: string }[] {
  if (p.kind === "seater") {
    return [
      { label: "5 Seater", value: `${formatINR(p.fiveSeater[0])} – ${formatINR(p.fiveSeater[1])}` },
      {
        label: "7 Seater",
        value: `${formatINR(p.sevenSeater[0])} – ${formatINR(p.sevenSeater[1])}`,
      },
    ];
  }
  return [
    { label: "17 Seater Tempo Traveller", value: formatINR(p.tempo17) },
    { label: "26 Seater Bus", value: formatINR(p.bus26) },
  ];
}

export function startingFrom(p: Pricing): number {
  return p.kind === "seater" ? p.fiveSeater[0] : p.tempo17;
}

export const regionLabel: Record<Region, string> = {
  north: "North India",
  south: "South India",
  west: "West India",
  pilgrimage: "Pilgrimage",
};

// Explicit ordered list for the homepage featured grid.
const HOMEPAGE_ORDER = [
  "ayodhya-darshan",
  "mathura-vrindavan",
  "kashi-vishwanath",
  "neem-karoli-kainchi-dham",
  "mahakal-omkareshwar",
  "kullu-manali",
  "vaishno-devi",
  "char-dham-yatra",
] as const;

export const homepagePackages: Pkg[] = HOMEPAGE_ORDER.map((slug) =>
  packages.find((p) => p.slug === slug),
).filter((p): p is Pkg => Boolean(p));
