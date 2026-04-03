import Link from "next/link";
import type { Metadata } from "next";
import { cases } from "@/components/sections/CaseStudies";

export const metadata: Metadata = {
  title: "Work — Levi Bom",
  description: "Selected case studies — RevOps implementations, HubSpot builds, and GTM systems.",
};

export default function WorkPage() {
  const publishedCases = cases.filter((c) => c.slug !== "placeholder");

  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <p className="text-xs uppercase tracking-widest mb-6" style={{ color: "var(--accent)" }}>
        Work
      </p>
      <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" style={{ color: "var(--foreground)" }}>
        Selected projects
      </h1>
      <p className="text-lg leading-relaxed max-w-xl mb-16" style={{ color: "var(--muted)" }}>
        A selection of clients I&apos;ve worked with and what we built together.
        More case studies on the way.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {publishedCases.map((c) => (
          <Link
            key={c.slug}
            href={`/work/${c.slug}`}
            className="rounded-2xl overflow-hidden flex flex-col group"
            style={{ border: "1px solid var(--border)" }}
          >
            {/* Visual */}
            <div
              className="h-48 flex items-end p-8 transition-opacity group-hover:opacity-90"
              style={{ background: c.gradient }}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", color: c.accent }}
              >
                {c.service}
              </span>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col gap-3 flex-1" style={{ backgroundColor: "var(--card)" }}>
              <p className="text-xs" style={{ color: "var(--muted)" }}>{c.industry}</p>
              <h2 className="text-xl font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                {c.headline}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {c.summary}
              </p>
              <p className="mt-2 text-sm font-medium transition-opacity group-hover:opacity-70" style={{ color: "var(--foreground)" }}>
                Read case study →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
