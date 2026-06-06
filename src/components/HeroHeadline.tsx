"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function HeroHeadline() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Trigger entrance after a brief paint delay
    const t = setTimeout(() => el.classList.add("hero-entered"), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .hero-line {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-entered .hero-line-1 { opacity: 1; transform: none; transition-delay: 0.05s; }
        .hero-entered .hero-line-2 { opacity: 1; transform: none; transition-delay: 0.2s; }
        .hero-entered .hero-line-3 { opacity: 1; transform: none; transition-delay: 0.35s; }
        .hero-entered .hero-line-4 { opacity: 1; transform: none; transition-delay: 0.48s; }
        .hero-rule {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1);
        }
        .hero-entered .hero-rule { opacity: 1; transform: scaleX(1); transition-delay: 0s; }
      `}</style>

      <div ref={ref} className="flex-1 flex flex-col items-center justify-center text-center py-6">
        <div className="hero-rule w-16 h-px bg-yellow mb-5" />
        <h1 className="text-[clamp(2.4rem,6vw,5.5rem)] font-black text-ice leading-[1.04] tracking-tight max-w-4xl mb-4">
          <span className="hero-line hero-line-1 block">Marketing that</span>
          <span className="hero-line hero-line-2 block text-yellow">orbits your growth.</span>
        </h1>
        <p className="hero-line hero-line-3 text-base text-ice-muted max-w-lg leading-relaxed mb-7">
          A futuristic marketing agency blending AI, automation, and strategic execution into one connected orbit.
        </p>
        <div className="hero-line hero-line-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-7 py-3.5 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors"
          >
            Start a Project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
