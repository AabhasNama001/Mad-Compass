"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { EnquiryForm } from "@/components/sections/enquiry-form";

const pillars = [
  {
    title: "Personal first",
    text: "Every holiday begins with listening. We shape the trip around your preferences, pace, and budget rather than forcing a template.",
  },
  {
    title: "Human expertise",
    text: "Every enquiry is handled by a holiday expert or destination specialist, so the planning feels thoughtful from the first step.",
  },
  {
    title: "Tailored, not templated",
    text: "From a slow domestic escape to a once-in-a-lifetime expedition, the experience is built for you and refined with you.",
  },
];

const sections = [
  { id: "discover", label: "Discover" },
  { id: "travel-paths", label: "Travel paths" },
  { id: "vision", label: "Why us" },
];

const travelCards = [
  {
    href: "/domestic",
    label: "Domestic",
    title: "India, made personal",
    description: "Quiet hill retreats, heritage journeys, and thoughtful family escapes planned around your people.",
    accent: "The best of India, without the one-size-fits-all approach.",
  },
  {
    href: "/overseas",
    label: "Overseas",
    title: "International escapes with depth",
    description: "Leisure travel that feels elegant, balanced, and carefully paced for your interests.",
    accent: "From cultural routes to soft-adventure getaways.",
  },
  {
    href: "/expeditions",
    label: "Expeditions",
    title: "Adventure with purpose",
    description: "Specialized journeys for trekking, wildlife, and niche travel that demand expert planning.",
    accent: "Designed for travellers who want a meaningful challenge.",
  },
];

const featuredJourneys = [
  {
    title: "Kerala backwater & hill retreat",
    subtitle: "Slow travel across calm waterways and lush hills",
    description: "A personalized coastal and hill itinerary that blends heritage, wellness, and gentle exploration.",
    badge: "Domestic inspiration",
    image: "/images/Kerala-backwater-hill-retreat.jpg",
  },
  {
    title: "Japan soft luxury discovery",
    subtitle: "Culture, food, and quiet temples",
    description: "Curated routes in Kyoto, Kanazawa, and Tokyo with comfort-led stays and authentic local experiences.",
    badge: "Overseas mood",
    image: "/images/Japan-soft-luxury-discovery.jpg",
  },
  {
    title: "Bhutan trek & cultural passage",
    subtitle: "Highland trails, monasteries, and mindful pace",
    description: "A specialist-led expedition combining easy treks with immersive cultural moments through the Himalayas.",
    badge: "Expedition route",
    image: "/images/Bhutan-trek-cultural-passage.jpg",
  },
];

