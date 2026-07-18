"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { featuredPackages } from "@/data/packages";

export function PackageGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-[#b86b3d]">Featured journeys</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#1f1a17] sm:text-4xl">
            Travel experiences designed to feel effortless and memorable.
          </h2>
        </div>
        <Button asChild variant="outline" className="border-[#7a5c2f]/20 text-[#1f1a17]">
          <Link href="/packages">Browse all packages</Link>
        </Button>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {featuredPackages.map((pkg, index) => (
          <motion.article
            key={pkg.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.08, duration: 0.35 }}
            className="overflow-hidden rounded-[2rem] border border-[#e9dcca] bg-[#fffaf4] shadow-[0_24px_80px_rgba(23,16,10,0.08)]"
          >
            <div className="h-48 w-full bg-[radial-gradient(circle_at_top_left,_rgba(184,107,61,0.22),_transparent_35%),linear-gradient(135deg,_#1f1a17,_#5f4330)]" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f1e0cc] px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-[#8b4d24]">
                  {pkg.category}
                </span>
                <span className="text-sm text-[#6a5a45]">{pkg.duration}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-[#1f1a17]">{pkg.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#655b4f]">{pkg.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pkg.highlights.map((item) => (
                  <span key={item} className="rounded-full border border-[#e1d0b8] px-3 py-1 text-xs text-[#6b4b2f]">
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#8e7d68]">Starting from</p>
                  <p className="text-xl font-semibold text-[#1f1a17]">{pkg.priceFrom}</p>
                </div>
                <Button asChild size="sm" className="bg-[#1f1a17] hover:bg-[#2f251d]">
                  <Link href={`/packages/${pkg.slug}`}>
                    Enquire <ArrowUpRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
