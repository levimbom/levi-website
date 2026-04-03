interface Props {
  accent: string;
  accentRgb: string;
  stages?: string[];
  pipelineLabel?: string;
  pipelineStages?: string[];
  objectLabel?: string;
}

const defaultStages = [
  "Lead",
  "Sales Prospect",
  "Marketing Qualified",
  "Sales Qualified",
  "Opportunity",
  "Landed Account",
  "Committed",
  "Churned",
];

const defaultPipeline = ["Intro", "Discovery", "Proposal", "Negotiation", "Closed Won", "Closed Lost"];

export default function BlueprintDiagram({
  accent,
  accentRgb,
  stages = defaultStages,
  pipelineLabel = "Deal Pipeline",
  pipelineStages = defaultPipeline,
  objectLabel = "Deal Object",
}: Props) {
  const funnelColor = `rgba(${accentRgb},`;

  return (
    <div
      className="rounded-2xl p-6 overflow-x-auto"
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        border: `1px solid rgba(${accentRgb},0.12)`,
      }}
    >
      <p className="text-xs uppercase tracking-widest mb-6" style={{ color: accent }}>
        Commercial Blueprint — Structure Overview
      </p>

      <div className="flex gap-8 items-start min-w-[640px]">

        {/* 1 — Lifecycle funnel */}
        <div className="flex flex-col gap-0 shrink-0 w-44">
          <p className="text-[10px] uppercase tracking-widest mb-2 text-center" style={{ color: "var(--muted)" }}>
            Lifecycle Stages
          </p>
          {stages.map((s, i) => {
            const w = 100 - i * (50 / stages.length);
            const alpha = i === stages.length - 1 ? 0.12 : 0.1 + (stages.length - i) * 0.06;
            return (
              <div
                key={s}
                className="mx-auto flex items-center justify-center text-[10px] font-semibold py-1.5 mb-0.5"
                style={{
                  width: `${w}%`,
                  backgroundColor: `rgba(${accentRgb},${Math.min(alpha, 0.55)})`,
                  color: i < 2 ? accent : `rgba(${accentRgb},0.8)`,
                  borderRadius: "3px",
                  letterSpacing: "0.03em",
                }}
              >
                {s}
              </div>
            );
          })}
        </div>

        {/* Arrow */}
        <div className="flex items-center self-center shrink-0 mt-4">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path d="M0 8 H26 M20 2 L28 8 L20 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
        </div>

        {/* 2 — Conversion flow */}
        <div className="flex flex-col gap-2 shrink-0 w-32 mt-4">
          <p className="text-[10px] uppercase tracking-widest mb-1 text-center" style={{ color: "var(--muted)" }}>
            Conversion
          </p>
          {["Inbound", "Outbound", "Referral"].map((src) => (
            <div
              key={src}
              className="text-[10px] text-center py-1.5 rounded"
              style={{
                border: `1px solid rgba(${accentRgb},0.3)`,
                color: `rgba(${accentRgb},0.7)`,
              }}
            >
              {src}
            </div>
          ))}
          <div className="flex justify-center mt-1">
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
              <path d="M8 0 V18 M2 12 L8 20 L14 12" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
            </svg>
          </div>
          <div
            className="text-[10px] text-center py-1.5 rounded font-semibold"
            style={{ backgroundColor: `rgba(${accentRgb},0.2)`, color: accent }}
          >
            HubSpot
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center self-center shrink-0 mt-4">
          <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
            <path d="M0 8 H26 M20 2 L28 8 L20 14" stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
          </svg>
        </div>

        {/* 3 — Pipeline */}
        <div className="flex flex-col gap-1 shrink-0 flex-1 mt-4">
          <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: "var(--muted)" }}>
            {pipelineLabel}
          </p>
          <div className="flex gap-1">
            {pipelineStages.map((stage, i) => {
              const isLast = i === pipelineStages.length - 1;
              const isWon = stage.toLowerCase().includes("won");
              const isLost = stage.toLowerCase().includes("lost");
              return (
                <div
                  key={stage}
                  className="flex-1 text-center text-[9px] font-semibold py-2 px-1 rounded leading-tight"
                  style={{
                    backgroundColor: isWon
                      ? `rgba(${accentRgb},0.35)`
                      : isLost
                      ? "rgba(255,80,80,0.15)"
                      : `rgba(${accentRgb},${0.08 + i * 0.03})`,
                    color: isWon ? accent : isLost ? "rgba(255,100,100,0.7)" : `rgba(${accentRgb},0.7)`,
                    border: isLast ? `1px solid rgba(${accentRgb},0.3)` : "none",
                  }}
                >
                  {stage}
                </div>
              );
            })}
          </div>

          {/* Object label */}
          <div className="mt-3 flex items-center gap-2">
            <div
              className="text-[10px] px-3 py-1.5 rounded font-semibold"
              style={{
                border: `1px solid rgba(${accentRgb},0.25)`,
                color: `rgba(${accentRgb},0.7)`,
              }}
            >
              {objectLabel}
            </div>
            <div
              className="text-[10px] px-3 py-1.5 rounded"
              style={{
                border: `1px solid rgba(255,255,255,0.08)`,
                color: "var(--muted)",
              }}
            >
              Contact Object
            </div>
            <div
              className="text-[10px] px-3 py-1.5 rounded"
              style={{
                border: `1px solid rgba(255,255,255,0.08)`,
                color: "var(--muted)",
              }}
            >
              Company Object
            </div>
          </div>
        </div>
      </div>

      <p className="text-[10px] mt-4" style={{ color: "rgba(255,255,255,0.15)" }}>
        Simplified for confidentiality — actual blueprint contains full property mapping, automation triggers, and data logic.
      </p>
    </div>
  );
}
