interface Metric {
  value: string;
  label: string;
}

interface Props {
  metrics: Metric[];
  accent: string;
  accentRgb: string;
}

export default function CaseMetrics({ metrics, accent, accentRgb }: Props) {
  return (
    <div
      className="rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6"
      style={{
        backgroundColor: `rgba(${accentRgb},0.05)`,
        border: `1px solid rgba(${accentRgb},0.15)`,
      }}
    >
      {metrics.map((m) => (
        <div key={m.label} className="flex flex-col gap-1">
          <p
            className="text-3xl font-black tracking-tight"
            style={{ color: accent, textShadow: `0 0 30px rgba(${accentRgb},0.5)` }}
          >
            {m.value}
          </p>
          <p className="text-xs leading-snug" style={{ color: "var(--muted)" }}>
            {m.label}
          </p>
        </div>
      ))}
    </div>
  );
}
