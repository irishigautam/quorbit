"use client";

import { useEffect, useRef, useState } from "react";

const results = [
  {
    quote: "CPL dropped from $340 to $180 in 60 days. Lead-to-close rate improved from 8% to 14%.",
    label: "B2B SaaS — Performance Marketing",
  },
  {
    quote: "Organic traffic up 140%. Email revenue tripled via automated flow rebuild. Paid CAC down 31%.",
    label: "B2C Lifestyle Brand — All-in-One",
  },
  {
    quote: "Monthly store revenue scaled from $28K to $94K in 5 months with rebuilt Shopping and Meta campaigns.",
    label: "Home Goods — E-Commerce",
  },
];

/* ── SVG chart constants ── */
const VW = 600, VH = 308;
const XL = 60, XR = 590, YT = 34, YB = 262;
const PW = XR - XL; // 530
const PH = YB - YT; // 228
const YMAX = 600;

const toX = (i: number, n: number) => XL + (i / (n - 1)) * PW;
const toY = (k: number) => YB - (k / YMAX) * PH;

const LABELS = ["Jan 2023", "Jun 2023", "Jan 2024", "Jun 2024", "Jan 2025", "Jun 2025"];
const VALUES = [85, 155, 185, 185, 415, 505]; // K
const START_I = 3;

const pts = LABELS.map((lbl, i) => ({ lbl, x: toX(i, LABELS.length), y: toY(VALUES[i]) }));
const bPts = pts.slice(0, START_I + 1);
const aPts = pts.slice(START_I);

const bPath = bPts.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
const aPath = aPts.map((p, i) => `${i ? "L" : "M"} ${p.x} ${p.y}`).join(" ");
const aArea = `${aPath} L ${aPts[aPts.length - 1].x} ${YB} L ${aPts[0].x} ${YB} Z`;

const GRID_K = [600, 500, 400, 300, 200, 100, 0];

