"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { label: "Performance Marketing", href: "/services/performance-marketing" },
  { label: "E-Commerce Management", href: "/services/ecommerce" },
  { label: "All-in-One Digital Marketing", href: "/services/all-in-one" },
  { label: "Website & Automation", href: "/services/website-automation" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight text-gray-950">
            Quorbit
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <button
              className="text-sm font-medium text-gray-600 hover:text-gray-950 flex items-center gap-1 transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-lg py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-950 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link href="/contact" className="text-sm font-medium text-gray-600 hover:text-gray-950 transition-colors">
            Contact
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 bg-gray-950 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Schedule a Call
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-gray-600 hover:text-gray-950"
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
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-1">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Services</p>
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="block py-2 text-sm text-gray-700 hover:text-gray-950"
              onClick={() => setOpen(false)}
            >
              {s.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-3">
            <Link
              href="/contact"
              className="block w-full text-center bg-gray-950 text-white text-sm font-medium px-4 py-2.5 rounded-lg"
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
