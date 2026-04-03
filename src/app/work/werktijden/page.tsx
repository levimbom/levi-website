import Link from "next/link";
import type { Metadata } from "next";
import NeuralCanvas from "@/components/ui/NeuralCanvas";

export const metadata: Metadata = {
  title: "Werktijden.nl — Levi Bom",
  description:
    "How we mapped Werktijden.nl's full customer journey, rebuilt it in HubSpot, integrated the backend, and drove team adoption.",
};

const details = [
  { label: "Client", value: "Werktijden.nl" },
  { label: "Industry", value: "SaaS · Workforce management" },
  { label: "Service", value: "Process + Build + Adopt" },
  { label: "Team size", value: "SMB, founder-led sales" },
  { label: "Result", value: "Full journey mapped, HubSpot live, backend integrated, team adopted" },
];

const outcomes = [
  "Complete customer journey mapped end-to-end — from first trial signup to expansion",
  "HubSpot implemented around the actual commercial process, not a generic template",
  "Backend integration live — product data flowing into the CRM automatically",
  "Sales and CS teams trained and using the system consistently from day one",
  "Workflows that reduced manual admin and gave the founder real pipeline visibility",
];

export default function WerktijdenCase() {
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
        style={{ background: "linear-gradient(135deg, #0f0a02 0%, #1a100a 100%)" }}
      >
        <div className="absolute inset-0">
          <NeuralCanvas accentColor="#fb923c" accentRgb="251,146,60" className="w-full h-full" />
        </div>
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(10,7,2,0.92) 0%, transparent 60%)" }}
        />
        {/* Large watermark name */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="text-[clamp(60px,11vw,130px)] font-black tracking-tighter leading-none whitespace-nowrap"
            style={{
              background: "linear-gradient(135deg, rgba(251,146,60,0.18) 0%, rgba(251,146,60,0.04) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Werktijden.nl
          </span>
        </div>

        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest mb-2" style={{ color: "#fb923c" }}>
            Process + Build + Adopt · SaaS
          </p>
          <p className="text-2xl font-black tracking-tight mb-1" style={{ color: "#fb923c", textShadow: "0 0 40px rgba(251,146,60,0.5)" }}>
            Werktijden.nl
          </p>
          <h1 className="text-3xl md:text-4xl font-bold max-w-2xl" style={{ color: "var(--foreground)" }}>
            From scattered commercial process to a CRM the team actually uses
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2 flex flex-col gap-10">

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The client</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Werktijden.nl is a Dutch workforce management platform used by over 6,500 businesses
              to handle staff scheduling, time tracking, and leave management. Their customers
              span hospitality, retail, manufacturing, and healthcare — typically SMBs who need
              something that works without complexity.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              It&apos;s a product-led business with a strong free trial model — which means
              commercial success depends on converting trial users efficiently and expanding
              accounts over time. Getting that motion right requires a clear process and
              a CRM that supports it.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The challenge</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Werktijden.nl was scaling well on the product side, but the commercial operation
              hadn&apos;t kept up. There was no clear picture of how a new lead moved through
              the funnel, what signals mattered, or where deals were stalling. The team
              was working hard but without a shared playbook — and without reliable data
              to learn from.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              On top of that, their backend system was completely disconnected from commercial
              activity. Product usage data that could inform sales conversations existed
              nowhere in the CRM.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>Phase 1 — Process</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              We started by mapping the complete customer journey from scratch — every
              touchpoint from initial trial signup through onboarding, sales conversations,
              conversion, and eventual expansion. This wasn&apos;t a generic framework;
              it was built around how Werktijden.nl&apos;s customers actually behave and
              what the team was already doing well.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              The output was a clear commercial blueprint: lifecycle stages defined,
              qualification logic agreed, handover points between marketing, sales,
              and customer success mapped out precisely.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>Phase 2 — Build</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              With the blueprint in hand, we built the system inside HubSpot. Pipelines
              were structured around the real commercial process — not copied from a
              HubSpot template. Properties, lifecycle stages, and automation were all
              configured to mirror the journey we&apos;d mapped.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              We then connected HubSpot to Werktijden.nl&apos;s backend, so that product
              usage data — who was actively using the platform, what features they&apos;d
              enabled, how engaged they were — fed directly into the CRM. Sales conversations
              could now start from signal, not guesswork.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>Phase 3 — Adopt</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Building the system is only half the job. We ran structured training sessions
              with the team, making sure everyone understood not just how to use HubSpot,
              but why the process was designed the way it was. That &ldquo;why&rdquo; is
              what drives consistent adoption.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Documentation was created for the key workflows, and we stayed close during
              the first weeks of live usage to catch any friction and fix it fast.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The outcome</h2>
            <ul className="flex flex-col gap-2">
              {outcomes.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span style={{ color: "#fb923c" }} className="mt-0.5 shrink-0">✓</span>
                  <span style={{ color: "var(--foreground)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Quote */}
          <blockquote
            className="rounded-2xl p-8"
            style={{ backgroundColor: "var(--card)", border: "1px solid rgba(251,146,60,0.15)" }}
          >
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--foreground)" }}>
              &ldquo;Levi is a real asset when it comes to streamlining commercial processes
              and realizing meaningful improvements. He delivered actionable insights and
              practical implementation that significantly improved our workflows. His
              combination of strategic vision and practical execution makes him a strong
              addition to any team.&rdquo;
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>— Founder, Werktijden.nl</p>
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
