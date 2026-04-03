import Image from "next/image";

const stats = [
  { value: "6", label: "Years in RevOps" },
  { value: "20+", label: "Integrations delivered" },
  { value: "8.5", label: "Average NPS score" },
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
          <div className="flex flex-col gap-5 text-lg md:text-xl leading-relaxed" style={{ color: "var(--muted)" }}>
            <p>
              I turn messy commercial operations into engines that actually scale.{" "}
              <strong style={{ color: "var(--foreground)" }}>Clean data, tight processes, systems that grow with you</strong> — that&apos;s the work.
            </p>
            <p>
              Started in software sales (the trenches), learned GTM strategy at Growth Tribe, and landed in RevOps — where sales, marketing, and ops finally speak the same language. I&apos;ve been there ever since.
            </p>
            <p>
              Past clients include{" "}
              <strong style={{ color: "var(--foreground)" }}>Alibaba</strong>,{" "}
              <strong style={{ color: "var(--foreground)" }}>Dopper</strong>,{" "}
              <strong style={{ color: "var(--foreground)" }}>Younited</strong>,{" "}
              <strong style={{ color: "var(--foreground)" }}>Appical</strong>,{" "}
              <strong style={{ color: "var(--foreground)" }}>Blacksmith</strong>,{" "}
              and more across SaaS, manufacturing, and financial services.
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
          <div className="grid grid-cols-3 gap-4">
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
