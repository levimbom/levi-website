import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Levi Bom",
  description: "Book a Blueprint session or get in touch to discuss your RevOps challenge.",
};

export default function ContactPage() {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="max-w-2xl">
        <p
          className="text-xs uppercase tracking-widest mb-6"
          style={{ color: "var(--accent)" }}
        >
          Contact
        </p>
        <h1
          className="text-5xl md:text-6xl font-bold tracking-tight mb-6"
          style={{ color: "var(--foreground)" }}
        >
          Let&apos;s talk.
        </h1>
        <p className="text-lg leading-relaxed mb-12" style={{ color: "var(--muted)" }}>
          Tell me about your situation — where you are, where you want to be,
          and what&apos;s getting in the way. I&apos;ll come back to you within one business day.
        </p>

        {/* Contact options */}
        <div className="flex flex-col gap-4 mb-12">
          <a
            href="mailto:levi@levibom.com"
            className="flex items-center justify-between rounded-2xl px-8 py-6 transition-colors group"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                Email
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                levi@levibom.com
              </p>
            </div>
            <span style={{ color: "var(--accent)" }}>→</span>
          </a>

          <Link
            href="https://www.linkedin.com/in/levibom/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-2xl px-8 py-6 transition-colors"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--foreground)" }}>
                LinkedIn
              </p>
              <p className="text-sm" style={{ color: "var(--muted)" }}>
                linkedin.com/in/levibom
              </p>
            </div>
            <span style={{ color: "var(--accent)" }}>→</span>
          </Link>
        </div>

        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Based in Amsterdam · Working with clients across Europe & beyond
        </p>
      </div>
    </section>
  );
}
