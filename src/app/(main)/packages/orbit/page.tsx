import type { Metadata } from "next";
import PackageHero from "@/components/PackageHero";
import PricingBanner from "@/components/PricingBanner";
import FeatureSection from "@/components/FeatureSection";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Orbit Package — Quorbit",
  description:
    "Total marketing command. Every channel, a dedicated team, enterprise reporting, and full attribution modeling. Our flagship offering for businesses ready to dominate. Starting at $12,000/month.",
  openGraph: {
    title: "Orbit Package — Quorbit",
    description:
      "Total marketing command. Nothing left on the table. Our flagship offering for businesses ready to dominate their market.",
    url: "https://quorbit.io/packages/orbit",
  },
  alternates: { canonical: "https://quorbit.io/packages/orbit" },
};

export default function OrbitPage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section
        className="relative bg-midnight pt-24 pb-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,201,25,0.07) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      >
        <div className="relative max-w-4xl mx-auto">
          <PackageHero
            badge="Orbit Package — Flagship"
            headline="Total Marketing Command. Nothing Left on the Table."
            subheadline="Our flagship offering. Every channel. A dedicated team. Enterprise reporting. Built for businesses that don't just want to grow — they want to dominate."
            price="From $12,000"
          />
        </div>
      </section>

      {/* ── PRICING BANNER ── */}
      <PricingBanner
        price="From $12,000"
        setupFee="$3,500"
        note="Orbit is scoped to your specific business. Final pricing reflects channel mix, team allocation, and reporting requirements. Schedule a call for a custom quote."
        background="light"
      />

      {/* ── PERFORMANCE MARKETING ── */}
      <FeatureSection
        badge="Performance Marketing"
        title="Unlimited platforms. Dedicated paid media strategist."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Everything in Ascent (Google, Meta, LinkedIn, Display, YouTube)",
            description:
              "Full active management across all Ascent channels — Google Search, Shopping, Meta, LinkedIn, Display, and YouTube — with the full optimization framework.",
          },
          {
            title: "Programmatic Advertising",
            description:
              "Demand-side platform (DSP) buying across premium inventory outside of walled gardens. Audience-first targeting with brand-safe placements and real-time bid optimization.",
          },
          {
            title: "Connected TV / OTT Advertising",
            description:
              "Video advertising on streaming platforms: Hulu, Peacock, Paramount+, and the broader OTT ecosystem. Reach your audience where they spend their screen time.",
          },
          {
            title: "Advanced Audience Modeling",
            description:
              "First-party data enrichment, predictive lookalike modeling, and custom intent audiences built from your CRM and site behavior data — not just platform defaults.",
          },
          {
            title: "Dedicated Paid Media Strategist",
            description:
              "A senior paid media strategist owns your account full-time. Not a generalist account manager — a specialist with direct platform expertise who drives your strategy.",
          },
          {
            title: "Unlimited Platforms",
            description:
              "Pinterest, Snapchat, TikTok, Reddit, X, Amazon — wherever your audience is, we can be there. No channel is off-limits.",
          },
        ]}
      />

      {/* ── EMAIL MARKETING ── */}
      <FeatureSection
        badge="Email Marketing"
        title="Full lifecycle. Every touchpoint. Fully automated."
        background="light"
        bordered
        items={[
          {
            title: "Everything in Ascent Email",
            description:
              "Welcome sequences, newsletter management, promotional campaigns, lifecycle automation flows, list segmentation and hygiene — all included and expanded.",
          },
          {
            title: "Advanced Behavioural Segmentation",
            description:
              "Micro-segmentation built on purchase frequency, product affinity, engagement recency, and predicted lifetime value. The right message to the right segment at exactly the right time.",
          },
          {
            title: "Predictive Analytics Integration",
            description:
              "Churn prediction, next purchase propensity, and revenue forecasting models integrated into your email triggers. Proactive campaigns — not just reactive sends.",
          },
          {
            title: "SMS Marketing Integration",
            description:
              "SMS sequences coordinated with email touchpoints. Abandoned cart recovery, flash sale alerts, shipping updates, and re-engagement — across both channels simultaneously.",
          },
          {
            title: "Dedicated Email Strategist",
            description:
              "A dedicated email strategist who owns your program end-to-end — strategy, execution, testing, and reporting. One person accountable for all email revenue.",
          },
        ]}
      />

      {/* ── SDR PROGRAM ── */}
      <FeatureSection
        badge="SDR Program"
        title="Account-based outbound at scale."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Everything in Ascent SDR (scaled to 100+ contacts/month)",
            description:
              "LinkedIn outbound prospecting, cold email sequences, lead qualification, and CRM integration — all scaled up and optimized from Ascent.",
          },
          {
            title: "Account-Based Marketing (ABM) Sequences",
            description:
              "Named account targeting with personalized multi-touch sequences across email, LinkedIn, and display retargeting. Coordinated campaigns built around your highest-value target accounts.",
          },
          {
            title: "Intent Data Integration",
            description:
              "Third-party intent signals (Bombora, G2, TechTarget) integrated into prospecting. Contact your target accounts when they&apos;re actively researching solutions like yours.",
          },
          {
            title: "CRM Buildout & Optimization",
            description:
              "If your CRM is a mess — or doesn&apos;t exist — we build it properly. Stage definitions, pipeline reporting, data hygiene, and automation rules that give you visibility into revenue.",
          },
          {
            title: "Sales Pipeline Reporting",
            description:
              "Monthly SDR report showing contacts reached, replies, meetings booked, qualified pipeline value, and revenue attributed to outbound — not just activity metrics.",
          },
        ]}
      />

      {/* ── SOCIAL MEDIA ── */}
      <FeatureSection
        badge="Social Media"
        title="All platforms. Full production. Social commerce."
        background="light"
        bordered
        items={[
          {
            title: "All Major Platforms",
            description:
              "Instagram, LinkedIn, Facebook, X, TikTok, YouTube Shorts, and Pinterest — managed with platform-native strategies for each, not repurposed content pushed everywhere.",
          },
          {
            title: "Unlimited Posts Per Month",
            description:
              "No arbitrary post limits. Publishing cadence driven by what the platform and your audience reward — not a number in a contract.",
          },
          {
            title: "Full Content Production",
            description:
              "Creative, copy, and video content fully produced on your behalf. Storyboards, briefs, direction, editing, and final delivery — the full production pipeline.",
          },
          {
            title: "Advanced Community Management",
            description:
              "Daily proactive community management: comments, DMs, social listening, influencer engagement, competitor monitoring, and crisis response protocols.",
          },
          {
            title: "Social Commerce Integration",
            description:
              "Instagram Shopping, TikTok Shop, Pinterest Buyable Pins, and Facebook Shops — fully set up, optimized, and managed. Your social channels become a direct revenue channel.",
          },
          {
            title: "Influencer Partnership Management",
            description:
              "End-to-end influencer management: identification, outreach, brief creation, contract negotiation, campaign execution, performance tracking, and reporting.",
          },
        ]}
      />

      {/* ── SEO ── */}
      <FeatureSection
        badge="SEO"
        title="Enterprise SEO. Content at scale. Authority built to last."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Everything in Ascent SEO",
            description:
              "Full technical SEO management, unlimited on-page optimization, keyword research, GSC management, competitor gap analysis, rank tracking, and link building — all continued and scaled.",
          },
          {
            title: "Content Production Team (8+ Articles/Month)",
            description:
              "A full content team: strategist, writer, editor, SEO reviewer, and publisher. 8+ long-form articles per month targeting high-value keyword clusters with depth your competitors can&apos;t match.",
          },
          {
            title: "Link Building at Scale",
            description:
              "Systematic authority acquisition: digital PR campaigns, editorial link placement, expert contributor programs, and strategic partnership links — all legitimate, all sustainable.",
          },
          {
            title: "International / Multilingual SEO",
            description:
              "If you&apos;re targeting multiple markets or languages: hreflang implementation, localized content strategy, international keyword research, and geo-targeted technical configuration.",
          },
          {
            title: "Dedicated SEO Strategist",
            description:
              "A dedicated senior SEO strategist owns your organic program. Responsible for traffic, rankings, and the content pipeline — with full accountability to organic revenue.",
          },
        ]}
      />

      {/* ── AEO/GEO ── */}
      <FeatureSection
        badge="AEO / GEO — AI Search"
        title="AI search domination across every platform."
        background="light"
        bordered
        items={[
          {
            title: "Everything in Ascent AEO/GEO",
            description:
              "Full AI search visibility management, structured data implementation, multi-platform optimization, and monthly AI visibility reporting — all continued and deepened.",
          },
          {
            title: "Knowledge Graph Optimization",
            description:
              "Entity establishment and optimization in Google&apos;s Knowledge Graph. Your brand, people, and products recognized as authoritative entities — not just crawled text.",
          },
          {
            title: "Entity SEO at Scale",
            description:
              "Structured data across your entire site. Every product, person, place, event, and FAQ properly marked up and cross-referenced for maximum AI and search engine comprehension.",
          },
          {
            title: "AI Platform Monitoring",
            description:
              "All major AI platforms monitored weekly: ChatGPT, Perplexity, Claude, Gemini, Copilot. Brand mentions, accuracy, sentiment, and citation patterns tracked and acted on.",
          },
          {
            title: "Dedicated AEO/GEO Strategist",
            description:
              "A strategist dedicated to AI search — one of the fastest-moving areas in digital marketing. You stay ahead of changes, not scrambling to catch up.",
          },
        ]}
      />

      {/* ── REPORTING ── */}
      <FeatureSection
        badge="Reporting & Strategy"
        title="Real-time visibility. Quarterly accountability."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Custom Real-Time Reporting Dashboard",
            description:
              "A bespoke dashboard built in your preferred BI tool (Looker Studio, Tableau, or Databox) showing all channels in one view — updated in real time, accessible 24/7.",
          },
          {
            title: "Bi-Weekly Strategy Calls",
            description:
              "Fortnightly calls with your dedicated account team. Performance review, strategic discussion, and next two weeks planned — so nothing waits a month to be addressed.",
          },
          {
            title: "Quarterly Business Reviews (QBR)",
            description:
              "Full QBR every 90 days: channel performance deep-dive, strategic roadmap for the next quarter, budget recommendations, and forward-looking projections.",
          },
          {
            title: "Executive Reporting",
            description:
              "A board-ready executive summary produced monthly — headline metrics, key wins, strategic outlook, and what it all means for your business. Designed for leadership, not marketers.",
          },
          {
            title: "Full Attribution Modeling",
            description:
              "Multi-touch attribution built to your business model. Data-driven attribution across all channels — so you know exactly which touchpoints are driving revenue, not just the last click.",
          },
          {
            title: "Dedicated Account Team",
            description:
              "A named team: Account Director, Channel Specialists, and a dedicated Strategist. Consistent, accountable, and invested in your outcomes — not rotated every quarter.",
          },
        ]}
      />

      {/* ── IDEAL CUSTOMER ── */}
      <section className="bg-midnight py-20 px-6 border-y border-midnight-muted">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">
              Who Orbit Is Built For
            </h2>
          </ScrollReveal>
          <ul className="divide-y divide-midnight-muted">
            {[
              "Established businesses with $10M+ in annual revenue ready for complete marketing ownership",
              "Companies with a monthly marketing budget of $50,000+ seeking coordinated enterprise execution",
              "Brands that have outgrown a fragmented agency-per-channel model and need everything unified",
              "Businesses with complex, multi-channel customer journeys requiring full attribution visibility",
              "Companies preparing for aggressive market expansion, category leadership, or a funding round",
              "Founders and CMOs who want a true partner — not a vendor — accountable to business outcomes",
              "Organizations where marketing is a board-level priority and results need to be reported upward",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <li className="flex items-start gap-4 py-4">
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
                  <span className="text-sm text-ice-muted leading-relaxed">{item}</span>
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ── BEYOND ORBIT ── */}
      <section className="bg-midnight-light py-20 px-6 border-b border-midnight-muted">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-start gap-12">
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
                  Beyond Orbit
                </span>
                <h2 className="text-3xl font-black text-ice mb-5 leading-tight">
                  Enterprise. M&A. Market entry.
                </h2>
                <p className="text-ice-muted leading-relaxed mb-5">
                  Some engagements are bigger than a package. If you&apos;re navigating a merger or
                  acquisition, entering a new market, launching a new product category, or need
                  a bespoke enterprise marketing function built from the ground up — we work on
                  those too.
                </p>
                <p className="text-ice-muted leading-relaxed">
                  These engagements are scoped individually, priced accordingly, and run by a
                  senior team with direct experience in complex, high-stakes marketing environments.
                </p>
              </div>
              <div className="md:w-56 flex-shrink-0 space-y-3">
                {[
                  "Enterprise marketing programs",
                  "M&A brand integration strategy",
                  "New market entry playbooks",
                  "Investor pitch marketing audits",
                  "Fractional CMO engagements",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-3 border border-midnight-muted rounded-lg bg-midnight text-sm text-ice-muted flex items-center gap-2.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-yellow flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-6 bg-midnight-light border-t border-midnight-muted">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
              Get Started
            </span>
            <div className="w-12 h-0.5 bg-yellow mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-black text-ice mb-5 leading-tight">
              Ready for total marketing command?
            </h2>
            <p className="text-ice-muted text-lg mb-10 leading-relaxed">
              Schedule a call with a senior strategist. We&apos;ll scope Orbit to your specific
              business, present a custom program, and give you a clear picture of what complete
              marketing ownership looks like — and what it delivers.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-yellow text-midnight font-bold px-8 py-4 rounded-lg hover:bg-yellow-dark transition-all text-sm"
            >
              Schedule My Strategy Call
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <p className="text-xs text-ice-muted mt-5">
              No commitment. A direct conversation with someone who&apos;s built this before.
            </p>
            <div className="mt-8 pt-8 border-t border-midnight-muted">
              <p className="text-xs text-ice-muted mb-3">Compare packages</p>
              <div className="flex items-center justify-center gap-6">
                <Link
                  href="/packages/ascent"
                  className="text-xs text-ice-muted hover:text-yellow transition-colors"
                >
                  ← Ascent
                </Link>
                <span className="w-px h-3 bg-midnight-muted" />
                <Link
                  href="/packages"
                  className="text-xs text-ice-muted hover:text-yellow transition-colors"
                >
                  All Packages
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
