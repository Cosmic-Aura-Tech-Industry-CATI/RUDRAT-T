export type LandingKind = "service" | "location";

export type LandingFaq = {
  question: string;
  answer: string;
};

export type LandingPage = {
  kind: LandingKind;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  introHeading: string;
  introBody: string;
  highlights: string[];
  reasons: string[];
  relatedPackages: string[];
  relatedPages: string[];
  faqs: LandingFaq[];
};

const servicePages: LandingPage[] = [
  {
    kind: "service",
    slug: "travel-agent-kanpur",
    title: "Best Travel Agent in Kanpur | Rudra Tours & Travels",
    description:
      "Looking for the best travel agent in Kanpur? Rudra Tours & Travels offers custom tour packages, pilgrimage trips, outstation cabs & 24x7 local travel support.",
    eyebrow: "Best Travel Agent in Kanpur",
    heroTitle: "Best travel agent in Kanpur for tour packages, pilgrimage trips & cab booking.",
    heroSubtitle:
      "Serving travellers with genuine care since 2014 with transparent pricing, verified drivers, custom itineraries, and dedicated 24x7 on-trip assistance from Kanpur.",
    introHeading: "Why Rudra Tours is trusted as Kanpur's best travel agent",
    introBody:
      "Whether you are planning a spiritual pilgrimage to Ayodhya, Varanasi, or Char Dham, a relaxing family holiday to Kashmir or Kerala, or need reliable chauffeur-driven vehicles for wedding and corporate travel, Rudra Tours & Travels delivers end-to-end planning with local Kanpur expertise.",
    highlights: [
      "Thousands of Happy Travellers",
      "Serving Since 2014",
      "Custom Tour Planning",
      "24x7 Kanpur Support",
    ],
    reasons: [
      "Complete holiday & pilgrimage planning from Kanpur with dedicated trip coordinators.",
      "Fleet of chauffeur-driven sedans, SUVs, Innova Crysta, Fortuner & tempo travellers.",
      "Honest, transparent pricing with zero hidden surcharges and instant booking confirmation.",
    ],
    relatedPackages: [
      "ayodhya-darshan",
      "kashi-vishwanath",
      "mathura-vrindavan",
      "kashmir-paradise",
    ],
    relatedPages: [
      "tour-packages",
      "taxi-service-kanpur",
      "car-rental-kanpur",
      "pick-and-drop-service-kanpur",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "Why is Rudra Tours considered the best travel agent in Kanpur?",
        answer:
          "With over a decade of local experience since 2014, verified positive guest reviews, and our own well-maintained fleet, we offer complete personalized travel solutions with 24x7 on-ground assistance.",
      },
      {
        question: "What travel services do you provide from Kanpur?",
        answer:
          "We provide all-inclusive India tour packages, spiritual pilgrimage tours (Ayodhya, Kashi, Mathura, Char Dham), local city taxi hire, outstation cabs, luxury wedding cars, and tempo traveller group rentals.",
      },
      {
        question: "Can I customize my tour itinerary from Kanpur?",
        answer:
          "Yes. Every tour package can be customized according to your preferred travel dates, pickup location in Kanpur, choice of vehicle, and hotel preferences.",
      },
    ],
  },
  {
    kind: "service",
    slug: "pick-and-drop-service-kanpur",
    title: "Pick & Drop Service in Kanpur | Airport, Railway & Local Transfers",
    description:
      "Book reliable pick and drop service in Kanpur. 24x7 on-time transfers for Lucknow Amausi Airport, Kanpur Central Railway Station, wedding guests & corporate staff.",
    eyebrow: "Pick & Drop Service in Kanpur",
    heroTitle: "Pick and drop service in Kanpur for airport, railway station & city transfers.",
    heroSubtitle:
      "On-time, door-to-door cab pickup and drop across all Kanpur localities, Kanpur Central Station, and Lucknow Amausi Airport with clean vehicles and polite chauffeurs.",
    introHeading: "Complete pick & drop solutions across Kanpur",
    introBody:
      "Never miss a train or flight again. Our 24x7 pick and drop service in Kanpur connects Civil Lines, Swaroop Nagar, Kalyanpur, Kidwai Nagar, Govind Nagar, and all surrounding areas to Kanpur Central, Chakeri Airport, and Lucknow Chaudhary Charan Singh (Amausi) International Airport.",
    highlights: [
      "Airport Pick & Drop (Amausi/Chakeri)",
      "Kanpur Central Station Pickup",
      "Wedding Guest Convoy Transfers",
      "24x7 Punctual Chauffeurs",
    ],
    reasons: [
      "Guaranteed on-time pickup with flight and train delay tracking.",
      "Fixed, transparent rates with luggage assistance and clean AC vehicles.",
      "Available across sedans (Dzire), SUVs (Innova Crysta), and 12-26 seater tempo travellers.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "prayagraj-sangam"],
    relatedPages: [
      "taxi-service-kanpur",
      "airport-transfer",
      "car-rental-kanpur",
      "kanpur-to-lucknow-cab",
      "travel-agent-kanpur",
    ],
    faqs: [
      {
        question: "Do you provide pick and drop from Kanpur to Lucknow Airport?",
        answer:
          "Yes, we operate 24x7 direct airport taxi transfers between any Kanpur address and Lucknow Amausi International Airport with guaranteed on-time arrival.",
      },
      {
        question: "Can I book a cab for Kanpur Central Railway Station pickup?",
        answer:
          "Yes, our drivers track train arrival times and provide punctual station pickup from Kanpur Central (Cantonment or City side) with luggage help.",
      },
      {
        question: "Do you offer pick and drop for wedding guests in Kanpur?",
        answer:
          "Yes, we provide dedicated fleet coordination for wedding guests, including airport/station pickups, hotel shuttles, and venue transfers across Kanpur.",
      },
    ],
  },
  {
    kind: "service",
    slug: "car-rental-kanpur",
    title: "Car Rental in Kanpur | Chauffeur-Driven Cars, SUVs & Tempo Travellers",
    description:
      "Book car rental in Kanpur for airport transfers, local sightseeing, weddings, business travel and outstation trips with Rudra Tours and Travels.",
    eyebrow: "Car Rental in Kanpur",
    heroTitle: "Car rental in Kanpur for city rides, airport drops and long-distance travel.",
    heroSubtitle:
      "Choose sedan, SUV, Innova Crysta, Fortuner, tempo traveller or bus rental with transparent pricing and local support from our Kanpur team.",
    introHeading: "Why travellers book car rental in Kanpur with Rudra Tours",
    introBody:
      "Rudra Tours & Travels provides a comprehensive rental fleet in Kanpur for family vacations, corporate business travel, VIP guest transfers, and luxury wedding entries. Every vehicle is sanitized, GPS-enabled, and driven by an experienced chauffeur.",
    highlights: [
      "Sedans & SUVs (Dzire, Ertiga, Innova)",
      "Luxury Wedding Cars (Audi, BMW, Fortuner)",
      "12, 17 & 26 Seater Tempo Travellers",
      "Local & Outstation Packages",
    ],
    reasons: [
      "Transparent pricing with a direct enquiry path and zero hidden charges.",
      "Useful for both one-way and round-trip travel across Uttar Pradesh.",
      "Connects the service page to the exact vehicle and tour pages people need next.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "prayagraj-sangam"],
    relatedPages: [
      "taxi-service-kanpur",
      "pick-and-drop-service-kanpur",
      "airport-transfer",
      "outstation-taxi",
      "travel-agent-kanpur",
    ],
    faqs: [
      {
        question: "Do you provide car rental in Kanpur with driver?",
        answer:
          "Yes. We offer chauffeur-driven cabs, SUVs and premium vehicles for local, outstation and wedding travel.",
      },
      {
        question: "Can I book a car for airport pickup or station pickup?",
        answer:
          "Yes. Airport transfer, railway pickup and city transfer bookings are all handled from this page.",
      },
    ],
  },
  {
    kind: "service",
    slug: "taxi-service-kanpur",
    title: "Taxi Service in Kanpur | Local & Outstation Cab Booking",
    description:
      "Hire a taxi service in Kanpur for daily commuting, business meetings, station transfers, outstation routes and family trips.",
    eyebrow: "Taxi Service in Kanpur",
    heroTitle: "Taxi service in Kanpur for reliable daily travel and outstation trips.",
    heroSubtitle:
      "24x7 chauffeur-driven sedans, SUVs, Innova Crysta & tempo travellers for local city errands, Kanpur Central station transfers, and outstation trips across UP & India.",
    introHeading: "A practical taxi booking page for Kanpur travellers",
    introBody:
      "When you book a taxi in Kanpur with Rudra Tours & Travels, you get clean, AC-equipped vehicles, verified drivers, transparent per-km billing, and instant WhatsApp/phone confirmation. Perfect for local full-day hire, airport runs, or long-distance outstation travel.",
    highlights: [
      "Local Full-Day & Half-Day Cabs",
      "One-Way & Round-Trip Outstation",
      "Airport & Railway Station Transfers",
      "24x7 Instant Cab Booking",
    ],
    reasons: [
      "Instant booking confirmation with professional, courteous chauffeurs.",
      "Reliable local packages (4hr/40km, 8hr/80km) and round-the-clock airport drops.",
      "Fixed, honest pricing with zero hidden surcharges or surprise billing.",
    ],
    relatedPackages: ["ayodhya-darshan", "mathura-vrindavan", "kashi-vishwanath"],
    relatedPages: [
      "car-rental-kanpur",
      "pick-and-drop-service-kanpur",
      "outstation-taxi",
      "airport-transfer",
      "travel-agent-kanpur",
    ],
    faqs: [
      {
        question: "How do I book a taxi in Kanpur with Rudra Tours?",
        answer:
          "You can call us directly or message us on WhatsApp with your pickup location, destination, travel time, and preferred car type for instant confirmation.",
      },
      {
        question: "Do you also handle long-distance taxi service?",
        answer:
          "Yes. We cover local, outstation and intercity travel from Kanpur to major destinations across UP and India.",
      },
    ],
  },
  {
    kind: "service",
    slug: "cab-booking-kanpur",
    title: "Cab Booking Kanpur | Instant Cab Hire for Local and Outstation Trips",
    description:
      "Book a cab in Kanpur for airport drops, station pickup, office travel, family outings and outstation journeys with quick enquiry support.",
    eyebrow: "Cab Booking Kanpur",
    heroTitle: "Fast, reliable cab booking in Kanpur for city travel and outstation journeys.",
    heroSubtitle:
      "Book clean, chauffeur-driven cabs in Kanpur for airport transfers, railway station pickups, corporate travel, and family outings with transparent rates.",
    introHeading: "Hassle-free cab booking across Kanpur",
    introBody:
      "When you need a dependable ride across Kanpur or an outstation cab to nearby cities, Rudra Tours provides prompt doorstep pickup with verified drivers and well-maintained AC vehicles. From compact sedans to luxury SUVs, we ensure a comfortable, safe, and punctual travel experience.",
    highlights: [
      "Doorstep Pickup",
      "Airport & Railway Transfers",
      "Corporate Travel",
      "One-Way & Round Trip",
    ],
    reasons: [
      "Punctual, professional chauffeurs with extensive route knowledge.",
      "Flexible options for local hourly rentals, station drops, and outstation trips.",
      "Clean, sanitized sedans, Ertiga, Innova Crysta, and tempo travellers.",
    ],
    relatedPackages: ["prayagraj-sangam", "ayodhya-darshan", "kashi-vishwanath"],
    relatedPages: [
      "taxi-service-kanpur",
      "car-rental-kanpur",
      "airport-transfer",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "Can I book a cab for a same-day trip?",
        answer:
          "Yes. Same-day city and outstation cab booking is supported through the inquiry flow.",
      },
      {
        question: "Is this useful for airport taxi searches?",
        answer:
          "Yes. Airport taxi and station pickup queries are routed here as part of the Kanpur cab booking cluster.",
      },
    ],
  },
  {
    kind: "service",
    slug: "tempo-traveller-kanpur",
    title: "Tempo Traveller Kanpur | 12, 17, 26 Seater Group Travel",
    description:
      "Book tempo traveller in Kanpur for pilgrimages, family tours, school trips, corporate outings and wedding groups with driver support.",
    eyebrow: "Tempo Traveller Kanpur",
    heroTitle: "Tempo traveller on rent in Kanpur for family trips, pilgrimages & group travel.",
    heroSubtitle:
      "Comfortable 12, 17, and 26-seater AC Tempo Travellers with pushback recliner seats, ample luggage space, and experienced highway drivers.",
    introHeading: "Spacious group travel from Kanpur across India",
    introBody:
      "When travelling with extended family, pilgrimage groups, or corporate teams, hiring multiple small cars can be stressful and expensive. Rudra Tours provides modern, clean Tempo Travellers so your entire group travels together smoothly with doorstep Kanpur pickup.",
    highlights: [
      "12, 17 and 26 seater options",
      "Pushback Reclining Seats",
      "Dedicated Luggage Space",
      "Pilgrimage & Outstation Ready",
    ],
    reasons: [
      "Keeps families and tour groups together in a single comfortable AC vehicle.",
      "Experienced chauffeurs familiar with pilgrimage routes, ghat roads, and highways.",
      "Transparent per-km and fixed package billing with zero hidden surcharges.",
    ],
    relatedPackages: ["char-dham-yatra", "haridwar-rishikesh", "vaishno-devi"],
    relatedPages: ["bus-rental", "corporate-travel", "outstation-taxi", "holiday-packages"],
    faqs: [
      {
        question: "How many passengers can a tempo traveller carry?",
        answer: "We provide 12, 17, and 26-seater AC Tempo Travellers as well as luxury Maharaja configurations depending on your group size.",
      },
      {
        question: "Is tempo traveller booking good for pilgrimage travel?",
        answer:
          "Yes. Our tempo travellers feature reclining seats, dedicated luggage space, and hill-certified drivers, making them ideal for long pilgrimage circuits like Ayodhya, Kashi, and Char Dham.",
      },
    ],
  },
  {
    kind: "service",
    slug: "luxury-car-rental",
    title: "Luxury Car Rental | Premium Chauffeur-Driven Cars for Weddings and VIP Travel",
    description:
      "Hire luxury car rental for weddings, corporate meetings, airport pickup, VIP events and premium travel experiences in Kanpur and across India.",
    eyebrow: "Luxury Car Rental",
    heroTitle: "Luxury car rental for weddings, VIP travel and executive movement.",
    heroSubtitle:
      "Hire prestigious luxury sedans and SUVs with professional chauffeurs for weddings, corporate delegations, and VIP airport transfers in Kanpur.",
    introHeading: "Make an unforgettable impression on your special occasion",
    introBody:
      "Whether arriving in royal style at your wedding venue or hosting corporate dignitaries, our fleet of immaculate luxury sedans and premium SUVs delivers unmatched elegance, comfort, and chauffeur professionalism in Kanpur.",
    highlights: ["Bridal & Groom Arrival", "Corporate VIP Transfers", "Decorated Wedding Fleet", "Uniformed Professional Chauffeurs"],
    reasons: [
      "Immaculate vehicle condition with pristine interior detailing.",
      "Punctual, uniformed chauffeurs trained in hospitality and defensive driving.",
      "Flexible hourly rental and full-event wedding booking packages.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "mumbai-tour"],
    relatedPages: ["wedding-car-rental", "corporate-travel", "airport-transfer", "fortuner-rental"],
    faqs: [
      {
        question: "Do you provide luxury cars for weddings in Kanpur?",
        answer:
          "Yes. Premium sedans like Mercedes, Audi, and BMW can be booked for groom entry, bridal arrival, and VIP guest transfers with floral decoration options.",
      },
      {
        question: "Can luxury car rental include a chauffeur?",
        answer:
          "Yes. All our luxury vehicles come with professional, vetted, uniformed chauffeurs to ensure a stress-free travel experience.",
      },
    ],
  },
  {
    kind: "service",
    slug: "innova-crysta-rental",
    title: "Innova Crysta Rental | Family SUV and Premium MPV Booking",
    description:
      "Book Innova Crysta rental for family trips, airport transfers, outstation tours, pilgrimage travel and corporate movement from Kanpur.",
    eyebrow: "Innova Crysta Rental",
    heroTitle: "Toyota Innova Crysta on rent in Kanpur for family comfort, luggage space and long routes.",
    heroSubtitle:
      "Travel in supreme comfort with Kanpur's most trusted long-distance SUV, offering generous legroom, large boot space, and smooth highway performance.",
    introHeading: "The gold standard for family and outstation road travel",
    introBody:
      "The Toyota Innova Crysta is India's most popular outstation vehicle for a reason: whisper-quiet cabin, unmatched ride comfort, independent AC vents for all three rows, and ample space for heavy luggage. Ideal for family pilgrimages and executive road trips.",
    highlights: ["6 & 7 Seater Captain Chairs", "Dedicated Luggage Capacity", "Tri-Zone Climate Control", "Long-Distance Reliability"],
    reasons: [
      "Superior ride comfort that prevents travel fatigue on journeys over 200 km.",
      "Spacious boot accommodates full family luggage without cramping seating.",
      "Regularly serviced, sanitized, and driven by seasoned highway chauffeurs.",
    ],
    relatedPackages: ["kashmir-paradise", "kullu-manali", "kashmir-paradise"],
    relatedPages: [
      "car-rental-kanpur",
      "outstation-taxi",
      "airport-transfer",
      "travel-agency-kanpur",
    ],
    faqs: [
      {
        question: "Is Innova Crysta rental good for family tours?",
        answer:
          "Yes. Families frequently choose the Innova Crysta for its captain seat comfort, spacious cabin, and smooth suspension on long highway drives.",
      },
      {
        question: "Can I use Innova Crysta rental for airport pickup?",
        answer:
          "Yes. Airport pickup, drop and hotel transfers between Kanpur and Lucknow Amausi Airport are readily available 24x7.",
      },
    ],
  },
  {
    kind: "service",
    slug: "fortuner-rental",
    title: "Fortuner Rental | Luxury SUV for Weddings, VIP Travel & Outstation Trips",
    description:
      "Hire Fortuner rental for weddings, special events, executive travel and premium outstation journeys from Kanpur.",
    eyebrow: "Fortuner Rental",
    heroTitle: "Toyota Fortuner rental in Kanpur for weddings, VIP convoys and long routes.",
    heroSubtitle:
      "Commanding road presence, powerful performance, and luxurious seating make the Toyota Fortuner the ultimate choice for special events and executive road trips.",
    introHeading: "Commanding presence and uncompromised safety",
    introBody:
      "From royal wedding entries and high-profile guest movements to rugged highway journeys across Uttar Pradesh and Rajasthan, the Toyota Fortuner combines bold presence with supreme all-terrain capability.",
    highlights: ["Commanding Road Presence", "Wedding Use & VIP Convoys", "Executive Travel", "Outstation Highway Comfort"],
    reasons: [
      "Ideal for groom entry, wedding convoy escort, and corporate executive travel.",
      "High ground clearance and robust build ensure safe travel across all road conditions.",
      "Courteous, discreet chauffeurs experienced in VIP and wedding schedule coordination.",
    ],
    relatedPackages: ["rajasthan-heritage", "kashmir-paradise", "mumbai-tour"],
    relatedPages: [
      "luxury-car-rental",
      "wedding-car-rental",
      "airport-transfer",
      "corporate-travel",
    ],
    faqs: [
      {
        question: "Is Fortuner rental useful for weddings?",
        answer:
          "Yes. Fortuner is a top choice for groom travel, VIP guests and premium family convoy movement.",
      },
      {
        question: "Can Fortuner rental be used for hill travel?",
        answer:
          "Yes. The Fortuner's powerful engine and all-terrain capabilities make it well-suited for Uttarakhand and Himachal hill journeys.",
      },
    ],
  },
  {
    kind: "service",
    slug: "bus-rental",
    title: "Bus Rental | Mini Bus, Deluxe Bus & Luxury Coach Booking",
    description:
      "Book bus rental for weddings, school trips, corporate events, pilgrimages and large group travel from Kanpur and nearby cities.",
    eyebrow: "Bus Rental",
    heroTitle: "Bus rental in Kanpur for weddings, pilgrimages & large group travel.",
    heroSubtitle:
      "Book comfortable 28 to 55-seater mini buses, deluxe buses, and luxury AC coaches with experienced commercial drivers for wedding guest logistics and large tours.",
    introHeading: "Reliable large-group transportation across India",
    introBody:
      "Coordinating travel for large wedding baraats, corporate offsites, school excursions, or community pilgrimages requires punctual, spacious buses. Rudra Tours offers modern deluxe buses with comfortable seating, ample luggage space, and reliable on-time coordination.",
    highlights: ["28 to 55 Seater Buses", "Deluxe & Luxury AC Coaches", "Wedding Guest Convoys", "Pilgrimage Group Tours"],
    reasons: [
      "Cost-effective group transport that keeps all guests travelling together on schedule.",
      "Fully licensed, verified commercial drivers experienced with highway routes.",
      "Complete logistics coordination for multi-point pickups and venue shuttles.",
    ],
    relatedPackages: ["char-dham-yatra", "vaishno-devi", "haridwar-rishikesh"],
    relatedPages: [
      "tempo-traveller-kanpur",
      "corporate-travel",
      "wedding-car-rental",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "What bus sizes are available for rent from Kanpur?",
        answer:
          "We offer 28-seater mini buses, 35-seater deluxe coaches, and 45 to 55-seater luxury AC buses.",
      },
      {
        question: "Can we hire buses for wedding baraat and guest movements?",
        answer:
          "Yes, we specialize in wedding guest transport, including airport/station pickup shuttles, hotel-to-venue transfers, and outstation baraat trips.",
      },
    ],
  },
  {
    kind: "service",
    slug: "wedding-car-rental",
    title: "Wedding Car Rental | Bridal Cars, Baraat Cars & Decorated Vehicles",
    description:
      "Book wedding car rental for bridal entry, groom arrival, decorated cars, luxury SUVs and guest movement in Kanpur.",
    eyebrow: "Wedding Car Rental",
    heroTitle: "Luxury wedding car rental in Kanpur for bridal arrival & groom entry.",
    heroSubtitle:
      "Make your wedding day truly grand with chauffeur-driven luxury cars including Audi, BMW, Mercedes-Benz, Fortuner, and decorated vintage cars.",
    introHeading: "Royal wedding transport planned to perfection",
    introBody:
      "Your wedding day deserves immaculate transportation. From beautifully decorated groom cars and grand bridal entries to seamless luxury shuttles for family elders and VIP guests, Rudra Tours handles all wedding fleet logistics in Kanpur with precision.",
    highlights: ["Luxury Groom Entry Cars", "Bridal Arrival Fleet", "Fresh Floral Decoration Options", "Complete Baraat Fleet Management"],
    reasons: [
      "Immaculate fleet condition guaranteed on time at your doorstep or venue.",
      "Special wedding packages covering ceremony, reception, and vidai schedules.",
      "Dedicated transport coordinator for multi-vehicle wedding fleets.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "goa-tour"],
    relatedPages: ["luxury-car-rental", "fortuner-rental", "bus-rental", "corporate-travel"],
    faqs: [
      {
        question: "Can I book a decorated car for the wedding day?",
        answer:
          "Yes, we provide luxury cars with elegant fresh flower decorations customized to your wedding theme.",
      },
      {
        question: "Do you provide vehicles for wedding guest transfers?",
        answer:
          "Yes, we provide Innova Crystas, Tempo Travellers, and deluxe buses to transport outstation wedding guests between hotels and venues.",
      },
    ],
  },
  {
    kind: "service",
    slug: "airport-transfer",
    title: "Airport Taxi & Transfer | Pickup and Drop from Kanpur",
    description:
      "Book airport transfer for Lucknow airport, Kanpur city pickup, station transfer and executive drop services with timely driver support.",
    eyebrow: "Airport Transfer",
    heroTitle: "24x7 airport taxi & transfer between Kanpur and Lucknow Amausi Airport.",
    heroSubtitle:
      "Punctual, doorstep airport cab pickup and drop with real-time flight tracking, polite chauffeurs, and clean AC sedans and SUVs.",
    introHeading: "Never miss a flight with guaranteed on-time airport transfers",
    introBody:
      "Catching a flight from Lucknow Chaudhary Charan Singh (Amausi) International Airport or Kanpur Chakeri Airport requires absolute punctuality. Our 24x7 airport taxi service guarantees on-time doorstep pickup across Kanpur with flight tracking and transparent fixed fares.",
    highlights: ["Amausi Airport (LKO) 24x7 Drops", "Kanpur Central Station Transfers", "Flight Delay Monitoring", "Fixed Transparent Rates"],
    reasons: [
      "Guaranteed punctual arrival so you never have to rush for flight check-in.",
      "Comfortable sedans and Innova Crysta with ample boot space for airline luggage.",
      "Zero surge pricing and 24x7 availability for late-night and early-morning flights.",
    ],
    relatedPackages: ["kashi-vishwanath", "prayagraj-sangam", "ayodhya-darshan"],
    relatedPages: [
      "car-rental-kanpur",
      "taxi-service-kanpur",
      "corporate-travel",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "How much time before flight departure should I book my Kanpur to Lucknow airport cab?",
        answer:
          "We recommend scheduling pickup at least 3.5 to 4 hours prior to domestic flight departure to account for highway travel (1.5–2 hours) and security check-in.",
      },
      {
        question: "Do you track flight delays for airport pickups?",
        answer:
          "Yes, our team monitors flight arrival times so your chauffeur is ready at the terminal when you land.",
      },
    ],
  },
  {
    kind: "service",
    slug: "outstation-taxi",
    title: "Outstation Taxi | One-Way and Round-Trip Cab Booking",
    description:
      "Book outstation taxi from Kanpur for one-way drops, round trips, family travel and long-distance intercity journeys.",
    eyebrow: "Outstation Taxi",
    heroTitle: "Outstation taxi service from Kanpur for one-way and round-trip journeys.",
    heroSubtitle:
      "Reliable outstation cab booking from Kanpur to Lucknow, Ayodhya, Varanasi, Prayagraj, Delhi NCR, and across India with experienced highway drivers.",
    introHeading: "Comfortable, safe, and transparent outstation cab travel",
    introBody:
      "Whether embarking on a weekend pilgrimage, an intercity business trip, or a family holiday, our outstation taxi service gives you the freedom of door-to-door travel without train waitlists or crowded buses. Enjoy clean AC vehicles, flexible stops, and transparent per-km billing.",
    highlights: ["One-Way Drop Availability", "Round-Trip Holiday Cabs", "All-India Tourist Permit", "Zero Hidden Surcharges"],
    reasons: [
      "Experienced highway chauffeurs who know optimal routes, toll gates, and clean rest stops.",
      "Wide choice of vehicles from budget sedans to Innova Crysta and tempo travellers.",
      "Transparent billing with clear driver allowance and toll inclusions.",
    ],
    relatedPackages: ["kashmir-paradise", "kullu-manali", "char-dham-yatra"],
    relatedPages: ["car-rental-kanpur", "taxi-service-kanpur", "airport-transfer", "tour-packages"],
    faqs: [
      {
        question: "Do you offer one-way outstation cabs from Kanpur?",
        answer:
          "Yes, we offer economical one-way drops on popular routes including Kanpur to Lucknow, Ayodhya, Prayagraj, and Delhi NCR so you only pay for one direction.",
      },
      {
        question: "Are toll charges and state taxes included in outstation fares?",
        answer:
          "We provide completely transparent quotes indicating whether tolls and taxes are included or billed at actuals, ensuring zero surprise charges.",
      },
    ],
  },
  {
    kind: "service",
    slug: "travel-agency-kanpur",
    title: "Travel Agency Kanpur | Tours, Cars, Holidays & Group Travel",
    description:
      "Find a travel agency in Kanpur for tour packages, car rental, holiday planning, pilgrimage trips and group itineraries.",
    eyebrow: "Travel Agency Kanpur",
    heroTitle: "Trusted travel agency in Kanpur for all-inclusive tour packages & car rentals.",
    heroSubtitle:
      "End-to-end holiday and pilgrimage planning from Kanpur: customized family itineraries, hotel bookings, luxury cars, and 24x7 travel assistance.",
    introHeading: "Complete holiday and pilgrimage planning from Kanpur",
    introBody:
      "Planning a family holiday or religious pilgrimage involves coordinating routes, comfortable stays, trusted vehicles, and daily sightseeing. With over a decade of experience, Rudra Tours & Travels manages every detail with local warmth and dedicated ground support.",
    highlights: ["Custom Tour Itineraries", "Verified Hotel Bookings", "Dedicated Fleet Support", "24x7 On-Trip Assistance"],
    reasons: [
      "Personalized holiday and pilgrimage planning tailored to your family's budget and schedule.",
      "Own fleet of sedans, SUVs, Innova Crysta, and tempo travellers for assured reliability.",
      "Honest, transparent pricing with clear inclusions and no surprise charges.",
    ],
    relatedPackages: ["ayodhya-darshan", "mathura-vrindavan", "kashmir-paradise"],
    relatedPages: ["tour-packages", "holiday-packages", "car-rental-kanpur", "corporate-travel"],
    faqs: [
      {
        question: "What makes Rudra Tours different from online travel aggregators?",
        answer:
          "We are a local Kanpur travel agency with our own fleet and drivers, providing direct, personalized 24x7 ground support rather than routing your booking through third-party call centers.",
      },
      {
        question: "Can you arrange custom family packages for elderly parents?",
        answer:
          "Yes, we specialize in senior-citizen friendly pilgrimage tours with relaxed pacing, comfortable vehicle options, and doorstep assistance.",
      },
    ],
  },
  {
    kind: "service",
    slug: "corporate-travel",
    title: "Corporate Travel | Executive Cab, Airport Pickup & Business Transfers",
    description:
      "Book corporate travel from Kanpur for meetings, airport transfers, employee movement and executive transport.",
    eyebrow: "Corporate Travel",
    heroTitle: "Corporate travel & executive cab services in Kanpur.",
    heroSubtitle:
      "Punctual executive cab hire, airport transfers, corporate delegations, and dedicated monthly cab services with transparent GST billing.",
    introHeading: "Reliable, professional corporate transportation in Kanpur",
    introBody:
      "Rudra Tours provides business organizations in Kanpur with dependable executive transport. From receiving VIP clients at Lucknow Amausi Airport to coordinating fleet logistics for corporate conferences and daily executive travel, we ensure utmost punctuality and professional service.",
    highlights: ["Executive Chauffeur Cabs", "Airport Client Pickups", "Corporate Conference Convoys", "Itemized GST Invoices"],
    reasons: [
      "Strict punctuality guarantee for flights, business meetings, and executive schedules.",
      "Courteous, verified drivers trained in corporate etiquette and confidentiality.",
      "Streamlined billing with monthly invoicing and corporate discount arrangements.",
    ],
    relatedPackages: ["mumbai-tour", "jaipur-tour", "prayagraj-sangam"],
    relatedPages: ["airport-transfer", "luxury-car-rental", "car-rental-kanpur", "tour-packages"],
    faqs: [
      {
        question: "Do you provide itemized GST invoices for corporate bookings?",
        answer:
          "Yes, all corporate bookings receive compliant, itemized tax invoices with GST credit details.",
      },
      {
        question: "Can we set up an ongoing monthly cab arrangement for business travel?",
        answer:
          "Yes, we offer dedicated monthly contracts and corporate travel accounts tailored to your organization's transit schedule.",
      },
    ],
  },
  {
    kind: "service",
    slug: "tour-packages",
    title: "Tour Packages | India Holiday Packages, Family Trips & Pilgrimage Tours",
    description:
      "Explore India tour packages for family holidays, pilgrimage tours, hill stations, beaches and weekend getaways from Kanpur.",
    eyebrow: "Tour Packages",
    heroTitle: "Curated India tour packages for family holidays & sacred pilgrimages.",
    heroSubtitle:
      "Discover handpicked tour packages across North India, Kashmir, Rajasthan, Kerala, and sacred pilgrimage routes with comfortable chauffeur cabs.",
    introHeading: "Carefully designed journeys for families and devotees",
    introBody:
      "Whether seeking the spiritual bliss of Kashi Vishwanath and Ram Mandir Ayodhya, the royal heritage of Rajasthan, or the snow-capped serenity of Kashmir and Himachal, our tour packages combine comfortable travel, handpicked hotels, and memorable sightseeing.",
    highlights: ["Spiritual Pilgrimage Circuits", "Family Mountain Holidays", "Heritage & Cultural Tours", "Custom Vehicle Packages"],
    reasons: [
      "Doorstep Kanpur departures with private chauffeur cabs throughout the trip.",
      "Carefully paced daily itineraries designed for comfort across all age groups.",
      "Complete transparency regarding hotel categories, sightseeing inclusions, and meals.",
    ],
    relatedPackages: ["kashmir-paradise", "char-dham-yatra", "rajasthan-heritage"],
    relatedPages: [
      "holiday-packages",
      "uttar-pradesh-tour-packages",
      "travel-agency-kanpur",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "Can we customize our departure date and trip duration?",
        answer:
          "Yes, all our tour packages are fully customizable. You choose your travel dates, group size, and vehicle preferences.",
      },
      {
        question: "Are hotel accommodations included in the tour packages?",
        answer:
          "We offer both transport-only packages as well as comprehensive packages including verified 3-star or 4-star hotel stays with breakfast.",
      },
    ],
  },
  {
    kind: "service",
    slug: "uttar-pradesh-tour-packages",
    title: "Uttar Pradesh Tour Packages | Ayodhya, Varanasi, Mathura & Prayagraj",
    description:
      "Find Uttar Pradesh tour packages covering Ayodhya, Varanasi, Prayagraj, Mathura, Agra and nearby pilgrimage routes.",
    eyebrow: "Uttar Pradesh Tour Packages",
    heroTitle: "Uttar Pradesh pilgrimage & heritage tour packages from Kanpur.",
    heroSubtitle:
      "Explore the sacred corridors of Ayodhya, Varanasi, Prayagraj, Mathura-Vrindavan, and the heritage of Agra with dedicated chauffeur cabs.",
    introHeading: "The spiritual and cultural heartland of India",
    introBody:
      "Uttar Pradesh is home to India's most revered holy cities and world-renowned monuments. Based in Kanpur, Rudra Tours offers unmatched local expertise and comfortable road travel connecting Ram Janmabhoomi, Kashi Vishwanath Corridor, Triveni Sangam, and the Taj Mahal.",
    highlights: ["Ayodhya Ram Mandir", "Kashi Vishwanath Corridor", "Prayagraj Triveni Sangam", "Mathura Braj Bhoomi"],
    reasons: [
      "Local Uttar Pradesh chauffeurs who understand temple darshan timings, VIP lines, and local customs.",
      "Smooth highway travel utilizing expressways: Agra-Lucknow, Purvanchal, and Bundelkhand.",
      "Custom combinations of pilgrimage and heritage sites within 2 to 7 days.",
    ],
    relatedPackages: [
      "ayodhya-darshan",
      "kashi-vishwanath",
      "mathura-vrindavan",
      "prayagraj-sangam",
    ],
    relatedPages: ["tour-packages", "holiday-packages", "ayodhya", "varanasi"],
    faqs: [
      {
        question: "Can we cover Ayodhya, Varanasi, and Prayagraj in a single tour?",
        answer:
          "Yes, our popular 4 to 5-day UP Triveni-Kashi-Ayodhya circuit covers all three holy cities seamlessly with private cab support.",
      },
      {
        question: "What vehicles are recommended for a UP pilgrimage tour with senior citizens?",
        answer:
          "We recommend the Toyota Innova Crysta for small families or a 12/17-seater Tempo Traveller for larger groups, ensuring easy entry, pushback seats, and ample luggage space.",
      },
    ],
  },
  {
    kind: "service",
    slug: "holiday-packages",
    title: "Holiday Packages | Custom India Getaways, Family Trips & Seasonal Tours",
    description:
      "Plan holiday packages for India getaways, family vacations, festive trips and seasonal travel with Rudra Tours and Travels.",
    eyebrow: "Holiday Packages",
    heroTitle: "Custom India holiday packages for family vacations & seasonal getaways.",
    heroSubtitle:
      "Plan your dream vacation to Goa, Kerala, Kashmir, Himachal, or Uttarakhand with handpicked stays, private cabs, and transparent pricing.",
    introHeading: "Memorable holiday getaways planned with care",
    introBody:
      "Taking time off with family and loved ones should be refreshing, not stressful. Rudra Tours handles all the logistics—from route planning and vehicle arrangements to hotel coordination—ensuring an effortless holiday from the moment you leave home.",
    highlights: ["Hill Station Escapes", "Beach & Coastal Holidays", "Winter Snow Tours", "Custom Family Vacations"],
    reasons: [
      "Experienced holiday planners who match destinations to your preferred travel season.",
      "Reliable on-ground drivers who know local sightseeing spots and scenic viewpoints.",
      "Comprehensive support before, during, and after your trip.",
    ],
    relatedPackages: ["goa-tour", "kerala-tour", "kullu-manali"],
    relatedPages: [
      "tour-packages",
      "uttar-pradesh-tour-packages",
      "travel-agency-kanpur",
      "corporate-travel",
    ],
    faqs: [
      {
        question: "How early should we book our holiday package?",
        answer:
          "For peak seasons such as summer hill holidays or festive winter travel, we recommend booking 3 to 4 weeks in advance to secure the best hotel rooms and vehicle availability.",
      },
      {
        question: "Do you provide customized honeymoon and anniversary packages?",
        answer:
          "Yes, we curate romantic, private getaways to destinations like Kashmir, Manali, Goa, and Kerala with special touches.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-lucknow-cab",
    title: "Kanpur to Lucknow Cab | Taxi Service & Airport Drop (₹1,499 Onwards)",
    description:
      "Book Kanpur to Lucknow cab service for one-way drops, round trips, Amausi Airport transfer & local sightseeing with 24x7 driver support.",
    eyebrow: "Kanpur to Lucknow Cab",
    heroTitle:
      "Kanpur to Lucknow cab booking for airport drops, business trips and one-way travel.",
    heroSubtitle:
      "Travel comfortably between Kanpur and Lucknow (80 km, ~1.5 hrs) with clean sedans, Innova Crysta, and round-the-clock chauffeur assistance.",
    introHeading: "Why travellers book Kanpur to Lucknow cabs with Rudra Tours",
    introBody:
      "The Kanpur to Lucknow corridor is one of Uttar Pradesh's busiest travel routes. Whether you need an early morning drop to Chaudhary Charan Singh (Amausi) Airport, a same-day corporate round trip, or a convenient one-way cab, Rudra Tours provides on-time pickup, polite drivers, and fixed transparent fares with zero hidden charges.",
    highlights: [
      "80 km · ~1.5 Hours",
      "One-way & Round Trip",
      "Amausi Airport Drops",
      "Transparent Toll & Fare",
    ],
    reasons: [
      "Direct Kanpur-Lucknow highway connectivity with zero surge pricing.",
      "Doorstep pickup from anywhere in Kanpur to anywhere in Lucknow.",
      "Flight-friendly timing with on-time airport drop guarantee.",
    ],
    relatedPackages: ["ayodhya-darshan", "mathura-vrindavan", "prayagraj-sangam"],
    relatedPages: [
      "taxi-service-kanpur",
      "airport-transfer",
      "outstation-taxi",
      "car-rental-kanpur",
    ],
    faqs: [
      {
        question: "What is the cab fare from Kanpur to Lucknow?",
        answer:
          "One-way sedan cab fares start from ₹1,499, while SUVs and Innova Crysta range between ₹2,200 to ₹3,200 depending on vehicle class.",
      },
      {
        question: "How long does it take to travel from Kanpur to Lucknow by taxi?",
        answer:
          "The travel time via NH27 is approximately 1.5 to 2 hours depending on city traffic and pickup location.",
      },
      {
        question: "Do you provide airport drops to Lucknow Amausi Airport?",
        answer:
          "Yes, we provide 24x7 direct airport drops and pickups from Kanpur to Lucknow Chaudhary Charan Singh International Airport (LKO).",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-ayodhya-taxi",
    title: "Kanpur to Ayodhya Taxi | Cab Booking for Ram Mandir Darshan",
    description:
      "Book Kanpur to Ayodhya taxi service for Ram Mandir Darshan, Hanuman Garhi, and Saryu Aarti with sanitized cabs and experienced drivers.",
    eyebrow: "Kanpur to Ayodhya Taxi",
    heroTitle: "Kanpur to Ayodhya cab service for divine Ram Mandir Darshan and family pilgrimage.",
    heroSubtitle:
      "Smooth 220 km (~4 hrs) pilgrimage journey from Kanpur to Ayodhya with same-day return and multi-day temple tour options.",
    introHeading: "Spiritual pilgrimage from Kanpur to Ayodhya Dham",
    introBody:
      "With the grand inauguration of the Ram Mandir, Ayodhya has become India's foremost spiritual destination. Our Kanpur to Ayodhya taxi service is designed for devotees and families seeking a peaceful, unhurried pilgrimage. Our drivers know temple timings, parking spots, and the best ghats for Saryu evening aarti.",
    highlights: [
      "220 km · ~4 Hours",
      "Ram Mandir & Saryu Aarti",
      "Same Day Return Available",
      "Innova & Tempo Travellers",
    ],
    reasons: [
      "Expert drivers who know Ayodhya temple entry points and parking zones.",
      "Flexible itinerary for Hanuman Garhi, Kanak Bhawan & Ram Ki Paidi.",
      "Special family packages in Innova Crysta & 12/17 seater tempo travellers.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "prayagraj-sangam"],
    relatedPages: [
      "outstation-taxi",
      "car-rental-kanpur",
      "tempo-traveller-kanpur",
      "tour-packages",
    ],
    faqs: [
      {
        question: "Can I complete a Kanpur to Ayodhya trip in one day?",
        answer:
          "Yes, our same-day Ayodhya Darshan cab allows early morning departure from Kanpur, full temple darshan, and comfortable return by evening.",
      },
      {
        question: "Which vehicle is best for a family trip from Kanpur to Ayodhya?",
        answer:
          "Innova Crysta and Ertiga are best suited for 4-6 passengers, while 12 or 17-seater Tempo Travellers are ideal for larger groups.",
      },
      {
        question: "What temples are covered in the Ayodhya tour?",
        answer:
          "We cover Shri Ram Janmabhoomi Temple, Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, and Saryu River Ghats (Ram Ki Paidi).",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-prayagraj-taxi",
    title: "Kanpur to Prayagraj Taxi | Cab Booking for Triveni Sangam & Kumbh",
    description:
      "Hire Kanpur to Prayagraj cab for Triveni Sangam snan, Bade Hanuman temple, and airport transfers. Best rates on sedans, SUVs & tempo travellers.",
    eyebrow: "Kanpur to Prayagraj Taxi",
    heroTitle: "Kanpur to Prayagraj cab service for holy Triveni Sangam snan and city travel.",
    heroSubtitle:
      "Reliable 200 km (~3.5 hrs) ride along NH19 connecting Kanpur and Prayagraj with flexible pickup and drop.",
    introHeading: "Comfortable cab travel to the holy Sangam city",
    introBody:
      "Whether visiting for the holy Triveni Sangam snan, Anand Bhawan, Alopi Devi temple, or court and official work, our Kanpur to Prayagraj taxi service ensures a smooth highway cruise on the 6-lane NH19 corridor with complete passenger safety and comfort.",
    highlights: [
      "200 km · ~3.5 Hours",
      "Triveni Sangam Snan",
      "Bade Hanuman Ji Temple",
      "One-way & Round Trip",
    ],
    reasons: [
      "Smooth highway ride via NH19 6-lane expressway corridor.",
      "Convenient boat point drop at Sangam with zero parking hassles.",
      "Available for same-day darshan and Kumbh/Magh Mela visits.",
    ],
    relatedPackages: ["prayagraj-sangam", "kashi-vishwanath", "ayodhya-darshan"],
    relatedPages: [
      "outstation-taxi",
      "taxi-service-kanpur",
      "tempo-traveller-kanpur",
      "car-rental-kanpur",
    ],
    faqs: [
      {
        question: "What is the distance and travel time from Kanpur to Prayagraj?",
        answer:
          "The distance is approximately 200 km via NH19, taking around 3.5 to 4 hours under normal traffic conditions.",
      },
      {
        question: "Can the driver wait while we visit Triveni Sangam?",
        answer:
          "Yes, for round-trip bookings the driver stays with you throughout the day for boat rides, temple visits, and meals.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-varanasi-cab",
    title: "Kanpur to Varanasi Cab | Taxi Service for Kashi Vishwanath Darshan",
    description:
      "Book Kanpur to Varanasi taxi for Kashi Vishwanath Temple, Ganga Aarti, and Sarnath. Clean cabs, transparent per-km rates & expert drivers.",
    eyebrow: "Kanpur to Varanasi Cab",
    heroTitle: "Kanpur to Varanasi cab service for divine Kashi Vishwanath and Ganga Aarti.",
    heroSubtitle:
      "Comfortable 320 km (~5.5 hrs) highway journey from Kanpur to Varanasi with experienced highway chauffeurs.",
    introHeading: "Your spiritual journey to the world's oldest living city",
    introBody:
      "Travelling from Kanpur to Kashi (Varanasi) is a journey into the spiritual heart of India. Rudra Tours offers dedicated outstation cabs, Innova Crysta, and Tempo Travellers for Kashi Vishwanath corridor darshan, Sankat Mochan temple, Sarnath, and the world-famous Dashashwamedh Ghat Ganga Aarti.",
    highlights: [
      "320 km · ~5.5 Hours",
      "Kashi Vishwanath Corridor",
      "Dashashwamedh Ghat Aarti",
      "Multi-day Tour Options",
    ],
    reasons: [
      "Chauffeurs experienced with Varanasi city traffic and temple drop zones.",
      "Perfect vehicle options from Swift Dzire to Innova Hycross and Tempo Travellers.",
      "Custom stops at Prayagraj or Vindhyachal along the route.",
    ],
    relatedPackages: ["kashi-vishwanath", "prayagraj-sangam", "ayodhya-darshan"],
    relatedPages: [
      "outstation-taxi",
      "tour-packages",
      "tempo-traveller-kanpur",
      "innova-crysta-rental",
    ],
    faqs: [
      {
        question: "Can we include Prayagraj Sangam on the way to Varanasi from Kanpur?",
        answer:
          "Yes, our custom pilgrimage cab itineraries easily include a holy dip at Prayagraj Sangam en route to Varanasi.",
      },
      {
        question: "What are the cab options available for Kanpur to Varanasi?",
        answer:
          "We offer sedans (Dzire/Amaze), SUVs (Ertiga/Innova Crysta/Fortuner), and 12-26 seater Tempo Travellers.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-delhi-cab",
    title: "Kanpur to Delhi Cab | Taxi Booking via Yamuna & Agra Expressway",
    description:
      "Book Kanpur to Delhi NCR cab service via Agra-Lucknow & Yamuna Expressways. Fast, safe, and comfortable one-way & round-trip taxi hire.",
    eyebrow: "Kanpur to Delhi Cab",
    heroTitle:
      "Kanpur to Delhi cab service for expressway travel, airport drops and business trips.",
    heroSubtitle:
      "Seamless 490 km (~7 hrs) expressway cruise connecting Kanpur to Delhi, Noida, and Gurgaon with premium fleet and professional drivers.",
    introHeading: "Fast & hassle-free travel to Delhi NCR via Expressways",
    introBody:
      "Avoid train waitlists and flight hassles with our premium Kanpur to Delhi taxi service. Cruising on the Agra-Lucknow and Yamuna Expressways, our chauffeur-driven sedans and luxury SUVs get you to Delhi, Noida, Greater Noida, or Gurgaon safely and comfortably.",
    highlights: [
      "490 km · ~7 Hours",
      "Expressway Route (Fast & Smooth)",
      "IGI Delhi Airport Drops",
      "24x7 Availability",
    ],
    reasons: [
      "Direct expressway connectivity via Agra-Lucknow & Yamuna Expressway.",
      "Eliminates train waitlists and flight transit delays for door-to-door comfort.",
      "Transparent toll, tax, and fuel pricing with zero hidden surcharges.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "amritsar-wagah"],
    relatedPages: ["outstation-taxi", "corporate-travel", "luxury-car-rental", "car-rental-kanpur"],
    faqs: [
      {
        question: "How long does a cab take from Kanpur to Delhi via Expressway?",
        answer:
          "Via the Agra-Lucknow and Yamuna Expressways, the 490 km journey typically takes around 6.5 to 7.5 hours.",
      },
      {
        question: "Do you provide airport drops to Delhi IGI Airport from Kanpur?",
        answer:
          "Yes, we provide 24x7 direct airport drop and pickup services between Kanpur and Delhi IGI Airport (T1, T2, T3).",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-agra-cab",
    title: "Kanpur to Agra Cab | Taxi Service for Taj Mahal & Fatehpur Sikri",
    description:
      "Book Kanpur to Agra taxi service for Taj Mahal sightseeing, Agra Fort & wedding events. Best per-km rates on sedans, SUVs & tempo travellers.",
    eyebrow: "Kanpur to Agra Cab",
    heroTitle:
      "Kanpur to Agra cab service for Taj Mahal tours, weekend getaways and heritage travel.",
    heroSubtitle:
      "Convenient 280 km (~4 hrs) drive via Agra-Lucknow Expressway with comfortable stops and local Agra expertise.",
    introHeading: "Explore the City of Taj with Rudra Tours",
    introBody:
      "Take a relaxing 4-hour drive from Kanpur to Agra on the world-class Agra-Lucknow Expressway. Whether you are planning a one-day Taj Mahal sightseeing trip or a weekend getaway with family, our experienced drivers ensure a delightful travel experience.",
    highlights: [
      "280 km · ~4 Hours",
      "Agra-Lucknow Expressway",
      "Taj Mahal & Agra Fort",
      "Same Day & Weekend Tours",
    ],
    reasons: [
      "Fast and relaxing ride on the smooth Agra-Lucknow Expressway.",
      "Sightseeing flexibility for Taj Mahal, Agra Fort, and Fatehpur Sikri.",
      "Affordable sedan and SUV packages for families and couples.",
    ],
    relatedPackages: ["mathura-vrindavan", "jaipur-tour", "rajasthan-heritage"],
    relatedPages: ["outstation-taxi", "car-rental-kanpur", "tour-packages", "luxury-car-rental"],
    faqs: [
      {
        question: "Can I do a same-day Taj Mahal trip from Kanpur by cab?",
        answer:
          "Yes, you can leave Kanpur early morning, reach Agra in 4 hours, explore Taj Mahal and Agra Fort, and return by night.",
      },
      {
        question: "Can we combine Agra and Mathura-Vrindavan in one trip from Kanpur?",
        answer:
          "Yes, Mathura and Vrindavan are just 60 km from Agra and can easily be added to your itinerary.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-mathura-vrindavan-cab",
    title: "Kanpur to Mathura Vrindavan Cab | Taxi for Krishna Janmabhoomi & Prem Mandir",
    description:
      "Book Kanpur to Mathura Vrindavan taxi for Banke Bihari, Prem Mandir, and Krishna Janmabhoomi darshan. Reliable cabs and tempo travellers.",
    eyebrow: "Kanpur to Mathura Vrindavan Cab",
    heroTitle: "Kanpur to Mathura Vrindavan cab service for divine Braj darshan and pilgrimage.",
    heroSubtitle:
      "Comfortable 340 km (~5 hrs) expressway ride from Kanpur to Mathura, Vrindavan, and Govardhan with experienced family chauffeurs.",
    introHeading: "Braj Bhoomi Darshan from Kanpur with ease",
    introBody:
      "Experience the divine aura of Shri Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir light show, and ISKCON Vrindavan. Our Kanpur to Mathura Vrindavan cab service provides comfortable transport for devotees, senior citizens, and family groups.",
    highlights: [
      "340 km · ~5 Hours",
      "Banke Bihari & Prem Mandir",
      "Expressway Highway Drive",
      "Same Day & Weekend Trips",
    ],
    reasons: [
      "Knowledgeable drivers familiar with temple timings and parking in Vrindavan.",
      "Convenient multi-temple coverage including Mathura, Vrindavan, and Barsana.",
      "Spacious Innova Crysta and tempo travellers for family groups and elders.",
    ],
    relatedPackages: ["mathura-vrindavan", "ayodhya-darshan", "khatu-shyam-ji"],
    relatedPages: [
      "outstation-taxi",
      "tour-packages",
      "tempo-traveller-kanpur",
      "car-rental-kanpur",
    ],
    faqs: [
      {
        question: "What are the main temples covered in Mathura Vrindavan from Kanpur?",
        answer:
          "We cover Shri Krishna Janmabhoomi, Banke Bihari Temple, Prem Mandir, ISKCON Vrindavan, Nidhivan, and Raman Reti.",
      },
      {
        question: "Is tempo traveller available from Kanpur to Mathura Vrindavan?",
        answer:
          "Yes, we provide 12, 17, and 26-seater AC Tempo Travellers for group pilgrimages from Kanpur to Mathura.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-kainchi-dham-taxi",
    title: "Kanpur to Kainchi Dham Taxi | Cab for Neem Karoli Baba Ashram & Nainital",
    description:
      "Book Kanpur to Kainchi Dham cab for Neem Karoli Baba Ashram, Nainital & Almora. Safe hill-driving chauffeurs & comfortable SUVs.",
    eyebrow: "Kanpur to Kainchi Dham Taxi",
    heroTitle: "Kanpur to Kainchi Dham taxi service for Neem Karoli Baba Ashram pilgrimage.",
    heroSubtitle:
      "Peaceful 420 km (~8 hrs) scenic drive from Kanpur to Kainchi Dham and Nainital with experienced mountain drivers.",
    introHeading: "Divine pilgrimage to Neem Karoli Baba Ashram",
    introBody:
      "Kainchi Dham in Uttarakhand attracts devotees from all over the world seeking the blessings of Neem Karoli Baba. Our Kanpur to Kainchi Dham taxi service offers safe, reliable SUVs and tempo travellers with drivers experienced in mountain driving.",
    highlights: [
      "420 km · ~8 Hours",
      "Neem Karoli Baba Ashram",
      "Nainital Sightseeing Extension",
      "Hill-Trained Chauffeurs",
    ],
    reasons: [
      "Mountain-tested drivers experienced with Uttarakhand ghat roads and weather.",
      "Reliable SUVs like Innova Crysta, Scorpio, and Fortuner for maximum hill safety.",
      "Direct ashram drop with optional extension to Nainital, Bhimtal, and Mukteshwar.",
    ],
    relatedPackages: ["neem-karoli-kainchi-dham", "nainital-tour", "haridwar-rishikesh"],
    relatedPages: ["outstation-taxi", "tour-packages", "innova-crysta-rental", "car-rental-kanpur"],
    faqs: [
      {
        question: "How far is Kainchi Dham from Kanpur by road?",
        answer:
          "The road distance is approximately 420 km and takes around 8 to 9 hours via Bareilly and Haldwani.",
      },
      {
        question: "Which car is recommended for a Kainchi Dham trip from Kanpur?",
        answer:
          "We recommend comfortable SUVs like Innova Crysta, Scorpio, or Ertiga for smooth hill climbing and ample luggage space.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-chitrakoot-taxi",
    title: "Kanpur to Chitrakoot Taxi | Cab Booking for Kamadgiri & Ramghat",
    description:
      "Book Kanpur to Chitrakoot taxi service for Kamadgiri Parikrama, Ramghat, Gupt Godavari & Bharat Koop. Transparent per-km rates & experienced drivers.",
    eyebrow: "Kanpur to Chitrakoot Taxi",
    heroTitle: "Kanpur to Chitrakoot cab service for divine Kamadgiri and Ramghat pilgrimage.",
    heroSubtitle:
      "Peaceful 175 km (~4 hrs) pilgrimage journey connecting Kanpur and Chitrakoot Dham with sanitized cabs and reliable drivers.",
    introHeading: "Sacred pilgrimage from Kanpur to Chitrakoot Dham",
    introBody:
      "Chitrakoot holds deep spiritual significance as the sacred abode where Lord Rama, Sita, and Lakshmana spent eleven and a half years of their exile. Our Kanpur to Chitrakoot cab service offers comfortable round trips and one-way drops covering Kamadgiri Parikrama, Ramghat Mandakini Aarti, Gupt Godavari, Sati Anusuya Ashram, and Sphatik Shila with zero travel hassle.",
    highlights: [
      "175 km · ~4 Hours",
      "Kamadgiri & Ramghat",
      "Gupt Godavari & Sphatik Shila",
      "Same Day & Overnight Trips",
    ],
    reasons: [
      "Experienced highway drivers familiar with the Kanpur-Ghatampur-Hamirpur-Banda-Chitrakoot route.",
      "Flexible darshan schedule for Kamadgiri parikrama and evening Mandakini aarti.",
      "Clean sedans, Innova Crysta, and Tempo Travellers for families and pilgrim groups.",
    ],
    relatedPackages: ["chitrakoot-tour", "prayagraj-sangam", "ayodhya-darshan"],
    relatedPages: [
      "outstation-taxi",
      "taxi-service-kanpur",
      "car-rental-kanpur",
      "tempo-traveller-kanpur",
    ],
    faqs: [
      {
        question: "What is the distance and travel time from Kanpur to Chitrakoot?",
        answer:
          "The distance is approximately 175 km via NH34 and Banda road, taking about 3.5 to 4 hours.",
      },
      {
        question: "Can I do a same-day Kanpur to Chitrakoot return trip?",
        answer:
          "Yes, you can depart Kanpur early morning (around 5:00 - 6:00 AM), complete Kamadgiri Parikrama, Ramghat, and Gupt Godavari, and return safely to Kanpur the same evening.",
      },
      {
        question: "Which vehicles are available for Chitrakoot family tours?",
        answer:
          "We offer 4-seater sedans (Dzire/Etios), 6/7-seater SUVs (Ertiga/Innova Crysta), and 12-26 seater Tempo Travellers for larger pilgrim groups.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-haridwar-taxi",
    title: "Kanpur to Haridwar Taxi | Cab Booking for Har Ki Pauri & Rishikesh",
    description:
      "Book Kanpur to Haridwar cab service for Ganga Snan, Har Ki Pauri Ganga Aarti, Mansa Devi, Chandi Devi & Rishikesh. Safe highway & hill chauffeurs.",
    eyebrow: "Kanpur to Haridwar Taxi",
    heroTitle: "Kanpur to Haridwar cab service for sacred Ganga Snan, Har Ki Pauri and Rishikesh.",
    heroSubtitle:
      "Direct 560 km (~9.5 hrs) highway journey from Kanpur to Haridwar and Rishikesh with comfortable AC sedans, Innova Crysta, and tempo travellers.",
    introHeading: "Spiritual journey from Kanpur to Haridwar & Rishikesh",
    introBody:
      "Haridwar is the revered gateway to the gods and the starting point for Uttarakhand pilgrimages. Our Kanpur to Haridwar taxi service provides dedicated long-distance cabs for Har Ki Pauri Ganga Snan, Mansa Devi Temple, Chandi Devi, and onward travel to Rishikesh (Ram Jhula, Laxman Jhula, Triveni Ghat). Travel in comfort with courteous chauffeurs and transparent billing.",
    highlights: [
      "560 km · ~9.5 Hours",
      "Har Ki Pauri Ganga Aarti",
      "Mansa Devi & Chandi Devi",
      "Rishikesh Extension Available",
    ],
    reasons: [
      "Dedicated long-distance highway chauffeurs trained for safe overnight and day driving.",
      "Doorstep pickup anywhere in Kanpur with direct drop to Haridwar ashrams, hotels, or ghats.",
      "Comfortable pushback seats in Innova Crysta and tempo travellers for effortless long-distance travel.",
    ],
    relatedPackages: ["haridwar-rishikesh", "char-dham-yatra", "neem-karoli-kainchi-dham"],
    relatedPages: [
      "outstation-taxi",
      "tour-packages",
      "tempo-traveller-kanpur",
      "innova-crysta-rental",
    ],
    faqs: [
      {
        question: "How far is Haridwar from Kanpur and what is the travel duration?",
        answer:
          "The distance is approximately 560 km via NH34 and Meerut/Muzaffarnagar route, typically taking 9 to 10 hours including rest stops.",
      },
      {
        question: "Can we extend the Haridwar trip to Rishikesh, Neelkanth Mahadev, or Dehradun?",
        answer:
          "Yes, we offer flexible multi-day itineraries that easily include Rishikesh, Neelkanth, Mussoorie, and Dehradun.",
      },
      {
        question: "Are night driving charges or driver allowances included?",
        answer:
          "We provide upfront, transparent quotations clearly detailing driver allowances, state tax, tolls, and parking charges.",
      },
    ],
  },
  {
    kind: "service",
    slug: "kanpur-to-jaipur-taxi",
    title: "Kanpur to Jaipur Taxi | Cab Service for Pink City & Fort Tours",
    description:
      "Hire Kanpur to Jaipur cab service for Amber Fort, Hawa Mahal, City Palace & business visits. Fast, reliable highway cabs with upfront pricing.",
    eyebrow: "Kanpur to Jaipur Taxi",
    heroTitle: "Kanpur to Jaipur cab service for royal heritage tours, family vacations and business travel.",
    heroSubtitle:
      "Smooth 510 km (~8.5 hrs) highway drive from Kanpur to Jaipur via NH19 and NH21 with premium fleet and professional drivers.",
    introHeading: "Explore the Pink City of Jaipur from Kanpur",
    introBody:
      "Jaipur, the vibrant capital of Rajasthan, is renowned for its majestic forts, royal palaces, and colourful markets. Our Kanpur to Jaipur taxi service offers comfortable outstation sedans, Innova Crysta, and Fortuner rentals for exploring Amber Fort, Jal Mahal, Hawa Mahal, City Palace, and Chokhi Dhani. Enjoy a smooth highway cruise with polite, experienced drivers.",
    highlights: [
      "510 km · ~8.5 Hours",
      "Expressway & Highway Route",
      "Amber Fort & Hawa Mahal",
      "One-way & Round Trip Cabs",
    ],
    reasons: [
      "Well-maintained fleet suited for 8+ hour highway travel with zero breakdown worries.",
      "Direct route via Agra-Jaipur Highway (NH21) with convenient food and fuel stops.",
      "Transparent per-km and fixed package options with zero surge pricing.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "mathura-vrindavan"],
    relatedPages: [
      "outstation-taxi",
      "luxury-car-rental",
      "tour-packages",
      "car-rental-kanpur",
    ],
    faqs: [
      {
        question: "What is the best route and driving time from Kanpur to Jaipur?",
        answer:
          "The route via Agra-Lucknow Expressway to Agra and then NH21 to Jaipur is approximately 510 km, taking about 8.5 to 9 hours.",
      },
      {
        question: "Can we do sightseeing in Agra on the way to Jaipur?",
        answer:
          "Yes, our flexible round-trip packages allow you to stop at the Taj Mahal or Fatehpur Sikri en route to Jaipur.",
      },
      {
        question: "What is the luggage capacity for a Kanpur to Jaipur sedan or SUV?",
        answer:
          "Sedans comfortably accommodate 2-3 large trolley bags, while Innova Crysta and Ertiga easily hold 4-5 large bags with carrier options.",
      },
    ],
  },
];

const locationPages: LandingPage[] = [
  {
    kind: "location",
    slug: "kanpur",
    title: "Kanpur Travel Services | Travel Agency, Taxi, Car Rental & Tour Packages",
    description:
      "Your complete Kanpur travel guide. Book local taxi service, car rental in Kanpur, pick & drop, wedding cars, and tour packages from Kanpur across India with Rudra Tours.",
    eyebrow: "Kanpur Travel Hub",
    heroTitle: "Kanpur travel services — your gateway to cabs, rentals & India tours.",
    heroSubtitle:
      "The central hub connecting Kanpur travellers to 24x7 taxi services, car rentals, airport transfers, luxury wedding cars, and handpicked India tour packages.",
    introHeading: "Rudra Tours & Travels — Kanpur's trusted travel partner since 2014",
    introBody:
      "Headquartered in Swarn Jayanti Vihar, Koyala Nagar, Kanpur, Rudra Tours & Travels has been serving Uttar Pradesh since 2014. As Kanpur's leading travel agency and taxi operator, we seamlessly connect local city transport with outstation pilgrimage routes and holiday destinations across India.",
    highlights: [
      "Best Travel Agent in Kanpur",
      "Taxi Service & Cab Booking",
      "Car Rental & Tempo Travellers",
      "Pick & Drop Service Kanpur",
    ],
    reasons: [
      "Headquartered in Kanpur with 10+ years of local on-ground excellence.",
      "Complete travel ecosystem: from 1-hour city cabs to 15-day Char Dham itineraries.",
      "Verified chauffeurs, clean fleet, transparent rates and 24x7 instant support.",
    ],
    relatedPackages: [
      "ayodhya-darshan",
      "kashi-vishwanath",
      "prayagraj-sangam",
      "mathura-vrindavan",
    ],
    relatedPages: [
      "travel-agent-kanpur",
      "taxi-service-kanpur",
      "car-rental-kanpur",
      "pick-and-drop-service-kanpur",
      "outstation-taxi",
      "tour-packages",
    ],
    faqs: [
      {
        question: "Is Kanpur the main service area for Rudra Tours and Travels?",
        answer:
          "Yes. Kanpur is our headquarters and the central dispatch point for all local taxi, car rental, and outstation tour operations.",
      },
      {
        question: "What travel services can I book from Kanpur?",
        answer:
          "You can book local city cabs, airport pick & drop (Lucknow Amausi / Kanpur Chakeri), outstation taxis, wedding cars (Audi/BMW/Innova), tempo travellers, and custom holiday/pilgrimage packages.",
      },
      {
        question: "Where is the Rudra Tours office located in Kanpur?",
        answer:
          "Our office is located at LIG 5/46, Swarn Jayanti Vihar, Koyla Nagar, Daheli Sujanpur, Kanpur, Uttar Pradesh 208011.",
      },
    ],
  },
  {
    kind: "location",
    slug: "lucknow",
    title: "Lucknow Travel Guide | Taxi, Car Rental & Airport Transfer",
    description:
      "Travel to and from Lucknow with car rental, taxi service, airport transfers and pilgrimage route planning from Kanpur.",
    eyebrow: "Lucknow",
    heroTitle: "Kanpur to Lucknow travel guide — cabs, airport transfers & heritage tours.",
    heroSubtitle:
      "Complete travel guide for the Kanpur–Lucknow twin-city corridor, covering Amausi airport drops, Hazratganj shopping, business transit, and Gomti Nagar.",
    introHeading: "The premier twin-city highway corridor",
    introBody:
      "Connecting Kanpur with Uttar Pradesh's capital, the Kanpur–Lucknow route is vital for business travellers, flight passengers, and families. Rudra Tours operates 24x7 one-way and round-trip cabs with prompt doorstep pickups.",
    highlights: ["80 km · ~1.5 Hours", "Amausi Airport (LKO) Transfers", "Same-Day Business Returns", "Doorstep Pickup Across Kanpur"],
    reasons: [
      "Fast connectivity via NH27 with experienced highway chauffeurs.",
      "24x7 availability tailored to late-night and early-morning flight schedules.",
      "Sedans, Innova Crysta, and tempo travellers for business and family groups.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "mathura-vrindavan"],
    relatedPages: [
      "taxi-service-kanpur",
      "airport-transfer",
      "car-rental-kanpur",
      "uttar-pradesh-tour-packages",
    ],
    faqs: [
      {
        question: "How long does a taxi take from Kanpur to Lucknow?",
        answer: "Via the NH27 highway, travel time is approximately 1.5 to 2 hours depending on pickup locality and city traffic.",
      },
      {
        question: "Can I book a cab specifically for Lucknow airport drops?",
        answer: "Yes, we specialize in direct airport drops to Chaudhary Charan Singh International Airport (Amausi) with flight tracking.",
      },
    ],
  },
  {
    kind: "location",
    slug: "agra",
    title: "Agra Travel Guide | Taj Mahal Trips, Cabs & Holiday Packages",
    description:
      "Plan Agra travel with cabs, car rental, outstation taxi and holiday packages for the Taj Mahal and nearby sightseeing.",
    eyebrow: "Agra",
    heroTitle: "Agra travel guide from Kanpur — Taj Mahal trips, expressway cabs & tours.",
    heroSubtitle:
      "Plan a seamless 4-hour expressway road trip from Kanpur to Agra to explore the Taj Mahal, Agra Fort, and Fatehpur Sikri with private cabs.",
    introHeading: "Comfortable Agra road trips via Agra-Lucknow Expressway",
    introBody:
      "Visiting the City of Taj from Kanpur has never been easier thanks to the smooth Agra-Lucknow Expressway. Whether planning a same-day Taj Mahal sunrise visit or an overnight heritage getaway, Rudra Tours provides comfortable sedans and family SUVs with verified highway drivers.",
    highlights: ["Agra-Lucknow Expressway", "Same-Day Return Feasible", "Taj Mahal & Agra Fort", "Sedan & SUV Fleet"],
    reasons: [
      "Fast 4-hour highway drive on world-class expressway with clean rest stops.",
      "Flexible sightseeing pacing with driver waiting during monument visits.",
      "Affordable all-inclusive packages covering fuel, driver allowance, and toll taxes.",
    ],
    relatedPackages: ["rajasthan-heritage", "jaipur-tour", "kashmir-paradise"],
    relatedPages: ["outstation-taxi", "tour-packages", "holiday-packages", "car-rental-kanpur"],
    faqs: [
      {
        question: "Can we visit the Taj Mahal and return to Kanpur in one day?",
        answer:
          "Yes, an early morning 5:00 AM departure from Kanpur gets you to the Taj Mahal by 9:00 AM, allowing full sightseeing and a comfortable return by evening.",
      },
      {
        question: "Is the Agra-Lucknow Expressway safe for family travel?",
        answer: "Yes, the expressway is an advanced 6-lane access-controlled highway with 24x7 patrolling, toll plazas, and modern food courts.",
      },
    ],
  },
  {
    kind: "location",
    slug: "prayagraj",
    title: "Prayagraj Travel Guide | Sangam Visits, Taxi Service & Tour Packages",
    description:
      "Visit Prayagraj for Sangam travel, pilgrimage routes, car rental and outstation taxi service from Kanpur.",
    eyebrow: "Prayagraj",
    heroTitle: "Prayagraj travel guide — Triveni Sangam snan, Kumbh yatra & temple cabs.",
    heroSubtitle:
      "Spiritual pilgrimage and family road trips from Kanpur to holy Prayagraj via the smooth 6-lane NH19 corridor.",
    introHeading: "Spiritual pilgrimage to holy Triveni Sangam",
    introBody:
      "Prayagraj holds profound spiritual significance at the holy confluence of the Ganga, Yamuna, and Saraswati rivers. Located just 200 km from Kanpur, Rudra Tours provides private cabs and tempo travellers for Triveni Sangam snan, Bade Hanuman temple darshan, and Magh/Kumbh Mela visits.",
    highlights: ["200 km · ~3.5 Hours via NH19", "Triveni Sangam Boat Point Drop", "Bade Hanuman & Alopi Devi", "Same-Day & Multi-Day Cabs"],
    reasons: [
      "Comfortable cruising on the 6-lane NH19 corridor.",
      "Hassle-free parking and direct drops near Sangam ghats and boat points.",
      "Knowledgeable chauffeurs who guide you on temple timings and boat arrangements.",
    ],
    relatedPackages: ["prayagraj-sangam", "ayodhya-darshan", "kashi-vishwanath"],
    relatedPages: [
      "outstation-taxi",
      "tour-packages",
      "uttar-pradesh-tour-packages",
      "airport-transfer",
    ],
    faqs: [
      {
        question: "Can we complete a holy dip at Triveni Sangam in a single day from Kanpur?",
        answer: "Yes, our same-day Prayagraj cab departs early morning, allows ample time for boat snan and temple visits, and returns to Kanpur by evening.",
      },
      {
        question: "Can we combine Prayagraj with Varanasi and Ayodhya?",
        answer: "Yes, our popular 3 to 5-day UP Triveni-Kashi-Ayodhya pilgrimage circuit covers all three sacred cities smoothly.",
      },
    ],
  },
  {
    kind: "location",
    slug: "varanasi",
    title: "Varanasi Travel Guide | Kashi Darshan, Ganga Aarti & Cabs",
    description:
      "Plan Varanasi travel for Kashi Vishwanath, Ganga Aarti, local taxi service and pilgrimage tours from Kanpur.",
    eyebrow: "Varanasi",
    heroTitle: "Varanasi travel guide — Kashi Vishwanath, Ganga Aarti & pilgrimage cabs.",
    heroSubtitle:
      "Experience the eternal city of Kashi with private chauffeur cabs from Kanpur for temple darshan, boat rides, and Sarnath.",
    introHeading: "Spiritual journey to the sacred city of Lord Shiva",
    introBody:
      "Travelling to Varanasi from Kanpur is a profound spiritual pilgrimage. Rudra Tours provides comfortable chauffeur-driven cabs and tempo travellers for Kashi Vishwanath Corridor darshan, Dashashwamedh Ghat evening Ganga Aarti, Sankat Mochan, and historic Sarnath.",
    highlights: ["Kashi Vishwanath Corridor", "Dashashwamedh Ganga Aarti", "320 km via NH19", "Private Chauffeur Support"],
    reasons: [
      "Experienced drivers familiar with Varanasi's ring roads, ghat access points, and parking zones.",
      "Air-conditioned comfort so you arrive refreshed for temple darshan and aarti.",
      "Flexible itineraries with options to visit Prayagraj or Vindhyachal along the route.",
    ],
    relatedPackages: ["kashi-vishwanath", "prayagraj-sangam", "ayodhya-darshan"],
    relatedPages: [
      "tour-packages",
      "uttar-pradesh-tour-packages",
      "taxi-service-kanpur",
      "airport-transfer",
    ],
    faqs: [
      {
        question: "What is the best itinerary for a Kanpur to Varanasi pilgrimage trip?",
        answer:
          "A 2-day or 3-day itinerary is recommended to experience both morning temple darshan at Kashi Vishwanath and the mesmerizing evening Ganga Aarti.",
      },
      {
        question: "Can the driver arrange temple parking and guide support?",
        answer: "Our drivers drop you at designated temple access points (Godowlia/Maidagin) and assist with trusted local guides upon request.",
      },
    ],
  },
  {
    kind: "location",
    slug: "ayodhya",
    title: "Ayodhya Travel Guide | Ram Mandir Visit, Taxi Service & Packages",
    description:
      "Book Ayodhya travel with taxi service, car rental, pilgrimage packages and one-day or overnight road trips from Kanpur.",
    eyebrow: "Ayodhya",
    heroTitle: "Ayodhya travel guide — Ram Mandir Darshan, Saryu Aarti & pilgrimage cabs.",
    heroSubtitle:
      "Sacred pilgrimage journey from Kanpur to Ayodhya Dham for Shri Ram Janmabhoomi, Hanuman Garhi, and Kanak Bhawan.",
    introHeading: "Divine pilgrimage to Shri Ram Janmabhoomi",
    introBody:
      "With the magnificent new Ram Mandir, Ayodhya has become India's foremost spiritual center. Located approximately 220 km from Kanpur, Rudra Tours provides private cabs and group tempo travellers with chauffeurs who understand temple timings, security checkpoints, and parking areas.",
    highlights: ["220 km · ~4 Hours via NH27", "Shri Ram Janmabhoomi Darshan", "Hanuman Garhi & Kanak Bhawan", "Saryu Evening Aarti"],
    reasons: [
      "Chauffeurs who know the latest Ayodhya traffic regulations and drop-off zones.",
      "Spacious Innova Crysta and tempo travellers ideal for multi-generational family groups.",
      "Flexible same-day return or multi-day temple stay options.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "char-dham-yatra"],
    relatedPages: [
      "tour-packages",
      "uttar-pradesh-tour-packages",
      "car-rental-kanpur",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "Can we complete Ayodhya Ram Mandir darshan in one day from Kanpur?",
        answer: "Yes, our same-day Ayodhya tour starts around 5:30 AM from Kanpur, arrives in Ayodhya by 9:30 AM for Hanuman Garhi and Ram Janmabhoomi, and returns after evening Saryu Aarti.",
      },
      {
        question: "Are special facilities available for senior citizens in Ayodhya?",
        answer:
          "Yes, battery-operated carts and wheelchairs are available near the temple complex, and our drivers drop elders at the closest permissible access points.",
      },
    ],
  },
  {
    kind: "location",
    slug: "mathura",
    title: "Mathura Travel Guide | Vrindavan, Krishna Temples & Cabs",
    description:
      "Plan Mathura and Vrindavan travel with taxi service, car rental and pilgrimage packages from Kanpur.",
    eyebrow: "Mathura",
    heroTitle: "Mathura & Vrindavan travel guide — Krishna Janmabhoomi, Banke Bihari & cabs.",
    heroSubtitle:
      "Experience the divine joy of Braj Bhoomi with private expressway cabs from Kanpur to Mathura, Vrindavan, and Govardhan.",
    introHeading: "Divine journey to Shri Krishna's holy land",
    introBody:
      "Mathura and Vrindavan radiate spiritual devotion through the sacred temples of Shri Krishna Janmabhoomi, Banke Bihari, Prem Mandir, and ISKCON. Rudra Tours offers comfortable expressway road trips connecting Kanpur directly to Braj.",
    highlights: ["340 km · ~5 Hours via Expressway", "Banke Bihari & Prem Mandir", "Krishna Janmabhoomi", "Family Pilgrimage Cabs"],
    reasons: [
      "Fast, smooth transit via the Agra-Lucknow and Yamuna Expressways.",
      "Chauffeurs knowledgeable about Vrindavan temple opening/closing schedules.",
      "Spacious vehicles allowing families and elders to travel in relaxed comfort.",
    ],
    relatedPackages: ["mathura-vrindavan", "ayodhya-darshan", "kashi-vishwanath"],
    relatedPages: [
      "tour-packages",
      "uttar-pradesh-tour-packages",
      "taxi-service-kanpur",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "What are the essential temples to visit in Mathura and Vrindavan?",
        answer: "Key temples include Shri Krishna Janmabhoomi and Dwarkadhish in Mathura, and Banke Bihari, Prem Mandir, ISKCON, and Nidhivan in Vrindavan.",
      },
      {
        question: "Can we combine Mathura-Vrindavan with Agra Taj Mahal?",
        answer: "Yes, Agra is only 60 km from Mathura and can easily be included as part of a 2-day or 3-day round trip.",
      },
    ],
  },
  {
    kind: "location",
    slug: "noida",
    title: "Noida Travel Guide | Business Transfers, Airport Cabs & Car Rental",
    description:
      "Plan Noida travel with airport transfers, corporate travel, cab booking and car rental support from Kanpur.",
    eyebrow: "Noida",
    heroTitle: "Kanpur to Noida cab service & executive travel guide.",
    heroSubtitle:
      "Fast, reliable expressway cab booking between Kanpur and Noida via Agra-Lucknow & Yamuna Expressways for business meetings, airport transit, and family movement.",
    introHeading: "Seamless expressway transit between Kanpur and Noida",
    introBody:
      "Connecting Kanpur with Noida's commercial hubs, IT parks, and residential sectors, Rudra Tours offers door-to-door expressway cab services. Avoid railway waitlists and transit friction with private chauffeur cabs operating 24x7.",
    highlights: ["460 km via Yamuna Expressway", "Doorstep Pickup & Drop", "Expressway Fast & Safe", "Corporate & Family Travel"],
    reasons: [
      "Direct expressway route with verified highway drivers.",
      "Drop-offs across all Noida Sectors, Greater Noida, and Expressway towers.",
      "Transparent toll and fuel billing with itemized receipts.",
    ],
    relatedPackages: ["mumbai-tour", "jaipur-tour", "rajasthan-heritage"],
    relatedPages: [
      "corporate-travel",
      "airport-transfer",
      "car-rental-kanpur",
      "luxury-car-rental",
    ],
    faqs: [
      {
        question: "What is the travel time from Kanpur to Noida by cab?",
        answer:
          "The 460 km drive takes approximately 6.5 to 7 hours via the Agra-Lucknow and Yamuna Expressways.",
      },
      {
        question: "Can I book a one-way cab from Kanpur to Noida?",
        answer: "Yes, we provide affordable one-way drops as well as round-trip bookings.",
      },
    ],
  },
  {
    kind: "location",
    slug: "ghaziabad",
    title: "Ghaziabad Travel Guide | Cabs, Airport Transfers & Corporate Travel",
    description:
      "Use this Ghaziabad travel guide for airport transfers, business cabs, family travel and outstation bookings.",
    eyebrow: "Ghaziabad",
    heroTitle: "Kanpur to Ghaziabad cab service & road travel guide.",
    heroSubtitle:
      "Convenient door-to-door cab booking connecting Kanpur with Ghaziabad, Indirapuram, and Vaishali via expressway corridors.",
    introHeading: "Direct intercity cabs connecting Kanpur and Ghaziabad",
    introBody:
      "For business professionals, families, and students travelling between Kanpur and Ghaziabad, our chauffeur-driven outstation cabs provide a comfortable, stress-free alternative to trains. Enjoy doorstep pickup from anywhere in Kanpur to your exact Ghaziabad address.",
    highlights: ["Doorstep Intercity Transit", "Expressway Route", "Luggage-Friendly Vehicles", "24x7 Availability"],
    reasons: [
      "Comfortable long-distance travel without train congestion or luggage worries.",
      "Reliable vehicles regularly inspected for highway safety.",
      "Clear, fixed fares with no hidden surcharges.",
    ],
    relatedPackages: ["kashmir-paradise", "goa-tour", "kerala-tour"],
    relatedPages: [
      "corporate-travel",
      "airport-transfer",
      "taxi-service-kanpur",
      "outstation-taxi",
    ],
    faqs: [
      {
        question: "Do you provide one-way cabs from Kanpur to Ghaziabad?",
        answer: "Yes, one-way drops are available with transparent fixed pricing.",
      },
      {
        question: "Can we schedule late-night departures from Kanpur?",
        answer: "Yes, our drivers are available 24x7 for scheduled night or early-morning departures.",
      },
    ],
  },
  {
    kind: "location",
    slug: "meerut",
    title: "Meerut Travel Guide | Taxi, Cab Booking & Holiday Trips",
    description:
      "Plan Meerut travel with cab booking, airport transfers, outstation taxis and holiday packages from Kanpur.",
    eyebrow: "Meerut",
    heroTitle: "Kanpur to Meerut outstation cab service & travel guide.",
    heroSubtitle:
      "Reliable highway cab booking connecting Kanpur and Western Uttar Pradesh with comfortable sedans, SUVs, and tempo travellers.",
    introHeading: "Comfortable highway connection across Uttar Pradesh",
    introBody:
      "Connecting the industrial hub of Kanpur with Meerut and Western Uttar Pradesh, Rudra Tours provides dependable outstation cab hire. Travel comfortably across the state with experienced highway chauffeurs and transparent rates.",
    highlights: ["Intercity Highway Cabs", "Family & Business Travel", "Sedan, SUV & Tempo Options", "Verified Chauffeurs"],
    reasons: [
      "Safe, stress-free travel for family visits, weddings, and commercial trips.",
      "Clean, sanitized air-conditioned vehicles.",
      "Experienced drivers familiar with UP state highways and expressways.",
    ],
    relatedPackages: ["kashmir-paradise", "rajasthan-heritage", "kullu-manali"],
    relatedPages: ["cab-booking-kanpur", "holiday-packages", "tour-packages", "outstation-taxi"],
    faqs: [
      {
        question: "What cab options are available for Kanpur to Meerut travel?",
        answer:
          "We offer sedans (Dzire), SUVs (Ertiga/Innova Crysta), and 12/17-seater Tempo Travellers for group travel.",
      },
      {
        question: "Are toll charges included in the quote?",
        answer: "We provide completely transparent quotes indicating toll and tax inclusion details upfront.",
      },
    ],
  },
];

export const LANDING_PAGES: LandingPage[] = [...servicePages, ...locationPages];

export function getLandingPageBySlug(slug: string): LandingPage | undefined {
  return LANDING_PAGES.find((page) => page.slug === slug);
}

export function getLandingPageLinks(kind?: LandingKind): LandingPage[] {
  if (!kind) return LANDING_PAGES;
  return LANDING_PAGES.filter((page) => page.kind === kind);
}
