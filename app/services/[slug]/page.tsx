import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { SERVICES, BUSINESS } from "@/lib/content";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name} | 1 Ultra Shine — Glendora, CA`,
    description: service.description ?? service.tagline,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen bg-ink text-white">
      <Nav />

      {/* ── Hero ── */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src={service.image}
          alt={service.name}
          fill
          priority
          className="object-cover object-[center_30%] brightness-[0.55] saturate-[0.85]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-ink" />

        {/* Back link */}
        <div className="absolute left-0 right-0 top-24 mx-auto max-w-6xl px-5 sm:px-8">
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-sm text-grey transition hover:text-white"
          >
            <span>←</span>
            <span>All services</span>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 right-0 mx-auto max-w-6xl px-5 pb-12 sm:px-8">
          {service.popular && (
            <span className="mb-3 inline-block rounded-full bg-blue px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
              Most popular
            </span>
          )}
          <h1 className="metallic-shine font-head text-5xl font-bold uppercase leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            {service.name}
          </h1>
          {service.headline && (
            <p className="mt-3 text-lg italic text-blue-lt">{service.headline}</p>
          )}
        </div>
      </section>

      {/* ── Body ── */}
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-16 lg:grid-cols-[1fr_360px]">

          {/* Left: description + features */}
          <div>
            {service.description && (
              <p className="mb-10 text-lg leading-relaxed text-grey">
                {service.description}
              </p>
            )}

            {service.features && service.features.length > 0 && (
              <>
                <h2 className="mb-6 font-head text-2xl font-bold uppercase tracking-wide text-white">
                  What&apos;s included
                </h2>
                <ul className="space-y-4">
                  {service.features.map((f) => (
                    <li key={f.title} className="flex gap-4">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue" />
                      <div>
                        <span className="font-semibold text-white">{f.title}</span>
                        {f.body && (
                          <span className="text-grey"> — {f.body}</span>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </>
            )}

            {service.duration && (
              <p className="mt-8 text-sm text-grey">
                <span className="font-semibold text-white">Estimated duration:</span>{" "}
                {service.duration}
              </p>
            )}

            {service.note && (
              <p className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-4 text-sm text-grey">
                {service.note}
              </p>
            )}
          </div>

          {/* Right: pricing + CTA */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h2 className="mb-5 font-head text-xl font-bold uppercase tracking-wide text-white">
                Pricing
              </h2>

              <ul className="space-y-3">
                {service.prices.map((p) => (
                  <li
                    key={p.label}
                    className="flex items-baseline justify-between border-b border-white/[0.07] pb-3 last:border-0 last:pb-0"
                  >
                    <div>
                      <span className="text-sm text-grey">{p.label}</span>
                      {p.note && (
                        <span className="ml-2 text-xs text-blue-lt">{p.note}</span>
                      )}
                    </div>
                    <span className="font-head text-2xl font-bold text-white">
                      {p.value}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 text-xs text-grey/70">
                Final price depends on vehicle condition. Call for an exact quote.
              </p>

              <a
                href={BUSINESS.phoneHref}
                className="mt-6 flex w-full items-center justify-center rounded-full bg-blue px-6 py-4 text-base font-semibold text-white shadow-[0_0_40px_rgba(21,101,245,0.4)] transition hover:bg-blue-lt"
              >
                Call to book — {BUSINESS.phone}
              </a>
            </div>

            {/* Other services */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-grey">
                Other services
              </h3>
              <ul className="space-y-2">
                {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="text-sm text-grey transition hover:text-white"
                    >
                      {s.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </main>
  );
}
