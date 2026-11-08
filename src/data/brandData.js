export const BRAND_INFO = {
  name: "Health Junkie",
  founder: "Nicole Lazar",
  founderTitle: "Founder & Board Certified Holistic Health Practitioner (Former NASA Engineer)",
  location: "Cleveland, Ohio",
  foundedYear: 2018,
  tagline: "Immunity Handcrafted Without The Junk",
  subtagline: "Formulated by a Holistic Health Practitioner with 100% clean, organic ingredients. Sweetened with raw local honey or pure maple syrup. 50-90% less sugar than leading supplement brands.",
  mission: "To promote true wellness from the inside out, nourishing bodies and minds without processed sugars, artificial additives, or fillers.",
  phone: "(216) 245-8120",
  email: "hello@heyhealthjunkie.com",
  socials: {
    instagram: "https://instagram.com/HeyHealthJunkie",
    facebook: "https://facebook.com/healthjunkie"
  },
  retailPartners: ["Heinen's Grocery Store", "Buehler's Fresh Foods", "Local Cleveland Farmers Markets"]
};

export const PRODUCTS = [
  {
    id: "cheeky-tart-cherry",
    title: "Cheeky Tart Cherry Elderberry Syrup",
    handle: "elderberry-syrup-cheeky-tart-cherry",
    category: "Syrup",
    flavor: "Tart Cherry",
    badge: "Vegan & Low Sugar",
    tagline: "Delicate, mouthwatering & family-favorite",
    accentColor: "#9E1C38",
    bgGradient: "from-[#420D1A] via-[#2A0811] to-[#160408]",
    shortDesc: "Antioxidant-rich duo of tart cherry and organic Sambucus Nigra elderberries meet with a delicate, mouthwatering flavor. Sweetened with 100% pure local maple syrup.",
    fullDesc: "Antioxidant-rich duo tart cherry and elderberry meet with a delicate, mouthwatering flavor. This fan favorite is perfect for picky eaters and young children. Handcrafted in small batches in Cleveland, Ohio with organic ingredients and sweetened exclusively with local maple syrup — zero honey, making it 100% vegan and safe for toddlers under one who eat solids.",
    ingredients: [
      "Organic Sambucus Nigra Elderberries",
      "Organic Tart Cherry Juice",
      "Pure Local Maple Syrup",
      "Filtered Water",
      "Organic Lemon Juice"
    ],
    highlights: [
      "Vegan (Sweetened with pure local maple syrup)",
      "Only 1g sugar per tablespoon (90% less than leading brands)",
      "Safe for toddlers under 1 eating solids",
      "No artificial preservatives, thickeners, or extracts",
      "Rich in anthocyanins & natural melatonin for restful sleep"
    ],
    tastingNotes: "Bright, tart, subtly sweet with deep berry undertones",
    sizes: [
      { size: "8.3 fl oz", price: 15.00, value: "$1.80 / oz", popular: false },
      { size: "16.5 fl oz", price: 24.00, value: "$1.45 / oz", popular: true, note: "Best Value • Save 20%" }
    ],
    images: {
      bottle: "/assets/cherry-bottle.png",
      flatlay: "/assets/cherry-flatlay.png",
      lifestyle: "/assets/cherry-mocktail.jpg",
      recipe: "/assets/cherry-yogurt.jpg",
      nutrition: "/assets/cherry-nutrition.png"
    },
    reviewsCount: 31,
    rating: 5.0,
    stats: {
      sugar: "1g per tbsp",
      antioxidants: "Ultra High",
      sweetener: "Local Maple Syrup"
    }
  },
  {
    id: "sassy-cinnamon",
    title: "Sassy Cinnamon Elderberry Syrup",
    handle: "elderberry-syrup-sassy-cinnamon",
    category: "Syrup",
    flavor: "Cinnamon & Warm Spices",
    badge: "Founder's Favorite",
    tagline: "Decadent warm spice blend with notes of clove & nutmeg",
    accentColor: "#B04C28",
    bgGradient: "from-[#4A1D0E] via-[#2D1208] to-[#180A04]",
    shortDesc: "A decadent spice-infused blend complementing antioxidant-rich elderberry. Featuring Ceylon cinnamon with warm notes of nutmeg, clove, and fresh ginger.",
    fullDesc: "A decadent spice-infused blend complements antioxidant-rich elderberry. Featuring warm cinnamon with aromatic notes of nutmeg, clove, and ginger. Kid-friendly and Nicole Lazar's personal everyday favorite! Sweetened with raw local Ohio honey, this handcrafted superfood boost is the ultimate autumn and winter seasonal wellness companion.",
    ingredients: [
      "Organic Sambucus Nigra Elderberries",
      "Raw Local Ohio Honey",
      "Organic Ceylon Cinnamon",
      "Organic Whole Cloves",
      "Organic Fresh Ginger Root",
      "Organic Nutmeg",
      "Filtered Water"
    ],
    highlights: [
      "Founder Nicole's personal everyday favorite",
      "Sweetened with unpasteurized raw local honey",
      "Warm aromatic spice profile with cinnamon & clove",
      "50% less sugar than commercial syrups",
      "Makes an incredible hot spiced cider or cozy wellness tea"
    ],
    tastingNotes: "Warm spiced cinnamon, aromatic clove, soothing honey & rich berry",
    sizes: [
      { size: "8.3 fl oz", price: 15.00, value: "$1.80 / oz", popular: false },
      { size: "16.5 fl oz", price: 24.00, value: "$1.45 / oz", popular: true, note: "Best Value • Save 20%" }
    ],
    images: {
      bottle: "/assets/cinnamon-bottle.png",
      flatlay: "/assets/cinnamon-flatlay.png",
      lifestyle: "/assets/cinnamon-mocktail.jpg",
      recipe: "/assets/cinnamon-teatime.jpg",
      nutrition: "/assets/cinnamon-nutrition.png"
    },
    reviewsCount: 29,
    rating: 5.0,
    stats: {
      sugar: "2g per tbsp",
      antioxidants: "Very High",
      sweetener: "Raw Local Ohio Honey"
    }
  },
  {
    id: "bold-ginger",
    title: "Bold Ginger Elderberry Syrup",
    handle: "elderberry-syrup-bold-ginger",
    category: "Syrup",
    flavor: "Spicy Fresh Ginger",
    badge: "Foodie Favorite",
    tagline: "Antioxidant elderberry meets spicy ginger kick",
    accentColor: "#C67E28",
    bgGradient: "from-[#4E2E0A] via-[#311C06] to-[#1A0E03]",
    shortDesc: "Antioxidant-rich elderberry meets an invigorating spicy ginger kick for a delight to your tastebuds. Hands-down foodie favorite for active immunity.",
    fullDesc: "Antioxidant-rich elderberry meets spicy ginger root for an invigorating, digestion-soothing kick. Hands-down the foodie favorite! Real organic ginger root provides a zesty warmth that stimulates circulation and pairs gorgeously with the deep Sambucus Nigra elderberries and raw Ohio wildflower honey.",
    ingredients: [
      "Organic Sambucus Nigra Elderberries",
      "Raw Local Ohio Honey",
      "Organic Fresh Ginger Root",
      "Organic Ceylon Cinnamon",
      "Organic Cloves",
      "Filtered Water"
    ],
    highlights: [
      "Hands-down foodie favorite with a zesty kick",
      "Infused with real fresh organic ginger root",
      "Soothing for digestion, throat, and respiratory wellness",
      "Sweetened with unheated raw local honey",
      "Exceptional base for sparkling mocktails & green tea"
    ],
    tastingNotes: "Zesty fresh ginger bite, sweet raw honey, deep earthy elderberry",
    sizes: [
      { size: "8.3 fl oz", price: 15.00, value: "$1.80 / oz", popular: false },
      { size: "16.5 fl oz", price: 24.00, value: "$1.45 / oz", popular: true, note: "Best Value • Save 20%" }
    ],
    images: {
      bottle: "/assets/ginger-bottle.png",
      flatlay: "/assets/ginger-flatlay.png",
      lifestyle: "/assets/ginger-mocktail.jpg",
      recipe: "/assets/ginger-teatime.jpg",
      nutrition: "/assets/ginger-nutrition.png"
    },
    reviewsCount: 27,
    rating: 4.9,
    stats: {
      sugar: "2g per tbsp",
      antioxidants: "Very High",
      sweetener: "Raw Local Ohio Honey"
    }
  },
  {
    id: "sampler-pack",
    title: "Health Junkie Sampler Trio Gift Set",
    handle: "giftset-sampler-elderberry",
    category: "Gift Set",
    flavor: "All 3 Signature Flavors",
    badge: "Best Gifting Set",
    tagline: "One 8.3 oz bottle of each signature flavor + Recipe Cards",
    accentColor: "#8A3F70",
    bgGradient: "from-[#3B1228] via-[#240A18] to-[#12050C]",
    shortDesc: "Can't decide or looking for the perfect gift? Receive one 8.3 fl oz bottle of each flavor: Cheeky Tart Cherry, Sassy Cinnamon, and Bold Ginger, plus recipe cards.",
    fullDesc: "Our sampler pack is perfect for gifting or for when you can't decide which flavor to try first! You receive one 8.3 fl oz bottle of each handcrafted Elderberry Syrup: Cheeky Tart Cherry, Sassy Cinnamon, and Bold Ginger. You'll also get beautiful recipe cards for mocktails, smoothies, salad dressings, and more. Packaged in eco-friendly recyclable materials.",
    ingredients: [
      "1x Cheeky Tart Cherry (8.3 fl oz)",
      "1x Sassy Cinnamon (8.3 fl oz)",
      "1x Bold Ginger (8.3 fl oz)",
      "Collector's Recipe Card Set"
    ],
    highlights: [
      "All 3 flavors in one box (Cherry, Cinnamon, Ginger)",
      "Includes exclusive full-color recipe cards",
      "Perfect gift for teachers, nurses, foodies, and families",
      "Eco-friendly recyclable and compostable packaging"
    ],
    tastingNotes: "Explore the full spectrum from tart fruit to cozy spice to zesty ginger",
    sizes: [
      { size: "Set of 3 (8.3 oz each)", price: 48.00, value: "$16.00 / bottle", popular: true }
    ],
    images: {
      bottle: "/assets/sampler-trio-gift.png",
      flatlay: "/assets/trio-bottles.jpg",
      lifestyle: "/assets/trio-mocktails.jpg",
      recipe: "/assets/hero-trio.jpg",
      nutrition: "/assets/cherry-nutrition.png"
    },
    reviewsCount: 14,
    rating: 5.0,
    stats: {
      sugar: "Varies by flavor",
      antioxidants: "Maximum",
      sweetener: "Local Honey & Maple"
    }
  },
  {
    id: "organic-dried-elderberries",
    title: "Organic Dried Elderberries (6 oz)",
    handle: "organic-dried-elderberries",
    category: "Pantry",
    flavor: "100% Sambucus Nigra",
    badge: "Whole Superfood",
    tagline: "Whole, non-irradiated organic dried elderberries",
    accentColor: "#521D3F",
    bgGradient: "from-[#2A0A1C] via-[#1A0612] to-[#0E030A]",
    shortDesc: "These are the highest quality organic dried elderberries — and trust us, we know elderberries! 100% whole Sambucus Nigra in an eco-friendly pouch.",
    fullDesc: "These are the highest quality organic dried elderberries — and trust us, we know elderberries! Our elderberries are whole, non-irradiated, and 100% Sambucus Nigra (the European species studied extensively for its clinical immune benefits). Packaged in a 6 oz resealable bag made with post-consumer recycled material. Use these to brew healing herbal teas, infuse jams, or craft your own homemade syrup.",
    ingredients: [
      "100% Organic Dried Sambucus Nigra Elderberries"
    ],
    highlights: [
      "Whole, non-irradiated Sambucus Nigra berries",
      "Eco-friendly post-consumer recycled pouch",
      "Ideal for homemade teas, tinctures, and wellness syrups",
      "Generous 6 oz bag (makes multiple batches of syrup)"
    ],
    tastingNotes: "Deep, earthy, tart berry aroma ready for brewing",
    sizes: [
      { size: "6 oz Pouch", price: 16.00, value: "$2.66 / oz", popular: true }
    ],
    images: {
      bottle: "/assets/dried-elderberries.jpg",
      flatlay: "/assets/dried-elderberries-back.png",
      lifestyle: "/assets/dried-elderberries.jpg",
      recipe: "/assets/dried-elderberries-back.png",
      nutrition: "/assets/dried-elderberries-back.png"
    },
    reviewsCount: 19,
    rating: 4.9,
    stats: {
      sugar: "0g Added Sugar",
      antioxidants: "Pure Berry Power",
      sweetener: "Unsweetened"
    }
  },
  {
    id: "elderberry-honey-straws",
    title: "Elderberry Honey Straws (Pack of 6)",
    handle: "elderberry-honey-straws",
    category: "Pantry",
    flavor: "Raw Honey & Elderberry",
    badge: "On-The-Go",
    tagline: "Raw local honey naturally infused with elderberry",
    accentColor: "#DDA137",
    bgGradient: "from-[#4D3308] via-[#2F1E04] to-[#170E02]",
    shortDesc: "Raw honey infused with pure elderberry. No extra colors, flavors, chemicals, or preservatives — just elderberry and honey. Grab-and-go immune snack.",
    fullDesc: "Raw honey infused with organic elderberry. No extra colors, artificial flavors, chemicals, or preservatives — just elderberry and unheated raw honey. Delicious enjoyed directly from the straw as an afternoon energy boost, or squeezed into teas, smoothies, oatmeal, yogurt, ice cream, and salad dressings.",
    ingredients: [
      "Pure Raw Honey",
      "Organic Sambucus Nigra Elderberry"
    ],
    highlights: [
      "Simple two-ingredient formulation",
      "Perfect natural energy booster for kids' lunchboxes",
      "Mess-free portable wellness on the go",
      "No artificial flavors, dyes, or corn syrup"
    ],
    tastingNotes: "Rich golden floral honey with a dark berry finish",
    sizes: [
      { size: "Pack of 6 Straws", price: 5.00, value: "$0.83 / straw", popular: true }
    ],
    images: {
      bottle: "/assets/honey-straws-plate.jpg",
      flatlay: "/assets/honey-icecream.jpg",
      lifestyle: "/assets/honey-straws-plate.jpg",
      recipe: "/assets/honey-icecream.jpg",
      nutrition: "/assets/honey-straws-plate.jpg"
    },
    reviewsCount: 12,
    rating: 5.0,
    stats: {
      sugar: "Naturally Occurring",
      antioxidants: "Rich",
      sweetener: "100% Pure Raw Honey"
    }
  }
];

