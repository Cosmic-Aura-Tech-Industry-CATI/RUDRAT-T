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
    slug: "car-rental-kanpur",
    title: "Car Rental Kanpur | Taxi, Cab Booking & Chauffeur Cars",
    description:
      "Book car rental in Kanpur for airport transfers, local sightseeing, weddings, business travel and outstation trips with Rudra Tours and Travels.",
    eyebrow: "Car Rental in Kanpur",
    heroTitle: "Car rental in Kanpur for city rides, airport drops and long-distance travel.",
    heroSubtitle:
      "Choose sedan, SUV, Innova Crysta, Fortuner, tempo traveller or bus rental with transparent pricing and local support from our Kanpur team.",
    introHeading: "Why travellers book car rental in Kanpur",
    introBody:
      "This page is built for people searching for car rental Kanpur, taxi service Kanpur and cab booking Kanpur. It gives a clear starting point for local use, outstation routes, corporate movement and family trips without forcing the visitor to jump between unrelated pages.",
    highlights: [
      "Local city use",
      "Airport pickup and drop",
      "Outstation cab booking",
      "Wedding and family travel",
    ],
    reasons: [
      "Transparent pricing with a direct enquiry path.",
      "Useful for both one-way and round-trip travel.",
      "Connects the service page to the exact vehicle and tour pages people need next.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "prayagraj-sangam"],
    relatedPages: [
      "taxi-service-kanpur",
      "airport-transfer",
      "outstation-taxi",
      "travel-agency-kanpur",
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
    title: "Taxi Service Kanpur | Reliable Cabs for Local and Outstation Travel",
    description:
      "Hire a taxi service in Kanpur for daily commuting, business meetings, station transfers, outstation routes and family trips.",
    eyebrow: "Taxi Service Kanpur",
    heroTitle: "Taxi service in Kanpur for reliable daily travel and outstation trips.",
    heroSubtitle:
      "Use this page when you need a local taxi, a one-way cab or a planned round trip with a driver who understands city traffic and long routes.",
    introHeading: "A practical taxi booking page for Kanpur travellers",
    introBody:
      "People searching taxi service Kanpur usually want a fast booking flow, a fair price and a vehicle that arrives on time. This landing page keeps the intent focused on cab booking, short city rides and longer intercity routes.",
    highlights: ["City cabs", "One-way taxi", "Round trip bookings", "Family-friendly travel"],
    reasons: [
      "Matches local intent for taxi service and cab booking.",
      "Supports both short errands and full-day bookings.",
      "Links directly into enquiry and vehicle inventory pages.",
    ],
    relatedPackages: ["ayodhya-darshan", "mathura-vrindavan", "kashi-vishwanath"],
    relatedPages: ["car-rental-kanpur", "outstation-taxi", "airport-transfer", "corporate-travel"],
    faqs: [
      {
        question: "Is this page for cab booking in Kanpur?",
        answer:
          "Yes. It is the primary landing page for taxi service Kanpur and cab booking Kanpur searches.",
      },
      {
        question: "Do you also handle long-distance taxi service?",
        answer:
          "Yes. We cover local, outstation and intercity travel from Kanpur to major destinations.",
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
    heroTitle: "Cab booking in Kanpur that is quick, clear and built for real travel needs.",
    heroSubtitle:
      "The page targets cab booking in Kanpur, local taxi need states, airport transfers and outstation cabs so visitors can book the right vehicle faster.",
    introHeading: "Why a dedicated cab booking page matters",
    introBody:
      "Searchers often type cab booking Kanpur when they want immediate travel help rather than a broad tourism page. This landing page speaks directly to that intent with a simple enquiry flow, useful service details and links to the right vehicle categories.",
    highlights: [
      "Quick booking",
      "Airport and station transfers",
      "Business cabs",
      "Outstation taxi",
    ],
    reasons: [
      "Targets the exact cab booking keyword cluster.",
      "Explains when to use a cab versus a full package.",
      "Improves internal links to vehicle and local travel pages.",
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
    heroTitle: "Tempo traveller in Kanpur for family trips, pilgrimages and group travel.",
    heroSubtitle:
      "This landing page focuses on the group-search intent behind tempo traveller Kanpur and helps visitors move from search to inquiry without friction.",
    introHeading: "Built for group travel from Kanpur",
    introBody:
      "Tempo traveller searches usually mean one thing: a group needs to travel together without splitting into multiple cars. This page explains the seat options, the trip types that fit tempo travellers best and the destinations where group travel saves time and cost.",
    highlights: [
      "12, 17 and 26 seater options",
      "Pilgrimage trips",
      "Family travel",
      "Corporate outings",
    ],
    reasons: [
      "Targets high-intent group travel search terms.",
      "Explains when tempo travellers are better than SUVs or buses.",
      "Creates a clear path to enquiry for group coordinators.",
    ],
    relatedPackages: ["char-dham-yatra", "haridwar-rishikesh", "vaishno-devi"],
    relatedPages: ["bus-rental", "corporate-travel", "outstation-taxi", "holiday-packages"],
    faqs: [
      {
        question: "How many passengers can a tempo traveller carry?",
        answer: "We support 12, 17 and 26 seater options depending on the route and trip size.",
      },
      {
        question: "Is tempo traveller booking good for pilgrimage travel?",
        answer:
          "Yes. Group pilgrimages are one of the most common and practical tempo traveller use cases.",
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
      "Use this page for premium sedan and SUV searches where comfort, appearance and chauffeur service matter more than basic transport.",
    introHeading: "Premium travel, presented clearly",
    introBody:
      "Luxury car rental searches often need reassurance about vehicle quality, driver professionalism and event readiness. This landing page clarifies those expectations while pushing the user toward the exact luxury or wedding car booking path.",
    highlights: ["VIP events", "Business meetings", "Wedding arrivals", "Airport luxury transfer"],
    reasons: [
      "Captures luxury car rental and premium chauffeur intent.",
      "Improves trust for high-value event bookings.",
      "Connects luxury searches with wedding and corporate travel pages.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "mumbai-tour"],
    relatedPages: ["wedding-car-rental", "corporate-travel", "airport-transfer", "fortuner-rental"],
    faqs: [
      {
        question: "Do you provide luxury cars for weddings?",
        answer:
          "Yes. Premium sedans and SUVs can be booked for wedding entry, baraat movement and VIP guests.",
      },
      {
        question: "Can luxury car rental include a chauffeur?",
        answer:
          "Yes. Chauffeur-driven luxury car rentals are the default option for event and corporate travel.",
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
    heroTitle: "Innova Crysta rental for family comfort, luggage space and long routes.",
    heroSubtitle:
      "This page is built for travellers looking for innova rental, Crysta rental or a premium MPV that works well for families and groups.",
    introHeading: "Why families search for Innova Crysta rental",
    introBody:
      "The Innova Crysta is a high-intent vehicle search because families want extra comfort, luggage space and a trusted long-distance ride. This landing page addresses that exact need and connects the visitor to wedding, airport and pilgrimage travel paths.",
    highlights: ["Family comfort", "Luggage-friendly", "Long-distance travel", "Driver support"],
    reasons: [
      "Captures the exact Innova Crysta rental keyword.",
      "Improves conversion for family and business travel.",
      "Links vehicle intent with tours and airport transfer pages.",
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
          "Yes. Families often choose Innova Crysta for comfort, luggage and long-distance stability.",
      },
      {
        question: "Can I use Innova Crysta rental for airport pickup?",
        answer:
          "Yes. Airport pickup, drop and hotel transfer bookings are a strong fit for this vehicle.",
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
    heroTitle: "Fortuner rental for premium arrival, long routes and VIP movement.",
    heroSubtitle:
      "This page targets people searching for fortuner rental, luxury SUV hire and a premium vehicle for events or outstation travel.",
    introHeading: "A premium SUV page for high-value bookings",
    introBody:
      "Fortuner searches are usually tied to weddings, executive movement or high-comfort outstation routes. This page uses that intent to explain the use cases, reassure the user about chauffeur support and move them toward enquiry.",
    highlights: ["Premium SUV", "Wedding use", "Executive travel", "Outstation comfort"],
    reasons: [
      "Matches fortuner rental and premium SUV intent.",
      "Works for both event and travel bookings.",
      "Improves trust for users comparing luxury SUVs.",
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
          "Yes. Fortuner is a common choice for groom travel, VIP guests and premium family movement.",
      },
      {
        question: "Can Fortuner rental be used for hill travel?",
        answer:
          "Yes. The Fortuner is often booked for long highway trips and hilly routes where comfort matters.",
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
    heroTitle: "Bus rental for large groups, weddings and organised travel.",
    heroSubtitle:
      "Use this landing page when a tempo traveller is too small and a full bus or luxury coach is the better fit for the trip.",
    introHeading: "The right page for large-group bookings",
    introBody:
      "Bus rental searches are usually about coordination, capacity and comfort. This page clarifies mini bus, deluxe bus and luxury coach options so the group organiser can enquire without bouncing through unrelated fleet pages.",
    highlights: ["Mini bus", "Deluxe coach", "Wedding groups", "Corporate outings"],
    reasons: [
      "Captures bus rental and coach hire intent.",
      "Useful for large weddings and official travel.",
      "Provides a clear alternative to tempo traveller pages.",
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
        question: "Do you provide buses for weddings and events?",
        answer:
          "Yes. Bus rental is available for wedding guest movement, school groups, tours and events.",
      },
      {
        question: "What is better: tempo traveller or bus rental?",
        answer:
          "Tempo travellers are better for smaller groups; bus rental is better when capacity is the priority.",
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
    heroTitle: "Wedding car rental for bridal arrival, baraat movement and VIP guests.",
    heroSubtitle:
      "This page is optimised for wedding car rental, bridal car, decorated wedding car and luxury wedding transport searches.",
    introHeading: "A focused wedding transport landing page",
    introBody:
      "Wedding searches need more than a fleet list. Couples and planners want a clear idea of decorated cars, chauffeur timing, premium vehicles and how to book quickly. This page keeps the decision path simple and wedding-focused.",
    highlights: ["Bridal car", "Decorated cars", "Groom arrival", "Guest transfers"],
    reasons: [
      "Targets wedding car rental and bridal car intent.",
      "Supports premium event transport conversion.",
      "Connects to luxury and corporate transport pages.",
    ],
    relatedPackages: ["jaipur-tour", "rajasthan-heritage", "goa-tour"],
    relatedPages: ["luxury-car-rental", "fortuner-rental", "bus-rental", "corporate-travel"],
    faqs: [
      {
        question: "Can I book a bridal car for the wedding day?",
        answer:
          "Yes. Bridal cars, decorated sedans and premium SUVs can be booked for the wedding schedule.",
      },
      {
        question: "Do you provide decorated vehicles for baraat and guest transfers?",
        answer:
          "Yes. We can arrange decorated cars as well as larger vehicles for wedding guest movement.",
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
    heroTitle: "Airport transfer with on-time pickup, drop and luggage-friendly vehicles.",
    heroSubtitle:
      "Use this page for airport taxi, station pickup and transfer searches that need punctual local support from Kanpur.",
    introHeading: "A better page for pickup and drop searches",
    introBody:
      "Airport transfer searches are often urgent, local and time-sensitive. This page speaks directly to that need with a focus on punctual arrivals, comfortable vehicles and easy booking for flights, trains and business travel.",
    highlights: ["Airport pickup", "Station drop", "Executive travel", "Late-night transfers"],
    reasons: [
      "Covers airport taxi and transfer intent.",
      "Useful for business travellers and family pickups.",
      "Adds a strong local search landing page to the site.",
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
        question: "Can you arrange airport taxi for Lucknow airport?",
        answer:
          "Yes. Airport pickup and drop for Lucknow airport is a common use case for this service page.",
      },
      {
        question: "Is this useful for railway pickup too?",
        answer:
          "Yes. Station pickup and city transfers are both part of the airport transfer booking flow.",
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
    heroTitle: "Outstation taxi for Kanpur departures across North India and beyond.",
    heroSubtitle:
      "This page focuses on outstation cab searches where people want a dependable driver, clear pricing and a route-first booking experience.",
    introHeading: "The best-fit page for long routes",
    introBody:
      "Outstation taxi intent is different from local city cab intent. Visitors need route clarity, vehicle choice and easy enquiry flow for one-way and round-trip travel. This page handles that use case directly.",
    highlights: ["One-way cab", "Round trip", "Family travel", "Long-distance routes"],
    reasons: [
      "Captures one-way taxi and outstation cab keywords.",
      "Improves conversion for route-specific users.",
      "Links to destination and package pages for better discovery.",
    ],
    relatedPackages: ["kashmir-paradise", "kullu-manali", "char-dham-yatra"],
    relatedPages: ["car-rental-kanpur", "taxi-service-kanpur", "airport-transfer", "tour-packages"],
    faqs: [
      {
        question: "Can I book one-way outstation taxi from Kanpur?",
        answer: "Yes. One-way and round-trip outstation bookings are supported from this page.",
      },
      {
        question: "Is outstation taxi useful for family trips?",
        answer: "Yes. It is one of the best pages for families planning intercity road travel.",
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
    heroTitle: "Travel agency in Kanpur for complete trip planning and booking support.",
    heroSubtitle:
      "This page is for users comparing a travel agency, a tour operator and a car rental company all in one place.",
    introHeading: "One page for planning the full trip",
    introBody:
      "Many visitors start with travel agency Kanpur because they need help with vehicles, hotels, tour routing and on-ground coordination. This landing page explains how Rudra Tours and Travels handles that complete planning journey.",
    highlights: ["Tour planning", "Car rental support", "Holiday packages", "Pilgrimage trips"],
    reasons: [
      "Targets travel agency and tour operator searches.",
      "Creates a bridge between vehicles and packages.",
      "Helps visitors understand the full-service offering quickly.",
    ],
    relatedPackages: ["ayodhya-darshan", "mathura-vrindavan", "kashmir-paradise"],
    relatedPages: ["tour-packages", "holiday-packages", "car-rental-kanpur", "corporate-travel"],
    faqs: [
      {
        question: "Are you a travel agency or a taxi company?",
        answer:
          "We are both: a travel agency for tours and a vehicle provider for local and outstation travel.",
      },
      {
        question: "Can you plan holidays for families and groups?",
        answer:
          "Yes. We plan family holidays, group tours, pilgrimage routes and event travel from Kanpur.",
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
    heroTitle: "Corporate travel for executive movement, meetings and airport transfers.",
    heroSubtitle:
      "Use this page when your business needs on-time cabs, premium cars or team transport with clear billing and professional support.",
    introHeading: "Business travel support that is easy to book",
    introBody:
      "Corporate travel pages work best when they feel practical. This page speaks to businesses that need airport transfers, meeting transport, client pick-ups and repeat cab service from Kanpur or nearby cities.",
    highlights: ["Executive cars", "Client pickup", "Team movement", "Monthly support"],
    reasons: [
      "Captures high-value corporate travel intent.",
      "Useful for recurring bookings and business billing.",
      "Creates a business-oriented bridge to premium vehicles.",
    ],
    relatedPackages: ["mumbai-tour", "jaipur-tour", "prayagraj-sangam"],
    relatedPages: ["airport-transfer", "luxury-car-rental", "car-rental-kanpur", "tour-packages"],
    faqs: [
      {
        question: "Do you handle recurring corporate cab bookings?",
        answer:
          "Yes. Corporate travel can be arranged for one-off or repeated movement requirements.",
      },
      {
        question: "Is this page useful for airport and client transfers?",
        answer:
          "Yes. It is the best fit for executive transfer, client pickup and airport travel searches.",
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
    heroTitle: "Tour packages for India holidays, pilgrimages and family getaways.",
    heroSubtitle:
      "This landing page is the hub for holiday packages, India tour packages, group tours and destination-specific itinerary planning.",
    introHeading: "A central page for searchers comparing trips",
    introBody:
      "Visitors searching tour packages are usually deciding between multiple destinations, budgets and trip lengths. This page gives them a clear view of what Rudra Tours and Travels handles: pilgrimage routes, hill stations, beaches and custom holiday planning.",
    highlights: ["Family holidays", "Pilgrimage tours", "Hill stations", "Beach travel"],
    reasons: [
      "Targets the broad India tour packages keyword cluster.",
      "Improves internal linking to every destination guide.",
      "Works as the main hub for holiday and package intent.",
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
        question: "Do you arrange family and group tour packages?",
        answer:
          "Yes. Family tours, group tours, pilgrimage tours and custom packages are all supported.",
      },
      {
        question: "Can I ask for a custom itinerary instead of a fixed package?",
        answer:
          "Yes. Custom itineraries are available through the inquiry flow and the custom package page.",
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
    heroTitle: "Uttar Pradesh tour packages for spiritual and family travel.",
    heroSubtitle:
      "This page is built for state-level search intent around Uttar Pradesh tour packages, pilgrimage routes and family travel planning.",
    introHeading: "State-level trip planning from Kanpur",
    introBody:
      "Uttar Pradesh searchers often want a bundle of religious cities, family stops and short holiday routes. This page gathers those ideas in one place and points them toward the exact destination guides and tour packages they need.",
    highlights: ["Ayodhya", "Varanasi", "Prayagraj", "Mathura and Agra"],
    reasons: [
      "Captures the state-level tour package keyword cluster.",
      "Connects multiple destination guides into one hub.",
      "Supports featured snippets by listing the major cities clearly.",
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
        question: "Which cities are included in Uttar Pradesh tour packages?",
        answer:
          "Ayodhya, Varanasi, Prayagraj, Mathura, Agra and nearby pilgrimage stops are the most common options.",
      },
      {
        question: "Are these packages suitable for family travel?",
        answer:
          "Yes. They are ideal for family pilgrimages, weekend trips and multi-city road journeys.",
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
    heroTitle: "Holiday packages for seasonal travel, family vacations and festive trips.",
    heroSubtitle:
      "Use this page when a traveller wants a holiday package but has not yet chosen the final destination.",
    introHeading: "The right page for broad holiday intent",
    introBody:
      "Holiday package searches are often exploratory. People know they want a trip, but not the exact destination or dates. This page supports that earlier research stage while still pointing visitors toward the best-fit tour and city pages.",
    highlights: ["Seasonal trips", "Family getaways", "Festive travel", "Custom itineraries"],
    reasons: [
      "Captures broad holiday package searches.",
      "Useful for featured snippets and comparison searches.",
      "Connects undecided visitors to specific tour packages.",
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
        question: "Do you create custom holiday packages?",
        answer:
          "Yes. We create custom holiday packages for families, couples, groups and business travel.",
      },
      {
        question: "Can holiday packages be seasonal or festival-based?",
        answer:
          "Yes. We can align holiday packages with festival dates, winter travel or summer hill trips.",
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
];

const locationPages: LandingPage[] = [
  {
    kind: "location",
    slug: "kanpur",
    title: "Kanpur Travel Guide | Car Rental, Taxi Service & Tour Packages",
    description:
      "Plan travel from Kanpur with local taxi service, car rental, airport transfer, wedding cars and tour packages across India.",
    eyebrow: "Kanpur",
    heroTitle: "Kanpur travel guide for city rides, airport transfers and tour departures.",
    heroSubtitle:
      "This page helps local users and visitors compare the best services for Kanpur travel, family trips and outstation bookings.",
    introHeading: "Why Kanpur is the starting point for many trips",
    introBody:
      "Kanpur is the home base of Rudra Tours and Travels, so the page combines local travel intent with the bigger tourism routes people search for after leaving the city. It is useful for anyone comparing taxi service Kanpur, car rental Kanpur and tour packages from Kanpur.",
    highlights: ["Local cabs", "Airport transfer", "City business travel", "Trip departures"],
    reasons: [
      "Strong local search relevance.",
      "Useful hub page for internal links.",
      "Connects city travel with holiday planning.",
    ],
    relatedPackages: ["ayodhya-darshan", "kashi-vishwanath", "prayagraj-sangam"],
    relatedPages: ["car-rental-kanpur", "taxi-service-kanpur", "airport-transfer", "tour-packages"],
    faqs: [
      {
        question: "Is Kanpur the main service area for Rudra Tours and Travels?",
        answer:
          "Yes. Kanpur is the home market and the main starting point for vehicle and tour bookings.",
      },
      {
        question: "Can I book outstation travel from Kanpur?",
        answer:
          "Yes. Outstation taxi, tour packages and airport transfers are all available from Kanpur.",
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
    heroTitle: "Lucknow travel guide for city transfer, business travel and airport rides.",
    heroSubtitle:
      "The page helps travellers search Lucknow with nearby Kanpur departures, family trips and time-sensitive transfers.",
    introHeading: "A practical page for Lucknow travel searches",
    introBody:
      "Lucknow is a major search city for both travel and business. This page makes it easy to find the right car, cab or package when users are planning a route through or to Lucknow.",
    highlights: ["City transfers", "Business travel", "Airport pickups", "Family movement"],
    reasons: [
      "Supports city-specific SEO.",
      "Useful for nearby intercity bookings.",
      "Adds a strong travel intent page for Uttar Pradesh.",
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
        question: "Can I travel from Kanpur to Lucknow by cab?",
        answer: "Yes. Lucknow is a common intercity cab and airport transfer route from Kanpur.",
      },
      {
        question: "Is Lucknow useful for business and family bookings?",
        answer: "Yes. It is a key route for both executive travel and family movement.",
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
    heroTitle: "Agra travel guide for Taj Mahal trips, family travel and weekend tourism.",
    heroSubtitle:
      "Visitors searching Agra usually want a one-day or weekend trip, so the page focuses on route clarity and easy booking.",
    introHeading: "A strong guide page for one-day and weekend travel",
    introBody:
      "Agra searches often come from people planning a short heritage trip. This page helps them decide the right cab, package or holiday plan and points them toward related North India travel options.",
    highlights: ["Taj Mahal trip", "Weekend travel", "Family sightseeing", "Outstation cab"],
    reasons: [
      "Targets an iconic tourism city.",
      "Useful for heritage and short-trip intent.",
      "Creates a clear internal path to packages.",
    ],
    relatedPackages: ["rajasthan-heritage", "jaipur-tour", "kashmir-paradise"],
    relatedPages: ["outstation-taxi", "tour-packages", "holiday-packages", "car-rental-kanpur"],
    faqs: [
      {
        question: "Can Agra be booked as a one-day trip?",
        answer:
          "Yes. Agra is often booked as a same-day or weekend road trip from Kanpur and nearby cities.",
      },
      {
        question: "Do you arrange holiday packages that include Agra?",
        answer: "Yes. Agra can be part of a North India holiday package or a short heritage route.",
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
    heroTitle: "Prayagraj travel guide for Sangam visits and pilgrimage movement.",
    heroSubtitle:
      "This page helps travellers book Prayagraj routes for religious visits, family trips and quick city transfers.",
    introHeading: "Built for pilgrimage and family travel",
    introBody:
      "Prayagraj searches are usually pilgrimage-driven and often connected to family road trips. This page makes the Sangam and city stay route easy to understand while linking to the best matching packages.",
    highlights: ["Sangam visit", "Pilgrimage trip", "Family travel", "City transfer"],
    reasons: [
      "Strong pilgrimage search relevance.",
      "Supports both city and route intent.",
      "Connects to major Uttar Pradesh travel pages.",
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
        question: "Is Prayagraj good for pilgrimage road trips?",
        answer: "Yes. Prayagraj is one of the strongest pilgrimage destinations in the state.",
      },
      {
        question: "Can Prayagraj be combined with Varanasi or Ayodhya?",
        answer: "Yes. These cities are often combined into one Uttar Pradesh travel route.",
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
    heroTitle: "Varanasi travel guide for Kashi Darshan and Ganga Aarti trips.",
    heroSubtitle:
      "This page helps travellers book Varanasi routes for spiritual travel, family sightseeing and quick road trips.",
    introHeading: "A spiritual travel guide with practical booking intent",
    introBody:
      "Varanasi is one of the strongest pilgrimage and heritage searches in India. This landing page supports that demand with a clear route into taxi service, hotel stays, package trips and airport transfers.",
    highlights: ["Kashi Vishwanath", "Ganga Aarti", "Spiritual travel", "Heritage visit"],
    reasons: [
      "Supports one of the biggest pilgrimage keywords.",
      "Useful for featured snippet style answers.",
      "Connects to pilgrimage package pages.",
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
        question: "Is Varanasi a strong search destination for pilgrimage travel?",
        answer:
          "Yes. Varanasi is one of the strongest spiritual travel destinations in North India.",
      },
      {
        question: "Can Varanasi be part of a multi-city Uttar Pradesh itinerary?",
        answer: "Yes. It is often combined with Prayagraj and Ayodhya in a single trip.",
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
    heroTitle: "Ayodhya travel guide for Ram Mandir visits and pilgrimage movement.",
    heroSubtitle:
      "This page supports high-intent Ayodhya searches with a clear path to cabs, packages and family pilgrimage trips.",
    introHeading: "A focused page for pilgrimage search intent",
    introBody:
      "Ayodhya is a top pilgrimage destination, so visitors need a page that answers where to go, how to travel and which package fits best. This guide does exactly that and keeps the booking flow simple.",
    highlights: ["Ram Mandir", "Pilgrimage travel", "Family trips", "One-day route"],
    reasons: [
      "Strong pilgrim and family travel intent.",
      "Great support for local and outstation bookings.",
      "Useful for search snippets and AI answers.",
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
        question: "Can I book Ayodhya as a one-day trip?",
        answer: "Yes. One-day and overnight Ayodhya road trips are both common and supported.",
      },
      {
        question: "Is Ayodhya suitable for family pilgrimage travel?",
        answer:
          "Yes. It is one of the main family pilgrimage destinations for Uttar Pradesh travel.",
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
    heroTitle: "Mathura travel guide for Krishna temples and family pilgrimage trips.",
    heroSubtitle:
      "The page is designed for Mathura, Vrindavan and Braj travel searches where families want a simple route and easy enquiry.",
    introHeading: "A guide for Braj and pilgrimage travel",
    introBody:
      "Mathura search intent often includes Vrindavan and other Braj pilgrimage stops. This page gives that broader context while linking visitors to the right route and package pages.",
    highlights: ["Vrindavan", "Krishna temples", "Family travel", "Pilgrimage route"],
    reasons: [
      "Targets a core pilgrimage destination.",
      "Useful for weekend and religious travel.",
      "Improves long-tail route discovery.",
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
        question: "Can Mathura and Vrindavan be booked together?",
        answer: "Yes. Mathura and Vrindavan are usually planned as one combined pilgrimage route.",
      },
      {
        question: "Is Mathura a good family travel destination?",
        answer: "Yes. It is a common family pilgrimage destination and works well in short trips.",
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
    heroTitle: "Noida travel guide for business movement, airport transfers and city travel.",
    heroSubtitle:
      "This page is useful for executive and corporate searchers comparing Noida with Delhi NCR travel options.",
    introHeading: "A business-friendly page for NCR travel intent",
    introBody:
      "Noida searchers often want business taxis, airport transfers or family movement through Delhi NCR. This page serves that need with a clean path to car rental and transfer bookings.",
    highlights: ["Business travel", "Airport transfer", "Delhi NCR movement", "Corporate cab"],
    reasons: [
      "Useful for NCR business search intent.",
      "Supports airport and corporate booking flows.",
      "Adds authority beyond Kanpur-only search terms.",
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
        question: "Is Noida useful for corporate travel searches?",
        answer:
          "Yes. Noida is a strong business destination and works well for executive transfer pages.",
      },
      {
        question: "Can I book airport transfer to or from Noida?",
        answer: "Yes. Airport transfer and business cab bookings can be arranged for NCR routes.",
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
    heroTitle: "Ghaziabad travel guide for city transfers and executive movement.",
    heroSubtitle:
      "This page is built for NCR travel intent and helps travellers move between Ghaziabad, Noida, Delhi and Kanpur.",
    introHeading: "A practical NCR travel landing page",
    introBody:
      "Ghaziabad is useful search territory for airport transfer, corporate travel and intercity cab booking. This guide turns that intent into a clear booking path and links to the relevant vehicle pages.",
    highlights: ["NCR transfers", "Airport cabs", "Business travel", "Outstation taxis"],
    reasons: [
      "Strengthens Delhi NCR travel relevance.",
      "Useful for both business and family bookings.",
      "Creates more city-specific search depth.",
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
        question: "Is Ghaziabad a good page for airport cab searches?",
        answer: "Yes. Ghaziabad often overlaps with airport transfer and NCR mobility searches.",
      },
      {
        question: "Can Ghaziabad bookings be used for corporate travel?",
        answer: "Yes. Corporate travel and executive cabs are strong matches for this route.",
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
    heroTitle: "Meerut travel guide for cab booking, holidays and family movement.",
    heroSubtitle:
      "The page focuses on Meerut travellers who need intercity transport, family trips and holiday package planning.",
    introHeading: "A city guide for family and intercity travel",
    introBody:
      "Meerut search intent often includes both local cab booking and holiday planning. This page gives the user enough detail to book transport or move into a destination package without extra searching.",
    highlights: ["Cab booking", "Family travel", "Holiday planning", "Airport drop"],
    reasons: [
      "Useful for North UP search coverage.",
      "Supports family and holiday intent.",
      "Moves users toward the best-fit travel page.",
    ],
    relatedPackages: ["kashmir-paradise", "rajasthan-heritage", "kullu-manali"],
    relatedPages: ["cab-booking-kanpur", "holiday-packages", "tour-packages", "outstation-taxi"],
    faqs: [
      {
        question: "Is Meerut useful for holiday searches?",
        answer:
          "Yes. Travellers often search Meerut when comparing family holiday and cab options.",
      },
      {
        question: "Can Meerut routes be booked as outstation taxis?",
        answer: "Yes. Meerut can be connected to outstation taxi and holiday travel bookings.",
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
