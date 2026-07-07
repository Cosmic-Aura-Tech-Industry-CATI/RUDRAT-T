// Vehicle catalogue — single source of truth.
// Pricing ranges: local = ₹/day, outstation = ₹/km.

import swift from "@/assets/vehicles/swift.jpg";
import wagonr from "@/assets/vehicles/wagonr.jpg";
import grandI10 from "@/assets/vehicles/grand-i10-nios.jpg";
import tiago from "@/assets/vehicles/tiago.jpg";
import i20 from "@/assets/vehicles/i20.jpg";
import baleno from "@/assets/vehicles/baleno.jpg";
import glanza from "@/assets/vehicles/glanza.jpg";
import altroz from "@/assets/vehicles/altroz.jpg";

import dzire from "@/assets/vehicles/dzire.jpg";
import amaze from "@/assets/vehicles/amaze.jpg";
import city from "@/assets/vehicles/city.jpg";
import verna from "@/assets/vehicles/verna.jpg";
import virtus from "@/assets/vehicles/virtus.jpg";
import slavia from "@/assets/vehicles/slavia.jpg";
import aura from "@/assets/vehicles/aura.jpg";

import brezza from "@/assets/vehicles/brezza.jpg";
import creta from "@/assets/vehicles/creta.jpg";
import seltos from "@/assets/vehicles/seltos.jpg";
import scorpio from "@/assets/vehicles/scorpio.jpg";
import xuv700 from "@/assets/vehicles/xuv700.jpg";
import harrier from "@/assets/vehicles/harrier.jpg";
import safari from "@/assets/vehicles/safari.jpg";
import fortuner from "@/assets/vehicles/fortuner.jpg";
import thar from "@/assets/vehicles/thar.jpg";

import ertiga from "@/assets/vehicles/ertiga.jpg";
import carens from "@/assets/vehicles/carens.jpg";
import innova from "@/assets/vehicles/innova.jpg";
import crysta from "@/assets/vehicles/innova-crysta.jpg";
import hycross from "@/assets/vehicles/innova-hycross.jpg";
import triber from "@/assets/vehicles/triber.jpg";

import audiA6 from "@/assets/vehicles/audi-a6.jpg";
import audiQ7 from "@/assets/vehicles/audi-q7.jpg";
import bmw5 from "@/assets/vehicles/bmw-5-series.jpg";
import mercedes from "@/assets/vehicles/mercedes-benz.jpg";

import tt12 from "@/assets/vehicles/force-traveller-12.jpg";
import tt17 from "@/assets/vehicles/force-traveller-17.jpg";
import tt26 from "@/assets/vehicles/force-traveller-26.jpg";

import urb12 from "@/assets/vehicles/urbania-12.jpg";
import urb17 from "@/assets/vehicles/urbania-17.jpg";
import urb26 from "@/assets/vehicles/urbania-26.jpg";

import miniBus from "@/assets/vehicles/mini-bus-30.jpg";
import deluxeBus from "@/assets/vehicles/deluxe-bus-55.jpg";
import luxuryCoach from "@/assets/vehicles/luxury-coach-45.jpg";

export type RentalType = "local" | "outstation" | "selfDrive" | "withDriver";

export type CategoryId =
  | "hatchback" | "sedan" | "suv" | "muv" | "luxury" | "tempo" | "urbania" | "bus";

export type Vehicle = {
  slug: string;
  name: string;
  category: CategoryId;
  seats: number;
  image: string;
  local: [number, number];        // ₹/day
  outstation: [number, number];   // ₹/km
  selfDrive?: boolean;
  popular?: boolean;
  notes?: string[];
};

export type Category = {
  id: CategoryId;
  name: string;
  blurb: string;
};

export const CATEGORIES: Category[] = [
  { id: "hatchback", name: "Hatchbacks", blurb: "Nimble city runabouts and budget-friendly day rentals." },
  { id: "sedan", name: "Sedans", blurb: "Executive comfort for business travel, weddings and city transfers." },
  { id: "suv", name: "SUVs", blurb: "Confident long-distance vehicles for hills, highways and family trips." },
  { id: "muv", name: "MPVs / Family Cars", blurb: "Spacious people movers with room for luggage and the whole family." },
  { id: "luxury", name: "Luxury Cars", blurb: "VIP-grade chauffeur experiences for weddings, executives and milestone events." },
  { id: "tempo", name: "Tempo Travellers", blurb: "Pushback-seat group transport for pilgrimages and team outings." },
  { id: "urbania", name: "Force Urbania", blurb: "Premium captain-seat coaches for high-end group travel." },
  { id: "bus", name: "Buses", blurb: "Mini, deluxe and luxury coaches for large groups, weddings and corporate events." },
];

