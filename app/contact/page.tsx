import { MessageCircle, Phone } from "lucide-react";

import { EnquiryForm } from "@/components/sections/enquiry-form";
import { siteContent } from "@/data/content";

export default function ContactPage() {
  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#d13b2f]">Contact</p>
            <h1 className="mt-3 text-4xl font-semibold text-[#17120f] sm:text-5xl">
              Let us shape a journey that fits your pace, your people, and your priorities.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#655b4f]">
              Share a few details and we will respond with a thoughtful first recommendation, along with the next steps for planning your holiday.
            </p>
            <div className="mt-8 rounded-[2rem] border border-[#f0d6d1] bg-[#fff8f5] p-6">
              <div className="space-y-3 text-sm text-[#5d4944]">
                <a href={`tel:${siteContent.phone}`} className="flex items-center gap-2 hover:text-[#d13b2f]">
                  <Phone className="size-4" /> {siteContent.phone}
                </a>
                <a href={`mailto:${siteContent.email}`} className="flex items-center gap-2 hover:text-[#d13b2f]">
                  <MessageCircle className="size-4" /> {siteContent.email}
                </a>
              </div>
            </div>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </main>
  );
}
