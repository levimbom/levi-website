import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Tag */}
      <div className="inline-flex items-center gap-2 mb-8">
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: "var(--accent)" }}
        />
        <span className="text-sm" style={{ color: "var(--muted)" }}>
          RevOps & GTM Specialist · Amsterdam
        </span>
      </div>

      {/* Headline */}
      <h1
        className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-8 max-w-4xl"
        style={{ color: "var(--foreground)" }}
      >
        Build a commercial engine{" "}
        <span style={{ color: "var(--accent)" }}>that actually scales.</span>
      </h1>

      {/* Subtext */}
      <p
        className="text-lg md:text-xl leading-relaxed max-w-2xl mb-12"
        style={{ color: "var(--muted)" }}
      >
        I help B2B companies design, implement and optimize their revenue
        operations — from HubSpot setup to AI-powered outbound. Six years,
        20+ clients, one focus: growth that compounds.
      </p>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/#work"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
          style={{ backgroundColor: "var(--accent)", color: "#080808" }}
        >
          See my work
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-70"
          style={{
            border: "1px solid var(--border)",
            color: "var(--foreground)",
          }}
        >
          Let&apos;s talk
        </Link>
      </div>

    </section>
  );
}