export default function ClientResults() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVis(true); io.disconnect(); }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const sp = pts[START_I];

  return (
    <section ref={ref} className="bg-midnight py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Full-width header ── */}
        <div className="mb-8">
          <span
            className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-4"
            style={{ opacity: vis ? 1 : 0, transition: "opacity 0.5s ease 0.1s" }}
          >
            Client Results
          </span>
          <h2
            className="text-4xl font-black text-ice leading-tight"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "none" : "translateY(16px)",
              transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            }}
          >
            Results we&apos;re accountable to.
          </h2>
        </div>

        {/* ── Full-width client labels strip ── */}
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-2 pb-8 mb-10 border-b border-midnight-muted"
          style={{ opacity: vis ? 1 : 0, transition: "opacity 0.5s ease 0.32s" }}
        >
          {results.map((r, i) => (
            <span key={r.label} className="flex items-center gap-6">
              {i > 0 && <span className="w-px h-4 bg-midnight-muted shrink-0" />}
              <span className="text-[11px] font-black uppercase tracking-[0.2em] text-ice-muted whitespace-nowrap">
                {r.label}
              </span>
            </span>
          ))}
        </div>

        {/* ── Chart (left, dominant) + Quote cards (right) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[60%_1fr] gap-10 items-start">

          {/* Chart */}
          <div style={{ opacity: vis ? 1 : 0, transition: "opacity 0.7s ease 0.35s" }}>
            <svg viewBox={`0 0 ${VW} ${VH}`} className="w-full" aria-hidden="true">

              {/* Annotation — clear above the 600K grid line */}
              <text x={XR} y={YT - 10} textAnchor="end" fill="#3e3e55" fontSize="9.5" letterSpacing="0.4">
                Average Organic Traffic over Time
              </text>

              {/* Y-axis grid lines + labels */}
              {GRID_K.map((k) => {
                const y = toY(k);
                return (
                  <g key={k}>
                    <line x1={XL} y1={y} x2={XR} y2={y} stroke="#2a2a35" strokeWidth="1" />
                    <text x={XL - 7} y={y + 4} textAnchor="end" fill="#3e3e55" fontSize="9.5">
                      {k === 0 ? "0" : `${k}K`}
                    </text>
                  </g>
                );
              })}

              {/* Subtle yellow tint for the "after" region */}
              <rect x={sp.x} y={YT} width={XR - sp.x} height={YB - YT} fill="rgba(255,201,25,0.028)" />

              {/* X-axis labels */}
              {pts.map((p) => (
                <text key={p.lbl} x={p.x} y={YB + 17} textAnchor="middle" fill="#3e3e55" fontSize="9.5">
                  {p.lbl}
                </text>
              ))}

              {/* After area fill */}
              <path
                d={aArea}
                fill="rgba(255,201,25,0.07)"
                style={{ opacity: vis ? 1 : 0, transition: "opacity 0.9s ease 1.65s" }}
              />

              {/* Before line */}
              <path
                d={bPath}
                fill="none"
                stroke="#3a3a52"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                style={{
                  strokeDasharray: "1",
                  strokeDashoffset: vis ? "0" : "1",
                  transition: "stroke-dashoffset 1.4s cubic-bezier(0.16,1,0.3,1) 0.4s",
                }}
              />

              {/* After line */}
              <path
                d={aPath}
                fill="none"
                stroke="#FFC919"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength="1"
                style={{
                  strokeDasharray: "1",
                  strokeDashoffset: vis ? "0" : "1",
                  transition: "stroke-dashoffset 1.2s cubic-bezier(0.16,1,0.3,1) 1.55s",
                }}
              />

              {/* Before data circles (excluding shared START point) */}
              {bPts.slice(0, -1).map((p, i) => (
                <circle
                  key={`b${i}`}
                  cx={p.x} cy={p.y} r="4"
                  fill="#14141A" stroke="#3a3a52" strokeWidth="2"
                  style={{ opacity: vis ? 1 : 0, transition: `opacity 0.35s ease ${0.75 + i * 0.18}s` }}
                />
              ))}

              {/* After data circles (excluding shared START point) */}
              {aPts.slice(1).map((p, i) => (
                <circle
                  key={`a${i}`}
                  cx={p.x} cy={p.y} r="4"
                  fill="#14141A" stroke="#FFC919" strokeWidth="2"
                  style={{ opacity: vis ? 1 : 0, transition: `opacity 0.35s ease ${1.9 + i * 0.2}s` }}
                />
              ))}

              {/* START annotation */}
              <g style={{ opacity: vis ? 1 : 0, transition: "opacity 0.5s ease 1.25s" }}>
                <rect
                  x={sp.x - 12} y={sp.y - 55}
                  width="24" height="24" rx="3"
                  fill="#14141A" stroke="#FFC919" strokeWidth="1.5"
                />
                {/* I-beam cursor icon */}
                <line x1={sp.x} y1={sp.y - 51} x2={sp.x} y2={sp.y - 36} stroke="#FFC919" strokeWidth="1.8" />
                <line x1={sp.x - 4} y1={sp.y - 51} x2={sp.x + 4} y2={sp.y - 51} stroke="#FFC919" strokeWidth="1.3" />
                <line x1={sp.x - 4} y1={sp.y - 36} x2={sp.x + 4} y2={sp.y - 36} stroke="#FFC919" strokeWidth="1.3" />
                <text
                  x={sp.x} y={sp.y - 14}
                  textAnchor="middle" fill="#a8aac0"
                  fontSize="8.5" letterSpacing="2.5" fontWeight="700"
                >
                  START
                </text>
                <circle cx={sp.x} cy={sp.y} r="5" fill="#14141A" stroke="#FFC919" strokeWidth="2.5" />
              </g>

            </svg>
          </div>

          {/* Quote cards — aligned to the chart's plot area top */}
          <div className="space-y-6 lg:pt-8">
            {results.map((r, i) => (
              <div
                key={r.label}
                className="pl-5 border-l-2 border-yellow"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? "none" : "translateX(-12px)",
                  transition: `opacity 0.55s ease ${0.5 + i * 0.15}s, transform 0.55s ease ${0.5 + i * 0.15}s`,
                }}
              >
                <p className="text-sm text-ice leading-relaxed mb-2">{r.quote}</p>
                <span className="text-[10px] font-bold text-yellow uppercase tracking-widest">{r.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
