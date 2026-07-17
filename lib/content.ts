export const BUSINESS = {
  name: "1 Ultra Shine",
  legalName: "Number One Ultra Shine",
  phone: "(626) 629-4916",
  phoneHref: "tel:+16266294916",
  email: "1ultrashine@gmail.com",
  emailHref: "mailto:1ultrashine@gmail.com",
  address: "525 E Route 66, Glendora, CA 91740",
  mapsEmbed:
    "https://www.google.com/maps?q=525+E+Route+66,+Glendora,+CA+91740&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=525+E+Route+66+Glendora+CA+91740",
  rating: 4.6,
  reviewCount: 381,
  founded: 1995,
  url: "https://www.1ultrashine.com",
};

export type Service = {
  name: string;
  tagline: string;
  prices: { label: string; value: string }[];
  popular?: boolean;
  addon?: boolean;
};

export const SERVICES: Service[] = [
  {
    name: "Interior Refresh",
    tagline: "Vacuum, full wipe-down, windows — your cabin, reset.",
    popular: true,
    prices: [
      { label: "Car", value: "$150" },
      { label: "Small SUV", value: "$170" },
      { label: "Large SUV / Truck", value: "$180" },
    ],
  },
  {
    name: "Interior Detail",
    tagline: "Deep clean with shampoo and steam, down to every crevice.",
    prices: [
      { label: "Car", value: "$250+" },
      { label: "Small SUV", value: "$280+" },
      { label: "Large SUV / Truck", value: "$300+" },
    ],
  },
  {
    name: "Exterior Detail",
    tagline: "Hand wash, clay bar, machine polish, and protection.",
    prices: [
      { label: "Car", value: "$250+" },
      { label: "Small SUV", value: "$280+" },
      { label: "Large SUV / Truck", value: "$300+" },
    ],
  },
  {
    name: "Full Detail",
    tagline: "The complete inside-and-out treatment, hand-finished.",
    prices: [
      { label: "Car", value: "$500" },
      { label: "Small SUV", value: "$560" },
      { label: "Large SUV / Truck", value: "$600" },
    ],
  },
  {
    name: "Paint Correction",
    tagline: "Swirls and scratches machine-polished out of your paint.",
    prices: [
      { label: "Coupe", value: "$650" },
      { label: "SUV", value: "$850" },
      { label: "Truck", value: "$750" },
    ],
  },
  {
    name: "Bug Wash",
    tagline: "Bugs, tar, and road film off your front end.",
    prices: [{ label: "Flat rate", value: "$80" }],
  },
  {
    name: "Pet Hair Removal",
    tagline: "Add it to any interior service — fur-free, guaranteed.",
    addon: true,
    prices: [{ label: "Add-on, by condition", value: "$45–$300" }],
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
