"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type PhotoShowcaseCardProps = {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  image: string;
  href: string;
};

export function PhotoShowcaseCard({ title, subtitle, description, badge, image, href }: PhotoShowcaseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-[2rem] border border-[#ece7e4] bg-[#111111] text-white shadow-[0_24px_90px_rgba(17,17,17,0.16)] transition duration-300 hover:-translate-y-1"
        aria-label={`Enquire about ${title}`}
      >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[0.65rem] uppercase tracking-[0.3em] text-white/85">
            {badge}
          </span>
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-white/75">{subtitle}</p>
        </div>
      </div>
        <div className="space-y-4 bg-[#0f0c0b] p-6">
          <p className="text-sm leading-7 text-[#d7c6b3]">{description}</p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-[#f6b4aa]">
            Enquire about this
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
