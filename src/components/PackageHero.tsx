"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface Props {
  badge: string;
  headline: string;
  subheadline: string;
  price: string;
  period?: string;
}

export default function PackageHero({ badge, headline, subheadline, price, period = "/month" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => ref.current?.classList.add("ph-entered"), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <style>{`
        .ph-item {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.65s cubic-bezier(0.16,1,0.3,1), transform 0.65s cubic-bezier(0.16,1,0.3,1);
        }
        .ph-rule {
          opacity: 0;
          transform: scaleX(0);
          transform-origin: left center;
          transition: opacity 0.45s ease, transform 0.55s cubic-bezier(0.16,1,0.3,1);
        }
        .ph-entered .ph-rule  { opacity: 1; transform: scaleX(1); transition-delay: 0s; }
        .ph-entered .ph-badge { opacity: 1; transform: none; transition-delay: 0.06s; }
        .ph-entered .ph-head  { opacity: 1; transform: none; transition-delay: 0.18s; }
        .ph-entered .ph-sub   { opacity: 1; transform: none; transition-delay: 0.30s; }
        .ph-entered .ph-price { opacity: 1; transform: none; transition-delay: 0.40s; }
        .ph-entered .ph-cta   { opacity: 1; transform: none; transition-delay: 0.52s; }
      `}</style>

      <div ref={ref}>
        <span className="ph-item ph-badge text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">
          {badge}
        </span>
        <div className="ph-rule w-12 h-0.5 bg-yellow mb-7" />
        <h1 className="ph-item ph-head text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-7 max-w-3xl">
          {headline}
        </h1>
        <p className="ph-item ph-sub text-lg text-ice-muted leading-relaxed mb-8 max-w-xl">
          {subheadline}
        </p>
        <div className="ph-item ph-price flex items-baseline gap-2 mb-10">
          <span className="text-3xl font-black text-yellow tabular-nums">{price}</span>
          <span className="text-sm text-ice-muted">{period}</span>
        </div>
        <div className="ph-item ph-cta">
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
