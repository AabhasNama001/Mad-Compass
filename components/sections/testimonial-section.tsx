"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const goToPrev = () => {
    setActiveIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  return (
    <section className="bg-[#fffdfc] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">Guest notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            The kind of service that feels reassuring before the trip even begins.
          </h2>
        </div>

        <div className="mt-10 hidden gap-6 lg:grid lg:grid-cols-3 lg:items-stretch">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="h-full"
            >
              <TestimonialCard
                name={item.name}
                location={item.location}
                quote={item.quote}
                trip={item.trip}
                className="h-full flex flex-col justify-between min-h-80"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <div className="overflow-hidden rounded-[1.75rem]">
            <motion.div
              className="flex touch-pan-x"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -80) {
                  goToNext();
                } else if (info.offset.x > 80) {
                  goToPrev();
                }
              }}
            >
              {testimonials.map((item) => (
                <div key={item.name} className="w-full shrink-0 px-1">
                  <TestimonialCard
                    name={item.name}
                    location={item.location}
                    quote={item.quote}
                    trip={item.trip}
                    className="min-h-80 flex flex-col justify-between"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  index === activeIndex ? "bg-[#c20b0b]" : "bg-[#e7dcd6]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
