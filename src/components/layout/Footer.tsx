"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="py-12 mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold mb-1">Levi Bom</p>
          <p className="text-sm" style={{ color: "var(--muted)" }}>
            RevOps & GTM Specialist · Amsterdam
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {[
            { href: "/#services", label: "Services" },
            { href: "/#work", label: "Work" },
            { href: "/#about", label: "About" },
            { href: "/contact", label: "Contact" },
            {
              href: "https://www.linkedin.com/in/levibom/",
              label: "LinkedIn",
              external: true,
            },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noopener noreferrer" : undefined}
              className="text-sm transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs" style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} Levi Bom
        </p>
      </div>
    </footer>
  );
}