export const INGREDIENTS_DATA = [
  {
    name: "Organic Sambucus Nigra Elderberry",
    latin: "Sambucus Nigra L.",
    source: "Certified Organic Farms",
    role: "Core Botanical Powerhouse",
    description: "The European black elderberry celebrated for centuries. Rich in anthocyanins and flavonoids that naturally support cell defense against seasonal bugs.",
    badge: "100% Organic & Non-GMO"
  },
  {
    name: "Raw Local Ohio Honey",
    latin: "Apis Mellifera",
    source: "Local Beekeepers, Ohio",
    role: "Natural Unheated Sweetener",
    description: "Never ultra-filtered or high-heat pasteurized. Contains natural beneficial enzymes, pollen, and propolis to soothe throats and support local seasonal tolerance.",
    badge: "Never Ultra-Pasteurized"
  },
  {
    name: "100% Pure Local Maple Syrup",
    latin: "Acer Saccharum",
    source: "Midwest Family Sugarbushes",
    role: "Vegan Low-Glycemic Sweetener",
    description: "Used in our Cheeky Tart Cherry flavor. Rich in manganese, zinc, and natural minerals with only 1g sugar per tablespoon, making it safe for kids under 1 eating solids.",
    badge: "Vegan & Toddler Safe"
  },
  {
    name: "Organic Montmorency Tart Cherry",
    latin: "Prunus Cerasus",
    source: "Organic Orchards",
    role: "Antioxidant & Recovery Booster",
    description: "Brimming with phytonutrients and naturally occurring melatonin that promote peaceful sleep and soothe muscle recovery after active days.",
    badge: "Whole Fruit Nutrition"
  },
  {
    name: "Fresh Organic Ginger Root",
    latin: "Zingiber Officinale",
    source: "Certified Organic Growers",
    role: "Warming & Digestive Comfort",
    description: "Real fresh pressed ginger root with natural gingerols that stimulate circulation, ease throat tickles, and provide our signature foodie kick.",
    badge: "Fresh Pressed Root"
  },
  {
    name: "Organic Ceylon Cinnamon & Cloves",
    latin: "Cinnamomum Verum & Syzygium Aromaticum",
    source: "Fair Trade Organic Imports",
    role: "Metabolic & Aromatic Spice",
    description: "True Ceylon 'sweet cinnamon' and whole aromatic cloves contain eugenol and cinnamaldehyde, imparting warm autumn comfort and antimicrobial properties.",
    badge: "True Ceylon Cinnamon"
  }
];

