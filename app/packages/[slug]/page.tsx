import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { packages } from "@/data/packages";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    return {
      title: "Journey Not Found | Mad Compass",
      description: "The requested journey could not be found.",
    } satisfies Metadata;
  }

  return {
    title: `${pkg.title} | Mad Compass`,
    description: pkg.blurb,
  } satisfies Metadata;
}

export default async function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pkg = packages.find((item) => item.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <main className="flex-1 bg-[#fffdfc]">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="rounded-[2.5rem] border border-[#efe2dc] bg-white p-8 shadow-[0_24px_80px_rgba(17,17,17,0.05)] sm:p-10">
          <span className="rounded-full bg-[#fff4f2] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#c20b0b]">{pkg.category}</span>
          <h1 className="mt-4 text-4xl font-semibold text-[#17120f] sm:text-5xl">{pkg.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#655b4f]">{pkg.blurb}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-[#c20b0b] shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
              <Link href="/contact">Ask about this journey</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#efe2dc] bg-white/95 text-[#17120f] shadow-[0_10px_24px_rgba(17,17,17,0.06)] hover:border-[#c20b0b] hover:text-[#c20b0b] hover:bg-[#fff7f4] hover:shadow-[0_14px_30px_rgba(17,17,17,0.08)]">
              <Link href="/packages">See more journeys</Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#efe2dc] bg-[#fffdfc] p-6">
              <h2 className="text-2xl font-semibold text-[#17120f]">Journey highlights</h2>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-[#5d4944]">
                {pkg.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <span className="mt-1 size-2 rounded-full bg-[#c20b0b]" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[2rem] border border-[#efe2dc] bg-[#fff8f5] p-6">
              <h2 className="text-2xl font-semibold text-[#17120f]">Trip details</h2>
              <div className="mt-4 space-y-3 text-sm text-[#5d4944]">
                <p><span className="font-semibold text-[#17120f]">Location:</span> {pkg.location}</p>
                <p><span className="font-semibold text-[#17120f]">Duration:</span> {pkg.duration}</p>
                <p><span className="font-semibold text-[#17120f]">Starting from:</span> {pkg.priceFrom}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
