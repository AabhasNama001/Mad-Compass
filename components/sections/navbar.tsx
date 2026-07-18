"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { navigationLinks } from "@/lib/constants";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#f0d6d1] bg-[rgba(255,253,252,0.96)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-20 w-20 shadow-sm">
            <Image src="/images/logo.jpeg" alt="Mad Compass logo" fill className="object-cover" />
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-[#5d4944] transition hover:text-[#d13b2f]">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-[#d13b2f] hover:bg-[#b92f24]">
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>

        <button className="rounded-full border border-[#f0d6d1] p-2 text-[#17120f] lg:hidden" onClick={() => setOpen((prev) => !prev)} aria-label="Toggle navigation">
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#f0d6d1] bg-[#fff8f5] px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="text-sm font-medium text-[#4f433c]" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full bg-[#d13b2f] hover:bg-[#b92f24]">
            <Link href="/contact">Start planning</Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