export const COMPARISON_MATRIX = [
  {
    feature: "Sweetener Source",
    healthJunkie: "Raw Local Honey or Pure Maple Syrup",
    sambucol: "Glucose Syrup (Corn Syrup Derivatives)",
    groceryBrands: "High Fructose Corn Syrup / Cane Sugar",
    isWin: true
  },
  {
    feature: "Sugar Content per Tsp",
    healthJunkie: "0.5g – 1.5g (50-90% Less)",
    sambucol: "4.0g (Heavily Sweetened)",
    groceryBrands: "3.5g – 5.0g Sugar",
    isWin: true
  },
  {
    feature: "Elderberry Strain",
    healthJunkie: "100% Sambucus Nigra (Whole Berries)",
    sambucol: "Sambucus Nigra Extract",
    groceryBrands: "Blended / Unspecified Powders",
    isWin: true
  },
  {
    feature: "Artificial Additives & Thickeners",
    healthJunkie: "Zero (No Citric Acid, Xanthan, or Dyes)",
    sambucol: "Contains Citric Acid & Preservatives",
    groceryBrands: "Potassium Sorbate, Sodium Benzoate",
    isWin: true
  },
  {
    feature: "Formulation Pedigree",
    healthJunkie: "Board Certified Holistic Health Practitioner",
    sambucol: "Industrial Mass-Market Pharma",
    groceryBrands: "White-Label Generic Supplement",
    isWin: true
  },
  {
    feature: "Cost per Ounce",
    healthJunkie: "$1.45 / oz (Value 16.5oz Size)",
    sambucol: "$3.15+ / oz (Over Double Price)",
    groceryBrands: "$2.50 – $3.50 / oz",
    isWin: true
  }
];

