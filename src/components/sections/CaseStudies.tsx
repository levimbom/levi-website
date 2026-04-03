import Link from "next/link";
import NeuralCanvas from "@/components/ui/NeuralCanvas";

export const cases = [
  {
    slug: "younited",
    client: "Younited",
    industry: "SaaS · Freelance platform",
    service: "Build",
    headline: "From limited CRM to a scalable sales engine",
    summary:
      "Younited was growing fast but their CRM couldn't keep up — no automation, weak reporting, and opportunity management that didn't scale. We migrated them to HubSpot and rebuilt the commercial process from the ground up.",
    result: "Sales team aligned on one methodology, real-time management reporting, and marketing automation with full ROI tracking.",
    quote: "They demonstrated expertise, collaborative thinking, and professional knowledge.",
    gradient: "linear-gradient(135deg, #060f06 0%, #060d1a 100%)",
    accent: "#4ade80",
    accentRgb: "74,222,128",
  },
  {
    slug: "appical",
    client: "Appical",
    industry: "SaaS · Employee onboarding",
    service: "Process + Build",
    headline: "A full reset that unlocked real growth",
    summary:
      "Years of leadership changes had left Appical's HubSpot in chaos — inconsistent processes, no structure, impossible to scale. We ran blueprint workshops to map the commercial reality, then rebuilt the entire portal around it.",
    result: "Complete portal restructure, zero downtime during transition, and clear workflows that finally give leadership visibility into the pipeline.",
    quote: "Sometimes you must dare to reset to grow. Appical now has the grip needed for tomorrow's ambitions.",
    gradient: "linear-gradient(135deg, #0d060f 0%, #080f1a 100%)",
    accent: "#a78bfa",
    accentRgb: "167,139,250",
  },
  {
    slug: "placeholder",
    client: "Case study coming soon",
    industry: "Manufacturing",
    service: "Build + Connect",
    headline: "Full ERP–HubSpot integration for a manufacturing scale-up",
    summary: "More case studies on the way.",
    result: "",
    quote: "",
    gradient: "linear-gradient(135deg, #111 0%, #1a1a1a 100%)",
    accent: "var(--muted)",
    accentRgb: "",
  },
];

export default function CaseStudies() {
  const visibleCases = cases.filter((c) => c.slug !== "placeholder").concat(cases.filter((c) => c.slug === "placeholder"));

  return (
    <section
      id="work"
      className="py-24 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "var(--accent)" }}>
              Work
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight" style={{ color: "var(--foreground)" }}>
              Selected projects
            </h2>
          </div>
          <Link href="/work" className="text-sm font-medium transition-opacity hover:opacity-70 shrink-0" style={{ color: "var(--muted)" }}>
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {visibleCases.map((c) => (
            <div
              key={c.slug}
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{ border: "1px solid var(--border)" }}
            >
              {/* Visual block */}
              <div
                className="h-36 relative overflow-hidden flex items-end p-6"
                style={{ background: c.gradient }}
              >
                {c.accentRgb && (
                  <div className="absolute inset-0">
                    <NeuralCanvas accentColor={c.accent} accentRgb={c.accentRgb} />
                  </div>
                )}
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 70%)" }}
                />
                <span
                  className="relative z-10 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", color: c.accent }}
                >
                  {c.service}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-3 flex-1" style={{ backgroundColor: "var(--card)" }}>
                <div>
                  <p className="text-xs mb-1" style={{ color: "var(--muted)" }}>{c.industry}</p>
                  <h3 className="text-base font-semibold leading-snug" style={{ color: "var(--foreground)" }}>
                    {c.headline}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {c.summary}
                </p>
                {c.result && (
                  <p className="text-xs leading-relaxed" style={{ color: c.accent }}>
                    ✓ {c.result}
                  </p>
                )}
                {c.slug !== "placeholder" && (
                  <Link
                    href={`/work/${c.slug}`}
                    className="mt-auto text-sm font-medium transition-opacity hover:opacity-70"
                    style={{ color: "var(--foreground)" }}
                  >
                    Read case study →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
