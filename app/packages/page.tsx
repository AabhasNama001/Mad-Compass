import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/sections/page-hero";
import { packages } from "@/data/packages";

export const metadata: Metadata = {
  title: "Travel Journeys | Mad Compass",
  description: "Browse curated travel journeys and get inspired by the kinds of destinations and experiences Mad Compass can shape for you.",
};

export default function PackagesPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <PageHero
        eyebrow="Travel Journeys"
        title="Curated ideas for domestic escapes, overseas stays, and expedition-style adventures."
        description="We build each journey around your pace, your people, and the kind of experience you want to remember long after you return."
        primaryCta={{ label: "Start your enquiry", href: "/contact" }}
        secondaryCta={{ label: "View about page", href: "/about" }}
        image="/images/Kerala-backwater-hill-retreat.jpg"
        imageAlt="A tailor-made travel journey with Mad Compass"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.slug} className="rounded-[2rem] border border-[#efe2dc] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.05)]">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#fff4f2] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c20b0b]">{pkg.category}</span>
                <span className="text-sm text-[#7d675f]">{pkg.duration}</span>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-[#17120f]">{pkg.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#655b4f]">{pkg.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-[#5d4944]">
                {pkg.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-[#c20b0b]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild className="bg-[#c20b0b] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
                  <Link href="/contact">Ask about this journey</Link>
                </Button>
                <Button asChild variant="outline" className="border-[#efe2dc] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
                  <Link href="/contact">Talk to a specialist</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
