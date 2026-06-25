import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PackageCard from "@/components/PackageCard";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Packages — Quorbit",
  description:
    "Three performance-driven marketing packages — Launch, Ascent, and Orbit — built for different stages of business growth. Compare and choose your orbit.",
  openGraph: {
    title: "Packages — Quorbit",
    description:
      "Three performance-driven marketing packages built for different stages of growth. Every channel, fully coordinated.",
    url: "https://quorbit.io/packages",
  },
  alternates: { canonical: "https://quorbit.io/packages" },
};

const cards = [
  {
    name: "Launch",
    tagline: "Start Smart. Start Strong.",
    price: "$1,200",
    description:
      "The essential digital marketing foundation for businesses ready to stop guessing and start growing. Paid media, social, SEO, and AEO/GEO — coordinated from day one.",
    features: [
      "Google Search & Shopping + Meta Ads",
      "Social media management (2 platforms)",
      "Technical SEO + on-page optimization",
      "AEO/GEO — AI search visibility",
      "Monthly performance reporting",
    ],
    href: "/packages/launch",
    featured: false,
  },
  {
    name: "Ascent",
    tagline: "Scale With Precision.",
    price: "$2,100",
    description:
      "The complete growth stack for ambitious businesses. Paid media, email marketing, SDR outreach, social, SEO, and AEO/GEO — working in perfect coordination.",
    features: [
      "Everything in Launch",
      "Full lifecycle email marketing",
      "SDR outbound program (50 contacts/mo)",
      "LinkedIn advertising & marketing",
      "Advanced SEO with content production",
      "Voice search & AI answer optimization",
    ],
    href: "/packages/ascent",
    featured: true,
  },
  {
    name: "Orbit",
    tagline: "Total Marketing Command.",
    price: "$3,500",
    description:
      "Our flagship offering. Every channel. A dedicated team. Enterprise reporting. Built for businesses that don't just want to grow — they want to dominate.",
    features: [
      "Everything in Ascent",
      "Programmatic & CTV advertising",
      "ABM outbound (100+ contacts/mo)",
      "Custom real-time reporting dashboard",
      "Quarterly business reviews (QBR)",
      "Dedicated account team",
      "Full attribution modeling",
    ],
    href: "/packages/orbit",
    featured: false,
  },
];

const roiStats = [
  { metric: "3×", label: "Average ROAS", sub: "across managed ad accounts" },
  { metric: "140%", label: "Organic traffic growth", sub: "average within 12 months" },
  { metric: "$94K", label: "Pipeline generated", sub: "average per SDR quarter" },
  { metric: "60 days", label: "Time to first results", sub: "from kickoff to measurable lift" },
];