export const VEHICLES: Vehicle[] = [
  // Hatchbacks
  { slug: "swift",            name: "Maruti Swift",          category: "hatchback", seats: 5, image: swift,    local: [1800, 2400], outstation: [11, 13], selfDrive: true },
  { slug: "wagonr",           name: "Maruti WagonR",         category: "hatchback", seats: 5, image: wagonr,   local: [1800, 2300], outstation: [11, 13], selfDrive: true },
  { slug: "grand-i10-nios",   name: "Hyundai Grand i10 Nios",category: "hatchback", seats: 5, image: grandI10, local: [1900, 2500], outstation: [11, 13] },
  { slug: "tiago",            name: "Tata Tiago",            category: "hatchback", seats: 5, image: tiago,    local: [1900, 2500], outstation: [11, 13] },
  { slug: "i20",              name: "Hyundai i20",           category: "hatchback", seats: 5, image: i20,      local: [2100, 2800], outstation: [12, 14] },
  { slug: "baleno",           name: "Maruti Baleno",         category: "hatchback", seats: 5, image: baleno,   local: [2100, 2800], outstation: [12, 14], selfDrive: true },
  { slug: "glanza",           name: "Toyota Glanza",         category: "hatchback", seats: 5, image: glanza,   local: [2100, 2900], outstation: [12, 14] },
  { slug: "altroz",           name: "Tata Altroz",           category: "hatchback", seats: 5, image: altroz,   local: [2100, 2900], outstation: [12, 14] },

  // Sedans
  { slug: "dzire",            name: "Maruti Dzire",          category: "sedan", seats: 5, image: dzire,   local: [2000, 2700], outstation: [11, 14], selfDrive: true, popular: true },
  { slug: "amaze",            name: "Honda Amaze",           category: "sedan", seats: 5, image: amaze,   local: [2200, 2800], outstation: [11, 14], selfDrive: true },
  { slug: "city",             name: "Honda City (Sunroof)",  category: "sedan", seats: 5, image: city,    local: [3800, 7000], outstation: [18, 20], selfDrive: true },
  { slug: "verna",            name: "Hyundai Verna (Sunroof)",category:"sedan", seats: 5, image: verna,   local: [4000, 7500], outstation: [18, 20], selfDrive: true },
  { slug: "virtus",           name: "Volkswagen Virtus",     category: "sedan", seats: 5, image: virtus,  local: [4500, 7500], outstation: [18, 22] },
  { slug: "slavia",           name: "Skoda Slavia",          category: "sedan", seats: 5, image: slavia,  local: [4500, 7500], outstation: [18, 22] },
  { slug: "aura",             name: "Hyundai Aura",          category: "sedan", seats: 5, image: aura,    local: [2200, 3000], outstation: [12, 15] },

  // SUVs
  { slug: "brezza",           name: "Maruti Brezza",         category: "suv", seats: 5, image: brezza,   local: [2300, 3000], outstation: [13, 15], selfDrive: true },
  { slug: "creta",            name: "Hyundai Creta",         category: "suv", seats: 5, image: creta,    local: [3000, 4500], outstation: [16, 18] },
  { slug: "seltos",           name: "Kia Seltos",            category: "suv", seats: 5, image: seltos,   local: [3000, 4500], outstation: [16, 18] },
  { slug: "scorpio",          name: "Mahindra Scorpio",      category: "suv", seats: 7, image: scorpio,  local: [2700, 4000], outstation: [15, 18] },
  { slug: "xuv700",           name: "Mahindra XUV700",       category: "suv", seats: 7, image: xuv700,   local: [4500, 7500], outstation: [18, 22] },
  { slug: "harrier",          name: "Tata Harrier",          category: "suv", seats: 5, image: harrier,  local: [4000, 6500], outstation: [18, 22] },
  { slug: "safari",           name: "Tata Safari",           category: "suv", seats: 7, image: safari,   local: [4500, 7500], outstation: [18, 22] },
  { slug: "fortuner",         name: "Toyota Fortuner",       category: "suv", seats: 7, image: fortuner, local: [22000, 30000], outstation: [28, 35], popular: true },
  { slug: "thar",             name: "Mahindra Thar",         category: "suv", seats: 4, image: thar,     local: [5000, 9000], outstation: [18, 25] },

  // MUVs
  { slug: "ertiga",           name: "Maruti Ertiga",         category: "muv", seats: 7, image: ertiga,  local: [2500, 3200], outstation: [13, 17], selfDrive: true, popular: true },
  { slug: "carens",           name: "Kia Carens",            category: "muv", seats: 6, image: carens,  local: [3000, 4000], outstation: [15, 18] },
  { slug: "innova",           name: "Toyota Innova",         category: "muv", seats: 7, image: innova,  local: [3000, 3800], outstation: [15, 18] },
  { slug: "innova-crysta",    name: "Toyota Innova Crysta",  category: "muv", seats: 7, image: crysta,  local: [3200, 4500], outstation: [18, 22], popular: true },
  { slug: "innova-hycross",   name: "Toyota Innova Hycross", category: "muv", seats: 7, image: hycross, local: [18000, 25000], outstation: [22, 28] },
  { slug: "triber",           name: "Renault Triber",        category: "muv", seats: 7, image: triber,  local: [2200, 3000], outstation: [12, 15] },

  // Luxury
  { slug: "audi-a6",          name: "Audi A6",               category: "luxury", seats: 5, image: audiA6,   local: [12000, 18000], outstation: [25, 35] },
  { slug: "audi-q7",          name: "Audi Q7",               category: "luxury", seats: 7, image: audiQ7,   local: [18000, 25000], outstation: [35, 45] },
  { slug: "bmw-5-series",     name: "BMW 5 Series",          category: "luxury", seats: 5, image: bmw5,     local: [20000, 25000], outstation: [30, 40], popular: true },
  { slug: "mercedes-benz",    name: "Mercedes-Benz",         category: "luxury", seats: 5, image: mercedes, local: [18000, 30000], outstation: [30, 45] },

  // Tempo Travellers
  { slug: "force-traveller-12", name: "Force Traveller 12 Seater", category: "tempo", seats: 12, image: tt12, local: [5500, 7000],  outstation: [23, 25], notes: ["Toll Tax Extra", "Driver Allowance Extra"] },
  { slug: "force-traveller-17", name: "Force Traveller 17 Seater", category: "tempo", seats: 17, image: tt17, local: [6500, 8500],  outstation: [25, 28], notes: ["Toll Tax Extra", "Driver Allowance Extra"] },
  { slug: "force-traveller-26", name: "Force Traveller 26 Seater", category: "tempo", seats: 26, image: tt26, local: [8500, 11000], outstation: [34, 38], notes: ["Toll Tax Extra", "Driver Allowance Extra"] },

  // Urbania
  { slug: "urbania-12",  name: "Force Urbania 12 Seater", category: "urbania", seats: 12, image: urb12, local: [7000, 9000],   outstation: [25, 32] },
  { slug: "urbania-17",  name: "Force Urbania 17 Seater", category: "urbania", seats: 17, image: urb17, local: [8500, 11000],  outstation: [32, 36], popular: true },
  { slug: "urbania-26",  name: "Force Urbania 26 Seater", category: "urbania", seats: 26, image: urb26, local: [11000, 15000], outstation: [34, 45] },

  // Buses
  { slug: "mini-bus-30",       name: "Mini Bus (30 Seater)",       category: "bus", seats: 30, image: miniBus,     local: [8000, 12000],  outstation: [35, 45], notes: ["AC / Non-AC", "Pushback Seats"] },
  { slug: "deluxe-bus-55",     name: "Deluxe Bus (55 Seater)",     category: "bus", seats: 55, image: deluxeBus,   local: [15000, 25000], outstation: [45, 60], notes: ["AC / Non-AC", "Pushback Seats"] },
  { slug: "luxury-coach-45",   name: "Luxury Coach Bus (45 Seater)",category:"bus", seats: 45, image: luxuryCoach, local: [20000, 35000], outstation: [55, 75], notes: ["AC", "Premium Interior", "Pushback Seats"] },
];

