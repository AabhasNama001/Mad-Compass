import Link from "next/link";

import { siteContent } from "@/data/content";
import { navigationLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[#f0d6d1] bg-[#17120f] px-6 py-14 text-[#f8ece8] sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:justify-between">
        <div className="max-w-xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f0b8ae]">{siteContent.brandName}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{siteContent.tagline}</h2>
          <p className="mt-4 text-sm leading-7 text-[#d7c6b3]">{siteContent.address}</p>
          <p className="mt-1 text-sm text-[#d7c6b3]">{siteContent.phone}</p>
          <p className="mt-1 text-sm text-[#d7c6b3]">{siteContent.email}</p>
        </div>
        <div className="flex flex-col gap-8 sm:flex-row">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f3c7be]">Quick links</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#e4d8c9]">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f3c7be]">Social</h3>
            <ul className="mt-4 space-y-2 text-sm text-[#e4d8c9]">
              {siteContent.socials.map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noreferrer" className="hover:text-white">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