const sectionMotion = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="relative overflow-hidden border-b border-[#f4e3de] bg-[#fff8f5]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(209,59,47,0.1),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(209,59,47,0.06),_transparent_28%)]" />
        <div className="absolute inset-x-0 top-0 h-[320px] bg-[linear-gradient(180deg,_rgba(255,255,255,0.96),_rgba(255,253,252,0.3))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65 }}
              variants={sectionMotion}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f0d6d1] bg-white/90 px-4 py-2 text-sm uppercase tracking-[0.3em] text-[#d13b2f] backdrop-blur-sm">
                <Compass className="size-4" /> {siteContent.tagline}
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-tight text-[#17120f] sm:text-6xl lg:text-7xl">
                {siteContent.heroHeadline}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-9 text-[#5e4c45] sm:text-xl">
                {siteContent.heroSubtext}
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="bg-[#d13b2f] hover:bg-[#b92f24]">
                  <Link href="/contact">
                    Start your enquiry <ArrowRight className="size-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-[#f0d6d1] bg-white text-[#17120f] shadow-sm">
                  <Link href={siteContent.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> WhatsApp us
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              variants={sectionMotion}
              className="relative overflow-hidden rounded-[2.5rem] border border-[#f3e0db] bg-[#fff9f6] p-8 shadow-[0_40px_120px_rgba(19,14,10,0.08)] sm:p-10"
            >
              <div className="absolute -right-16 top-8 h-48 w-48 rounded-full bg-[#d13b2f]/10 blur-3xl" aria-hidden="true" />
              <div className="absolute -left-12 bottom-10 h-40 w-40 rounded-full bg-[#d13b2f]/10 blur-3xl" aria-hidden="true" />
              <div className="relative rounded-[2rem] border border-[#f0d6d1] bg-white p-8 sm:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Featured focus</p>
                <h2 className="mt-4 text-3xl font-semibold text-[#17120f] sm:text-4xl">A premium travel experience that still feels personal.</h2>
                <p className="mt-4 text-sm leading-7 text-[#655b4f] sm:text-base">
                  A subtle visual treatment helps the hero feel more premium without losing the calm, minimal character of the brand.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="rounded-[1.75rem] border border-[#f5e4e0] bg-[#fff2ee] p-5">
                    <p className="text-sm font-semibold text-[#17120f]">Curated attention</p>
                    <p className="mt-2 text-sm leading-7 text-[#655b4f]">Every enquiry goes to a specialist who can guide the first recommendation with care.</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-[#f5e4e0] bg-[#fff2ee] p-5">
                    <p className="text-sm font-semibold text-[#17120f]">Tailored approach</p>
                    <p className="mt-2 text-sm leading-7 text-[#655b4f]">No fixed packages. No generic planning. Just holidays built around your preferences.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-12 hidden gap-4 md:flex">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-[#f0d6d1] bg-white px-4 py-3 text-sm font-semibold text-[#17120f] transition hover:border-[#d13b2f] hover:text-[#d13b2f]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="discover" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="mb-10 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Discover</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">A homepage that helps visitors move quickly from curiosity to clarity.</h2>
          <p className="mt-5 text-lg leading-8 text-[#655b4f]">
            Every section is purposeful: the hero introduces the promise, the cards outline the travel categories clearly, and the next panel makes enquiry the natural next step.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 lg:grid-cols-3">
          {travelCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group overflow-hidden rounded-[2rem] border border-[#f0d6d1] bg-white shadow-[0_24px_80px_rgba(20,15,10,0.06)] transition-transform hover:-translate-y-1 hover:border-[#d13b2f]"
            >
              <div className="relative overflow-hidden bg-[#fff2ef]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(209,59,47,0.18),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(209,59,47,0.08),_transparent_30%)]" />
                <div className="relative h-48 p-6">
                  <div className="flex h-full flex-col justify-between rounded-[2rem] bg-[#fffdf8] p-4 shadow-[inset_0_0_0_1px_rgba(209,59,47,0.06)]">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-[#fff4f0] px-3 py-1 text-xs uppercase tracking-[0.24em] text-[#d13b2f]">{card.label}</span>
                      <span className="text-xs text-[#7d675f]">Quick view</span>
                    </div>
                    <div className="rounded-[1.75rem] bg-[#fff4f0] p-4 text-sm leading-7 text-[#655b4f] shadow-[inset_0_0_0_1px_rgba(209,59,47,0.08)]">
                      {card.accent}
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-2xl font-semibold text-[#17120f]">{card.title}</h3>
                <p className="text-sm leading-7 text-[#655b4f]">{card.description}</p>
                <div className="flex items-center justify-between pt-4">
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#d13b2f] opacity-90 transition group-hover:opacity-100"
                  >
                    Explore <ArrowRight className="size-4" />
                  </Link>
                  <span className="rounded-full bg-[#fdf0ef] px-3 py-1 text-xs uppercase tracking-[0.23em] text-[#b9452f]">Tailored journeys</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-6 lg:grid-cols-3"
        >
          {featuredJourneys.map((journey, index) => (
            <article
              key={journey.title}
              className="overflow-hidden rounded-[2rem] bg-[#17120f] text-white shadow-[0_24px_90px_rgba(23,18,14,0.18)]"
            >
              <div className="relative h-72 overflow-hidden">
                <Image src={journey.image} alt={journey.title} fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                <div className="absolute inset-0 bg-[linear-gradient(160deg,_rgba(23,18,14,0.3),_transparent_42%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between p-6">
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-white/90">{journey.badge}</span>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{journey.title}</h3>
                    <p className="text-sm leading-6 text-white/80">{journey.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 p-6 bg-[#0f0c0b]">
                <p className="text-sm leading-7 text-[#d7c6b3]">{journey.description}</p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-[#f8efe7] opacity-95 hover:text-white">
                  Enquire about this <ArrowRight className="size-4" />
                </Link>
              </div>
            </article>
          ))}
        </motion.div>
      </section>

      <section id="enquire" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-10 lg:grid-cols-[1fr_0.95fr]"
        >
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Ready to begin</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">Start with a quick enquiry and a specialist will follow up.</h2>
            <p className="mt-5 text-lg leading-8 text-[#655b4f]">
              This is the place where your conversation becomes a personalised travel plan. The form is designed to keep the first step easy while giving us the right information to recommend the right journey.
            </p>
          </div>
          <div>
            <EnquiryForm />
          </div>
        </motion.div>
      </section>

      <section id="travel-paths" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="grid gap-10 lg:grid-cols-[1fr_0.9fr]"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Travel paths</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">A gentle guide through what makes every plan feel bespoke.</h2>
            <p className="mt-5 text-lg leading-8 text-[#655b4f]">
              The homepage should reassure visitors that planning is never rushed: it begins with a conversation, evolves with your feedback, and lands in a holiday shaped for you.
            </p>
          </div>
          <div className="rounded-[2rem] border border-[#f0d6d1] bg-[#fff8f5] p-8">
            <div className="space-y-6">
              <div className="rounded-[1.5rem] border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">Step 1</p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">Tell us what you’re dreaming of</h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">A simple enquiry form captures the travel type, destination interest, style, budget, and dates.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">Step 2</p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">We craft the first recommendation</h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">A specialist prepares a custom itinerary based on your preferences and affordability, not a fixed package.</p>
              </div>
              <div className="rounded-[1.5rem] border border-[#f7e2de] bg-white p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#d13b2f]">Step 3</p>
                <h3 className="mt-3 text-xl font-semibold text-[#17120f]">Refine it together</h3>
                <p className="mt-2 text-sm leading-7 text-[#655b4f]">You review the plan and we adjust it — so the holiday is personalized, practical, and feels like your own.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="vision" className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
          variants={sectionMotion}
          className="rounded-[2rem] border border-[#f0d6d1] bg-white p-6 shadow-[0_24px_80px_rgba(20,15,10,0.06)] sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Start with a conversation</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">We would love to understand how you like to travel.</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#655b4f]">Share a few thoughts and we will turn that into a thoughtful first recommendation — whether you are planning a long weekend or a far-flung adventure.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#d13b2f] hover:bg-[#b92f24]">
                  <Link href="/contact">Send your enquiry</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#f0d6d1] bg-white text-[#17120f]">
                  <a href={`tel:${siteContent.phone}`}><Phone className="size-4" /> Call us</a>
                </Button>
              </div>
            </div>
            <div className="rounded-[1.5rem] border border-[#f0d6d1] bg-[#fff8f5] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Contact</p>
              <div className="mt-4 space-y-3 text-sm text-[#5d4944]">
                <a href={`tel:${siteContent.phone}`} className="flex items-center gap-2 hover:text-[#d13b2f]">
                  <Phone className="size-4" /> {siteContent.phone}
                </a>
                <a href={`mailto:${siteContent.email}`} className="flex items-center gap-2 hover:text-[#d13b2f]">
                  <MessageCircle className="size-4" /> {siteContent.email}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
