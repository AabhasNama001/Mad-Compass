import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/sections/enquiry-form";

const highlights = [
  "Slow, meaningful escapes with the right mix of comfort and discovery",
  "Thoughtful routing for hill stations, beaches, heritage stays, and wellness retreats",
  "A specialist helps shape the trip around your budget and travel style",
];

export default function DomesticPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Domestic Travel</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#17120f] sm:text-5xl">
              India, shaped around the pace you actually want.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              Whether you want a quiet mountain reset, a heritage-led circuit, or a celebration with friends and family, we plan it around your preferences rather than a preset package.
            </p>
            <div className="mt-8 space-y-3 rounded-[2rem] border border-[#f0d6d1] bg-[#fff8f5] p-6">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm leading-7 text-[#5d4944]">
                  <span className="mt-1 size-2 rounded-full bg-[#d13b2f]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#d13b2f] hover:bg-[#b92f24]">
                <Link href="/contact">
                  Start planning <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#f0d6d1] bg-white text-[#17120f]">
                <Link href="/contact">Talk to a specialist</Link>
              </Button>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
