export interface ServiceItem {
  slug: string;
  name: string;
  category: "Hair" | "Colour" | "Beauty" | "Grooming" | "Bridal";
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  galleryImages: string[];
  startingPrice: string;
  duration: string;
  offerings: Array<{ title: string; desc: string }>;
  benefits: string[];
  pricingTiers: Array<{ item: string; price: string; note?: string }>;
  faqs: Array<{ question: string; answer: string }>;
}

export const servicesData: ServiceItem[] = [
  {
    slug: "haircut",
    name: "Creative Haircuts",
    category: "Hair",
    tagline: "Architecture in Motion",
    shortDescription: "Bespoke precision cutting sculpted to harmonize with your facial structure, lifestyle, and natural texture.",
    fullDescription: "At TRÈS BON, a haircut is never an off-the-shelf routine. We initiate every session with an editorial consultation—evaluating hair density, growth patterns, skull anatomy, and your personal maintenance rhythm. Whether you crave a razor-sharp geometric bob, airy textured layers, or a seamless gender-affirming fade, our stylists blend British precision with effortless contemporary styling.",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹850",
    duration: "45–60 mins",
    offerings: [
      { title: "Bespoke Consultation", desc: "Detailed discussion on hair texture, lifestyle, and facial contours." },
      { title: "Detox Shampoo & Scalp Prep", desc: "Sensory botanical cleanse with warm water rinse and relaxing temple massage." },
      { title: "Precision Wet & Dry Cut", desc: "Architectural shaping wet, followed by dry refinement for effortless movement." },
      { title: "Editorial Blow-dry & Finish", desc: "Custom thermal blow-out using premium heat protectants and texturizers." },
    ],
    benefits: [
      "Individually sculpted to complement your distinct facial balance",
      "Retains intentional shape for weeks as hair grows out naturally",
      "Weight removal and texturizing that makes at-home daily styling effortless",
      "Conducted with hypoallergenic, salon-grade styling elixirs",
    ],
    pricingTiers: [
      { item: "Signature Precision Haircut", price: "₹850", note: "Includes cleanse & blow-dry" },
      { item: "Creative Director Cut (Kamala)", price: "₹1,400", note: "Master styling & tailored consultation" },
      { item: "Fringe / Bangs / Neck Refinement", price: "₹350", note: "Express touch-up between appointments" },
      { item: "Junior / Teen Stylist Cut", price: "₹650", note: "Under 14 years" },
    ],
    faqs: [
      {
        question: "How should I prepare for my haircut appointment?",
        answer: "Feel free to bring reference imagery, but it's not compulsory! We encourage coming as you are—with your typical hair texture so we can see how your hair naturally behaves."
      },
      {
        question: "Does the service include hair wash and styling?",
        answer: "Yes, every haircut at TRÈS BON includes a detoxifying scalp wash, conditioning treatment, and our signature editorial blow-out."
      },
      {
        question: "How often should I return for maintenance?",
        answer: "Short fades and bobs typically look crispest with a trim every 3–5 weeks. Medium to long styles maintain their shape beautifully for 8–10 weeks."
      }
    ]
  },
  {
    slug: "hair-colour",
    name: "Vibrant Hair Colour",
    category: "Colour",
    tagline: "Dimensional Radiance & Rich Tonality",
    shortDescription: "From seamless sunlit balayage to bold fashion pigments and seamless grey blending.",
    fullDescription: "Colour is the ultimate declaration of personal identity. Our colourists use ammonia-free European formulations infused with bond-protecting peptides that preserve the integrity of your hair fiber while achieving depth, contrast, and vibrant saturation. Each tone is custom-mixed at our styling bar to illuminate your natural skin undertones.",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹2,200",
    duration: "90–180 mins",
    offerings: [
      { title: "Skin-Tone Chroma Mapping", desc: "Selecting shades and warmth levels that flatter your specific complexion." },
      { title: "Root Melts & Global Tint", desc: "Flawless uniform coverage with multidimensional light reflection." },
      { title: "Artisan Balayage & Foilayage", desc: "Hand-painted organic highlights for seamless, low-maintenance grow-out." },
      { title: "Gloss & Bond Restorer", desc: "Pore-sealing pH acidic glaze that locks in vibrancy and mirror-like shine." },
    ],
    benefits: [
      "Bond-repairing formulations prevent breakage and preserve cuticle health",
      "Zero harsh demarcation lines with our signature shadow root technique",
      "Long-lasting UV and chlorine shielding gloss finish",
      "100% cruelty-free, low-chemical vegan pigment options available",
    ],
    pricingTiers: [
      { item: "Global Hair Colour (Touch-up / Full)", price: "From ₹2,200", note: "Pricing varies by hair length" },
      { item: "Artisan Balayage / Ombré", price: "From ₹4,500", note: "Includes bond builder & custom gloss" },
      { item: "Highlight Foiling (Crown / Full Head)", price: "From ₹3,000", note: "Dimensional accentuation" },
      { item: "Acidic Gloss & Toner Refresh", price: "From ₹1,800", note: "Instant revitalization & gloss" },
    ],
    faqs: [
      {
        question: "Will colouring damage my delicate or curly hair?",
        answer: "We incorporate Olaplex/K18 bond-building matrices directly into lighteners and color formulas to maintain elasticity, curl definition, and moisture balance."
      },
      {
        question: "How long does a balayage service take?",
        answer: "Balayage typically requires between 2.5 to 3.5 hours depending on hair length, density, and whether pre-lightening is needed."
      },
      {
        question: "What aftercare products do you recommend?",
        answer: "We supply color-safe, sulfate-free shampoos and nourishing leave-in conditioners to prevent oxidation and brassiness."
      }
    ]
  },
  {
    slug: "hair-spa",
    name: "Restorative Hair Spa",
    category: "Hair",
    tagline: "Deep Follicular Rejuvenation",
    shortDescription: "Therapeutic deep-conditioning, scalp exfoliation, and hot towel steam rituals for silky strength.",
    fullDescription: "Modern urban stress, Bengaluru's hard water, and pollution can compromise hair vitality. Our Hair Spa is an immersive sensorial journey. We cleanse the scalp with micro-exfoliating botanical scrubs, apply concentrated amino-acid masks under ozone micro-mist steam, and complete the ritual with an acupressure shoulder and neck release that melts away tension.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1512290900672-1f55b9a8972e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337094345-a044af567ce8?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹1,400",
    duration: "60 mins",
    offerings: [
      { title: "Trichology Scalp Analysis", desc: "High-magnification evaluation of sebum balance and follicle clarity." },
      { title: "Exfoliating Sea Salt Scrub", desc: "Lifts product residue, dandruff, and pollutants from the scalp surface." },
      { title: "Ozone Micro-Mist Infusion", desc: "Gentle warm vapor penetrates deeply into the cuticle without thermal stress." },
      { title: "Acupressure Neck & Scalp Massage", desc: "Stimulates micro-circulation for robust, energized follicle growth." },
    ],
    benefits: [
      "Instantly relieves scalp irritation, dryness, and flaking",
      "Restores hydration to brittle, chemical-treated, or sun-damaged hair",
      "Noticeably smoother hair shaft with reduced frizz and flyaways",
      "Promotes deep systemic relaxation and mental calm",
    ],
    pricingTiers: [
      { item: "Intense Moisture Infusion Spa", price: "₹1,400", note: "Ideal for dry or sun-exposed strands" },
      { item: "Deep Scalp Detox & Anti-Dandruff Spa", price: "₹1,750", note: "Includes tea tree scrub & ozone vapor" },
      { item: "Bond Reinforcement & Keratin Infusion", price: "₹2,400", note: "For bleached or heat-damaged textures" },
      { item: "Moroccan Oil Luxury Elixir Spa", price: "₹2,800", note: "Argan-rich luxury ritual with extended massage" },
    ],
    faqs: [
      {
        question: "How frequently should I get a hair spa treatment?",
        answer: "For optimal maintenance, once every 3 to 4 weeks delivers continuous moisture and protects against hard-water mineral buildup."
      },
      {
        question: "Can I get a haircut on the same day as my hair spa?",
        answer: "Absolutely! Pairing a restorative spa with a haircut allows our stylists to shape freshly softened, supple strands for optimum precision."
      }
    ]
  },
  {
    slug: "facial",
    name: "Radiance & Hydrating Facials",
    category: "Beauty",
    tagline: "Cellular Glow & Pure Clarity",
    shortDescription: "Customized dermatological facials designed to replenish, brighten, and firm all skin types.",
    fullDescription: "Our facial therapies bridge holistic botanical pampering with clinical efficacy. Every facial is tailored directly to your skin's immediate condition—whether addressing urban dullness, hyperpigmentation, moisture depletion, or blemish congestion. Featuring gentle ultrasonic extraction, cryo-lymphatic drainage globes, and active antioxidant masks.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1512290900672-1f55b9a8972e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506152983158-b4a74a01c721?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹1,800",
    duration: "60–75 mins",
    offerings: [
      { title: "Skin Diagnostic Scan", desc: "Assessing barrier integrity, pore congestion, and hydration levels." },
      { title: "Ultrasonic Deep Cleansing", desc: "Non-invasive sound waves gently dislodge impurities and blackheads." },
      { title: "Cryo-Globe Sculpting", desc: "Chilled ice-globes calm inflammation and tone facial contours." },
      { title: "Alginate Hydro-Jelly Mask", desc: "Seals in bioactive serums and boosts collagen regeneration." },
    ],
    benefits: [
      "Imparts an instantaneous, luminous, healthy glass-skin glow",
      "Decongests pores and visibly refines skin texture",
      "Drains puffiness around eyes and jawline via lymphatic massage",
      "Completely customized formulations suitable for sensitive and acne-prone skin",
    ],
    pricingTiers: [
      { item: "Instant Dewy Glow Facial", price: "₹1,800", note: "Hydrating hyaluronic acid infusion" },
      { item: "Brightening Vitamin C & Collagen Ritual", price: "₹2,600", note: "Targets sun spots and dullness" },
      { item: "Charcoal & Salicylic Clarifying Facial", price: "₹2,200", note: "For congested and breakout-prone skin" },
      { item: "TRÈS BON Signature Royal Gold Radiance", price: "₹3,500", note: "Includes 24k gold peptides & neck therapy" },
    ],
    faqs: [
      {
        question: "Is there downtime or redness after the facial?",
        answer: "We use non-aggressive extraction methods and cooling botanical soothing agents, meaning you can step right out into your day with glowing, calm skin."
      },
      {
        question: "How long will the post-facial glow last?",
        answer: "The radiant dewy effect typically lasts 2–3 weeks, especially when supported with proper SPF and hydration."
      }
    ]
  },
  {
    slug: "beard-grooming",
    name: "Precision Beard Grooming",
    category: "Grooming",
    tagline: "Crisp Contours & Bespoke Conditioning",
    shortDescription: "Hot towel shaves, architectural beard sculpting, and organic beard oil infusions.",
    fullDescription: "Elevate your facial hair into a statement of refined distinction. Our grooming masters combine old-world barbering traditions with modern aesthetic balance. From shaping high cheek lines and fading jawlines to luxuriant steam towels and botanical conditioning oils, we deliver crisp outlines and deep follicle nourishment.",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517832606589-7629c339590a?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹450",
    duration: "30–45 mins",
    offerings: [
      { title: "Jawline Contouring Consultation", desc: "Sculpting angles that accentuate your natural jaw and chin line." },
      { title: "Triple Eucalyptus Hot Towel Ritual", desc: "Opens pores and softens stubborn beard bristles for razor gliding." },
      { title: "Straight Razor Edge Sharpening", desc: "Single-use hygienic blades for millimeter-perfect cheek and neck borders." },
      { title: "Cold Stone Finish & Beard Balm", desc: "Tightens pores and seals with cedarwood and jojoba botanical oil." },
    ],
    benefits: [
      "Eliminates razor burn, ingrown hairs, and neck irritation",
      "Enhances masculine and androgynous jawline geometry",
      "Conditions coarse beard hair for softer, manageable growth",
      "Express service with complete luxury ritual feel",
    ],
    pricingTiers: [
      { item: "Beard Sculpt & Razor Outline", price: "₹450", note: "Includes hot towel & balm" },
      { item: "TRÈS BON Signature Royal Shave", price: "₹650", note: "Complete traditional straight-razor shave" },
      { item: "Beard Colouring & Grey Blending", price: "₹800", note: "Natural dimensional tones" },
      { item: "Beard Conditioning Spa Treatment", price: "₹700", note: "Deep steam cleanse & moisture balm" },
    ],
    faqs: [
      {
        question: "Can I combine beard grooming with a haircut?",
        answer: "Yes! Most clients pair their haircut and beard grooming for a cohesive, fresh look in one seamless 75-minute appointment."
      },
      {
        question: "Do you cater to sensitive skin prone to razor bumps?",
        answer: "Every blade we use is sterile and brand new, followed immediately by tea tree, witch hazel, and icy cold stone therapy to soothe micro-inflammation."
      }
    ]
  },
  {
    slug: "bridal",
    name: "Bespoke Bridal & Occasion",
    category: "Bridal",
    tagline: "Timeless Elegance For Your Defining Day",
    shortDescription: "Complete couture hair styling, HD makeup, draping, and pre-wedding rejuvenation packages.",
    fullDescription: "Your milestone moments deserve uncompromising attention to detail. TRÈS BON's bespoke bridal and occasion styling services cater to brides, grooms, and bridal parties. We curate a tranquil sanctuary on your big day, orchestrating radiant HD makeup, intricate couture updos, floral integration, and saree/dupatta draping with effortless grace.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    ],
    startingPrice: "₹8,500",
    duration: "3–5 hours",
    offerings: [
      { title: "Look Consultation & Moodboarding", desc: "Aligning hair, palette, and jewellery with your wardrobe and lighting." },
      { title: "Waterproof HD / Airbrush Artistry", desc: "Long-wear, camera-ready complexion that withstands hugs, tears, and heat." },
      { title: "Couture Hair Architecture", desc: "Traditional South & North Indian bridal updos, romantic waves, and veil pinning." },
      { title: "Saree & Dupatta Precision Draping", desc: "Crease-proof pinning and pleating for effortless freedom of movement." },
    ],
    benefits: [
      "Dedicated senior styling crew on-site or in our private salon lounge",
      "Trial sessions available to eliminate wedding day uncertainty",
      "Exclusive packages for couples, brides, grooms, and bridesmaids",
      "Includes premium lash extensions, hair accessories, and touch-up kit",
    ],
    pricingTiers: [
      { item: "Signature Bridal Look (Hair + HD Makeup)", price: "From ₹8,500", note: "Includes draping & false lashes" },
      { item: "TRÈS BON Royal Airbrush Bridal Package", price: "From ₹14,500", note: "Complete high-definition luxury look" },
      { item: "Groom's Royal Styling & Glow Package", price: "From ₹4,500", note: "Hair, beard sculpt, glow facial & styling" },
      { item: "Sangeet / Reception Party Glam", price: "From ₹5,000", note: "Contemporary occasion makeup & styling" },
    ],
    faqs: [
      {
        question: "How far in advance should I book bridal dates?",
        answer: "We recommend reserving your dates at least 4–8 weeks in advance during peak wedding seasons to guarantee stylist availability."
      },
      {
        question: "Do you provide on-venue bridal services?",
        answer: "Yes, our creative team is equipped for on-location wedding styling throughout Bengaluru as well as private bookings at our salon."
      },
      {
        question: "Can we schedule a prior hair and makeup trial?",
        answer: "Yes! We highly recommend booking a trial session 2–3 weeks prior so we can test shades and accessories together."
      }
    ]
  }
];
