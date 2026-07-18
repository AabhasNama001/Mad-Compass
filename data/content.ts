export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  brandName: string;
  companyName: string;
  tagline: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSubtext: string;
  address: string;
  gst: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  socials: SocialLink[];
};

export const siteContent: SiteContent = {
  brandName: "Mad Compass",
  companyName: "Mad Compass Travel & Tours",
  tagline: "Thoughtful travel, carefully planned",
  heroEyebrow: "Bespoke holidays, guided personally",
  heroHeadline: "Thoughtful holidays shaped around your pace, your people, and the stories you want to bring home.",
  heroSubtext:
    "We plan with intention rather than templates — pairing local insight, calm logistics, and personal guidance so every journey feels considered from the first conversation.",
  address: "Kolkata, India",
  gst: "GST: 19AAXXX0000X1ZX",
  phone: "+91 9711193458",
  whatsapp: "https://wa.me/919711193458",
  email: "hello@madcompass.com",
  hours: "Mon–Sat · 10:00 AM – 7:00 PM",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "WhatsApp", href: "https://wa.me/919711193458" },
    { label: "Facebook", href: "https://facebook.com" },
  ],
};
