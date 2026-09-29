export const BUSINESS = {
  name: "1 Ultra Shine Detail",
  legalName: "1 Ultra Shine Detail",
  phone: "(626) 963-2600",
  phoneHref: "tel:+16269632600",
  email: "1ultrashinedetail@gmail.com",
  emailHref: "mailto:1ultrashine@gmail.com",
  address: "525 E Route 66, Glendora, CA 91740",
  mapsEmbed:
    "https://www.google.com/maps?q=525+E+Route+66,+Glendora,+CA+91740&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=525+E+Route+66+Glendora+CA+91740",
  rating: 4.6,
  reviewCount: 381,
  founded: 1995,
  url: "https://www.1ultrashinedetail.com",
};

export type ServiceFeature = {
  title: string;
  body?: string;
};

export type ServicePriceTier = {
  label: string;
  value: string;
  /** Optional percentage or descriptor shown beneath the value */
  note?: string;
};

export type Service = {
  name: string;
  slug: string;
  tagline: string;
  image: string;
  popular?: boolean;
  /** Short hero sub-headline pulled from the flyer */
  headline?: string;
  /** One-paragraph description of the service */
  description?: string;
  features?: ServiceFeature[];
  /** Small print / disclaimer shown below features */
  note?: string;
  /** e.g. "4 to 5 hours" */
  duration?: string;
  prices: ServicePriceTier[];
};

