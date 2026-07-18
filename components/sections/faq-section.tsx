"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does pricing work without fixed packages?",
    answer:
      "We begin with your travel style, dates, pace, and comfort level, then recommend a plan that fits your budget rather than forcing you into a pre-set package. Pricing is shaped around the journey you want, not a one-size-fits-all template.",
  },
  {
    question: "How quickly can I expect a specialist response after I enquire?",
    answer:
      "Most enquiries are responded to within the same day or the next business day, depending on timing and travel urgency. We aim to keep the first conversation warm, clear, and useful from the outset.",
  },
  {
    question: "How much can I customise a recommended itinerary?",
    answer:
      "A great deal. We often refine the route, pace, hotel style, and activity mix with you so the plan feels personal rather than generic. The goal is a journey that reflects your preferences, not a replica of someone else’s holiday.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="rounded-4xl border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.06)] sm:p-10">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">Frequently asked</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">Questions that often come up before the first conversation begins.</h2>
        </div>
        <div className="mt-8 space-y-4">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;
            return (
              <div key={item.question} className="rounded-3xl border border-[#efe2dc] bg-[#fffdfc]">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-base font-semibold text-[#17120f]">{item.question}</span>
                  <ChevronDown className={`size-5 shrink-0 text-[#c20b0b] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="px-5 pb-5 text-sm leading-7 text-[#655b4f]">{item.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
