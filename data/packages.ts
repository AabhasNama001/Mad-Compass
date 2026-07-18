export type PackageCategory = "Domestic" | "International";

export type TravelPackage = {
  slug: string;
  title: string;
  category: PackageCategory;
  location: string;
  duration: string;
  priceFrom: string;
  blurb: string;
  highlights: string[];
  image: string;
  tags: string[];
  featured?: boolean;
};

export const packages: TravelPackage[] = [
  {
    slug: "darjeeling-sunrise-and-silver-lines",
    title: "Darjeeling Dawn, Tea Estates & Quiet Luxury",
    category: "Domestic",
    location: "West Bengal",
    duration: "5 nights / 6 days",
    priceFrom: "₹26,500",
    blurb: "An elegant hill retreat shaped around monastery views, tea country mornings, and a slower rhythm that feels effortlessly luxurious.",
    highlights: ["Private transfers", "Tea estate stay", "Toy train experience"],
    image: "/images/package-darjeeling.svg",
    tags: ["Hill escapes", "Romantic"],
    featured: true,
  },
  {
    slug: "goa-slow-living-and-sea-breeze",
    title: "Goa, Slow Living by the Sea",
    category: "Domestic",
    location: "Goa",
    duration: "6 nights / 7 days",
    priceFrom: "₹34,900",
    blurb: "A coastal escape designed around boutique stays, quiet coves, and evenings that feel unhurried from start to finish.",
    highlights: ["Boutique beachfront hotel", "Private sunset cruise", "Local dining curation"],
    image: "/images/package-goa.svg",
    tags: ["Beach", "Wellness"],
  },
  {
    slug: "bali-rituals-and-seaside-escape",
    title: "Bali Rituals & Coral Coast",
    category: "International",
    location: "Indonesia",
    duration: "8 nights / 9 days",
    priceFrom: "₹1,22,000",
    blurb: "A rich blend of temple culture, private villas, and calm coastline days arranged with ease and elegance.",
    highlights: ["Private villa stay", "Island transfers", "Cultural temple circuit"],
    image: "/images/package-bali.svg",
    tags: ["Island", "Luxury"],
    featured: true,
  },
  {
    slug: "kyoto-and-kanazawa-quiet-elegance",
    title: "Kyoto & Kanazawa, Quiet Elegance",
    category: "International",
    location: "Japan",
    duration: "9 nights / 10 days",
    priceFrom: "₹1,68,000",
    blurb: "An immersive Japanese journey where every detail is curated for calm, connection, and beautifully paced discovery.",
    highlights: ["Ryokan stay", "Private guides", "Seasonal culinary experiences"],
    image: "/images/package-japan.svg",
    tags: ["Culture", "Premium"],
  },
];

export const featuredPackages = packages.filter((pkg) => pkg.featured);
