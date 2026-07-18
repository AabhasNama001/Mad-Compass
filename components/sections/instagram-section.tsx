"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
  { title: "Slow Himalayan air", image: "/images/Bhutan-trek-cultural-passage.jpg" },
  { title: "Island calm", image: "/images/Kerala-backwater-hill-retreat.jpg" },
  { title: "City texture & cuisine", image: "/images/Japan-soft-luxury-discovery.jpg" },
];

export function InstagramSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="rounded-4xl border border-[#efe2dc] bg-[#111111] p-8 text-white shadow-[0_24px_80px_rgba(17,17,17,0.12)] sm:p-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.3em] text-[#f7b29d]">Instagram</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A glimpse of the landscapes and moments we love to shape into holidays.</h2>
          </div>
          <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm font-semibold text-[#f7b29d] hover:text-white">
            Follow @madcompass
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <div key={post.title} className="overflow-hidden rounded-3xl border border-white/10 bg-white/10">
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <p className="text-sm text-white/80">{post.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