export const POPULAR_VEHICLE_SLUGS = [
  "innova-crysta", "dzire", "fortuner", "urbania-17", "bmw-5-series", "ertiga",
] as const;

export const popularVehicles = (): Vehicle[] =>
  POPULAR_VEHICLE_SLUGS.map((s) => VEHICLES.find((v) => v.slug === s)!).filter(Boolean);

export const vehiclesByCategory = (id: CategoryId): Vehicle[] =>
  VEHICLES.filter((v) => v.category === id);

const fmt = (n: number) => `₹${n.toLocaleString("en-IN")}`;
const fmtRange = ([a, b]: [number, number]) => `${fmt(a)} – ${fmt(b)}`;

export function priceFor(v: Vehicle, rental: RentalType): string {
  // Luxury cars never show per-km pricing.
  if (v.category === "luxury") {
    return `Rental Price: ${fmtRange(v.local)}`;
  }
  switch (rental) {
    case "outstation":
      return `₹${v.outstation[0]} – ₹${v.outstation[1]} / km`;
    case "local":
    case "withDriver":
    case "selfDrive":
      return `${fmtRange(v.local)} / day`;
  }
}

export function localPriceLine(v: Vehicle): string {
  return `${fmtRange(v.local)}`;
}
export function outstationPriceLine(v: Vehicle): string {
  return `₹${v.outstation[0]} – ₹${v.outstation[1]}/km`;
}

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map((c) => [c.id, c])) as Record<CategoryId, Category>;
