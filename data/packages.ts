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
    title: "Darjeeling Sunrise & Silver Lines",
    category: "Domestic",
    location: "West Bengal",
    duration: "5 nights / 6 days",
    priceFrom: "₹26,500",
    blurb: "A polished hill retreat with monastery visits, tea estates, and quiet luxury at every stop.",
    highlights: ["Private transfers", "Tea estate stay", "Toy train experience"],
    image: "/images/package-darjeeling.svg",
    tags: ["Hill escapes", "Romantic"],
    featured: true,
  },
  {
    slug: "goa-slow-living-and-sea-breeze",
    title: "Goa Slow Living & Sea Breeze",
    category: "Domestic",
    location: "Goa",
    duration: "6 nights / 7 days",
    priceFrom: "₹34,900",
    blurb: "A coastal itinerary balancing boutique stays, hidden beaches, and restful evenings.",
    highlights: ["Boutique beachfront hotel", "Private sunset cruise", "Local dining curation"],
    image: "/images/package-goa.svg",
    tags: ["Beach", "Wellness"],
  },
  {
    slug: "bali-rituals-and-seaside-escape",
    title: "Bali Rituals & Seaside Escape",
    category: "International",
    location: "Indonesia",
    duration: "8 nights / 9 days",
    priceFrom: "₹1,22,000",
    blurb: "A rich blend of temple culture, boutique villas, and calm coastlines with seamless planning.",
    highlights: ["Private villa stay", "Island transfers", "Cultural temple circuit"],
    image: "/images/package-bali.svg",
    tags: ["Island", "Luxury"],
    featured: true,
  },
  {
    slug: "kyoto-and-kanazawa-quiet-elegance",
    title: "Kyoto & Kanazawa Quiet Elegance",
    category: "International",
    location: "Japan",
    duration: "9 nights / 10 days",
    priceFrom: "₹1,68,000",
    blurb: "An immersive Japanese journey where every detail is curated for calm and genuine connection.",
    highlights: ["Ryokan stay", "Private guides", "Seasonal culinary experiences"],
    image: "/images/package-japan.svg",
    tags: ["Culture", "Premium"],
  },
];

export const featuredPackages = packages.filter((pkg) => pkg.featured);
