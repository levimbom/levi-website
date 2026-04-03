import Link from "next/link";

const services = [
  {
    tag: "One-time",
    name: "Blueprint",
    tagline: "Know exactly what to build before you build it.",
    description:
      "I map your full commercial process — from first touch to closed deal to expansion — and design the exact system you need inside HubSpot. You get a clear, visual blueprint before a single thing is built.",
    includes: [
      "Customer journey mapping",
      "Lifecycle stage & qualification logic",
      "Pipeline structure design",
      "Automation opportunity map",
      "HubSpot licensing recommendation",
    ],
    price: "From €2,500",
    cta: "Start with a blueprint",
  },
  {
    tag: "One-time",
    name: "Build",
    tagline: "Your HubSpot, set up the right way.",
    description:
      "I implement the full system inside HubSpot — pipelines, automation, dashboards, data migration, and training. Built for the way your team actually works, ready to scale from day one.",
    includes: [
      "Full HubSpot implementation",
      "Pipelines, properties & lifecycle stages",
      "Automation & lead routing",
      "Sales & marketing dashboards",
      "Data migration & cleanup",
      "1 training session + documentation",
    ],
    price: "From €10,000",
    cta: "Get a quote",
    featured: true,
  },
  {
    tag: "Retainer",
    name: "GTM Engine",
    tagline: "A predictable outbound machine, powered by AI.",
    description:
      "I run your outbound operation end-to-end — enrichment, targeting, sequencing, and reporting. Built on Clay, Apollo, HeyReach, and Instantly, fully integrated with HubSpot.",
    includes: [
      "ICP definition & signal-based targeting",
      "AI enrichment via Clay",
      "LinkedIn outreach via HeyReach",
      "Email outreach via Apollo + Instantly",
      "HubSpot integration & reporting",
      "Monthly performance reviews",
    ],
    price: "From €3,000/mo",
    cta: "Learn more",
  },
  {
    tag: "Retainer",
    name: "Optimize",
    tagline: "Keep your system growing with your business.",
    description:
      "Ongoing RevOps support as you scale — pipeline improvements, conversion optimization, automation expansion, and reporting. Your system gets better every month.",
    includes: [
      "Monthly pipeline & conversion reviews",
      "Automation expansion",
      "Reporting improvements",
      "New market / team onboarding",
      "Priority support",
    ],
    price: "From €2,000/mo",
    cta: "Learn more",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-16">
        <p
          className="text-xs uppercase tracking-widest mb-4"
          style={{ color: "var(--accent)" }}
        >
          Services
        </p>
        <h2
          className="text-4xl md:text-5xl font-bold tracking-tight max-w-2xl"
          style={{ color: "var(--foreground)" }}
        >
          Four ways to work together
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div
            key={s.name}
            className="rounded-2xl p-8 flex flex-col gap-6 relative"
            style={{
              backgroundColor: s.featured ? "var(--accent-dim)" : "var(--card)",
              border: s.featured
                ? "1px solid rgba(200,255,0,0.2)"
                : "1px solid var(--border)",
            }}
          >
            {/* Tag */}
            <div className="flex items-center justify-between">
              <span
                className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                style={{
                  backgroundColor: s.featured
                    ? "rgba(200,255,0,0.15)"
                    : "rgba(255,255,255,0.06)",
                  color: s.featured ? "var(--accent)" : "var(--muted)",
                }}
              >
                {s.tag}
              </span>
              <span
                className="text-sm font-semibold"
                style={{ color: s.featured ? "var(--accent)" : "var(--foreground)" }}
              >
                {s.price}
              </span>
            </div>

            {/* Name + tagline */}
            <div>
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: "var(--foreground)" }}
              >
                {s.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {s.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              {s.description}
            </p>

            {/* Includes */}
            <ul className="flex flex-col gap-2">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <span
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--accent)" }}
                  >
                    ✓
                  </span>
                  <span style={{ color: "var(--foreground)" }}>{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-auto text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: s.featured ? "var(--accent)" : "var(--foreground)" }}
            >
              {s.cta} →
            </Link>
          </div>
        ))}
      </div>

      {/* Add-on note */}
      <div
        className="mt-6 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{
          backgroundColor: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <div>
          <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
            + Connect add-on
          </p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            Need to wire HubSpot to your ERP, product data, or BI tools? I integrate your full commercial tech stack — NetSuite, AFAS, Postgres, PostHog, and more.
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 text-sm font-medium"
          style={{ color: "var(--foreground)" }}
        >
          Ask about it →
        </Link>
      </div>
    </section>
  );
}
