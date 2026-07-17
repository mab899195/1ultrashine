"use client";

import { motion } from "motion/react";
import { BUSINESS, FEATURED_REVIEW } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function Stars() {
  return (
    <div
      className="flex gap-1 text-blue-lt"
      aria-label={`${BUSINESS.rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <svg
          key={n}
          viewBox="0 0 20 20"
          className="h-6 w-6"
          fill={n <= Math.round(BUSINESS.rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8-4.2-4.1 5.9-.9L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Reviews"
          title={`${BUSINESS.rating} stars on Google`}
          intro={`${BUSINESS.reviewCount} customers have rated us. Here's what a detail from us actually looks like:`}
        />

        <motion.figure
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="card-sweep rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12"
        >
          <Stars />
          <blockquote className="mt-6 max-w-3xl font-head text-3xl font-semibold leading-snug text-white sm:text-4xl">
            &ldquo;{FEATURED_REVIEW.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-5 text-sm text-grey">
            — {FEATURED_REVIEW.source}
          </figcaption>
        </motion.figure>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-sm text-grey"
        >
          Every detail is backed by our satisfaction guarantee — if something
          isn&apos;t right, we make it right.
        </motion.p>
      </div>
    </section>
  );
}
