import Link from "next/link";

const services = [
  {
    tag: "One-time",
    name: "Process",
    tagline: "Design your commercial engine before you build it.",
    description:
      "I map your full commercial process — from first touch to closed deal to expansion — and design the exact system your business needs. You leave with a clear, visual blueprint before a single thing is built.",
    includes: [
      "Customer journey mapping",
      "Lifecycle stage & qualification logic",
      "Pipeline structure design",
      "Automation opportunity map",
      "HubSpot licensing recommendation",
    ],
    price: "From €2,500",
    cta: "Start here",
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
    tag: "One-time",
    name: "Connect",
    tagline: "HubSpot as your single source of commercial truth.",
    description:
      "I wire HubSpot to your full tech stack — ERP, product data, BI tools, and more. Every system talks to each other, your data stays clean, and your reporting reflects reality.",
    includes: [
      "ERP integrations (NetSuite, AFAS, CNS)",
      "Product & usage data (Postgres, PostHog, ClickHouse)",
      "Data sync via Polytomic or custom API",
      "Custom objects & associations",
      "Data quality dashboards",
    ],
    price: "Custom",
    cta: "Discuss your stack",
  },
  {
    tag: "Retainer",
    name: "Scale",
    tagline: "A managed growth engine — outbound and optimisation.",
    description:
      "I run your outbound operation and continuously improve your RevOps setup. AI enrichment, sequencing, pipeline reviews, and automation expansion — everything compounds month over month.",
    includes: [
      "Signal-based targeting & AI enrichment via Clay",
      "LinkedIn outreach via HeyReach",
      "Email outreach via Apollo + Instantly",
      "Monthly pipeline & conversion reviews",
      "Automation expansion & reporting improvements",
    ],
    price: "From €3,000/mo",
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
            className="rounded-2xl p-8 flex flex-col gap-6 relative card-hover"
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

    </section>
  );
}