export const RECIPES = [
  {
    id: "sassy-cinnamon-cider-mocktail",
    title: "Sassy Cinnamon Cider Mocktail",
    syrupUsed: "Sassy Cinnamon Elderberry Syrup",
    difficulty: "Easy • 2 Mins",
    servings: "1 Glass",
    image: "/assets/cinnamon-mocktail.jpg",
    description: "A cozy, crisp seasonal refresher that tastes like autumn in a glass. Perfect for all ages!",
    ingredients: [
      "1/2 cup fresh apple cider",
      "1/2 cup sparkling water (or Prosecco for adult cocktail)",
      "2 tbsp Sassy Cinnamon Elderberry Syrup",
      "Fresh crisp apple slice for garnish",
      "Optional: Cinnamon stick for stirring"
    ],
    instructions: [
      "Fill a tall tumbler glass with ice cubes.",
      "Pour in 1/2 cup of fresh apple cider and 1/2 cup sparkling water.",
      "Top with 2 tablespoons of Sassy Cinnamon Elderberry Syrup.",
      "Garnish with a thin slice of honeycrisp apple and a cinnamon stick. Stir gently and enjoy!"
    ]
  },
  {
    id: "cheeky-tart-cherry-lemon-mocktail",
    title: "Cheeky Tart Cherry Lemon Mocktail",
    syrupUsed: "Cheeky Tart Cherry Elderberry Syrup",
    difficulty: "Easy • 3 Mins",
    servings: "1 Glass",
    image: "/assets/cherry-mocktail.jpg",
    description: "Vibrant, ruby-red, and bursting with citrus berry punch. Picky-eater approved!",
    ingredients: [
      "1/2 cup organic lemonade",
      "1/2 cup sparkling mineral water (or champagne)",
      "2 tbsp Cheeky Tart Cherry Elderberry Syrup",
      "Fresh mint leaves & lemon or lime wedge for garnish"
    ],
    instructions: [
      "In a glass filled with crushed ice, combine lemonade and sparkling water.",
      "Drizzle 2 tablespoons of Cheeky Tart Cherry Elderberry Syrup over the top for a gorgeous layered ruby effect.",
      "Clap mint leaves between palms to release aroma, garnish, and sip!"
    ]
  },
  {
    id: "bold-ginger-orange-mocktail",
    title: "Bold Ginger Orange Mocktail",
    syrupUsed: "Bold Ginger Elderberry Syrup",
    difficulty: "Easy • 2 Mins",
    servings: "1 Glass",
    image: "/assets/ginger-mocktail.jpg",
    description: "An invigorating citrus-spice sparkler that boosts vitality and clears the senses.",
    ingredients: [
      "1/2 cup fresh squeezed orange juice",
      "1/2 cup crisp club soda or sparkling water",
      "2 tbsp Bold Ginger Elderberry Syrup",
      "Fresh orange peel twist for garnish"
    ],
    instructions: [
      "Add ice to a rocks glass.",
      "Pour in orange juice and sparkling water.",
      "Stir in 2 tablespoons of Bold Ginger Elderberry Syrup.",
      "Express essential oils from orange peel over rim and drop into glass."
    ]
  },
  {
    id: "mulled-sassy-cider",
    title: "Mulled Sassy Cider",
    syrupUsed: "Sassy Cinnamon Elderberry Syrup",
    difficulty: "Warm & Cozy • 10 Mins",
    servings: "4 Mugs",
    image: "/assets/cinnamon-teatime.jpg",
    description: "Featured live on New Day Cleveland TV! The whole house will smell of warming spices.",
    ingredients: [
      "4 cups pure local apple cider",
      "1/4 cup Sassy Cinnamon Elderberry Syrup",
      "2 whole cinnamon sticks",
      "Fresh orange or lemon wheels for garnish"
    ],
    instructions: [
      "In a saucepan or slow cooker, combine apple cider and Sassy Cinnamon Elderberry Syrup.",
      "Warm over low to medium heat for 10 minutes until steaming (do not boil).",
      "Ladle into mugs, float a lemon wheel and a cinnamon stick. Serve warm!"
    ]
  }
];

