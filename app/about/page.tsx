import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";

const values = [
  "We listen first and design around your travel style, budget, and pace.",
  "We do not push fixed itineraries. We build a custom holiday and refine it with you.",
  "Every enquiry is handled by a holiday expert who can guide the first conversation with care.",
];

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Who We Are</p>
            <h1 className="mt-3 text-4xl font-semibold text-[#17120f] sm:text-5xl">
              We help travellers shape holidays that feel deeply personal, not pre-packed.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              {siteContent.companyName} exists for travellers who want a holiday built with care — one that reflects their preferences, their budget, and the kind of experience they want to remember.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="bg-[#d13b2f] hover:bg-[#b92f24]">
                <Link href="/contact">
                  Start your enquiry <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#f0d6d1] bg-white text-[#17120f]">
                <a href={siteContent.whatsapp} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp us
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-[2rem] border border-[#f0d6d1] bg-[#fff8f5] p-8 shadow-[0_24px_80px_rgba(20,15,10,0.06)]">
            <h2 className="text-2xl font-semibold text-[#17120f]">What defines us</h2>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-[#5d4944]">
              {values.map((value) => (
                <li key={value} className="flex items-start gap-3">
                  <span className="mt-1 size-2 rounded-full bg-[#d13b2f]" />
                  <span>{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
