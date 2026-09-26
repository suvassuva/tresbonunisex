export interface AvedaProductItem {
  id: string;
  name: string;
  collection: "Botanical Repair™" | "Nutriplenish™" | "Invati Advanced™";
  category: string;
  size: string;
  idealFor: string;
  keyIngredients: string[];
  keyBenefits: string[];
  inSalonRitual: string;
  image: string;
}

export interface BrandItem {
  id: string;
  name: string;
  category: "hair" | "skin" | "waxing";
  categoryLabel: string;
  tagline: string;
  origin: string;
  badge: string;
  description: string;
  philosophy: string;
  keyLines: string[];
  inSalonServices: string[];
  takeHomeAvailable: boolean;
  image: string;
}

export const avedaProducts: AvedaProductItem[] = [
  {
    id: "botanical-repair",
    name: "Botanical Repair™ Intensive Strengthening System",
    collection: "Botanical Repair™",
    category: "3-Layer Bond Rebuilding & Repair",
    size: "100ml / 200ml / 350ml Salon Size",
    idealFor: "Color-treated, chemically processed, heat-styled, or brittle/weakened hair",
    keyIngredients: [
      "Plant-derived bond-multiplying molecule (cortex bond generator)",
      "Nourishing macro-green blend (certified organic avocado, green tea & sacha inchi seed oils)",
      "Plant-based complex that mimics hair's outer F-layer to seal the cuticle",
    ],
    keyBenefits: [
      "Repairs hair from the inside out across all 3 structural layers",
      "Reduces hair breakage by 92% after just one professional treatment",
      "Thermal heat defense shielding up to 450°F / 230°C",
      "Detangles instantly and helps prevent future split ends",
    ],
    inSalonRitual: "TRÈS BON Botanical Repair Deep Bond Reconstruction Hair Spa",
    image: "/products/aveda-botanical-repair.jpg",
  },
  {
    id: "nutriplenish",
    name: "Nutriplenish™ Superfood Hydration Collection",
    collection: "Nutriplenish™",
    category: "72-Hour Deep Moisture & UV Defense",
    size: "200ml Leave-In / 30ml Multi-Use Hair Oil",
    idealFor: "Dry, dehydrated, brittle, and frizzy hair textures (straight to coily)",
    keyIngredients: [
      "Certified organic Pomegranate Seed Oil rich in Omega-5 fatty acids",
      "Nourishing Mango Butter to restore lipid elasticity",
      "Organic Coconut Oil with low molecular weight for deep fiber penetration",
      "Sand Ginger (natural plant-derived UV filter)",
    ],
    keyBenefits: [
      "Provides 72 hours of nutrient-dense hydration without weighing hair down",
      "5-in-1 multi-use oil: pre-shampoo treatment, leave-in conditioner, blow-dry shine, and scalp therapy",
      "Protects hair from the drying effects of direct sun exposure and UV rays",
      "100% naturally derived, certified vegan superfood formulation",
    ],
    inSalonRitual: "TRÈS BON Nutriplenish Moisture Quenching Immersion Treatment",
    image: "/products/aveda-nutriplenish.jpg",
  },
  {
    id: "invati-advanced",
    name: "Invati Advanced™ Scalp Revitalizing & Density System",
    collection: "Invati Advanced™",
    category: "Ayurvedic Scalp Detox & Thinning Defense",
    size: "200ml Exfoliating Shampoo / 150ml Scalp Revitalizer Spray",
    idealFor: "Hair thinning, excessive shedding, weakened roots, and clogged scalps",
    keyIngredients: [
      "Certified organic Turmeric and Ginseng to invigorate the scalp microcirculation",
      "Certified organic Amla (Indian Gooseberry) that instantly thickens the hair shaft",
      "Wintergreen-derived Salicylic Acid to gently remove follicle-clogging sebum",
      "Caffeine & Eclipta prostrata (Bhringraj) botanical extracts",
    ],
    keyBenefits: [
      "Reduces hair loss by up to 53% caused by breakage during brushing and washing",
      "Gently unclogs scalp pores and removes hard-water mineral buildup",
      "Creates an instant lift at the hair root for visibly fuller silhouette",
      "Formulated according to authentic Ayurvedic herbal synergy",
    ],
    inSalonRitual: "TRÈS BON Ayurvedic Scalp Detox & Follicle Oxygenation Therapy",
    image: "/products/aveda-invati.jpg",
  },
];

