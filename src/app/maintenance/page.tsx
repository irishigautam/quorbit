import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Under Maintenance — Quorbit",
  description: "We're making some improvements. We'll be back shortly.",
};

export default function MaintenancePage() {
  return (
    <div
      className="min-h-screen bg-midnight flex flex-col items-center justify-center px-6 text-center"
      style={{
        backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.06) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }}
    >
      {/* Logo */}
      <Link href="/maintenance" className="mb-12 inline-block">
        <Image
          src="/light-logo.png"
          alt="Quorbit"
          width={140}
          height={50}
          className="h-12 w-auto"
          priority
        />
      </Link>

      {/* Yellow rule */}
      <div className="w-12 h-0.5 bg-yellow mb-8" />

      {/* Badge */}
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">
        Maintenance Mode
      </span>

      {/* Headline */}
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-6 max-w-2xl">
        We&apos;re fine-tuning<br />
        <span className="text-yellow">our orbit.</span>
      </h1>

      {/* Body */}
      <p className="text-ice-muted text-lg leading-relaxed max-w-md mb-10">
        Our site is currently undergoing scheduled maintenance. We&apos;ll be back shortly — better than ever.
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-10">
        <div className="w-16 h-px bg-midnight-muted" />
        <span className="text-xs font-bold uppercase tracking-widest text-ice-muted">In the meantime</span>
        <div className="w-16 h-px bg-midnight-muted" />
      </div>

      {/* Email CTA */}
      <a
        href="mailto:hello@quorbit.agency"
        className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors rounded-lg"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        hello@quorbit.agency
      </a>

      {/* Footer note */}
      <p className="text-xs text-ice-muted mt-10 tracking-wide">
        © {new Date().getFullYear()} Quorbit · Business Simplified™
      </p>
    </div>
  );
}
