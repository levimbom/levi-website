import Link from "next/link";

// Placeholder case studies — will be replaced with Sanity content
const placeholders = [
  {
    client: "SaaS Scale-up",
    result: "3× pipeline visibility, 40% reduction in manual CRM work",
    service: "Build",
    industry: "SaaS",
  },
  {
    client: "Manufacturing Company",
    result: "Full ERP–HubSpot integration, reliable revenue forecasting",
    service: "Build + Connect",
    industry: "Manufacturing",
  },
  {
    client: "Post-Series A Startup",
    result: "Outbound system generating 30+ qualified meetings/month",
    service: "Scale",
    industry: "SaaS",
  },
];

export default function CaseStudies() {
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
            <p
              className="text-xs uppercase tracking-widest mb-4"
              style={{ color: "var(--accent)" }}
            >
              Work
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Selected projects
            </h2>
          </div>
          <Link
            href="/work"
            className="text-sm font-medium transition-opacity hover:opacity-70 shrink-0"
            style={{ color: "var(--muted)" }}
          >
            View all →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {placeholders.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 flex flex-col justify-between gap-8 min-h-[260px]"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "var(--muted)",
                    }}
                  >
                    {c.service}
                  </span>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.06)",
                      color: "var(--muted)",
                    }}
                  >
                    {c.industry}
                  </span>
                </div>
                <p
                  className="text-lg font-semibold leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  &ldquo;{c.result}&rdquo;
                </p>
              </div>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                {c.client}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
