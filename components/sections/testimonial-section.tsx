"use client";

import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";

export function TestimonialSection() {
  return (
    <section className="bg-[#fffdfc] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">Guest notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            The kind of service that feels reassuring before the trip even begins.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="rounded-[1.75rem] border border-[#efe2dc] bg-white p-6 shadow-[0_24px_80px_rgba(17,17,17,0.08)]"
            >
              <p className="text-base leading-8 text-[#4f433c]">“{item.quote}”</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c20b0b] text-sm font-semibold text-white">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#1f1a17]">{item.name}</p>
                  <p className="text-sm text-[#7b6752]">{item.location} · {item.trip}</p>
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
