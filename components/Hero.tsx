"use client";

import { motion } from "motion/react";
import { BUSINESS } from "@/lib/content";

const TRUST = [
  { value: "4.6★", label: `${BUSINESS.reviewCount} Google reviews` },
  { value: "Since 1995", label: "family-run on Route 66" },
  { value: "Hand-finished", label: "no tunnels, no shortcuts" },
  { value: "Guaranteed", label: "satisfaction, every visit" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15 * i, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section id="top" className="relative flex h-svh min-h-[600px] flex-col">
      {/* Background video with poster fallback */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover brightness-[0.55] saturate-[0.85] motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        {/* Reduced-motion / video-failure backdrop */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,#101423_0%,#050508_70%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-ink" />
      </div>

      {/* Content, anchored low-left like a title card */}
      <div className="relative mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-14 pt-24 sm:px-8 sm:pb-28">
        <motion.p
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="show"
          className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-blue-lt"
        >
          Glendora, CA · Inside Route 66 Car Wash
        </motion.p>

        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="show"
          className="metallic-shine max-w-4xl font-head text-6xl font-bold uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Your car,
          <br />
          finished by hand.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="show"
          className="mt-6 max-w-xl text-lg text-grey"
        >
          Premium auto detailing on Route 66 since 1995. Interior, exterior,
          paint correction — done by the same family for 30 years.
        </motion.p>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href={BUSINESS.phoneHref}
            className="rounded-full bg-blue px-8 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(21,101,245,0.45)] transition hover:bg-blue-lt"
          >
            Call {BUSINESS.phone}
          </a>
          <a
            href="#services"
            className="rounded-full border border-white/25 px-8 py-4 text-base font-semibold text-white/90 backdrop-blur transition hover:border-white/60 hover:text-white"
          >
            See services & pricing
          </a>
        </motion.div>
      </div>

      {/* Trust strip pinned to hero bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="relative border-t border-white/10 bg-ink/40 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-8 gap-y-3 px-5 py-4 sm:px-8 md:grid-cols-4">
          {TRUST.map((t) => (
            <div key={t.value} className="flex flex-col">
              <span className="font-head text-lg font-bold leading-tight text-white">
                {t.value}
              </span>
              <span className="text-xs text-grey">{t.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
