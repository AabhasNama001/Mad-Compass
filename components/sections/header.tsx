"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/data/content";
import { navigationLinks } from "@/lib/constants";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#efe2dc] transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-[0_8px_30px_rgba(17,17,17,0.05)] backdrop-blur-lg"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <div className="relative h-16 w-auto shrink-0">
            <Image src="/images/mad-compass-logo.png" alt="Mad Compass" width={200} height={100} className="h-16 w-auto object-contain" />
          </div>
          {/* Logo image only: text removed */}
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#50453f] transition hover:text-[#c20b0b]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="bg-[#c20b0b] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
            <Link href="/contact">Enquire</Link>
          </Button>
        </div>

        <button
          className="rounded-full border border-[#efe2dc] p-2 text-[#111111] lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[#efe2dc] bg-white px-6 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4d433d]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button asChild className="mt-4 w-full bg-[#c20b0b] text-white shadow-[0_16px_35px_rgba(194,11,11,0.22)] hover:bg-[#a70a0a] hover:shadow-[0_20px_42px_rgba(194,11,11,0.3)]">
            <Link href="/contact">Start planning</Link>
          </Button>
        </div>
      ) : null}
    </header>
  );
}
