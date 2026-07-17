"use client";

import { motion } from "motion/react";
import { BUSINESS } from "@/lib/content";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-panel py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Book your detail"
          intro="Call or email to schedule — we'll tell you exactly what your car needs and how long it takes."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey">
                Phone
              </p>
              <a
                href={BUSINESS.phoneHref}
                className="metallic-text font-head text-5xl font-bold tracking-tight transition hover:opacity-80 sm:text-6xl"
              >
                {BUSINESS.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey">
                Address
              </p>
              <a
                href={BUSINESS.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block text-lg text-white hover:text-blue-lt"
              >
                {BUSINESS.address}
              </a>
              <p className="mt-1 text-sm text-grey">
                Inside Route 66 Car Wash — drop your car, grab a coffee nearby.
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-grey">
                Email
              </p>
              <a
                href={BUSINESS.emailHref}
                className="mt-1 block text-lg text-white hover:text-blue-lt"
              >
                {BUSINESS.email}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden rounded-2xl border border-white/10"
          >
            <iframe
              title="Map to 1 Ultra Shine, 525 E Route 66, Glendora CA"
              src={BUSINESS.mapsEmbed}
              className="h-80 w-full grayscale-[0.4] contrast-[1.05] lg:h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
