import Link from "next/link";
import type { Metadata } from "next";
import NeuralCanvas from "@/components/ui/NeuralCanvas";
import CaseMetrics from "@/components/ui/CaseMetrics";
import BlueprintDiagram from "@/components/ui/BlueprintDiagram";

const ACCENT = "#4ade80";
const RGB = "74,222,128";

const metrics = [
  { value: "8", label: "Lifecycle stages defined" },
  { value: "3", label: "Pipelines built" },
  { value: "14", label: "Automated workflows" },
  { value: "100%", label: "Team adoption in 2 weeks" },
];

export const metadata: Metadata = {
  title: "Younited — Levi Bom",
  description: "How we migrated Younited to HubSpot and built a scalable sales engine from the ground up.",
};

const details = [
  { label: "Client", value: "Younited" },
  { label: "Industry", value: "Financial Services · SaaS" },
  { label: "Service", value: "Build" },
  { label: "Result", value: "Aligned sales team, real-time reporting, full marketing automation" },
];

export default function YounitedCase() {
  return (
    <article className="pt-36 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      {/* Back */}
      <Link
        href="/work"
        className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-70"
        style={{ color: "var(--muted)" }}
      >
        ← All work
      </Link>

      {/* Hero block */}
      <div
        className="rounded-3xl h-80 mb-12 relative overflow-hidden flex items-end p-10"
        style={{ background: "linear-gradient(135deg, #060f06 0%, #060d1a 100%)" }}
      >
        <div className="absolute inset-0">
          <NeuralCanvas accentColor="#4ade80" accentRgb="74,222,128" className="w-full h-full" />
        </div>
        {/* Fade to bottom so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(6,9,6,0.9) 0%, transparent 60%)" }}
        />
        {/* Large watermark name */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[clamp(80px,15vw,160px)] font-black tracking-tighter leading-none whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, rgba(74,222,128,0.18) 0%, rgba(74,222,128,0.04) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              textShadow: "none",
            }}
          >
            Younited
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#4ade80" }}>
            Build · Financial Services
          </p>
          <p className="text-2xl font-black tracking-tight mb-1" style={{ color: "#4ade80", textShadow: "0 0 40px rgba(74,222,128,0.5)" }}>
            Younited
          </p>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            From limited CRM to a scalable sales engine
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2 flex flex-col gap-8">

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The challenge</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Younited had a CRM in place, but it was holding them back. As the platform grew —
              connecting freelancers, clients, and intermediaries across the Netherlands —
              their commercial tooling couldn&apos;t keep up. Automation was minimal, marketing
              capabilities were too limited, and reporting gave leadership almost no visibility
              into what was actually happening in the pipeline.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              They needed a system that could scale with their ambitions — not one they&apos;d
              outgrow again in two years.
            </p>
          </section>

          {/* Metrics */}
          <CaseMetrics metrics={metrics} accent={ACCENT} accentRgb={RGB} />

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>What we did</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              We started by mapping Younited&apos;s commercial process end-to-end — understanding
              how leads came in, how sales reps qualified them, and what happened after a deal
              closed. From that blueprint, we designed the right HubSpot setup and migrated
              everything across without disrupting an active sales pipeline.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              The new setup standardised how every sales rep worked, with a shared methodology
              baked into the CRM rather than relying on individual habits. We built lead
              qualification logic that stopped unqualified prospects from eating up the team&apos;s
              time, and layered in marketing automation that finally gave the team real
              campaign data.
            </p>
          </section>

          {/* Blueprint */}
          <div>
            <h2 className="text-lg font-semibold mb-4" style={{ color: "var(--foreground)" }}>Blueprint structure</h2>
            <BlueprintDiagram
              accent={ACCENT}
              accentRgb={RGB}
              stages={["Lead","Sales Prospect","Marketing Qualified","Sales Qualified","Opportunity","Landed Account","Committed","Churned"]}
              pipelineLabel="New Business Pipeline"
              pipelineStages={["Intro","Discovery","Proposal","Negotiation","Closed Won","Closed Lost"]}
              objectLabel="Deal Object"
            />
          </div>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The outcome</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Every sales rep works from the same methodology — no more individual CRM interpretations",
                "Management gets real-time performance data for faster, sharper decisions",
                "Lead qualification filters out wasted effort on buyers who aren&apos;t ready",
                "Marketing automation running with full ROI tracking across campaigns",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span style={{ color: "#4ade80" }} className="mt-0.5 shrink-0">✓</span>
                  <span style={{ color: "var(--foreground)" }} dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
          </section>

          {/* Quote */}
          <blockquote
            className="rounded-2xl p-8"
            style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
          >
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--foreground)" }}>
              &ldquo;Worked together with Levi on CRM setup. They demonstrated expertise, collaborative thinking, and professional knowledge!&rdquo;
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>— Younited team</p>
          </blockquote>
        </div>

        {/* Sidebar */}
        <aside className="flex flex-col gap-4">
          {details.map((d) => (
            <div
              key={d.label}
              className="rounded-2xl p-5"
              style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>
                {d.label}
              </p>
              <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                {d.value}
              </p>
            </div>
          ))}

          <Link
            href="/contact"
            className="mt-4 inline-flex items-center justify-center px-6 py-3.5 rounded-full text-sm font-medium transition-opacity hover:opacity-80 text-center"
            style={{ backgroundColor: "var(--accent)", color: "#080808" }}
          >
            Work with me
          </Link>
        </aside>
      </div>
    </article>
  );
}