export default function PackagesPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-6">
            Packages
          </span>
          <div className="w-12 h-0.5 bg-yellow mb-7" />
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-ice mb-7 max-w-3xl">
            Choose Your Orbit.
          </h1>
          <p className="text-lg text-ice-muted leading-relaxed mb-10 max-w-xl">
            Three performance-driven packages built for different stages of growth. Every channel,
            fully coordinated under one roof.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-6 py-3.5 rounded-lg hover:bg-yellow-dark transition-all text-sm"
            >
              Schedule a Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="#compare"
              className="inline-flex items-center gap-2 border border-midnight-muted text-ice hover:border-yellow/40 hover:text-yellow font-bold px-6 py-3.5 rounded-lg transition-all text-sm"
            >
              Compare All Packages
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO + AEO/GEO HIGHLIGHT ── */}
      <section className="bg-midnight-light border-y border-midnight-muted py-20 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl font-black text-ice leading-tight mb-6">
              SEO + AEO/GEO in every package.
            </h2>
            <p className="text-ice-muted leading-relaxed mb-6">
              Traditional SEO gets you found on Google. But search is changing fast — AI tools like
              ChatGPT, Perplexity, and Gemini are now a primary discovery layer for millions of
              buyers. We call this AEO/GEO: <strong className="text-ice">Answer Engine Optimization</strong> and{" "}
              <strong className="text-ice">Generative Engine Optimization</strong>.
            </p>
            <p className="text-ice-muted leading-relaxed">
              Every Quorbit package includes both traditional SEO and AI search visibility as
              standard — not as an add-on. Because your competitors are already there.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="space-y-4">
              {[
                {
                  label: "Traditional SEO",
                  desc: "Google rankings, organic traffic, on-page optimization, link building",
                },
                {
                  label: "AEO — Answer Engine Optimization",
                  desc: "Structured data, schema markup, featured snippet targeting, voice search",
                },
                {
                  label: "GEO — Generative Engine Optimization",
                  desc: "AI answer optimization for ChatGPT, Perplexity, Gemini, and beyond",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="p-5 border border-midnight-muted rounded-xl bg-midnight hover:border-yellow/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-4 h-4 text-yellow flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="text-sm font-bold text-ice mb-1">{item.label}</p>
                      <p className="text-xs text-ice-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── PACKAGE CARDS ── */}
      <section className="bg-midnight py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-4">
                Our Packages
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-ice">
                Three tiers. One mission.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {cards.map((card, i) => (
              <ScrollReveal key={card.name} delay={i * 0.1}>
                <PackageCard {...card} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPARISON TABLE ── */}
      <section
        id="compare"
        className="bg-midnight-light border-y border-midnight-muted py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-4">
                Full Comparison
              </span>
              <h2 className="text-3xl font-black text-ice mb-3">
                See exactly what&apos;s included.
              </h2>
              <p className="text-ice-muted max-w-xl">
                No hidden tiers. No fine print. Every deliverable listed so you can make a
                clear, informed decision.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="border border-midnight-muted rounded-xl overflow-hidden">
              <ComparisonTable />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── ROI SECTION ── */}
      <section className="bg-midnight py-20 px-6 border-b border-midnight-muted">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-4">
                The Numbers
              </span>
              <h2 className="text-3xl font-black text-ice">What our clients actually see.</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 border border-midnight-muted rounded-xl overflow-hidden">
            {roiStats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div
                  className={`p-8 flex flex-col items-center text-center hover:bg-midnight-light transition-colors ${
                    i < roiStats.length - 1
                      ? "border-r border-b lg:border-b-0 border-midnight-muted"
                      : ""
                  } ${i === 1 ? "border-r-0 lg:border-r border-midnight-muted" : ""}`}
                >
                  <span className="text-4xl font-black text-yellow tabular-nums mb-2">
                    {stat.metric}
                  </span>
                  <span className="text-sm font-bold text-ice mb-1">{stat.label}</span>
                  <span className="text-xs text-ice-muted">{stat.sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CUSTOM ENGAGEMENT ── */}
      <section className="bg-midnight-light py-20 px-6 border-b border-midnight-muted">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-start gap-12">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
                  Not Sure Which Fits?
                </span>
                <h2 className="text-3xl font-black text-ice mb-5 leading-tight">
                  We build custom engagements too.
                </h2>
                <p className="text-ice-muted leading-relaxed mb-6">
                  Every business is different. If your needs don&apos;t map cleanly to a package —
                  different channel mix, unusual stack, aggressive timeline, or budget between
                  tiers — we&apos;ll scope something bespoke.
                </p>
                <p className="text-ice-muted leading-relaxed">
                  Schedule a 30-minute strategy call. We&apos;ll ask the right questions, give
                  you an honest read, and tell you exactly what a custom program would look like
                  for your specific situation.
                </p>
              </div>
              <div className="md:w-64 flex-shrink-0">
                <div className="border border-midnight-muted rounded-xl p-6 bg-midnight">
                  <p className="text-xs font-bold uppercase tracking-widest text-ice-muted mb-4">
                    Custom Engagement
                  </p>
                  <ul className="space-y-3 mb-6">
                    {[
                      "Bespoke channel selection",
                      "Flexible contract terms",
                      "Custom reporting cadence",
                      "Dedicated senior strategist",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-ice-muted">
                        <svg
                          className="w-3.5 h-3.5 text-yellow flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/schedule-a-call"
                    className="flex items-center justify-center gap-2 bg-yellow text-midnight font-bold px-5 py-3 rounded-lg hover:bg-yellow-dark transition-all text-sm w-full"
                  >
                    Let&apos;s Talk
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-midnight-light py-28 px-6 border-t border-midnight-muted">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
              Get Started
            </span>
            <div className="w-12 h-px bg-yellow mx-auto mb-8" />
            <h2 className="text-5xl sm:text-6xl font-black text-ice leading-tight mb-5">
              Ready to enter orbit?
            </h2>
            <p className="text-ice-muted text-lg leading-relaxed mb-10 max-w-md">
              Schedule a free 30-minute strategy call. We&apos;ll match you to the right package
              and give you a clear path forward.
            </p>
            <Link
              href="/schedule-a-call"
              className="inline-flex items-center gap-3 bg-yellow text-midnight font-bold px-8 py-4 text-sm uppercase tracking-widest hover:bg-yellow-dark transition-colors"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5 tracking-wide">
              No commitment. No sales pitch. Just a real conversation.
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
