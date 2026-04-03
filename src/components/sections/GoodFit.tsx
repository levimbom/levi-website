const fits = [
  {
    label: "You do over €5M in revenue",
    description:
      "You have a commercial operation that's worth optimising. Smaller than this and the ROI of a full RevOps build usually doesn't stack up yet.",
  },
  {
    label: "You're in SaaS, manufacturing, or financial services",
    description:
      "These are the verticals I know deeply — the sales cycles, the data models, the integrations. I work best where I've been before.",
  },
  {
    label: "You're scaling — not just maintaining",
    description:
      "You've recently raised, you're expanding into new markets, or you're growing your commercial team. Something is changing, and your systems need to keep up.",
  },
  {
    label: "You use HubSpot, or you're ready to",
    description:
      "All my work is built around HubSpot as the core system. If you're on a different CRM, we can talk — but HubSpot is where I deliver the most value.",
  },
  {
    label: "You want a system, not a quick fix",
    description:
      "You're looking to build something that lasts — not patch a broken process with more spreadsheets. You want clean data, reliable reporting, and automation that actually works.",
  },
  {
    label: "You value expertise over hours",
    description:
      "You're not looking for the cheapest option. You want someone who has done this before, knows the pitfalls, and will tell you what you actually need.",
  },
];

export default function GoodFit() {
  return (
    <section
      className="py-24 px-6 md:px-12"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p
            className="text-xs uppercase tracking-widest mb-4"
            style={{ color: "var(--accent)" }}
          >
            Good fit?
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ color: "var(--foreground)" }}
          >
            We work well together if...
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            I work with a focused set of clients. Here&apos;s who gets the most out of working with me.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {fits.map((f) => (
            <div
              key={f.label}
              className="rounded-2xl p-6 flex flex-col gap-3 card-hover"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <span
                  className="mt-0.5 shrink-0 text-base"
                  style={{ color: "var(--accent)" }}
                >
                  ✓
                </span>
                <p
                  className="text-sm font-semibold leading-snug"
                  style={{ color: "var(--foreground)" }}
                >
                  {f.label}
                </p>
              </div>
              <p className="text-sm leading-relaxed pl-6" style={{ color: "var(--muted)" }}>
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
