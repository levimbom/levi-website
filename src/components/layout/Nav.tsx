"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{ borderBottom: "1px solid var(--border)" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      role="banner"
    >
      <div
        style={{ backgroundColor: "rgba(8,8,8,0.85)" }}
        className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-base font-semibold tracking-tight"
          style={{ color: "var(--foreground)" }}
        >
          Levi Bom
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
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

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-full transition-opacity hover:opacity-80"
            style={{ backgroundColor: "var(--accent)", color: "#080808" }}
          >
            Let&apos;s talk
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            style={{ backgroundColor: "var(--foreground)" }}
            className={`block h-px w-6 transition-transform ${open ? "rotate-45 translate-y-2.5" : ""}`}
          />
          <span
            style={{ backgroundColor: "var(--foreground)" }}
            className={`block h-px w-6 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            style={{ backgroundColor: "var(--foreground)" }}
            className={`block h-px w-6 transition-transform ${open ? "-rotate-45 -translate-y-2.5" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            backgroundColor: "var(--background)",
            borderBottom: "1px solid var(--border)",
          }}
          className="md:hidden px-6 py-6 flex flex-col gap-6"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-lg"
              style={{ color: "var(--foreground)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-medium px-4 py-2 rounded-full text-center"
            style={{ backgroundColor: "var(--accent)", color: "#080808" }}
            onClick={() => setOpen(false)}
          >
            Let&apos;s talk
          </Link>
        </div>
      )}
    </header>
  );
}
