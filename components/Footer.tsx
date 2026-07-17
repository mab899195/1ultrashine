import Image from "next/image";
import { BUSINESS } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row sm:px-8">
        <Image
          src="/logo-transparent.png"
          alt="1 Ultra Shine Detail"
          width={130}
          height={50}
        />
        <nav className="flex gap-6 text-sm text-grey">
          <a href="#services" className="hover:text-white">
            Services
          </a>
          <a href="#why-us" className="hover:text-white">
            Why Us
          </a>
          <a href="#reviews" className="hover:text-white">
            Reviews
          </a>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </nav>
        <p className="text-xs text-grey/70">
          © 2026 {BUSINESS.legalName} · {BUSINESS.address}
        </p>
      </div>
    </footer>
  );
}
