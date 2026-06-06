import Link from "next/link";
import Image from "next/image";
import HeroHeadline from "@/components/HeroHeadline";
import StatsSection from "@/components/StatsSection";
import ClientResults from "@/components/ClientResults";
import ServicesSection from "@/components/ServicesSection";




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
      `}</style>

      <div>
        {/* ── HERO ── */}
        <section
          className="relative min-h-[72vh] flex flex-col justify-between bg-midnight px-8 pt-8 pb-8 overflow-hidden"
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
        <StatsSection />

        {/* ── SERVICES ── */}
        <ServicesSection />

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
        <ClientResults />

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
