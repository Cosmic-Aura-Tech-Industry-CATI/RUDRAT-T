// Gallery images. Uploaded fleet photos lead, followed by destination imagery.
import g1 from "@/assets/gallery/g1.jpg.asset.json";
import g2 from "@/assets/gallery/g2.jpg.asset.json";
import g3 from "@/assets/gallery/g3.jpg.asset.json";
import g4 from "@/assets/gallery/g4.jpg.asset.json";
import g5 from "@/assets/gallery/g5.jpg.asset.json";
import g6 from "@/assets/gallery/g6.jpg.asset.json";
import g8 from "@/assets/gallery/g8.jpg.asset.json";
import kashmir from "@/assets/dest-kashmir.jpg";
import kerala from "@/assets/dest-kerala.jpg";
import ladakh from "@/assets/dest-ladakh.jpg";
import rajasthan from "@/assets/dest-rajasthan.jpg";
import himachal from "@/assets/dest-himachal.jpg";
import uttarakhand from "@/assets/dest-uttarakhand.jpg";
import goa from "@/assets/dest-goa.jpg";
import wedding1 from "@/assets/wedding-car-1.jpg";
import wedding2 from "@/assets/wedding-car-2.jpg";
import pahalgam from "@/assets/destinations/pahalgam.jpg";
import gulmarg from "@/assets/destinations/gulmarg.jpg";
import sonmarg from "@/assets/destinations/sonmarg.jpg";
import srinagar from "@/assets/destinations/srinagar.jpg";
import manali from "@/assets/destinations/manali.jpg";
import shimla from "@/assets/destinations/shimla.jpg";
import mussoorie from "@/assets/destinations/mussoorie.jpg";
import nainital from "@/assets/destinations/nainital.jpg";
import rishikesh from "@/assets/destinations/rishikesh.jpg";
import haridwar from "@/assets/destinations/haridwar.jpg";
import varanasi from "@/assets/destinations/varanasi.jpg";
import ayodhya from "@/assets/destinations/ayodhya.jpg";
import mumbai from "@/assets/destinations/mumbai.jpg";
import marine from "@/assets/destinations/marine-drive.jpg";
import gateway from "@/assets/destinations/gateway-of-india.jpg";

export interface GalleryImage {
  src: string;
  alt: string;
}

export const galleryImages: GalleryImage[] = [
  { src: g5.url, alt: "Mahindra Scorpio — showroom front view" },
  { src: g1.url, alt: "Force Tempo Traveller — on the road" },
  { src: g8.url, alt: "Tempo Traveller — luxury interior with individual seats" },
  { src: g2.url, alt: "SUV cabin — captain seats and beige upholstery" },
  { src: g6.url, alt: "Hyundai Aura sedan — delivery ready" },
  { src: g3.url, alt: "SUV infotainment and centre console" },
  { src: g4.url, alt: "SUV dashboard and instrument cluster" },
  { src: wedding1, alt: "Wedding car — white sedan with floral décor" },
  { src: wedding2, alt: "Wedding car — black premium SUV" },
  { src: kashmir, alt: "Kashmir valley at dawn" },
  { src: pahalgam, alt: "Pahalgam meadows" },
  { src: gulmarg, alt: "Gulmarg gondola" },
  { src: sonmarg, alt: "Sonmarg" },
  { src: srinagar, alt: "Srinagar Dal Lake" },
  { src: kerala, alt: "Kerala backwaters" },
  { src: ladakh, alt: "Ladakh high passes" },
  { src: rajasthan, alt: "Rajasthan heritage" },
  { src: himachal, alt: "Himachal Pradesh" },
  { src: uttarakhand, alt: "Uttarakhand hills" },
  { src: goa, alt: "Goa coastline" },
  { src: manali, alt: "Manali" },
  { src: shimla, alt: "Shimla ridge" },
  { src: mussoorie, alt: "Mussoorie" },
  { src: nainital, alt: "Nainital lake" },
  { src: rishikesh, alt: "Rishikesh ghats" },
  { src: haridwar, alt: "Haridwar aarti" },
  { src: varanasi, alt: "Varanasi ghats" },
  { src: ayodhya, alt: "Ayodhya" },
  { src: mumbai, alt: "Mumbai skyline" },
  { src: marine, alt: "Marine Drive" },
  { src: gateway, alt: "Gateway of India" },
];
