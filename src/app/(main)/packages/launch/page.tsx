import type { Metadata } from "next";
import PackageHero from "@/components/PackageHero";
import PricingBanner from "@/components/PricingBanner";
import FeatureSection from "@/components/FeatureSection";
import UpgradePath from "@/components/UpgradePath";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Launch Package — Quorbit",
  description:
    "The essential digital marketing foundation for businesses ready to grow. Paid media, social, SEO, and AEO/GEO — coordinated from day one. Starting at $3,500/month.",
  openGraph: {
    title: "Launch Package — Quorbit",
    description:
      "Start smart. Start strong. Performance marketing, social media, SEO, and AI search optimization — all coordinated from day one.",
    url: "https://quorbit.io/packages/launch",
  },
  alternates: { canonical: "https://quorbit.io/packages/launch" },
};

export default function LaunchPage() {
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
          <PackageHero
            badge="Launch Package"
            headline="Launch Your Digital Presence the Right Way."
            subheadline="Performance-driven marketing fundamentals for businesses ready to stop guessing and start growing. Paid media, social, SEO, and AEO/GEO — coordinated from day one."
            price="$3,500"
          />
        </div>
      </section>

      {/* ── PRICING BANNER ── */}
      <PricingBanner
        price="$3,500"
        setupFee="$1,500"
        note="Setup covers onboarding, account audits, strategy development, and campaign buildout."
        background="light"
      />

      {/* ── PERFORMANCE MARKETING ── */}
      <FeatureSection
        badge="Performance Marketing"
        title="Paid media that works from week one."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Google Search & Shopping",
            description:
              "Keyword research, ad copy creation, campaign structure, bid strategy, and ongoing weekly optimization. Every dollar tracked back to conversions.",
          },
          {
            title: "Meta Advertising (Facebook + Instagram)",
            description:
              "Audience targeting, creative direction, A/B testing of ad sets, and conversion optimization across the full Meta placement network.",
          },
          {
            title: "Ad Copy & Creative Direction",
            description:
              "We write the copy. We direct the creative. We test the combinations. Your job is approving — not producing.",
          },
          {
            title: "Weekly Bid Management & Budget Allocation",
            description:
              "Active bid management every week. Budget shifts to what's performing. Underperformers paused or restructured.",
          },
          {
            title: "Monthly Performance Report",
            description:
              "One clear report covering spend, impressions, clicks, conversions, ROAS, and key takeaways — with the next month's plan included.",
          },
        ]}
      />

      {/* ── SOCIAL MEDIA ── */}
      <FeatureSection
        badge="Social Media"
        title="Consistent presence on the platforms that matter."
        background="light"
        bordered
        items={[
          {
            title: "2 Social Platforms",
            description:
              "We focus on the two platforms where your audience actually is — typically Instagram and LinkedIn, or Instagram and Facebook depending on your business.",
          },
          {
            title: "8 Posts Per Platform Per Month",
            description:
              "Content calendar, copywriting, and creative direction included. Posts planned around your brand voice and commercial objectives.",
          },
          {
            title: "Content Calendar & Scheduling",
            description:
              "A full monthly content calendar delivered in advance for your review and approval. Scheduled and posted on your behalf.",
          },
          {
            title: "Basic Community Management",
            description:
              "Response to comments and direct messages during business hours. Brand voice maintained consistently across interactions.",
          },
          {
            title: "Hashtag & Engagement Strategy",
            description:
              "Platform-specific hashtag research and engagement tactics to organically extend reach beyond your existing follower base.",
          },
        ]}
      />

      {/* ── SEO ── */}
      <FeatureSection
        badge="SEO"
        title="Organic visibility built to compound over time."
        background="dark"
        bordered={false}
        items={[
          {
            title: "Technical SEO Audit & Fixes",
            description:
              "Full crawl of your site to identify and resolve technical issues: page speed, indexation errors, canonical tags, broken links, Core Web Vitals.",
          },
          {
            title: "On-Page Optimization (Up to 10 Pages)",
            description:
              "Title tags, meta descriptions, heading structure, internal linking, and content optimization across your highest-priority pages.",
          },
          {
            title: "Keyword Research & Mapping",
            description:
              "Complete keyword universe research. Priority keywords mapped to existing and new pages. Search intent matched to content.",
          },
          {
            title: "Monthly Rank Tracking Report",
            description:
              "Monthly reporting on keyword positions, organic traffic trends, and visibility scores — so you always know where you stand in search.",
          },
          {
            title: "Google Search Console Management",
            description:
              "Active management of your GSC account. Indexing requests, performance monitoring, and structured data validation.",
          },
        ]}
      />

      {/* ── AEO/GEO ── */}
      <FeatureSection
        badge="AEO / GEO — AI Search"
        title="Get found where buyers are searching next."
        background="light"
        bordered
        items={[
          {
            title: "AI Search Visibility Audit",
            description:
              "Baseline assessment of how your brand currently appears — or doesn't — in AI-generated answers on ChatGPT, Perplexity, Google AI Overview, and Gemini.",
          },
          {
            title: "Structured Data & Schema Markup",
            description:
              "Implementation of schema.org markup across key pages: Organization, Product, FAQ, HowTo, and Article schemas that help AI systems understand and cite your content.",
          },
          {
            title: "AI Answer Optimization",
            description:
              "Content structuring and rewriting to match the response patterns of AI engines. Answers written for humans and machines simultaneously.",
          },
          {
            title: "Featured Snippet Targeting",
            description:
              "Specific content formats (tables, numbered lists, definition blocks) that earn featured snippets on Google — and often feed directly into AI answers.",
          },
          {
            title: "Monthly AI Visibility Report",
            description:
              "Monthly tracking of AI search presence: how often your brand appears in AI-generated answers, for which queries, and how that's trending.",
          },
        ]}
      />

      {/* ── IDEAL CUSTOMER ── */}
      <section className="bg-midnight py-20 px-6 border-y border-midnight-muted">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl font-black text-ice mb-10 border-b border-midnight-muted pb-5">
              Who Launch Is Built For
            </h2>
          </ScrollReveal>
          <ul className="divide-y divide-midnight-muted">
            {[
              "Startups and early-stage businesses generating $200K–$2M/year in revenue",
              "Businesses with a monthly ad budget of $3,000–$15,000 ready for professional management",
              "Founders taking digital marketing seriously for the first time",
              "Businesses transitioning from DIY or generalist freelancers to a coordinated agency",
              "Companies that need measurable results quickly without overcomplicating the marketing stack",
              "Brands with a clear product or service and a defined target customer — but no consistent acquisition engine",
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

      {/* ── UPGRADE PATH ── */}
      <UpgradePath
        message="When you're ready to layer in email marketing, SDR outbound, and multi-platform expansion, Ascent is the natural next step — built on exactly what Launch established."
        nextPackage="Ascent"
        nextHref="/packages/ascent"
        nextDescription="Email marketing, SDR outreach, LinkedIn advertising, and advanced SEO."
      />

      {/* ── BOTTOM CTA ── */}
      <section className="py-28 px-6 bg-midnight-light border-t border-midnight-muted">
        <div className="max-w-2xl mx-auto text-center">
          <ScrollReveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-yellow block mb-5">
              Get Started
            </span>
            <div className="w-12 h-0.5 bg-yellow mx-auto mb-8" />
            <h2 className="text-3xl sm:text-4xl font-black text-ice mb-5 leading-tight">
              Ready to launch your growth engine?
            </h2>
            <p className="text-ice-muted text-lg mb-10 leading-relaxed">
              Schedule a free 30-minute strategy call. We&apos;ll assess your current marketing,
              identify the highest-leverage opportunities, and show you exactly what Launch looks
              like for your business.
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
              No commitment. No sales pressure. A direct conversation about your growth.
            </p>
            <div className="mt-8 pt-8 border-t border-midnight-muted">
              <p className="text-xs text-ice-muted mb-3">Compare packages</p>
              <div className="flex items-center justify-center gap-6">
                <Link href="/packages" className="text-xs text-ice-muted hover:text-yellow transition-colors">
                  ← All Packages
                </Link>
                <span className="w-px h-3 bg-midnight-muted" />
                <Link href="/packages/ascent" className="text-xs text-ice-muted hover:text-yellow transition-colors">
                  Ascent →
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