export const brandsData: BrandItem[] = [
  // --- HAIR CARE BRANDS ---
  {
    id: "aveda",
    name: "Aveda",
    category: "hair",
    categoryLabel: "Botanical Hair Care",
    tagline: "Pure Flower & Plant Essences for High-Performance Hair Care",
    origin: "Minneapolis, USA",
    badge: "100% Vegan & Cruelty-Free",
    description:
      "A global benchmark in luxury plant-powered beauty. Aveda formulations harness botanical chemistry to rebuild damaged hair bonds, nourish the scalp microbiome, and lock in color vibrancy without synthetic silicones or parabens.",
    philosophy:
      "Care for the world we live in, from the products we make to the ways in which we give back to society.",
    keyLines: [
      "Botanical Repair™ (3-Layer Bond Multiplying Plant Technology)",
      "Nutriplenish™ (Superfood Omega-5 Deep Hydration)",
      "Invati Advanced™ (Ayurvedic Botanical Scalp & Density Care)",
      "Color Control (Plant-Based Anti-Fade Long-Lasting Protection)",
    ],
    inSalonServices: [
      "Botanical Repair Deep Bond Rebuilding Spa",
      "Ayurvedic Scalp Detox & Follicle Rejuvenation",
      "Nutriplenish Superfood Intense Moisture Therapy",
    ],
    takeHomeAvailable: true,
    image: "/products/aveda-botanical-repair.jpg",
  },
  {
    id: "3tenx",
    name: "3TENX Professional",
    category: "hair",
    categoryLabel: "High-Performance Hair Rituals",
    tagline: "Formulated for Indian Hair Textures, Humidity & Hard Water Defense",
    origin: "Mumbai / International Labs",
    badge: "Climate & Hard Water Defense",
    description:
      "Developed by seasoned luxury salon educators to conquer the specific challenges of Indian weather, urban pollution, and hard water mineral deposits. Renowned for rich caviar infusions, botoplexx structural rejuvenation, and long-lasting smoothness.",
    philosophy:
      "Targeted professional formulations engineered specifically for Indian hair integrity, moisture retention, and luminous movement.",
    keyLines: [
      "Hydra Revíve (Moisture Quenching & Anti-Humidity Shield)",
      "Ultimate Rèvitalize (Keratin, Collagen & Bond Fortification)",
      "Botoplexx Structural Hair Renewal System",
      "Caviar Infusion Anti-Frizz High-Shine Concentrate",
    ],
    inSalonServices: [
      "3TENX Hydra Revíve Moisture Immersion Ritual",
      "Ultimate Rèvitalize Restorative Hair Spa",
      "Botoplexx Frizz-Control Smoothing Treatment",
    ],
    takeHomeAvailable: true,
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "wella",
    name: "Wella Professionals",
    category: "hair",
    categoryLabel: "Salon Color & Reconstruction",
    tagline: "Over 140 Years of German Color Innovation & Fiber Defense",
    origin: "Darmstadt, Germany",
    badge: "Global Color Authority",
    description:
      "The undisputed global standard for precision hair coloring and fiber restoration. Wella's patented Pure Balance and Metal Purifier technologies ensure radiant, true-to-tone color lift while shielding the internal hair architecture.",
    philosophy:
      "Passion for hairdressing excellence through scientifically proven coloration, bond rebuilding, and editorial styling mastery.",
    keyLines: [
      "Koleston Perfect ME+ (True-Tone Color Balance with Reduced Allergy Risk)",
      "Illumina Color (Translucent, Sheer Microlight Reflection)",
      "Fusionplex (Silk Amino Acids for Instant Fiber Resilience)",
      "Invigo Color Brilliance (Antioxidant Color Protection)",
    ],
    inSalonServices: [
      "Bespoke Balayage & French Dimension Color",
      "Illumina Translucent Gloss & Tone Bath",
      "Fusionplex Intensive Bond Repair Hair Spa",
    ],
    takeHomeAvailable: true,
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80",
  },

  // --- SKIN CARE BRANDS ---
  {
    id: "jeannot",
    name: "Jeannot Ceuticals",
    category: "skin",
    categoryLabel: "Dermo-Cosmeceuticals",
    tagline: "Clinical European Cosmeceuticals with Triple Action Technology",
    origin: "France & Spain (Ekta & Skeyndor Labs)",
    badge: "Clinical Dermo-Aesthetics",
    description:
      "Born from European clinical laboratory research, Jeannot Ceuticals bridges botanical purity with high-efficacy dermo-cosmeceuticals. Rigorously tested for allergy prevention, cellular renewal, and targeted anti-pigmentation therapy.",
    philosophy:
      "Scientifically proven active concentrations that reprogram skin vitality, stimulate natural collagen, and brighten uneven skin tones.",
    keyLines: [
      "White Truffle & Vitamin C Brightening Programme",
      "Pro-Collagen Concentrates (Elasticity & Fine Line Smoothing)",
      "Deep Cellular Hydration & Barrier Balancing Emulsion",
      "Dry Touch High-Performance Photoprotective SPF 50",
    ],
    inSalonServices: [
      "Jeannot White Truffle Radiance & Brightening Facial",
      "Pro-Collagen Youth Restorative Therapy",
      "Intensive Moisture Barrier Quenching Ritual",
    ],
    takeHomeAvailable: true,
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "dermafig",
    name: "Dermafig",
    category: "skin",
    categoryLabel: "Organic Botanical Dermatology",
    tagline: "Prickly Pear Seed Elixir for Cellular Rejuvenation & Dewy Radiance",
    origin: "Mediterranean / Tunisia",
    badge: "Organic Prickly Pear Elixir",
    description:
      "Renowned in specialized aesthetic spas for its ultra-pure organic Prickly Pear Seed Oil (Figue de Barbarie). Containing nature's richest concentration of Vitamin E, sterols, and omega-6 fatty acids, Dermafig restores moisture barriers and creates luminous glass skin.",
    philosophy:
      "Harnessing Mediterranean botanical resilience to combat oxidative stress, promote cellular repair, and impart dewy, ageless luminosity.",
    keyLines: [
      "Pure Prickly Pear Seed Youth Repair Elixir",
      "Botanical Radiance Face & Contour Nectar",
      "Nourishing Barbary Fig & Argan Lipid Complex",
      "Gentle Purifying Micellar Cleansing Emulsion",
    ],
    inSalonServices: [
      "Dermafig Mediterranean Dewy Glow Facial",
      "Antioxidant Prickly Pear Barrier Therapy",
      "Restorative Contour & Fine-Line Infusion",
    ],
    takeHomeAvailable: true,
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80",
  },

  // --- WAXING BRANDS ---
  {
    id: "depileve",
    name: "Depilève",
    category: "waxing",
    categoryLabel: "Professional Waxing System",
    tagline: "The World's #1 Professional Low-Temperature Waxing Authority",
    origin: "Madrid, Spain",
    badge: "World's #1 Waxing System",
    description:
      "Present in premier aesthetic clinics and luxury spas across 90+ countries. Depilève's patented stripless film waxes melt at low temperatures, adhering strictly to the hair root without pulling live skin cells, resulting in minimum discomfort and virtually no redness.",
    philosophy:
      "Redefining waxing into a restorative skincare ritual with low-temp resins that protect sensitive skin and intimate zones.",
    keyLines: [
      "Cerazyme DNA Rejuvenating Film Wax (Low Temp, Anti-Aging)",
      "Monoi de Tahiti Strip-Free Film Wax for Sensitive Areas",
      "Natural Pine Rosin & Azulene Calming Strip Formulations",
      "Pre & Post-Depilatory Soothing Antiseptic Lotions",
    ],
    inSalonServices: [
      "Pain-Minimized Brazilian & Bikini Waxing",
      "Precision Facial, Lip & Eyebrow Depilève Sculpting",
      "Cerazyme Ultra-Smooth Full Body Waxing",
    ],
    takeHomeAvailable: false,
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "rica",
    name: "Rica (Reck)",
    category: "waxing",
    categoryLabel: "Italian Liposoluble Wax",
    tagline: "100% Natural Resin Liposoluble Wax for Velvet Smooth Skin",
    origin: "Sicily, Italy",
    badge: "100% Colophony-Free Italian Wax",
    description:
      "The global gold standard in gentle liposoluble hair removal. Formulated with 100% natural Sicilian pine resin, vegetable oils, and titanium dioxide. Completely free of harsh colophony chemicals, Rica leaves skin touchably soft with zero sticky after-feel.",
    philosophy:
      "Natural ingredients, hypoallergenic formulations, and superior skin affinity for a painless, nourishing waxing experience.",
    keyLines: [
      "White Chocolate Nourishing Liposoluble Wax",
      "Avocado Butter Sensitive Skin Formulation",
      "Aloe Vera & Chlorophyll Redness-Calming Wax",
      "Titanium Dioxide Velvet Finish Body Wax",
    ],
    inSalonServices: [
      "Rica White Chocolate Luxury Full Body Waxing",
      "Sensitive Zone Underarm & Bikini Smooth Peel",
      "Rica Avocado Calming Arms & Legs Waxing",
    ],
    takeHomeAvailable: false,
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=80",
  },
];
