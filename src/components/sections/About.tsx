import Image from "next/image";

const stats = [
  { value: "6", label: "Years in RevOps" },
  { value: "20+", label: "Clients helped" },
  { value: "2", label: "Industries: SaaS & Manufacturing" },
  { value: "€5M+", label: "Min. client revenue" },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            About
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-8"
            style={{ color: "var(--foreground)" }}
          >
            I make commercial operations work.
          </h2>
          <div className="flex flex-col gap-4 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I&apos;m Levi Bom, a RevOps and GTM specialist based in Amsterdam.
              For the past six years I&apos;ve been helping B2B companies — from
              fast-growing SaaS startups to manufacturing businesses — build
              commercial operations that actually support growth.
            </p>
            <p>
              My work sits at the intersection of strategy and execution. I
              don&apos;t just design systems — I build them, integrate them, and
              make sure teams actually use them. The result is a CRM that
              drives your business forward instead of slowing it down.
            </p>
            <p>
              I work with a small team of specialists — integrations, design,
              data enrichment — brought in depending on what a project needs.
              No bloated agency overhead, just the right people for the job.
            </p>
          </div>
        </div>

        {/* Right — photo + stats */}
        <div className="flex flex-col gap-4">
          {/* Headshot */}
          <div
            className="rounded-2xl overflow-hidden w-full aspect-[4/3] relative"
            style={{ border: "1px solid var(--border)" }}
          >
            <Image
              src="/profile.jpg"
              alt="Levi Bom"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--card)",
                  border: "1px solid var(--border)",
                }}
              >
                <p
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--accent)" }}
                >
                  {s.value}
                </p>
                <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
