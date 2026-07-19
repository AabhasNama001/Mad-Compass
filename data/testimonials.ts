export type Testimonial = {
  name: string;
  location: string;
  quote: string;
  image: string;
  trip: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Srija Bhattacharyay",
    location: "Kolkata",
    quote:
      "We had an amazing trip to Shimla and Manali thanks to Mad Compass, which will never be forgotten. Tamraparna handled everything with great speed and ease. Many thanks. There will undoubtedly be many more journeys with Mad Compass.",
    image: "/images/testimonial-2.svg",
    trip: "Shimla & Manali",
  },
  {
    name: "Bibhujeet & Susmita",
    location: "Bangalore",
    quote:
      "I as a traveler have almost never approached a tours & travels company for planning my trip. For Maldives, I took a chance and fell back on Mad Compass for help. This turned out to be one of the best travel decisions I've taken in the recent times. Getting us the best package and free upgrades in the accommodation, they went above and beyond our expectations and delivered on a brilliant anniversary getaway. 10/10. Will recommend for sure!",
    image: "/images/testimonial-1.svg",
    trip: "Maldives anniversary getaway",
  },
  {
    name: "Daipayan Das",
    location: "Kolkata",
    quote:
      "We travelled to Sri Lanka with Mad Compass Travels. We had a very enjoyable and hassle-free experience. They also arranged a lovely surprise for us. Overall very satisfied with the experience and highly recommended.",
    image: "/images/testimonial-3.svg",
    trip: "Sri Lanka",
  },
];
