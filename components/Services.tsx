"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { SERVICES, BUSINESS, type Service } from "@/lib/content";
import SectionHeading from "./SectionHeading";

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.07 * index, ease: "easeOut" }}
      className="h-full"
    >
      <Link
        href={`/services/${service.slug}`}
        className={`card-sweep group flex h-full flex-col overflow-hidden rounded-2xl border backdrop-blur transition hover:border-blue-lt/50 ${
          service.popular
            ? "border-blue/60 bg-blue/[0.07] shadow-[0_0_48px_rgba(21,101,245,0.18)]"
            : "border-white/10 bg-white/[0.03]"
        }`}
      >
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover object-[center_30%] transition duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-1 flex items-center justify-between gap-3">
            <h3 className="font-head text-2xl font-bold uppercase tracking-wide text-white">
              {service.name}
            </h3>
            {service.popular && (
              <span className="shrink-0 rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Most popular
              </span>
            )}
          </div>
          <p className="text-sm text-grey">{service.tagline}</p>
          <span className="mt-auto pt-4 text-xs font-semibold text-blue-lt opacity-0 transition group-hover:opacity-100">
            View details →
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="scroll-mt-20 pb-24 pt-8">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Pick your detail"
          intro="Every service is done by hand, inside our shop at Route 66 Car Wash."
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
      </div>
    </section>
  );
}
