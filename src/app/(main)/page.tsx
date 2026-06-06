import Link from "next/link";
import Image from "next/image";
import HeroHeadline from "@/components/HeroHeadline";
import StatCounter from "@/components/StatCounter";

const stats = [
  { number: "3×", label: "Average revenue lift", sub: "in 6 months" },
  { number: "140%", label: "Organic traffic growth", sub: "within 12 months" },
  { number: "31%", label: "Paid CAC reduction", sub: "first 60 days" },
  { number: "$94K", label: "Monthly revenue", sub: "scaled from $28K" },
];

const services = [
  {
    num: "01",
    title: "Performance Marketing",
    desc: "Full-funnel paid media across Google, Meta, LinkedIn, and YouTube. Every dollar traceable to a real outcome.",
    href: "/services/performance-marketing",
  },
  {
    num: "02",
    title: "E-Commerce Management",
    desc: "Platform management, catalog optimization, and performance advertising — built to scale monthly revenue.",
    href: "/services/ecommerce",
  },
  {
    num: "03",
    title: "All-in-One Digital Marketing",
    desc: "SEO, paid media, email, and social under one strategy. When channels share data, results compound.",
    href: "/services/all-in-one",
  },
  {
    num: "04",
    title: "Website & Automation",
    desc: "Websites, CRM, and automation systems built and integrated. Turn traffic into revenue — automatically.",
    href: "/services/website-automation",
  },
];

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

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .marquee-inner {
          display: flex;
          width: max-content;
          animation: marquee 30s linear infinite;
        }
        .svc-row {
          position: relative;
          transition: background-color 0.2s;
        }
        .svc-row::before {
          content: '';
          position: absolute;
          left: -1.5rem;
          top: 0; bottom: 0;
          width: 2px;
          background: #FFC919;
          opacity: 0;
          transition: opacity 0.2s;
        }
        .svc-row:hover { background-color: rgba(255,201,25,0.03); }
        .svc-row:hover::before { opacity: 1; }
        .svc-row:hover .svc-title { color: #FFC919; }
        .svc-title { transition: color 0.2s; }
        .svc-arrow { transition: transform 0.2s; }
        .svc-row:hover .svc-arrow { transform: translateX(5px); }
      `}</style>

      <div>
        {/* ── HERO ── */}
        <section
          className="relative min-h-[90vh] flex flex-col justify-between bg-midnight px-8 pt-12 pb-10 overflow-hidden"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.07) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        >
          <HeroHeadline />

          {/* Bottom row */}
          <div className="flex items-center justify-between border-t border-midnight-muted pt-6">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-ice-muted">Business Simplified™</span>
            <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-ice-muted">
              Scroll to explore
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </div>
        </section>

        {/* ── MARQUEE TICKER ── */}
        <div className="bg-yellow overflow-hidden py-3 border-y border-yellow">
          <div className="marquee-inner">
            {[0, 1].map((i) => (
              <span key={i} className="flex whitespace-nowrap">
                {["Performance Marketing", "E-Commerce Management", "SEO & Content", "Email Marketing", "Social Media", "Marketing Automation", "Website Development", "Paid Media"].map((item) => (
                  <span key={item} className="text-midnight text-[11px] font-black uppercase tracking-[0.18em] px-7">
                    {item} <span className="opacity-30 ml-7">·</span>
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        {/* ── STATS ── */}
        <section className="bg-midnight py-16 px-6">
          <div className="max-w-6xl mx-auto border border-midnight-muted">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-midnight-muted md:divide-y-0 md:divide-x divide-midnight-muted">
              {stats.map((s) => (
                <StatCounter key={s.label} number={s.number} label={s.label} sub={s.sub} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES EDITORIAL LIST ── */}
        <section id="services" className="bg-midnight-light py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-end justify-between mb-10 border-b border-midnight-muted pb-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-3">Services</span>
                <h2 className="text-4xl font-black text-ice">The full orbit.</h2>
              </div>
              <Link href="/contact" className="text-sm font-semibold text-ice-muted hover:text-yellow transition-colors flex items-center gap-2 shrink-0 pb-1">
                Discuss your scope
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="divide-y divide-midnight-muted border-b border-midnight-muted">
              {services.map((svc) => (
                <Link key={svc.href} href={svc.href} className="block">
                  <div className="svc-row flex items-center gap-6 py-7 px-6 -mx-6 cursor-pointer">
                    <span className="text-xs font-bold text-ice-muted w-8 shrink-0">{svc.num}</span>
                    <span className="svc-title text-xl font-black text-ice flex-1">{svc.title}</span>
                    <span className="text-sm text-ice-muted leading-relaxed max-w-xs hidden md:block">{svc.desc}</span>
                    <svg className="svc-arrow w-5 h-5 text-ice-muted shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── BOLD STATEMENT ── */}
        <section className="bg-midnight py-28 px-6 border-y border-midnight-muted">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-4xl sm:text-5xl font-black text-ice leading-tight">
              Most marketing fails not because of bad products —
            </p>
            <p className="text-4xl sm:text-5xl font-black text-yellow leading-tight mt-2">
              because of bad coordination.
            </p>
          </div>
        </section>

        {/* ── SPLIT IMAGE + TEXT ── */}
        <section className="bg-midnight-light overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
            <div className="relative min-h-[420px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                alt="Data analytics"
                fill
                className="object-cover opacity-50"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-midnight-light/70" />
            </div>
            <div className="py-20 px-12 lg:px-16 flex flex-col justify-center border-l-4 border-yellow">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow mb-5 block">Data-Driven Execution</span>
              <h2 className="text-3xl font-black text-ice leading-tight mb-8">
                Every dollar. Every channel. Fully accountable.
              </h2>
              <ul className="space-y-5">
                {[
                  "Real-time performance dashboards",
                  "Revenue-attributed reporting across all channels",
                  "Weekly optimization cycles with full transparency",
                  "Unified cross-channel view in one report",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-sm text-ice-muted">
                    <span className="w-px h-4 bg-yellow shrink-0 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CLIENT RESULTS ── */}
        <section className="bg-midnight py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-3">Client Results</span>
              <h2 className="text-4xl font-black text-ice">Results we&apos;re accountable to.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-midnight-muted border border-midnight-muted">
              {results.map((r) => (
                <div key={r.label} className="bg-midnight p-10 flex flex-col justify-between gap-8">
                  <p className="text-lg font-semibold text-ice leading-relaxed">{r.quote}</p>
                  <span className="text-xs font-bold text-yellow uppercase tracking-widest">{r.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-midnight-light py-28 px-6 border-t border-midnight-muted">
          <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow mb-5 block">Get Started</span>
            <div className="w-12 h-px bg-yellow mb-8" />
            <h2 className="text-5xl sm:text-6xl font-black text-ice leading-tight mb-5">
              Ready to enter orbit?
            </h2>
            <p className="text-ice-muted text-lg leading-relaxed mb-10 max-w-md">
              Schedule a free 30-minute strategy call. We&apos;ll bring an honest read and a clear path forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-yellow text-midnight font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5 tracking-wide">No commitment. No sales pitch. Just a real conversation.</p>
          </div>
        </section>
      </div>
    </>
  );
}