export const TESTIMONIALS = [
  {
    name: "Jodi F.",
    role: "Verified Customer",
    location: "Cleveland, OH",
    quote: "After 1 week I can already tell I feel better... I will be a customer for life! The taste is so clean compared to drugstore syrups that taste like pure artificial sugar.",
    product: "Sassy Cinnamon Elderberry Syrup",
    rating: 5
  },
  {
    name: "Alice C.",
    role: "Verified Customer",
    location: "Akron, OH",
    quote: "Tastes better than great, I have to keep my husband from being too generous with his servings! Awesome addition to take during the wintertime stress on your immune system.",
    product: "Bold Ginger Elderberry Syrup",
    rating: 5
  },
  {
    name: "Victoria M.",
    role: "Mom of Three",
    location: "Lakewood, OH",
    quote: "My kids love it and ask for it each night before bed! As a mom, having a clean option with real maple syrup and no scary additives gives me total peace of mind.",
    product: "Cheeky Tart Cherry Elderberry Syrup",
    rating: 5
  },
  {
    name: "Diane S.",
    role: "Grandmother & Foodie",
    location: "Chagrin Falls, OH",
    quote: "I could drink the whole bottle! My grandchildren love it too. We add it to morning smoothies, sparkling water, and warm oats. The sampler set makes the best holiday gift.",
    product: "Sampler Trio Gift Set",
    rating: 5
  },
  {
    name: "Mark T.",
    role: "Heinen's Shopper",
    location: "Rocky River, OH",
    quote: "Discovered Nicole's syrup at Heinen's grocery in Cleveland. Nothing else on the market comes close to the bold flavor and authentic craft quality.",
    product: "Bold Ginger Elderberry Syrup",
    rating: 5
  }
];

