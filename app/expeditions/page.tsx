import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/sections/enquiry-form";

const highlights = [
  "High-focus adventure journeys for trekking, wildlife, polar, and niche travel",
  "Comfort and safety are built into the experience from the first conversation",
  "A specialist helps shape each expedition around your ability, timing, and interests",
];

export default function ExpeditionsPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Expeditions</p>
            <h1 className="mt-4 text-4xl font-semibold text-[#17120f] sm:text-5xl">
              Adventure travel that is bold, considered, and expertly guided.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              For travellers chasing something deeper than a standard itinerary, we plan expeditions with care: the right route, the right pace, and the right support.
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
