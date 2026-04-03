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
  "HelloDialog",
  "Hely",
  "Mailcamp",
  "Younited",
  "Appical",
];

// Triplicate for an endless feel
const allCompanies = [...companies, ...companies, ...companies];

export default function LogoMarquee() {
  return (
    <div className="py-16" style={{ borderTop: "1px solid var(--border)" }}>
      <p
        className="text-xs uppercase tracking-widest mb-8 text-center"
        style={{ color: "var(--muted)" }}
      >
        Trusted by
      </p>

      {/* Row 1 — left to right */}
      <div
        className="relative overflow-hidden mb-4"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-14 w-max"
          style={{ animation: "marquee-left 40s linear infinite" }}
        >
          {allCompanies.map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.03em" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — right to left, offset so they don't sync */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <div
          className="flex gap-14 w-max"
          style={{ animation: "marquee-right 35s linear infinite" }}
        >
          {[...allCompanies].reverse().map((name, i) => (
            <span
              key={i}
              className="text-sm font-medium whitespace-nowrap"
              style={{ color: "rgba(255,255,255,0.2)", letterSpacing: "0.03em" }}
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}