export const FAQS = [
  {
    category: "Usage & Dosage",
    q: "How do I use Health Junkie Elderberry Syrup?",
    a: "However you want! Sip it straight from a shotglass, or enjoy it mixed into sparkling water, herbal tea, morning smoothies, coffee, or fresh juice. You can also drizzle it over Greek yogurt, oatmeal, pancakes, French toast, or vanilla ice cream."
  },
  {
    category: "Usage & Dosage",
    q: "How much should my family take?",
    a: "Personally, Nicole takes 1 tablespoon a day for daily wellness, or every few hours when feeling run-down or needing an extra boost. For children over 1, 1 teaspoon daily (or every few hours during germ season) is popular. You may notice a 2 tbsp serving size on the label, which is standard USDA syrup regulation, but 1 tsp to 1 tbsp is typical."
  },
  {
    category: "Ingredients & Sourcing",
    q: "How does Health Junkie compare to Sambucol?",
    a: "Health Junkie uses the exact same therapeutic strain of elderberry, Sambucus Nigra. However, Health Junkie has ZERO processed sugars (sweetened only with local raw Ohio honey or pure local maple syrup, while Sambucol uses glucose corn syrup). Health Junkie has 50% to 90% less sugar (0.5g-1.5g per tsp vs 4g in Sambucol), contains no artificial preservatives, and costs less than half the price per ounce!"
  },
  {
    category: "Family & Safety",
    q: "Can I give this to my child?",
    a: "Yes! Sassy Cinnamon and Bold Ginger are sweetened with raw honey, making them appropriate for children 1 year and older. Cheeky Tart Cherry is sweetened with pure maple syrup (no honey), making it suitable for infants under 1 who have begun eating other solid foods. As always, consult your pediatrician with specific questions."
  },
  {
    category: "Family & Safety",
    q: "Can I take this if I am pregnant or nursing?",
    a: "Health Junkie was created in 2016 by founder Nicole Lazar while she was pregnant and trying to protect her immune system against bugs, and she took it throughout nursing her baby. As with any wellness routine during pregnancy, consult your healthcare provider."
  },
  {
    category: "Ingredients & Sourcing",
    q: "Is Health Junkie diabetic-friendly?",
    a: "We recommend our Cheeky Tart Cherry flavor, our lowest-sugar option with only 1 gram of natural sugar per tablespoon from pure maple syrup. Please consult your physician to confirm what aligns with your dietary needs."
  },
  {
    category: "Orders & Shipping",
    q: "Where is Health Junkie made and where do you ship?",
    a: "Every batch is handcrafted with love in Cleveland, Ohio. We ship nationwide across all 50 US states! In the Midwest, you can also find our syrups in over 50 retail locations, including Heinen's grocery stores and Buehler's."
  },
  {
    category: "Ingredients & Sourcing",
    q: "Can I heat the syrup or make warm drinks with it?",
    a: "Absolutely! The spiced flavors make a phenomenal soothing wellness tea when stirred into hot water, and our Sassy Cinnamon stirred into hot mulled apple cider is a beloved fall staple featured on New Day Cleveland."
  }
];

