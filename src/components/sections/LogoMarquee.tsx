"use client";

const companies = [
  "Alibaba",
  "Dopper",
  "Growth Tribe",
  "Blacksmith",
  "RVDB",
  "Bouwimpex",
  "Workrate",
  "GetShaman",
  "Hyperbolic",
  "Conamore",
  "Werktijden.nl",
  "Opticon",
  "TJIP",
  "Fundaments",
  "Holistic Movement",
  "DSe Natuursteen",
];

// Duplicate for seamless loop
const allCompanies = [...companies, ...companies];

export default function LogoMarquee() {
  return (
    <div className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <p
        className="text-xs uppercase tracking-widest mb-8 text-center"
        style={{ color: "var(--muted)" }}
      >
        Trusted by
      </p>

      {/* Marquee wrapper — clips overflow and fades edges */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-12 w-max"
          style={{
            animation: "marquee 30s linear infinite",
          }}
        >
          {allCompanies.map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium whitespace-nowrap"
              style={{
                color: "rgba(255,255,255,0.22)",
                letterSpacing: "0.03em",
              }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
