import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div
          className="rounded-3xl p-12 md:p-20 text-center"
          style={{
            backgroundColor: "var(--accent-dim)",
            border: "1px solid rgba(200,255,0,0.15)",
          }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-6"
            style={{ color: "var(--accent)" }}
          >
            Ready to scale?
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6 max-w-2xl mx-auto"
            style={{ color: "var(--foreground)" }}
          >
            Let&apos;s build your commercial engine.
          </h2>
          <p
            className="text-lg mb-10 max-w-md mx-auto"
            style={{ color: "var(--muted)" }}
          >
            Start with a Process session — 2–3 focused sessions to design the
            exact commercial engine your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "var(--accent)", color: "#080808" }}
            >
              Book a Process session
            </Link>
            <Link
              href="https://www.linkedin.com/in/levibom/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-sm font-medium transition-colors"
              style={{
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              Connect on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
