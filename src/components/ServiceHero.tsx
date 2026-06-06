"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  badge: string;
  headline: string;
  subheadline: string;
}

export default function ServiceHero({ badge, headline, subheadline }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add("sh-entered"), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .sh-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .sh-rule {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: opacity 0.45s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .sh-entered .sh-rule  { opacity: 1; transform: scaleX(1); transition-delay: 0s; }
        .sh-entered .sh-badge { opacity: 1; transform: none; transition-delay: 0.06s; }
        .sh-entered .sh-head  { opacity: 1; transform: none; transition-delay: 0.18s; }
        .sh-entered .sh-sub   { opacity: 1; transform: none; transition-delay: 0.30s; }
        .sh-entered .sh-cta   { opacity: 1; transform: none; transition-delay: 0.42s; }
      `}</style>

      <div ref={ref}>
        <span className="sh-item sh-badge text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">
          {badge}
        </span>
        <div className="sh-rule w-12 h-0.5 bg-yellow mb-7" />
        <h1 className="sh-item sh-head text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-7 max-w-3xl">
          {headline}
        </h1>
        <p className="sh-item sh-sub text-lg text-ice-muted leading-relaxed mb-10 max-w-xl">
          {subheadline}
        </p>
        <div className="sh-item sh-cta">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-all text-sm"
          >
            Schedule a Free Strategy Call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </>
  );
}
