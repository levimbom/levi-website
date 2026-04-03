import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work — Levi Bom",
  description: "Selected case studies — RevOps implementations, HubSpot builds, and GTM systems.",
};

export default function WorkPage() {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <p
        className="text-xs uppercase tracking-widest mb-6"
        style={{ color: "var(--accent)" }}
      >
        Work
      </p>
      <h1
        className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
        style={{ color: "var(--foreground)" }}
      >
        Selected projects
      </h1>
      <p className="text-lg leading-relaxed max-w-xl mb-16" style={{ color: "var(--muted)" }}>
        Case studies coming soon. In the meantime, get in touch to hear about specific projects relevant to your situation.
      </p>

      {/* Placeholder grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="rounded-2xl p-8 min-h-[200px] flex items-end"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Case study coming soon
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
