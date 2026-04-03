import Link from "next/link";
import type { Metadata } from "next";
import NeuralCanvas from "@/components/ui/NeuralCanvas";

export const metadata: Metadata = {
  title: "Appical — Levi Bom",
  description: "How we helped Appical reset their HubSpot portal and build the commercial foundation for serious growth.",
};

const details = [
  { label: "Client", value: "Appical" },
  { label: "Industry", value: "SaaS · Employee onboarding" },
  { label: "Service", value: "Process + Build" },
  { label: "Result", value: "Full portal restructure, zero downtime, clear workflows and reporting" },
];

export default function AppicalCase() {
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
        style={{ background: "linear-gradient(135deg, #0d060f 0%, #080f1a 100%)" }}
      >
        <div className="absolute inset-0">
          <NeuralCanvas accentColor="#a78bfa" accentRgb="167,139,250" className="w-full h-full" />
        </div>
        {/* Fade to bottom so text is readable */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,6,10,0.9) 0%, transparent 60%)" }}
        />
        <div className="relative z-10">
          <p className="text-xs uppercase tracking-widest mb-3" style={{ color: "#a78bfa" }}>
            Process + Build · SaaS
          </p>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--foreground)" }}>
            A full reset that unlocked real growth
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Main content */}
        <div className="md:col-span-2 flex flex-col gap-8">

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The challenge</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Appical helps organisations onboard new employees — but internally, their own
              commercial operation had become impossible to manage. Multiple leadership changes
              had left a trail of inconsistent processes, each team member running their own
              version of how things should work inside HubSpot.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              The result: a CRM that couldn&apos;t be trusted for reporting, a sales process
              that varied by person, and no clear foundation to scale from. To grow, they
              first needed the courage to reset.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>What we did</h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              We started with a series of blueprint workshops — sitting down with the Appical
              team to map their commercial process in granular detail. Not what they thought
              the process was, but what was actually happening. That distinction matters.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              From that foundation, we rebuilt the entire HubSpot portal. New pipeline
              structure, new lifecycle logic, new reporting — all designed around the
              real workflow we&apos;d documented together. We worked in weekly sprints with
              Appical&apos;s team, iterating and improving as we went, with zero disruption
              to live sales activity throughout.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>The outcome</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Complete portal restructure aligned to the actual commercial process",
                "Leadership now has clear pipeline visibility and reliable reporting",
                "Workflows that the full team follows — consistently",
                "Zero downtime during the entire implementation",
                "A CRM built for the growth ambitions Appical actually has",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span style={{ color: "#a78bfa" }} className="mt-0.5 shrink-0">✓</span>
                  <span style={{ color: "var(--foreground)" }}>{item}</span>
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
              &ldquo;HIGHLY RECOMMEND the team to work with! We plan continued support to enhance our brand new CRM.&rdquo;
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>— Stijn Hovens, Team Lead Sales, Appical</p>
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