export const SERVICES: Service[] = [
  {
    name: "Interior Refresh",
    slug: "interior-refresh",
    tagline: "Vacuum, full wipe-down, windows — your cabin, reset.",
    headline: "A clean interior. A better drive.",
    image: "/photo-interior-refresh.jpg",
    popular: true,
    description:
      "Our most popular service gives your cabin a complete reset without the full-detail time commitment. Every surface is cleaned, every vent blown out, every window wiped — by hand, every time.",
    features: [
      {
        title: "Air Blow Vacuum",
        body: "Removes dust, dirt, and debris from every corner.",
      },
      {
        title: "Clean & Shine Dash, Console & Cupholders",
        body: "Restores surfaces for a fresh, like-new look.",
      },
      {
        title: "Clean Door Panels",
        body: "Wipe down and refresh all door panels and handles.",
      },
      {
        title: "Blow All Vents",
        body: "Blows out dust and debris for cleaner, fresher air.",
      },
      {
        title: "Clean Leather Seats",
        body: "Gently cleaned to remove dirt and oils.",
      },
      {
        title: "Steam Disinfection",
        body: "Kills bacteria and eliminates odors for a healthier interior.",
      },
    ],
    note: "Includes complimentary tunnel wash and hand dry.",
    prices: [
      { label: "Car", value: "$150" },
      { label: "Small SUV", value: "$170" },
      { label: "Large SUV / Truck", value: "$180" },
    ],
  },
  {
    name: "Interior Detail",
    slug: "interior-detail",
    tagline: "Deep clean with shampoo and steam, down to every crevice.",
    headline: "Maximum protection. Unmatched shine.",
    image: "/photo-interior-detail.jpg",
    description:
      "A full deep-clean of your entire interior — carpets extracted, seats shampooed, every surface detailed and conditioned. This is the service when a vacuum isn't enough.",
    features: [
      { title: "Complimentary tunnel wash and hand dry" },
      { title: "Air blow vacuum" },
      { title: "Extract and/or steam carpets and seats" },
      { title: "Clean, detail, and condition all surfaces and compartments" },
      { title: "Clean windows inside and out" },
    ],
    note:
      "Pet hair removal is extremely time-consuming due to the nature of the hair and the fabric it clings to. It is available as an add-on service.",
    duration: "4 to 5 hours",
    prices: [
      { label: "Car", value: "$250+" },
      { label: "Small SUV", value: "$280+" },
      { label: "Large SUV / Truck", value: "$300+" },
    ],
  },
  {
    name: "Exterior Detail",
    slug: "exterior-detail",
    tagline: "Hand wash, clay bar, machine polish, and protection.",
    headline: "Restore. Protect. Turn heads.",
    image: "/photo-exterior-detail.jpg",
    description:
      "A complete exterior treatment that goes far beyond a wash. We clay bar the entire vehicle, apply premium wax protection, dress the tires and plastics, and leave every surface spotless.",
    features: [
      {
        title: "Tunnel Wash",
        body: "Thorough clean for a spotless start.",
      },
      {
        title: "Remove Bugs and Pollen",
        body: "Safely removes buildup from all surfaces.",
      },
      {
        title: "Claybar Entire Vehicle",
        body: "Eliminates bonded contaminants for a smooth finish.",
      },
      {
        title: "Premium Wax Protection",
        body: "Enhances gloss and provides long-lasting protection.",
      },
      {
        title: "Degrease and Clean Rims",
        body: "Removes brake dust and restores shine.",
      },
      {
        title: "Dress Tires",
        body: "Deep, rich finish that lasts.",
      },
      {
        title: "Dress All Plastic",
        body: "Restores and protects exterior trim.",
      },
      {
        title: "Windows Cleaned Inside & Out",
        body: "Streak-free clarity.",
      },
      {
        title: "Complimentary Interior Vacuum",
        body: "Quick vacuum for a clean finish.",
      },
    ],
    prices: [
      { label: "Car", value: "$250+" },
      { label: "Small SUV", value: "$280+" },
      { label: "Large SUV / Truck", value: "$300+" },
    ],
  },
  {
    name: "Full Detail",
    slug: "full-detail",
    tagline: "The complete inside-and-out treatment, hand-finished.",
    headline: "The ultimate in care. Inside and out.",
    image: "/photo-full-detail.jpg",
    description:
      "Everything in our Interior Detail combined with everything in our Exterior Detail — one appointment, total transformation. This is the service that brings a car back to its best.",
    features: [
      { title: "Complete interior deep clean — shampoo, steam, extraction" },
      { title: "All surfaces cleaned, detailed, and conditioned" },
      { title: "Claybar entire vehicle" },
      { title: "Premium wax protection" },
      { title: "Rims degreased and cleaned" },
      { title: "Tires and plastics dressed" },
      { title: "Windows cleaned inside and out" },
      { title: "Complimentary tunnel wash and hand dry" },
    ],
    prices: [
      { label: "Car", value: "$500" },
      { label: "Small SUV", value: "$560" },
      { label: "Large SUV / Truck", value: "$600" },
    ],
  },
  {
    name: "Paint Correction",
    slug: "paint-correction",
    tagline: "Swirls and scratches machine-polished out of your paint.",
    headline: "Maximum correction. Flawless finish.",
    image: "/photo-paint-correction.jpg",
    description:
      "Professional paint correction removes swirl marks, scratches, and oxidation to restore depth, clarity, and gloss. The result is a smooth, flawless finish that looks better than it has in years.",
    features: [
      {
        title: "Swirl & Scratch Removal",
        body: "Eliminates light swirls and scratches.",
      },
      {
        title: "Enhanced Gloss & Clarity",
        body: "Restores depth and shine.",
      },
      {
        title: "Paint Defect Correction",
        body: "Reduces oxidation, haze, and imperfections.",
      },
      {
        title: "Paint Preservation",
        body: "Prevents further damage and dullness.",
      },
    ],
    prices: [
      { label: "Coupe", value: "$650" },
      { label: "Truck", value: "$750" },
      { label: "SUV", value: "$850" },
    ],
  },
  {
    name: "Bug Wash",
    slug: "bug-wash",
    tagline: "Bugs, tar, and road film off your front end.",
    headline: "The hard truth about bugs on your paint.",
    image: "/photo-bug-wash.jpg",
    description:
      "Bug residue is highly acidic and bakes into your paint the longer it sits. It can etch, stain, and damage your clear coat if not removed properly. Our bug wash safely breaks down and removes tough bug buildup, restoring your paint to a clean, smooth finish.",
    features: [
      { title: "Safely loosens and removes bug residue" },
      { title: "Helps prevent paint etching and staining" },
      { title: "Restores a smooth, clean finish" },
    ],
    prices: [{ label: "Flat rate", value: "$80" }],
  },
  {
    name: "Pet Hair Removal",
    slug: "pet-hair-removal",
    tagline: "Deep extraction for even the most stubborn fur.",
    headline: "Because we know how hard it really is.",
    image: "/photo-pet-hair-removal.jpg",
    description:
      "Pet hair clings to fabric in a way that vacuums simply can't handle. We offer three levels of removal depending on how much hair is present and how deeply embedded it is.",
    note:
      "Pet hair removal is extremely time-consuming due to the nature of the hair and the fabric it clings to. Final price depends on vehicle condition — call for a quote.",
    prices: [
      { label: "VIP Wash", value: "$45", note: "~30% removal" },
      { label: "Interior Express", value: "$150", note: "~90% removal" },
      { label: "Interior Detail", value: "$300", note: "~99% removal" },
    ],
  },
];

export const WHY_US = [
  {
    title: "30+ years of hands on cars",
    body: "Family-run since 1995. The people detailing your car have been doing exactly this, at this address on Route 66, for three decades.",
  },
  {
    title: "Hand-finished, every time",
    body: "No tunnel, no conveyor. Your car is washed, polished, and finished by hand — every crevice, every seam.",
  },
  {
    title: "Eco-friendly products",
    body: "Professional-grade products that are safe for your paint, your interior, and the neighborhood we've worked in for 30 years.",
  },
  {
    title: "Satisfaction guaranteed",
    body: "If something isn't right, we make it right. That's how a family business lasts 30 years in the same spot.",
  },
];

export const FEATURED_REVIEW = {
  quote:
    "I recently got my truck detailed at this place and Sam made sure every crevice was wiped clean and left shiny.",
  source: "Google review",
};
