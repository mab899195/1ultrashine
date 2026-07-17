"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { BUSINESS } from "@/lib/content";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-ink/90 backdrop-blur-md border-b border-white/10"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="1 Ultra Shine — back to top">
          <Image
            src="/logo-transparent.png"
            alt="1 Ultra Shine Detail"
            width={146}
            height={56}
            priority
            className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-grey transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={BUSINESS.phoneHref}
          className="rounded-full bg-blue px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(21,101,245,0.35)] transition hover:bg-blue-lt hover:shadow-[0_0_32px_rgba(21,101,245,0.5)]"
        >
          {BUSINESS.phone}
        </a>
      </div>
    </header>
  );
}
