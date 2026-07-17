"use client";

import { motion } from "motion/react";
import { SERVICES, BUSINESS, type Service } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.07 * index, ease: "easeOut" }}
      className={`card-sweep flex flex-col rounded-2xl border p-6 backdrop-blur ${
        service.popular
          ? "border-blue/60 bg-blue/[0.07] shadow-[0_0_48px_rgba(21,101,245,0.18)]"
          : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="mb-1 flex items-center justify-between gap-3">
        <h3 className="font-head text-2xl font-bold uppercase tracking-wide text-white">
          {service.name}
        </h3>
        {service.popular && (
          <span className="shrink-0 rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
            Most popular
          </span>
        )}
        {service.addon && (
          <span className="shrink-0 rounded-full border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-grey">
            Add-on
          </span>
        )}
      </div>
      <p className="mb-5 text-sm text-grey">{service.tagline}</p>
      <dl className="mt-auto space-y-2">
        {service.prices.map((p) => (
          <div
            key={p.label}
            className="flex items-baseline justify-between border-b border-white/[0.06] pb-2 last:border-0"
          >
            <dt className="text-sm text-grey">{p.label}</dt>
            <dd className="font-head text-xl font-bold text-white">
              {p.value}
            </dd>
          </div>
        ))}
      </dl>
    </motion.article>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services & pricing"
          title="Pick your detail"
          intro="Straightforward pricing by vehicle size. Every service is done by hand, inside our shop at Route 66 Car Wash."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.name} service={s} index={i} />
          ))}
          <motion.a
            href={BUSINESS.phoneHref}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.07 * SERVICES.length }}
            className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-white/20 p-6 transition hover:border-blue-lt/60 hover:bg-blue/[0.05]"
          >
            <h3 className="font-head text-2xl font-bold uppercase tracking-wide text-white">
              Not sure what your car needs?
            </h3>
            <p className="mt-2 text-sm text-grey">
              Call us and describe it — we&apos;ll tell you exactly what it
              takes and what it costs.
            </p>
            <span className="mt-4 font-head text-xl font-bold text-blue-lt">
              {BUSINESS.phone} →
            </span>
          </motion.a>
        </div>
        <p className="mt-6 text-xs text-grey/70">
          Final pricing depends on vehicle condition — call for an exact quote.
        </p>
      </div>
    </section>
  );
}
