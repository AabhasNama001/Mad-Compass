"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";

import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "./testimonial-card";

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // no synchronous state effects required

  return (
    <section className="bg-[#fffdfc] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#c20b0b]">Guest notes</p>
          <h2 className="mt-3 text-3xl font-semibold text-[#17120f] sm:text-4xl">
            The kind of service that feels reassuring before the trip even begins.
          </h2>
        </div>

        {/* Desktop: 3-up grid with equal heights */}
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
                className="h-full flex flex-col justify-between min-h-[320px]"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet: smooth native scroll-snap carousel */}
        <div className="mt-10 lg:hidden">
          <div className="overflow-hidden rounded-[1.75rem]">
            <div
              ref={scrollRef}
              onScroll={() => {
                if (!scrollRef.current) return;
                const container = scrollRef.current;
                const children = Array.from(container.children) as HTMLElement[];
                if (children.length === 0) return;
                const scrollLeft = container.scrollLeft;
                let closestIndex = 0;
                let closestDiff = Infinity;
                for (let i = 0; i < children.length; i++) {
                  const child = children[i];
                  const diff = Math.abs(child.offsetLeft - scrollLeft);
                  if (diff < closestDiff) {
                    closestDiff = diff;
                    closestIndex = i;
                  }
                }
                setActiveIndex(closestIndex);
              }}
              className="flex gap-4 overflow-x-auto touch-pan-x snap-x snap-mandatory px-3 py-4"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {testimonials.map((item) => (
                <div key={item.name} className="shrink-0 snap-center w-[86%] sm:w-[78%] px-1">
                  <TestimonialCard
                    name={item.name}
                    location={item.location}
                    quote={item.quote}
                    trip={item.trip}
                    className="min-h-[320px] flex flex-col justify-between"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                aria-label={`Show testimonial ${index + 1}`}
                onClick={() => {
                  if (!scrollRef.current) return;
                  const container = scrollRef.current;
                  const children = Array.from(container.children) as HTMLElement[];
                  const target = children[index];
                  if (target) {
                    container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
                    setActiveIndex(index);
                  }
                }}
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
