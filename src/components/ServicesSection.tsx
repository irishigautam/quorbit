"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    num: "01",
    title: "Performance Marketing",
    desc: "Full-funnel paid media across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a real outcome.",
    href: "/services/performance-marketing",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    num: "02",
    title: "E-Commerce Management",
    desc: "Platform management, catalog optimization, and performance advertising — built to scale monthly revenue.",
    href: "/services/ecommerce",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
  },
  {
    num: "03",
    title: "All-in-One Digital Marketing",
    desc: "SEO, paid media, email, and social under one strategy. When channels share data, results compound.",
    href: "/services/all-in-one",
    img: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
  },
  {
    num: "04",
    title: "Website & Automation",
    desc: "Websites, CRM, and automation systems built and integrated. Turn traffic into revenue — automatically.",
    href: "/services/website-automation",
    img: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80",
  },
];

function ServiceRow({
  svc,
  index,
}: {
  svc: (typeof services)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <div
      ref={ref}
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "none" : "translateX(-40px)",
        transition: `opacity 0.65s ease ${index * 0.12}s, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
      }}
    >
      <Link href={svc.href} className="group/row block border-b border-midnight-muted">
        <div className="grid grid-cols-[3rem_1fr_auto] lg:grid-cols-[3rem_1fr_320px] items-center gap-6 lg:gap-10 py-8 px-0 transition-colors duration-200 hover:bg-yellow/[0.025] -mx-6 px-6">

          {/* Number */}
          <span className="text-xs font-bold text-ice-muted/50 tabular-nums self-start pt-1.5">
            {svc.num}
          </span>

          {/* Title + desc + link */}
          <div className="min-w-0">
            <h3 className="text-2xl lg:text-3xl text-ice leading-tight mb-3 transition-colors duration-200 group-hover/row:text-yellow">
              {svc.title}
            </h3>
            <p className="text-sm text-ice-muted leading-relaxed max-w-sm mb-4 hidden md:block">
              {svc.desc}
            </p>
            <span className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-ice-muted group-hover/row:text-yellow transition-colors duration-200">
              Explore Now
              <svg
                className="w-3 h-3 transition-transform duration-200 group-hover/row:translate-x-1"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>

          {/* Image panel */}
          <div className="hidden lg:block relative h-[140px] w-full overflow-hidden rounded-sm">
            <Image
              src={svc.img}
              alt={svc.title}
              fill
              className="object-cover opacity-40 scale-100 transition-all duration-500 group-hover/row:opacity-65 group-hover/row:scale-105"
              sizes="320px"
            />
            <div className="absolute inset-0 bg-linear-to-r from-midnight-light/60 to-transparent" />
          </div>

        </div>
      </Link>
    </div>
  );
}

export default function ServicesSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVis, setHeaderVis] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setHeaderVis(true); io.disconnect(); } },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="services" className="bg-midnight-light py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div
          ref={headerRef}
          className="grid grid-cols-1 lg:grid-cols-[1fr_auto] items-end gap-6 pb-10 border-b border-midnight-muted mb-0"
        >
          <div
            style={{
              opacity: headerVis ? 1 : 0,
              transform: headerVis ? "none" : "translateY(18px)",
              transition: "opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s",
            }}
          >
            <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-yellow mb-4">
              <span className="w-2 h-2 bg-yellow inline-block" />
              What We Can Do
            </span>
            <h2 className="text-4xl lg:text-5xl text-ice leading-tight max-w-lg">
              Beyond platforms —<br />
              we build, grow, and scale<br />
              your digital presence.
            </h2>
          </div>

          <div
            style={{
              opacity: headerVis ? 1 : 0,
              transform: headerVis ? "none" : "translateY(18px)",
              transition: "opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s",
            }}
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow hover:bg-yellow-dark text-midnight text-xs font-black px-6 py-3 rounded-full uppercase tracking-widest transition-colors duration-200"
            >
              Discuss Your Scope
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* ── Service rows ── */}
        <div>
          {services.map((svc, i) => (
            <ServiceRow key={svc.href} svc={svc} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
