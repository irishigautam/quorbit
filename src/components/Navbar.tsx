"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const services = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "E-Commerce Management", href: "/services/ecommerce" },
  { label: "All-in-One Digital Marketing", href: "/services/all-in-one" },
  { label: "Website & Automation", href: "/services/website-automation" },
];

const packages = [
  { label: "Launch", href: "/packages/launch" },
  { label: "Ascent", href: "/packages/ascent" },
  { label: "Orbit", href: "/packages/orbit" },
  { label: "Compare All Packages", href: "/packages" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-midnight">
      <nav className="max-w-7xl mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center h-16">

        {/* Logo — left */}
        <Link href="/" className="flex items-center">
          <Image src="/light-logo.png" alt="Quorbit" width={140} height={40} className="h-10 w-auto" priority />
        </Link>

        {/* Desktop nav pill — center */}
        <div className="hidden md:flex items-center bg-midnight-light rounded-full px-2 py-1.5 gap-0.5">

          {/* Services dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-medium text-ice px-4 py-1.5 rounded-full hover:bg-midnight-muted transition-colors">
              Services
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="w-64 bg-midnight-light border border-midnight-muted rounded-xl shadow-2xl py-2">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-ice-muted hover:text-ice hover:bg-midnight-muted transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Packages dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1.5 text-sm font-medium text-ice px-4 py-1.5 rounded-full hover:bg-midnight-muted transition-colors">
              Packages
              <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="w-56 bg-midnight-light border border-midnight-muted rounded-xl shadow-2xl py-2">
                {packages.map((p, i) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className={`block px-4 py-2.5 text-sm hover:bg-midnight-muted transition-colors ${
                      i === packages.length - 1
                        ? "text-yellow hover:text-yellow border-t border-midnight-muted mt-1 pt-3"
                        : "text-ice-muted hover:text-ice"
                    }`}
                  >
                    {p.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="text-sm font-medium text-ice px-4 py-1.5 rounded-full hover:bg-midnight-muted transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center justify-end">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center gap-1.5 bg-yellow hover:bg-yellow-dark text-midnight text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-widest transition-colors"
          >
            Schedule a Call
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-ice-muted hover:text-ice"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-midnight-muted bg-midnight-light px-6 py-4 space-y-1">
          <p className="text-xs font-semibold text-ice-muted uppercase tracking-wider mb-2">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block py-2 text-sm text-ice-muted hover:text-ice"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-midnight-muted mt-3">
            <p className="text-xs font-semibold text-ice-muted uppercase tracking-wider mb-2">Packages</p>
            {packages.map((p, i) => (
              <Link
                key={p.href}
                href={p.href}
                className={`block py-2 text-sm hover:text-ice ${
                  i === packages.length - 1 ? "text-yellow" : "text-ice-muted"
                }`}
                onClick={() => setOpen(false)}
              >
                {p.label}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-midnight-muted mt-3">
            <Link
              href="/contact"
              className="block w-full text-center bg-yellow hover:bg-yellow-dark text-midnight text-sm font-bold px-4 py-2.5 rounded-full uppercase tracking-widest transition-colors"
              onClick={() => setOpen(false)}
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
