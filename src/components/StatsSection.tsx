"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: "3×",   label: "Average revenue lift",   sub: "in 6 months" },
  { number: "140%", label: "Organic traffic growth",  sub: "within 12 months" },
  { number: "31%",  label: "Paid CAC reduction",      sub: "first 60 days" },
  { number: "$94K", label: "Monthly revenue",         sub: "scaled from $28K" },
];

function parse(raw: string) {
  const prefix = raw.startsWith("$") ? "$" : "";
  const stripped = raw.replace("$", "");
  const suffix = stripped.replace(/[0-9.]/g, "");
  const value = parseFloat(stripped.replace(/[^0-9.]/g, "")) || 0;
  return { prefix, value, suffix };
}

function StatCell({
  number, label, sub, delay, visible,
}: {
  number: string; label: string; sub: string; delay: number; visible: boolean;
}) {
  const { prefix, value, suffix } = parse(number);
  const [display, setDisplay] = useState(0);
  const [counting, setCounting] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => setCounting(true), delay + 150);
    return () => clearTimeout(t);
  }, [visible, delay]);

  useEffect(() => {
    if (!counting) return;
    const steps = 60;
    let step = 0;
    const t = setInterval(() => {
      step++;
      const eased = 1 - Math.pow(1 - step / steps, 3);
      setDisplay(Math.round(eased * value));
      if (step >= steps) clearInterval(t);
    }, 1400 / steps);
    return () => clearInterval(t);
  }, [counting, value]);

  return (
    <div
      className="group p-8 lg:p-10 transition-colors duration-300 hover:bg-midnight-light"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(22px)",
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms, background-color 0.25s`,
      }}
    >
      <div
        className="text-4xl sm:text-5xl lg:text-6xl font-black text-yellow leading-none tracking-tight tabular-nums mb-3 transition-transform duration-300 origin-left group-hover:scale-[1.04]"
      >
        {prefix}{display}{suffix}
      </div>
      <div className="text-sm font-semibold text-ice leading-snug">{label}</div>
      <div className="text-xs text-ice-muted mt-1">{sub}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-midnight py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-12 lg:gap-20 items-center">

        {/* ── Left: heading + description + CTA ── */}
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "none" : "translateX(-28px)",
            transition: "opacity 0.65s ease 0.05s, transform 0.65s ease 0.05s",
          }}
        >
          <h2 className="text-5xl lg:text-6xl font-black text-ice leading-[1.06] tracking-tight mb-6">
            Growth you can<br />put a number on.
          </h2>
          <p className="text-ice-muted text-base leading-relaxed mb-8 max-w-[17rem]">
            Real campaigns, real clients, and measurable outcomes — tracked from day one.
          </p>
          <Link
            href="/contact"
            className="group/btn inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-7 py-3.5 text-sm uppercase tracking-widest rounded-full hover:bg-yellow-dark transition-colors"
          >
            Start a Project
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5"
              fill="none" stroke="currentColor" viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* ── Right: 2×2 stats grid ── */}
        <div className="grid grid-cols-2">
          <div className="border-b border-r border-midnight-muted">
            <StatCell {...stats[0]} delay={80}  visible={vis} />
          </div>
          <div className="border-b border-midnight-muted">
            <StatCell {...stats[1]} delay={160} visible={vis} />
          </div>
          <div className="border-r border-midnight-muted">
            <StatCell {...stats[2]} delay={240} visible={vis} />
          </div>
          <div>
            <StatCell {...stats[3]} delay={320} visible={vis} />
          </div>
        </div>

      </div>
    </section>
  );
}
