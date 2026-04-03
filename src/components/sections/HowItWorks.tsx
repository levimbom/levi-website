const steps = [
  {
    number: "01",
    title: "Diagnose",
    description:
      "We start with a Blueprint session — mapping your current commercial process, identifying gaps, and designing the exact system your business needs.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I implement the system inside HubSpot: pipelines, automation, dashboards, integrations. Clean, scalable, and built around how your team actually works.",
  },
  {
    number: "03",
    title: "Scale",
    description:
      "We run ongoing optimization — improving conversion, expanding automation, and layering in AI-powered outbound as you grow into new markets or teams.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Process
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            How it works
          </h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col gap-4">
              <span
                className="text-5xl font-bold"
                style={{ color: "var(--accent)", opacity: 0.4 }}
              >
                {step.number}
              </span>
              <h3
                className="text-xl font-semibold"
                style={{ color: "var(--foreground)" }}
              >
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
