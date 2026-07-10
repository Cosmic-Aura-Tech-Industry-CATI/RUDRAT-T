// Unique long-form travel guide content for every tour package.
// Kept separate from packages.ts to avoid bloating the core data file.

export interface PkgContent {
  overview: string;
  history: string;
  significance: string;
  attractions: { name: string; description: string }[];
  hiddenGems: { name: string; description: string }[];
  festivals: string;
  food: string;
  shopping: string;
  itinerary: { day: number; title: string; description: string }[];
  weather: string;
  howToReach: string;
  accommodation: string;
  tips: string[];
  faqs: { question: string; answer: string }[];
}

export const packageContent: Record<string, PkgContent> = {
  "ayodhya-darshan": {
    overview:
      "Ayodhya, the sacred birthplace of Lord Rama, stands as one of the seven holiest cities in Hinduism. Nestled along the banks of the Saryu River in Uttar Pradesh, this ancient city has witnessed a civilisational history spanning thousands of years. The newly inaugurated Ram Mandir has transformed Ayodhya into India's most-visited pilgrimage destination, drawing millions of devotees each year. A 2-day Ayodhya Darshan from Kanpur lets you experience divine temple architecture, serene river ghats, and the deeply spiritual atmosphere that permeates every corner of this timeless city.",
    history:
      "Ayodhya is believed to have been founded by Manu, the first man in Hindu mythology, and served as the capital of the Kosala kingdom. The city finds extensive mention in the Ramayana, Atharvaveda, and several Puranas. Archaeological excavations by the ASI have uncovered structures dating back to the 7th century BCE. Over the millennia, Ayodhya has been a centre of learning, devotion, and cultural exchange. The construction of the grand Ram Mandir in 2024, designed in the Nagara style of temple architecture, marks a historic chapter for the city and has spurred massive infrastructure development.",
    significance:
      "As the birthplace of Lord Rama — the seventh avatar of Vishnu — Ayodhya holds unparalleled spiritual significance for Hindus worldwide. It is counted among the Sapta Puri (seven sacred cities) that are believed to grant moksha. The city is also revered by Jains, as five Tirthankaras including Rishabhadeva were born here. Buddhist texts record that Gautama Buddha spent time in Ayodhya, then known as Saketa. The confluence of Hindu, Jain, and Buddhist heritage makes Ayodhya a uniquely multi-faith pilgrimage destination.",
    attractions: [
      {
        name: "Ram Mandir",
        description:
          "The magnificent three-storey temple built in the Nagara architectural style, housing the idol of Ram Lalla. The intricately carved sandstone structure features 392 pillars and 44 doors, with the main sanctum radiating an aura of divine tranquility.",
      },
      {
        name: "Hanuman Garhi",
        description:
          "A 10th-century hilltop fortress-temple dedicated to Lord Hanuman. Climb 76 steps to reach the shrine and enjoy panoramic views of Ayodhya's skyline. The temple complex buzzes with devotional energy throughout the day.",
      },
      {
        name: "Saryu River Ghats",
        description:
          "The sacred ghats stretching along the Saryu River offer a peaceful setting for morning prayers, ritual bathing, and the mesmerising evening aarti. Ram Ki Paidi is the most popular ghat, beautifully illuminated after sunset.",
      },
      {
        name: "Kanak Bhawan",
        description:
          "An ornate palace-temple gifted by Kaikeyi to Sita, adorned with gold-plated idols of Lord Rama and Sita. The temple's vibrant interiors feature intricate murals and decorative artwork.",
      },
      {
        name: "Nageshwarnath Temple",
        description:
          "One of the oldest Shiva temples in Ayodhya, believed to have been established by Kush, son of Lord Rama. The temple's ancient stone architecture and peaceful ambiance make it a must-visit.",
      },
    ],
    hiddenGems: [
      {
        name: "Gulab Bari",
        description:
          "A Mughal-era garden complex featuring the tomb of Nawab Shuja-ud-Daula, surrounded by fragrant rose gardens. The blend of Islamic architecture in a Hindu city tells Ayodhya's layered history.",
      },
      {
        name: "Treta Ke Thakur",
        description:
          "An ancient temple marking the spot where Lord Rama is believed to have performed the Ashwamedha Yajna. The black-stone idols are among the oldest in Ayodhya.",
      },
      {
        name: "Bahu Begum Ka Maqbara",
        description:
          "Often called the Taj Mahal of the East, this 18th-century white marble mausoleum is an architectural marvel that few tourists know about.",
      },
    ],
    festivals:
      "Ram Navami (March–April) is the grandest celebration, with lakhs of devotees gathering for nine days of prayer, processions, and cultural programmes. Deepotsav during Diwali transforms the city with over 500,000 diyas lit along the Saryu ghats — a Guinness World Record event. Vivah Panchami in November re-enacts the divine wedding of Rama and Sita with elaborate pageantry.",
    food: "Ayodhya's cuisine centres around sattvic (pure vegetarian) preparations. Must-try dishes include the iconic Ayodhya ke Pedhe (milk fudge), kachori-sabzi from street-side stalls near Hanuman Garhi, revadi and gajak in winter months, and the refreshing lassi served at traditional dairies. The temple prasad, especially the laddoo from Ram Mandir, is a culinary highlight in itself.",
    shopping:
      "Shop for Ram Mandir souvenirs, sandalwood prayer beads, brass idols of Lord Rama and Hanuman, and handwoven Ayodhya silk along the markets near Hanuman Garhi. Local artisans also craft beautiful wooden toys and lacquerware.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Temple Circuit",
        description:
          "Depart from Kanpur early morning, arrive in Ayodhya by late morning. Visit the Ram Mandir for darshan, followed by Hanuman Garhi and Kanak Bhawan. Evening aarti at Saryu River ghats. Overnight stay in Ayodhya.",
      },
      {
        day: 2,
        title: "Heritage Walk & Return",
        description:
          "Morning visit to Nageshwarnath Temple and Treta Ke Thakur. Explore Gulab Bari and local markets. Enjoy traditional lunch, then depart for Kanpur with sacred memories and temple prasad.",
      },
    ],
    weather:
      "October to March offers the most comfortable weather (15–28°C) with clear skies ideal for temple visits. April to June gets hot (35–45°C) but is less crowded. The monsoon season (July–September) brings lush greenery along the Saryu banks but occasional heavy rainfall. Deepotsav in October–November is the best time for a truly magical experience.",
    howToReach:
      "From Kanpur, Ayodhya is approximately 230 km (5–6 hours by road via Lucknow–Sultanpur highway). The newly opened Ayodhya Dham Junction railway station connects to major cities. Maharishi Valmiki International Airport (Ayodhya) now offers direct flights from select Indian cities. Rudra Tours provides comfortable door-to-door transport from Kanpur.",
    accommodation:
      "Ayodhya offers a range of stays from government-run Yatri Niwas to premium hotels like Ramada and Sarayu Hotel. For a spiritual experience, dharamshalas near Ram Mandir provide basic but clean accommodation. Our team can recommend and book stays that match your budget.",
    tips: [
      "Carry valid ID proof — required for Ram Mandir darshan entry.",
      "Wear modest, temple-appropriate clothing for all temple visits.",
      "Book darshan slots online through the official Ram Mandir portal to skip long queues.",
      "Visit Hanuman Garhi early morning (before 8 AM) to avoid crowds.",
      "Carry comfortable walking shoes — the temple circuit involves significant walking.",
      "Avoid carrying leather items inside temple premises.",
      "Evenings at Ram Ki Paidi ghat are magical — don't miss the aarti.",
    ],
    faqs: [
      {
        question: "How far is Ayodhya from Kanpur?",
        answer:
          "Ayodhya is approximately 230 km from Kanpur, which takes about 5–6 hours by road. Our packages include comfortable door-to-door transport in AC vehicles.",
      },
      {
        question: "Is online booking required for Ram Mandir darshan?",
        answer:
          "Walk-in darshan is available, but online booking through the official portal significantly reduces waiting time, especially during peak seasons and festivals.",
      },
      {
        question: "What is the best time to visit Ayodhya?",
        answer:
          "October to March is ideal for comfortable weather. If you want to witness the grand Deepotsav, plan your visit during Diwali week in October–November.",
      },
      {
        question: "Are vegetarian meals easily available in Ayodhya?",
        answer:
          "Yes, Ayodhya is entirely vegetarian. The city has numerous eateries serving sattvic food, from street-side stalls to hotel restaurants.",
      },
      {
        question: "Can we do Ayodhya darshan in a single day?",
        answer:
          "While major temples can be covered in a day, we recommend our 2-day package to experience the evening aarti and morning rituals without rushing.",
      },
      {
        question: "Is Ayodhya safe for solo female travellers?",
        answer:
          "Ayodhya is very safe for solo travellers including women. The city has a strong police presence, CCTV coverage, and a welcoming pilgrim-friendly atmosphere.",
      },
    ],
  },

  "mathura-vrindavan": {
    overview:
      "Mathura and Vrindavan, the twin holy cities on the banks of the Yamuna in Uttar Pradesh, form the heartland of Krishna devotion. Mathura — the birthplace of Lord Krishna — pulsates with thousands of years of spiritual heritage, while Vrindavan, where young Krishna played his divine leelas, enchants visitors with over 5,000 temples and a deeply devotional atmosphere. This 2-day pilgrimage from Kanpur immerses you in mesmerising temple architecture, soul-stirring kirtans, and the magical energy of Braj Bhoomi.",
    history:
      "Mathura's recorded history stretches back to the 6th century BCE when it was a thriving centre of the Surasena Kingdom. The city served as a capital of the Kushan Empire under Kanishka, becoming a major hub of Gandhara art and Buddhist learning. However, it is the association with Lord Krishna — born in a prison cell here 5,000 years ago — that defines Mathura's identity. Vrindavan, located 15 km away, is where Krishna spent his childhood. The current temple landscape was largely shaped during the 16th century by Chaitanya Mahaprabhu and the Six Goswamis of Vrindavan.",
    significance:
      "Together, Mathura and Vrindavan form the sacred Braj region, considered the most important pilgrimage in Vaishnavism. Mathura is one of the Sapta Puri (seven cities granting moksha). Vrindavan is believed to be a direct reflection of Goloka, Krishna's eternal abode. The Braj Parikrama — a 340-km circumambulation of all sacred sites — is considered the holiest walk in Hinduism. For ISKCON devotees worldwide, Vrindavan is the spiritual capital of the Hare Krishna movement.",
    attractions: [
      {
        name: "Krishna Janmabhoomi",
        description:
          "The exact prison cell where Lord Krishna was born stands at the heart of Mathura. The temple complex combines ancient ruins with modern shrines, creating a powerful spiritual experience.",
      },
      {
        name: "Prem Mandir, Vrindavan",
        description:
          "A stunning white marble masterpiece by Jagadguru Kripalu Ji Maharaj, illuminated with colourful lights at night. The intricate carvings depicting Krishna's leelas took 12 years to complete.",
      },
      {
        name: "Banke Bihari Temple",
        description:
          "Vrindavan's most famous and crowded temple, where the curtain before the deity is opened and closed every few seconds — a unique darshan tradition that has continued for centuries.",
      },
      {
        name: "ISKCON Vrindavan",
        description:
          "The Krishna-Balaram Mandir built by Srila Prabhupada features beautiful deities, educational exhibits, and a serene atmosphere that draws international devotees year-round.",
      },
      {
        name: "Dwarkadhish Temple",
        description:
          "Mathura's principal temple built in 1814 by Seth Gokuldas Parikh. The stunning jhula (swing) ceremony during festivals and the temple's ornate architecture are major attractions.",
      },
    ],
    hiddenGems: [
      {
        name: "Kusum Sarovar",
        description:
          "A magnificent stepped tank on the Govardhan Parikrama path, surrounded by ornate cenotaphs. The serene water body at sunset is one of Braj's most photogenic locations.",
      },
      {
        name: "Radha Kund & Shyam Kund",
        description:
          "Twin sacred pools near Govardhan considered by many saints to be the holiest spots in Braj. The calm, contemplative atmosphere here contrasts with Vrindavan's bustle.",
      },
      {
        name: "Nidhivan",
        description:
          "A mysterious grove in Vrindavan where, legend says, Krishna still performs the Raas Leela every night. The twisted trees and unexplained phenomena make it one of India's most enigmatic sacred sites.",
      },
    ],
    festivals:
      "Janmashtami (August–September) is the grandest festival, with midnight celebrations at Krishna Janmabhoomi drawing millions. Holi in Braj is legendary — Lathmar Holi in Barsana and the colourful celebrations in Vrindavan are world-famous. Radhashtami, Govardhan Puja, and the Braj 84 Kos Parikrama also draw large devotional gatherings throughout the year.",
    food: "Mathura is famous for its pedhe (milk fudge) — try them fresh from shops near Holi Gate. Vrindavan's temple prasadam, especially at ISKCON and Banke Bihari, is exceptional. Don't miss the thick Mathura lassi, aloo-puri at roadside dhabas, and Braj ke laddu. The region's dairy-rich cuisine reflects its pastoral heritage.",
    shopping:
      "Shop for Krishna idols, flutes, Vrindavan's famous tulsi malas (prayer beads), Braj-style paintings, peacock feather décor, and Mathura's renowned brass utensils. Loi Bazaar in Vrindavan is the main shopping street for spiritual souvenirs.",
    itinerary: [
      {
        day: 1,
        title: "Mathura Temple Circuit",
        description:
          "Early departure from Kanpur, reach Mathura by late morning. Visit Krishna Janmabhoomi, Dwarkadhish Temple, and Vishram Ghat. Evening aarti at the Yamuna ghats. Overnight stay in Mathura or Vrindavan.",
      },
      {
        day: 2,
        title: "Vrindavan Exploration & Return",
        description:
          "Morning darshan at Banke Bihari Temple and ISKCON. Visit Prem Mandir, Nidhivan, and Radha Vallabh Temple. Lunch with temple prasadam. Explore local markets before returning to Kanpur by evening.",
      },
    ],
    weather:
      "October to March (18–30°C) offers the most pleasant weather for temple exploration. Summers (April–June) are intensely hot (40–47°C). The monsoon (July–September) brings relief from heat but muddy roads. Holi season (March) and Janmashtami (August) are the most festive — plan ahead as hotels fill up quickly.",
    howToReach:
      "Mathura is approximately 400 km from Kanpur (6–7 hours by road via Agra Expressway). Mathura Junction is well-connected by rail to all major cities. The nearest airport is Agra (60 km). Rudra Tours provides comfortable AC transport from Kanpur with experienced drivers who know the Braj region well.",
    accommodation:
      "Options range from luxury hotels like Radisson and The Park to budget stays and ashram accommodation at ISKCON and other temple guesthouses. Vrindavan has more spiritual-stay options while Mathura offers more conventional hotels. We recommend booking early during festival seasons.",
    tips: [
      "Carry only vegetarian snacks — Mathura-Vrindavan is a strictly vegetarian zone.",
      "Wear comfortable walking shoes — you'll cover multiple temples across both cities.",
      "Photography is restricted inside most temples; leave cameras in the vehicle.",
      "Visit Banke Bihari Temple early morning to avoid peak crowd hours.",
      "Keep valuables secure in crowded temple areas.",
      "Monkeys are common in Vrindavan — don't carry food openly or wear shiny items.",
      "Hire a local Braj Parikrama guide for richer storytelling at each site.",
    ],
    faqs: [
      {
        question: "How far is Mathura from Kanpur?",
        answer:
          "Mathura is about 400 km from Kanpur, approximately 6–7 hours by road. Our 2-day package includes comfortable round-trip transport.",
      },
      {
        question: "Can we cover both Mathura and Vrindavan in 2 days?",
        answer:
          "Yes. Our optimised itinerary covers major temples in both cities comfortably across 2 days, including time for darshan, aarti, and local exploration.",
      },
      {
        question: "Is Vrindavan safe for families with children?",
        answer:
          "Absolutely. Vrindavan is very family-friendly and safe. Just watch out for monkeys and stay hydrated, especially in warmer months.",
      },
      {
        question: "What is the best time for Holi celebrations in Braj?",
        answer:
          "The Braj Holi celebrations span about two weeks before the main Holi date. Lathmar Holi in Barsana and phoolon ki Holi in Banke Bihari are the highlights.",
      },
      {
        question: "Are there ISKCON temple stay options available?",
        answer:
          "Yes, ISKCON Vrindavan has guesthouse facilities. We can help arrange stays there based on availability, though advance booking is recommended.",
      },
    ],
  },

  "chitrakoot-tour": {
    overview:
      "Chitrakoot, the 'Hill of Many Wonders,' is a serene pilgrimage and nature retreat straddling the Uttar Pradesh–Madhya Pradesh border. This sacred town on the banks of the Mandakini River is where Lord Rama, Sita, and Lakshmana spent eleven and a half years of their fourteen-year exile. Unlike India's crowded temple cities, Chitrakoot offers a rare blend of spiritual depth and natural tranquillity — forested hills, gentle waterfalls, and ancient ashram sites. A 2-day trip from Kanpur reveals a destination that has inspired saints from Tulsidas to Atri Muni.",
    history:
      "Chitrakoot's significance is rooted in the Ramayana, where it is described as the place where Bharata came to persuade Lord Rama to return to Ayodhya. The hilltop meeting, known as Bharat Milap, is one of the epic's most emotional episodes. The region is also associated with several Vedic sages — Atri, Anasuya, Sati, and Dattatreya all have ashrams here. Goswami Tulsidas is believed to have composed parts of the Ramcharitmanas in Chitrakoot. Historically, the area was part of the Bundelkhand region, with archaeological remains dating back centuries.",
    significance:
      "Chitrakoot is one of the few places in India where the spiritual heritage spans the entire arc of the Ramayana. The hill of Kamadgiri is considered a living embodiment of Lord Rama — devotees perform parikrama (circumambulation) of the hill as an act of devotion equivalent to visiting Rama himself. It is also sacred to followers of the Dattatreya tradition. The town is referenced in multiple Puranas and remains an active centre of Sanskrit learning and ascetic practice.",
    attractions: [
      {
        name: "Kamadgiri Temple & Parikrama",
        description:
          "The sacred hill that grants wishes. The 5-km parikrama path circles the forested hill, lined with ancient temples and shrines. Considered the spiritual heart of Chitrakoot.",
      },
      {
        name: "Ram Ghat",
        description:
          "The main bathing ghat on the Mandakini River, where Rama is believed to have bathed. The evening aarti here, with oil lamps floating on the river, is deeply moving.",
      },
      {
        name: "Bharat Milap Temple",
        description:
          "Marks the spot where Bharata met Rama and begged him to return to Ayodhya. The footprints engraved in stone are said to be those of the divine brothers.",
      },
      {
        name: "Gupt Godavari",
        description:
          "Two unique caves — one with knee-deep water and an underground river, the other with a natural limestone court where Rama held darbar. A fascinating geological and spiritual site.",
      },
    ],
    hiddenGems: [
      {
        name: "Sati Anusuya Ashram",
        description:
          "A peaceful forest ashram 16 km from town, dedicated to the legendary chaste wife Anusuya. The waterfall nearby (Sati Anusuya Falls) is a hidden gem for nature lovers.",
      },
      {
        name: "Hanuman Dhara",
        description:
          "A hillside spring-temple accessed by climbing steep steps, where Lord Hanuman is believed to have cooled his burning tail. The panoramic views from the top are stunning.",
      },
      {
        name: "Sphatik Shila",
        description:
          "A crystal rock on the Mandakini riverbank where Sita's footprints are enshrined. The peaceful spot is perfect for quiet reflection away from the main town.",
      },
    ],
    festivals:
      "Ram Navami brings grand celebrations with processions and bhajan gatherings. The Chitrakoot Deepotsav, though smaller than Ayodhya's, offers an intimate and deeply spiritual experience. Sharad Purnima (October full moon) sees thousands performing Kamadgiri Parikrama under moonlight.",
    food: "Chitrakoot's food is simple and sattvic. Try the local poha-jalebi breakfast, Bundelkhandi dal-bafla (steamed wheat balls with lentils and ghee), and fresh makhan-mishri (butter with rock sugar) at Ram Ghat stalls. The temple prasad at Kamadgiri is a must-have.",
    shopping:
      "Pick up wooden toys, rudraksha malas, religious books in Hindi, and framed prints of Rama's exile scenes. The small market near Ram Ghat has stalls selling puja items and local handicrafts.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sacred Sites",
        description:
          "Depart Kanpur early morning, arrive Chitrakoot by afternoon. Visit Ram Ghat for a holy dip, Bharat Milap Temple, and Kamadgiri Parikrama. Evening aarti at Ram Ghat. Overnight stay.",
      },
      {
        day: 2,
        title: "Caves, Waterfalls & Return",
        description:
          "Morning visit to Gupt Godavari caves and Hanuman Dhara hilltop. Drive to Sati Anusuya Ashram and waterfall. Lunch at a local dhaba, then return to Kanpur by evening.",
      },
    ],
    weather:
      "October to March is the best time with pleasant temperatures (12–28°C). Summers (April–June) can be hot but the forested hills offer some relief. The monsoon transforms Chitrakoot with lush greenery and flowing waterfalls — beautiful but some trails may be slippery.",
    howToReach:
      "Chitrakoot is approximately 280 km from Kanpur (5–6 hours via Hamirpur Road). Chitrakoot Dham railway station connects to Jhansi and other major hubs. There is no airport nearby; the nearest is Prayagraj (130 km). Rudra Tours provides comfortable AC vehicles for the scenic drive through Bundelkhand.",
    accommodation:
      "Options include MPTDC Payanika (government resort), private hotels near Ram Ghat, and dharamshala accommodation for budget travellers. The town has limited luxury options, so early booking is advisable for comfortable stays.",
    tips: [
      "Carry comfortable walking shoes — Kamadgiri Parikrama is 5 km on uneven terrain.",
      "Start Hanuman Dhara climb early morning to avoid afternoon heat.",
      "Bring a torch if visiting Gupt Godavari caves — the interiors are dimly lit.",
      "Chitrakoot is a quiet, early-to-bed town — plan activities before sunset.",
      "Carry mosquito repellent, especially during monsoon visits.",
      "Respect the meditative atmosphere at ashrams — keep noise levels low.",
    ],
    faqs: [
      {
        question: "How many days are enough for Chitrakoot?",
        answer:
          "Two days cover all major sites comfortably. If you want to include the forest trails and remote ashrams, a third day is beneficial.",
      },
      {
        question: "Is Chitrakoot suitable for elderly travellers?",
        answer:
          "Most sites are accessible, but Hanuman Dhara requires a steep climb. We can customise the itinerary based on mobility levels.",
      },
      {
        question: "Is Gupt Godavari cave safe to enter?",
        answer:
          "Yes, the caves are safe and well-visited. The first cave has knee-deep water — wear appropriate footwear. The second cave is dry and easily walkable.",
      },
      {
        question: "What is the significance of Kamadgiri Parikrama?",
        answer:
          "Kamadgiri hill is considered a swaroop (form) of Lord Rama. Circumambulating it is believed to fulfil wishes and bring divine blessings.",
      },
      {
        question: "Are there any ATMs in Chitrakoot?",
        answer:
          "Yes, SBI and a few other banks have ATMs in the main town area. However, carrying some cash is advisable as many small shops and temples don't accept digital payments.",
      },
    ],
  },

  "khatu-shyam-ji": {
    overview:
      "Khatu Shyam Ji, nestled in the Sikar district of Rajasthan, is one of India's most beloved pilgrimage destinations dedicated to Barbarika — the grandson of Bhima who was blessed by Lord Krishna with the name 'Shyam.' The temple attracts millions of devotees who believe that Khatu Shyam Ji fulfils the wishes of every sincere devotee, earning him the title 'Haare ka Sahara' (refuge of the defeated). A 3-day trip from Kanpur takes you through the vibrant Shekhawati region, combining divine darshan with Rajasthani culture and hospitality.",
    history:
      "According to the Mahabharata, Barbarika possessed three infallible arrows that could end any war. To prevent him from altering the destined outcome of the Kurukshetra battle, Krishna asked for his head as a guru-dakshina. Impressed by his sacrifice, Krishna blessed him, declaring that in Kaliyug, Barbarika would be worshipped as Shyam and his devotees would never go empty-handed. The head was found buried in Khatu village, and a temple was built in the early medieval period. The current grand temple structure was renovated in the 18th century.",
    significance:
      "Khatu Shyam Ji holds a unique position in Hindu worship — he is not a deity from the traditional pantheon but a warrior-saint whose sacrifice was acknowledged by Krishna himself. The concept of 'Haare ka Sahara' resonates deeply with everyday devotees who seek hope and support. The temple is considered especially powerful for those facing business difficulties, health challenges, or legal matters. The Falgun Mela (February–March) is one of Rajasthan's largest religious fairs.",
    attractions: [
      {
        name: "Khatu Shyam Ji Temple",
        description:
          "The main temple with its distinctive multi-tiered shikhara houses the sacred idol. The darshan experience, accompanied by devotional singing and the energetic crowd, is intensely emotional.",
      },
      {
        name: "Shyam Kund",
        description:
          "A sacred tank near the temple where devotees take a holy dip before darshan. The beautifully maintained kund is surrounded by small shrines and resting pavilions.",
      },
      {
        name: "Gopinath Temple",
        description:
          "Dedicated to Lord Krishna as Gopinath (lord of the gopis), this smaller temple near the main shrine features beautiful Rajasthani artwork and a more peaceful darshan experience.",
      },
    ],
    hiddenGems: [
      {
        name: "Shekhawati Havelis (Mandawa/Nawalgarh)",
        description:
          "The Shekhawati region en route to Khatu features stunning painted havelis with frescoes depicting everything from mythology to early steam engines. An open-air art gallery in the desert.",
      },
      {
        name: "Rani Sati Temple, Jhunjhunu",
        description:
          "One of India's largest temple complexes dedicated to Rani Sati Devi. The sheer scale of marble architecture and the devotional atmosphere make it a worthwhile stop.",
      },
      {
        name: "Khatushyamji Gaushala",
        description:
          "A large cow shelter near the temple where visitors can participate in go-seva (cow service), a meaningful spiritual activity.",
      },
    ],
    festivals:
      "The Falgun Mela (Feb–March) during Ekadashi is the biggest gathering, with over a million devotees converging on the small town. Every Ekadashi (11th day of the lunar cycle) and every Sunday see significant crowds. The Shyam Jayanti celebration is marked by grand processions and community feasts.",
    food: "Rajasthani cuisine shines here — try dal-baati-churma at local restaurants, the iconic mirchi vada, kachori with aloo sabzi, and ghevar (seasonal sweet). The temple's prasad distribution is on a massive scale; the laddu prasad is famous across Rajasthan.",
    shopping:
      "Buy Khatu Shyam Ji memorabilia — flags, stickers, framed prints, and gold-plated Shyam pendants. Rajasthani handicrafts, miniature paintings, mojari juttis (embroidered shoes), and block-printed fabrics are available in nearby towns.",
    itinerary: [
      {
        day: 1,
        title: "Kanpur to Khatu via Shekhawati",
        description:
          "Early morning departure. The drive passes through the Shekhawati belt — stop at Mandawa or Nawalgarh to admire the painted havelis. Arrive in Khatu by evening for the sunset aarti.",
      },
      {
        day: 2,
        title: "Darshan & Temple Day",
        description:
          "Early morning holy dip at Shyam Kund followed by main temple darshan. Visit Gopinath Temple. Afternoon free for relaxation or explore the local market. Evening aarti at the temple.",
      },
      {
        day: 3,
        title: "Jhunjhunu & Return Journey",
        description:
          "Morning visit to Rani Sati Temple in Jhunjhunu. Begin return journey to Kanpur with a lunch stop en route, arriving by late evening.",
      },
    ],
    weather:
      "October to March is the best time, with cool, dry weather (8–25°C) perfect for the drive and outdoor temple visits. Summers (April–June) are extremely hot (40–48°C) and should be avoided. The monsoon (July–September) brings some relief but the Thar Desert fringe sees limited rainfall.",
    howToReach:
      "Khatu Shyam Ji is approximately 600 km from Kanpur (10–12 hours by road). The nearest railway station is Ringas (17 km). Jaipur airport is 80 km away. Rudra Tours provides the full round-trip drive with experienced drivers familiar with the Rajasthan highway network.",
    accommodation:
      "Khatu has numerous dharamshalas and budget hotels catering to pilgrims. For more comfort, stay in Sikar (25 km) which has better hotel options. During the Falgun Mela, accommodation must be booked weeks in advance.",
    tips: [
      "Visit on a weekday to avoid the massive Ekadashi and Sunday crowds.",
      "Carry enough cash — ATM availability in Khatu town is limited.",
      "Dress modestly in temple premises; shoes must be removed well before the main entrance.",
      "The Falgun Mela crowd is enormous — stay together and keep valuables secure.",
      "Carry sunscreen and a hat for the desert climate, even in winter.",
      "If driving, ensure your vehicle is serviced for the long highway journey.",
    ],
    faqs: [
      {
        question: "Who is Khatu Shyam Ji?",
        answer:
          "Khatu Shyam Ji is Barbarika, the grandson of Bhima from the Mahabharata. He was blessed by Lord Krishna and is worshipped as 'Shyam' — the refuge of the defeated and the wish-fulfiller.",
      },
      {
        question: "What is the best day to visit Khatu Shyam Ji?",
        answer:
          "Every Ekadashi (11th day of both lunar fortnights) and Sundays are auspicious. However, weekdays offer a more peaceful darshan experience with shorter queues.",
      },
      {
        question: "Is the drive from Kanpur to Khatu comfortable?",
        answer:
          "Yes, the highways are well-maintained. Our package includes AC vehicles with comfortable seating and experienced drivers. We plan rest stops and meals en route.",
      },
      {
        question: "Can we combine Khatu Shyam with Jaipur?",
        answer:
          "Absolutely. Jaipur is only 80 km from Khatu. We can customise the itinerary to include Jaipur sightseeing on the return journey.",
      },
      {
        question: "Is accommodation available near the temple?",
        answer:
          "Yes, multiple dharamshalas and budget hotels are within walking distance. For premium stays, Sikar town (25 km) has better options.",
      },
    ],
  },

  "mahakal-omkareshwar": {
    overview:
      "This powerful 3-day pilgrimage covers two of the twelve Jyotirlingas — Mahakaleshwar in Ujjain and Omkareshwar on the Narmada River — along with the fierce Kal Bhairav temple. Ujjain, one of the four Kumbh Mela cities and a seat of ancient astronomy, offers a rich tapestry of Shaivite devotion. Omkareshwar, set on a river island shaped like the sacred Om symbol, provides a uniquely tranquil contrast. Together, these destinations form one of India's most potent Shiva pilgrimage circuits.",
    history:
      "Ujjain, known as Avanti and Avantika in ancient texts, was one of ancient India's greatest cities — serving as the capital of Vikramaditya's empire and a centre of the Malwa Sultanate. It is referenced in the Meghaduta by Kalidasa and in the Skanda Purana. The Mahakaleshwar temple's origins date to the pre-Gupta era, though the current structure was rebuilt during the Maratha period. Omkareshwar's temple complex sits on Mandhata island and has been a pilgrimage site since at least the 12th century, with inscriptions from the Paramara dynasty.",
    significance:
      "Mahakaleshwar is the only Jyotirling that faces south — a position associated with Shiva as the lord of death and time (Mahakala). The Bhasma Aarti, where the lingam is anointed with sacred ash from funeral pyres at 4 AM, is one of Hinduism's most intense rituals. Omkareshwar represents the Omkara Jyotirlinga and sits on an island said to be formed when the Vindhya mountains worshipped Shiva. Kal Bhairav temple in Ujjain is one of the few temples where liquor is offered as prasad.",
    attractions: [
      {
        name: "Mahakaleshwar Temple",
        description:
          "The grand Jyotirlinga temple in Ujjain with its multi-level structure, ornate silver doors, and the intense Bhasma Aarti at dawn. The subterranean sanctum adds a profound cave-like mysticism to the darshan.",
      },
      {
        name: "Omkareshwar Temple",
        description:
          "Set on the sacred Om-shaped Mandhata island in the Narmada, this Jyotirlinga temple combines natural beauty with deep devotion. The parikrama of the island (walking around it) takes about 3 hours.",
      },
      {
        name: "Kal Bhairav Temple",
        description:
          "Ujjain's fierce guardian deity temple where madira (liquor) is offered to the idol as prasad — a ritual found almost nowhere else. The tantric energy here is palpable.",
      },
      {
        name: "Ram Ghat, Ujjain",
        description:
          "The main bathing ghat on the Shipra River where the Kumbh Mela is held. The evening aarti ceremony here is one of central India's most beautiful.",
      },
    ],
    hiddenGems: [
      {
        name: "Vedha Shala (Jantar Mantar)",
        description:
          "An ancient astronomical observatory built by Maharaja Jai Singh II in Ujjain, one of only five in India. It underscores Ujjain's historical role as India's Greenwich (zero meridian).",
      },
      {
        name: "Bhartrihari Caves",
        description:
          "Ancient meditation caves of the philosopher-king Bhartrihari on the banks of the Shipra River. The serene spot tells the story of a king who renounced his throne for spiritual enlightenment.",
      },
      {
        name: "Narmada Parikrama Path",
        description:
          "Sections of the ancient path along the Narmada near Omkareshwar offer stunning river views, rarely visited by regular tourists.",
      },
    ],
    festivals:
      "The Simhastha Kumbh Mela (every 12 years, next in 2028) is the grandest event, drawing over 75 million pilgrims. Maha Shivaratri (February–March) sees all-night worship at Mahakaleshwar. Nag Panchami and Shravan Mondays are also major occasions with extended temple hours.",
    food: "Ujjain is famous for its poha-jalebi breakfast, dal-bafla (Malwa's signature dish), and bhutte ka kees (spiced grated corn). Try the thick rabdi at shops near Mahakaleshwar. Omkareshwar's riverside dhabas serve simple but wholesome Narmadapuram-style thalis.",
    shopping:
      "Ujjain's markets around the temple sell rudraksha malas, Shiva lingams, bhasma packets, religious prints, and Maheshwari sarees from the nearby weaving town of Maheshwar. Omkareshwar has stalls selling Narmadeshwar shivlings — naturally formed river stones.",
    itinerary: [
      {
        day: 1,
        title: "Kanpur to Ujjain",
        description:
          "Depart early from Kanpur, arrive in Ujjain by evening. Evening aarti at Ram Ghat on the Shipra River. Dinner and overnight stay in Ujjain. Register for next morning's Bhasma Aarti.",
      },
      {
        day: 2,
        title: "Bhasma Aarti & Omkareshwar",
        description:
          "Wake at 3 AM for the legendary Bhasma Aarti at Mahakaleshwar (starts 4 AM). After darshan, visit Kal Bhairav Temple. Post-lunch drive to Omkareshwar (3 hours). Evening darshan at Omkareshwar Temple.",
      },
      {
        day: 3,
        title: "Omkareshwar Parikrama & Return",
        description:
          "Morning Mandhata island parikrama. Visit the 24 Avatars Temple and Siddhanath Temple. Begin return journey to Kanpur after lunch, arriving by late evening.",
      },
    ],
    weather:
      "October to March is ideal with comfortable temperatures (10–28°C). Summers (April–June) are very hot (38–46°C). The monsoon (July–September) makes the Narmada at Omkareshwar dramatically beautiful but travel can be challenging. Maha Shivaratri (Feb–March) is the most auspicious time.",
    howToReach:
      "Ujjain is approximately 850 km from Kanpur (12–14 hours by road, or overnight train). Ujjain Junction is well-connected by rail. Indore airport (55 km from Ujjain) has domestic flights. Omkareshwar is 140 km from Ujjain. Rudra Tours handles the complete logistics with comfortable vehicles.",
    accommodation:
      "Ujjain offers hotels from luxury (Radisson, Hotel Ujjain Palace) to budget and dharamshala options near the temple. Omkareshwar has simpler stays — government-run tourist lodges and ashram accommodation. We recommend staying in Ujjain both nights for comfort.",
    tips: [
      "Register for Bhasma Aarti online through the official Mahakaleshwar temple portal — slots fill up fast.",
      "Dress warmly for the 3:30 AM queue for Bhasma Aarti — even winters are cold at that hour.",
      "Mobile phones are not allowed inside Mahakaleshwar sanctum — use the free lockers.",
      "At Omkareshwar, wear comfortable footwear for the island parikrama (3+ hours of walking).",
      "Carry motion sickness medication if prone — the ghat roads near Omkareshwar are winding.",
      "The Kal Bhairav temple prasad is liquor — participation is optional.",
    ],
    faqs: [
      {
        question: "What is the Bhasma Aarti?",
        answer:
          "The Bhasma Aarti is a pre-dawn ritual at Mahakaleshwar where the Shiva lingam is anointed with sacred ash (bhasma) from cremation grounds. It starts at 4 AM and is one of Hinduism's most intense worship experiences.",
      },
      {
        question: "Do I need to register in advance for Bhasma Aarti?",
        answer:
          "Yes, online registration through the official temple website is strongly recommended. Walk-in entry is possible but involves very long queues.",
      },
      {
        question: "How do I reach Omkareshwar island?",
        answer:
          "A road bridge connects the mainland to Mandhata island. You can also take a short boat ride across the Narmada for a more scenic approach.",
      },
      {
        question: "Is the liquor prasad at Kal Bhairav mandatory?",
        answer:
          "No, accepting the liquor prasad is entirely optional. You can receive other forms of prasad. The ritual is a unique cultural tradition, not a requirement for devotees.",
      },
      {
        question: "Can this trip be combined with Indore sightseeing?",
        answer:
          "Yes, Indore is just 55 km from Ujjain. We offer a separate Ujjain-Indore package or can add Indore to this itinerary.",
      },
    ],
  },

  "kashi-vishwanath": {
    overview:
      "Varanasi — the oldest continuously inhabited city in the world — is the spiritual capital of India. The Kashi Vishwanath Temple, dedicated to Lord Shiva, is one of the twelve Jyotirlingas and stands at the heart of this timeless city. A 2-day trip from Kanpur takes you through the labyrinthine galis of Varanasi, the iconic ghats of the Ganga, the soul-stirring evening aarti at Dashashwamedh Ghat, and the tranquil blessings of Sankat Mochan Hanuman Temple. Varanasi doesn't just offer darshan — it offers an encounter with the eternal.",
    history:
      "Varanasi's history stretches back over 5,000 years, making it older than Rome, Athens, and Beijing. Known as Kashi in ancient texts, it has been a centre of learning, philosophy, and the arts since the Vedic period. The city was the seat of many great thinkers including Kabir, Tulsidas, Ravidas, and Buddha (who gave his first sermon at nearby Sarnath). The Kashi Vishwanath Temple has been destroyed and rebuilt multiple times over centuries; the current structure was built by Ahilyabai Holkar of Indore in 1780. The magnificent Kashi Vishwanath Corridor, completed in 2021, has restored the temple's direct connection to the Ganga.",
    significance:
      "In Hindu belief, Varanasi is the city of Shiva — the lord of the universe who resides here with Goddess Parvati. Dying in Kashi is believed to grant moksha (liberation from the cycle of rebirth), which is why cremation ghats like Manikarnika have burned continuously for thousands of years. The Kashi Vishwanath Jyotirlinga is one of the most sacred of all Shiva shrines. Sankat Mochan Temple, built by Tulsidas, is revered for removing all obstacles and troubles from devotees' lives.",
    attractions: [
      {
        name: "Kashi Vishwanath Temple",
        description:
          "The golden-spired Jyotirlinga temple, now surrounded by the stunning Vishwanath Corridor. The darshan of the ancient lingam inside the marble sanctum is a once-in-a-lifetime spiritual experience.",
      },
      {
        name: "Dashashwamedh Ghat Aarti",
        description:
          "The world-famous Ganga Aarti performed every evening by a group of priests with synchronised fire rituals, bells, conch shells, and chanting. An unforgettable multi-sensory experience.",
      },
      {
        name: "Sankat Mochan Temple",
        description:
          "One of Varanasi's most beloved temples, dedicated to Lord Hanuman. Devotees come to have their 'sankat' (troubles) removed. The temple's langur monkeys and laddoo prasad are iconic.",
      },
      {
        name: "Manikarnika Ghat",
        description:
          "The principal cremation ghat where funeral pyres have burned for millennia. A powerful, humbling reminder of life's impermanence that forms a core part of Varanasi's spiritual identity.",
      },
      {
        name: "Sarnath",
        description:
          "The Buddhist pilgrimage site 10 km from Varanasi where Buddha delivered his first sermon. The Dhamek Stupa, Ashoka Pillar, and museum housing the famous Lion Capital are must-visits.",
      },
    ],
    hiddenGems: [
      {
        name: "Morning Boat Ride on the Ganga",
        description:
          "A sunrise boat ride from Assi Ghat to Manikarnika offers panoramic views of the entire ghat skyline bathed in golden light — arguably Varanasi's most iconic experience.",
      },
      {
        name: "Ramnagar Fort",
        description:
          "The 18th-century fort-palace of the Maharaja of Varanasi on the eastern bank of the Ganga. Its museum houses vintage cars, medieval weaponry, and ivory palanquins. Rarely crowded.",
      },
      {
        name: "Tulsi Manas Temple",
        description:
          "A modern marble temple with the entire Ramcharitmanas inscribed on its walls. The calm atmosphere makes it a contemplative counterpoint to the bustling old-city temples.",
      },
    ],
    festivals:
      "Dev Deepawali (November), celebrated 15 days after Diwali, sees over a million diyas lit on the ghats — a spectacle that rivals Varanasi's daily aarti. Maha Shivaratri brings all-night worship at Vishwanath. The Ganga Mahotsav (November) is a multi-day cultural festival. Holi in Varanasi's Assi-Lanka belt is vibrant and joyous.",
    food: "Varanasi's food scene is legendary. Must-tries include kachori-sabzi at Ram Bhandar (a 100-year-old institution), tamatar chaat, malaiyo (a winter-only milk foam delicacy), Banarasi paan, the famous lassi at Blue Lassi shop, and thandai — especially the special bhang thandai during Holi. For dinner, try the Banarasi thali at any heritage restaurant.",
    shopping:
      "Varanasi is India's silk capital. Buy authentic Banarasi silk sarees from Vishwanath Gali or the handloom cluster. Other treasures include brassware from Thatheri Bazaar (a UNESCO-listed market), wooden toys, classical music instruments (tabla, sitar), and sandalwood products.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Evening Ganga Aarti",
        description:
          "Depart Kanpur, arrive Varanasi by afternoon. Check in and rest. Evening visit to Dashashwamedh Ghat for the world-famous Ganga Aarti. Walk through the old-city lanes back to your hotel. Overnight stay.",
      },
      {
        day: 2,
        title: "Temples, Boat Ride & Return",
        description:
          "Pre-dawn sunrise boat ride on the Ganga. After breakfast, darshan at Kashi Vishwanath Temple and walk through the Vishwanath Corridor. Visit Sankat Mochan Temple and optionally Sarnath. Lunch, shopping at Vishwanath Gali, and return to Kanpur by evening.",
      },
    ],
    weather:
      "October to March is ideal (10–28°C) with comfortable walking weather. November's Dev Deepawali is spectacular. Summers (April–June) are brutal (40–47°C). The monsoon (July–September) brings a different beauty — the Ganga in full flow — but humidity is high. Winter mornings can be foggy, adding mystique to the boat ride.",
    howToReach:
      "Varanasi is approximately 330 km from Kanpur (5–6 hours by road, or 4 hours by Vande Bharat train). Varanasi Junction and Varanasi Cantt are major railway hubs. Lal Bahadur Shastri Airport has domestic and select international flights. Rudra Tours offers door-to-door AC transport.",
    accommodation:
      "Options range from luxury heritage hotels like BrijRama Palace and Taj Ganges to comfortable mid-range hotels and ghat-facing guesthouses. For a unique experience, stay at a heritage haveli overlooking the Ganga. We recommend hotels in the Cantonment area for easier vehicle access.",
    tips: [
      "Book Kashi Vishwanath darshan online to skip the general queue.",
      "Wear clothes you don't mind getting wet — some ghats have splashing during aarti.",
      "Negotiate boat ride prices before boarding; our drivers can help arrange trusted boatmen.",
      "The old-city lanes are narrow — leave vehicles at designated parking and walk.",
      "Be respectful at cremation ghats — photography is strictly prohibited there.",
      "Try to attend the Subah-e-Banaras morning programme at Assi Ghat (5:30 AM).",
      "Carry a reusable water bottle — the walk between temples can be long and tiring.",
    ],
    faqs: [
      {
        question: "How far is Varanasi from Kanpur?",
        answer:
          "Varanasi is about 330 km from Kanpur, roughly 5–6 hours by road. The Vande Bharat Express covers the distance in about 4 hours by rail.",
      },
      {
        question: "Is the Ganga Aarti held every day?",
        answer:
          "Yes, the Dashashwamedh Ghat aarti takes place every single evening around sunset, regardless of weather. The timing shifts slightly by season.",
      },
      {
        question: "Can I take a boat ride on the Ganga?",
        answer:
          "Absolutely. Sunrise boat rides are the most popular. We can arrange shared or private boat rides from Assi Ghat to Manikarnika Ghat.",
      },
      {
        question: "Is Sarnath included in this 2-day package?",
        answer:
          "Sarnath is 10 km from Varanasi and can be included on Day 2 based on time availability. We recommend it for those interested in Buddhist history.",
      },
      {
        question: "Are there dress code restrictions at Kashi Vishwanath?",
        answer:
          "Modest clothing is expected. Mobile phones, cameras, bags, and electronic devices must be deposited at lockers before entering the temple complex.",
      },
      {
        question: "What is the Vishwanath Corridor?",
        answer:
          "The Kashi Vishwanath Corridor is a grand walkway connecting the temple directly to the Ganga ghats. Completed in 2021, it features beautiful architecture, pilgrim facilities, and a stunning view of the temple.",
      },
    ],
  },

  "prayagraj-sangam": {
    overview:
      "Prayagraj (formerly Allahabad) is the sacred city where three of India's holiest rivers — the Ganga, Yamuna, and the mythical Saraswati — converge at the Triveni Sangam. This confluence is considered the most auspicious bathing point in all of Hinduism. A 2-day trip from Kanpur lets you experience the spiritual power of the Sangam, the colonial-era grandeur of the city, and the cultural richness of a place that has shaped India's religious, political, and literary history for millennia.",
    history:
      "Prayagraj finds mention in the Vedas as Prayaga — the 'place of sacrifice' where Brahma performed the first yajna after creating the world. The city served as a major centre during the Maurya, Gupta, and Mughal empires. Emperor Akbar built the imposing Allahabad Fort at the Sangam in 1583. The city played a pivotal role in India's independence movement — the Nehru family residence, Anand Bhawan, is now a museum documenting the freedom struggle. The Kumbh Mela, held here every 12 years, is the largest human gathering on Earth.",
    significance:
      "The Triveni Sangam is considered the 'Tirth Raj' — the king of all pilgrimages. Bathing here is believed to wash away all sins and break the cycle of rebirth. The Maha Kumbh Mela (every 144 years, last held in 2025) draws over 400 million pilgrims. The Akshaya Vat (indestructible banyan tree) inside the Allahabad Fort is mentioned in Puranic texts as a tree that never loses its leaves, symbolising immortality.",
    attractions: [
      {
        name: "Triveni Sangam",
        description:
          "The sacred confluence of the Ganga, Yamuna, and Saraswati rivers. Take a boat ride to the meeting point where you can see the distinct colours of the rivers merging. The ritual bath here is profoundly moving.",
      },
      {
        name: "Allahabad Fort & Akshaya Vat",
        description:
          "The Mughal-era fort built by Akbar houses the ancient Akshaya Vat tree and an underground Saraswati temple. Parts of the fort (still used by the Indian Army) are open to visitors.",
      },
      {
        name: "Anand Bhawan",
        description:
          "The ancestral home of the Nehru-Gandhi family, now a museum showcasing personal belongings, photographs, and documents from India's independence movement.",
      },
      {
        name: "Hanuman Mandir (Letey Hue Hanuman)",
        description:
          "A unique temple housing a reclining idol of Lord Hanuman. During monsoon floods, the Ganga rises to touch the idol's feet — a phenomenon devotees consider miraculous.",
      },
    ],
    hiddenGems: [
      {
        name: "Khusro Bagh",
        description:
          "A walled Mughal garden containing three exquisite sandstone mausoleums of Prince Khusrau and his family. The Mughal architecture here rivals that of Agra, yet remains largely unvisited.",
      },
      {
        name: "Swaraj Bhawan",
        description:
          "Another Nehru family residence where Indira Gandhi was born. The building is now a museum with a more intimate feel than Anand Bhawan.",
      },
      {
        name: "Alopi Devi Temple",
        description:
          "A Shakti Peeth where instead of an idol, a wooden cradle is worshipped — one of Hinduism's most unusual temple traditions.",
      },
    ],
    festivals:
      "The Kumbh Mela (every 12 years) and Ardh Kumbh (every 6 years) are the city's defining events, drawing millions for sacred bathing on auspicious dates. Magh Mela is an annual month-long gathering at the Sangam during Makar Sankranti (January–February). The Maha Kumbh 2025 drew record crowds of over 400 million.",
    food: "Try the famous Loknath ki gali chaat — pani puri, tikki, and dahi vada that are legendary across UP. Prayagraj's khasta kachori with aloo sabzi is a beloved breakfast. For sweets, try the Sangam pedha and peda from iconic shops like Netram and Lala ka laddoo.",
    shopping:
      "Buy religious items from Sangam-side stalls — rudraksha malas, sacred thread sets, Ganga jal bottles, and puja thalis. The Civil Lines area has bookshops with rare texts on Indian philosophy and history.",
    itinerary: [
      {
        day: 1,
        title: "Arrival & Sangam Darshan",
        description:
          "Depart Kanpur early morning, arrive Prayagraj (2–3 hours). Take a boat ride to Triveni Sangam for a sacred dip. Visit Allahabad Fort and the Akshaya Vat. Evening at Hanuman Mandir. Overnight stay.",
      },
      {
        day: 2,
        title: "Heritage Trail & Return",
        description:
          "Morning visit to Anand Bhawan and Swaraj Bhawan museums. Explore Khusro Bagh. Lunch at a Civil Lines restaurant. Return to Kanpur by afternoon with Sangam jal as a sacred souvenir.",
      },
    ],
    weather:
      "October to March offers the best weather (8–28°C). The Magh Mela period (January–February) is cold but deeply spiritual. Summers are very hot (40–47°C). The monsoon brings the Ganga in full spate — impressive but not ideal for Sangam bathing. Winter mornings can be foggy.",
    howToReach:
      "Prayagraj is just 200 km from Kanpur (3–4 hours by road on the excellent NH-2 highway). The Vande Bharat and Shatabdi Express provide fast rail connectivity. Bamrauli Airport has limited domestic flights. Being so close to Kanpur, this is one of our most accessible pilgrimage packages.",
    accommodation:
      "Options include Hotel Kanha Shyam, The Léopold, and several mid-range hotels in Civil Lines. During Kumbh/Magh Mela, luxury tent cities spring up along the Sangam. Dharamshalas near the ghats offer basic pilgrim accommodation.",
    tips: [
      "Carry a change of dry clothes — you'll want to take a dip at the Sangam.",
      "Hire a boat from the authorised ghat counter to avoid overcharging.",
      "The fort area has restricted zones — follow the designated visitor path.",
      "Carry your own towel and a plastic bag for wet clothes.",
      "Visit early morning for the most peaceful Sangam experience.",
      "During Kumbh/Magh Mela, plan logistics weeks in advance — the city swells enormously.",
    ],
    faqs: [
      {
        question: "How far is Prayagraj from Kanpur?",
        answer:
          "Prayagraj is about 200 km from Kanpur, making it one of the closest pilgrimage destinations. The drive takes approximately 3–4 hours on well-maintained highways.",
      },
      {
        question: "Can we actually see three rivers meeting at the Sangam?",
        answer:
          "You can clearly see the Ganga and Yamuna meeting — the muddy Ganga and the clearer, greenish Yamuna create a visible line. The Saraswati is believed to flow underground.",
      },
      {
        question: "Is the Akshaya Vat accessible to visitors?",
        answer:
          "Yes, the Akshaya Vat inside Allahabad Fort is now accessible to visitors. You need to carry valid photo ID for entry as part of the fort is a military zone.",
      },
      {
        question: "What is Magh Mela?",
        answer:
          "Magh Mela is an annual month-long religious gathering at the Sangam during the Hindu month of Magh (January–February). It's like a mini Kumbh Mela, with tent cities, religious discourses, and sacred bathing.",
      },
      {
        question: "Is boating at Sangam safe?",
        answer:
          "Yes, authorised boats with life jackets are available at designated ghats. We recommend using only official boats arranged through the ghat committee.",
      },
    ],
  },

  "haridwar-rishikesh": {
    overview:
      "Haridwar and Rishikesh, the twin gateways to the Himalayas, sit on the banks of the Ganga as she emerges from the mountains into the plains of India. Haridwar — one of the four Kumbh Mela cities — offers intensely devotional temple experiences, while Rishikesh — the yoga capital of the world — blends spirituality with adventure. A 2-day trip from Kanpur covers the iconic Ganga Aarti at Har Ki Pauri, the suspension bridges of Rishikesh, ancient ashrams, and the serene Himalayan foothills.",
    history:
      "Haridwar's name means 'Gateway to God' (Hari-Dwar). The city is one of the four sites of the Kumbh Mela, with references in texts dating to the 1st century CE. The Ganga enters the Indo-Gangetic plains at Haridwar, making it a sacred transition point. Rishikesh gained global fame in 1968 when the Beatles visited Maharishi Mahesh Yogi's ashram. Long before that, it was a centre for Vedic learning and yogic practice, with sages like Vashishtha and Bharadwaja establishing ashrams here thousands of years ago.",
    significance:
      "Haridwar is one of the Sapta Puri and hosts the Kumbh Mela every 12 years. The Brahma Kund at Har Ki Pauri is where the Ganga's waters are considered most purifying. Rishikesh is mentioned in the Skanda Purana as the place where Lord Vishnu appeared to Raibhya Rishi. Today, it is the global epicentre of yoga and meditation, recognised by India's government as the 'Yoga Capital of the World.' The two cities together represent the full spectrum of Hindu spiritual life — from active devotion to contemplative practice.",
    attractions: [
      {
        name: "Har Ki Pauri & Ganga Aarti",
        description:
          "Haridwar's most sacred ghat where footprints of Lord Vishnu are enshrined in a stone wall. The evening Ganga Aarti here is a mesmerising ritual of fire, bells, and chanting that draws thousands nightly.",
      },
      {
        name: "Lakshman Jhula & Ram Jhula",
        description:
          "Rishikesh's iconic suspension bridges spanning the Ganga, offering stunning river views. Ram Jhula (1986) is a functional bridge, while the area around both bridges is a hub of cafés, shops, and temples.",
      },
      {
        name: "Triveni Ghat, Rishikesh",
        description:
          "A serene bathing ghat named for the confluence of three rivers. The evening aarti here is smaller and more intimate than Haridwar's, creating a deeply personal spiritual moment.",
      },
      {
        name: "Beatles Ashram (Maharishi Mahesh Yogi Ashram)",
        description:
          "Now a beautiful open-air gallery within Rajaji National Park, the ruins of this ashram are covered in stunning graffiti art celebrating the Beatles' 1968 visit.",
      },
    ],
    hiddenGems: [
      {
        name: "Neer Garh Waterfall",
        description:
          "A beautiful two-tier waterfall just 4 km from Rishikesh, accessible via a short forest trek. Perfect for a refreshing break from temple-hopping.",
      },
      {
        name: "Parmarth Niketan Ganga Aarti",
        description:
          "A more peaceful alternative to Har Ki Pauri, this ashram aarti includes yoga practitioners, sannyasis, and international visitors in a more contemplative setting.",
      },
      {
        name: "Mansa Devi Cable Car",
        description:
          "Take the ropeway from Haridwar to the hilltop Mansa Devi Temple for panoramic views of the city, the Ganga, and the Shivalik foothills.",
      },
    ],
    festivals:
      "The Kumbh Mela at Haridwar (every 12 years, next in 2034) is the largest religious gathering. The International Yoga Festival in Rishikesh (February–March) attracts practitioners from 100+ countries. Ganga Dussehra (May–June) celebrates the Ganga's descent to earth with grand celebrations at Har Ki Pauri.",
    food: "Both cities are strictly vegetarian. Haridwar's Bara Bazaar serves legendary aloo puri breakfasts and chole bhature. Try the jalebi-rabdi at shops near Har Ki Pauri. Rishikesh's Laxman Jhula area has international cafés serving Israeli, Italian, and Korean cuisine alongside Indian thalis — a reflection of its global yoga community.",
    shopping:
      "Haridwar is known for Ganga jal, rudraksha malas, Ayurvedic medicines (Patanjali's original store is here), brass items, and jute bags. Rishikesh offers yoga wear, meditation cushions, singing bowls, handmade journals, and organic products from ashram stores.",
    itinerary: [
      {
        day: 1,
        title: "Haridwar — Gateway to the Divine",
        description:
          "Depart Kanpur early morning. Arrive Haridwar by afternoon. Visit Mansa Devi Temple (cable car), Chandi Devi Temple, and Daksheshwar Mahadev Temple. Evening Ganga Aarti at Har Ki Pauri. Overnight in Haridwar.",
      },
      {
        day: 2,
        title: "Rishikesh — Yoga Capital",
        description:
          "Morning drive to Rishikesh (30 min). Visit Ram Jhula and Lakshman Jhula. Explore the Beatles Ashram. Visit Triveni Ghat and Parmarth Niketan. Lunch at a Laxman Jhula café. Return to Kanpur by evening.",
      },
    ],
    weather:
      "October to April is the best period (10–30°C). March–April and September–October offer the most pleasant weather. Summers (May–June) are warm but cooler than the plains. The monsoon (July–September) brings heavy rainfall and occasional road closures. Winters (December–January) can be cold, especially mornings by the river.",
    howToReach:
      "Haridwar is approximately 530 km from Kanpur (8–9 hours by road). Haridwar Junction is a major railhead with trains from across India. The nearest airport is Jolly Grant Airport, Dehradun (35 km from Rishikesh). Rishikesh is 25 km from Haridwar. Rudra Tours provides comfortable door-to-door transport.",
    accommodation:
      "Haridwar has options from luxury (Radisson Blu, Haveli Hari Ganga) to mid-range hotels and dharamshalas. Rishikesh offers unique ashram stays (Parmarth Niketan, Sivananda Ashram) alongside boutique riverside resorts and yoga retreat centres.",
    tips: [
      "Leather items should not be carried to Har Ki Pauri and most temples.",
      "Book a riverside room in Rishikesh if budget allows — the views are unforgettable.",
      "Both cities are alcohol-free zones — no liquor is available within city limits.",
      "Carry warm clothes even in mild seasons — evenings by the Ganga are breezy.",
      "For the Ganga Aarti at Har Ki Pauri, arrive 30 minutes early to secure a good viewing spot.",
      "Adventure activities (rafting, bungee jumping) can be added in Rishikesh — ask our team.",
    ],
    faqs: [
      {
        question: "Can we do both Haridwar and Rishikesh in 2 days?",
        answer:
          "Yes, our itinerary covers the key attractions of both cities comfortably in 2 days. They are only 25 km apart.",
      },
      {
        question: "Is river rafting available in Rishikesh?",
        answer:
          "Yes, rafting operates from September to June on the Ganga. It can be added to the package. The 16-km Marine Drive to Rishikesh stretch is the most popular.",
      },
      {
        question: "Are ashram stays comfortable for families?",
        answer:
          "Ashrams like Parmarth Niketan offer clean, basic rooms suitable for families. For more comfort, we recommend riverside hotels. Both options can be arranged.",
      },
      {
        question: "Is the Ganga Aarti held every day?",
        answer:
          "Yes, the Ganga Aarti at Har Ki Pauri and Triveni Ghat (Rishikesh) happens every evening without exception, regardless of weather or season.",
      },
      {
        question: "What should I wear for the Ganga Aarti?",
        answer:
          "Wear modest, comfortable clothing. If you plan to take a dip, carry a change of clothes. Many devotees wear traditional Indian attire.",
      },
    ],
  },

  "nainital-tour": {
    overview:
      "Nainital, the sparkling jewel of Uttarakhand's Kumaon region, is renowned as the 'Lake District of India.' Centred around the mesmerizing, pear-shaped Naini Lake, this picturesque hill station is cradled by towering emerald peaks, including Naina Peak, Deopatha, and Ayarpatha. At an altitude of 2,084 meters, Nainital offers a refreshing escape from the sweltering heat of the northern plains. Whether you are cruising on the calm waters of the lake, walking along the colonial-styled Mall Road, or paying homage at the ancient Naina Devi temple, Nainital delivers an enchanting blend of natural beauty, spiritual tranquility, and legacy charm. A 3-day customized tour from Kanpur provides the perfect mountain getaway for families, couples, and nature lovers alike.",
    history:
      "The history of Nainital is deeply intertwined with British colonial rule. Prior to 1841, the lake was a sacred sanctuary known only to the local hill tribes. It was 'discovered' by P. Barron, a British sugar merchant from Shahjahanpur, who was so captivated by the lake that he constructed a house named Pilgrim Lodge here. Nainital quickly grew into a popular sanatorium and summer refuge for British officers. In 1850, the municipal board was established, and by the late 19th century, it became the summer capital of the United Provinces. A catastrophic landslide in 1880 reshaped the lakefront, leading to the creation of the current flats and recreation grounds. Today, the town retains its colonial-era legacy through boarding schools, stone churches, and heritage clubs.",
    significance:
      "Spiritual legends associate Nainital with the goddess Sati. It is believed to be one of the 51 Shakti Peeths where Sati's body parts fell during Lord Shiva's dance of cosmic destruction (Tandava). Specifically, Goddess Sati's left eye (nayan) is said to have fallen here, creating the emerald, eye-shaped lake, from which the town gets its name — Naini-tal. The local Kumaoni people also revere Lord Golu Devta and other folk deities, creating a unique spiritual culture in the hills. In Hindu scriptures, the lake is also referred to as the Tri-Rishi Sarovar, where the sages Atri, Pulastya, and Pulaha drank water and meditated.",
    attractions: [
      {
        name: "Naini Lake",
        description:
          "The central attraction of the town, where visitors can enjoy row-boating, pedal-boating, or yachting. The lake is surrounded by a scenic promenade, offering spectacular views of the reflection of mountain lights on the water during sunset.",
      },
      {
        name: "Naina Devi Temple",
        description:
          "Located on the northern shore of Naini Lake, this ancient temple is dedicated to Goddess Naina Devi. It also houses deities of Lord Ganesha and Goddess Kali, serving as a peaceful site for prayer and meditation.",
      },
      {
        name: "Snow View Point",
        description:
          "Accessible via a scenic aerial ropeway, this viewpoint offers panoramic vistas of the snow-capped Himalayan peaks, including Nanda Devi, Trishul, and Nanda Kot. The summit features a children's amusement park and stalls.",
      },
      {
        name: "Tiffin Top (Dorothy's Seat)",
        description:
          "A popular picnic spot located on Ayarpatha Hill, offering a 360-degree view of Nainital town and the surrounding Kumaon hills. It is named after Dorothy Kellett, an English artist who loved this location.",
      },
      {
        name: "G.B. Pant High Altitude Zoo",
        description:
          "One of the few high-altitude zoos in India, situated at 2,100 meters. It houses rare Himalayan wildlife species, including the snow leopard, Siberian tiger, red panda, Tibetan wolf, and golden pheasant.",
      },
    ],
    hiddenGems: [
      {
        name: "Pangot & Kilbury Bird Sanctuary",
        description:
          "Located 15 km from Nainital, Pangot is a tranquil village known for its dense oak forests and rich birdlife. With over 580 recorded bird species, it is a paradise for birdwatchers and hikers looking to escape the main town crowds.",
      },
      {
        name: "Eco Cave Gardens",
        description:
          "A network of interconnected natural rocky caves (named Tiger, Panther, Bat, and Monkey caves) that visitors can crawl through. It is an adventurous spot showcasing the geological patterns of the hills.",
      },
      {
        name: "Raj Bhawan",
        description:
          "The Governor's House, built in Victorian Gothic style in 1899, resembling Windsor Castle. It features a historic 18-hole golf course and sprawling gardens that are open to the public.",
      },
    ],
    festivals:
      "The Nanda Devi Mela (September) is the most significant cultural festival, marked by traditional Kumaoni dance, music, and a grand procession carrying the idol of Goddess Nanda Devi. The Autumn Festival (Sharadotsav) features cultural events, folk performances, and sports competitions on the flats near the lake.",
    food: "Nainital offers a variety of Kumaoni dishes. Try Bhatt ki Churkani (a rich black bean curry), Aaloo ke Gutke (spiced mountain potatoes), and Chainsoo (a roasted black gram lentil). For dessert, sample Bal Mithai (a chocolate-like fudge covered in sugar beads) and Singori (sweet khoya wrapped in Maalu leaves). Mall Road is also famous for hot momos and thukpa.",
    shopping:
      "Buy locally made aromatic paraffin candles in unique shapes (fruits, flowers, animals), pine cone decorations, Kumaoni wooden handicrafts, and high-quality woollens (shawls, cardigans, stoles) from the Bhotia Market (Tibet Market) near the flats.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Nainital & Lake Walk",
        description:
          "Drive from Kanpur to Nainital. Check into your lakeside hotel and rest. In the evening, enjoy a peaceful boat ride on Naini Lake, followed by a walk along the illuminated Mall Road. Overnight stay in Nainital.",
      },
      {
        day: 2,
        title: "Scenic Peaks & Temple Tour",
        description:
          "After breakfast, take the ropeway to Snow View Point. Visit Naina Devi Temple and the High Altitude Zoo. Hike up to Tiffin Top for lunch with a view. In the evening, visit the Eco Cave Gardens. Overnight stay.",
      },
      {
        day: 3,
        title: "Lake Tour (Bhimtal/Sattal) & Return",
        description:
          "Embark on a tour of the nearby lakes — Bhimtal, Naukuchiatal, and Sattal. Enjoy water activities at Naukuchiatal. Post-lunch, begin your return drive to Kanpur, arriving late at night.",
      },
    ],
    weather:
      "Nainital has pleasant summers (March to June, 15–28°C) that are ideal for sightseeing. The monsoon (July to September) brings mist and rain, transforming the hills into deep green but making travel slippery. Winters (October to February) are cold (0–15°C), with snowfall occurring between late December and January.",
    howToReach:
      "By road, Nainital is around 450 km from Kanpur (9–10 hours via Bareilly and Haldwani). The nearest railway station is Kathgodam (34 km), which connects to Lucknow, Kanpur, and Delhi. The nearest airport is Pantnagar (70 km), which has limited domestic flights. Rudra Tours offers direct AC cab services from Kanpur to Nainital.",
    accommodation:
      "Stays range from colonial-era heritage hotels (like The Manu Maharani and Alka The Lake Side Hotel) to boutique hill cottages and budget homestays. Government-run KMVN tourist rest houses offer scenic locations at reasonable rates.",
    tips: [
      "Carry woollens even in summer, as evenings can get chilly near the lake.",
      "Book boat rides only through authorized stands to ensure fixed pricing and safety gear.",
      "Wear comfortable walking shoes; Nainital's topography involves steep walking trails.",
      "Avoid traveling during peak monsoon due to the risk of landslides in the outer hills.",
      "Keep food items covered to avoid attracting monkeys around Tiffin Top and Snow View.",
    ],
    faqs: [
      {
        question: "What is the best time to see snow in Nainital?",
        answer:
          "Snowfall typically occurs between late December and mid-January. Snow View Point and Kilbury are the best locations to experience it.",
      },
      {
        question: "How far is Kathgodam from Nainital?",
        answer:
          "Kathgodam is about 34 km from Nainital. It takes roughly 1 hour by taxi to climb the winding mountain roads.",
      },
      {
        question: "Is Nainital crowded during the summer months?",
        answer:
          "Yes, May and June are peak tourist months. We recommend booking your stay and transport well in advance if planning a summer trip.",
      },
      {
        question: "Can we cover nearby lakes like Bhimtal in a single day?",
        answer:
          "Yes, our 3-day itinerary includes a dedicated day to tour the sister lakes — Bhimtal, Sattal, and Naukuchiatal, which are all within a 25-km radius of Nainital.",
      },
      {
        question: "Are plastic bags banned in Nainital?",
        answer:
          "Yes, Nainital strictly bans single-use plastic bags to protect the lake ecosystem. Visitors are encouraged to carry cloth or jute bags.",
      },
    ],
  },

  "mussoorie-tour": {
    overview:
      "Perched on a horseshoe-shaped ridge in the Garhwal Himalayas, Mussoorie is affectionately known as the 'Queen of the Hills.' At an altitude of 2,005 meters, this celebrated hill station in Uttarakhand offers stunning views of the snow-capped Himalayan peaks to the north and the sprawling Doon Valley to the south. Established as a sanatorium by British officers in the 1820s, Mussoorie has retained its old-world charm through grand libraries, old-style churches, and colonial mansions. From the cascading waters of Kempty Falls to the mist-covered paths of Lal Tibba, Mussoorie is a perfect mountain getaway. Our 3-day tour from Kanpur offers a well-planned itinerary to experience the natural beauty, cool climate, and romantic heritage of this iconic destination.",
    history:
      "Mussoorie was founded in 1823 by Captain Young, an adventurous British military officer, and Mr. Shore, the Superintendent of Revenues at Dehradun. They built a hunting lodge here, which paved the way for the establishment of a hill station. The name Mussoorie is derived from 'Mansoor,' a shrub indigenous to the area. It quickly became a popular summer retreat, preferred over Shimla by many British officers for its informal atmosphere. In 1832, the Great Trigonometrical Survey of India established an office here. In 1959, the Dalai Lama briefly took refuge in Mussoorie before establishing his government-in-exile in Dharamshala. Today, it is also famous as the home of legendary author Ruskin Bond.",
    significance:
      "While primarily a leisure destination, Mussoorie holds cultural significance as a gateway to the Char Dham pilgrimage sites (Yamunotri and Gangotri). The town is home to the Lal Bahadur Shastri National Academy of Administration (LBSNAA), where India's civil servants train, giving it a prestigious standing in modern India. The surrounding forests are rich in Himalayan biodiversity, featuring dense stands of oak, pine, and deodar trees that have inspired writers and poets for two centuries.",
    attractions: [
      {
        name: "Kempty Falls",
        description:
          "A majestic waterfall located 15 km from Mussoorie, where water cascades down from a height of 40 feet. The pool at the bottom is a popular spot for tourists to swim and splash in the cool mountain water.",
      },
      {
        name: "Lal Tibba",
        description:
          "The highest point in Mussoorie, located in Landour. It features a vintage telescope, offering close-up views of peaks like Badrinath, Kedarnath, and Bandarpoonch on clear days.",
      },
      {
        name: "Gun Hill",
        description:
          "The second-highest peak in Mussoorie, accessible via a ropeway from Mall Road. It offers panoramic views of the Doon Valley and is named after the cannon fired here during the colonial era to announce mid-day.",
      },
      {
        name: "Cloud's End",
        description:
          "Marking the geographical end of Mussoorie, this spot features an 1838 heritage bungalow surrounded by thick deodar forests, offering tranquility away from the main town.",
      },
      {
        name: "Company Garden",
        description:
          "A beautifully maintained municipal garden featuring a variety of flowers, an artificial mini waterfall, a small lake with paddle boats, and an amusement park for children.",
      },
    ],
    hiddenGems: [
      {
        name: "Landour Cantt",
        description:
          "A quiet cantonment area adjacent to Mussoorie, virtually untouched by commercialization. It features historic churches, peaceful walking trails (like Char Dukan and Sister's Bazaar), and the famous Landour Bakehouse.",
      },
      {
        name: "George Everest's House",
        description:
          "The historic home and laboratory of Sir George Everest, the Surveyor General of India after whom Mount Everest was named. Perched on a ridge, it offers stunning views of both the Himalayas and the plains.",
      },
      {
        name: "Jharipani Falls",
        description:
          "A secluded waterfall located 8 km from Mussoorie on the Dehradun road, accessible via a short trek through wild mountain flora.",
      },
    ],
    festivals:
      "The Mussoorie Writers Festival celebrates the town's literary heritage, drawing authors, poets, and publishers from across the country. The Summer Festival (June) features cultural events, games, and local performances organized by the tourism board.",
    food: "Mussoorie has a rich culinary heritage. Try the fresh apple pies, cinnamon rolls, and sticky buns at Landour's bakeries. Sample local Garhwali food like Kafuli (spinach dish) and Phaanu. Mall Road is lined with Tibetan eateries serving delicious thukpa, momos, and dry-fry noodles.",
    shopping:
      "Shop for hand-carved walking sticks made of local oak, handwoven Garhwali shawls, antique British-era brass items, wooden artifacts, and fresh jams and preserves made from mountain fruits (plums, apples, apricots) at Sister's Bazaar.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Mussoorie & Mall Road Walk",
        description:
          "Drive from Kanpur to Mussoorie (via Dehradun). Check into your hotel. In the evening, enjoy a leisurely stroll on the famous Mall Road, check out the colonial libraries, and enjoy dinner at a local bistro. Overnight stay in Mussoorie.",
      },
      {
        day: 2,
        title: "Kempty Falls & Gun Hill Vistas",
        description:
          "After breakfast, drive to the cascading Kempty Falls. Post-lunch, take the ropeway to Gun Hill. In the evening, explore Company Garden and watch the sunset from Camel's Back Road. Overnight stay.",
      },
      {
        day: 3,
        title: "Landour Heritage & Return",
        description:
          "Morning visit to the tranquil Landour cantonment, enjoy breakfast at Char Dukan, and visit Lal Tibba. Explore George Everest's House. Post-lunch, begin your drive back to Kanpur, arriving by late evening.",
      },
    ],
    weather:
      "Mussoorie is pleasant during summer (April to June, 15–25°C). Monsoon (July to September) brings heavy rainfall, turning the valley into a misty wonderland but causing travel delays. Winters (October to February) are cold (1–15°C) with snowfall occurring around late December and January.",
    howToReach:
      "By road, Mussoorie is approximately 580 km from Kanpur (11–12 hours via Dehradun). The nearest railway station is Dehradun (36 km), which is well-connected to major cities. The nearest airport is Jolly Grant Airport in Dehradun (54 km). Rudra Tours provides reliable door-to-door cab bookings from Kanpur.",
    accommodation:
      "Options include luxury heritage hotels (like Savoy and JW Marriott), mid-range hotels along Mall Road, and quaint homestays in Landour cantt. Booking in advance is recommended during peak summer weekends.",
    tips: [
      "Pack a light jacket or sweater even in summer, as the temperature drops quickly after sunset.",
      "Landour has strict traffic rules and limited parking; it is best explored on foot.",
      "Kempty Falls gets crowded by mid-day; visit early in the morning for a quieter experience.",
      "Walk along Camel's Back Road for a peaceful, vehicle-free experience in the evening.",
      "Check the weather and road status if traveling during the monsoon season.",
    ],
    faqs: [
      {
        question: "Is Kempty Falls safe for swimming?",
        answer:
          "Yes, the pool at the bottom is managed, and life jackets are available. However, be cautious during the monsoon when the water flow increases dramatically.",
      },
      {
        question: "How do we reach Landour from Mussoorie?",
        answer:
          "Landour is just 4 km from Mussoorie Mall Road. You can hike up, take a local cab, or drive. Note that heavy vehicles are not allowed on the narrow roads.",
      },
      {
        question: "Can we see snow in Mussoorie?",
        answer:
          "Yes, Mussoorie receives snowfall during late December and January. Lal Tibba and Dhanaulti (24 km away) are the best spots to see snow.",
      },
      {
        question: "Who is the famous author living in Mussoorie?",
        answer:
          "The legendary author Ruskin Bond lives in Landour, Mussoorie. He often meets readers at the Cambridge Book Depot on Mall Road on Saturdays.",
      },
      {
        question: "What is the 'Winter Line' phenomenon in Mussoorie?",
        answer:
          "The Winter Line is a unique atmospheric phenomenon where a sharp, multi-coloured horizon line appears in the sky during sunset. It is visible only from Mussoorie and parts of Switzerland between October and January.",
      },
    ],
  },

  "neem-karoli-kainchi-dham": {
    overview:
      "Kainchi Dham, a serene ashram nestled in the Kumaon hills near Nainital, has become a global centre of spiritual awakening. Established in 1962 by the legendary mystic Neem Karoli Baba (affectionately known as Maharaj-ji), the ashram sits in a picturesque valley at the confluence of two hills, shaped like scissors (kainchi). Made famous globally by visits from tech pioneers Steve Jobs and Mark Zuckerberg, Kainchi Dham draws searchers from all walks of life seeking peace, clarity, and devotion. Our 3-day pilgrimage package from Kanpur combines a soul-stirring visit to Kainchi Dham with sightseeing in Nainital and the scenic lake district of Bhimtal, offering a perfect blend of inner peace and mountain beauty.",
    history:
      "Neem Karoli Baba was a wandering saint who performed miracles and taught the path of bhakti (devotion) through simple service (seva) and love. He established the Kainchi Dham Ashram in 1962 alongside the revered saint Sombari Maharaj. The ashram started with small shrines dedicated to Hanuman Ji and has grown into a well-organized sanctuary. Maharaj-ji left his physical form in 1973, but his presence is felt deeply by devotees who visit his samadhi temple here. The ashram became globally renowned when Apple founder Steve Jobs visited in the 1970s, and later Facebook's Mark Zuckerberg came in 2015, seeking spiritual direction.",
    significance:
      "Kainchi Dham is considered a living temple of Hanuman devotion. Neem Karoli Baba was believed by many of his followers to be an avatar of Lord Hanuman. The ashram's philosophy is simple: 'Sab Ek' (All is One) and 'Love everyone, feed everyone, serve everyone.' Unlike commercialized religious sites, the ashram maintains a strict meditative atmosphere where devotees can sit quietly, participate in bhajan singing, and receive Maharaj-ji's blessings. The energy here is described as deeply calming, helping visitors connect with their inner self.",
    attractions: [
      {
        name: "Hanuman Ji Temple",
        description:
          "The central shrine of the ashram, housing a beautifully decorated idol of Lord Hanuman. Neem Karoli Baba spent much of his time here meditating and blessing devotees.",
      },
      {
        name: "Baba Neem Karoli Samadhi Temple",
        description:
          "The sacred shrine containing the samadhi of Maharaj-ji. Devotees sit in absolute silence here, meditating and absorbing the powerful spiritual vibrations.",
      },
      {
        name: "Kainchi Ashram Complex",
        description:
          "A beautifully maintained complex featuring clean pathways, green gardens, and the wooden rooms where Baba lived. The calm sound of the hill river flowing beside the ashram adds to the peace.",
      },
    ],
    hiddenGems: [
      {
        name: "Bhimtal Lake",
        description:
          "A scenic lake town located 20 km from Kainchi Dham, larger and quieter than Nainital. It features a historic island temple and offers tranquil boating and lakeside walks.",
      },
      {
        name: "Kakrighat Ashram",
        description:
          "Located 22 km from Kainchi Dham, this is where Swami Vivekananda meditated under a peepal tree in 1890 and experienced cosmic enlightenment. A deeply peaceful and historic spiritual site.",
      },
      {
        name: "Hanuman Garhi Temple, Nainital",
        description:
          "A hilltop Hanuman temple built by Neem Karoli Baba in the 1950s, offering spectacular sunset views over the plains.",
      },
    ],
    festivals:
      "The Ashram Foundation Day (June 15) is the grandest festival, attracting over 200,000 pilgrims. The entire valley is decorated, and a massive bhandara (community feast) serves the famous potato-curry and puri prasad to all visitors. Hanuman Jayanti is also celebrated with devotional singing and special rituals.",
    food: "The ashram distributes simple, delicious khichdi or halwa prasad to visitors. In the surrounding market, try the Kumaoni aloo-gutke, fresh cucumber salad with mustard paste (pahadi raita), and hot ginger tea. Nainital and Bhimtal offer diverse dining options, from local thalis to continental cafés.",
    shopping:
      "Pick up spiritual books on Neem Karoli Baba (such as 'Miracle of Love' and 'Be Here Now'), framed photographs of Maharaj-ji, locket pendants, devotional music CDs, and pure locally sourced honey and fruit squashes from the hill cooperatives.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Bhimtal/Nainital",
        description:
          "Drive from Kanpur to Nainital/Bhimtal. Check into your hotel. In the evening, enjoy a peaceful walk by Bhimtal Lake, visit the island aquarium café, and rest to prepare for your spiritual day. Overnight stay.",
      },
      {
        day: 2,
        title: "Pilgrimage to Kainchi Dham",
        description:
          "Early morning drive to Kainchi Dham Ashram. Participate in the morning prayers, meditate in the quiet temple complex, and receive the sacred prasad. Post-lunch, visit Kakrighat Ashram or Hanuman Garhi Temple. Overnight stay.",
      },
      {
        day: 3,
        title: "Nainital Sightseeing & Return",
        description:
          "Spend the morning boating on Naini Lake and visiting the Naina Devi Temple. Enjoy a traditional Kumaoni lunch, then begin your return drive to Kanpur, arriving late at night.",
      },
    ],
    weather:
      "The ashram is accessible year-round. October to March offers cool, pleasant weather (5–20°C) ideal for meditation. April to June is warm but comfortable. Monsoon (July to September) brings heavy rains, which makes the valley lush and green but requires checking road conditions. Winters can be cold, so warm clothing is essential.",
    howToReach:
      "Kainchi Dham is located on the Nainital-Almora road, 18 km from Nainital and 370 km from Kanpur (8–9 hours via Bareilly-Haldwani highway). Kathgodam is the nearest railway station (37 km). Pantnagar is the nearest airport (74 km). Rudra Tours provides direct, comfortable AC cabs from Kanpur.",
    accommodation:
      "There are no overnight stay facilities inside the ashram for casual visitors. We arrange comfortable hotel stays in Bhimtal or Nainital, which are 30–40 minutes away. Bhimtal offers quieter resorts, while Nainital provides classic lakeside hotels.",
    tips: [
      "Maintain strict silence and follow ashram decorum inside the temple complex.",
      "Photography and video recording are strictly prohibited inside the ashram premises.",
      "Wear decent, modest clothing that covers shoulders and knees.",
      "Arrive early in the morning (by 7 AM) to avoid long queues during weekends.",
      "Keep leather items (belts, wallets) in your bag or vehicle before entering shrines.",
    ],
    faqs: [
      {
        question: "Is online registration required to visit Kainchi Dham?",
        answer:
          "No prior registration or ticket is required to visit the ashram. It is open to all visitors during daytime hours.",
      },
      {
        question: "Who was Neem Karoli Baba?",
        answer:
          "Maharaj-ji was a highly revered saint of Northern India who taught devotion, love, and service. His simple teachings and spiritual aura attracted followers globally, including tech figures and spiritual seekers.",
      },
      {
        question: "Can we stay overnight inside the ashram?",
        answer:
          "No, overnight stays inside the ashram are reserved for long-term volunteers and require prior written permission from the ashram trust. Most visitors stay in Nainital or Bhimtal.",
      },
      {
        question: "Why did Steve Jobs and Mark Zuckerberg visit Kainchi Dham?",
        answer:
          "Steve Jobs visited in the 1970s looking for spiritual direction during a transition phase in his life. Mark Zuckerberg visited in 2015 on the advice of Jobs, during a critical period in Facebook's early years.",
      },
      {
        question: "Is the ashram open during the monsoon season?",
        answer:
          "Yes, the ashram remains open throughout the year. However, during June 15 (Foundation Day), the road traffic is heavily regulated due to massive crowds.",
      },
    ],
  },

  "kullu-manali": {
    overview:
      "Kullu and Manali, nested in the Beas River valley of Himachal Pradesh, represent the ultimate Himalayan holiday destination. Surrounded by towering pine forests, snow-clad peaks, and wild orchards, this scenic region offers a spectacular blend of natural beauty, cultural heritage, and thrilling adventure. Kullu, known as the 'Valley of Gods,' features sprawling meadows and historic temples, while Manali, located 40 km north, is a bustling hill town that serves as the gateway to the high-altitude landscapes of Lahaul, Spiti, and Ladakh. From the ancient Hadimba Temple to the snow activities at Solang Valley and the engineering marvel of Atal Tunnel, this 6-day tour from Kanpur provides an extensive mountain holiday.",
    history:
      "The Kullu Valley has a rich history dating back to antiquity. It was originally known as 'Kulanth Peeth,' meaning the end of the habitable world, which is mentioned in the Ramayana, Mahabharata, and Vishnu Purana. The valley was ruled by the local Pala dynasty for centuries before becoming a princely state under British protection. Manali gets its name from the Hindu lawgiver Manu. Legend says that Sage Manu stepped off his ark in Manali to recreate human life after a great flood. The old village houses a temple dedicated to him. In the 20th century, British settlers introduced apple orchards to the valley, which remain a major source of livelihood today.",
    significance:
      "Kullu is famous for its vibrant religious traditions, represented by over 300 local deities (Devtas) who travel to Kullu town for the grand Dussehra festival. The valley is also a major centre of Tibetan Buddhist culture, with beautiful monasteries in Manali. The Beas River (Vipasha in Sanskrit) is considered sacred, associated with the sage Vashishtha. The region's natural environment, from the cedar forests of Manali to the high-altitude cold desert of Lahaul, is protected under various conservation initiatives.",
    attractions: [
      {
        name: "Hadimba Temple",
        description:
          "A unique 16th-century wooden temple built in a pagoda style, dedicated to Goddess Hadimba, wife of Bhima. Situated amidst a dense cedar forest in Manali, it features intricate wooden door carvings.",
      },
      {
        name: "Solang Valley",
        description:
          "Himachal's adventure hub, famous for paragliding, zorbing, quad biking, and cable car rides in summer. During winter, it transforms into a snow resort offering skiing and snowboarding.",
      },
      {
        name: "Atal Tunnel & Sissu",
        description:
          "The world's longest highway tunnel above 10,000 feet, connecting Manali to the Lahaul Valley. Exiting the tunnel reveals Sissu, a scenic village with a grand waterfall set against a rugged mountain landscape.",
      },
      {
        name: "Vashishtha Temple & Hot Springs",
        description:
          "An ancient temple dedicated to Sage Vashishtha, famous for its natural hot sulfur springs that are believed to have therapeutic skin-healing properties.",
      },
      {
        name: "Kullu Shawl Factories",
        description:
          "Located along the highway, these handloom hubs showcase the weaving of authentic Kullu shawls, stoles, and caps, allowing visitors to watch artisans at work.",
      },
    ],
    hiddenGems: [
      {
        name: "Jogini Waterfall",
        description:
          "A scenic waterfall located near Vashishtha village, accessible via a beautiful 3-km trek through pine forests and apple orchards. Offers spectacular mountain views.",
      },
      {
        name: "Old Manali",
        description:
          "The quieter, older part of town featuring traditional Himachali wooden houses, cozy riverside cafés, and a laid-back backpacker atmosphere away from the busy Mall Road.",
      },
      {
        name: "Naggar Castle",
        description:
          "A 15th-century stone and wood palace built by Raja Sidh Singh of Kullu. It features a unique blend of Himalayan and European architecture and houses a gallery of Russian artist Nicholas Roerich's paintings.",
      },
    ],
    festivals:
      "Kullu Dussehra (October) is a world-famous week-long festival where local deities from all over the valley gather to pay homage to Lord Raghunath. The festival features vibrant folk dances, traditional music, and a grand fair. Manali's Winter Carnival (January) celebrates local culture with pageants, street dances, and winter sports.",
    food: "Himachali cuisine features rich, warm flavors. Try Siddu (steamed wheat bread stuffed with poppy seeds and served with ghee), Madra (chana cooked in yogurt and spices), and Kullu-style trout fish. Manali's cafés serve excellent Italian wood-fired pizzas, Tibetan momos, and traditional butter tea.",
    shopping:
      "Buy authentic handwoven Kullu shawls, wooden handicrafts, pure saffron, Himalayan dry fruits (apricots, walnuts), hand-knitted woollen socks, and traditional Himachali caps from the government emporiums or local cooperative shops.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Delhi/Chandigarh",
        description:
          "Begin your journey from Kanpur, driving to Chandigarh/Delhi for an overnight stay. Rest and prepare for the mountain drive.",
      },
      {
        day: 2,
        title: "Scenic Drive to Manali via Kullu",
        description:
          "Drive from Chandigarh to Manali, passing through Bilaspur and the scenic Kullu Valley. Stop at a Kullu shawl factory. Arrive in Manali by evening and check into your hotel. Overnight stay.",
      },
      {
        day: 3,
        title: "Manali Local Sightseeing",
        description:
          "Visit the historic Hadimba Temple and the ancient Manu Temple in Old Manali. Explore the Vashishtha Hot Springs and take a short hike to Jogini Waterfall. Evening walk on Mall Road. Overnight stay.",
      },
      {
        day: 4,
        title: "Atal Tunnel & Lahaul Valley",
        description:
          "Drive through the engineering marvel of Atal Tunnel into the rugged Lahaul Valley. Visit Sissu waterfall and enjoy the snow activities. Return to Manali by evening. Overnight stay.",
      },
      {
        day: 5,
        title: "Solang Valley Adventure & Naggar",
        description:
          "Spend the morning enjoying adventure sports (paragliding/skiing) in Solang Valley. In the afternoon, visit Naggar Castle and the Roerich Art Gallery. Overnight stay.",
      },
      {
        day: 6,
        title: "Return Drive to Kanpur",
        description:
          "Depart from Manali early in the morning. Drive back to Kanpur via Chandigarh/Delhi, arriving late at night with memorable mountain photos.",
      },
    ],
    weather:
      "Manali has pleasant summers (March to June, 10–25°C) perfect for sightseeing and paragliding. Monsoon (July to September) brings heavy rains and risk of landslides. Winters (October to February) are cold (-2 to 15°C) with snowfall happening between mid-December and January, turning the valley into a winter sports playground.",
    howToReach:
      "By road, Manali is about 950 km from Kanpur (usually covered with an overnight halt in Chandigarh/Delhi). The nearest airport is Bhuntar (Kullu, 50 km from Manali), which has limited flights. The nearest major railhead is Chandigarh. Rudra Tours handles the long-distance AC vehicle booking with expert highway drivers.",
    accommodation:
      "Stays range from luxury 5-star mountain resorts (like Span Resort and Manu Allaya) to cozy pine wood cottages, riverside boutique hotels, and budget guesthouses. Old Manali has great homestay options.",
    tips: [
      "Keep heavy woollens ready if visiting the Solang Valley or Rohtang Pass, even in summer.",
      "Permits are required for Rohtang Pass; our travel desk can help book these in advance.",
      "Hire snow gear (suits, boots) from government-approved shops along the Solang highway.",
      "Drink bottled mineral water and carry motion sickness medicine for the winding hill curves.",
      "Allow time for acclimating to the high altitude before participating in strenuous treks.",
    ],
    faqs: [
      {
        question: "Is the Atal Tunnel open year-round?",
        answer:
          "Yes, the tunnel remains open throughout the year. However, heavy winter snow can occasionally restrict access to the Lahaul side for a few days.",
      },
      {
        question: "Can we visit Rohtang Pass on this tour?",
        answer:
          "Rohtang Pass (51 km from Manali) is open from May to November. It requires special permits and green tax. We can customize the itinerary to include it based on weather and availability.",
      },
      {
        question: "How far is Solang Valley from Manali?",
        answer:
          "Solang Valley is approximately 14 km from Manali town. It takes about 30–40 minutes to reach depending on traffic.",
      },
      {
        question: "What is Kullu famous for?",
        answer:
          "Kullu is famous for its handwoven woollen shawls, apple orchards, river rafting on the Beas, and the world-famous Dussehra festival.",
      },
      {
        question: "Are adventure activities in Solang Valley safe?",
        answer:
          "Yes, local operators are licensed, and safety gear is provided. However, ensure you verify their credentials and choose activities matching your physical fitness.",
      },
    ],
  },

  "shimla-tour": {
    overview:
      "Shimla, the former summer capital of the British Raj and the current capital of Himachal Pradesh, is affectionately called the 'Queen of Hills.' Set on a ridge surrounded by thick pine and deodar forests, this elegant city offers a charming blend of Victorian architecture, mountain beauty, and a cool climate. At an altitude of 2,205 meters, Shimla features the iconic pedestrian Mall Road, the historic Christ Church, and the grand Viceregal Lodge. A 6-day package from Kanpur combines the heritage walks of Shimla with the scenic snow valleys of Kufri, the pine trails of Mashobra, and a ride on the famous Kalka-Shimla Toy Train — a UNESCO World Heritage site.",
    history:
      "Prior to the 19th century, Shimla was a small village known as Shyamala, named after a form of Goddess Kali. The British took control of the region after the Anglo-Nepalese War (1814–16). In 1822, Captain Charles Pratt Kennedy built the first British residence here. The cool climate attracted British officers, and in 1864, Viceroy John Lawrence officially declared Shimla the summer capital of British India. The entire administration moved from Calcutta to Shimla every summer. The city witnessed major historical events, including the Simla Conference of 1945 and the Shimla Agreement of 1972. The Kalka-Shimla railway, built in 1903, remains a testimony to British engineering.",
    significance:
      "Shimla is a historic administrative and cultural hub. The Viceregal Lodge (now the Indian Institute of Advanced Study) is where partition maps of India were drawn, making it a key site in modern history. The town's colonial architecture, from the Tudor-bethan styles of the Town Hall to the neo-Gothic Christ Church, represents one of the best-preserved British-era landscapes in Asia. The surrounding Shivalik forests are part of the eco-sensitive Himalayan watershed.",
    attractions: [
      {
        name: "The Ridge & Mall Road",
        description:
          "The pedestrian-only heart of Shimla, lined with shops, cafes, and colonial buildings. The Ridge offers panoramic mountain views and houses the iconic yellow-colored Christ Church (1857).",
      },
      {
        name: "Viceregal Lodge (IIAS)",
        description:
          "The spectacular Elizabethan-style stone palace that served as the residence of the British Viceroy. Surrounded by lush gardens, its teak-panelled interiors house historic photographs.",
      },
      {
        name: "Kufri",
        description:
          "Located 16 km from Shimla, Kufri is a scenic hill station famous for its snow parks, yak rides, and the panoramic views from Mahasu Peak. It is a popular spot for winter snow sports.",
      },
      {
        name: "Jakhoo Temple",
        description:
          "A hilltop temple dedicated to Lord Hanuman, situated at Shimla's highest point (8,000 feet). It features a massive 108-foot Hanuman statue and is populated by local monkeys.",
      },
      {
        name: "Kalka-Shimla Toy Train",
        description:
          "Enjoy a scenic ride on the historic narrow-gauge train as it winds through lush valleys, pine forests, and over 100 tunnels. A UNESCO World Heritage site.",
      },
    ],
    hiddenGems: [
      {
        name: "Mashobra",
        description:
          "A quiet, forested village located 13 km from Shimla, covered with dense orchards and oak trees. It houses the President's Retreat and offers peaceful forest walks away from the city.",
      },
      {
        name: "Naldehra Golf Course",
        description:
          "One of the oldest and most scenic 9-hole golf courses in India, situated amidst tall deodar trees at an altitude of 2,200 meters. Designed by Lord Curzon in the early 1900s.",
      },
      {
        name: "Chadwick Falls",
        description:
          "A secluded waterfall located 7 km from Shimla, cascading down 86 meters inside a deep glen of pine and oak trees.",
      },
    ],
    festivals:
      "The Shimla Summer Festival (June) is a grand 5-day cultural event featuring folk dances, music concerts, and exhibitions. The Ice Skating Carnival (December–January) at the open-air rink features ice skating pageants, dances, and sports.",
    food: "Shimla's food is hearty and warm. Try Siddu, Madra, and Chha Gosht (spiced lamb cooked in buttermilk). The Mall Road features classic heritage cafes serving excellent coffee, pastries, English breakfasts, and traditional hot soup-noodles.",
    shopping:
      "Shop for beautiful wooden toys, walking sticks, local woollen shawls, Kullu caps, fresh Himachali apples, pine wood handicrafts, and colorful handmade carpets from the Lakkar Bazaar adjacent to the Ridge.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Chandigarh",
        description:
          "Depart from Kanpur early morning, drive to Chandigarh (approx 9 hours). Check into your hotel and rest. Overnight stay in Chandigarh.",
      },
      {
        day: 2,
        title: "Scenic Drive to Shimla",
        description:
          "Drive from Chandigarh to Shimla (3–4 hours), climbing through the Solan hills. Check into your heritage hotel. Evening walk on Mall Road and the Ridge. Overnight stay.",
      },
      {
        day: 3,
        title: "Shimla Heritage Walk & Jakhoo Peak",
        description:
          "After breakfast, visit the Viceregal Lodge. Hike or take the ropeway to Jakhoo Temple on the peak. Explore Lakkar Bazaar and have dinner at a Mall Road cafe. Overnight stay.",
      },
      {
        day: 4,
        title: "Snow Valley Tour (Kufri)",
        description:
          "Spend the day exploring Kufri, enjoy horse riding to Mahasu Peak, and visit the Himalayan Nature Park. Return to Shimla for a quiet evening. Overnight stay.",
      },
      {
        day: 5,
        title: "Mashobra Pine Trails & Naldehra",
        description:
          "Drive to the pine-forested Mashobra for a morning walk. Visit the historic Naldehra Golf Course. Enjoy a scenic ride on the Toy Train in the afternoon. Overnight stay.",
      },
      {
        day: 6,
        title: "Return Drive to Kanpur",
        description:
          "Depart from Shimla early morning. Drive back to Kanpur via Chandigarh/Delhi, arriving late at night with sweet memories of the hills.",
      },
    ],
    weather:
      "Shimla is pleasant during summer (April to June, 15–28°C) ideal for walks. Monsoon (July to September) brings mist and rain. Winters (October to February) are cold (0–15°C) with snowfall occurring around late December and January, transforming the colonial town into a white wonderland.",
    howToReach:
      "By road, Shimla is approximately 820 km from Kanpur (usually covered with a Chandigarh night stay). The Kalka-Shimla railway connects Shimla to Kalka. Shimla Airport (Jubarhatti) has limited flights; Chandigarh airport is the major hub. Rudra Tours handles all road transfers in comfortable AC cabs.",
    accommodation:
      "Options include luxury colonial heritage hotels (like Cecil - Oberoi and Woodville Palace), boutique resorts in Mashobra, and comfortable mid-range hotels near Mall Road. Early booking is recommended for summer weekends.",
    tips: [
      "Carry woollens even in summer as mountain winds can make the evenings cold.",
      "Shimla Mall Road is a vehicle-free zone; be prepared to walk or use the municipal elevators.",
      "Jakhoo Temple monkeys are notoriously active; avoid carrying loose bags or wearing glasses.",
      "Book Toy Train tickets weeks in advance as seats are highly sought after during holiday seasons.",
      "Respect the mountain ecology; do not litter or use single-use plastics.",
    ],
    faqs: [
      {
        question: "Is the Toy Train ride worth it?",
        answer:
          "Absolutely. The Kalka-Shimla Toy Train is a UNESCO World Heritage site and offers a highly scenic journey through pine forests, tunnels, and stone bridges.",
      },
      {
        question: "How far is Kufri from Shimla?",
        answer:
          "Kufri is about 16 km from Shimla, which takes roughly 45 minutes to drive depending on peak season traffic.",
      },
      {
        question: "What is special about the Jakhoo Hanuman statue?",
        answer:
          "The Jakhoo Hanuman statue is 108 feet tall, standing at an altitude of 8,100 feet. It is one of the tallest statues of Lord Hanuman in the world, visible from most parts of Shimla.",
      },
      {
        question: "Can we golf at Naldehra?",
        answer:
          "Yes, the historic Naldehra Golf Club is open to visitors for green fees. You can hire a local caddie and enjoy walks along the scenic fairways.",
      },
      {
        question: "Are cars allowed on Mall Road?",
        answer:
          "No, Shimla Mall Road and the Ridge are strictly pedestrian-only zones to preserve the heritage character. Vehicles are parked at multi-level city parking lots below.",
      },
    ],
  },

  "vaishno-devi": {
    overview:
      "This grand 10-day pilgrimage and mountain holiday combines the sacred trek to Mata Vaishno Devi in Katra with the breathtaking alpine landscapes of Kashmir — Gulmarg, Sonmarg, and Srinagar. Vaishno Devi, located in the Trikuta Hills of Jammu, is one of India's most revered Shakti shrines, attracting millions of devotees who climb the 12-km mountain path to seek the blessings of the Mother Goddess. Following the pilgrimage, the tour takes you on a journey into Kashmir, the 'Paradise on Earth.' From the floating houseboats of Dal Lake to the snow-covered slopes of Gulmarg and the glaciers of Sonmarg, this comprehensive tour from Kanpur is the ultimate family holiday blending deep devotion with breathtaking scenery.",
    history:
      "The holy cave of Vaishno Devi has been a place of worship since time immemorial, with references found in the Mahabharata when Arjuna prayed to the Mother Goddess for victory. The cave was reportedly discovered by a local priest named Pandit Shridhar, who had a vision of Vaishno Devi in the form of a young girl. Kashmir, on the other hand, boasts a rich cultural history spanning Hindu, Buddhist, and Islamic eras. Srinagar was established by Emperor Ashoka in the 3rd century BCE. Gulmarg, originally called 'Gaurimarg' in honor of Goddess Parvati, was renamed by Sultan Yusuf Shah in the 16th century, captivated by its wild flower meadows. Sonmarg, meaning 'Meadow of Gold,' served as an ancient gateway on the Silk Route connecting Kashmir to Tibet and Central Asia.",
    significance:
      "Vaishno Devi is revered as a manifestation of the supreme mother goddess, containing three natural rock formations (Pindis) representing Maha Kali, Maha Lakshmi, and Maha Saraswati. Unlike standard temple idols, the Pindis represent the formless, eternal energy of the divine. Kashmir holds profound spiritual significance in both Hinduism and Buddhism. It is the birthplace of Kashmir Shaivism, a major tantric philosophy, and is home to the sacred Amarnath cave. The region's natural environment, from the high alpine meadows to the pine-rimmed lakes, has been celebrated by Persian and Mughal poets as the peak of natural beauty on earth.",
    attractions: [
      {
        name: "Holy Cave of Mata Vaishno Devi",
        description:
          "The ultimate destination of the Katra trek. Devotees walk through a natural cave to witness the three sacred Pindis representing the Mother Goddess, filled with intense spiritual energy.",
      },
      {
        name: "Gulmarg Gondola",
        description:
          "One of the highest cable cars in the world, taking visitors up to Apharwat Peak at 13,780 feet. It offers spectacular close-up views of the Pir Panjal range and snow activities.",
      },
      {
        name: "Thajiwas Glacier, Sonmarg",
        description:
          "A stunning glacier located 3 km from Sonmarg, accessible via a pony ride or hike. Covered in snow year-round, it features small waterfalls and streams.",
      },
      {
        name: "Dal Lake Houseboat & Shikara Ride",
        description:
          "Stay in a traditional carved wooden houseboat in Srinagar, and enjoy a gentle Shikara (gondola) ride across the lake, visiting floating vegetable markets and gardens.",
      },
      {
        name: "Mughal Gardens (Shalimar & Nishat)",
        description:
          "Terraced lawns, cascading fountains, and ancient chinar trees designed by Mughal emperors Jahangir and Shah Jahan, set against the backdrop of the Zabarwan hills.",
      },
    ],
    hiddenGems: [
      {
        name: "Ardhkuwari Cave",
        description:
          "A midway stop on the Vaishno Devi trek where the Goddess is believed to have meditated for nine months in a womb-like cave (Garbhjun) before slaying the demon Bhairon Nath.",
      },
      {
        name: "Betaab Valley, Pahalgam",
        description:
          "A scenic valley named after the Bollywood film Betaab, featuring crystal-clear streams, pine-forested hills, and wild green meadows.",
      },
      {
        name: "Naranag Ruins",
        description:
          "Located near Sonmarg, these are the ruins of an 8th-century temple complex dedicated to Lord Shiva, built by King Lalitaditya, offering absolute peace and history.",
      },
    ],
    festivals:
      "Navratri (September–October and March–April) is celebrated with grand pageantry in Katra, with the temple adorned in imported fresh flowers and special yatra tracks organized. Srinagar's Tulip Festival (April) showcases millions of blooming tulips in Asia's largest tulip garden, marking the arrival of spring.",
    food: "Katra offers strictly vegetarian, no-onion-garlic food at its dharamshalas and eateries. Kashmir's cuisine is famous for Wazwan (a multi-course feast featuring dishes like Rogan Josh and Gushtaba) and vegetarian specialties like Dum Aloo and Lyodur Tschaman (cottage cheese in turmeric gravy). Drink Kahwa, a traditional green tea brewed with saffron, almonds, and cardamom.",
    shopping:
      "In Katra, buy sacred dry fruits (walnuts, almonds), temple coins, red chunris, and saffron. In Kashmir, shop for authentic Pashmina shawls, hand-knotted silk carpets, carved walnut-wood furniture, saffron, papier-mâché crafts, and fresh apples.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Jammu/Katra",
        description:
          "Depart from Kanpur, drive to Katra with an overnight halt. Reach Katra by evening, check into your hotel, and prepare for the pilgrimage.",
      },
      {
        day: 2,
        title: "Vaishno Devi Trek",
        description:
          "Begin the 12-km trek to the Holy Cave early morning (on foot, pony, or yatra services). Perform darshan of the sacred Pindis. Visit Bhairon Ghati, then return to Katra by night. Overnight stay.",
      },
      {
        day: 3,
        title: "Rest Day & Drive to Srinagar",
        description:
          "Enjoy a relaxed breakfast. Drive from Katra to Srinagar (6-7 hours) through the scenic Banihal Tunnel. Check into your deluxe houseboat on Dal Lake. Overnight stay.",
      },
      {
        day: 4,
        title: "Srinagar Local Sightseeing",
        description:
          "Visit the world-famous Shalimar Bagh, Nishat Bagh, and Shankaracharya Temple on a hilltop. In the evening, enjoy a 2-hour Shikara ride on Dal Lake. Overnight stay on houseboat.",
      },
      {
        day: 5,
        title: "Gulmarg Day Trip",
        description:
          "Drive to Gulmarg (2 hours). Ride the famous Gondola Cable Car (Phase 1 & 2) up to Apharwat Peak. Enjoy snow walks or skiing. Return to Srinagar for overnight stay.",
      },
      {
        day: 6,
        title: "Sonmarg Day Trip",
        description:
          "Drive to the 'Meadow of Gold' Sonmarg. Visit the majestic Thajiwas Glacier on a pony. Enjoy the rugged mountain scenery. Return to Srinagar for overnight stay.",
      },
      {
        day: 7,
        title: "Pahalgam Exploration",
        description:
          "Drive to Pahalgam (2.5 hours), visiting saffron fields en route. Explore Betaab Valley and Aru Valley. Enjoy walks along the Lidder River. Overnight stay in Pahalgam.",
      },
      {
        day: 8,
        title: "Pahalgam to Jammu",
        description:
          "Drive from Pahalgam back to Jammu (7-8 hours). Check into your hotel. Visit the Raghunath Temple in the evening. Overnight stay in Jammu.",
      },
      {
        day: 9,
        title: "Jammu to Kanpur Return Drive",
        description:
          "Begin the return drive from Jammu to Kanpur, with an overnight halt en route, arriving home on Day 10 with divine blessings and beautiful mountain memories.",
      },
    ],
    weather:
      "Vaishno Devi is open year-round. Katra is pleasant in spring/autumn and cold in winter. Kashmir is spectacular in summer (April to June, 15–25°C) and winter (December to February, -5 to 10°C) when Gulmarg receives heavy snow. Monsoon (July–August) sees rain in Kashmir, but it remains accessible.",
    howToReach:
      "The road distance from Kanpur to Katra is about 1,050 km, and Srinagar is another 260 km. Jammu Tawi and Katra railway stations connect directly to major hubs. Srinagar Airport has direct domestic flights. Rudra Tours handles all road transfers in comfortable AC vehicles with experienced hill drivers.",
    accommodation:
      "We arrange comfortable 3-star and 4-star hotels in Katra, Jammu, and Pahalgam, deluxe houseboats on Dal Lake (Srinagar), and premium mountain hotels in Srinagar and Gulmarg.",
    tips: [
      "Carry valid photo ID (Aadhaar Card) — mandatory for Vaishno Devi RFID yatra card registration.",
      "Book Gulmarg Gondola tickets online weeks in advance; they sell out completely.",
      "Wear modest clothing for temple visits; dress in layers for Kashmir as mountain temperatures vary.",
      "Keep cash handy; many local pony riders and shikara rowers in Kashmir do not accept digital payments.",
      "Pack comfortable, sturdy walking shoes for the 12-km Vaishno Devi trek.",
    ],
    faqs: [
      {
        question: "What is the RFID card at Vaishno Devi?",
        answer:
          "The RFID card is a mandatory tracking card issued free of cost at the Katra counter or online. All pilgrims must carry it during the trek for safety and queue management.",
      },
      {
        question: "Is the helicopter service available for Vaishno Devi?",
        answer:
          "Yes, helicopter services operate from Katra to Sanjichhat (2 km from the cave). Tickets must be booked in advance via the official shrine board website.",
      },
      {
        question: "Can we experience snow in Gulmarg in summer?",
        answer:
          "Phase 2 of the Gulmarg Gondola (Apharwat Peak) often has snow patches well into June. For fresh snow, visit between December and March.",
      },
      {
        question: "Are houseboats on Dal Lake safe for children?",
        answer:
          "Yes, houseboats are permanently moored and very stable. They offer carpeted rooms, heating facilities, and running water, making them perfect for families.",
      },
      {
        question: "How long does it take to complete the Vaishno Devi yatra?",
        answer:
          "The walk up takes 4–6 hours, and darshan queues can take 1–3 hours. Most pilgrims complete the round trip from Katra within 12–16 hours.",
      },
    ],
  },

  "jaipur-tour": {
    overview:
      "Jaipur, the capital of Rajasthan, is globally celebrated as the 'Pink City' due to the distinctive terracotta-pink color of its historic buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city, built according to the principles of Vastu Shastra and Shilpa Shastra. Surrounded by rugged hills and fortified walls, this UNESCO World Heritage city features grand hilltop palaces, astronomical observatories, and bustling bazaars. From the honeycomb facade of Hawa Mahal to the mirror-work of Amer Fort and the floating beauty of Jal Mahal, Jaipur is a treasure trove of royal heritage. Our 3-day tour from Kanpur offers an optimized itinerary to experience the history, architecture, and vibrant culture of this historic city.",
    history:
      "Jaipur was established in 1727 when Maharaja Sawai Jai Singh II decided to shift his capital from Amer due to water scarcity and growing population. He collaborated with Vidyadhar Bhattacharya, a brilliant Bengali architect, to design the grid-patterned city. In 1876, Maharaja Ram Singh ordered the entire city to be painted pink to welcome Prince Albert (later King Edward VII), as pink was considered the color of hospitality. The tradition has been maintained by law ever since. Under successive rulers, Jaipur became a major centre for jewelry, arts, and military power, eventually merging into the state of Rajasthan after India's independence.",
    significance:
      "Jaipur is a cornerstone of India's 'Golden Triangle' tourism circuit. It stands as a brilliant example of early modern town planning, combining traditional Hindu architecture with Mughal and European influences. The city is also a major global hub for gemstone cutting, block printing, and blue pottery, keeping centuries-old artisanal traditions alive. The royal family still resides in a private wing of the City Palace, maintaining a direct connection to the city's historical legacy.",
    attractions: [
      {
        name: "Amer Fort",
        description:
          "The majestic hilltop fort built of yellow and pink sandstone, famous for its artistic Hindu elements. The Sheesh Mahal (Mirror Palace), adorned with thousands of concave mirrors, is its architectural highlight.",
      },
      {
        name: "Hawa Mahal (Palace of Winds)",
        description:
          "A five-storey pink sandstone facade featuring 953 small casements (jharokhas). Built in 1799, it allowed royal ladies to observe street festivals without being seen from the outside.",
      },
      {
        name: "City Palace",
        description:
          "The royal residence featuring a blend of Rajasthani and Mughal architecture. It houses museums showcasing royal costumes, weapons, and two giant silver urns — the largest in the world.",
      },
      {
        name: "Jantar Mantar",
        description:
          "A UNESCO World Heritage site featuring nineteen architectural astronomical instruments built by Jai Singh II, including the world's largest stone sundial.",
      },
      {
        name: "Jal Mahal",
        description:
          "The beautiful palace situated in the middle of Man Sagar Lake. The light-colored sandstone structure appears to float on the water, especially photogenic during sunset.",
      },
    ],
    hiddenGems: [
      {
        name: "Galta Ji (Monkey Temple)",
        description:
          "An ancient Hindu pilgrimage site set in a narrow mountain pass, famous for its natural fresh water springs, sacred bathing tanks (kunds), and a large population of friendly rhesus monkeys.",
      },
      {
        name: "Panna Meena ka Kund",
        description:
          "An exquisite 16th-century stepwell near Amer Fort, famous for its symmetrical criss-cross steps, geometric architecture, and historical role as a community gathering spot.",
      },
      {
        name: "Nahargarh Fort Sunset View",
        description:
          "Perched on the edge of the Aravalli hills, Nahargarh Fort offers the absolute best panoramic view of the entire Jaipur city illuminated at dusk.",
      },
    ],
    festivals:
      "The Jaipur Literature Festival (January) is the world's largest free literary festival, drawing global authors and thinkers. Gangaur (March–April) and Teej (July–August) are traditional festivals marked by colorful processions of Goddess Parvati through the old city gates.",
    food: "Jaipur's food is rich in ghee and spices. Try Dal Baati Churma (baked wheat balls with lentils and sweet crumbled wheat), Pyaaz Kachori at Rawat Mishtan Bhandar, Lal Maas (spiced mutton curry), and Mirchi Vada. For sweets, sample Ghevar (a honeycombed disc sweet) and Mawa Kachori.",
    shopping:
      "Jaipur is a shopper's paradise. Buy precious gemstones and jewelry from Johari Bazaar, blue pottery from Sanganer, handblock-printed textiles, traditional leather mojari shoes from Mojari Gali, and colorful lac bangles from Bapu Bazaar.",
    itinerary: [
      {
        day: 1,
        title: "Drive to Jaipur & Royal Dinner",
        description:
          "Drive from Kanpur to Jaipur (approx 7-8 hours). Check into your heritage hotel. In the evening, visit Chokhi Dhani, an ethnic village resort, to experience traditional Rajasthani folk dances, puppet shows, and a royal feast. Overnight stay in Jaipur.",
      },
      {
        day: 2,
        title: "Historic Palaces & Amer Fort",
        description:
          "After breakfast, drive to the Amer Fort (enjoy an elephant or jeep ride to the top). Stop at Jal Mahal for photographs. Post-lunch, explore the City Palace, Jantar Mantar observatory, and click photos at Hawa Mahal. Enjoy sunset at Nahargarh Fort. Overnight stay.",
      },
      {
        day: 3,
        title: "Bazaars, Stepwells & Return",
        description:
          "Visit the beautiful Panna Meena stepwell and the Monkey Temple. Spend the afternoon shopping in Bapu Bazaar and Johari Bazaar. Depart for Kanpur by late afternoon, arriving home by midnight.",
      },
    ],
    weather:
      "The best time to visit Jaipur is from October to March (10–25°C) when the weather is cool and pleasant for sightseeing. Summers (April to June) are dry and hot (35–45°C). The monsoon (July to September) brings cooler temperatures and turns the surrounding Aravalli hills green.",
    howToReach:
      "By road, Jaipur is approximately 520 km from Kanpur via the NH-21 highway (7–8 hours of driving). Jaipur Junction is a major railway station connecting to Lucknow and Kanpur. Jaipur Airport has domestic flights. Rudra Tours handles all road travel in comfortable AC sedans or SUVs.",
    accommodation:
      "Stays range from authentic heritage Havelis (like Samode Haveli and Alsisar Haveli) to grand luxury hotels and budget stays. We recommend staying in a heritage property to fully experience Rajasthani hospitality.",
    tips: [
      "Hire a licensed tourist guide at Amer Fort and Jantar Mantar to understand the architecture and history.",
      "Wear comfortable slip-on shoes as you'll need to remove them frequently at temples and stepwells.",
      "Be prepared to bargain politely in the traditional bazaars of the old city.",
      "Carry sunscreen, sunglasses, and a hat to protect against the daytime sun.",
      "Visit the Hawa Mahal early in the morning when the rising sun illuminates the pink facade.",
    ],
    faqs: [
      {
        question: "Why is Jaipur called the Pink City?",
        answer:
          "In 1876, Maharaja Ram Singh ordered the entire city to be painted terracotta-pink to welcome Prince Albert of Britain, as pink is the traditional color of hospitality. The city maintains this color scheme by law today.",
      },
      {
        question: "Is Chokhi Dhani worth visiting?",
        answer:
          "Yes, it is highly recommended for families. It offers a complete showcase of Rajasthani village culture, traditional arts, games, and an authentic sit-down dinner served on leaf platters.",
      },
      {
        question: "How do we reach Amer Fort?",
        answer:
          "Amer Fort is located on a hill 11 km from Jaipur. You can take an elephant ride, a jeep transfer, or drive your own vehicle to the parking lot near the entrance.",
      },
      {
        question: "What is Jantar Mantar?",
        answer:
          "Jantar Mantar is an astronomical observatory built in 1734. It features 19 giant stone instruments used to measure time, predict eclipses, and track stars. It houses the world's largest sundial.",
      },
      {
        question: "Are credit cards accepted in Jaipur markets?",
        answer:
          "Most established shops accept cards and mobile payments (UPI). However, small street vendors in Bapu Bazaar and Johari Bazaar prefer cash.",
      },
    ],
  },

  "rajasthan-heritage": {
    overview:
      "This extensive 6-day heritage tour covers the grand 'Royal Triangle' of Rajasthan — Jaipur, Jodhpur, and Udaipur. From the pink sandstone palaces of Jaipur and the towering blue-painted streets of Jodhpur under Mehrangarh Fort, to the romantic white marble palaces of Udaipur set around Lake Pichola, this tour offers a complete immersion into the royal history, military architecture, and lakes of India's most colorful desert state. Our planned itinerary from Kanpur provides comfortable road travel, stays in heritage hotels, and expert sightseeing at each royal capital.",
    history:
      "The history of Rajasthan is a saga of legendary Rajput dynasties — the Kachwahas of Jaipur, the Rathores of Marwar (Jodhpur), and the Sisodias of Mewar (Udaipur). For centuries, these kingdoms constructed massive forts and palaces that served as centres of military power and arts. Jaipur was planned in 1727 as a commercial capital. Jodhpur, founded in 1459 by Rao Jodha, was a major hub on the trade routes connecting Delhi to the ports of Gujarat. Udaipur was established in 1553 by Maharana Udai Singh II as a more secure capital for Mewar after the siege of Chittorgarh. The state was formed by merging these princely kingdoms after 1947.",
    significance:
      "Rajasthan represents the peak of Indian royal heritage. Its forts (like Amer and Mehrangarh) and lake palaces are recognized globally for their unique defensive and aesthetic architecture. The state is also a major cultural hub, keeping folk music (Langa and Manganiyar), dance (Ghoomar and Kalbelia), puppet arts, and handloom weaving alive. The palaces, stepwells, and cenotaphs stand as a tribute to ancient Indian water harvesting and architectural science.",
    attractions: [
      {
        name: "Mehrangarh Fort, Jodhpur",
        description:
          "One of India's largest and most imposing forts, rising 400 feet above the blue city. It houses a museum displaying royal palanquins, howdahs, and armor, with stunning views from the ramparts.",
      },
      {
        name: "Lake Pichola & City Palace, Udaipur",
        description:
          "The romantic heart of Udaipur. Visit the grand City Palace complex, then take a sunset boat cruise on Lake Pichola, passing the floating Taj Lake Palace.",
      },
      {
        name: "Amer Fort & Hawa Mahal, Jaipur",
        description:
          "The key highlights of the Pink City, showcasing the blend of Rajput and Mughal architecture in red sandstone and white marble.",
      },
      {
        name: "Jaswant Thada, Jodhpur",
        description:
          "An elegant white marble cenotaph built in 1899 in memory of Maharaja Jaswant Singh II, set beside a peaceful lake, often called the 'Taj Mahal of Marwar.'",
      },
      {
        name: "Saheliyon-ki-Bari, Udaipur",
        description:
          "The 'Garden of the Maidens,' featuring marble fountains, lotus pools, and pavilions designed for the royal ladies and their companions.",
      },
    ],
    hiddenGems: [
      {
        name: "Sajjangarh Monsoon Palace",
        description:
          "A hilltop palace overlooking Udaipur's lakes, built by Maharana Sajjan Singh to watch monsoon clouds, offering spectacular panoramic sunset views.",
      },
      {
        name: "Toorji ka Jhalra, Jodhpur",
        description:
          "A beautifully restored 18th-century stepwell in Jodhpur, showcasing geometric step patterns, now surrounded by trendy cafés.",
      },
      {
        name: "Ranakpur Jain Temple",
        description:
          "Located en route from Jodhpur to Udaipur, this 15th-century marble temple features 1,444 uniquely carved pillars, no two of which are identical.",
      },
    ],
    festivals:
      "The Mewar Festival in Udaipur (March–April) welcomes spring with traditional music, dance, and a colorful procession of boats on Lake Pichola. Jodhpur's RIFF (Rajasthan International Folk Festival) in October brings global musicians together inside Mehrangarh Fort.",
    food: "Sample Rajasthani classics across three regions: Dal Baati Churma in Jaipur, Mirchi Vada and Mawa Kachori in Jodhpur, and traditional Mewari thalis in Udaipur. Lal Maas (spiced mutton curry) and Gatte ki Sabzi (gram flour dumplings in yogurt gravy) are must-tries.",
    shopping:
      "Buy block-printed fabrics in Jaipur, Jodhpur's famous spices (Mathaniya red chilies) and hand-dyed bandhani textiles, and Udaipur's miniature Mewar-style paintings and silver handicrafts from local cooperatives.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Jaipur",
        description:
          "Depart Kanpur early morning, drive to Jaipur (7-8 hours). Check into your heritage haveli. Spend the evening exploring Bapu Bazaar or visiting Chokhi Dhani ethnic resort. Overnight stay.",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing to Jodhpur",
        description:
          "Morning visit to Amer Fort and Jal Mahal. Post-lunch drive to the Blue City, Jodhpur (6 hours). Check into your hotel. Overnight stay in Jodhpur.",
      },
      {
        day: 3,
        title: "Jodhpur Blue City Tour",
        description:
          "Visit Mehrangarh Fort, Jaswant Thada, and the restored Toorji stepwell. Enjoy a walk through the blue-painted lanes of the old city and shop at Clock Tower market. Overnight stay.",
      },
      {
        day: 4,
        title: "Jodhpur to Udaipur via Ranakpur",
        description:
          "Drive to Udaipur (5-6 hours), stopping en route at the carved Ranakpur Jain Temple. Arrive in Udaipur by evening, check into your lakeside hotel. Overnight stay.",
      },
      {
        day: 5,
        title: "Udaipur Lakes & Palaces",
        description:
          "Visit the City Palace complex and Saheliyon-ki-Bari. In the afternoon, enjoy a scenic boat ride on Lake Pichola. Watch the sunset from the Monsoon Palace. Overnight stay.",
      },
      {
        day: 6,
        title: "Return Drive to Kanpur",
        description:
          "Depart Udaipur early morning. Begin the return drive back to Kanpur (approx 12 hours with stops), arriving late at night with royal memories.",
      },
    ],
    weather:
      "The best time for this tour is from October to March (12–28°C) when temperatures are pleasant. April to June is extremely hot (38–46°C). The monsoon (July to September) makes Udaipur's lakes full and the desert hills green, offering a unique off-season travel experience.",
    howToReach:
      "The total route covers approximately 1,800 km. Jaipur is 520 km from Kanpur, Jodhpur is 330 km from Jaipur, and Udaipur is 250 km from Jodhpur. All cities are well-connected by highways and rail. Rudra Tours manages the entire road circuit in comfortable AC vehicles.",
    accommodation:
      "We arrange stays in historic heritage Havelis and boutique hotels in all three cities (such as Samode Haveli in Jaipur, Mandore Guest House in Jodhpur, and Jagmandir Island Palace or lakeside heritage properties in Udaipur).",
    tips: [
      "Carry comfortable walking shoes as exploring forts involves climbing stone ramps.",
      "Hire local guides inside Mehrangarh Fort and Udaipur City Palace to appreciate the history.",
      "Check boat ride timings on Lake Pichola; sunset cruises must be booked in advance.",
      "Pack sunscreen, sunglasses, and a hat for the bright desert sun.",
      "Bargain politely in Jodhpur's Clock Tower market and Jaipur's bazaars.",
    ],
    faqs: [
      {
        question: "Why are houses in Jodhpur painted blue?",
        answer:
          "Houses were traditionally painted indigo-blue by Brahmins to keep them cool in summer and ward off mosquitoes. Today, it has become a trademark of the old city under Mehrangarh Fort.",
      },
      {
        question: "Is the Ranakpur temple stop included in the package?",
        answer:
          "Yes, our itinerary includes a dedicated stop at Ranakpur on the drive from Jodhpur to Udaipur. It is one of the most beautiful Jain temples in India.",
      },
      {
        question: "Can we stay in a palace hotel?",
        answer:
          "Yes. Rajasthan has many heritage properties converted from palaces. We can upgrade your package to include stays in heritage palaces like Alsisar or Taj properties.",
      },
      {
        question: "How long is the drive from Udaipur back to Kanpur?",
        answer:
          "The return drive is about 850 km, taking approximately 12–13 hours. We plan comfortable highway stops for food and rest en route.",
      },
      {
        question: "What is the best viewpoint in Udaipur?",
        answer:
          "Sajjangarh Monsoon Palace, located on a hilltop, offers the absolute best panoramic sunset views of Udaipur's lakes and the surrounding Aravalli range.",
      },
    ],
  },

  "goa-tour": {
    overview:
      "Goa, India's smallest state, is a coastal paradise famous for its pristine sandy beaches, Portuguese-colonial heritage, and vibrant lifestyle. Stretching along the Arabian Sea, Goa is divided into two distinct regions: North Goa, known for its energetic beach shacks, water sports, and night markets; and South Goa, celebrated for its quiet, palm-fringed beaches, spice plantations, and historic Portuguese churches. A 4-day tour from Kanpur offers a well-planned itinerary to experience the beach life, explore colonial architecture in Old Goa, and enjoy Goan-Portuguese cuisine and hospitality.",
    history:
      "Goa has a unique history distinct from the rest of India, having been ruled by the Portuguese for over 450 years. Originally part of the Kadamba and Vijayanagara empires, Goa was conquered by the Portuguese explorer Afonso de Albuquerque in 1510. It became the capital of the Portuguese Empire in the East, known as 'Golden Goa.' The region was liberated by the Indian Army in 1961 through Operation Vijay. The colonial influence is visible today in the architecture, churches, white-washed chapels, and the unique synthesis of Hindu and Christian cultures.",
    significance:
      "Goa is India's premier beach and leisure destination. It is home to several UNESCO World Heritage sites, including the Basilica of Bom Jesus, which houses the mortal remains of St. Francis Xavier. Goa's unique cultural identity, known as 'Goan Catholic,' blends Indian traditions with European customs. The region's natural environment includes the Western Ghats forest, rich in wildlife, and the Mandovi and Zuari estuaries which support traditional fishing and spice farming.",
    attractions: [
      {
        name: "Basilica of Bom Jesus",
        description:
          "A UNESCO World Heritage site in Old Goa, built in 1605. The baroque-style church houses the silver casket containing the sacred body of St. Francis Xavier.",
      },
      {
        name: "Baga & Calangute Beaches",
        description:
          "North Goa's most famous beach strip, bustling with colorful shacks, music, sunbeds, and water sports like parasailing, jet-skiing, and banana boat rides.",
      },
      {
        name: "Fort Aguada",
        description:
          "A well-preserved 17th-century Portuguese fort and lighthouse on Sinquerim beach. Built as a defense against Dutch and Maratha forces, it offers panoramic sea views.",
      },
      {
        name: "Dudhsagar Waterfalls",
        description:
          "A spectacular four-tiered waterfall on the Mandovi River, cascading down 1,000 feet inside Bhagwan Mahavir Sanctuary. It translates to 'Sea of Milk' and is accessible via a forest jeep safari.",
      },
      {
        name: "Fontainhas (Latin Quarter)",
        description:
          "The historic Latin Quarter in Panaji, featuring narrow streets lined with brightly colored 19th-century Portuguese houses with tiled roofs and wrought-iron balconies.",
      },
    ],
    hiddenGems: [
      {
        name: "Cola Beach",
        description:
          "A hidden beach in South Goa, famous for its freshwater lagoon that runs parallel to the sea, offering a quiet sanctuary away from commercial tourism.",
      },
      {
        name: "Mangueshi Temple",
        description:
          "A beautiful 450-year-old temple dedicated to Lord Shiva in Priol. It features a unique blend of Hindu, Christian, and Muslim architectural styles, with an iconic 7-storey lamp tower (Deepastambha).",
      },
      {
        name: "Divar Island",
        description:
          "A quiet river island in the Mandovi River, accessible via a short ferry ride from Old Goa. It features sleepy villages, vintage Portuguese homes, and green paddy fields.",
      },
    ],
    festivals:
      "The Goa Carnival (February) is a vibrant 4-day celebration before Lent, featuring colorful street floats, music, and dances led by King Momo. Shigmo (March) is the Goan version of Holi, celebrated with grand street parades depicting mythological scenes.",
    food: "Goan cuisine is a delicious fusion of local Konkani and Portuguese flavors. Try Goan Fish Curry-Rice, Vindaloo (spiced meat dish), Xacuti, Bebinca (a multi-layered coconut milk dessert), and fresh seafood at beach shacks. Sample Feni, a local drink distilled from cashew apples or coconut toddy.",
    shopping:
      "Shop for local cashew nuts, Goan feni, spices from the plantation tours, beachwear, handmade glazed tiles (Azulejos), and handicrafts at the Anjuna Flea Market (Wednesday) and Arpora Saturday Night Market.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Goa & Beach Sunset",
        description:
          "Arrive in Goa (via flight/train). Check into your beach resort. Spend the evening relaxing at Baga or Calangute beach, enjoying the sunset and dinner at a beach shack. Overnight stay in Goa.",
      },
      {
        day: 2,
        title: "North Goa Beaches & Fort Aguada",
        description:
          "After breakfast, visit Fort Aguada. Explore the beaches of Anjuna, Vagator, and Calangute. Enjoy water sports at Baga. In the evening, visit the Latin Quarter (Fontainhas) in Panaji. Overnight stay.",
      },
      {
        day: 3,
        title: "Old Goa Heritage & South Goa",
        description:
          "Visit the historic Basilica of Bom Jesus and Se Cathedral in Old Goa. Drive to South Goa to visit a spice plantation (enjoy a traditional buffet lunch). Spend the evening at the quiet Miramar or Colva beach. Overnight stay.",
      },
      {
        day: 4,
        title: "Dudhsagar Jeep Safari & Return",
        description:
          "Take an early morning jeep safari to the spectacular Dudhsagar Waterfalls. Enjoy swimming in the natural pool. Post-lunch, transfer to the airport or railway station for your return journey to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Goa is from November to February (20–30°C) when the weather is pleasant and all beach activities are operational. March to May is hot and humid (30–35°C). The monsoon (June to September) brings heavy rains, transforming Goa into a green paradise, ideal for nature lovers, though water sports are closed.",
    howToReach:
      "From Kanpur, fly to Goa (Dabolim Airport or Manohar International Airport, Mopa) via connecting flights, or take a train. Goa is approximately 1,600 km from Kanpur. Rudra Tours handles airport/station transfers and all local sightseeing in private AC vehicles.",
    accommodation:
      "Options range from luxury 5-star beachfront resorts (like Taj Exotica and Grand Hyatt) to boutique heritage villas, mid-range family hotels, and budget guest houses near the beach. We recommend staying in North Goa for nightlife and South Goa for peace.",
    tips: [
      "Hire a self-drive scooter or car to explore Goa at your own pace; carry a valid license.",
      "Wear light cotton clothes and carry sunscreen, sunglasses, and swimwear.",
      "Respect the rules inside historic churches; photography is prohibited in some sanctuaries.",
      "Negotiate cab prices beforehand if not using our arranged private transport.",
      "Try to visit a spice plantation for a unique look at local agriculture and organic food.",
    ],
    faqs: [
      {
        question: "What is the difference between North Goa and South Goa?",
        answer:
          "North Goa is famous for its busy beaches, water sports, night markets, and shacks. South Goa is quieter, featuring pristine beaches, luxury resorts, and historic heritage sites.",
      },
      {
        question: "Are water sports operational during the monsoon?",
        answer:
          "No, water sports like parasailing and jet-skiing are strictly closed from June to September due to high seas and monsoon safety regulations.",
      },
      {
        question: "Is Dudhsagar Falls accessible year-round?",
        answer:
          "The jeep safari to Dudhsagar operates from October to May. During the heavy monsoon (June–September), the forest trail is closed due to rising water levels.",
      },
      {
        question: "What is Bebinca?",
        answer:
          "Bebinca is a traditional Goan pudding dessert made of flour, egg yolk, coconut milk, and ghee, featuring 7 to 16 baked layers. It is Goa's most famous sweet souvenir.",
      },
      {
        question: "How do we get around Goa?",
        answer:
          "While renting scooters is popular, our package includes a private AC vehicle with a driver for all sightseeing and transfers, ensuring comfort and safety for families.",
      },
    ],
  },

  "kerala-tour": {
    overview:
      "Kerala, affectionately called 'God's Own Country,' is a tranquil tropical paradise located on India's southwestern Malabar Coast. Renowned for its palm-fringed beaches, emerald backwaters, spice-covered hill stations, and rich ayurvedic traditions, Kerala offers a deeply relaxing travel experience. Our 5-day tour package from Kanpur covers the best of Kerala's landscapes: the misty tea gardens of Munnar, the wildlife sanctuary of Thekkady, and a romantic overnight stay on a traditional houseboat cruising the backwaters of Alleppey. This comprehensive tour provides a perfect blend of mountain freshness and tropical leisure for families and couples.",
    history:
      "Kerala's history is shaped by its role as a global spice trading hub, attracting Phoenicians, Romans, Arabs, Chinese, and later Europeans (Portuguese, Dutch, British). The Portuguese explorer Vasco da Gama landed at Calicut (Kozhikode) in 1498, establishing the spice route. The region was traditionally ruled by three major kingdoms — Travancore, Cochin, and Zamorin. Kerala has a ancient heritage of education, social reform, and maritime trade, becoming the first state in India to achieve near-100% literacy. The local art forms, including Kathakali dance and Kalaripayattu martial arts, date back centuries.",
    significance:
      "Kerala is famous for its unique geography — the Western Ghats mountains block the monsoon winds, creating a lush, rain-forested ecosystem that feeds 44 rivers and the vast backwater network. The region is a pioneer in eco-tourism and organic spice farming. Culturally, Kerala represents a harmonious blend of Hindu, Christian, and Islamic traditions, which is reflected in its temple festivals, historic churches, and historic mosques. It is also the global home of Ayurveda, the ancient system of natural medicine.",
    attractions: [
      {
        name: "Munnar Tea Gardens",
        description:
          "Sprawling green tea estates covering the hills of Munnar. Visit the Tata Tea Museum to learn about tea processing, and enjoy panoramic views from Echo Point and Top Station.",
      },
      {
        name: "Alleppey Backwaters Houseboat",
        description:
          "An overnight stay on a traditional Kettuvallam (houseboat) made of wood and bamboo. Cruise along the palm-fringed canals, lakes, and paddy fields of Vembanad Lake.",
      },
      {
        name: "Periyar Wildlife Sanctuary, Thekkady",
        description:
          "A protected tiger and elephant reserve set around a scenic artificial lake. Enjoy a boat safari on the lake to spot wild elephants, deer, and rare birds.",
      },
      {
        name: "Eravikulam National Park",
        description:
          "Located near Munnar, this high-altitude park is the sanctuary of the endangered Nilgiri Tahr (mountain goat), offering views of Anamudi, South India's highest peak.",
      },
      {
        name: "Mattupetty Dam & Lake",
        description:
          "A concrete gravity dam in Munnar, surrounded by green hills. Visitors can enjoy speed-boating on the lake or horse riding along the shore.",
      },
    ],
    hiddenGems: [
      {
        name: "Marari Beach",
        description:
          "A quiet, pristine beach located near Alleppey, virtually untouched by commercial tourism. It offers white sands and coconut groves, perfect for relaxation.",
      },
      {
        name: "Lockhart Gap, Munnar",
        description:
          "A scenic viewpoint offering views of the winding valleys, mist-covered mountains, and tea estates. It is less crowded than Munnar's main peaks.",
      },
      {
        name: "Kumarakom Bird Sanctuary",
        description:
          "Set on Vembanad Lake, this sanctuary is home to a variety of migratory birds, including Siberian storks, herons, and egrets, accessible via a quiet walking trail.",
      },
    ],
    festivals:
      "Onam (August–September) is Kerala's national festival, celebrated with grand feasts (Sadhya), flower carpets (Pookalam), and the famous snake boat races (Vallam Kali) on the backwaters. Vishu (April) is the zodiac New Year, marked by family prayers and feasts.",
    food: "Kerala's food is rich in coconut, curry leaves, and spices. Try Appam with stew, Idiyappam, Avial (mixed vegetables in coconut paste), Karimeen Pollichathu (pearl spot fish baked in banana leaves), and Malabar Parotta with curry. Enjoy Sadya, a multi-course vegetarian feast served on a banana leaf.",
    shopping:
      "Shop for high-quality organic spices (cardamom, pepper, cinnamon) from spice gardens in Thekkady, pure coconut oil, aroma oils, handmade Kathakali masks, brass lamps, and Kasavu sarees (traditional white sarees with gold borders).",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Cochin & Drive to Munnar",
        description:
          "Arrive at Cochin Airport (via flight/train). Meet our representative and drive to Munnar (4 hours, passing by beautiful waterfalls). Check into your hill resort. Evening at leisure. Overnight stay in Munnar.",
      },
      {
        day: 2,
        title: "Munnar Tea Gardens Tour",
        description:
          "After breakfast, visit Eravikulam National Park to spot the Nilgiri Tahr. Explore Mattupetty Dam, Echo Point, and the Tea Museum. Spend the evening walking through Munnar town. Overnight stay.",
      },
      {
        day: 3,
        title: "Munnar to Thekkady Spice Garden",
        description:
          "Drive from Munnar to Thekkady (3 hours). Check into your hotel. Take a guided tour of a spice plantation. In the afternoon, enjoy a boat safari on Periyar Lake. In the evening, watch a Kathakali performance. Overnight stay.",
      },
      {
        day: 4,
        title: "Thekkady to Alleppey Houseboat",
        description:
          "Drive to Alleppey (4 hours). Check into your private deluxe houseboat. Enjoy a traditional lunch onboard as the boat cruises along the tranquil backwaters. Watch the sunset over the lake. Dinner and overnight stay on the houseboat.",
      },
      {
        day: 5,
        title: "Houseboat to Cochin & Departure",
        description:
          "After breakfast, disembark from the houseboat in Alleppey. Drive back to Cochin (1.5 hours). Visit Fort Kochi (Chinese Fishing Nets, St. Francis Church) if time permits, then transfer to the airport for your return flight to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Kerala is from September to March (18–30°C) when the weather is pleasant and dry. Summers (April to May) are warm and humid. The monsoon (June to August) brings heavy rains, which makes the waterfalls majestic and is the traditional season for Ayurvedic rejuvenation treatments.",
    howToReach:
      "From Kanpur, fly to Cochin International Airport (COK) via connecting flights, or take a train. Cochin is approximately 1,900 km from Kanpur. Rudra Tours handles all airport pick-ups, inter-city transfers, and sightseeing in private AC vehicles.",
    accommodation:
      "We arrange stays in premium hill resorts in Munnar (with valley views), comfortable hotels in Thekkady, and a private deluxe houseboat in Alleppey with all meals included.",
    tips: [
      "Carry light cotton clothes for backwaters and light woollens for Munnar's cool evenings.",
      "Houseboat check-in is usually at 12:00 PM and check-out is at 9:00 AM; the boat anchors at night.",
      "Book your Periyar boat safari tickets in advance online to ensure slots.",
      "Kerala is relatively conservative; dress respectfully when visiting local temples.",
      "Check the weather status if traveling during the peak monsoon months of June and July.",
    ],
    faqs: [
      {
        question: "What is included in a houseboat stay?",
        answer:
          "Our houseboat package includes a private boat with a dedicated crew (captain, chef, assistant), a private bedroom with AC (usually operational at night), and all meals (lunch, evening snacks, dinner, and breakfast) prepared fresh onboard.",
      },
      {
        question: "How far is Munnar from Cochin?",
        answer:
          "Munnar is about 130 km from Cochin, taking approximately 4 hours by road. The drive is scenic, passing through valleys and waterfalls.",
      },
      {
        question: "Can we see wild elephants in Thekkady?",
        answer:
          "Yes, a boat safari on Periyar Lake is the best way to spot wild elephants, boars, bison, and birds along the water's edge.",
      },
      {
        question: "Is Ayurveda treatment available on this tour?",
        answer:
          "Yes, we can arrange visits to authorized Ayurvedic centers in Munnar or Thekkady for traditional massages and wellness therapies.",
      },
      {
        question: "Are houseboats operational during the monsoon?",
        answer:
          "Yes, houseboats operate in the rain, though they may anchor if there are strong winds. The backwaters look beautiful and green during the monsoons.",
      },
    ],
  },

  "vaishno-devi": {
    overview:
      "This grand 10-day pilgrimage and mountain holiday combines the sacred trek to Mata Vaishno Devi in Katra with the breathtaking alpine landscapes of Kashmir — Gulmarg, Sonmarg, and Srinagar. Vaishno Devi, located in the Trikuta Hills of Jammu, is one of India's most revered Shakti shrines, attracting millions of devotees who climb the 12-km mountain path to seek the blessings of the Mother Goddess. Following the pilgrimage, the tour takes you on a journey into Kashmir, the 'Paradise on Earth.' From the floating houseboats of Dal Lake to the snow-covered slopes of Gulmarg and the glaciers of Sonmarg, this comprehensive tour from Kanpur is the ultimate family holiday blending deep devotion with breathtaking scenery.",
    history:
      "The holy cave of Vaishno Devi has been a place of worship since time immemorial, with references found in the Mahabharata when Arjuna prayed to the Mother Goddess for victory. The cave was reportedly discovered by a local priest named Pandit Shridhar, who had a vision of Vaishno Devi in the form of a young girl. Kashmir, on the other hand, boasts a rich cultural history spanning Hindu, Buddhist, and Islamic eras. Srinagar was established by Emperor Ashoka in the 3rd century BCE. Gulmarg, originally called 'Gaurimarg' in honor of Goddess Parvati, was renamed by Sultan Yusuf Shah in the 16th century, captivated by its wild flower meadows. Sonmarg, meaning 'Meadow of Gold,' served as an ancient gateway on the Silk Route connecting Kashmir to Tibet and Central Asia.",
    significance:
      "Vaishno Devi is revered as a manifestation of the supreme mother goddess, containing three natural rock formations (Pindis) representing Maha Kali, Maha Lakshmi, and Maha Saraswati. Unlike standard temple idols, the Pindis represent the formless, eternal energy of the divine. Kashmir holds profound spiritual significance in both Hinduism and Buddhism. It is the birthplace of Kashmir Shaivism, a major tantric philosophy, and is home to the sacred Amarnath cave. The region's natural environment, from the high alpine meadows to the pine-rimmed lakes, has been celebrated by Persian and Mughal poets as the peak of natural beauty on earth.",
    attractions: [
      {
        name: "Holy Cave of Mata Vaishno Devi",
        description:
          "The ultimate destination of the Katra trek. Devotees walk through a natural cave to witness the three sacred Pindis representing the Mother Goddess, filled with intense spiritual energy.",
      },
      {
        name: "Gulmarg Gondola",
        description:
          "One of the highest cable cars in the world, taking visitors up to Apharwat Peak at 13,780 feet. It offers spectacular close-up views of the Pir Panjal range and snow activities.",
      },
      {
        name: "Thajiwas Glacier, Sonmarg",
        description:
          "A stunning glacier located 3 km from Sonmarg, accessible via a pony ride or hike. Covered in snow year-round, it features small waterfalls and streams.",
      },
      {
        name: "Dal Lake Houseboat & Shikara Ride",
        description:
          "Stay in a traditional carved wooden houseboat in Srinagar, and enjoy a gentle Shikara (gondola) ride across the lake, visiting floating vegetable markets and gardens.",
      },
      {
        name: "Mughal Gardens (Shalimar & Nishat)",
        description:
          "Terraced lawns, cascading fountains, and ancient chinar trees designed by Mughal emperors Jahangir and Shah Jahan, set against the backdrop of the Zabarwan hills.",
      },
    ],
    hiddenGems: [
      {
        name: "Ardhkuwari Cave",
        description:
          "A midway stop on the Vaishno Devi trek where the Goddess is believed to have meditated for nine months in a womb-like cave (Garbhjun) before slaying the demon Bhairon Nath.",
      },
      {
        name: "Betaab Valley, Pahalgam",
        description:
          "A scenic valley named after the Bollywood film Betaab, featuring crystal-clear streams, pine-forested hills, and wild green meadows.",
      },
      {
        name: "Naranag Ruins",
        description:
          "Located near Sonmarg, these are the ruins of an 8th-century temple complex dedicated to Lord Shiva, built by King Lalitaditya, offering absolute peace and history.",
      },
    ],
    festivals:
      "Navratri (September–October and March–April) is celebrated with grand pageantry in Katra, with the temple adorned in imported fresh flowers and special yatra tracks organized. Srinagar's Tulip Festival (April) showcases millions of blooming tulips in Asia's largest tulip garden, marking the arrival of spring.",
    food: "Katra offers strictly vegetarian, no-onion-garlic food at its dharamshalas and eateries. Kashmir's cuisine is famous for Wazwan (a multi-course feast featuring dishes like Rogan Josh and Gushtaba) and vegetarian specialties like Dum Aloo and Lyodur Tschaman (cottage cheese in turmeric gravy). Drink Kahwa, a traditional green tea brewed with saffron, almonds, and cardamom.",
    shopping:
      "In Katra, buy sacred dry fruits (walnuts, almonds), temple coins, red chunris, and saffron. In Kashmir, shop for authentic Pashmina shawls, hand-knotted silk carpets, carved walnut-wood furniture, saffron, papier-mâché crafts, and fresh apples.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Jammu/Katra",
        description:
          "Depart from Kanpur, drive to Katra with an overnight halt. Reach Katra by evening, check into your hotel, and prepare for the pilgrimage.",
      },
      {
        day: 2,
        title: "Vaishno Devi Trek",
        description:
          "Begin the 12-km trek to the Holy Cave early morning (on foot, pony, or yatra services). Perform darshan of the sacred Pindis. Visit Bhairon Ghati, then return to Katra by night. Overnight stay.",
      },
      {
        day: 3,
        title: "Rest Day & Drive to Srinagar",
        description:
          "Enjoy a relaxed breakfast. Drive from Katra to Srinagar (6-7 hours) through the scenic Banihal Tunnel. Check into your deluxe houseboat on Dal Lake. Overnight stay.",
      },
      {
        day: 4,
        title: "Srinagar Local Sightseeing",
        description:
          "Visit the world-famous Shalimar Bagh, Nishat Bagh, and Shankaracharya Temple on a hilltop. In the evening, enjoy a 2-hour Shikara ride on Dal Lake. Overnight stay on houseboat.",
      },
      {
        day: 5,
        title: "Gulmarg Day Trip",
        description:
          "Drive to Gulmarg (2 hours). Ride the famous Gondola Cable Car (Phase 1 & 2) up to Apharwat Peak. Enjoy snow walks or skiing. Return to Srinagar for overnight stay.",
      },
      {
        day: 6,
        title: "Sonmarg Day Trip",
        description:
          "Drive to the 'Meadow of Gold' Sonmarg. Visit the majestic Thajiwas Glacier on a pony. Enjoy the rugged mountain scenery. Return to Srinagar for overnight stay.",
      },
      {
        day: 7,
        title: "Pahalgam Exploration",
        description:
          "Drive to Pahalgam (2.5 hours), visiting saffron fields en route. Explore Betaab Valley and Aru Valley. Enjoy walks along the Lidder River. Overnight stay in Pahalgam.",
      },
      {
        day: 8,
        title: "Pahalgam to Jammu",
        description:
          "Drive from Pahalgam back to Jammu (7-8 hours). Check into your hotel. Visit the Raghunath Temple in the evening. Overnight stay in Jammu.",
      },
      {
        day: 9,
        title: "Jammu to Kanpur Return Drive",
        description:
          "Begin the return drive from Jammu to Kanpur, with an overnight halt en route, arriving home on Day 10 with divine blessings and beautiful mountain memories.",
      },
    ],
    weather:
      "Vaishno Devi is open year-round. Katra is pleasant in spring/autumn and cold in winter. Kashmir is spectacular in summer (April to June, 15–25°C) and winter (December to February, -5 to 10°C) when Gulmarg receives heavy snow. Monsoon (July–August) sees rain in Kashmir, but it remains accessible.",
    howToReach:
      "The road distance from Kanpur to Katra is about 1,050 km, and Srinagar is another 260 km. Jammu Tawi and Katra railway stations connect directly to major hubs. Srinagar Airport has direct domestic flights. Rudra Tours handles all road transfers in comfortable AC vehicles with experienced hill drivers.",
    accommodation:
      "We arrange comfortable 3-star and 4-star hotels in Katra, Jammu, and Pahalgam, deluxe houseboats on Dal Lake (Srinagar), and premium mountain hotels in Srinagar and Gulmarg.",
    tips: [
      "Carry valid photo ID (Aadhaar Card) — mandatory for Vaishno Devi RFID yatra card registration.",
      "Book Gulmarg Gondola tickets online weeks in advance; they sell out completely.",
      "Wear modest clothing for temple visits; dress in layers for Kashmir as mountain temperatures vary.",
      "Keep cash handy; many local pony riders and shikara rowers in Kashmir do not accept digital payments.",
      "Pack comfortable, sturdy walking shoes for the 12-km Vaishno Devi trek.",
    ],
    faqs: [
      {
        question: "What is the RFID card at Vaishno Devi?",
        answer:
          "The RFID card is a mandatory tracking card issued free of cost at the Katra counter or online. All pilgrims must carry it during the trek for safety and queue management.",
      },
      {
        question: "Is the helicopter service available for Vaishno Devi?",
        answer:
          "Yes, helicopter services operate from Katra to Sanjichhat (2 km from the cave). Tickets must be booked in advance via the official shrine board website.",
      },
      {
        question: "Can we experience snow in Gulmarg in summer?",
        answer:
          "Phase 2 of the Gulmarg Gondola (Apharwat Peak) often has snow patches well into June. For fresh snow, visit between December and March.",
      },
      {
        question: "Are houseboats on Dal Lake safe for children?",
        answer:
          "Yes, houseboats are permanently moored and very stable. They offer carpeted rooms, heating facilities, and running water, making them perfect for families.",
      },
      {
        question: "How long does it take to complete the Vaishno Devi yatra?",
        answer:
          "The walk up takes 4–6 hours, and darshan queues can take 1–3 hours. Most pilgrims complete the round trip from Katra within 12–16 hours.",
      },
    ],
  },

  "jaipur-tour": {
    overview:
      "Jaipur, the capital of Rajasthan, is globally celebrated as the 'Pink City' due to the distinctive terracotta-pink color of its historic buildings. Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India's first planned city, built according to the principles of Vastu Shastra and Shilpa Shastra. Surrounded by rugged hills and fortified walls, this UNESCO World Heritage city features grand hilltop palaces, astronomical observatories, and bustling bazaars. From the honeycomb facade of Hawa Mahal to the mirror-work of Amer Fort and the floating beauty of Jal Mahal, Jaipur is a treasure trove of royal heritage. Our 3-day tour from Kanpur offers an optimized itinerary to experience the history, architecture, and vibrant culture of this historic city.",
    history:
      "Jaipur was established in 1727 when Maharaja Sawai Jai Singh II decided to shift his capital from Amer due to water scarcity and growing population. He collaborated with Vidyadhar Bhattacharya, a brilliant Bengali architect, to design the grid-patterned city. In 1876, Maharaja Ram Singh ordered the entire city to be painted pink to welcome Prince Albert (later King Edward VII), as pink was considered the color of hospitality. The tradition has been maintained by law ever since. Under successive rulers, Jaipur became a major centre for jewelry, arts, and military power, eventually merging into the state of Rajasthan after India's independence.",
    significance:
      "Jaipur is a cornerstone of India's 'Golden Triangle' tourism circuit. It stands as a brilliant example of early modern town planning, combining traditional Hindu architecture with Mughal and European influences. The city is also a major global hub for gemstone cutting, block printing, and blue pottery, keeping centuries-old artisanal traditions alive. The royal family still resides in a private wing of the City Palace, maintaining a direct connection to the city's historical legacy.",
    attractions: [
      {
        name: "Amer Fort",
        description:
          "The majestic hilltop fort built of yellow and pink sandstone, famous for its artistic Hindu elements. The Sheesh Mahal (Mirror Palace), adorned with thousands of concave mirrors, is its architectural highlight.",
      },
      {
        name: "Hawa Mahal (Palace of Winds)",
        description:
          "A five-storey pink sandstone facade featuring 953 small casements (jharokhas). Built in 1799, it allowed royal ladies to observe street festivals without being seen from the outside.",
      },
      {
        name: "City Palace",
        description:
          "The royal residence featuring a blend of Rajasthani and Mughal architecture. It houses museums showcasing royal costumes, weapons, and two giant silver urns — the largest in the world.",
      },
      {
        name: "Jantar Mantar",
        description:
          "A UNESCO World Heritage site featuring nineteen architectural astronomical instruments built by Jai Singh II, including the world's largest stone sundial.",
      },
      {
        name: "Jal Mahal",
        description:
          "The beautiful palace situated in the middle of Man Sagar Lake. The light-colored sandstone structure appears to float on the water, especially photogenic during sunset.",
      },
    ],
    hiddenGems: [
      {
        name: "Galta Ji (Monkey Temple)",
        description:
          "An ancient Hindu pilgrimage site set in a narrow mountain pass, famous for its natural fresh water springs, sacred bathing tanks (kunds), and a large population of friendly rhesus monkeys.",
      },
      {
        name: "Panna Meena ka Kund",
        description:
          "An exquisite 16th-century stepwell near Amer Fort, famous for its symmetrical criss-cross steps, geometric architecture, and historical role as a community gathering spot.",
      },
      {
        name: "Nahargarh Fort Sunset View",
        description:
          "Perched on the edge of the Aravalli hills, Nahargarh Fort offers the absolute best panoramic view of the entire Jaipur city illuminated at dusk.",
      },
    ],
    festivals:
      "The Jaipur Literature Festival (January) is the world's largest free literary festival, drawing global authors and thinkers. Gangaur (March–April) and Teej (July–August) are traditional festivals marked by colorful processions of Goddess Parvati through the old city gates.",
    food: "Jaipur's food is rich in ghee and spices. Try Dal Baati Churma (baked wheat balls with lentils and sweet crumbled wheat), Pyaaz Kachori at Rawat Mishtan Bhandar, Lal Maas (spiced mutton curry), and Mirchi Vada. For sweets, sample Ghevar (a honeycombed disc sweet) and Mawa Kachori.",
    shopping:
      "Jaipur is a shopper's paradise. Buy precious gemstones and jewelry from Johari Bazaar, blue pottery from Sanganer, handblock-printed textiles, traditional leather mojari shoes from Mojari Gali, and colorful lac bangles from Bapu Bazaar.",
    itinerary: [
      {
        day: 1,
        title: "Drive to Jaipur & Royal Dinner",
        description:
          "Drive from Kanpur to Jaipur (approx 7-8 hours). Check into your heritage hotel. In the evening, visit Chokhi Dhani, an ethnic village resort, to experience traditional Rajasthani folk dances, puppet shows, and a royal feast. Overnight stay in Jaipur.",
      },
      {
        day: 2,
        title: "Historic Palaces & Amer Fort",
        description:
          "After breakfast, drive to the Amer Fort (enjoy an elephant or jeep ride to the top). Stop at Jal Mahal for photographs. Post-lunch, explore the City Palace, Jantar Mantar observatory, and click photos at Hawa Mahal. Enjoy sunset at Nahargarh Fort. Overnight stay.",
      },
      {
        day: 3,
        title: "Bazaars, Stepwells & Return",
        description:
          "Visit the beautiful Panna Meena stepwell and the Monkey Temple. Spend the afternoon shopping in Bapu Bazaar and Johari Bazaar. Depart for Kanpur by late afternoon, arriving home by midnight.",
      },
    ],
    weather:
      "The best time to visit Jaipur is from October to March (10–25°C) when the weather is cool and pleasant for sightseeing. Summers (April to June) are dry and hot (35–45°C). The monsoon (July to September) brings cooler temperatures and turns the surrounding Aravalli hills green.",
    howToReach:
      "By road, Jaipur is approximately 520 km from Kanpur via the NH-21 highway (7–8 hours of driving). Jaipur Junction is a major railway station connecting to Lucknow and Kanpur. Jaipur Airport has domestic flights. Rudra Tours handles all road travel in comfortable AC sedans or SUVs.",
    accommodation:
      "Stays range from authentic heritage Havelis (like Samode Haveli and Alsisar Haveli) to grand luxury hotels and budget stays. We recommend staying in a heritage property to fully experience Rajasthani hospitality.",
    tips: [
      "Hire a licensed tourist guide at Amer Fort and Jantar Mantar to understand the architecture and history.",
      "Wear comfortable slip-on shoes as you'll need to remove them frequently at temples and stepwells.",
      "Be prepared to bargain politely in the traditional bazaars of the old city.",
      "Carry sunscreen, sunglasses, and a hat to protect against the daytime sun.",
      "Visit the Hawa Mahal early in the morning when the rising sun illuminates the pink facade.",
    ],
    faqs: [
      {
        question: "Why is Jaipur called the Pink City?",
        answer:
          "In 1876, Maharaja Ram Singh ordered the entire city to be painted terracotta-pink to welcome Prince Albert of Britain, as pink is the traditional color of hospitality. The city maintains this color scheme by law today.",
      },
      {
        question: "Is Chokhi Dhani worth visiting?",
        answer:
          "Yes, it is highly recommended for families. It offers a complete showcase of Rajasthani village culture, traditional arts, games, and an authentic sit-down dinner served on leaf platters.",
      },
      {
        question: "How do we reach Amer Fort?",
        answer:
          "Amer Fort is located on a hill 11 km from Jaipur. You can take an elephant ride, a jeep transfer, or drive your own vehicle to the parking lot near the entrance.",
      },
      {
        question: "What is Jantar Mantar?",
        answer:
          "Jantar Mantar is an astronomical observatory built in 1734. It features 19 giant stone instruments used to measure time, predict eclipses, and track stars. It houses the world's largest sundial.",
      },
      {
        question: "Are credit cards accepted in Jaipur markets?",
        answer:
          "Most established shops accept cards and mobile payments (UPI). However, small street vendors in Bapu Bazaar and Johari Bazaar prefer cash.",
      },
    ],
  },

  "rajasthan-heritage": {
    overview:
      "This extensive 6-day heritage tour covers the grand 'Royal Triangle' of Rajasthan — Jaipur, Jodhpur, and Udaipur. From the pink sandstone palaces of Jaipur and the towering blue-painted streets of Jodhpur under Mehrangarh Fort, to the romantic white marble palaces of Udaipur set around Lake Pichola, this tour offers a complete immersion into the royal history, military architecture, and lakes of India's most colorful desert state. Our planned itinerary from Kanpur provides comfortable road travel, stays in heritage hotels, and expert sightseeing at each royal capital.",
    history:
      "The history of Rajasthan is a saga of legendary Rajput dynasties — the Kachwahas of Jaipur, the Rathores of Marwar (Jodhpur), and the Sisodias of Mewar (Udaipur). For centuries, these kingdoms constructed massive forts and palaces that served as centres of military power and arts. Jaipur was planned in 1727 as a commercial capital. Jodhpur, founded in 1459 by Rao Jodha, was a major hub on the trade routes connecting Delhi to the ports of Gujarat. Udaipur was established in 1553 by Maharana Udai Singh II as a more secure capital for Mewar after the siege of Chittorgarh. The state was formed by merging these princely kingdoms after 1947.",
    significance:
      "Rajasthan represents the peak of Indian royal heritage. Its forts (like Amer and Mehrangarh) and lake palaces are recognized globally for their unique defensive and aesthetic architecture. The state is also a major cultural hub, keeping folk music (Langa and Manganiyar), dance (Ghoomar and Kalbelia), puppet arts, and handloom weaving alive. The palaces, stepwells, and cenotaphs stand as a tribute to ancient Indian water harvesting and architectural science.",
    attractions: [
      {
        name: "Mehrangarh Fort, Jodhpur",
        description:
          "One of India's largest and most imposing forts, rising 400 feet above the blue city. It houses a museum displaying royal palanquins, howdahs, and armor, with stunning views from the ramparts.",
      },
      {
        name: "Lake Pichola & City Palace, Udaipur",
        description:
          "The romantic heart of Udaipur. Visit the grand City Palace complex, then take a sunset boat cruise on Lake Pichola, passing the floating Taj Lake Palace.",
      },
      {
        name: "Amer Fort & Hawa Mahal, Jaipur",
        description:
          "The key highlights of the Pink City, showcasing the blend of Rajput and Mughal architecture in red sandstone and white marble.",
      },
      {
        name: "Jaswant Thada, Jodhpur",
        description:
          "An elegant white marble cenotaph built in 1899 in memory of Maharaja Jaswant Singh II, set beside a peaceful lake, often called the 'Taj Mahal of Marwar.'",
      },
      {
        name: "Saheliyon-ki-Bari, Udaipur",
        description:
          "The 'Garden of the Maidens,' featuring marble fountains, lotus pools, and pavilions designed for the royal ladies and their companions.",
      },
    ],
    hiddenGems: [
      {
        name: "Sajjangarh Monsoon Palace",
        description:
          "A hilltop palace overlooking Udaipur's lakes, built by Maharana Sajjan Singh to watch monsoon clouds, offering spectacular panoramic sunset views.",
      },
      {
        name: "Toorji ka Jhalra, Jodhpur",
        description:
          "A beautifully restored 18th-century stepwell in Jodhpur, showcasing geometric step patterns, now surrounded by trendy cafés.",
      },
      {
        name: "Ranakpur Jain Temple",
        description:
          "Located en route from Jodhpur to Udaipur, this 15th-century marble temple features 1,444 uniquely carved pillars, no two of which are identical.",
      },
    ],
    festivals:
      "The Mewar Festival in Udaipur (March–April) welcomes spring with traditional music, dance, and a colorful procession of boats on Lake Pichola. Jodhpur's RIFF (Rajasthan International Folk Festival) in October brings global musicians together inside Mehrangarh Fort.",
    food: "Sample Rajasthani classics across three regions: Dal Baati Churma in Jaipur, Mirchi Vada and Mawa Kachori in Jodhpur, and traditional Mewari thalis in Udaipur. Lal Maas (spiced mutton curry) and Gatte ki Sabzi (gram flour dumplings in yogurt gravy) are must-tries.",
    shopping:
      "Buy block-printed fabrics in Jaipur, Jodhpur's famous spices (Mathaniya red chilies) and hand-dyed bandhani textiles, and Udaipur's miniature Mewar-style paintings and silver handicrafts from local cooperatives.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Jaipur",
        description:
          "Depart Kanpur early morning, drive to Jaipur (7-8 hours). Check into your heritage haveli. Spend the evening exploring Bapu Bazaar or visiting Chokhi Dhani ethnic resort. Overnight stay.",
      },
      {
        day: 2,
        title: "Jaipur Sightseeing to Jodhpur",
        description:
          "Morning visit to Amer Fort and Jal Mahal. Post-lunch drive to the Blue City, Jodhpur (6 hours). Check into your hotel. Overnight stay in Jodhpur.",
      },
      {
        day: 3,
        title: "Jodhpur Blue City Tour",
        description:
          "Visit Mehrangarh Fort, Jaswant Thada, and the restored Toorji stepwell. Enjoy a walk through the blue-painted lanes of the old city and shop at Clock Tower market. Overnight stay.",
      },
      {
        day: 4,
        title: "Jodhpur to Udaipur via Ranakpur",
        description:
          "Drive to Udaipur (5-6 hours), stopping en route at the carved Ranakpur Jain Temple. Arrive in Udaipur by evening, check into your lakeside hotel. Overnight stay.",
      },
      {
        day: 5,
        title: "Udaipur Lakes & Palaces",
        description:
          "Visit the City Palace complex and Saheliyon-ki-Bari. In the afternoon, enjoy a scenic boat ride on Lake Pichola. Watch the sunset from the Monsoon Palace. Overnight stay.",
      },
      {
        day: 6,
        title: "Return Drive to Kanpur",
        description:
          "Depart Udaipur early morning. Begin the return drive back to Kanpur (approx 12 hours with stops), arriving late at night with royal memories.",
      },
    ],
    weather:
      "The best time for this tour is from October to March (12–28°C) when temperatures are pleasant. April to June is extremely hot (38–46°C). The monsoon (July to September) makes Udaipur's lakes full and the desert hills green, offering a unique off-season travel experience.",
    howToReach:
      "The total route covers approximately 1,800 km. Jaipur is 520 km from Kanpur, Jodhpur is 330 km from Jaipur, and Udaipur is 250 km from Jodhpur. All cities are well-connected by highways and rail. Rudra Tours manages the entire road circuit in comfortable AC vehicles.",
    accommodation:
      "We arrange stays in historic heritage Havelis and boutique hotels in all three cities (such as Samode Haveli in Jaipur, Mandore Guest House in Jodhpur, and Jagmandir Island Palace or lakeside heritage properties in Udaipur).",
    tips: [
      "Carry comfortable walking shoes as exploring forts involves climbing stone ramps.",
      "Hire local guides inside Mehrangarh Fort and Udaipur City Palace to appreciate the history.",
      "Check boat ride timings on Lake Pichola; sunset cruises must be booked in advance.",
      "Pack sunscreen, sunglasses, and a hat for the bright desert sun.",
      "Bargain politely in Jodhpur's Clock Tower market and Jaipur's bazaars.",
    ],
    faqs: [
      {
        question: "Why are houses in Jodhpur painted blue?",
        answer:
          "Houses were traditionally painted indigo-blue by Brahmins to keep them cool in summer and ward off mosquitoes. Today, it has become a trademark of the old city under Mehrangarh Fort.",
      },
      {
        question: "Is the Ranakpur temple stop included in the package?",
        answer:
          "Yes, our itinerary includes a dedicated stop at Ranakpur on the drive from Jodhpur to Udaipur. It is one of the most beautiful Jain temples in India.",
      },
      {
        question: "Can we stay in a palace hotel?",
        answer:
          "Yes. Rajasthan has many heritage properties converted from palaces. We can upgrade your package to include stays in heritage palaces like Alsisar or Taj properties.",
      },
      {
        question: "How long is the drive from Udaipur back to Kanpur?",
        answer:
          "The return drive is about 850 km, taking approximately 12–13 hours. We plan comfortable highway stops for food and rest en route.",
      },
      {
        question: "What is the best viewpoint in Udaipur?",
        answer:
          "Sajjangarh Monsoon Palace, located on a hilltop, offers the absolute best panoramic sunset views of Udaipur's lakes and the surrounding Aravalli range.",
      },
    ],
  },

  "goa-tour": {
    overview:
      "Goa, India's smallest state, is a coastal paradise famous for its pristine sandy beaches, Portuguese-colonial heritage, and vibrant lifestyle. Stretching along the Arabian Sea, Goa is divided into two distinct regions: North Goa, known for its energetic beach shacks, water sports, and night markets; and South Goa, celebrated for its quiet, palm-fringed beaches, spice plantations, and historic Portuguese churches. A 4-day tour from Kanpur offers a well-planned itinerary to experience the beach life, explore colonial architecture in Old Goa, and enjoy Goan-Portuguese cuisine and hospitality.",
    history:
      "Goa has a unique history distinct from the rest of India, having been ruled by the Portuguese for over 450 years. Originally part of the Kadamba and Vijayanagara empires, Goa was conquered by the Portuguese explorer Afonso de Albuquerque in 1510. It became the capital of the Portuguese Empire in the East, known as 'Golden Goa.' The region was liberated by the Indian Army in 1961 through Operation Vijay. The colonial influence is visible today in the architecture, churches, white-washed chapels, and the unique synthesis of Hindu and Christian cultures.",
    significance:
      "Goa is India's premier beach and leisure destination. It is home to several UNESCO World Heritage sites, including the Basilica of Bom Jesus, which houses the mortal remains of St. Francis Xavier. Goa's unique cultural identity, known as 'Goan Catholic,' blends Indian traditions with European customs. The region's natural environment includes the Western Ghats forest, rich in wildlife, and the Mandovi and Zuari estuaries which support traditional fishing and spice farming.",
    attractions: [
      {
        name: "Basilica of Bom Jesus",
        description:
          "A UNESCO World Heritage site in Old Goa, built in 1605. The baroque-style church houses the silver casket containing the sacred body of St. Francis Xavier.",
      },
      {
        name: "Baga & Calangute Beaches",
        description:
          "North Goa's most famous beach strip, bustling with colorful shacks, music, sunbeds, and water sports like parasailing, jet-skiing, and banana boat rides.",
      },
      {
        name: "Fort Aguada",
        description:
          "A well-preserved 17th-century Portuguese fort and lighthouse on Sinquerim beach. Built as a defense against Dutch and Maratha forces, it offers panoramic sea views.",
      },
      {
        name: "Dudhsagar Waterfalls",
        description:
          "A spectacular four-tiered waterfall on the Mandovi River, cascading down 1,000 feet inside Bhagwan Mahavir Sanctuary. It translates to 'Sea of Milk' and is accessible via a forest jeep safari.",
      },
      {
        name: "Fontainhas (Latin Quarter)",
        description:
          "The historic Latin Quarter in Panaji, featuring narrow streets lined with brightly colored 19th-century Portuguese houses with tiled roofs and wrought-iron balconies.",
      },
    ],
    hiddenGems: [
      {
        name: "Cola Beach",
        description:
          "A hidden beach in South Goa, famous for its freshwater lagoon that runs parallel to the sea, offering a quiet sanctuary away from commercial tourism.",
      },
      {
        name: "Mangueshi Temple",
        description:
          "A beautiful 450-year-old temple dedicated to Lord Shiva in Priol. It features a unique blend of Hindu, Christian, and Muslim architectural styles, with an iconic 7-storey lamp tower (Deepastambha).",
      },
      {
        name: "Divar Island",
        description:
          "A quiet river island in the Mandovi River, accessible via a short ferry ride from Old Goa. It features sleepy villages, vintage Portuguese homes, and green paddy fields.",
      },
    ],
    festivals:
      "The Goa Carnival (February) is a vibrant 4-day celebration before Lent, featuring colorful street floats, music, and dances led by King Momo. Shigmo (March) is the Goan version of Holi, celebrated with grand street parades depicting mythological scenes.",
    food: "Goan cuisine is a delicious fusion of local Konkani and Portuguese flavors. Try Goan Fish Curry-Rice, Vindaloo (spiced meat dish), Xacuti, Bebinca (a multi-layered coconut milk dessert), and fresh seafood at beach shacks. Sample Feni, a local drink distilled from cashew apples or coconut toddy.",
    shopping:
      "Shop for local cashew nuts, Goan feni, spices from the plantation tours, beachwear, handmade glazed tiles (Azulejos), and handicrafts at the Anjuna Flea Market (Wednesday) and Arpora Saturday Night Market.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Goa & Beach Sunset",
        description:
          "Arrive in Goa (via flight/train). Check into your beach resort. Spend the evening relaxing at Baga or Calangute beach, enjoying the sunset and dinner at a beach shack. Overnight stay in Goa.",
      },
      {
        day: 2,
        title: "North Goa Beaches & Fort Aguada",
        description:
          "After breakfast, visit Fort Aguada. Explore the beaches of Anjuna, Vagator, and Calangute. Enjoy water sports at Baga. In the evening, visit the Latin Quarter (Fontainhas) in Panaji. Overnight stay.",
      },
      {
        day: 3,
        title: "Old Goa Heritage & South Goa",
        description:
          "Visit the historic Basilica of Bom Jesus and Se Cathedral in Old Goa. Drive to South Goa to visit a spice plantation (enjoy a traditional buffet lunch). Spend the evening at the quiet Miramar or Colva beach. Overnight stay.",
      },
      {
        day: 4,
        title: "Dudhsagar Jeep Safari & Return",
        description:
          "Take an early morning jeep safari to the spectacular Dudhsagar Waterfalls. Enjoy swimming in the natural pool. Post-lunch, transfer to the airport or railway station for your return journey to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Goa is from November to February (20–30°C) when the weather is pleasant and all beach activities are operational. March to May is hot and humid (30–35°C). The monsoon (June to September) brings heavy rains, transforming Goa into a green paradise, ideal for nature lovers, though water sports are closed.",
    howToReach:
      "From Kanpur, fly to Goa (Dabolim Airport or Manohar International Airport, Mopa) via connecting flights, or take a train. Goa is approximately 1,600 km from Kanpur. Rudra Tours handles airport/station transfers and all local sightseeing in private AC vehicles.",
    accommodation:
      "Options range from luxury 5-star beachfront resorts (like Taj Exotica and Grand Hyatt) to boutique heritage villas, mid-range family hotels, and budget guest houses near the beach. We recommend staying in North Goa for nightlife and South Goa for peace.",
    tips: [
      "Hire a self-drive scooter or car to explore Goa at your own pace; carry a valid license.",
      "Wear light cotton clothes and carry sunscreen, sunglasses, and swimwear.",
      "Respect the rules inside historic churches; photography is prohibited in some sanctuaries.",
      "Negotiate cab prices beforehand if not using our arranged private transport.",
      "Try to visit a spice plantation for a unique look at local agriculture and organic food.",
    ],
    faqs: [
      {
        question: "What is the difference between North Goa and South Goa?",
        answer:
          "North Goa is famous for its busy beaches, water sports, night markets, and shacks. South Goa is quieter, featuring pristine beaches, luxury resorts, and historic heritage sites.",
      },
      {
        question: "Are water sports operational during the monsoon?",
        answer:
          "No, water sports like parasailing and jet-skiing are strictly closed from June to September due to high seas and monsoon safety regulations.",
      },
      {
        question: "Is Dudhsagar Falls accessible year-round?",
        answer:
          "The jeep safari to Dudhsagar operates from October to May. During the heavy monsoon (June–September), the forest trail is closed due to rising water levels.",
      },
      {
        question: "What is Bebinca?",
        answer:
          "Bebinca is a traditional Goan pudding dessert made of flour, egg yolk, coconut milk, and ghee, featuring 7 to 16 baked layers. It is Goa's most famous sweet souvenir.",
      },
      {
        question: "How do we get around Goa?",
        answer:
          "While renting scooters is popular, our package includes a private AC vehicle with a driver for all sightseeing and transfers, ensuring comfort and safety for families.",
      },
    ],
  },

  "kerala-tour": {
    overview:
      "Kerala, affectionately called 'God's Own Country,' is a tranquil tropical paradise located on India's southwestern Malabar Coast. Renowned for its palm-fringed beaches, emerald backwaters, spice-covered hill stations, and rich ayurvedic traditions, Kerala offers a deeply relaxing travel experience. Our 5-day tour package from Kanpur covers the best of Kerala's landscapes: the misty tea gardens of Munnar, the wildlife sanctuary of Thekkady, and a romantic overnight stay on a traditional houseboat cruising the backwaters of Alleppey. This comprehensive tour provides a perfect blend of mountain freshness and tropical leisure for families and couples.",
    history:
      "Kerala's history is shaped by its role as a global spice trading hub, attracting Phoenicians, Romans, Arabs, Chinese, and later Europeans (Portuguese, Dutch, British). The Portuguese explorer Vasco da Gama landed at Calicut (Kozhikode) in 1498, establishing the spice route. The region was traditionally ruled by three major kingdoms — Travancore, Cochin, and Zamorin. Kerala has a ancient heritage of education, social reform, and maritime trade, becoming the first state in India to achieve near-100% literacy. The local art forms, including Kathakali dance and Kalaripayattu martial arts, date back centuries.",
    significance:
      "Kerala is famous for its unique geography — the Western Ghats mountains block the monsoon winds, creating a lush, rain-forested ecosystem that feeds 44 rivers and the vast backwater network. The region is a pioneer in eco-tourism and organic spice farming. Culturally, Kerala represents a harmonious blend of Hindu, Christian, and Islamic traditions, which is reflected in its temple festivals, historic churches, and historic mosques. It is also the global home of Ayurveda, the ancient system of natural medicine.",
    attractions: [
      {
        name: "Munnar Tea Gardens",
        description:
          "Sprawling green tea estates covering the hills of Munnar. Visit the Tata Tea Museum to learn about tea processing, and enjoy panoramic views from Echo Point and Top Station.",
      },
      {
        name: "Alleppey Backwaters Houseboat",
        description:
          "An overnight stay on a traditional Kettuvallam (houseboat) made of wood and bamboo. Cruise along the palm-fringed canals, lakes, and paddy fields of Vembanad Lake.",
      },
      {
        name: "Periyar Wildlife Sanctuary, Thekkady",
        description:
          "A protected tiger and elephant reserve set around a scenic artificial lake. Enjoy a boat safari on the lake to spot wild elephants, deer, and rare birds.",
      },
      {
        name: "Eravikulam National Park",
        description:
          "Located near Munnar, this high-altitude park is the sanctuary of the endangered Nilgiri Tahr (mountain goat), offering views of Anamudi, South India's highest peak.",
      },
      {
        name: "Mattupetty Dam & Lake",
        description:
          "A concrete gravity dam in Munnar, surrounded by green hills. Visitors can enjoy speed-boating on the lake or horse riding along the shore.",
      },
    ],
    hiddenGems: [
      {
        name: "Marari Beach",
        description:
          "A quiet, pristine beach located near Alleppey, virtually untouched by commercial tourism. It offers white sands and coconut groves, perfect for relaxation.",
      },
      {
        name: "Lockhart Gap, Munnar",
        description:
          "A scenic viewpoint offering views of the winding valleys, mist-covered mountains, and tea estates. It is less crowded than Munnar's main peaks.",
      },
      {
        name: "Kumarakom Bird Sanctuary",
        description:
          "Set on Vembanad Lake, this sanctuary is home to a variety of migratory birds, including Siberian storks, herons, and egrets, accessible via a quiet walking trail.",
      },
    ],
    festivals:
      "Onam (August–September) is Kerala's national festival, celebrated with grand feasts (Sadhya), flower carpets (Pookalam), and the famous snake boat races (Vallam Kali) on the backwaters. Vishu (April) is the zodiac New Year, marked by family prayers and feasts.",
    food: "Kerala's food is rich in coconut, curry leaves, and spices. Try Appam with stew, Idiyappam, Avial (mixed vegetables in coconut paste), Karimeen Pollichathu (pearl spot fish baked in banana leaves), and Malabar Parotta with curry. Enjoy Sadya, a multi-course vegetarian feast served on a banana leaf.",
    shopping:
      "Shop for high-quality organic spices (cardamom, pepper, cinnamon) from spice gardens in Thekkady, pure coconut oil, aroma oils, handmade Kathakali masks, brass lamps, and Kasavu sarees (traditional white sarees with gold borders).",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Cochin & Drive to Munnar",
        description:
          "Arrive at Cochin Airport (via flight/train). Meet our representative and drive to Munnar (4 hours, passing by beautiful waterfalls). Check into your hill resort. Evening at leisure. Overnight stay in Munnar.",
      },
      {
        day: 2,
        title: "Munnar Tea Gardens Tour",
        description:
          "After breakfast, visit Eravikulam National Park to spot the Nilgiri Tahr. Explore Mattupetty Dam, Echo Point, and the Tea Museum. Spend the evening walking through Munnar town. Overnight stay.",
      },
      {
        day: 3,
        title: "Munnar to Thekkady Spice Garden",
        description:
          "Drive from Munnar to Thekkady (3 hours). Check into your hotel. Take a guided tour of a spice plantation. In the afternoon, enjoy a boat safari on Periyar Lake. In the evening, watch a Kathakali performance. Overnight stay.",
      },
      {
        day: 4,
        title: "Thekkady to Alleppey Houseboat",
        description:
          "Drive to Alleppey (4 hours). Check into your private deluxe houseboat. Enjoy a traditional lunch onboard as the boat cruises along the tranquil backwaters. Watch the sunset over the lake. Dinner and overnight stay on the houseboat.",
      },
      {
        day: 5,
        title: "Houseboat to Cochin & Departure",
        description:
          "After breakfast, disembark from the houseboat in Alleppey. Drive back to Cochin (1.5 hours). Visit Fort Kochi (Chinese Fishing Nets, St. Francis Church) if time permits, then transfer to the airport for your return flight to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Kerala is from September to March (18–30°C) when the weather is pleasant and dry. Summers (April to May) are warm and humid. The monsoon (June to August) brings heavy rains, which makes the waterfalls majestic and is the traditional season for Ayurvedic rejuvenation treatments.",
    howToReach:
      "From Kanpur, fly to Cochin International Airport (COK) via connecting flights, or take a train. Cochin is approximately 1,900 km from Kanpur. Rudra Tours handles all airport pick-ups, inter-city transfers, and sightseeing in private AC vehicles.",
    accommodation:
      "We arrange stays in premium hill resorts in Munnar (with valley views), comfortable hotels in Thekkady, and a private deluxe houseboat in Alleppey with all meals included.",
    tips: [
      "Carry light cotton clothes for backwaters and light woollens for Munnar's cool evenings.",
      "Houseboat check-in is usually at 12:00 PM and check-out is at 9:00 AM; the boat anchors at night.",
      "Book your Periyar boat safari tickets in advance online to ensure slots.",
      "Kerala is relatively conservative; dress respectfully when visiting local temples.",
      "Check the weather status if traveling during the peak monsoon months of June and July.",
    ],
    faqs: [
      {
        question: "What is included in a houseboat stay?",
        answer:
          "Our houseboat package includes a private boat with a dedicated crew (captain, chef, assistant), a private bedroom with AC (usually operational at night), and all meals (lunch, evening snacks, dinner, and breakfast) prepared fresh onboard.",
      },
      {
        question: "How far is Munnar from Cochin?",
        answer:
          "Munnar is about 130 km from Cochin, taking approximately 4 hours by road. The drive is scenic, passing through valleys and waterfalls.",
      },
      {
        question: "Can we see wild elephants in Thekkady?",
        answer:
          "Yes, a boat safari on Periyar Lake is the best way to spot wild elephants, boars, bison, and birds along the water's edge.",
      },
      {
        question: "Is Ayurveda treatment available on this tour?",
        answer:
          "Yes, we can arrange visits to authorized Ayurvedic centers in Munnar or Thekkady for traditional massages and wellness therapies.",
      },
      {
        question: "Are houseboats operational during the monsoon?",
        answer:
          "Yes, houseboats operate in the rain, though they may anchor if there are strong winds. The backwaters look beautiful and green during the monsoons.",
      },
    ],
  },

  "amritsar-wagah": {
    overview:
      "Amritsar, the spiritual and cultural heart of Punjab, is home to the majestic Harmandir Sahib, globally known as the Golden Temple. This sacred city is a place of deep devotion, historic significance, and patriotic fervor. The Golden Temple, surrounded by the peaceful Amrit Sarovar (pool of nectar), shines with real gold and serves as the ultimate spiritual sanctuary. Beyond its religious importance, Amritsar carries the memories of India's independence struggle at Jallianwala Bagh and the emotional history of Partition at the Partition Museum. The tour also takes you to the Wagah-Attari Border, the only road border crossing between India and Pakistan, to witness the spectacular Beating Retreat Ceremony. Here, soldiers from both nations perform a high-stepping, energetic drill filled with dramatic gestures and patriotic slogans, creating an electric atmosphere of national pride. Our 3-day tour package from Kanpur offers a well-planned itinerary to experience the rich heritage, deep spirituality, and legendary culinary culture of Punjab.",
    history:
      "Amritsar was founded in 1577 by Guru Ram Das, the fourth Sikh Guru, who excavated the holy pool of Amrit Sarovar, from which the city derives its name. The fifth Guru, Guru Arjan Dev, designed the Harmandir Sahib to be built in the center of the pool, symbolizing the accessibility of God to everyone. He also installed the Adi Granth, the holy scripture of Sikhism, within the temple. In the early 19th century, Maharaja Ranjit Singh, the founder of the Sikh Empire, patronized the gold plating of the temple's upper storeys, giving it the name Golden Temple. Amritsar has also been a focal point of modern Indian history. In 1919, the tragic Jallianwala Bagh massacre occurred here, when British forces under General Dyer fired on a peaceful gathering of civilians, sparking a national movement for independence. During the Partition of India in 1947, Amritsar became the primary entry point for millions of refugees crossing the newly drawn border, a painful history preserved in the city's museums.",
    significance:
      "The Harmandir Sahib is a symbol of absolute equality and human brotherhood. Unlike traditional temples, it is built on a lower level than the surrounding land, signifying humility. It features four entrance doors facing north, south, east, and west, welcoming people of all faiths, castes, and backgrounds without discrimination. The temple runs the Guru ka Langar, the world's largest free community kitchen, feeding over 100,000 people daily. The food is strictly vegetarian and prepared by volunteers (sevadars), representing the core Sikh values of selfless service and equality. The Wagah Border ceremony is highly significant as a peaceful show of military power, representing the shared history, rivalry, and hope for peace between India and Pakistan.",
    attractions: [
      {
        name: "Golden Temple (Harmandir Sahib)",
        description:
          "The most sacred Sikh shrine, built in the middle of a holy pool. The gold-plated structure features a blend of Hindu and Islamic architectural elements, housing the holy Guru Granth Sahib.",
      },
      {
        name: "Jallianwala Bagh",
        description:
          "A historic public garden housing a memorial to the victims of the 1919 massacre. The bullet-ridden walls, the martyrs' well, and the flame of liberty stand as a tribute to the freedom fighters.",
      },
      {
        name: "Wagah-Attari Border",
        description:
          "Located 30 km from Amritsar, this is the border post where the daily Beating Retreat ceremony is held by the Indian Border Security Force and Pakistan Rangers.",
      },
      {
        name: "Partition Museum",
        description:
          "Housed in the historic Town Hall, this is the world's first museum dedicated to the Partition of 1947, showcasing personal stories, photographs, and historical documents.",
      },
      {
        name: "Gobindgarh Fort",
        description:
          "A historic 18th-century fort built by the Bhangi rulers and later fortified by Maharaja Ranjit Singh. It features museums showcasing traditional weapons, coins, and a popular 7D show on the history of Punjab.",
      },
    ],
    hiddenGems: [
      {
        name: "Pul Kanjari",
        description:
          "A historic trading outpost built by Maharaja Ranjit Singh near the border, featuring a temple, a mosque, a water tank, and beautiful wall paintings, reflecting secular harmony.",
      },
      {
        name: "Ram Tirath Temple",
        description:
          "An ancient pilgrimage site believed to be the location of Sage Valmiki's ashram, where Goddess Sita lived during her exile and Luv-Kush were born.",
      },
      {
        name: "Durgiana Temple",
        description:
          "A beautiful Hindu temple dedicated to Goddess Durga, built in the middle of a holy lake with a gold-plated dome, closely resembling the architecture of the Golden Temple.",
      },
    ],
    festivals:
      "Baisakhi (April) is celebrated with extreme joy across Amritsar, marking the Punjabi New Year and the creation of the Khalsa Panth by Guru Gobind Singh in 1699. Diwali (Bandi Chhor Divas) is a spectacular event when the entire Golden Temple is illuminated with thousands of oil lamps (diyas), accompanied by grand fireworks, celebrating the return of the sixth Guru from Gwalior Fort.",
    food: "Amritsar is a legendary culinary destination. Try the world-famous Amritsari Kulcha (flaky, butter-laden flatbread stuffed with spiced potatoes and baked in a tandoor, served with chickpea curry), Sarson ka Saag and Makki di Roti, rich Dal Makhani, and Amritsari Fish. Drink sweet, thick Lassi served in tall brass tumblers with a layer of cream, and finish with sweets like Pinni, Gajar ka Halwa, and hot Jalebis.",
    shopping:
      "Buy colorful Phulkari embroidered suits, dupattas, and sarees, traditional Punjabi Juttis (handcrafted leather shoes), fine woollen shawls, and brass utensils. Don't forget to buy culinary souvenirs like Amritsari Papad, Warian (spiced sun-dried lentil chunks), and premium qualities of local saffron.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Amritsar & Night Darshan",
        description:
          "Depart Kanpur early morning, drive to Amritsar (approx 12-13 hours). Check into your hotel. In the evening, visit the Golden Temple to witness the beautiful night lighting and the sacred Palki Sahib ceremony where the holy book is put to rest. Overnight stay.",
      },
      {
        day: 2,
        title: "History & Wagah Border Ceremony",
        description:
          "After breakfast, visit Jallianwala Bagh and the moving Partition Museum. Post-lunch, drive to the Wagah-Attari Border (30 km). Secure your seats early and witness the patriotic Beating Retreat ceremony. Return to the city for a food walk. Overnight stay.",
      },
      {
        day: 3,
        title: "Local Fort, Temples & Return Drive",
        description:
          "Visit the Gobindgarh Fort, Durgiana Temple, and the historic Ram Tirath temple. Spend the afternoon shopping in the old bazaars. Begin your return journey to Kanpur by evening, arriving home on Day 4.",
      },
    ],
    weather:
      "The best time to visit Amritsar is from October to March (8°C to 24°C) when the weather is cool, pleasant, and perfect for walking tours. Summers (April to June) are extremely hot (35°C to 45°C), while the monsoon season (July to September) brings high humidity and moderate rainfall.",
    howToReach:
      "The road distance from Kanpur to Amritsar is about 850 km via the NH-44 highway. Amritsar is well-connected by direct trains from Kanpur Central and Lucknow. Sri Guru Ram Dass Jee International Airport has flights connecting major Indian cities. Rudra Tours handles all road transfers in comfortable AC vehicles.",
    accommodation:
      "We arrange comfortable stays in premium hotels near the Golden Temple (like Hyatt Regency or Radisson Blu) or budget-friendly, clean hotels and dharamshalas depending on your preference.",
    tips: [
      "Keep your head covered at all times inside the Golden Temple complex; carry a scarf or handkerchief.",
      "Remove your shoes and socks and wash your feet in the water channels at the temple entrance.",
      "Arrive at the Wagah Border by 3:00 PM to get good seats in the public stands; avoid carrying bags due to security rules.",
      "Photography is permitted in the outer walkways of the Golden Temple but strictly prohibited inside the main inner sanctum.",
      "Respect local customs and maintain absolute silence in the prayer halls.",
    ],
    faqs: [
      {
        question: "Is the food at the Golden Temple Langar free?",
        answer:
          "Yes, the Langar is completely free and open to everyone, serving hot, nutritious food 24 hours a day. Anyone can sit on the floor and enjoy the meal.",
      },
      {
        question: "How far is the Wagah Border from the main city?",
        answer:
          "The Wagah Border is approximately 30 km from the center of Amritsar, which takes about 45 to 60 minutes to travel by road.",
      },
      {
        question: "Is there any entrance fee for the Wagah Border ceremony?",
        answer:
          "No, entry to the Wagah Border Beating Retreat ceremony is completely free. Seating is on a first-come, first-served basis.",
      },
      {
        question: "What is the Palki Sahib ceremony?",
        answer:
          "It is a daily ritual where the holy scripture, Guru Granth Sahib, is carried in a golden palanquin from the main sanctum to the Akal Takht for the night, accompanied by hymns.",
      },
      {
        question: "Can we visit the Golden Temple at night?",
        answer:
          "Yes, the Golden Temple is open 24 hours a day, and the night view, when the golden structure is lit up and reflected in the pool, is absolutely spectacular.",
      },
    ],
  },

  "ujjain-indore": {
    overview:
      "Explore the spiritual and cultural landscape of Madhya Pradesh with our weekend tour of Ujjain and Indore. Ujjain, situated on the banks of the holy Shipra River, is one of India's oldest cities and one of the four sacred sites that host the Kumbh Mela. It is home to the Mahakaleshwar Temple, which houses a self-manifested (Swayambhu) Jyotirlinga, where Lord Shiva is worshipped as the Lord of Time. The newly built Mahakal Lok Corridor, adorned with murals and statues depicting Shaivite stories, has transformed Ujjain into a grand pilgrimage center. The tour also covers Indore, the commercial capital of Madhya Pradesh and consistently voted India's cleanest city. Indore is famous for its Maratha-era heritage, royal palaces, and legendary street food. This 2-day trip from Kanpur is optimized to offer a perfect balance of deep spiritual devotion and rich culinary experiences.",
    history:
      "Ujjain, historically known as Ujjayini and Avanti, was a major capital of the Avanti Kingdom and the seat of the legendary King Vikramaditya. It was also a prominent center of science, mathematics, and astronomy in ancient India, serving as the prime meridian for Hindu geographers. The Mahakaleshwar temple has been mentioned in early Puranas and was patronized by successive dynasties, including the Paramaras, the Scindias, and the Holkars. Indore was founded in the early 18th century as a trading hub on the Narmada valley route. It rose to prominence under the visionary Holkar Queen, Maharani Ahilyabai Holkar, who ruled from Maheshwar and built numerous temples, ghats, and dharamshalas across India, keeping the cultural heritage alive.",
    significance:
      "Mahakaleshwar is unique among the twelve Jyotirlingas because it is Dakshinmukhi (south-facing), a feature highly revered in tantric traditions. The daily Bhasma Aarti, where the deity is worshipped with holy ash, is a powerful ritual that draws thousands of devotees daily. Ujjain also houses one of the 51 Shakti Peethas (Harsiddhi Temple). Indore is culturally significant for its Maratha-Holkar architecture and its modern achievements in cleanliness, combining a rich heritage with a sustainable lifestyle.",
    attractions: [
      {
        name: "Mahakaleshwar Jyotirlinga & Mahakal Lok",
        description:
          "The sacred south-facing temple of Lord Shiva, featuring the grand Mahakal Lok corridor, a massive open-air museum displaying sculptures of Shiva's legends.",
      },
      {
        name: "Harsiddhi Temple",
        description:
          "An ancient Shakti Peetha dedicated to Goddess Harsiddhi. It features two massive iron lamp towers that are lit with oil lamps during evening aarti, a spectacular sight.",
      },
      {
        name: "Kal Bhairav Temple",
        description:
          "A temple dedicated to Lord Kal Bhairav, the guardian deity of the city. The unique ritual here involves offering liquor to the deity as part of the worship.",
      },
      {
        name: "Rajwada Palace, Indore",
        description:
          "A historic 7-storey palace built by the Holkars in the heart of Indore. It features a blend of Maratha, Mughal, and French architectural styles with a wooden facade.",
      },
      {
        name: "Sarafa Bazar, Indore",
        description:
          "Indore's famous jewellery market that transforms into a bustling street-food night market after 9 PM, selling local delicacies and traditional sweets.",
      },
    ],
    hiddenGems: [
      {
        name: "Sandipani Ashram",
        description:
          "The holy ashram where Lord Krishna, his brother Balarama, and his friend Sudama received their education from Sage Sandipani.",
      },
      {
        name: "Jantar Mantar (Vedh Shala)",
        description:
          "The historic observatory built by Maharaja Sawai Jai Singh II in 1719, featuring masonry instruments still used to measure astronomical movements.",
      },
      {
        name: "Kanch Mandir",
        description:
          "A magnificent Jain temple in Indore constructed entirely of glass and mirrors, showcasing detailed glass murals depicting Jain mythology.",
      },
    ],
    festivals:
      "Mahashivratri is the main festival in Ujjain, celebrated with midnight prayers and elaborate decoration of the Mahakaleshwar temple. The Simhastha Kumbh Mela, held once every 12 years in Ujjain when Jupiter enters Leo, draws millions of pilgrims for a holy dip in the Shipra River.",
    food: "Indore is the street-food capital of Central India. Try the classic Indori Poha-Jalebi (steamed flaked rice with spices and crunchy sev, served with sweet jalebis), Bhutte ka Kees (grated corn simmered in milk and spices), and Khopra Patties. At the Sarafa night market, sample Mawa Bati, Rabri, and Rabdi-Kulfi.",
    shopping:
      "Shop for traditional Maheshwari and Chanderi sarees (famous for their light weight, glossy texture, and golden borders), block-printed fabrics (Bagh prints), leather toys in Indore, and sacred prasad, rudraksha beads, and religious books in Ujjain.",
    itinerary: [
      {
        day: 1,
        title: "Kanpur to Ujjain & Mahakal Lok",
        description:
          "Depart Kanpur early morning, drive to Ujjain (approx 10-11 hours). Check into your hotel. In the evening, visit the Mahakaleshwar Temple and walk through the illuminated Mahakal Lok Corridor. Attend the Harsiddhi Temple lamp lighting. Overnight stay.",
      },
      {
        day: 2,
        title: "Ujjain Temples & Indore Food Tour",
        description:
          "Attend the early morning Bhasma Aarti (requires pre-booking). Visit Kal Bhairav Temple, Sandipani Ashram, and the Vedh Shala. Drive to Indore (55 km). Explore Rajwada Palace and Lal Bagh Palace. Spend the evening food-hopping at Chappan Dukan or Sarafa Bazar. Return drive to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Ujjain and Indore is from October to March (10°C to 28°C) when the weather is cool and ideal for temple tours. Summers (April to June) are hot and dry (35°C to 45°C), while the monsoon (July to September) makes the surroundings green and full of rivers.",
    howToReach:
      "The road distance from Kanpur to Ujjain is about 650 km via the NH-27 highway. Ujjain and Indore are well-connected by direct trains from Kanpur and Lucknow. Devi Ahilyabai Holkar Airport in Indore has direct flights to major cities. Rudra Tours manages the road trip in comfortable vehicles.",
    accommodation:
      "We arrange comfortable stays in premium heritage hotels or 3-star family-friendly hotels in both Ujjain and Indore, located close to the main attractions.",
    tips: [
      "Book your Bhasma Aarti tickets online months in advance via the official temple website; carry a printout and photo ID.",
      "Follow the dress code for Bhasma Aarti: women must wear sarees, and men must wear traditional cotton dhotis.",
      "Mobile phones, smartwatches, and large bags are strictly banned inside the Mahakaleshwar temple complex.",
      "Visit Sarafa Bazar late in the evening (after 9:30 PM) to experience the night food market.",
      "Keep cash handy for small street food vendors and auto-rickshaw rides.",
    ],
    faqs: [
      {
        question: "What is Bhasma Aarti?",
        answer:
          "It is a unique 2-hour morning ritual at the Mahakaleshwar temple where the deity is bathed with sacred ash, accompanied by Vedic chants and drum beats.",
      },
      {
        question: "How far is Indore from Ujjain?",
        answer:
          "Indore is approximately 55 km from Ujjain, taking about 1 hour to travel by road via the Ujjain-Indore highway.",
      },
      {
        question: "What is Chappan Dukan in Indore?",
        answer:
          "It is a famous food street in Indore featuring exactly 56 shops selling a wide variety of snacks, chaat, sweets, and beverages, serving as a popular youth hangout.",
      },
      {
        question: "Can we visit the Kal Bhairav temple with family?",
        answer:
          "Yes, it is a historic temple visited by families. The deity is offered liquor as prasad, which is a local custom.",
      },
      {
        question: "Are cameras allowed inside the temples?",
        answer:
          "No, photography is strictly prohibited inside the inner sanctum of Ujjain's major temples for security and religious sanctity.",
      },
    ],
  },

  "dwarka-somnath": {
    overview:
      "Embark on a sacred coastal pilgrimage through Gujarat, visiting the holy cities of Dwarka and Somnath. Dwarka, situated on the western tip of the Saurashtra peninsula, is the legendary kingdom of Lord Krishna and one of the four primary Char Dham pilgrimage sites of India. The Dwarkadhish Temple, also known as Jagat Mandir, is a five-storey limestone structure that stands as an architectural masterpiece. After exploring Dwarka, the tour takes you to Somnath, the site of the first of the twelve sacred Shiva Jyotirlingas, located right on the shores of the Arabian Sea. This 4-day tour from Kanpur offers a complete spiritual experience combining ancient mythology, coastal fortresses, and sunset views over the ocean.",
    history:
      "Dwarka is believed to have been established by Lord Krishna himself, who reclaimed 12 yojanas of land from the sea to build his capital after leaving Mathura. Marine archaeological excavations off the coast of Dwarka have revealed submerged stone structures, matching descriptions of the ancient city in the Mahabharata. Somnath Temple has a long history of destruction and resurrection. It was destroyed and looted by various invaders (most notably Mahmud of Ghazni in 1026) and was rebuilt each time. The current grand temple was built in 1951 under the leadership of Sardar Vallabhbhai Patel in the traditional Chalukya style, symbolizing the resilience of the nation.",
    significance:
      "Dwarka is spiritually significant as the place where Lord Krishna ruled as Dwarkadhish (King of Dwarka) and is associated with his devotee Sudama. Somnath is revered as the first Jyotirlinga, where Lord Shiva is believed to have cured the Moon God (Soma) of his curse. The temple stands as a symbol of the eternal nature of the divine, with the sea-facing temple offering a powerful atmosphere of devotion.",
    attractions: [
      {
        name: "Dwarkadhish Temple (Jagat Mandir)",
        description:
          "The 2500-year-old temple dedicated to Lord Krishna, featuring a 5-storey main structure supported by 72 pillars and topped by a massive flag changed five times daily.",
      },
      {
        name: "Beyt Dwarka",
        description:
          "An island located 30 km from Dwarka, accessible via a short ferry ride. It is believed to be the residential palace of Lord Krishna, housing ancient temples.",
      },
      {
        name: "Somnath Jyotirlinga Temple",
        description:
          "The majestic shore temple dedicated to Lord Shiva, featuring detailed stone carvings, a massive shivling, and a light and sound show projected on the temple facade.",
      },
      {
        name: "Nageshwar Jyotirlinga",
        description:
          "One of the 12 Jyotirlingas, featuring a massive 85-foot tall statue of Lord Shiva in a sitting posture and a quiet, peaceful prayer hall.",
      },
      {
        name: "Sudama Setu & Gomti Ghat",
        description:
          "A suspension bridge over the Gomti River leading to the beach, offering beautiful views of the temple and the confluence of the river and the sea.",
      },
    ],
    hiddenGems: [
      {
        name: "Rukmini Devi Temple",
        description:
          "An exquisite 12th-century temple dedicated to Krishna's consort Rukmini, located 2 km from Dwarka, famous for its detailed carvings of gods and human figures.",
      },
      {
        name: "Bhalka Tirth",
        description:
          "The sacred spot in Somnath where Lord Krishna was resting under a pipal tree when he was accidentally shot by a hunter's arrow, marking the end of his earthly journey.",
      },
      {
        name: "Triveni Sangam Ghat",
        description:
          "The holy confluence of three rivers — Hiran, Kapila, and Saraswati — before they meet the Arabian Sea, where pilgrims take a holy dip.",
      },
    ],
    festivals:
      "Janmashtami (August–September) is the grandest festival in Dwarka, celebrated with mid-night prayers, pot-breaking (Dahi Handi) competitions, and lakhs of pilgrims visiting the decorated temple. Kartik Purnima (November) features a grand fair in Somnath.",
    food: "Gujarat offers delicious and strictly vegetarian cuisine. Try the traditional Gujarati Thali (consisting of Dhokla, Khandvi, Bajra Rotla, Ringan No Holo/baingan bharta, Kadhi, Gujarati Dal, Khichdi, and sweets like Shrikhand and Jalebi). Sample local snacks like Fafda-Gathiya and spicy Khichdi-Kadhi at temple dharamshalas.",
    shopping:
      "Shop for Patola silk sarees, Bandhani (tie-dye) fabrics, traditional Ghagra-Cholis adorned with mirror-work, brass items in Jamnagar, and Dwarka's sacred clay (Gopi Chandan) and seashells.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Dwarka & Beach Sunset",
        description:
          "Arrive in Dwarka (via Jamnagar/Rajkot airport or train). Check into hotel. Visit the Dwarkadhish Temple for evening aarti. Walk across the Sudama Setu bridge to watch the sunset over the Gomti River. Overnight stay in Dwarka.",
      },
      {
        day: 2,
        title: "Beyt Dwarka Island & Local Temples",
        description:
          "Take a ferry to Beyt Dwarka island. Visit Nageshwar Jyotirlinga temple, Gopi Talav, and Rukmini Devi Temple. Evening at Dwarka beach. Overnight stay.",
      },
      {
        day: 3,
        title: "Dwarka to Somnath Drive & Light Show",
        description:
          "Drive from Dwarka to Somnath (230 km, approx 4.5 hours along the scenic coastal highway). Check into hotel. Visit the Somnath Temple for evening darshan, and watch the spectacular Sound & Light Show projected on the temple walls. Overnight stay in Somnath.",
      },
      {
        day: 4,
        title: "Triveni Sangam & Departure",
        description:
          "Visit Triveni Sangam, Bhalka Tirth, and Gita Mandir. Transfer to Rajkot or Jamnagar for your return journey to Kanpur.",
      },
    ],
    weather:
      "The best time to visit Dwarka and Somnath is from October to March (15°C to 30°C) when the weather is pleasant for sightseeing. Summers (April to June) are hot and humid (30°C to 40°C), while the monsoon (July to September) brings rough seas and rains, which look dramatic.",
    howToReach:
      "The road distance from Kanpur to Dwarka is about 1,350 km. Dwarka and Somnath are well-connected by train. The nearest airport is Jamnagar (125 km) or Rajkot (225 km). Rudra Tours handles all coastal road travel in private, comfortable AC vehicles with experienced drivers.",
    accommodation:
      "We arrange comfortable stays in premium hotels near the temple complexes in both Dwarka and Somnath, featuring vegetarian dining and clean facilities.",
    tips: [
      "Mobile phones, cameras, leather bags, and smartwatches are strictly banned inside both temple complexes; free locker facilities are available at the entrance.",
      "Take a ferry to Beyt Dwarka early in the morning to avoid long queues at the boat jetty.",
      "The Somnath Sound and Light show is held daily in Hindi (usually around 7:45 PM) and is highly recommended.",
      "Wear modest clothing for temple visits; avoid shorts, sleeveless tops, and beachwear inside temple gates.",
      "Carry enough cash for boat tickets and local purchases as network connectivity on the island can be slow.",
    ],
    faqs: [
      {
        question: "How do we reach Beyt Dwarka?",
        answer:
          "Beyt Dwarka is an island located 30 km from Dwarka. You must drive to Okha Port and then take a 30-minute public or private ferry ride across the sea.",
      },
      {
        question: "Is the road between Dwarka and Somnath safe?",
        answer:
          "Yes, the coastal highway (NH-51) is a well-maintained, scenic road that runs parallel to the Arabian Sea, offering a comfortable and safe drive.",
      },
      {
        question: "What is the entry fee for the Somnath Light Show?",
        answer:
          "There is a nominal entry fee of around ₹30 per person for the spectacular 45-minute Sound and Light show held in the temple gardens.",
      },
      {
        question: "Can we swim in the sea at Somnath?",
        answer:
          "No, swimming in the sea at Somnath beach is strictly prohibited due to high waves, rocky shores, and strong undercurrents.",
      },
      {
        question: "What is the significance of Nageshwar Jyotirlinga?",
        answer:
          "It is believed to be the first of the twelve Jyotirlingas, representing protection from all poisons and negative energies, housing a giant Shiva statue.",
      },
    ],
  },

  "rameshwaram-madurai": {
    overview:
      "Embark on a profound spiritual journey to the deep south of India, covering Madurai and Rameshwaram in Tamil Nadu. Madurai, often called the 'Athens of the East,' is one of India's oldest continuously inhabited cities. It is famous for the Meenakshi Amman Temple, a masterpiece of Dravidian architecture with towering, colorful gopurams. The tour then crosses the Pamban Bridge over the sea to Rameshwaram, located on Pamban Island. Rameshwaram is one of the Char Dham pilgrimage sites, where Lord Rama built a bridge to Lanka. The Ramanathaswamy Temple is famous for having the longest corridor of any temple in the world, with intricately carved pillars. This 4-day package from Kanpur is a journey of deep devotion, history, and natural beauty.",
    history:
      "Madurai's history is tied to the Pandyan Empire and the legendary Sangam literature. The Meenakshi temple was sacked in the 14th century by Malik Kafur but was rebuilt to its current grand state by the Nayak rulers in the 16th-17th centuries. Rameshwaram has historical roots in the Ramayana; Lord Rama, after defeating Ravana, worshipped Lord Shiva here to cleanse himself of the sin of killing a Brahmin (Ravana). The temple was constructed by the rulers of the Jaffna kingdom and later expanded by the Pandya and Sethupathi dynasties.",
    significance:
      "Madurai represents the peak of Dravidian temple culture, dedicated to Goddess Meenakshi (a manifestation of Parvati). Rameshwaram is unique as a meeting point of Shaivite and Vaishnavite devotion, where Rama (an avatar of Vishnu) worshipped Shiva. The pilgrimage is completed by bathing in the 22 holy wells (tirthas) inside the temple complex.",
    attractions: [
      {
        name: "Meenakshi Amman Temple, Madurai",
        description:
          "The massive temple complex featuring 14 gopurams (gateway towers), the Hall of Thousand Pillars, and detailed stone sculptures representing Hindu deities.",
      },
      {
        name: "Ramanathaswamy Temple, Rameshwaram",
        description:
          "Famous for its massive corridors, carved pillars, and the two sacred Shiva lingams — Ramalingam (built by Sita) and Vishwalingam (brought by Hanuman).",
      },
      {
        name: "Pamban Bridge",
        description:
          "The historic sea bridge connecting Pamban Island to the Indian mainland, offering spectacular views of the blue ocean and fishing boats.",
      },
      {
        name: "Dhanushkodi",
        description:
          "The ghost town at the southern tip of the island, destroyed in the 1964 cyclone. It is the starting point of Adam's Bridge (Ram Setu) where the Bay of Bengal meets the Indian Ocean.",
      },
      {
        name: "Tirumalai Nayakkar Mahal",
        description:
          "A grand 17th-century palace in Madurai built by King Tirumalai Nayak, featuring massive white pillars and Italian-Dravidian architecture.",
      },
    ],
    hiddenGems: [
      {
        name: "Koodal Azhagar Temple",
        description:
          "A historic temple in Madurai dedicated to Lord Vishnu, featuring three different postures of the deity — sitting, standing, and reclining.",
      },
      {
        name: "Dr. A.P.J. Abdul Kalam National Memorial",
        description:
          "A beautifully designed memorial built in Rameshwaram in honor of India's former President, showcasing his life, achievements, and personal items.",
      },
      {
        name: "Ariyaman Beach",
        description:
          "A quiet, clean beach in Rameshwaram with calm waters and casuarina trees, ideal for relaxation and water sports away from the pilgrim crowds.",
      },
    ],
    festivals:
      "The Chithirai Festival in Madurai (April–May) is a grand 10-day celebration depicting the celestial wedding of Goddess Meenakshi and Lord Sundareswarar, drawing millions of spectators.",
    food: "Tamil Nadu offers rich South Indian flavors. Try Madurai's famous Jigarthanda (a sweet, cooling milk drink made with almond gum, sarsaparilla syrup, and ice cream), Idli and Dosa served with multiple chutneys and sambar, Parotta with Salna (spiced gravy), and traditional filter coffee.",
    shopping:
      "Shop for Sungudi sarees (traditional handloom cotton sarees from Madurai), brass oil lamps, carved wooden panels, sea shells, and authentic spices.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Madurai & Temple Visit",
        description:
          "Arrive in Madurai (via flight or train). Check into hotel. Visit the Meenakshi Amman Temple for evening darshan. Explore the bustling streets of Madurai. Overnight stay in Madurai.",
      },
      {
        day: 2,
        title: "Madurai Palace to Rameshwaram",
        description:
          "Visit the Tirumalai Nayakkar Mahal and Koodal Azhagar Temple. Post-lunch drive to Rameshwaram (170 km, approx 3.5 hours), crossing the Pamban Bridge. Check into hotel. Overnight stay in Rameshwaram.",
      },
      {
        day: 3,
        title: "Rameshwaram Temple & Dhanushkodi",
        description:
          "Morning ritual bath at Agni Tirtham beach and the 22 sacred wells inside the Ramanathaswamy Temple. Perform darshan of the Shiva lingam. In the afternoon, take a jeep ride to the ghost town of Dhanushkodi and view Adam's Bridge (Ram Setu) viewpoint. Overnight stay.",
      },
      {
        day: 4,
        title: "Kalam Memorial & Departure",
        description:
          "Visit the APJ Abdul Kalam Memorial and Ariyaman Beach. Drive back to Madurai for your return flight/train to Kanpur.",
      },
    ],
    weather:
      "Best visited from October to March (20°C to 30°C) when temperatures are pleasant. Summers (April to June) are hot and humid (28°C to 38°C). The monsoon (October to December - Northeast monsoon) brings moderate to heavy rains, making the seas rough but the landscape fresh.",
    howToReach:
      "Madurai Airport (IXM) has flights from major Indian hubs. Madurai and Rameshwaram are connected by broad-gauge railways. Rudra Tours handles all road transfers in comfortable, air-conditioned vehicles.",
    accommodation:
      "Stays range from boutique luxury hotels in Madurai to comfortable, clean pilgrimage hotels near the temple in Rameshwaram.",
    tips: [
      "Inside the Ramanathaswamy Temple, you must dry your clothes after taking the ritual bath in the 22 wells before entering the main sanctum.",
      "Respect the dress code: Dhoti/Pyjama for men, Saree/Salwar kameez for women; Western clothes like shorts are not allowed.",
      "Hire a local guide to navigate the 22 wells and coordinate the changing rooms.",
      "Dhanushkodi is a remote area with limited mobile network; return before sunset as entry is prohibited at night.",
      "Try the local filter coffee served in traditional brass davaras.",
    ],
    faqs: [
      {
        question: "What is the Pamban Bridge?",
        answer:
          "Pamban Bridge is a historic sea bridge that connects the town of Mandapam on the mainland to Pamban Island and Rameshwaram, offering spectacular views of the sea.",
      },
      {
        question: "How do we bathe in the 22 holy wells?",
        answer:
          "Pilgrims first take a dip in the sea (Agni Tirtham) and then queue inside the temple, where assistants pour water from each of the 22 wells, believed to have medicinal properties.",
      },
      {
        question: "How far is Rameshwaram from Madurai?",
        answer:
          "Rameshwaram is approximately 170 km from Madurai, which takes about 3.5 to 4 hours to travel by road via the NH-87 highway.",
      },
      {
        question: "Is Dhanushkodi accessible by car?",
        answer:
          "The road is well-built up to the viewpoint, allowing standard cars. For crossing the sandy stretches near Adam's Bridge, 4x4 jeeps or local buses are available.",
      },
      {
        question: "Is photography allowed inside Madurai temple?",
        answer:
          "No, mobile phones and cameras are strictly banned inside the Meenakshi temple complex for security and peace.",
      },
    ],
  },

  "leh-ladakh": {
    overview:
      "Perched in the trans-Himalayan region, Ladakh is famous for its dramatic desert mountains, crystal-clear blue lakes, ancient Tibetan monasteries, and high motorable passes. Our 7-day tour is designed to combine adventure and safety, featuring Leh town, the confluence of Indus and Zanskar, the high-altitude Pangong Lake, and the sand dunes of Nubra Valley. This Kanpur-planned itinerary is optimized with gradual acclimatization days to ensure a comfortable and healthy trip for families.",
    history:
      "Ladakh has a rich history as an independent kingdom that controlled the trade routes along the Indus Valley. It was closely tied to Tibet in terms of religion and culture. The Namgyal dynasty ruled Ladakh from the 15th to the 19th century, constructing the Leh Palace (modeled after Lhasa's Potala Palace). In 1834, Zorawar Singh, a general of the Dogra Empire under Maharaja Gulab Singh, invaded Ladakh, leading to its integration into Jammu & Kashmir. In 2019, Ladakh became a separate Union Territory.",
    significance:
      "Ladakh is the cultural center of Tibetan Buddhism in India, home to historic monasteries (gompas) like Hemis, Thiksey, and Diskit, which preserve ancient scriptures, thangkas, and murals. Geographically, it is a high-altitude cold desert, featuring unique geological formations like Magnet Hill, and serves as a major strategic outpost for India's borders.",
    attractions: [
      {
        name: "Pangong Tso Lake",
        description:
          "The famous high-altitude saline lake bordering India and Tibet, known for changing colors from blue to green and turquoise during the day.",
      },
      {
        name: "Nubra Valley & Hunder Dunes",
        description:
          "A high-altitude desert valley famous for its sand dunes and the double-humped Bactrian camels, offering camel safaris.",
      },
      {
        name: "Khardung La Pass",
        description:
          "One of the highest motorable roads in the world, standing at 17,582 feet, offering panoramic views of the Karakoram range.",
      },
      {
        name: "Sangam (Confluence)",
        description:
          "The scenic confluence of the muddy Indus River and the emerald Zanskar River, visible from the Leh-Srinagar highway.",
      },
      {
        name: "Diskit Monastery",
        description:
          "The oldest and largest monastery in Nubra Valley, home to a massive 106-foot tall statue of Maitreya Buddha overlooking the valley.",
      },
    ],
    hiddenGems: [
      {
        name: "Turtuk Village",
        description:
          "A beautiful border village near the Line of Control, famous for apricot orchards, distinct Balti culture, and views of Pakistan-administered peaks.",
      },
      {
        name: "Magnetic Hill",
        description:
          "A gravity hill where vehicles appear to roll uphill against gravity, a popular natural illusion on the Leh-Kargil highway.",
      },
      {
        name: "Gurudwara Pathar Sahib",
        description:
          "A beautiful Gurudwara built in 1517 to commemorate Guru Nanak Dev's visit to Ladakh, featuring a sacred boulder with his imprint.",
      },
    ],
    festivals:
      "Hemis Festival (June-July) is a vibrant celebration featuring sacred masked dances (Cham dances) performed by monks in colorful silk robes, celebrating the birth of Guru Padmasambhava. Ladakh Festival (September) showcases rich local culture and polo matches.",
    food: "Ladakhi food is simple and hearty. Try Thukpa (noodle soup with vegetables or meat), Momos (steamed dumplings), Skyu (traditional Ladakhi pasta cooked with root vegetables), Butter Tea (Gur-Gur Cha - salted tea brewed with yak butter), and fresh sea buckthorn juice.",
    shopping:
      "Shop for authentic Pashmina shawls and stoles, handmade woollen rugs, Tibetan prayer wheels and singing bowls, silver jewelry, apricots, and wooden handicrafts.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Leh & Acclimatization",
        description:
          "Fly into Leh (approx 11,500 feet). Check into hotel. Complete rest for acclimatization to the high altitude. Overnight stay in Leh.",
      },
      {
        day: 2,
        title: "Leh local sightseeing",
        description:
          "Leh local sightseeing. Visit Shanti Stupa, Leh Palace, Hall of Fame museum, and the confluence (Sangam) of Indus and Zanskar rivers. Overnight stay in Leh.",
      },
      {
        day: 3,
        title: "Leh to Nubra Valley via Khardung La",
        description:
          "Drive Leh to Nubra Valley via Khardung La Pass. Enjoy a double-humped camel safari on the sand dunes of Hunder. Overnight stay in a deluxe desert camp in Nubra.",
      },
      {
        day: 4,
        title: "Nubra to Pangong Lake via Shyok",
        description:
          "Visit Diskit Monastery and see the 106-foot tall Buddha statue. Drive to Pangong Lake via the Shyok River route. Check into your lakeside camp. Watch the sunset over the lake. Overnight stay.",
      },
      {
        day: 5,
        title: "Pangong to Leh via Chang La",
        description:
          "Spend the morning by the lake. Drive back to Leh. En route, stop at Chang La pass. Visit Thiksey Monastery. Overnight stay in Leh.",
      },
      {
        day: 6,
        title: "Hemis & Shey Day Trip",
        description:
          "Day trip to Hemis Monastery and Shey Palace. Evening at leisure to explore Leh market. Overnight stay.",
      },
      {
        day: 7,
        title: "Departure",
        description: "Check out, transfer to Leh Airport for your return flight to Kanpur/Delhi.",
      },
    ],
    weather:
      "The tourist season is short, from May to September (10°C to 25°C in Leh; night temperatures can drop to 0°C at Pangong). From October to April, the region is extremely cold (-15°C to 5°C), and roads are closed due to heavy snow.",
    howToReach:
      "Fly to Kushok Bakula Rimpochee Airport (IXL) in Leh. Road access is via the Manali-Leh Highway or Srinagar-Leh Highway, open in summer. Rudra Tours manages all internal travel in comfortable, high-ground-clearance SUVs (like Innova/Scorpio) with expert mountain drivers.",
    accommodation:
      "Stays range from boutique hotels and cottages in Leh to deluxe Swiss tents with heaters in Nubra Valley and Pangong Lake.",
    tips: [
      "Acclimatization is mandatory: Spend the first 24 hours lying down; avoid physical exertion to prevent Acute Mountain Sickness (AMS).",
      "Drink plenty of water; carry portable oxygen cylinders and consulting doctors for Diamox tablets.",
      "Inner Line Permits (ILP) are required for visiting Nubra, Pangong, and Turtuk; we handle all permits as part of the package.",
      "Carry heavy woollens, thermal wear, windcheaters, and good hiking shoes.",
      "Keep cash handy as ATMs are rare outside Leh and network signals are weak.",
    ],
    faqs: [
      {
        question: "What is AMS and how to prevent it?",
        answer:
          "Acute Mountain Sickness occurs due to low oxygen levels at high altitudes. Prevent it by drinking plenty of water, taking complete rest on day 1, and consulting a doctor for Diamox.",
      },
      {
        question: "Do we need a permit for Pangong Lake?",
        answer:
          "Yes, an Inner Line Permit (ILP) is mandatory for domestic and international tourists to visit Pangong, Nubra, and other border regions. We will arrange this for you.",
      },
      {
        question: "Which mobile networks work in Ladakh?",
        answer:
          "Only postpaid SIM cards from Airtel, Jio, and BSNL work in Ladakh. Prepaid connections from other states do not work at all.",
      },
      {
        question: "What is the best time to visit Ladakh?",
        answer:
          "The best time to visit is from mid-May to September when the mountain passes are clear of snow and the roads are open.",
      },
      {
        question: "Is Ladakh safe for children and elderly?",
        answer:
          "Yes, provided they acclimatize properly and do not have serious heart or lung conditions. Carry personal medications and keep oxygen levels monitored.",
      },
    ],
  },

  "mumbai-tour": {
    overview:
      "An immersive 4-day tour of Mumbai, India's financial capital, city of dreams, and the home of Bollywood. Stretching along the Arabian Sea, Mumbai is a city of extreme contrasts, where colonial-era Gothic heritage stands alongside towering modern skyscrapers and vibrant street life. This tour covers all major aspects of the city, from the historic Gateway of India and the sweeping curve of Marine Drive (known as the Queen's Necklace), to sacred landmarks like the Siddhivinayak Temple and Haji Ali Dargah. The itinerary also includes a crossing of the architectural marvel Bandra-Worli Sea Link, walks along the shores of Juhu Beach, and a glimpse into the history of the Kanheri Caves. This tour from Kanpur is the perfect holiday for families to experience the pulse, diversity, and spirit of Mumbai.",
    history:
      "Originally a collection of seven islands inhabited by the Koli fishing community, the region was ruled by local dynasties before being ceded to the Portuguese in 1534. The Portuguese named it 'Bom Bahia' (Good Bay), which later became Bombay. In 1661, the islands were gifted to King Charles II of Great Britain as part of the wedding dowry of Catherine of Braganza, who leased them to the British East India Company. Massive land reclamation projects throughout the 18th and 19th centuries merged the islands into a single landmass. Bombay played a key role in India's independence movement, being the site of the Quit India movement launch in 1942. The city was renamed Mumbai in 1995 to honor the local patron deity Mumbadevi.",
    significance:
      "Mumbai is the economic powerhouse of India, housing the Reserve Bank of India, the Bombay Stock Exchange, and the headquarters of major Indian conglomerates. It is also the epicenter of Indian cinema (Bollywood), producing hundreds of films annually and attracting talent and dreamers from every corner of the country. The city's spirit (the 'spirit of Mumbai') is legendary, characterized by resilience, hard work, and a multicultural fabric where festivals of all communities are celebrated with equal joy.",
    attractions: [
      {
        name: "Gateway of India & Taj Palace",
        description:
          "The iconic arch monument overlooking the Arabian Sea, built in 1924, situated next to the historic Taj Mahal Palace Hotel.",
      },
      {
        name: "Marine Drive (Queen's Necklace)",
        description:
          "A C-shaped concrete road running along the coast, offering spectacular sunset views and a glittering arc of streetlights at night.",
      },
      {
        name: "Siddhivinayak Temple",
        description:
          "The famous temple dedicated to Lord Ganesha, visited by millions of devotees, including celebrities, for his blessings.",
      },
      {
        name: "Haji Ali Dargah",
        description:
          "The historic mosque and tomb located on an islet off the coast of Lala Lajpatrai Marg, accessible via a narrow causeway during low tide.",
      },
      {
        name: "Bandra-Worli Sea Link",
        description:
          "The cable-stayed bridge spanning the Mahim Bay, connecting the Western Suburbs to South Mumbai, offering a scenic driving experience.",
      },
    ],
    hiddenGems: [
      {
        name: "Kanheri Caves",
        description:
          "A group of 109 rock-cut Buddhist monuments located inside the Sanjay Gandhi National Park, dating back to the 1st century BCE.",
      },
      {
        name: "Mani Bhavan",
        description:
          "The focal point of Gandhi's freedom activities in Bombay, now a museum showcasing his books, photos, and personal spinning wheels.",
      },
      {
        name: "Dhobi Ghat (Mahalaxmi)",
        description:
          "The massive open-air laundry where hundreds of washermen wash clothes in stone troughs, a unique glimpse of city life.",
      },
    ],
    festivals:
      "Ganesh Chaturthi (August-September) is Mumbai's most passionate and massive festival. The entire city comes alive with giant public pandals, music, dancing, and grand processions for the immersion (visarjan) of Lord Ganesha idols in the Arabian Sea.",
    food: "Mumbai's street food is legendary and highly accessible. Try the Vada Pav (spiced potato patty fried in chickpea batter, served in a bread roll with sweet and spicy chutneys, often called the Indian burger), Pav Bhaji (thick vegetable curry served with soft buttered bread rolls), Bhel Puri and Sev Puri (tangy, crunchy street snacks), Misal Pav, Bombay Sandwich, and sweet Falooda. Enjoy fresh fruit cream at Haji Ali Juice Centre.",
    shopping:
      "Shop for fashionable clothes, accessories, and export-surplus items at Colaba Causeway and Linking Road (Bandra), traditional leather goods, spices and dry fruits at Crawford Market, and traditional jewelry at Zaveri Bazaar.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Mumbai & Marine Drive Sunset",
        description:
          "Arrive in Mumbai (via flight or train). Check into your hotel. Spend the evening walking along Marine Drive to enjoy the ocean breeze, and view the Taj Mahal Palace Hotel and Gateway of India lit up at night. Overnight stay.",
      },
      {
        day: 2,
        title: "Buddhist Caves & Juhu Beach",
        description:
          "Take a drive to Sanjay Gandhi National Park and explore the ancient Kanheri Caves. Post-lunch, visit Juhu Beach to experience the sunset and try local street food. Overnight stay.",
      },
      {
        day: 3,
        title: "Siddhivinayak, Haji Ali & Heritage Drive",
        description:
          "Start with darshan at Siddhivinayak Temple. Walk along the causeway to Haji Ali Dargah (tide-dependent). Drive across the Bandra-Worli Sea Link. Visit Mani Bhavan and view Dhobi Ghat at Mahalaxmi. Overnight stay.",
      },
      {
        day: 4,
        title: "Colaba Shopping & Departure",
        description:
          "Spend the morning shopping at Colaba Causeway. Take a drive around the Victorian Gothic heritage buildings of Fort district before transferring to the airport or railway station for return journey.",
      },
    ],
    weather:
      "The best time to visit Mumbai is from November to February (18°C to 30°C) when the weather is dry and relatively cool. March to May is hot and highly humid (28°C to 35°C). The monsoon season (June to September) brings heavy rains, which can disrupt travel but make the seafronts majestic.",
    howToReach:
      "Mumbai's Chhatrapati Shivaji Maharaj International Airport (BOM) has flights from Kanpur and Lucknow. Chhatrapati Shivaji Maharaj Terminus (CSMT) and Mumbai Central connect directly to major Indian rail hubs. Rudra Tours manages all local transport in private AC vehicles.",
    accommodation:
      "We arrange stays in comfortable 3-star and 4-star hotels in South Mumbai (for heritage and sight-seeing) or North Mumbai (close to the airport and beaches) depending on your travel plans.",
    tips: [
      "Avoid traveling by local trains during peak office hours (8-11 AM and 5-8 PM) when they are heavily crowded.",
      "Check the high tide timings before planning your walk to Haji Ali Dargah, as the causeway gets submerged.",
      "Carry an umbrella or raincoat if traveling during the monsoon months (June-September).",
      "Bargain politely at street markets like Colaba Causeway and Linking Road.",
      "Wear comfortable walking shoes as exploring the heritage districts of South Mumbai is best done on foot.",
    ],
    faqs: [
      {
        question: "What is the best time to visit Haji Ali?",
        answer:
          "The dargah is accessible during low tide. It is best to check tide tables locally and visit during the daytime when the causeway is clear.",
      },
      {
        question: "How far is the airport from South Mumbai?",
        answer:
          "The distance is about 25 km, which takes approximately 45 to 60 minutes via the Bandra-Worli Sea Link depending on traffic.",
      },
      {
        question: "Are ferries to Elephanta Caves open in monsoons?",
        answer:
          "No, ferry services from Gateway of India are suspended from June to September due to rough weather and heavy rains.",
      },
      {
        question: "Is Vada Pav spicy?",
        answer:
          "Yes, it is typically served with spicy dry garlic chutney and green chilies, but you can request sweet tamarind chutney to suit your taste.",
      },
      {
        question: "Are metered taxis available in Mumbai?",
        answer:
          "Yes, black-and-yellow taxis and auto-rickshaws are metered and widely available, running on standard government tariff cards.",
      },
    ],
  },

  "kashmir-paradise": {
    overview:
      "Experience the ultimate alpine holiday with our 7-day Kashmir Paradise Tour. Celebrated as the 'Paradise on Earth,' the Kashmir Valley is renowned for its spectacular snow-capped peaks, high alpine meadows, pristine lakes, and warm hospitality. This comprehensive itinerary from Kanpur covers the best of Kashmir: the capital Srinagar with its floating houseboats and Mughal gardens, the meadow of flowers Gulmarg, the golden glacier valley Sonmarg, and the pine-forested riverside town of Pahalgam. This tour provides an optimized family holiday blending deep relaxation, scenic drives, and outdoor activities like the Gondola ride and river walks.",
    history:
      "The Kashmir Valley has a rich history dating back to ancient times. Srinagar was founded by Emperor Ashoka in the 3rd century BCE, and the region became a major center for Sanskrit scholarship, Buddhism, and Hinduism (particularly Kashmir Shaivism). From the 14th century onwards, Islamic influences grew under local Sultanates and later the Mughal Empire. Mughal Emperors Akbar, Jahangir, and Shah Jahan fell in love with Kashmir's natural beauty, constructing elaborate terraced pleasure gardens (like Shalimar and Nishat) and choosing it as their summer retreat. The region was later ruled by the Afghans, the Sikhs, and the Dogra dynasty before merging with India in 1947.",
    significance:
      "Kashmir holds unique cultural and geographical significance. It is home to Dal Lake, famous for its houseboats and floating lifestyle. Culturally, it is famous for the synthesis of Sufi traditions and local Kashmiri Pandit heritage, known as 'Kashmiriyat.' Strategically located in the northernmost part of India, the region is also home to some of the highest peaks in the Himalayas, feeding major rivers.",
    attractions: [
      {
        name: "Dal Lake & Houseboats",
        description:
          "Stay in a traditional wooden houseboat on Dal Lake and take a Shikara ride to see the floating gardens and markets.",
      },
      {
        name: "Mughal Gardens",
        description:
          "Shalimar Bagh and Nishat Bagh, featuring terraced lawns, cascading fountains, and ancient chinar trees designed by Mughal emperors.",
      },
      {
        name: "Gulmarg Gondola",
        description:
          "One of the highest and longest cable cars in Asia, taking you to Apharwat Peak at 13,780 feet for spectacular snow views.",
      },
      {
        name: "Betaab Valley, Pahalgam",
        description:
          "A picturesque valley named after the movie Betaab, featuring green meadows, snow peaks, and the Lidder River.",
      },
      {
        name: "Thajiwas Glacier, Sonmarg",
        description:
          "A stunning glacier accessible via a pony ride in Sonmarg, covered in snow year-round.",
      },
    ],
    hiddenGems: [
      {
        name: "Doodhpathri",
        description:
          "A quiet, less-visited alpine valley with lush green meadows and a gushing stream that flows with milky white waters.",
      },
      {
        name: "Dachigam National Park",
        description:
          "A wildlife sanctuary near Srinagar, home to the critically endangered Hangul (Kashmiri Stag) and Himalayan black bear.",
      },
      {
        name: "Naranag Ruins",
        description:
          "An 8th-century temple complex dedicated to Lord Shiva, featuring ancient stone carvings and ruins set in a serene valley.",
      },
    ],
    festivals:
      "The Srinagar Tulip Festival (April) marks the arrival of spring, showcasing over a million blooming tulips of various colors in Asia's largest tulip garden. Urs festivals are celebrated at local Sufi shrines (like Hazratbal and Charar-e-Sharief) with great devotion.",
    food: "Kashmiri cuisine is famous for Wazwan, a traditional multi-course feast. Try Rogan Josh (slow-cooked lamb in red gravy), Gushtaba (spiced meatballs in yogurt gravy), Yakhni (mutton or chicken cooked in yogurt sauce), and Dum Aloo. Drink Kahwa (traditional Kashmiri green tea brewed with saffron, almonds, cardamom, and cinnamon).",
    shopping:
      "Kashmir is famous for high-quality handicrafts. Buy authentic hand-knotted silk carpets, pure Pashmina shawls and stoles, carved walnut wood items, papier-mâché decorative crafts, fresh apples, walnuts, almonds, and high-grade Kashmiri saffron.",
    itinerary: [
      {
        day: 1,
        title: "Arrive in Srinagar & Houseboat Stay",
        description:
          "Arrive at Srinagar Airport. Meet our representative and transfer to your deluxe houseboat on Dal Lake. Enjoy a 2-hour evening Shikara ride. Overnight stay on houseboat.",
      },
      {
        day: 2,
        title: "Mughal Gardens & Sonmarg Day Trip",
        description:
          "Visit the historic Mughal Gardens (Shalimar & Nishat) and Shankaracharya Temple on a hilltop. Drive to Sonmarg (Meadow of Gold, 80 km). Explore Thajiwas Glacier on a pony. Return to Srinagar for overnight stay.",
      },
      {
        day: 3,
        title: "Gulmarg Gondola Ride",
        description:
          "Drive to Gulmarg (50 km). Ride the famous Gondola Cable Car up to Phase 1 (Kongdori) and Phase 2 (Apharwat Peak) for panoramic snow views. Enjoy snow walks or skiing. Overnight stay in Gulmarg.",
      },
      {
        day: 4,
        title: "Gulmarg to Pahalgam Valley",
        description:
          "Drive from Gulmarg to Pahalgam (140 km), visiting saffron fields and cricket bat manufacturing shops en route. Check into your hotel. Spend the evening walking along the Lidder River. Overnight stay in Pahalgam.",
      },
      {
        day: 5,
        title: "Pahalgam Local Exploration",
        description:
          "Hire local vehicles to visit Aru Valley, Betaab Valley, and Chandanwari (starting point of Amarnath Yatra). Enjoy horse riding in Baisaran meadow (often called Mini Switzerland). Overnight stay in Pahalgam.",
      },
      {
        day: 6,
        title: "Return to Srinagar & Shopping",
        description:
          "Drive back to Srinagar. Visit local handicraft cooperatives and explore the local markets. Stay in a premium hotel in Srinagar.",
      },
      {
        day: 7,
        title: "Departure",
        description:
          "Check out, transfer to Srinagar Airport for your return flight to Kanpur/Delhi.",
      },
    ],
    weather:
      "Kashmir is a year-round destination. Summer (April to June, 15°C to 28°C) offers green meadows and pleasant weather. Autumn (October to November) showcases the golden hues of Chinar trees. Winter (December to February, -5°C to 10°C) transforms the valley into a snow wonderland, with heavy snow in Gulmarg.",
    howToReach:
      "Fly to Srinagar International Airport (SXR), which has regular flights from major Indian hubs. Srinagar is also accessible via Jammu Tawi railway station followed by a scenic drive. Rudra Tours manages all transport in private AC/heater-equipped SUVs with experienced hill drivers.",
    accommodation:
      "We arrange comfortable stays in deluxe houseboats on Dal Lake (Srinagar), premium mountain hotels in Gulmarg, riverside resorts in Pahalgam, and 4-star hotels in Srinagar.",
    tips: [
      "Carry heavy woollens and thermal wear for winter visits; light jackets are recommended for summer nights.",
      "Book Gulmarg Gondola tickets online weeks in advance, as tickets are not available on-spot.",
      "Prepaid mobile SIM cards from other Indian states do not work in Jammu & Kashmir; carry a postpaid SIM (BSNL, Jio, or Airtel).",
      "Bargain politely with pony riders and local guides at tourist destinations.",
      "Keep cash handy, as ATM access and card machines can be unreliable in high-altitude valleys.",
    ],
    faqs: [
      {
        question: "Are houseboats heated in winter?",
        answer:
          "Yes, houseboats are equipped with electric heaters and traditional hot-water bags to ensure a cozy stay during the cold winter nights.",
      },
      {
        question: "How do we book the Gondola ride?",
        answer:
          "Gondola tickets must be booked online via the official J&K Tourism portal. We advise booking as soon as your travel dates are fixed.",
      },
      {
        question: "Is there an altitude difference between Srinagar and Gulmarg?",
        answer:
          "Yes, Srinagar is at 5,200 feet, while Gulmarg is at 8,690 feet. The temperature in Gulmarg is always significantly cooler.",
      },
      {
        question: "Do road closures happen in winter?",
        answer:
          "Heavy snowfall may temporarily close roads to Gulmarg or Sonmarg, but clearing crews work quickly to restore traffic. Sonmarg is usually closed during deep winter.",
      },
      {
        question: "Is Kashmir safe for families with young children?",
        answer:
          "Yes, Kashmir is highly welcoming and safe for tourists. Tourism is the primary livelihood, and locals are extremely hospitable.",
      },
    ],
  },

  "char-dham-yatra": {
    overview:
      "The ultimate spiritual pilgrimage in the Indian Himalayas, covering the sacred 'Char Dham' of Uttarakhand — Yamunotri, Gangotri, Kedarnath, and Badrinath. Nestled in the high Garhwal region, this 10-day yatra is believed to wash away all sins and grant liberation (moksha). The journey takes you through gushing rivers, steep valleys, and snow-capped peaks. You will trek to the source of the Yamuna River at Yamunotri, visit the source of the Ganga at Gangotri, undertake the sacred 16-km mountain trek to Kedarnath, and perform darshan at Badrinath, the home of Lord Vishnu. This package from Kanpur is designed with maximum safety, comfortable stays, and experienced mountain support to ensure a successful yatra for your family.",
    history:
      "The sacred Char Dham circuit was established in the 8th century by Adi Shankaracharya, the great philosopher-saint who revived Hinduism across India. He constructed the Badrinath temple and established a monastery (Jyotirmath) nearby, and is believed to have entered samadhi at Kedarnath. Yamunotri and Gangotri represent the sources of India's two most sacred rivers, which have been places of meditation for sages since Vedic times. The Kedarnath temple, dedicated to Lord Shiva, is believed to have been originally constructed by the Pandavas and later rebuilt by Adi Shankaracharya using massive stone blocks.",
    significance:
      "The Char Dham Yatra is considered a mandatory pilgrimage for every devout Hindu during their lifetime. Each site holds unique spiritual significance: Yamunotri (bathing in thermal springs to cleanse the body), Gangotri (worshipping Goddess Ganga at her alpine origin), Kedarnath (one of the 12 Jyotirlingas and the highest temple in the circuit), and Badrinath (one of the four primary Char Dhams of India, dedicated to Lord Vishnu as Badrinarayan).",
    attractions: [
      {
        name: "Kedarnath Temple",
        description:
          "The ancient temple of Lord Shiva, located at 11,755 feet against the majestic backdrop of the Kedarnath peak.",
      },
      {
        name: "Badrinath Temple",
        description:
          "The colorful temple dedicated to Lord Vishnu, located on the banks of the Alaknanda River, housing a self-manifested stone idol.",
      },
      {
        name: "Yamunotri Temple",
        description:
          "The shrine of Goddess Yamuna, located near natural hot water springs where pilgrims cook rice as prasad.",
      },
      {
        name: "Gangotri Temple",
        description:
          "The white granite temple of Goddess Ganga, set in a beautiful pine forest near the source of the river.",
      },
      {
        name: "Panch Prayag",
        description:
          "The five sacred river confluences of the Alaknanda River — Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, and Vishnuprayag.",
      },
    ],
    hiddenGems: [
      {
        name: "Harsil Valley",
        description:
          "A picturesque mountain valley en route to Gangotri, famous for its apple orchards, pine forests, and quiet hiking paths.",
      },
      {
        name: "Mana Village",
        description:
          "The last Indian village before the Tibet border, featuring ancient caves like Vyas Gufa, where Sage Vyas composed the Mahabharata.",
      },
      {
        name: "Tapt Kund",
        description:
          "Natural thermal springs located right below the Badrinath temple, where pilgrims take a holy bath before entering the temple.",
      },
    ],
    festivals:
      "The temples open annually in late April or early May (on Akshaya Tritiya) and close in November (on Bhai Dooj) due to heavy winter snow. The opening and closing ceremonies are marked by traditional drum beats, Vedic chanting, and thousands of devotees.",
    food: "Strictly vegetarian, simple, and freshly cooked food is served at all stops. Garlic and onion are not used in temple towns. Enjoy local Garhwali dishes like Gehat Dal, Phanu, chainsoo, and hot herbal teas.",
    shopping:
      "Buy sacred Ganga jal (holy water) in copper containers, prasad packets, rudraksha beads, woollen caps and sweaters handmade by local women, and dry fruits from Harsil.",
    itinerary: [
      {
        day: 1,
        title: "Drive Kanpur to Haridwar",
        description:
          "Depart Kanpur early morning, drive to Haridwar (approx 8-9 hours). Check into hotel. Attend the evening Ganga Aarti at Har Ki Pauri. Overnight stay.",
      },
      {
        day: 2,
        title: "Haridwar to Barkot Valley",
        description:
          "Drive from Haridwar to Barkot (220 km). Enjoy the winding mountain roads. Check into your hotel. Overnight stay.",
      },
      {
        day: 3,
        title: "Yamunotri Trek & Return",
        description:
          "Drive to Janki Chatti, then trek 6 km to Yamunotri. Take a holy dip in Surya Kund, perform darshan, and return to Barkot. Overnight stay.",
      },
      {
        day: 4,
        title: "Barkot to Uttarkashi",
        description:
          "Drive from Barkot to Uttarkashi (80 km). Visit the historic Vishwanath Temple in Uttarkashi. Overnight stay.",
      },
      {
        day: 5,
        title: "Gangotri Day Trip",
        description:
          "Day trip to Gangotri (100 km). Perform darshan, explore Harsil valley, and return to Uttarkashi for overnight stay.",
      },
      {
        day: 6,
        title: "Uttarkashi to Guptkashi",
        description:
          "Drive from Uttarkashi to Guptkashi/Sonprayag (200 km) along the Mandakini River. Overnight stay.",
      },
      {
        day: 7,
        title: "Trek to Kedarnath Temple",
        description:
          "Drive to Gaurikund, then begin the 16-km mountain trek to Kedarnath. Reach Kedarnath by evening, check into your guest house, and attend the night aarti. Overnight stay.",
      },
      {
        day: 8,
        title: "Kedarnath Darshan & Return Trek",
        description:
          "Perform morning darshan of the Kedarnath shivling. Trek back to Gaurikund and drive back to Guptkashi/Rudraprayag. Overnight stay.",
      },
      {
        day: 9,
        title: "Rudraprayag to Badrinath & Mana",
        description:
          "Drive from Rudraprayag to Badrinath (160 km) via Joshimath. Take a bath in Tapt Kund, visit the Badrinath temple, and explore the border village of Mana. Overnight stay.",
      },
      {
        day: 10,
        title: "Badrinath to Rishikesh & Kanpur Return",
        description:
          "Drive from Badrinath back to Rishikesh/Haridwar (300 km, passing through the Panch Prayag confluences). Drive back to Kanpur, completing the sacred circle.",
      },
    ],
    weather:
      "The yatra is open from May to November. The best time to visit is May-June (cool days, 10°C to 20°C) and September-October (clear skies, cold nights, 0°C to 15°C). Avoid travel during the monsoon months of July and August due to landslides and heavy rain.",
    howToReach:
      "Road travel is the primary mode. The route starts from Haridwar/Rishikesh and follows the mountain highways. Rudra Tours manages the entire 10-day circuit in specialized mountain vehicles (like high-ground-clearance Tempo Travellers or SUVs) with hill-certified drivers.",
    accommodation:
      "We arrange comfortable stays in family-run guest houses, heritage dharamshalas, and 3-star mountain hotels near the temple sites, focusing on clean toilets and warm water.",
    tips: [
      "Undergo a complete medical fitness checkup before travel; high altitudes can trigger respiratory and blood pressure issues.",
      "Pack heavy woollens, thermals, raincoats, umbrellas, and sturdy trekking shoes.",
      "Carry sufficient cash, as digital payment signals and ATMs are highly unreliable in the high mountains.",
      "Register online for the Uttarakhand Char Dham Yatra — registration is mandatory for all pilgrims.",
      "Book helicopter tickets to Kedarnath months in advance via the official government portal.",
    ],
    faqs: [
      {
        question: "How long is the trek to Kedarnath?",
        answer:
          "The trek from Gaurikund to Kedarnath is approximately 16 km long, taking about 6 to 8 hours depending on physical fitness.",
      },
      {
        question: "Is the Char Dham registration mandatory?",
        answer:
          "Yes, registration is mandatory and is checked at various police checkposts en route. We handle registration for all our package guests.",
      },
      {
        question: "Are helicopter services available for Kedarnath?",
        answer:
          "Yes, helicopter services operate from helipads at Phata, Sersi, and Guptkashi to Kedarnath. They must be booked in advance online.",
      },
      {
        question: "What is the age limit for the yatra?",
        answer:
          "There is no official age limit, but children under 5 and seniors over 70 should seek medical clearance due to low oxygen levels.",
      },
      {
        question: "What is Panch Prayag?",
        answer:
          "These are the five sacred confluences of the Alaknanda river — Devprayag, Rudraprayag, Karnaprayag, Nandaprayag, and Vishnuprayag — visited en route.",
      },
    ],
  },
};
