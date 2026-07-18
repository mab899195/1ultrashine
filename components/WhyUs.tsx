"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "motion/react";
import { WHY_US, BUSINESS } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function CountUp({
  to,
  suffix = "",
  decimals = 0,
}: {
  to: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, to, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const STATS = [
  { node: <CountUp to={30} suffix="+" />, label: "years detailing in Glendora" },
  { node: <CountUp to={4.6} decimals={1} />, label: "star Google rating" },
  {
    node: <CountUp to={BUSINESS.reviewCount} />,
    label: "reviews and counting",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="scroll-mt-20 bg-panel pb-24 pt-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why 1 Ultra Shine"
          title="Thirty years of shine"
        />

        <div className="mb-16 grid gap-8 border-y border-white/10 py-8 sm:grid-cols-3">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <div className="metallic-text font-head text-6xl font-bold">
                {s.node}
              </div>
              <div className="mt-1 text-sm text-grey">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2">
          {WHY_US.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.08 * i, duration: 0.55 }}
              className="border-l-2 border-blue pl-5"
            >
              <h3 className="font-head text-2xl font-bold uppercase tracking-wide text-white">
                {f.title}
              </h3>
              <p className="mt-2 text-grey">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
