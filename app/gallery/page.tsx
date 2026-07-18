import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Gallery | Mad Compass",
  description: "Browse a curated selection of destination moods, experiences, and journeys shaped by Mad Compass.",
};

export default function GalleryPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Gallery"
        title="A preview of the mood, textures, and landscapes that shape our itineraries."
        description="Every journey is shaped by destination feeling as much as logistics, and that balance is reflected in the way we design each trip."
        primaryCta={{ label: "Start your enquiry", href: "/contact" }}
        secondaryCta={{ label: "View travel paths", href: "/about" }}
        image="/images/Japan-soft-luxury-discovery.jpg"
        imageAlt="A destination-led gallery mood for Mad Compass"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {packages.slice(0, 4).map((pkg, index) => (
            <div key={pkg.slug} className="overflow-hidden rounded-[2rem] border border-[#efe2dc] bg-white shadow-[0_24px_80px_rgba(17,17,17,0.06)]">
              <div className="h-56 w-full bg-[#1f1a17]" />
              <div className="p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">{index % 2 === 0 ? "Signature stay" : "Scene"}</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#17120f]">{pkg.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#655b4f]">{pkg.blurb}</p>
                <div className="mt-6 flex justify-start">
                  <Button asChild variant="outline" className="border-[#efe2dc] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
                    <Link href="/contact">Ask about this journey</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
