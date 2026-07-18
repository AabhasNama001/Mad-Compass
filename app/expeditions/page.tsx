import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/sections/reveal";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/sections/enquiry-form";
import { PageHero } from "@/components/sections/page-hero";
import { PhotoShowcaseCard } from "@/components/sections/photo-showcase-card";
import { TestimonialCard } from "@/components/sections/testimonial-card";
import { testimonials } from "@/data/testimonials";

const highlights = [
  "High-focus adventure journeys for trekking, wildlife, remote landscapes, and specialist-led travel",
  "Comfort, safety, and thoughtful pacing are built into the experience from the first conversation",
  "A specialist helps shape each expedition around your ability, timing, and the kind of challenge you want",
];

const journeys = [
  { title: "Ladakh high-altitude passage", subtitle: "Passes, monasteries, and dramatic Himalayan light", description: "A carefully paced expedition for travellers who want landscape and meaning.", badge: "Trekking", image: "/images/Bhutan-trek-cultural-passage.jpg", href: "/contact" },
  { title: "Wildlife-led forest circuit", subtitle: "Remote stays, expert guiding, and intimate sightings", description: "Ideal for guests who want a deeper connection with nature and local ecosystems.", badge: "Wildlife", image: "/images/Kerala-backwater-hill-retreat.jpg", href: "/contact" },
  { title: "Polar and remote escapes", subtitle: "Specialist-led journeys for rare and unforgettable landscapes", description: "Designed for travellers seeking a once-in-a-lifetime expedition with precision planning.", badge: "Specialist", image: "/images/Japan-soft-luxury-discovery.jpg", href: "/contact" },
];

export const metadata: Metadata = {
  title: "Expeditions | Mad Compass",
  description: "Explore specialist-led expeditions with expert planning, comfort-focused logistics, and high-impact adventures.",
};

export default function ExpeditionsPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Expeditions"
        title="Adventure travel that is bold, considered, and expertly guided."
        description="For travellers chasing something deeper than a standard itinerary, we plan expeditions with care: the right route, the right pace, and the right support for every step."
        primaryCta={{ label: "Start planning", href: "/contact" }}
        secondaryCta={{ label: "Talk to a specialist", href: "/contact" }}
        image="/images/Bhutan-trek-cultural-passage.jpg"
        imageAlt="An expedition-led travel experience in the Himalayas"
      />

      <Reveal className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">What we plan</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">Specialist-led journeys for travellers who want more than a checklist.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              We blend comfort, safety, and destination expertise so the experience feels ambitious without becoming overwhelming.
            </p>
            <div className="mt-8 space-y-3 rounded-4xl border border-[#efe2dc] bg-[#fffdfc] p-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[#5d4944]">
                  <span className="mt-1 size-2 rounded-full bg-[#c20b0b]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#c20b0b] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
                <Link href="/contact">
                  Start planning <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#efe2dc] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
                <Link href="/contact">Talk to a specialist</Link>
              </Button>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {journeys.map((journey) => (
            <PhotoShowcaseCard key={journey.title} {...journey} />
          ))}
        </div>
      </Reveal>

      <Reveal className="mx-auto max-w-7xl px-6 pb-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
          <TestimonialCard name={testimonials[1].name} location={testimonials[1].location} quote={testimonials[1].quote} trip={testimonials[1].trip} />
        </div>
      </Reveal>
    </main>
  );
}
