export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  image: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Aarohi & Rohan",
    location: "Kolkata",
    quote:
      "Everything felt considered — from the pacing to the little touches we would never have thought of. It felt like a holiday designed around us, not around a brochure.",
    image: "/images/testimonial-1.svg",
    trip: "Darjeeling escape",
  },
  {
    name: "Meera D.",
    location: "Bangalore",
    quote:
      "The team was calm, responsive, and deeply thoughtful. We had the freedom to enjoy the journey while every practical detail stayed beautifully handled.",
    image: "/images/testimonial-2.svg",
    trip: "Bali itinerary",
  },
  {
    name: "Siddharth K.",
    location: "Mumbai",
    quote:
      "The itinerary felt polished without becoming stiff. We got a genuine sense of place, not just a checklist of sights.",
    image: "/images/testimonial-3.svg",
    trip: "Kyoto & Kanazawa",
  },
];
