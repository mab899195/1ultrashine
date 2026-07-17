"use client";

import { motion } from "motion/react";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-lt">
        {eyebrow}
      </p>
      <h2 className="metallic-text font-head text-4xl font-bold uppercase tracking-tight sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-2xl text-grey">{intro}</p>}
    </motion.div>
  );
}
